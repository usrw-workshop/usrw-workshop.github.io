(function () {
  window.USRWDeck.registerSlide({
    id: "decision-framework",
    title: "Grounded agents separate evidence, reasoning, and policy",
    layout: "block-eight",
    mode: "core",
    modeLabel: "Block 8 · Agentic discovery",
    status: "DRAFT",
    showMeta: false,
    role: "A second production case shows why agentic does not mean one unconstrained LLM.",
    citations: ["boateng2026grounding"],
    html: [
      "<div class=\"grounded-agent-slide\">",
      "  <div class=\"grounded-flow\">",
      "    <article data-fragment><span class=\"ground-step\">1 · evidence</span><strong>catalogue retrieval</strong><small>dense ANN → fuzzy refinement</small></article>",
      "    <article data-fragment><span class=\"ground-step\">2 · tool use</span><strong>agentic web search</strong><small>fresh context for cold-start queries</small></article>",
      "    <article data-fragment><span class=\"ground-step\">3 · reasoning</span><strong>dual-intent LLM</strong><small>primary + plausible secondary intent</small></article>",
      "    <article data-fragment><span class=\"ground-step\">4 · policy + serving</span><strong>resolve, guard, cache</strong><small>deterministic rules; online fallback</small></article>",
      "  </div>",
      "  <div class=\"grounding-ablation\" data-fragment>",
      "    <span><b>77.7%</b> ungrounded</span><i>→</i><span><b>86.0%</b> + catalogue</span><i>→</i><span><b>89.2%</b> + agentic search</span><i>→</i><span><b>90.7%</b> + dual intent</span>",
      "  </div>",
      "  <div class=\"grounded-boundaries\" data-fragment>",
      "    <span class=\"is-evidence\"><strong>Production pattern</strong>95.9% cached daily-search coverage; BERT fallback for misses <sup class=\"citation-marker\" data-cite=\"boateng2026grounding\"></sup></span>",
      "    <span class=\"is-boundary\"><strong>Tutorial boundary</strong>vertical search routing only; personalization is proposed, not tested</span>",
      "  </div>",
      "  <p class=\"grounded-close\">For search + recommendation, reuse the separation: ground → plan → resolve policy → call specialists.</p>",
      "</div>"
    ].join("")
  });
}());
