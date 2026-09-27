"""Name and link public paper PDFs consistently with the workshop website."""

import re
import shutil
import unicodedata
from pathlib import Path


# Paper 202 is awaiting Amit Goyal's final PDF; the anonymous draft stays private.
ABSTRACT_ONLY_SUBMISSIONS = {202}


def pdf_filename(paper: dict) -> str:
    title = unicodedata.normalize("NFKD", paper["title"])
    title = title.encode("ascii", "ignore").decode("ascii").lower()
    slug = re.sub(r"[^a-z0-9]+", "-", title).strip("-")
    return f"{paper['id']}-{slug}.pdf"


def find_pdf(source_dir: Path, submission_id: int) -> Path | None:
    number = re.compile(rf"(?<!\d){submission_id}(?!\d)")
    candidates = sorted(
        path for path in source_dir.rglob("*.pdf") if number.search(path.stem)
    )
    return candidates[0] if candidates else None


def link_pdf(paper: dict, source_dir: Path, papers_dir: Path) -> None:
    paper.pop("pdf", None)
    if paper["id"] in ABSTRACT_ONLY_SUBMISSIONS:
        return

    destination = papers_dir / pdf_filename(paper)
    source = find_pdf(source_dir, paper["id"])
    if source:
        if source.resolve() != destination.resolve():
            shutil.copy2(source, destination)
    elif not destination.is_file():
        return

    paper["pdf"] = f"papers/{destination.name}"
