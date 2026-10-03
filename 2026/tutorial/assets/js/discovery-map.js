(function () {
  var blocks = ["Machinery", "Content", "Divergence", "Reconnection", "Behavior", "Models", "LLM", "Agents", "Evaluation"];
  var blockIds = ["route-1-machinery", "route-2-content", "route-3-divergence", "route-4-reconnection", "route-5-behavior", "route-6-models", "route-7-llm", "route-8-agents", "route-9-evaluation"];

  function escape(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  function text(x, y, value, className) {
    return '<text x="' + x + '" y="' + y + '" class="' + (className || "map-label") + '">' + escape(value) + '</text>';
  }

  function panel(x, y, width, height, title, subtitle, className) {
    var details = Array.isArray(subtitle) ? subtitle : [subtitle];
    var titleY = y + height / 2 - (details.length > 1 ? 12 : 3);
    return '<g class="map-node ' + (className || "") + '"><rect x="' + x + '" y="' + y + '" width="' + width + '" height="' + height + '" rx="24"/>' +
      text(x + width / 2, titleY, title) +
      details.map(function (detail, index) {
        return text(x + width / 2, titleY + 22 + index * 18, detail, "map-detail");
      }).join("") + '</g>';
  }

  function line(d, id, className) {
    return '<path class="map-link ' + (className || "") + '" d="' + d + '" marker-end="url(#' + id + '-arrow)"/>';
  }

  function models(config, id) {
    var mode = config.model || "split";
    if (mode === "selective") {
      return '<g class="map-focus"><rect class="map-shared-field" x="330" y="100" width="310" height="280" rx="36"/>' +
        text(485, 146, "Search-conditioned parts", "map-detail") +
        panel(346, 195, 278, 90, "Shared backbone", "selected parameters / features", "map-shared") +
        text(485, 338, "Rec-conditioned parts", "map-detail") + '</g>';
    }
    if (mode === "llm") {
      return '<g class="map-focus"><rect class="map-shared-field" x="330" y="100" width="310" height="280" rx="36"/>' +
        text(485, 146, "Query-conditioned input", "map-detail") +
        text(485, 234, "One shared LLM", "map-model-title") +
        text(485, 259, "generate item identifiers", "map-detail") +
        text(485, 338, "History-conditioned input", "map-detail") + '</g>';
    }
    if (mode === "choice") {
      return '<g><rect class="map-choice-field" x="330" y="100" width="310" height="280" rx="36"/>' +
        text(485, 206, "Separate or shared", "map-model-title") +
        text(485, 235, "models", "map-model-title") +
        text(485, 274, "choose for the setting", "map-detail") + '</g>';
    }
    var titles = config.models || ["Search model", "Recommendation model"];
    var subtitles = config.modelDetails || ["query-conditioned ranking", "profile-conditioned ranking"];
    var focus = config.focus === "models" ? "map-focus" : "";
    var html = panel(330, 104, 310, 92, titles[0], subtitles[0], focus + " map-search-model") +
      panel(330, 284, 310, 92, titles[1], subtitles[1], focus + " map-recommendation-model");
    if (config.bridge) {
      html += '<g class="map-focus map-bridge"><path class="map-thread" d="M 485 196 V 222 M 485 262 V 284"/>' +
        '<rect class="map-shared-field" x="342" y="222" width="286" height="40" rx="20"/>' +
        text(485, 247, config.bridge, "map-detail") + '</g>';
    }
    if (config.transfer) {
      html += '<g class="map-focus map-search-transfer">' + line("M 240 194 C 248 260 286 310 330 320", id, "map-transfer") +
        text(165, 250, "search history", "map-transfer-label") + '</g>';
    }
    return html;
  }

  function data(config, id) {
    var merged = config.model && config.model !== "split";
    var html = '<g class="map-data ' + (config.focus === "data" ? "map-focus" : "") + '">';
    if (config.sharedData) {
      html += '<rect class="map-shared-field" x="330" y="426" width="310" height="56" rx="28"/>' +
        text(485, 449, "Shared catalogue + behavior", "map-data-title") +
        text(485, 470, "preserve event type and context", "map-data-detail");
    } else {
      html += '<rect x="330" y="426" width="148" height="56" rx="28"/>' +
        '<rect x="492" y="426" width="148" height="56" rx="28"/>' +
        text(404, 459, "Search data", "map-detail") + text(566, 459, "Rec / filtering data", "map-data-detail");
    }
    if (merged) {
      html += line("M 485 426 V 383", id, "map-data-link");
    } else {
      html += line("M 350 426 C 291 426 291 214 330 182", id, "map-data-link") +
        line("M 566 426 V 380", id, "map-data-link");
    }
    return html + '</g>';
  }

  function diagram(config) {
    var id = config.id;
    var sharedEvaluation = config.sharedEvaluation;
    var html = '<svg class="discovery-map" viewBox="0 0 1160 490" role="img" aria-labelledby="' + id + '-diagram-title ' + id + '-diagram-desc">' +
      '<title id="' + id + '-diagram-title">' + escape(config.title) + '</title>' +
      '<desc id="' + id + '-diagram-desc">' + escape(config.description) + '</desc>' +
      '<defs><marker id="' + id + '-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#809187"/></marker></defs>';
    html += text(112, 23, "INPUTS", "map-heading map-heading-inputs") + text(485, 23, "MODELS / MACHINERY", "map-heading map-heading-models") +
      text(799, 23, "RESULTS", "map-heading map-heading-results") + text(1050, 23, "EVALUATION", "map-heading map-heading-evaluation");
    if (config.agent) {
      html += '<g class="map-focus map-orchestration"><rect class="map-agent-field" x="285" y="52" width="630" height="345" rx="36"/>' +
        text(600, 80, config.agentLabel || "Agent · intent, routing, composition", "map-agent-label") + '</g>';
    }
    html += '<g class="map-inputs">' + panel(0, 104, 225, 92, "Search inputs", ["query + search history", "+ context"], "map-input map-search-input") +
      panel(0, 284, 225, 92, "Rec / filtering inputs", ["profile + interaction history", "+ context"], "map-input map-recommendation-input") + '</g>';
    [["map-input-links", 225, 326], ["map-result-links", 644, 710], ["map-evaluation-links", 888, 944]].forEach(function (segment) {
      html += '<g class="' + segment[0] + '">';
      [150, 330].forEach(function (y) {
        html += line("M " + segment[1] + " " + y + " H " + segment[2], id);
      });
      html += '</g>';
    });
    html += '<g class="map-models">' + models(config, id) + '</g><g class="map-results">' +
      panel(714, 104, 170, 92, "Search results", "for the current need") +
      panel(714, 284, 170, 92, "Recommendations", "for the user / context") + '</g><g class="map-evaluations">';
    if (sharedEvaluation) {
      html += '<g class="map-focus"><rect class="map-evaluation-field" x="948" y="104" width="205" height="272" rx="30"/>' +
        text(1050, 187, "Shared evaluation") + text(1050, 214, "pools + judgments", "map-detail") +
        '<path class="map-evaluation-divider" d="M 970 240 H 1131"/>' +
        text(1050, 275, "Task-specific needs", "map-detail") + text(1050, 299, "still define relevance", "map-detail") + '</g>';
    } else {
      html += panel(948, 104, 205, 92, "Search evaluation", "relevance to the request", "map-evaluation") +
        panel(948, 284, 205, 92, "Rec evaluation", "interest / engagement", "map-evaluation");
    }
    return html + '</g>' + data(config, id) + '</svg>';
  }

  function render(config) {
    var route = blocks.map(function (label, i) {
      var active = config.block === i + 1;
      return '<li class="' + (active ? "is-current" : "") + '"><a href="#' + blockIds[i] + '" aria-label="Go to Block ' + (i + 1) + ': ' + label + '"' + (active ? ' aria-current="step"' : '') + '><span>' + (i + 1) + '</span>' + label + '</a></li>';
    }).join("");
    var className = "discovery-map-slide" + (config.walkthrough ? " discovery-map-guided" : "") +
      (config.emphasis ? " discovery-map-focused" : "");
    var emphasis = config.emphasis ? ' data-map-emphasis="' + escape(config.emphasis) + '"' : '';
    return '<div class="' + className + '"' + emphasis + '>' + diagram(config) + (config.walkthrough || '') +
      '<p class="discovery-map-takeaway">' + escape(config.takeaway) + '</p>' +
      '<ol class="discovery-map-route" aria-label="Tutorial blocks">' + route + '</ol></div>';
  }

  window.USRWDiscoveryMap = {
    render: render,
    register: function (config) {
      window.USRWDeck.registerSlide({
        id: config.id, title: config.title, layout: "discovery-map", mode: "core",
        modeLabel: "Block " + config.block + " · " + blocks[config.block - 1],
        status: "DRAFT", showMeta: false, role: config.role,
        citations: config.citations || [], html: render(config)
      });
    }
  };
}());
