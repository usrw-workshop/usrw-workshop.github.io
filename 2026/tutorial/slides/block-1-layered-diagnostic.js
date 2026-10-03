(function () {
  window.USRWDeck.registerSlide({
    id: "block-1-layered-diagnostic",
    title: "Unification is a layer choice, not a slogan",
    layout: "block-one",
    mode: "extension",
    modeLabel: "Extra slides",
    status: "BACKUP",
    showMeta: false,
    role: "The tutorial question is not whether search and recommendation are the same, but which layers are shared and which remain task-specific.",
    citations: ["luhn1958business", "belkin1992information", "goldberg1992tapestry"],
    html: [
      "<div class=\"block-one-grid\">",
      "  <div class=\"takeaway-card\">",
      "    <p class=\"big-question\">Ask this all day: what is shared, and what remains task-specific?</p>",
      "    <div class=\"label-row\">",
      "      <span class=\"pill\">shared substrate is real</span>",
      "      <span class=\"pill\">task identity does not follow</span>",
      "    </div>",
      "    <p class=\"breadcrumb\">Next: representations → divergence → layered modern systems</p>",
      "  </div>",
      "  <div class=\"diagram-card\">",
      "    <div class=\"layer-stack\">",
      "      <div class=\"layer\"><span class=\"layer-name\">Interface</span><span class=\"layer-state\">may fuse or stay distinct</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Catalogue + logs</span><span class=\"layer-state\">often shareable</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Representations</span><span class=\"layer-state\">Block 2 starts here</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Model parameters</span><span class=\"layer-state\">sometimes shared</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Objective</span><span class=\"layer-state\">often task-specific</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Serving</span><span class=\"layer-state\">latency and exposure matter</span></div>",
      "      <div class=\"layer\"><span class=\"layer-name\">Evaluation</span><span class=\"layer-state\">cannot be hand-waved</span></div>",
      "    </div>",
      "  </div>",
      "</div>"
    ].join("")
  });
}());
