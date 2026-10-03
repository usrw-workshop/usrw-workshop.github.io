(function () {
  window.USRWDiscoveryMap.register({
    id: "route-7-llm", block: 7,
    emphasis: "generation",
    title: "One LLM can serve both discovery paths",
    role: "The model layer becomes a shared generator, conditioned on a query or a user history.",
    model: "llm", sharedData: true,
    takeaway: "Shared generation still leaves choices about identifiers, objectives, and updates.",
    description: "A single shared LLM replaces the model layer. Query-conditioned and history-conditioned inputs lead to search results and recommendations; evaluation still distinguishes the tasks.",
    citations: ["penha2024bridging", "zhao2026gems"]
  });
}());
