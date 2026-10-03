(function () {
  window.USRWDeck.registerSlide({
    id: "usr-architecture",
    title: "USR shares the ranking framework",
    layout: "model-architecture",
    mode: "core",
    modeLabel: "Block 6 · Model sharing",
    status: "DRAFT",
    showMeta: false,
    role: "A scenario indicator creates search and recommendation views inside one ranking framework.",
    citations: ["liu2024usr"],
    html: [
      "<div class=\"architecture-walkthrough\">",
      "<figure class=\"architecture-figure\">",
      "  <div class=\"architecture-image\">",
      "  <img src=\"assets/media/model-architectures/usr-architecture.png?v=architecture-grounded-20260908\" alt=\"Paper-grounded USR architecture with a shared input network, scenario views, and global label multi-task learning\">",
      "    <span class=\"figure-marker\" style=\"left:21%;top:29%\" data-fragment data-fragment-group=\"usr-step-1\">1</span>",
      "    <span class=\"figure-marker\" style=\"left:41%;top:26%\" data-fragment data-fragment-group=\"usr-step-2\">2</span>",
      "    <span class=\"figure-marker\" style=\"left:64%;top:32%\" data-fragment data-fragment-group=\"usr-step-3\">3</span>",
      "  </div>",
      "  <figcaption><b>Scope:</b> CTR and CTCVR ranking after exposure; retrieval is not covered.</figcaption>",
      "</figure>",
      "<div class=\"architecture-reading\">",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"usr-step-1\"><b>1</b><p><strong>Shared input network</strong><span>One network embeds and encodes behavior, items, and scenario context.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"usr-step-2\"><b>2</b><p><strong>Task-conditioned views</strong><span>Interest and feature representations differ for search and recommendation.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"usr-step-3\"><b>3</b><p><strong>Global learning, local target</strong><span>A shared auxiliary label supports the current scenario’s CTR or CTCVR prediction.</span></p></section>",
      "</div>",
      "</div>"
    ].join("")
  });
}());
