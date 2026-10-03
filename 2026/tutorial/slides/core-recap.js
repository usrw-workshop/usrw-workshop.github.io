(function () {
  window.USRWDeck.registerSlide({
    id: "core-recap",
    title: "Conclusion",
    layout: "discovery-map",
    mode: "core",
    modeLabel: "Tutorial synthesis",
    status: "DRAFT",
    showMeta: false,
    role: "Sharing is a design choice at each layer: data, representations, models, orchestration, and evaluation.",
    html: window.USRWDiscoveryMap.render({
      id: "core-recap", title: "Choose the boundary at each layer",
      emphasis: "choices",
      model: "choice", sharedData: true, sharedEvaluation: true,
      agent: true, agentLabel: "Optional agent · routing and composition",
      description: "Two input and result paths, a possible shared data source, separate or shared models, optional agent orchestration, and shared evaluation methods with task-specific relevance needs.",
      takeaway: "What should be shared, what must stay task-specific, and what evidence supports it?"
    })
  });
}());
