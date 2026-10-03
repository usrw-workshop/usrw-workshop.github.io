(function () {
  window.USRWDeck.registerSlide({
    id: "gems-gradient-subspaces",
    title: "One LLM still needs task-specific learning directions",
    layout: "block-seven",
    mode: "core",
    modeLabel: "Block 7 · Generative retrieval",
    status: "DRAFT",
    showMeta: false,
    role: "The authors found that search and recommendation updates can fight each other, then gave each task its own learning direction.",
    citations: ["zhao2026gems"],
    html: [
      "<div class=\"gems-slide\">",
      "  <div class=\"gems-problem\" data-fragment>",
      "    <img src=\"assets/media/model-architectures/gradient-conflict.png\" alt=\"Search and recommendation gradients pointing in opposite directions from one shared LLM\">",
      "  </div>",
      "  <div class=\"gems-subspaces\" data-fragment>",
      "    <span><b>shared subspace</b><em>gradient from both task losses</em></span>",
      "    <span><b>search subspace</b><em>projected search gradient</em></span>",
      "    <span><b>recommendation subspace</b><em>projected recommendation gradient</em></span>",
      "  </div>",
      "  <div class=\"gems-null\" data-fragment data-fragment-group=\"gems-fusion\">",
      "    <strong>fuse every training step</strong>",
      "    <span><b>shared update</b> always added with full weight</span>",
      "    <span><b>+ α search</b> + <b>α recommendation</b></span>",
      "    <small>a learned gate adjusts the two task weights; together they sum to 1</small>",
      "  </div>",
      "  <p class=\"gems-bottom-line\" data-fragment data-fragment-group=\"gems-fusion\">One shared update plus two controlled task-specific updates. <sup class=\"citation-marker\" data-cite=\"zhao2026gems\"></sup></p>",
      "</div>"
    ].join("")
  });
}());
