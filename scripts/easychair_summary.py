"""Internal author statistics for EasyChair imports."""

from collections import Counter


def print_summary(papers: list[dict]) -> None:
    """Print Slack-ready internal statistics from the imported author data."""
    authors = [author for paper in papers for author in paper["authors"]]
    paper_affiliations = Counter(
        affiliation
        for paper in papers
        for affiliation in {author["affiliation"] for author in paper["authors"]}
    )
    paper_countries = Counter(
        country
        for paper in papers
        for country in {author["country"] for author in paper["authors"]}
    )
    first_author_affiliations = Counter(
        paper["authors"][0]["affiliation"] for paper in papers
    )
    first_author_countries = Counter(
        paper["authors"][0]["country"] for paper in papers
    )
    author_affiliations = Counter()
    author_countries = Counter()
    for paper in papers:
        author_weight = 1 / len(paper["authors"])
        for author in paper["authors"]:
            author_affiliations[author["affiliation"]] += author_weight
            author_countries[author["country"]] += author_weight

    def format_counts(counts: Counter) -> str:
        ranked = sorted(
            counts.items(),
            key=lambda item: (-round(item[1], 12), item[0].casefold()),
        )
        def format_count(count: float) -> str:
            return str(round(count)) if abs(count - round(count)) < 1e-9 else f"{count:.2f}"

        return ", ".join(
            f"{name} ({format_count(count)})" for name, count in ranked
        )

    print("*USRW 2026 accepted papers — quick snapshot*")
    print(f"• {len(papers)} accepted papers from {len(authors)} authors")
    print("• Affiliations represented across papers: " + format_counts(paper_affiliations))
    print("• First-author affiliations: " + format_counts(first_author_affiliations))
    print("• Fractionally author-weighted affiliations: " + format_counts(author_affiliations))
    print("• Countries represented across papers: " + format_counts(paper_countries))
    print("• First-author countries: " + format_counts(first_author_countries))
    print("• Fractionally author-weighted countries: " + format_counts(author_countries))
