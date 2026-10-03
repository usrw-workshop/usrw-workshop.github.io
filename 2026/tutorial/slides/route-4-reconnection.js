(function () {
  window.USRWDiscoveryMap.register({
    id: "route-4-reconnection", block: 4,
    emphasis: "reconnection",
    title: "Behavior and representations reconnect the paths",
    role: "Search history can inform recommendation; item representations can be shared across task models.",
    transfer: true,
    bridge: "Shared item representations",
    models: ["Search system", "Recommendation model"],
    modelDetails: ["search remains its own task", "also uses search-history features"],
    takeaway: "Signals and item representations can cross the boundary while task paths remain distinct.",
    description: "A curved arrow carries search history into recommendation. A second connection links the two models through shared item representations. These illustrate two forms of reconnection from different papers, with distinct task outputs and evaluation.",
    citations: ["covington2016youtube", "zamani2018joint"]
  });
}());
