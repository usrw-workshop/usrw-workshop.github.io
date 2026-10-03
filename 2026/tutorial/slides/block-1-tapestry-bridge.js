(function () {
  window.USRWDeck.registerSlide({
    id: "block-1-tapestry-bridge",
    title: "Tapestry used one query infrastructure in two modes",
    layout: "block-one",
    mode: "extension",
    modeLabel: "Extra slides",
    status: "BACKUP",
    showMeta: false,
    role: "Ad hoc search and persistent filtering can share repository and query language without a single learned recommender model.",
    citations: ["goldberg1992tapestry"],
    html: [
      "<div class=\"block-one-grid\">",
      "  <div class=\"diagram-card\">",
      "    <div class=\"repository-box\">documents + annotations + replies + people + saved queries</div>",
      "    <div class=\"tql-pipe\">same TQL idea</div>",
      "    <div class=\"mode-pair\">",
      "      <div class=\"mode-card\"><strong>Run now</strong>ad hoc query → immediate result set</div>",
      "      <div class=\"mode-card\"><strong>Install</strong>tested query → continuous filter</div>",
      "    </div>",
      "  </div>",
      "  <div class=\"takeaway-card\">",
      "    <h2>What makes it a bridge?</h2>",
      "    <p class=\"big-question\">Content and social evidence compose in one infrastructure, but the system stays modular.</p>",
      "    <p class=\"mini-note\">Here “collaborative filtering” means explicit human annotations, not automatic neighbor prediction.</p>",
      "  </div>",
      "</div>"
    ].join("")
  });
}());
