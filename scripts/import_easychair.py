#!/usr/bin/env python3
"""Import accepted papers from EasyChair submission-page HTML exports.

The generated JavaScript contains public paper metadata only. Author emails are
intentionally ignored. If PDFs are present in the export directory, they are
copied into the website with descriptive filenames and linked from the generated
data. Existing public PDFs are reused when the export contains only HTML.
"""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from html.parser import HTMLParser
from pathlib import Path

from easychair_summary import print_summary
from paper_pdfs import link_pdf


VOID_ELEMENTS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "param", "source", "track", "wbr",
}

# Hand-maintained organization aliases found in EasyChair author affiliations.
# Keep Amazon and Amazon Web Services separate: they are useful distinct public
# affiliations, while "AWS" is simply a short form of Amazon Web Services.
AFFILIATION_ALIASES = {
    "Applied Scientist, Amazon": "Amazon",
    "AWS": "Amazon Web Services",
    "DoorDash": "DoorDash Inc.",
    "Meta Platforms": "Meta",
    "Target": "Target Corporation",
}


class Node:
    def __init__(self, tag: str = "", attrs: dict[str, str] | None = None):
        self.tag = tag
        self.attrs = attrs or {}
        self.children: list[Node | str] = []

    def descendants(self, tag: str):
        for child in self.children:
            if isinstance(child, Node):
                if child.tag == tag:
                    yield child
                yield from child.descendants(tag)

    def text(self) -> str:
        value = " ".join(
            child.text() if isinstance(child, Node) else child
            for child in self.children
        )
        return " ".join(value.split())


class TreeParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, dict(attrs))
        self.stack[-1].children.append(node)
        if tag not in VOID_ELEMENTS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, dict(attrs)))

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def direct_children(node: Node, tag: str) -> list[Node]:
    return [child for child in node.children if isinstance(child, Node) and child.tag == tag]


def table_rows(table: Node) -> list[list[Node]]:
    rows = []
    for row in table.descendants("tr"):
        cells = direct_children(row, "td")
        if cells:
            rows.append(cells)
    return rows


def labelled_values(rows: list[list[Node]]) -> dict[str, str]:
    return {
        cells[0].text(): cells[1].text()
        for cells in rows
        if len(cells) >= 2
    }


def affiliation_key(affiliation: str) -> str:
    """Create a comparison key insensitive to case, accents, and whitespace."""
    key = "".join(
        character
        for character in unicodedata.normalize("NFKD", affiliation.casefold())
        if not unicodedata.combining(character)
    )
    return " ".join(key.split())


def normalize_affiliations(authors: list[dict[str, str]]) -> None:
    """Apply explicit aliases and unify accent-only variants within a paper."""
    aliases = {
        affiliation_key(alias): canonical
        for alias, canonical in AFFILIATION_ALIASES.items()
    }
    canonical: dict[str, str] = {}
    for author in authors:
        affiliation = author["affiliation"]
        affiliation = aliases.get(affiliation_key(affiliation), affiliation)
        key = affiliation_key(affiliation)
        author["affiliation"] = canonical.setdefault(key, affiliation)


def parse_submission(path: Path) -> dict:
    parser = TreeParser()
    parser.feed(path.read_text(encoding="utf-8", errors="replace"))
    tables = list(parser.root.descendants("table"))

    info = None
    author_rows = None
    for table in tables:
        rows = table_rows(table)
        values = labelled_values(rows)
        if "Title" in values and "Decision" in values:
            info = values
        if any(len(row) == 1 and row[0].text() == "Authors" for row in rows):
            author_rows = rows

    if not info or author_rows is None:
        raise ValueError(f"Could not find submission metadata in {path}")
    if info.get("Decision", "").upper() != "ACCEPT":
        raise ValueError(f"{path.name} is not marked ACCEPT")

    match = re.search(r"Submission\s+(\d+)", path.stem)
    if not match:
        raise ValueError(f"Could not determine submission number from {path.name}")

    authors = []
    for cells in author_rows:
        # Author rows have seven cells and an email in the third. EasyChair puts
        # the identifying colour class on <tr>, so use the stable cell shape.
        if len(cells) < 5 or "@" not in cells[2].text():
            continue
        first_name, last_name, _email, country, affiliation = (
            cell.text() for cell in cells[:5]
        )
        if first_name and last_name:
            authors.append({
                "name": f"{first_name} {last_name}",
                "affiliation": affiliation,
                "country": country,
            })

    if not authors:
        raise ValueError(f"Could not find authors in {path.name}")

    normalize_affiliations(authors)

    return {
        "id": int(match.group(1)),
        "title": info["Title"],
        "authors": authors,
        "abstract": info.get("Abstract", ""),
    }


def build_data(source_dir: Path, papers_dir: Path) -> list[dict]:
    html_files = sorted(
        source_dir.glob("Submission *.html"),
        key=lambda path: int(re.search(r"\d+", path.stem).group()),
    )
    if not html_files:
        raise ValueError(f"No 'Submission N.html' files found in {source_dir}")

    papers_dir.mkdir(parents=True, exist_ok=True)
    papers = []
    for html_file in html_files:
        paper = parse_submission(html_file)
        link_pdf(paper, source_dir, papers_dir)
        papers.append(paper)
    return sorted(papers, key=lambda paper: paper["title"].casefold())


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Directory containing EasyChair HTML exports")
    parser.add_argument(
        "--site-dir",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "2026",
        help="Website edition directory (default: 2026 directory in this repository)",
    )
    parser.add_argument(
        "--summary",
        action="store_true",
        help="Print a Slack-ready summary of top affiliations and countries",
    )
    args = parser.parse_args()

    source_dir = args.source.resolve()
    site_dir = args.site_dir.resolve()
    papers = build_data(source_dir, site_dir / "papers")
    if args.summary:
        print_summary(papers)

    public_papers = [
        {
            **paper,
            "authors": [
                {key: value for key, value in author.items() if key != "country"}
                for author in paper["authors"]
            ],
        }
        for paper in papers
    ]
    output = site_dir / "accepted-papers-data.js"
    payload = json.dumps(public_papers, ensure_ascii=False, indent=2)
    output.write_text(
        "// Generated by scripts/import_easychair.py; do not edit by hand.\n"
        f"window.ACCEPTED_PAPERS = {payload};\n",
        encoding="utf-8",
    )
    linked = sum("pdf" in paper for paper in papers)
    print(f"Imported {len(papers)} accepted papers ({linked} PDFs) into {output}")


if __name__ == "__main__":
    main()
