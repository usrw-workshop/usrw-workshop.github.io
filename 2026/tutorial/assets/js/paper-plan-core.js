(function () {
  var PAPERS = {
    belkinCroft: {
      paper: "Information Filtering and Information Retrieval: Two Sides of the Same Coin?",
      by: "Nicholas J. Belkin and W. Bruce Croft (1992)"
    },
    covington: {
      paper: "Deep Neural Networks for YouTube Recommendations",
      by: "Paul Covington, Jay Adams, and Emre Sargin (2016)"
    },
    dsi: {
      paper: "Transformer Memory as a Differentiable Search Index",
      by: "Yi Tay et al. (2022)"
    },
    fab: {
      paper: "Fab: Content-Based, Collaborative Recommendation",
      by: "Marko Balabanović and Yoav Shoham (1997)"
    },
    grouplens: {
      paper: "GroupLens: An Open Architecture for Collaborative Filtering of Netnews",
      by: "Paul Resnick et al. (1994)"
    },
    jsr: {
      paper: "Joint Modeling and Optimization of Search and Recommendation",
      by: "Hamed Zamani and W. Bruce Croft (2018)"
    },
    karlgren: {
      paper: "An Algebra for Recommendations: Using Reader Data as a Basis for Measuring Document Proximity",
      by: "Jussi Karlgren (1990)"
    },
    koren: {
      paper: "Matrix Factorization Techniques for Recommender Systems",
      by: "Yehuda Koren, Robert Bell, and Chris Volinsky (2009)"
    },
    kuaisar: {
      paper: "KuaiSAR: A Unified Search And Recommendation Dataset",
      by: "Zhongxiang Sun et al. (2023)"
    },
    llmJudges: {
      paper: "Do LLM-judges Align with Human Relevance in Cranfield-style Recommender Evaluation?",
      by: "Gustavo Penha et al. (2025)"
    },
    luhn: {
      paper: "A Business Intelligence System",
      by: "H. P. Luhn (1958)"
    },
    palumboAgentic: {
      paper: "You Say Search, I Say Recs: A Scalable Agentic Approach to Query Understanding and Exploratory Search at Spotify",
      by: "Enrico Palumbo et al. (2025)"
    },
    p5: {
      paper: "Recommendation as Language Processing (P5)",
      by: "Shijie Geng et al. (2022)"
    },
    penhaBridge: {
      paper: "Bridging Search and Recommendation in Generative Retrieval: Does One Task Help the Other?",
      by: "Gustavo Penha et al. (2024)"
    },
    penhaSemanticIds: {
      paper: "Semantic IDs for Joint Generative Search and Recommendation",
      by: "Gustavo Penha et al. (2025)"
    },
    salton: {
      paper: "A Vector Space Model for Automatic Indexing",
      by: "Gerard Salton, A. Wong, and C. S. Yang (1975)"
    },
    schnabel: {
      paper: "Recommendations as Treatments: Debiasing Learning and Evaluation",
      by: "Tobias Schnabel et al. (2016)"
    },
    sesrec: {
      paper: "When Search Meets Recommendation: Learning Disentangled Search Representation for Recommendation",
      by: "Zihua Si et al. (2023)"
    },
    smuckerChamani: {
      paper: "Extending MovieLens-32M to Provide New Evaluation Objectives",
      by: "Mark D. Smucker and Houmaan Chamani (2025)"
    },
    sparckJones: {
      paper: "A Statistical Interpretation of Term Specificity and Its Application in Retrieval",
      by: "Karen Spärck Jones (1972)"
    },
    syskillWebert: {
      paper: "Syskill & Webert: Identifying Interesting Web Sites",
      by: "Michael J. Pazzani, Jack Muramatsu, and Daniel Billsus (1996)"
    },
    tapestry: {
      paper: "Using Collaborative Filtering to Weave an Information Tapestry",
      by: "David Goldberg et al. (1992)"
    },
    tiger: {
      paper: "Recommender Systems with Generative Retrieval",
      by: "Shashank Rajput et al. (2023)"
    },
    unicorn: {
      paper: "Joint Modeling of Search and Recommendations Via an Unified Contextual Recommender (UniCoRn)",
      by: "Moumita Bhattacharya, Vito Ostuni, and Sudarshan Lamkhede (2024)"
    },
    unifiedssr: {
      paper: "UnifiedSSR: A Unified Framework of Sequential Search and Recommendation",
      by: "Jiayi Xie, Shang Liu, Gao Cong, and Zhenzhong Chen (2024)"
    },
    user: {
      paper: "USER: A Unified Information Search and Recommendation Model based on Integrated Behavior Sequence",
      by: "Jing Yao et al. (2021)"
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

  function noPaper(label, why) {
    return { paper: label, by: "Deck scaffold", why: why };
  }

  window.USRWPaperPlan = Object.assign(window.USRWPaperPlan || {}, {
    title: [
      noPaper("No paper planned", "Opening metadata only; use proposal and organiser context.")
    ],
    promise: [
      noPaper("No single paper planned", "Sets the repeated diagnostic question for the whole tutorial.")
    ],
    map: [
      noPaper("No paper planned", "Navigation slide for the revised 60/90-minute structure.")
    ],
    "block-1-query-profile-hook": [
      cite("luhn", "Historical antecedent for profiles, dissemination, retrieval, and feedback."),
      cite("tapestry", "Shows a tested query becoming a persistent filter.")
    ],
    "block-1-belkin-croft-contract": [
      cite("belkinCroft", "Narrative anchor: defines retrieval and filtering as related but not identical."),
    ],
    "block-1-luhn-architecture": [
      cite("luhn", "Historical antecedent for profiles, dissemination, retrieval, and feedback.")
    ],
    "block-1-tapestry-bridge": [
      cite("tapestry", "Shows early mixing of query language, annotations, saved filters, and social filtering.")
    ],
    "block-1-layered-diagnostic": [
      cite("belkinCroft", "Narrative anchor: defines retrieval and filtering as related but not identical."),
      cite("luhn", "Historical antecedent for profiles, dissemination, retrieval, and feedback."),
      cite("tapestry", "Shows a tested query becoming a persistent filter.")
    ],
    "common-roots": [
      cite("sparckJones", "Term-specificity heritage; ground IDF without overstating it."),
      cite("salton", "Vector-space IR root later reused by content-based recommendation."),
      cite("syskillWebert", "Narrative anchor: ratings-trained content profiles feed recommendation, query construction, and result annotation."),
      cite("fab", "Hybrid bridge where content-derived profiles support item matching and user matching.")
    ],
    "historical-split": [
      cite("karlgren", "Historical hinge: reader grades define document proximity while recommendation still begins from a document query."),
      cite("grouplens", "Shows the same reader-item observations used to predict a missing score for one reader.")
    ],
    "block-3-latent-factors": [
      cite("koren", "Mature interaction-centric shift: user and item coordinates are learned from observed ratings.")
    ],
    "behavior-transfer": [
      cite("covington", "Narrative anchor: search tokens feed a recommendation candidate generator without task collapse.")
    ],
    "block-4-joint-vision": [
      cite("jsr", "Explicit joint search/recommendation formulation over shared items, with empirical caveats.")
    ],
    "shared-catalogues-and-logs": [
      cite("user", "Narrative anchor: queries, search clicks, and recommendation behavior become one heterogeneous sequence.")
    ],
    "block-5-logged-path": [
      cite("kuaisar", "Data reality check: aligned users, items, transitions, exposures, and feedback labels.")
    ],
    "shared-models-tradeoffs": [
      cite("sesrec", "Cautionary bridge: selective transfer and negative-transfer evidence."),
      cite("unifiedssr", "Narrative anchor: shared representations/encoders plus task-specific components and trade-offs."),
      cite("unicorn", "Production-facing context-conditioned ranker pattern."),
      cite("usr", "Production-facing multi-scenario ranking-layer pattern.")
    ],
    "generative-retrieval-semantic-ids": [
      cite("p5", "Language as common task protocol, but recommendation-only evaluation."),
      cite("dsi", "Search-side generative retrieval root."),
      cite("tiger", "Recommendation-side generative retrieval counterpart."),
      cite("penhaBridge", "Narrative anchor: genuine joint generative S&R hinge with conditional gains."),
      cite("penhaSemanticIds", "Identifier-layer trade-off evidence.")
    ],
    "evaluation-cultures": [
      cite("schnabel", "Narrative anchor: exposure/logged feedback are treatments, not neutral labels."),
      cite("palumboAgentic", "Agentic modular counterpoint to one-model unification."),
      cite("smuckerChamani", "Human relevance/pooling bridge from IR-style evaluation to recommendation."),
      cite("llmJudges", "Modern evaluation caution around LLM judging.")
    ],
    "decision-framework": [
      noPaper("No new paper planned", "Synthesis checkpoint: identify layer, task-specific remainder, and over-unification failure mode.")
    ],
    "core-recap": [
      noPaper("No new paper planned", "Recap synthesizes the core evidence rather than introducing claims.")
    ]
  });
}());
