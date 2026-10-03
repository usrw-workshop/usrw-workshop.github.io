(function () {
  window.USRWDiscoveryMap.register({
    id: "route-8-agents", block: 8,
    emphasis: "orchestration",
    title: "An agent composes the discovery paths",
    role: "A different design: share orchestration around specialist search and recommendation tools.",
    model: "split", agent: true, sharedData: true,
    models: ["Search tool", "Recommendation tool"],
    modelDetails: ["specialist retrieval / ranking", "specialist retrieval / ranking"],
    takeaway: "The experience can be composed while the underlying models stay modular.",
    description: "An agent boundary surrounds the search and recommendation tools and their results. The agent interprets intent, routes work, and composes the experience. The specialist models remain distinct.",
    citations: ["palumbo2025agentic"]
  });
}());
