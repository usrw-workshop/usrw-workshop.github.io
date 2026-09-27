document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("[data-render='accepted-papers']");
  const count = document.querySelector("[data-paper-count]");
  const papers = window.ACCEPTED_PAPERS || [];

  if (count) count.textContent = papers.length;

  papers.forEach((paper) => {
    const article = document.createElement("article");
    article.className = "paper-card";

    const heading = document.createElement("h2");
    if (paper.pdf) {
      const titleLink = document.createElement("a");
      titleLink.href = paper.pdf;
      titleLink.textContent = paper.title;
      heading.appendChild(titleLink);
    } else {
      heading.textContent = paper.title;
    }
    article.appendChild(heading);

    const authors = document.createElement("p");
    authors.className = "paper-authors";
    authors.textContent = paper.authors.map((author) => author.name).join(", ");
    article.appendChild(authors);

    const affiliations = [...new Set(
      paper.authors.map((author) => author.affiliation).filter(Boolean),
    )];
    if (affiliations.length) {
      const affiliation = document.createElement("p");
      affiliation.className = "paper-affiliations";
      affiliation.textContent = affiliations.join(" · ");
      article.appendChild(affiliation);
    }

    const actions = document.createElement("div");
    actions.className = "paper-actions";
    if (paper.pdf) {
      const link = document.createElement("a");
      link.href = paper.pdf;
      link.textContent = "View paper (PDF)";
      actions.appendChild(link);
    }
    if (paper.abstract) {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = "Abstract";
      const abstract = document.createElement("p");
      abstract.textContent = paper.abstract;
      details.append(summary, abstract);
      actions.appendChild(details);
    }
    article.appendChild(actions);
    list.appendChild(article);
  });
});
