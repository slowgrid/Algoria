(function registerAlgoriaTechniqueRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "relations-techniques",
    relations: [
      {
        "id": "rel-quick-uses-divide-and-conquer",
        "from": "algo-quick-sort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-merge-uses-divide-and-conquer",
        "from": "algo-merge-sort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-dijkstra-uses-greedy",
        "from": "algo-dijkstra",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-demo-001",
        "from": "algo-randomized-quick-sort",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {
        "id": "rel-demo-002",
        "from": "algo-a-star",
        "type": "uses_technique",
        "to": "technique-heuristic-search"
      },
      {
        "id": "rel-demo-004",
        "from": "algo-dual-pivot-quick-sort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-demo-006",
        "from": "algo-three-way-quick-sort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-demo-011",
        "from": "algo-insertion-sort",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-demo-018",
        "from": "algo-binary-search",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-demo-021",
        "from": "algo-linear-search",
        "type": "uses_technique",
        "to": "technique-brute-force"
      },
      {
        "id": "rel-demo-024",
        "from": "algo-ternary-search",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-demo-027",
        "from": "algo-quickselect",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-demo-036",
        "from": "algo-bellman-ford",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-demo-039",
        "from": "algo-floyd-warshall",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-demo-042",
        "from": "algo-bidirectional-dijkstra",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-demo-046",
        "from": "algo-kruskal",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-demo-050",
        "from": "algo-prim",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-demo-064",
        "from": "algo-rabin-karp",
        "type": "uses_technique",
        "to": "technique-hashing"
      },
      {
        "id": "rel-demo-080",
        "from": "algo-fft",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-demo-084",
        "from": "algo-karatsuba",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-demo-093",
        "from": "algo-huffman-coding",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-phase2-ford-fulkerson-augmenting-path",
        "from": "algo-ford-fulkerson",
        "type": "uses_technique",
        "to": "technique-augmenting-path"
      },
      {
        "id": "rel-phase2-edmonds-karp-augmenting-path",
        "from": "algo-edmonds-karp",
        "type": "uses_technique",
        "to": "technique-augmenting-path"
      },
      {
        "id": "rel-phase2-dinic-blocking-flow",
        "from": "algo-dinic",
        "type": "uses_technique",
        "to": "technique-blocking-flow"
      },
      {
        "id": "rel-phase2-johnson-reweighting",
        "from": "algo-johnson",
        "type": "uses_technique",
        "to": "technique-reweighting"
      },
      {
        "id": "rel-phase2-levenshtein-dp",
        "from": "algo-levenshtein-distance",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase2-lcs-dp",
        "from": "algo-longest-common-subsequence",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase2-lis-dp",
        "from": "algo-longest-increasing-subsequence-dp",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase2-knapsack-dp",
        "from": "algo-zero-one-knapsack-dp",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase2-matrix-chain-dp",
        "from": "algo-matrix-chain-multiplication",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase2-needleman-wunsch-dp",
        "from": "algo-needleman-wunsch",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase1-kmp-preprocessing",
        "from": "algo-kmp",
        "type": "uses_technique",
        "to": "technique-preprocessing"
      },
      {
        "id": "rel-phase1-rsa-modular",
        "from": "algo-rsa",
        "type": "uses_technique",
        "to": "technique-modular-arithmetic"
      },
      {
        "id": "rel-phase2-introsort-divide",
        "from": "algo-introsort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase3-counting-distribution",
        "from": "algo-counting-sort",
        "type": "uses_technique",
        "to": "technique-distribution"
      },
      {
        "id": "rel-phase3-radix-distribution",
        "from": "algo-radix-sort",
        "type": "uses_technique",
        "to": "technique-distribution"
      },
      {
        "id": "rel-phase3-timsort-adaptive",
        "from": "algo-timsort",
        "type": "uses_technique",
        "to": "technique-adaptive"
      },
      {
        "id": "rel-phase3-boyer-preprocessing",
        "from": "algo-boyer-moore",
        "type": "uses_technique",
        "to": "technique-preprocessing"
      },
      {
        "id": "rel-phase3-aho-preprocessing",
        "from": "algo-aho-corasick",
        "type": "uses_technique",
        "to": "technique-preprocessing"
      },
      {
        "id": "rel-phase4-euclidean-decrease",
        "from": "algo-euclidean",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase4-aes-spn",
        "from": "algo-aes",
        "type": "uses_technique",
        "to": "technique-substitution-permutation-network"
      },
      {
        "id": "rel-phase4-dh-modular",
        "from": "algo-diffie-hellman",
        "type": "uses_technique",
        "to": "technique-modular-arithmetic"
      },
      {
        "id": "rel-phase4-sha256-merkle-damgard",
        "from": "algo-sha-256",
        "type": "uses_technique",
        "to": "technique-merkle-damgard"
      },
      {
        "id": "rel-phase4-lzw-dictionary",
        "from": "algo-lzw",
        "type": "uses_technique",
        "to": "technique-dictionary-coding"
      },
      {
        "id": "rel-phase5-z-preprocessing",
        "from": "algo-z-algorithm",
        "type": "uses_technique",
        "to": "technique-preprocessing"
      },
      {
        "id": "rel-phase5-graham-geometric-scan",
        "from": "algo-graham-scan",
        "type": "uses_technique",
        "to": "technique-geometric-scan"
      },
      {
        "id": "rel-phase5-kmeans-iterative-refinement",
        "from": "algo-k-means",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase5-simplex-basis-pivoting",
        "from": "algo-simplex",
        "type": "uses_technique",
        "to": "technique-basis-pivoting"
      },
      {
        "id": "rel-phase2-jarvis-march-technique-0",
        "from": "algo-jarvis-march",
        "type": "uses_technique",
        "to": "technique-gift-wrapping"
      },
      {
        "id": "rel-phase2-andrew-monotone-chain-technique-0",
        "from": "algo-andrew-monotone-chain",
        "type": "uses_technique",
        "to": "technique-geometric-scan"
      },
      {
        "id": "rel-phase2-quickhull-technique-0",
        "from": "algo-quickhull",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase2-closest-pair-divide-conquer-technique-0",
        "from": "algo-closest-pair-divide-conquer",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase2-bentley-ottmann-technique-0",
        "from": "algo-bentley-ottmann",
        "type": "uses_technique",
        "to": "technique-line-sweep"
      },
      {
        "id": "rel-phase2-dbscan-technique-0",
        "from": "algo-dbscan",
        "type": "uses_technique",
        "to": "technique-density-based"
      },
      {
        "id": "rel-phase2-knn-technique-0",
        "from": "algo-knn",
        "type": "uses_technique",
        "to": "technique-instance-based"
      },
      {
        "id": "rel-phase2-perceptron-technique-0",
        "from": "algo-perceptron",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase2-id3-technique-0",
        "from": "algo-id3",
        "type": "uses_technique",
        "to": "technique-decision-tree-learning"
      },
      {
        "id": "rel-phase2-pagerank-technique-0",
        "from": "algo-pagerank",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase2-chacha20-technique-0",
        "from": "algo-chacha20",
        "type": "uses_technique",
        "to": "technique-arx"
      },
      {
        "id": "rel-phase2-blake2-technique-0",
        "from": "algo-blake2",
        "type": "uses_technique",
        "to": "technique-arx"
      },
      {
        "id": "rel-phase2-argon2id-technique-0",
        "from": "algo-argon2id",
        "type": "uses_technique",
        "to": "technique-memory-hard"
      },
      {
        "id": "rel-phase2-ecdh-technique-0",
        "from": "algo-ecdh",
        "type": "uses_technique",
        "to": "technique-elliptic-curve"
      },
      {
        "id": "rel-phase2-arithmetic-coding-technique-0",
        "from": "algo-arithmetic-coding",
        "type": "uses_technique",
        "to": "technique-entropy-coding"
      },
      {
        "id": "rel-phase2-run-length-encoding-technique-0",
        "from": "algo-run-length-encoding",
        "type": "uses_technique",
        "to": "technique-run-length"
      },
      {
        "id": "rel-phase2-deflate-technique-0",
        "from": "algo-deflate",
        "type": "uses_technique",
        "to": "technique-dictionary-coding"
      },
      {
        "id": "rel-phase2-deflate-technique-1",
        "from": "algo-deflate",
        "type": "uses_technique",
        "to": "technique-entropy-coding"
      },
      {
        "id": "rel-phase2-burrows-wheeler-transform-technique-0",
        "from": "algo-burrows-wheeler-transform",
        "type": "uses_technique",
        "to": "technique-block-sorting"
      },
      {
        "id": "rel-phase2-lz77-technique-0",
        "from": "algo-lz77",
        "type": "uses_technique",
        "to": "technique-dictionary-coding"
      },
      {
        "id": "rel-phase2-lz78-technique-0",
        "from": "algo-lz78",
        "type": "uses_technique",
        "to": "technique-dictionary-coding"
      },
      {
        "id": "rel-phase2-exponential-search-technique-0",
        "from": "algo-exponential-search",
        "type": "uses_technique",
        "to": "technique-range-expansion"
      },
      {
        "id": "rel-phase2-jump-search-technique-0",
        "from": "algo-jump-search",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase2-interpolation-search-technique-0",
        "from": "algo-interpolation-search",
        "type": "uses_technique",
        "to": "technique-interpolation"
      },
      {
        "id": "rel-phase2-extended-euclidean-technique-0",
        "from": "algo-extended-euclidean",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase2-binary-modular-exponentiation-technique-0",
        "from": "algo-binary-modular-exponentiation",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase2-miller-rabin-technique-0",
        "from": "algo-miller-rabin",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {
        "id": "rel-phase2-gaussian-elimination-technique-0",
        "from": "algo-gaussian-elimination",
        "type": "uses_technique",
        "to": "technique-elimination"
      },
      {
        "id": "rel-phase2-gradient-descent-technique-0",
        "from": "algo-gradient-descent",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase2-hungarian-technique-0",
        "from": "algo-hungarian",
        "type": "uses_technique",
        "to": "technique-augmenting-path"
      },
      {
        "id": "rel-phase2-nelder-mead-technique-0",
        "from": "algo-nelder-mead",
        "type": "uses_technique",
        "to": "technique-local-search"
      },
      {
        "id": "rel-phase3-expansion-algo-shell-sort-uses_technique-1",
        "from": "algo-shell-sort",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-bucket-sort-uses_technique-1",
        "from": "algo-bucket-sort",
        "type": "uses_technique",
        "to": "technique-distribution"
      },
      {
        "id": "rel-phase3-expansion-algo-cycle-sort-uses_technique-1",
        "from": "algo-cycle-sort",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-external-merge-sort-uses_technique-1",
        "from": "algo-external-merge-sort",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-fibonacci-search-uses_technique-1",
        "from": "algo-fibonacci-search",
        "type": "uses_technique",
        "to": "technique-range-expansion"
      },
      {
        "id": "rel-phase3-expansion-algo-boruvka-uses_technique-1",
        "from": "algo-boruvka",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-uses_technique-1",
        "from": "algo-hopcroft-karp",
        "type": "uses_technique",
        "to": "technique-augmenting-path"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-uses_technique-1",
        "from": "algo-push-relabel",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase3-expansion-algo-hierholzer-uses_technique-1",
        "from": "algo-hierholzer",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-uses_technique-1",
        "from": "algo-bron-kerbosch",
        "type": "uses_technique",
        "to": "technique-backtracking"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-uses_technique-1",
        "from": "algo-louvain",
        "type": "uses_technique",
        "to": "technique-greedy"
      },
      {
        "id": "rel-phase3-expansion-algo-yen-k-shortest-uses_technique-1",
        "from": "algo-yen-k-shortest",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-floyd-cycle-finding-uses_technique-1",
        "from": "algo-floyd-cycle-finding",
        "type": "uses_technique",
        "to": "technique-decrease-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-uses_technique-1",
        "from": "algo-edmonds-blossom",
        "type": "uses_technique",
        "to": "technique-augmenting-path"
      },
      {
        "id": "rel-phase3-expansion-algo-suffix-array-doubling-uses_technique-1",
        "from": "algo-suffix-array-doubling",
        "type": "uses_technique",
        "to": "technique-doubling"
      },
      {
        "id": "rel-phase3-expansion-algo-manacher-uses_technique-1",
        "from": "algo-manacher",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase3-expansion-algo-smith-waterman-uses_technique-1",
        "from": "algo-smith-waterman",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase3-expansion-algo-myers-diff-uses_technique-1",
        "from": "algo-myers-diff",
        "type": "uses_technique",
        "to": "technique-dynamic-programming"
      },
      {
        "id": "rel-phase3-expansion-algo-newton-raphson-uses_technique-1",
        "from": "algo-newton-raphson",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase3-expansion-algo-gauss-seidel-uses_technique-1",
        "from": "algo-gauss-seidel",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase3-expansion-algo-lu-decomposition-uses_technique-1",
        "from": "algo-lu-decomposition",
        "type": "uses_technique",
        "to": "technique-elimination"
      },
      {
        "id": "rel-phase3-expansion-algo-cholesky-uses_technique-1",
        "from": "algo-cholesky",
        "type": "uses_technique",
        "to": "technique-elimination"
      },
      {
        "id": "rel-phase3-expansion-algo-strassen-uses_technique-1",
        "from": "algo-strassen",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-pollard-rho-uses_technique-1",
        "from": "algo-pollard-rho",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {
        "id": "rel-phase3-expansion-algo-chinese-remainder-uses_technique-1",
        "from": "algo-chinese-remainder",
        "type": "uses_technique",
        "to": "technique-modular-arithmetic"
      },
      {
        "id": "rel-phase3-expansion-algo-ed25519-uses_technique-1",
        "from": "algo-ed25519",
        "type": "uses_technique",
        "to": "technique-elliptic-curve"
      },
      {
        "id": "rel-phase3-expansion-algo-pbkdf2-uses_technique-1",
        "from": "algo-pbkdf2",
        "type": "uses_technique",
        "to": "technique-hashing"
      },
      {
        "id": "rel-phase3-expansion-algo-rotating-calipers-uses_technique-1",
        "from": "algo-rotating-calipers",
        "type": "uses_technique",
        "to": "technique-geometric-scan"
      },
      {
        "id": "rel-phase3-expansion-algo-ramer-douglas-peucker-uses_technique-1",
        "from": "algo-ramer-douglas-peucker",
        "type": "uses_technique",
        "to": "technique-divide-and-conquer"
      },
      {
        "id": "rel-phase3-expansion-algo-bowyer-watson-uses_technique-1",
        "from": "algo-bowyer-watson",
        "type": "uses_technique",
        "to": "technique-incremental"
      },
      {
        "id": "rel-phase3-expansion-algo-ray-casting-point-in-polygon-uses_technique-1",
        "from": "algo-ray-casting-point-in-polygon",
        "type": "uses_technique",
        "to": "technique-geometric-scan"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-uses_technique-1",
        "from": "algo-logistic-regression",
        "type": "uses_technique",
        "to": "technique-iterative-refinement"
      },
      {
        "id": "rel-phase3-expansion-algo-random-forest-uses_technique-1",
        "from": "algo-random-forest",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {
        "id": "rel-phase3-expansion-algo-simulated-annealing-uses_technique-1",
        "from": "algo-simulated-annealing",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {
        "id": "rel-phase3-expansion-algo-particle-swarm-uses_technique-1",
        "from": "algo-particle-swarm",
        "type": "uses_technique",
        "to": "technique-randomized"
      },
      {"id":"rel-wave150-selection-sort-technique","from":"algo-selection-sort","type":"uses_technique","to":"technique-decrease-and-conquer"},
      {"id":"rel-wave150-bubble-sort-technique","from":"algo-bubble-sort","type":"uses_technique","to":"technique-decrease-and-conquer"},
      {"id":"rel-wave150-median-of-medians-technique","from":"algo-median-of-medians","type":"uses_technique","to":"technique-divide-and-conquer"},
      {"id":"rel-wave150-dial-technique","from":"algo-dial-shortest-path","type":"uses_technique","to":"technique-greedy"},
      {"id":"rel-wave150-zero-one-bfs-technique","from":"algo-zero-one-bfs","type":"uses_technique","to":"technique-greedy"},
      {"id":"rel-wave150-gabow-scc-technique","from":"algo-gabow-scc","type":"uses_technique","to":"technique-depth-first-traversal"},
      {"id":"rel-wave150-stoer-wagner-technique","from":"algo-stoer-wagner-min-cut","type":"uses_technique","to":"technique-maximum-adjacency-search"},
      {"id":"rel-wave150-successive-shortest-path-technique","from":"algo-successive-shortest-path","type":"uses_technique","to":"technique-augmenting-path"},
      {"id":"rel-wave150-naive-string-search-technique","from":"algo-naive-string-search","type":"uses_technique","to":"technique-brute-force"},
      {"id":"rel-wave150-bitap-technique","from":"algo-bitap","type":"uses_technique","to":"technique-bit-parallelism"},
      {"id":"rel-wave150-ukkonen-technique","from":"algo-ukkonen-suffix-tree","type":"uses_technique","to":"technique-incremental"},
      {"id":"rel-wave150-binary-gcd-technique","from":"algo-binary-gcd","type":"uses_technique","to":"technique-binary-arithmetic"},
      {"id":"rel-wave150-tonelli-shanks-technique","from":"algo-tonelli-shanks","type":"uses_technique","to":"technique-modular-arithmetic"},
      {"id":"rel-wave150-householder-qr-technique","from":"algo-householder-qr","type":"uses_technique","to":"technique-orthogonal-transformation"},
      {"id":"rel-wave150-conjugate-gradient-technique","from":"algo-conjugate-gradient","type":"uses_technique","to":"technique-krylov-subspace"},
      {"id":"rel-wave150-hmac-technique","from":"algo-hmac","type":"uses_technique","to":"technique-keyed-hashing"},
      {"id":"rel-wave150-hkdf-technique","from":"algo-hkdf","type":"uses_technique","to":"technique-extract-expand"},
      {"id":"rel-wave150-x25519-technique","from":"algo-x25519","type":"uses_technique","to":"technique-elliptic-curve"},
      {"id":"rel-wave150-lz4-technique","from":"algo-lz4","type":"uses_technique","to":"technique-dictionary-coding"},
      {"id":"rel-wave150-brotli-technique","from":"algo-brotli","type":"uses_technique","to":"technique-entropy-coding"},
      {"id":"rel-wave150-fortune-technique","from":"algo-fortune-voronoi","type":"uses_technique","to":"technique-line-sweep"},
      {"id":"rel-wave150-sutherland-hodgman-technique","from":"algo-sutherland-hodgman","type":"uses_technique","to":"technique-incremental"},
      {"id":"rel-wave150-gaussian-nb-technique","from":"algo-gaussian-naive-bayes","type":"uses_technique","to":"technique-probabilistic-modeling"},
      {"id":"rel-wave150-smo-technique","from":"algo-smo","type":"uses_technique","to":"technique-coordinate-optimization"},
      {"id":"rel-wave150-adaboost-technique","from":"algo-adaboost","type":"uses_technique","to":"technique-boosting"},
      {"id":"rel-wave150-em-technique","from":"algo-expectation-maximization","type":"uses_technique","to":"technique-alternating-optimization"},
      {"id":"rel-wave150-sgd-technique","from":"algo-stochastic-gradient-descent","type":"uses_technique","to":"technique-stochastic-gradient"},
      {"id":"rel-wave150-momentum-technique","from":"algo-momentum-gradient-descent","type":"uses_technique","to":"technique-momentum"},
      {"id":"rel-wave150-bfgs-technique","from":"algo-bfgs","type":"uses_technique","to":"technique-quasi-newton"},
      {"id":"rel-wave150-adam-technique","from":"algo-adam","type":"uses_technique","to":"technique-adaptive-gradient"}
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
