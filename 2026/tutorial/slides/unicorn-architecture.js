(function () {
  window.USRWDeck.registerSlide({
    id: "unicorn-architecture",
    title: "UniCoRn uses one ranker across several surfaces",
    layout: "model-architecture",
    mode: "core",
    modeLabel: "Block 6 · Model sharing",
    status: "DRAFT",
    showMeta: false,
    role: "Different task contexts feed one model that scores positive engagement with a target entity.",
    citations: ["bhattacharya2024unicorn"],
    html: [
      "<div class=\"architecture-walkthrough\">",
      "<figure class=\"architecture-figure\">",
      "  <div class=\"architecture-image\">",
      "  <img src=\"assets/media/model-architectures/unicorn-architecture.png?v=architecture-grounded-20260908\" alt=\"Paper-grounded UniCoRn architecture with broader context, context imputation, categorical feature embeddings, and one engagement ranker\">",
      "    <span class=\"figure-marker\" style=\"left:47%;top:30%\" data-fragment data-fragment-group=\"unicorn-step-1\">1</span>",
      "    <span class=\"figure-marker\" style=\"left:28%;top:32%\" data-fragment data-fragment-group=\"unicorn-step-2\">2</span>",
      "    <span class=\"figure-marker\" style=\"left:84%;top:14%\" data-fragment data-fragment-group=\"unicorn-step-3\">3</span>",
      "  </div>",
      "  <figcaption><b>Scope:</b> target-entity scoring; candidate generation is not described.</figcaption>",
      "</figure>",
      "<div class=\"architecture-reading\">",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unicorn-step-1\"><b>1</b><p><strong>One shared ranker</strong><span>Pooled task examples, shared model parameters, and one engagement objective.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unicorn-step-2\"><b>2</b><p><strong>Task-conditioned context</strong><span>Available fields and missing-value imputation depend on the task.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"unicorn-step-3\"><b>3</b><p><strong>Distinct result surfaces</strong><span>Search, prequery recommendation, and more-like-this use the same scoring model.</span></p></section>",
      "</div>",
      "</div>"
    ].join("")
  });
}());
