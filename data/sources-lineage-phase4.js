(function registerAlgoriaPhase4LineageSources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  registry.registerPart({
    id: "sources-lineage-phase4",
    sources: [
      { id: "source-yen-k-shortest-1971", type: "paper", title: "Finding the K Shortest Loopless Paths in a Network", year: 1971, authors: ["Jin Y. Yen"], url: "https://doi.org/10.1287/mnsc.17.11.712" },
      { id: "source-label-propagation-2007", type: "paper", title: "Near Linear Time Algorithm to Detect Community Structures in Large-Scale Networks", year: 2007, authors: ["Usha Nandini Raghavan", "Réka Albert", "Soundar Kumara"], url: "https://doi.org/10.1103/PhysRevE.76.036106" },
      { id: "source-louvain-2008", type: "paper", title: "Fast Unfolding of Communities in Large Networks", year: 2008, authors: ["Vincent D. Blondel", "Jean-Loup Guillaume", "Renaud Lambiotte", "Etienne Lefebvre"], url: "https://doi.org/10.1088/1742-5468/2008/10/P10008" },
      { id: "source-mean-shift-2002", type: "paper", title: "Mean Shift: A Robust Approach Toward Feature Space Analysis", year: 2002, authors: ["Dorin Comaniciu", "Peter Meer"], url: "https://doi.org/10.1109/34.1000236" },
      { id: "source-differential-evolution-1997", type: "paper", title: "Differential Evolution — A Simple and Efficient Heuristic for Global Optimization over Continuous Spaces", year: 1997, authors: ["Rainer Storn", "Kenneth Price"], url: "https://doi.org/10.1023/A:1008202821328" },
      { id: "source-hits-pagerank-framework-2001", type: "paper", title: "PageRank, HITS and a Unified Framework for Link Analysis", year: 2001, authors: ["Chris Ding", "Xiaofeng He", "Parry Husbands", "Hongyuan Zha", "Horst Simon"], url: "https://www.osti.gov/servlets/purl/813492" },
      { id: "source-arnoldi-lanczos-comparison-1994", type: "paper", title: "GMRES/CR and Arnoldi/Lanczos as Matrix Approximation Problems", year: 1994, authors: ["Anne Greenbaum", "Lloyd N. Trefethen"], url: "https://doi.org/10.1137/0915025" }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
