document.addEventListener("DOMContentLoaded", () => {
  const programme = document.querySelector("#programme");
  if (!programme) return;

  const posterList = programme.querySelector("[data-render='poster-papers']");
  const sessions = window.PAPER_SESSIONS || {};
  const posters = (window.ACCEPTED_PAPERS || [])
    .filter((paper) => (sessions[paper.id] || "Poster") === "Poster");

  posters.forEach((paper) => {
    const item = document.createElement("li");
    item.dataset.paperId = paper.id;

    const title = document.createElement(paper.pdf ? "a" : "span");
    title.className = "schedule-paper-title";
    title.textContent = paper.title;
    if (paper.pdf) title.href = paper.pdf;
    item.appendChild(title);

    const authors = document.createElement("p");
    authors.className = "schedule-authors";
    authors.textContent = paper.authors.map((author) => author.name).join(", ");
    item.appendChild(authors);

    if (!paper.pdf && paper.abstract) {
      const abstract = document.createElement("details");
      abstract.className = "schedule-abstract";
      const summary = document.createElement("summary");
      summary.textContent = "Abstract";
      const text = document.createElement("p");
      text.textContent = paper.abstract;
      abstract.append(summary, text);
      item.appendChild(abstract);
    }
    posterList.appendChild(item);
  });

  const mobile = window.matchMedia("(max-width: 600px)");
  programme.querySelectorAll(".schedule-disclosure").forEach((details) => {
    const oral = details.hasAttribute("data-oral-papers");
    const count = details.querySelector(".schedule-papers").children.length;
    const noun = `${oral ? "" : "poster "}${count === 1 ? "paper" : "papers"}`;
    const summary = details.querySelector("summary");
    let expectedOpen = oral && !mobile.matches;
    let manuallyToggled = false;

    const updateLabel = () => {
      summary.textContent = `${details.open ? "Hide" : "Show"} ${count} ${noun}`;
    };
    details.open = expectedOpen;
    updateLabel();

    details.addEventListener("toggle", () => {
      if (details.open !== expectedOpen) manuallyToggled = true;
      updateLabel();
    });
    if (oral) {
      mobile.addEventListener("change", () => {
        if (manuallyToggled) return;
        expectedOpen = !mobile.matches;
        details.open = expectedOpen;
        updateLabel();
      });
    }
  });
});
