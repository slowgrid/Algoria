(function registerAlgoriaWave180Relations(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  const rows = [
    ["algo-comb-sort", "problem-sorting", "technique-gap-reduction", "ds-array", "domain-data-processing"],
    ["algo-floyd-rivest-selection", "problem-selection", "technique-randomized", "ds-array", "domain-data-processing"],
    ["algo-dfs-topological-sort", "problem-topological-ordering", "technique-depth-first-traversal", "ds-stack", "domain-graph"],
    ["algo-warshall-transitive-closure", "problem-transitive-closure", "technique-dynamic-programming", "ds-adjacency-matrix", "domain-graph"],
    ["algo-spfa", "problem-shortest-path", "technique-iterative-refinement", "ds-queue", "domain-graph"],
    ["algo-chu-liu-edmonds", "problem-minimum-arborescence", "technique-greedy", "ds-adjacency-list", "domain-graph"],
    ["algo-fleury", "problem-eulerian-trail", "technique-greedy", "ds-adjacency-list", "domain-graph"],
    ["algo-tarjan-offline-lca", "problem-lowest-common-ancestor", "technique-offline-union-find", "ds-disjoint-set-forest", "domain-graph"],
    ["algo-kasai-lcp", "problem-lcp-array-construction", "technique-preprocessing", "ds-suffix-array", "domain-string"],
    ["algo-horspool-string-matching", "problem-string-matching", "technique-preprocessing", "ds-array", "domain-string"],
    ["algo-hirschberg-sequence-alignment", "problem-global-sequence-alignment", "technique-divide-and-conquer", "ds-array", "domain-string"],
    ["algo-booth-minimum-rotation", "problem-minimal-string-rotation", "technique-preprocessing", "ds-array", "domain-string"],
    ["algo-bisection-root-finding", "problem-root-finding", "technique-decrease-and-conquer", null, "domain-numerical-computing"],
    ["algo-secant-root-finding", "problem-root-finding", "technique-iterative-refinement", null, "domain-numerical-computing"],
    ["algo-horner", "problem-polynomial-evaluation", "technique-nested-evaluation", "ds-array", "domain-mathematics"],
    ["algo-power-iteration", "problem-dominant-eigenpair", "technique-iterative-refinement", "ds-matrix", "domain-numerical-computing"],
    ["algo-scrypt", "problem-password-hashing", "technique-memory-hard", "ds-array", "domain-cryptography"],
    ["algo-bcrypt", "problem-password-hashing", "technique-adaptive", "ds-array", "domain-cryptography"],
    ["algo-ecdsa", "problem-digital-signature", "technique-elliptic-curve", "ds-array", "domain-cryptography"],
    ["algo-lzma", "problem-lossless-compression", "technique-dictionary-coding", "ds-array", "domain-compression"],
    ["algo-chan-convex-hull", "problem-convex-hull", "technique-divide-and-conquer", "ds-array", "domain-computational-geometry"],
    ["algo-cohen-sutherland", "problem-line-clipping", "technique-region-coding", "ds-array", "domain-computational-geometry"],
    ["algo-ear-clipping-triangulation", "problem-planar-triangulation", "technique-incremental", "ds-linked-list", "domain-computational-geometry"],
    ["algo-cart", "problem-supervised-classification", "technique-decision-tree-learning", "ds-binary-search-tree", "domain-machine-learning"],
    ["algo-gradient-boosting", "problem-ensemble-classification", "technique-boosting", "ds-array", "domain-machine-learning"],
    ["algo-pca-svd", "problem-dimensionality-reduction", "technique-orthogonal-transformation", "ds-matrix", "domain-machine-learning"],
    ["algo-k-means-plus-plus", "problem-clustering", "technique-randomized", "ds-array", "domain-machine-learning"],
    ["algo-l-bfgs", "problem-continuous-optimization", "technique-quasi-newton", "ds-array", "domain-optimization"],
    ["algo-ista", "problem-continuous-optimization", "technique-proximal-gradient", "ds-array", "domain-optimization"],
    ["algo-fista", "problem-continuous-optimization", "technique-accelerated-proximal-gradient", "ds-array", "domain-optimization"]
  ];
  const relations = [];
  for (const [algorithmId, problemId, techniqueId, dataStructureId, domainId] of rows) {
    const slug = algorithmId.slice(5);
    relations.push({ id: `rel-wave180-${slug}-solves`, from: algorithmId, type: "solves", to: problemId });
    relations.push({ id: `rel-wave180-${slug}-technique`, from: algorithmId, type: "uses_technique", to: techniqueId });
    if (dataStructureId) relations.push({ id: `rel-wave180-${slug}-data-structure`, from: algorithmId, type: "uses_data_structure", to: dataStructureId });
    relations.push({ id: `rel-wave180-${slug}-domain`, from: algorithmId, type: "belongs_to_domain", to: domainId });
  }

  relations.push(
    { id: "rel-wave180-comb-variant-bubble", from: "algo-comb-sort", type: "variant_of", to: "algo-bubble-sort", evidenceIds: ["source-comb-sort-1991", "source-nist-bubble-sort"], treePriority: 84 },
    { id: "rel-wave180-floyd-rivest-improves-quickselect", from: "algo-floyd-rivest-selection", type: "improves_upon", to: "algo-quickselect", evidenceIds: ["source-floyd-rivest-1975", "source-clrs-fourth"], localizedNotes: { ko: "표본 기반 구간 축소로 Quickselect보다 더 적은 기대 비교 횟수를 목표로 하지만 최악 선형 보장은 없다.", en: "Sampling narrows the active region to improve expected comparison counts over Quickselect, without a worst-case linear guarantee." }, treePriority: 88 },
    { id: "rel-wave180-dfs-topological-variant", from: "algo-dfs-topological-sort", type: "variant_of", to: "algo-topological-sort", evidenceIds: ["source-clrs-fourth", "source-princeton-directed-graphs"], treePriority: 86 },
    { id: "rel-wave180-spfa-variant-bellman-ford", from: "algo-spfa", type: "variant_of", to: "algo-bellman-ford", evidenceIds: ["source-clrs-fourth", "source-princeton-shortest-paths"], treePriority: 82 },
    { id: "rel-wave180-horspool-variant-boyer-moore", from: "algo-horspool-string-matching", type: "variant_of", to: "algo-boyer-moore", evidenceIds: ["source-horspool-1980", "source-gusfield-strings"], treePriority: 88 },
    { id: "rel-wave180-hirschberg-improves-lcs", from: "algo-hirschberg-sequence-alignment", type: "improves_upon", to: "algo-longest-common-subsequence", evidenceIds: ["source-hirschberg-1975", "source-gusfield-strings"], localizedNotes: { ko: "동일한 O(nm) 시간에서 정렬 경로 복원 공간을 O(min(n,m))으로 줄인다.", en: "It reconstructs an alignment in O(min(n,m)) space while retaining O(nm) time." }, treePriority: 90 },
    { id: "rel-wave180-secant-variant-newton", from: "algo-secant-root-finding", type: "variant_of", to: "algo-newton-raphson", evidenceIds: ["source-burden-faires-numerical-analysis", "source-nocedal-wright-numerical-optimization"], treePriority: 78 },
    { id: "rel-wave180-scrypt-improves-pbkdf2", from: "algo-scrypt", type: "improves_upon", to: "algo-pbkdf2", evidenceIds: ["source-percival-scrypt-2009", "source-rfc-7914"], localizedNotes: { ko: "조정 가능한 대용량 메모리 비용을 추가해 전용 병렬 하드웨어의 비용 우위를 줄인다.", en: "It adds configurable memory cost to reduce the advantage of specialized parallel hardware." }, treePriority: 94 },
    { id: "rel-wave180-kmeans-plus-improves-kmeans", from: "algo-k-means-plus-plus", type: "improves_upon", to: "algo-k-means", evidenceIds: ["source-kmeans-plus-plus-2007", "source-elements-statistical-learning"], localizedNotes: { ko: "거리 가중 초기화로 임의 초기 중심의 실패 가능성을 줄이고 기대 O(log k) 근사 보장을 제공한다.", en: "Distance-weighted seeding reduces bad random starts and gives an expected O(log k) approximation guarantee." }, treePriority: 95 },
    { id: "rel-wave180-lbfgs-variant-bfgs", from: "algo-l-bfgs", type: "variant_of", to: "algo-bfgs", evidenceIds: ["source-lbfgs-1989", "source-nocedal-wright-numerical-optimization"], treePriority: 92 },
    { id: "rel-wave180-fista-improves-ista", from: "algo-fista", type: "improves_upon", to: "algo-ista", evidenceIds: ["source-fista-2009", "source-ista-2004"], localizedNotes: { ko: "볼록 복합 목적함수의 목적값 오차 수렴률을 O(1/t)에서 O(1/t²)로 가속한다.", en: "For convex composite objectives it accelerates the objective residual rate from O(1/t) to O(1/t²)." }, treePriority: 98 },
    { id: "rel-wave180-pbkdf2-derived-hmac", from: "algo-pbkdf2", type: "derived_from", to: "algo-hmac", evidenceIds: ["source-rfc-8018", "source-rfc-2104"], treePriority: 83 },
    { id: "rel-wave180-floyd-warshall-derived-warshall", from: "algo-floyd-warshall", type: "derived_from", to: "algo-warshall-transitive-closure", evidenceIds: ["source-warshall-1962", "source-floyd-1962"], treePriority: 91 },
    { id: "rel-wave180-johnson-improves-floyd-warshall", from: "algo-johnson", type: "improves_upon", to: "algo-floyd-warshall", evidenceIds: ["source-johnson-apsp-1977", "source-clrs-fourth"], localizedNotes: { ko: "희소 그래프에서 O(VE log V)의 상한으로 Floyd–Warshall의 O(V³)보다 유리할 수 있으며, 조밀 그래프 전체에 대한 절대적 우위는 아니다.", en: "Its O(VE log V) bound can improve on O(V³) for sparse graphs; it is not an unconditional improvement for dense graphs." }, treePriority: 89 },
    { id: "rel-wave180-lzma-hybrid-lz77", from: "algo-lzma", type: "hybrid_of", to: "algo-lz77", evidenceIds: ["source-lzma-sdk", "source-princeton-compression"] },
    { id: "rel-wave180-lzma-hybrid-arithmetic", from: "algo-lzma", type: "hybrid_of", to: "algo-arithmetic-coding", evidenceIds: ["source-lzma-sdk", "source-princeton-compression"] },
    { id: "rel-wave180-chan-hybrid-graham", from: "algo-chan-convex-hull", type: "hybrid_of", to: "algo-graham-scan", evidenceIds: ["source-chan-convex-hull-1996", "source-de-berg-geometry"] },
    { id: "rel-wave180-chan-hybrid-jarvis", from: "algo-chan-convex-hull", type: "hybrid_of", to: "algo-jarvis-march", evidenceIds: ["source-chan-convex-hull-1996", "source-de-berg-geometry"] },
    { id: "rel-wave180-gradient-boosting-inspired-adaboost", from: "algo-gradient-boosting", type: "inspired_by", to: "algo-adaboost", evidenceIds: ["source-friedman-gradient-boosting-2001", "source-elements-statistical-learning"] },
    { id: "rel-wave180-cart-related-id3", from: "algo-cart", type: "related_to", to: "algo-id3", evidenceIds: ["source-cart-1984", "source-sklearn-trees"] }
  );

  registry.registerPart({ id: "relations-wave180", relations });
})(typeof window !== "undefined" ? window : globalThis);
