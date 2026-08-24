(function registerAlgoriaMeta(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    "id": "meta",
    "meta": {
      "schemaVersion": 3,
      "title": "Algoria",
      "language": "ko",
      "contentPolicyVersion": 3,
      "qualityGate": {
        "minimumNewAlgorithmTier": "standard",
        "reviewedMinimumTier": "standard",
        "reviewedForbiddenTokens": [
          "은(는)",
          "initialize the required state"
        ],
        "legacyDraftAlgorithmIds": []
      },
      "implementationPolicy": {
        "defaultStatus": "illustrative",
        "verifiedAlgorithmIds": [
          "algo-quick-sort",
          "algo-merge-sort",
          "algo-heap-sort",
          "algo-quickselect",
          "algo-dijkstra",
          "algo-bellman-ford",
          "algo-floyd-warshall",
          "algo-kmp",
          "algo-levenshtein-distance",
          "algo-karatsuba",
          "algo-miller-rabin",
          "algo-graham-scan",
          "algo-median-of-medians",
          "algo-binary-gcd",
          "algo-comb-sort",
          "algo-dfs-topological-sort",
          "algo-warshall-transitive-closure",
          "algo-bisection-root-finding",
          "algo-horner",
          "algo-bitonic-sort",
          "algo-odd-even-merge-sort",
          "algo-introselect",
          "algo-karger-min-cut",
          "algo-lengauer-tarjan-dominators",
          "algo-duval-lyndon-factorization",
          "algo-bareiss",
          "algo-golomb-coding",
          "algo-held-karp-tsp"
        ],
        "pendingAlgorithmIds": []
      },
      "locales": [
        "ko",
        "en"
      ],
      "defaultLocale": "ko"
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
