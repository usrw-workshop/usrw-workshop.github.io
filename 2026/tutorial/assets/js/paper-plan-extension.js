(function () {
  var GAP = "missing citation / review gap";

  var PAPERS = {
    audioboost: {
      paper: "AudioBoost: Increasing Audiobook Retrievability in Spotify Search with Synthetic Query Generation",
      by: "Enrico Palumbo et al. (2025)"
    },
    dsi: {
      paper: "Transformer Memory as a Differentiable Search Index",
      by: "Yi Tay et al. (2022)"
    },
    gloss: {
      paper: "GLoSS: Generative Language Models with Semantic Search for Sequential Recommendation",
      by: "Krishna Acharya, Aleksandr V. Petrov, and Juba Ziani (2025)"
    },
    kuaisar: {
      paper: "KuaiSAR: A Unified Search And Recommendation Dataset",
      by: "Zhongxiang Sun et al. (2023)"
    },
    llmJudges: {
      paper: "Do LLM-judges Align with Human Relevance in Cranfield-style Recommender Evaluation?",
      by: "Gustavo Penha et al. (2025)"
    },
    palumboAgentic: {
      paper: "You Say Search, I Say Recs: A Scalable Agentic Approach to Query Understanding and Exploratory Search at Spotify",
      by: "Enrico Palumbo et al. (2025)"
    },
    penhaBridge: {
      paper: "Bridging Search and Recommendation in Generative Retrieval: Does One Task Help the Other?",
      by: "Gustavo Penha et al. (2024)"
    },
    penhaSemanticIds: {
      paper: "Semantic IDs for Joint Generative Search and Recommendation",
      by: "Gustavo Penha et al. (2025)"
    },
    schnabel: {
      paper: "Recommendations as Treatments: Debiasing Learning and Evaluation",
      by: "Tobias Schnabel et al. (2016)"
    },
    smuckerChamani: {
      paper: "Extending MovieLens-32M to Provide New Evaluation Objectives",
      by: "Mark D. Smucker and Houmaan Chamani (2025)"
    },
    text2playlist: {
      paper: "Text2Playlist: Generating Personalized Playlists from Text on Deezer",
      by: "Mathieu Delcluze et al. (2025)"
    },
    tiger: {
      paper: "Recommender Systems with Generative Retrieval",
      by: "Shashank Rajput et al. (2023)"
    },
    unicorn: {
      paper: "Joint Modeling of Search and Recommendations Via an Unified Contextual Recommender (UniCoRn)",
      by: "Moumita Bhattacharya, Vito Ostuni, and Sudarshan Lamkhede (2024)"
    },
    usr: {
      paper: "A Unified Search and Recommendation Framework Based on Multi-Scenario Learning for Ranking in E-commerce",
      by: "Jinhan Liu et al. (2024)"
    }
  };

  function cite(key, why) {
    var source = PAPERS[key];
    return {
      paper: source.paper,
      by: source.by,
      why: why
    };
  }

  function gap(topic, why) {
    return {
      paper: topic,
      by: "Citation/review needed",
      why: why,
      status: GAP
    };
  }

  function noPaper(label, why) {
    return { paper: label, by: "Deck scaffold", why: why };
  }

  window.USRWPaperPlan = Object.assign(window.USRWPaperPlan || {}, {
    "extension-evaluation-portfolio": [
      cite("kuaisar", "Aligned users/items, transitions, exposures, and feedback labels for joint evaluation."),
      cite("schnabel", "Counterfactual correction for policy-contaminated logs."),
      cite("smuckerChamani", "Narrative anchor: human labels and objective mismatch."),
      cite("llmJudges", "Scalable judging and system-ranking agreement caveats.")
    ],
    "extension-semantic-id-design": [
      cite("dsi", "Search-side generated identifiers and model-memory caveats."),
      cite("tiger", "Recommendation-side semantic-ID adaptation."),
      cite("penhaBridge", "Joint generative training and task mismatch."),
      cite("penhaSemanticIds", "Narrative anchor: ID-design choices privilege tasks differently."),
      cite("gloss", "Modular generate-text-then-dense-retrieve alternative.")
    ],
    "extension-operational-checklist": [
      cite("unicorn", "Shared contextual production architecture."),
      cite("usr", "Multi-scenario production ranking."),
      cite("text2playlist", "Fused text-to-recommendation interface in music."),
      cite("audioboost", "Synthetic query generation and document augmentation as modular production bridge."),
      cite("palumboAgentic", "Narrative anchor: router/tool orchestration without monolithic unification.")
    ],
    "research-agenda": [
      gap("Intent taxonomy and user control across surfaces", "Known-item, exploratory, browsing, feeds, playlists, conversation, transparency, and controllability."),
      gap("Serving constraints and catalogue lifecycle", "Latency, freshness, index updates, caching, ANN retrieval, fallbacks, cold start, and catalogue drift."),
      gap("Long-term, multi-objective, and marketplace evaluation", "Retention, diversity, novelty, calibration, provider welfare, and feedback loops."),
      gap("Governance, safety, and agent evaluation", "Consent, data minimization, grounding, routing quality, tool choice, invalid outputs, and multi-turn satisfaction.")
    ],
    "resources-and-qa": [
      noPaper("No new paper planned", "Closing slide links to the manifest, reviewed corpus, and discussion prompts.")
    ]
  });
}());
