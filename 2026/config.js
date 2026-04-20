const CONFIG = {
  contactEmail: "usrw2026@googlegroups.com",
};

const DATA = {
  topics: [
    { text: "Unified models for search and recommendation", detail: "joint objectives, shared item/user representations, cross-task transfer" },
    { text: "Sequential, cross-scenario user modelling", detail: "co-encoding queries and interactions; intent/session discovery across search and feed" },
    { text: "\u201CSearch as recommendation\u201D and \u201Crecommendation as search\u201D", detail: "blending exact matches with collaborative signals; slates grouped by intent" },
    { text: "Generative retrieval and Semantic IDs for unified discovery", detail: "tokenising items, seq2seq ranking, shared architectures" },
    { text: "LLMs for query understanding, intent elicitation, and query synthesis", detail: "synthetic queries, autocomplete, document expansion" },
    { text: "Agentic discovery assistants", detail: "LLM routers/planners that decide when to search vs. recommend; multi-step discovery" },
    { text: "Retrieval-augmented generation (RAG) for recommendation and search" },
    { text: "Explainability and results organisation for mixed IR/RecSys slates" },
    { text: "User interaction paradigms for unified discovery", detail: "mixed-initiative interfaces, conversational search-and-recommend, proactive suggestions within search flows" },
    { text: "User studies and UX evaluation of blended search/recommendation experiences", detail: "mental models, perceived control, satisfaction across interaction modes" },
    { text: "Shared infrastructure for search and recommendation", detail: "unified catalogs and interaction logs; semantic identifiers bridging text, behaviour, and media" },
    { text: "Evaluation across paradigms", detail: "bridging Cranfield-style IR eval with RecSys A/B tests; unified metrics; generalisation and cold-start stress tests" },
    { text: "Efficiency and latency for instant, blended experiences" },
    { text: "Robustness, bias, and safety in unified discovery" },
    { text: "Industrial case studies and lessons learned" },
    { text: "Community resources", detail: "shared benchmarks/datasets for joint IR-Rec tasks; reproducible baselines and open challenges" },
  ],
  importantDates: [
    { label: "Paper submission deadline", date: "July 20, 2026", emphasis: true },
    { label: "Reviewer deadline", date: "August 7, 2026", emphasis: false },
    { label: "Author notification", date: "August 14, 2026", emphasis: true },
    { label: "Camera-ready deadline", date: "August 28, 2026", emphasis: false },
    { label: "Workshop", date: "October 2, 2026", emphasis: true },
  ],
  organizers: [
    { name: "Aleksandr V. Petrov", affiliation: "Spotify, United Kingdom" },
    { name: "Sean MacAvaney", affiliation: "University of Glasgow, United Kingdom" },
    { name: "Gustavo Penha", affiliation: "Spotify, United States" },
    { name: "L\u00e9a Briand", affiliation: "Deezer, France" },
    { name: "Cl\u00e9mence Vast", affiliation: "Deezer, France" },
  ],
  advisoryBoard: [
    { name: "Mounia Lalmas", affiliation: "Spotify" },
    { name: "Craig Macdonald", affiliation: "University of Glasgow" },
    { name: "Hugues Bouchard", affiliation: "Spotify" },
    { name: "Elena V. Epure", affiliation: "Deezer & Idiap Research Institute" },
  ],
};

const RENDERERS = {
  topics: (el) => {
    DATA.topics.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.detail ? `${t.text} (${t.detail})` : t.text;
      el.appendChild(li);
    });
  },
  dates: (el) => {
    DATA.importantDates.forEach((d) => {
      const tr = document.createElement("tr");
      const label = document.createElement("td");
      label.textContent = d.label;
      const date = document.createElement("td");
      if (d.emphasis) {
        const strong = document.createElement("strong");
        strong.textContent = d.date;
        date.appendChild(strong);
      } else {
        date.textContent = d.date;
      }
      tr.appendChild(label);
      tr.appendChild(date);
      el.appendChild(tr);
    });
  },
  "organizers-grid": (el) => {
    DATA.organizers.forEach((o) => {
      const div = document.createElement("div");
      div.className = "organizer";
      const strong = document.createElement("strong");
      strong.textContent = o.name;
      div.appendChild(strong);
      div.appendChild(document.createElement("br"));
      div.appendChild(document.createTextNode(o.affiliation));
      el.appendChild(div);
    });
  },
  "organizers-list": (el) => {
    DATA.organizers.forEach((o) => {
      const li = document.createElement("li");
      li.textContent = `${o.name} \u2014 ${o.affiliation}`;
      el.appendChild(li);
    });
  },
  advisory: (el) => {
    DATA.advisoryBoard.forEach((p) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = p.name;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(` \u2014 ${p.affiliation}`));
      el.appendChild(li);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    const value = CONFIG[key];
    if (!value) return;

    if (el.tagName === "A" && value.includes("@")) {
      el.href = `mailto:${value}`;
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-render]").forEach((el) => {
    const key = el.getAttribute("data-render");
    const renderer = RENDERERS[key];
    if (renderer) renderer(el);
  });
});
