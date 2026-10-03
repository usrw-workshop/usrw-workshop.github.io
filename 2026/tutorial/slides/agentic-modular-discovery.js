(function () {
  window.USRWDeck.registerSlide({
    id: "agentic-modular-discovery",
    title: "Agents can merge the experience without merging every model",
    layout: "model-architecture",
    mode: "core",
    modeLabel: "Block 8 · Agentic discovery",
    status: "DRAFT",
    showMeta: false,
    role: "The Parallel Fusion Router shares query interpretation and page composition while specialist tools keep their own models.",
    citations: ["palumbo2025agentic"],
    html: [
      "<div class=\"architecture-walkthrough\">",
      "<figure class=\"architecture-figure\">",
      "  <div class=\"architecture-image\">",
      "    <img src=\"assets/media/model-architectures/parallel-fusion-router-architecture-v4.png?v=equal-tool-routing-20260921\" alt=\"Parallel Fusion Router architecture where a query-only router selects any of three specialist tools, user features flow downstream, and tool outputs appear on a shared structured results page\">",
      "    <span class=\"figure-marker\" style=\"left:18%;top:43%\" data-fragment data-fragment-group=\"pfr-step-1\">1</span>",
      "    <span class=\"figure-marker\" style=\"left:54%;top:34%\" data-fragment data-fragment-group=\"pfr-step-2\">2</span>",
      "    <span class=\"figure-marker\" style=\"left:77%;top:36%\" data-fragment data-fragment-group=\"pfr-step-3\">3</span>",
      "  </div>",
      "  <figcaption><b>Scope:</b> predefined routes compose tool outputs into page sections; no joint item-level ranker is described. <sup class=\"citation-marker\" data-cite=\"palumbo2025agentic\"></sup></figcaption>",
      "</figure>",
      "<div class=\"architecture-reading\">",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"pfr-step-1\"><b>1</b><p><strong>Query-only cached router</strong><span>Selects a route and parameters. User features bypass the router.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"pfr-step-2\"><b>2</b><p><strong>Modular specialist tools</strong><span>Search, recommendation, and sub-agents keep separate models and ranking logic.</span></p></section>",
      "  <section class=\"bridge-reading-step\" data-fragment data-fragment-group=\"pfr-step-3\"><b>3</b><p><strong>One composed experience</strong><span>Tool outputs occupy separate sections of a structured results page.</span></p></section>",
      "</div>",
      "</div>"
    ].join("")
  });
}());
