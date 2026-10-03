(function () {
  window.USRWDeck.registerSlide({
    id: "semantic-id-tradeoff",
    title: "Joint IDs need shared and task-specific capacity",
    layout: "block-seven",
    mode: "core",
    modeLabel: "Block 7 · Generative retrieval",
    status: "DRAFT",
    showMeta: false,
    role: "One shared geometry creates a compromise; GenSAR splits common structure from task-specific signal.",
    citations: ["penha2025semanticids", "shi2025gensar"],
    html: [
      "<div class=\"semantic-tradeoff-slide\">",
      "  <div class=\"semantic-plot\" role=\"img\" aria-label=\"Search and recommendation recall at 30 for task-specific and multi-task semantic identifiers\">",
      "    <span class=\"plot-y-label\">recommendation R@30 ↑</span>",
      "    <span class=\"plot-x-label\">search R@30 →</span>",
      "    <span class=\"plot-origin\">0</span>",
      "    <div class=\"plot-point is-rec\" data-fragment><i></i><strong>rec-tuned</strong><span>.004 / .062</span></div>",
      "    <div class=\"plot-point is-search\" data-fragment><i></i><strong>search-tuned</strong><span>.072 / .026</span></div>",
      "    <div class=\"plot-point is-shared\" data-fragment data-fragment-group=\"multi-task-tradeoff\"><i></i><strong>multi-task</strong><span>.046 / .049</span></div>",
      "  </div>",
      "  <aside class=\"semantic-reading\">",
      "    <span class=\"concept-label\">shared-only geometry · R@30</span>",
      "    <strong>Specialists define opposite optima.</strong>",
      "    <div class=\"semantic-compromise\" data-fragment data-fragment-group=\"multi-task-tradeoff\"><b>One shared ID is a Pareto choice</b><span>multi-task: −36% search · −21% rec <sup class=\"citation-marker\" data-cite=\"penha2025semanticids\"></sup></span></div>",
      "    <div class=\"gensar-response\" data-fragment>",
      "      <span class=\"concept-label\">GenSAR · partial sharing</span>",
      "      <b>common prefix, specialist suffix</b>",
      "      <div class=\"gensar-id-row\"><em>search</em><span class=\"id-shared\">M₁</span><span class=\"id-shared\">M₂</span><span class=\"id-search\">S₁</span><span class=\"id-search\">S₂</span></div>",
      "      <div class=\"gensar-id-row\"><em>recommend</em><span class=\"id-shared\">M₁</span><span class=\"id-shared\">M₂</span><span class=\"id-rec\">R₁</span><span class=\"id-rec\">R₂</span></div>",
      "      <small>behavior token chooses which ID to generate <sup class=\"citation-marker\" data-cite=\"shi2025gensar\"></sup></small>",
      "    </div>",
      "  </aside>",
      "</div>"
    ].join("")
  });
}());
