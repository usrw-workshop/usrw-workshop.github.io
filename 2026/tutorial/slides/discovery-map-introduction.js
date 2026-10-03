(function () {
  var stops = [
    {
      blocks: [[1, "route-1-machinery"]],
      title: "Both paths can use history and context",
      text: "Search: query and search history. Recommendation: profile and interaction history."
    },
    {
      blocks: [[2, "route-2-content"], [3, "route-3-divergence"], [4, "route-4-reconnection"]],
      title: "Representations and learning",
      text: "We trace shared content techniques, the rise of collaborative signals, and their reconnection."
    },
    {
      blocks: [[5, "route-5-behavior"]],
      title: "The data behind both paths",
      text: "A catalogue and behavioral history can serve both tasks, while preserving each event's context."
    },
    {
      blocks: [[6, "route-6-models"], [7, "route-7-llm"]],
      title: "Sharing models",
      text: "Joint models can share selected parameters. Generative models can produce item identifiers for both tasks."
    },
    {
      blocks: [[8, "route-8-agents"]],
      title: "Coordinating specialist tools",
      text: "An agent can interpret intent and compose results from separate search and recommendation tools."
    },
    {
      blocks: [[9, "route-9-evaluation"]],
      title: "Evaluating the results",
      text: "Evaluation methods can be shared. The user's need still determines what counts as relevant."
    },
    {
      blocks: [],
      title: "Several places to share",
      text: "We will return to this map at each block. These layers describe design choices, not one required architecture."
    }
  ];
  var walkthrough = '<section class="discovery-map-walkthrough" aria-label="Guided tour of the tutorial blocks">' + stops.map(function (stop, index) {
    var anchors = stop.blocks.map(function (block) {
      return '<a href="#' + block[1] + '">Block ' + block[0] + '</a>';
    }).join('');
    return '<div class="map-tour-stop"' + (index ? ' data-fragment' : '') + '>' +
      '<div class="map-tour-anchors">' + anchors + '</div>' +
      '<p><strong>' + stop.title + '</strong><span>' + stop.text + '</span></p></div>';
  }).join('') + '</section>';

  window.USRWDeck.registerSlide({
    id: "discovery-map-introduction",
    title: "Reading the discovery map",
    layout: "discovery-map",
    mode: "core",
    modeLabel: "Tutorial orientation",
    status: "DRAFT",
    showMeta: false,
    role: "Two input paths, their models and data, the results they produce, and how we evaluate them.",
    html: window.USRWDiscoveryMap.render({
      id: "discovery-map-introduction",
      title: "Reading the discovery map",
      description: "A guided overview of discovery inputs and results, representations and models, behavioral data, optional agent orchestration, and evaluation. Each focus stop names its tutorial blocks; the final view restores the whole map.",
      agent: true,
      agentLabel: "Optional agent: intent, routing, composition",
      walkthrough: walkthrough,
      takeaway: "We will return to this map as we explore each layer."
    })
  });
}());
