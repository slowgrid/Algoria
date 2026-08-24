(function registerAlgoriaDataStructureRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "relations-data-structures",
    relations: [
      {
        "id": "rel-dijkstra-uses-heap",
        "from": "algo-dijkstra",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-a-star-uses-heap",
        "from": "algo-a-star",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-demo-009",
        "from": "algo-heap-sort",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-demo-013",
        "from": "algo-counting-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-015",
        "from": "algo-radix-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-019",
        "from": "algo-binary-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-022",
        "from": "algo-linear-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-025",
        "from": "algo-ternary-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-028",
        "from": "algo-quickselect",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-030",
        "from": "algo-breadth-first-search",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-demo-033",
        "from": "algo-depth-first-search",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-demo-043",
        "from": "algo-bidirectional-dijkstra",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-demo-047",
        "from": "algo-kruskal",
        "type": "uses_data_structure",
        "to": "ds-union-find"
      },
      {
        "id": "rel-demo-051",
        "from": "algo-prim",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-demo-056",
        "from": "algo-edmonds-karp",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-demo-058",
        "from": "algo-tarjan-scc",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-demo-061",
        "from": "algo-kmp",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-065",
        "from": "algo-rabin-karp",
        "type": "uses_data_structure",
        "to": "ds-hash-table"
      },
      {
        "id": "rel-demo-068",
        "from": "algo-boyer-moore",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-071",
        "from": "algo-z-algorithm",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-074",
        "from": "algo-aho-corasick",
        "type": "uses_data_structure",
        "to": "ds-trie"
      },
      {
        "id": "rel-demo-075",
        "from": "algo-aho-corasick",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-demo-078",
        "from": "algo-sieve-eratosthenes",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-081",
        "from": "algo-fft",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-094",
        "from": "algo-huffman-coding",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-demo-097",
        "from": "algo-lzw",
        "type": "uses_data_structure",
        "to": "ds-hash-table"
      },
      {
        "id": "rel-demo-100",
        "from": "algo-graham-scan",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-demo-103",
        "from": "algo-k-means",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-demo-106",
        "from": "algo-simplex",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-dinic-queue",
        "from": "algo-dinic",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase2-kosaraju-stack",
        "from": "algo-kosaraju-sharir",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-phase2-johnson-heap",
        "from": "algo-johnson",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-phase2-levenshtein-array",
        "from": "algo-levenshtein-distance",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-lcs-array",
        "from": "algo-longest-common-subsequence",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-lis-array",
        "from": "algo-longest-increasing-subsequence-dp",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-knapsack-array",
        "from": "algo-zero-one-knapsack-dp",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-matrix-chain-array",
        "from": "algo-matrix-chain-multiplication",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-needleman-wunsch-array",
        "from": "algo-needleman-wunsch",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase1-quick-array",
        "from": "algo-quick-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase1-merge-array",
        "from": "algo-merge-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-randomized-quick-array",
        "from": "algo-randomized-quick-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-dual-pivot-array",
        "from": "algo-dual-pivot-quick-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-three-way-array",
        "from": "algo-three-way-quick-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-introsort-heap",
        "from": "algo-introsort",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-phase2-introsort-array",
        "from": "algo-introsort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-insertion-array",
        "from": "algo-insertion-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-timsort-array",
        "from": "algo-timsort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-topological-queue",
        "from": "algo-topological-sort",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase2-jarvis-march-ds-0",
        "from": "algo-jarvis-march",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-andrew-monotone-chain-ds-0",
        "from": "algo-andrew-monotone-chain",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-phase2-quickhull-ds-0",
        "from": "algo-quickhull",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-closest-pair-divide-conquer-ds-0",
        "from": "algo-closest-pair-divide-conquer",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-bentley-ottmann-ds-0",
        "from": "algo-bentley-ottmann",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-phase2-dbscan-ds-0",
        "from": "algo-dbscan",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase2-knn-ds-0",
        "from": "algo-knn",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-perceptron-ds-0",
        "from": "algo-perceptron",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-id3-ds-0",
        "from": "algo-id3",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-pagerank-ds-0",
        "from": "algo-pagerank",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-chacha20-ds-0",
        "from": "algo-chacha20",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-blake2-ds-0",
        "from": "algo-blake2",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-argon2id-ds-0",
        "from": "algo-argon2id",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-ecdh-ds-0",
        "from": "algo-ecdh",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-arithmetic-coding-ds-0",
        "from": "algo-arithmetic-coding",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-run-length-encoding-ds-0",
        "from": "algo-run-length-encoding",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-deflate-ds-0",
        "from": "algo-deflate",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-burrows-wheeler-transform-ds-0",
        "from": "algo-burrows-wheeler-transform",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-lz77-ds-0",
        "from": "algo-lz77",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-lz78-ds-0",
        "from": "algo-lz78",
        "type": "uses_data_structure",
        "to": "ds-trie"
      },
      {
        "id": "rel-phase2-exponential-search-ds-0",
        "from": "algo-exponential-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-jump-search-ds-0",
        "from": "algo-jump-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-interpolation-search-ds-0",
        "from": "algo-interpolation-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-extended-euclidean-ds-0",
        "from": "algo-extended-euclidean",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-binary-modular-exponentiation-ds-0",
        "from": "algo-binary-modular-exponentiation",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-miller-rabin-ds-0",
        "from": "algo-miller-rabin",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-gaussian-elimination-ds-0",
        "from": "algo-gaussian-elimination",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-gradient-descent-ds-0",
        "from": "algo-gradient-descent",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-hungarian-ds-0",
        "from": "algo-hungarian",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase2-nelder-mead-ds-0",
        "from": "algo-nelder-mead",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-shell-sort-uses_data_structure-2",
        "from": "algo-shell-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-bucket-sort-uses_data_structure-2",
        "from": "algo-bucket-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-bucket-sort-uses_data_structure-3",
        "from": "algo-bucket-sort",
        "type": "uses_data_structure",
        "to": "ds-linked-list"
      },
      {
        "id": "rel-phase3-expansion-algo-cycle-sort-uses_data_structure-2",
        "from": "algo-cycle-sort",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-external-merge-sort-uses_data_structure-2",
        "from": "algo-external-merge-sort",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-phase3-expansion-algo-external-merge-sort-uses_data_structure-3",
        "from": "algo-external-merge-sort",
        "type": "uses_data_structure",
        "to": "ds-b-tree"
      },
      {
        "id": "rel-phase3-expansion-algo-fibonacci-search-uses_data_structure-2",
        "from": "algo-fibonacci-search",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-boruvka-uses_data_structure-2",
        "from": "algo-boruvka",
        "type": "uses_data_structure",
        "to": "ds-union-find"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-uses_data_structure-2",
        "from": "algo-hopcroft-karp",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-uses_data_structure-3",
        "from": "algo-hopcroft-karp",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-uses_data_structure-2",
        "from": "algo-push-relabel",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-uses_data_structure-3",
        "from": "algo-push-relabel",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-hierholzer-uses_data_structure-2",
        "from": "algo-hierholzer",
        "type": "uses_data_structure",
        "to": "ds-stack"
      },
      {
        "id": "rel-phase3-expansion-algo-hierholzer-uses_data_structure-3",
        "from": "algo-hierholzer",
        "type": "uses_data_structure",
        "to": "ds-adjacency-list"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-uses_data_structure-2",
        "from": "algo-bron-kerbosch",
        "type": "uses_data_structure",
        "to": "ds-bitset"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-uses_data_structure-3",
        "from": "algo-bron-kerbosch",
        "type": "uses_data_structure",
        "to": "ds-adjacency-list"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-uses_data_structure-2",
        "from": "algo-louvain",
        "type": "uses_data_structure",
        "to": "ds-adjacency-list"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-uses_data_structure-3",
        "from": "algo-louvain",
        "type": "uses_data_structure",
        "to": "ds-hash-table"
      },
      {
        "id": "rel-phase3-expansion-algo-yen-k-shortest-uses_data_structure-2",
        "from": "algo-yen-k-shortest",
        "type": "uses_data_structure",
        "to": "ds-heap"
      },
      {
        "id": "rel-phase3-expansion-algo-yen-k-shortest-uses_data_structure-3",
        "from": "algo-yen-k-shortest",
        "type": "uses_data_structure",
        "to": "ds-adjacency-list"
      },
      {
        "id": "rel-phase3-expansion-algo-floyd-cycle-finding-uses_data_structure-2",
        "from": "algo-floyd-cycle-finding",
        "type": "uses_data_structure",
        "to": "ds-linked-list"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-uses_data_structure-2",
        "from": "algo-edmonds-blossom",
        "type": "uses_data_structure",
        "to": "ds-queue"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-uses_data_structure-3",
        "from": "algo-edmonds-blossom",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-suffix-array-doubling-uses_data_structure-2",
        "from": "algo-suffix-array-doubling",
        "type": "uses_data_structure",
        "to": "ds-suffix-array"
      },
      {
        "id": "rel-phase3-expansion-algo-suffix-array-doubling-uses_data_structure-3",
        "from": "algo-suffix-array-doubling",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-manacher-uses_data_structure-2",
        "from": "algo-manacher",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-smith-waterman-uses_data_structure-2",
        "from": "algo-smith-waterman",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-myers-diff-uses_data_structure-2",
        "from": "algo-myers-diff",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-newton-raphson-uses_data_structure-2",
        "from": "algo-newton-raphson",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-gauss-seidel-uses_data_structure-2",
        "from": "algo-gauss-seidel",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-gauss-seidel-uses_data_structure-3",
        "from": "algo-gauss-seidel",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-lu-decomposition-uses_data_structure-2",
        "from": "algo-lu-decomposition",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-cholesky-uses_data_structure-2",
        "from": "algo-cholesky",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-strassen-uses_data_structure-2",
        "from": "algo-strassen",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-pollard-rho-uses_data_structure-2",
        "from": "algo-pollard-rho",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-chinese-remainder-uses_data_structure-2",
        "from": "algo-chinese-remainder",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-ed25519-uses_data_structure-2",
        "from": "algo-ed25519",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-pbkdf2-uses_data_structure-2",
        "from": "algo-pbkdf2",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-rotating-calipers-uses_data_structure-2",
        "from": "algo-rotating-calipers",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-ramer-douglas-peucker-uses_data_structure-2",
        "from": "algo-ramer-douglas-peucker",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-bowyer-watson-uses_data_structure-2",
        "from": "algo-bowyer-watson",
        "type": "uses_data_structure",
        "to": "ds-balanced-search-tree"
      },
      {
        "id": "rel-phase3-expansion-algo-bowyer-watson-uses_data_structure-3",
        "from": "algo-bowyer-watson",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-ray-casting-point-in-polygon-uses_data_structure-2",
        "from": "algo-ray-casting-point-in-polygon",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-uses_data_structure-2",
        "from": "algo-logistic-regression",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-uses_data_structure-3",
        "from": "algo-logistic-regression",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-random-forest-uses_data_structure-2",
        "from": "algo-random-forest",
        "type": "uses_data_structure",
        "to": "ds-binary-search-tree"
      },
      {
        "id": "rel-phase3-expansion-algo-random-forest-uses_data_structure-3",
        "from": "algo-random-forest",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-simulated-annealing-uses_data_structure-2",
        "from": "algo-simulated-annealing",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-particle-swarm-uses_data_structure-2",
        "from": "algo-particle-swarm",
        "type": "uses_data_structure",
        "to": "ds-array"
      },
      {
        "id": "rel-phase3-expansion-algo-particle-swarm-uses_data_structure-3",
        "from": "algo-particle-swarm",
        "type": "uses_data_structure",
        "to": "ds-matrix"
      },
      {"id":"rel-wave150-selection-sort-ds","from":"algo-selection-sort","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-bubble-sort-ds","from":"algo-bubble-sort","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-median-of-medians-ds","from":"algo-median-of-medians","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-dial-ds","from":"algo-dial-shortest-path","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-zero-one-bfs-ds","from":"algo-zero-one-bfs","type":"uses_data_structure","to":"ds-deque"},
      {"id":"rel-wave150-gabow-scc-ds","from":"algo-gabow-scc","type":"uses_data_structure","to":"ds-stack"},
      {"id":"rel-wave150-stoer-wagner-ds","from":"algo-stoer-wagner-min-cut","type":"uses_data_structure","to":"ds-adjacency-matrix"},
      {"id":"rel-wave150-successive-shortest-path-ds","from":"algo-successive-shortest-path","type":"uses_data_structure","to":"ds-heap"},
      {"id":"rel-wave150-naive-string-search-ds","from":"algo-naive-string-search","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-bitap-ds","from":"algo-bitap","type":"uses_data_structure","to":"ds-bitset"},
      {"id":"rel-wave150-ukkonen-ds","from":"algo-ukkonen-suffix-tree","type":"uses_data_structure","to":"ds-suffix-tree"},
      {"id":"rel-wave150-householder-qr-ds","from":"algo-householder-qr","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-conjugate-gradient-ds","from":"algo-conjugate-gradient","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-hmac-ds","from":"algo-hmac","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-hkdf-ds","from":"algo-hkdf","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-x25519-ds","from":"algo-x25519","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-lz4-ds","from":"algo-lz4","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-brotli-ds","from":"algo-brotli","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-fortune-ds","from":"algo-fortune-voronoi","type":"uses_data_structure","to":"ds-heap"},
      {"id":"rel-wave150-sutherland-hodgman-ds","from":"algo-sutherland-hodgman","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-gaussian-nb-ds","from":"algo-gaussian-naive-bayes","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-smo-ds","from":"algo-smo","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-adaboost-ds","from":"algo-adaboost","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-em-ds","from":"algo-expectation-maximization","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-sgd-ds","from":"algo-stochastic-gradient-descent","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-momentum-ds","from":"algo-momentum-gradient-descent","type":"uses_data_structure","to":"ds-array"},
      {"id":"rel-wave150-bfgs-ds","from":"algo-bfgs","type":"uses_data_structure","to":"ds-matrix"},
      {"id":"rel-wave150-adam-ds","from":"algo-adam","type":"uses_data_structure","to":"ds-array"}
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
