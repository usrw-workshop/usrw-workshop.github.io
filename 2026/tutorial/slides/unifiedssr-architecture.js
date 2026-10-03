(function () {
  window.USRWDeck.registerSlide({
    id: "unifiedssr-architecture",
    title: "UnifiedSSR shares the sequence model",
    layout: "model-architecture",
    mode: "core",
    modeLabel: "Block 6 · Model sharing",
    status: "DRAFT",
    showMeta: false,
    role: "Recommendation uses product history. Search adds a query branch. Both learn through a shared sequence encoder.",
    citations: ["xie2024unifiedssr"],
    html: [
      "<div class=\"architecture-walkthrough\">",
      "<figure class=\"architecture-figure\">",
      "  <div class=\"architecture-image\">",
      "  <img src=\"assets/media/model-architectures/unifiedssr-architecture.png?v=architecture-grounded-20260908\" alt=\"Paper-grounded UnifiedSSR architecture with a deactivated query branch for recommendation and dual branches for search\">",
      "    <span class=\"figure-marker\" style=\"left:38%;top:43%\" data-fragment data-fragment-group=\"unifiedssr-step-1\">1</span>",
      "    <span class=\"figure-marker\" style=\"left:83%;top:42%\" data-fragment data-fragment-group=\"unifiedssr-step-2\">2</span>",
      "    <span class=\"figure-marker\" style=\"left:65%;top:74%\" data-fragment data-fragment-group=\"unifiedssr-step-3\">3</span>",
      "  </div>",
      "  <figcaption><b>Scope:</b> product scoring; candidate generation is not studied.</figcaption>",
      "</figure>",
      "<div class=\"architecture-reading\">",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unifiedssr-step-1\"><b>1</b><p><strong>Shared embeddings and encoder</strong><span>User and product embeddings, Siamese Encoder parameters, and joint pre-training.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unifiedssr-step-2\"><b>2</b><p><strong>Search keeps the query path</strong><span>Query embeddings and cross-attention are search-specific. Recommendation deactivates this branch.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unifiedssr-step-3\"><b>3</b><p><strong>Separate final predictions</strong><span>Each task keeps its predictor and separate fine-tuning.</span></p></section>",
      "</div>",
      "</div>"
    ].join("")
  });
}());
