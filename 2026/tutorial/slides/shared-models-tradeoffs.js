(function () {
  window.USRWDeck.registerSlide({
    id: "shared-models-tradeoffs",
    title: "Shared models still have task-specific parts",
    layout: "block-six",
    mode: "core",
    modeLabel: "Block 6 · Selective joint modeling",
    status: "DRAFT",
    showMeta: false,
    role: "Specialization can live in separate branches, scenario-specific views, or task-conditioned inputs.",
    citations: ["xie2024unifiedssr", "liu2024usr", "bhattacharya2024unicorn"],
    html: [
      "<div class=\"joint-seams-slide\">",
      "  <div class=\"joint-inputs\">",
      "    <div class=\"seam-input\"><span class=\"concept-label\">search context</span><strong>query + user + session</strong><span>an expressed need now</span></div>",
      "    <div class=\"seam-input\"><span class=\"concept-label\">recommendation context</span><strong>history + user + surface</strong><span>future exposure from stored state</span></div>",
      "  </div>",
      "  <div class=\"joint-down-arrow\" aria-hidden=\"true\">↓</div>",
      "  <div class=\"shared-backbone\" data-fragment>",
      "    <span class=\"concept-label\">shared components vary by model</span>",
      "    <strong>catalogue embeddings · behavioral context · backbone</strong>",
      "  </div>",
      "  <div class=\"task-specific-components\" data-fragment>",
      "    <span class=\"concept-label\">task-specific components vary by model</span>",
      "    <strong>Query paths · scenario views · task-conditioned context</strong>",
      "    <div class=\"task-seams\">",
      "      <div><strong>UnifiedSSR <sup class=\"citation-marker\" data-cite=\"xie2024unifiedssr\"></sup></strong><span>Search query branch, task-specific predictors, and separate fine-tuning</span></div>",
      "      <div><strong>USR <sup class=\"citation-marker\" data-cite=\"liu2024usr\"></sup></strong><span>Search and recommendation views of user interests and features</span></div>",
      "      <div><strong>UniCoRn <sup class=\"citation-marker\" data-cite=\"bhattacharya2024unicorn\"></sup></strong><span>Task identity, available features, and missing-context imputation</span></div>",
      "    </div>",
      "  </div>",
      "</div>"
    ].join("")
  });
}());
