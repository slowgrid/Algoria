(function registerAlgoriaTechniquesHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-techniques",
    hierarchy: {
      nodes: [
        {
          "id": "view-type-techniques",
          "parentId": "view-root",
          "kind": "group",
          "label": "Techniques",
          "order": 30,
          "localizedLabels": {
            "en": "Techniques",
            "ko": "설계 기법"
          }
        },
        {
          "id": "view-technique-greedy",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-greedy",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-greedy-dijkstra",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-dijkstra",
          "order": 10
        },
        {
          "id": "view-technique-divide-and-conquer",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-divide-and-conquer",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-divide-and-conquer-quick-sort",
          "parentId": "view-group-technique-divide-partition-selection",
          "kind": "entity",
          "entityId": "algo-quick-sort",
          "order": 10
        },
        {
          "id": "view-technique-divide-and-conquer-merge-sort",
          "parentId": "view-group-technique-divide-merge-external",
          "kind": "entity",
          "entityId": "algo-merge-sort",
          "order": 10
        },
        {
          "id": "view-technique-dynamic-programming",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-dynamic-programming",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-randomized",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-randomized",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-technique-brute-force",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-brute-force",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-technique-decrease-and-conquer",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-decrease-and-conquer",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-technique-hashing",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-hashing",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-heuristic-search",
          "parentId": "view-group-techniques-search-optimization",
          "kind": "entity",
          "entityId": "technique-heuristic-search",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-dp-floyd-warshall",
          "parentId": "view-group-technique-dp-graph-paths",
          "kind": "entity",
          "entityId": "algo-floyd-warshall",
          "order": 10
        },
        {
          "id": "view-technique-dp-bellman-ford",
          "parentId": "view-group-technique-dp-graph-paths",
          "kind": "entity",
          "entityId": "algo-bellman-ford",
          "order": 20
        },
        {
          "id": "view-technique-randomized-quick",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-randomized-quick-sort",
          "order": 10
        },
        {
          "id": "view-technique-brute-linear",
          "parentId": "view-technique-brute-force",
          "kind": "entity",
          "entityId": "algo-linear-search",
          "order": 10
        },
        {
          "id": "view-technique-decrease-binary",
          "parentId": "view-group-technique-decrease-search",
          "kind": "entity",
          "entityId": "algo-binary-search",
          "order": 10
        },
        {
          "id": "view-technique-hashing-rabin-karp",
          "parentId": "view-technique-hashing",
          "kind": "entity",
          "entityId": "algo-rabin-karp",
          "order": 10
        },
        {
          "id": "view-technique-heuristic-a-star",
          "parentId": "view-technique-heuristic-search",
          "kind": "entity",
          "entityId": "algo-a-star",
          "order": 10
        },
        {
          "id": "view-technique-greedy-bidirectional-dijkstra",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-bidirectional-dijkstra",
          "order": 20
        },
        {
          "id": "view-technique-greedy-kruskal",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-kruskal",
          "order": 30
        },
        {
          "id": "view-technique-greedy-prim",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-prim",
          "order": 40
        },
        {
          "id": "view-technique-greedy-huffman",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-huffman-coding",
          "order": 50
        },
        {
          "id": "view-technique-divide-dual-pivot",
          "parentId": "view-group-technique-divide-partition-selection",
          "kind": "entity",
          "entityId": "algo-dual-pivot-quick-sort",
          "order": 20
        },
        {
          "id": "view-technique-divide-three-way",
          "parentId": "view-group-technique-divide-partition-selection",
          "kind": "entity",
          "entityId": "algo-three-way-quick-sort",
          "order": 30
        },
        {
          "id": "view-technique-divide-quickselect",
          "parentId": "view-group-technique-divide-partition-selection",
          "kind": "entity",
          "entityId": "algo-quickselect",
          "order": 40
        },
        {
          "id": "view-technique-divide-fft",
          "parentId": "view-group-technique-divide-algebra-transforms",
          "kind": "entity",
          "entityId": "algo-fft",
          "order": 10
        },
        {
          "id": "view-technique-divide-karatsuba",
          "parentId": "view-group-technique-divide-algebra-transforms",
          "kind": "entity",
          "entityId": "algo-karatsuba",
          "order": 20
        },
        {
          "id": "view-technique-augmenting-path",
          "parentId": "view-group-techniques-graph-methods",
          "kind": "entity",
          "entityId": "technique-augmenting-path",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-augmenting-ford-fulkerson",
          "parentId": "view-technique-augmenting-path",
          "kind": "entity",
          "entityId": "algo-ford-fulkerson",
          "order": 10
        },
        {
          "id": "view-technique-augmenting-edmonds-karp",
          "parentId": "view-technique-augmenting-path",
          "kind": "entity",
          "entityId": "algo-edmonds-karp",
          "order": 20
        },
        {
          "id": "view-technique-blocking-flow",
          "parentId": "view-group-techniques-graph-methods",
          "kind": "entity",
          "entityId": "technique-blocking-flow",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-blocking-flow-dinic",
          "parentId": "view-technique-blocking-flow",
          "kind": "entity",
          "entityId": "algo-dinic",
          "order": 10
        },
        {
          "id": "view-technique-reweighting",
          "parentId": "view-group-techniques-graph-methods",
          "kind": "entity",
          "entityId": "technique-reweighting",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-reweighting-johnson",
          "parentId": "view-technique-reweighting",
          "kind": "entity",
          "entityId": "algo-johnson",
          "order": 10
        },
        {
          "id": "view-technique-dp-levenshtein",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-levenshtein-distance",
          "order": 10
        },
        {
          "id": "view-technique-dp-lcs",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-longest-common-subsequence",
          "order": 20
        },
        {
          "id": "view-technique-dp-lis",
          "parentId": "view-group-technique-dp-optimization",
          "kind": "entity",
          "entityId": "algo-longest-increasing-subsequence-dp",
          "order": 10
        },
        {
          "id": "view-technique-dp-knapsack",
          "parentId": "view-group-technique-dp-optimization",
          "kind": "entity",
          "entityId": "algo-zero-one-knapsack-dp",
          "order": 20
        },
        {
          "id": "view-technique-dp-matrix-chain",
          "parentId": "view-group-technique-dp-optimization",
          "kind": "entity",
          "entityId": "algo-matrix-chain-multiplication",
          "order": 30
        },
        {
          "id": "view-technique-dp-needleman-wunsch",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-needleman-wunsch",
          "order": 30
        },
        {
          "id": "view-technique-preprocessing",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-preprocessing",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-preprocessing-kmp",
          "parentId": "view-technique-preprocessing",
          "kind": "entity",
          "entityId": "algo-kmp",
          "order": 10
        },
        {
          "id": "view-technique-modular-arithmetic",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-modular-arithmetic",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-modular-rsa",
          "parentId": "view-technique-modular-arithmetic",
          "kind": "entity",
          "entityId": "algo-rsa",
          "order": 10
        },
        {
          "id": "view-technique-distribution",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-distribution",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-distribution-counting",
          "parentId": "view-technique-distribution",
          "kind": "entity",
          "entityId": "algo-counting-sort",
          "order": 10
        },
        {
          "id": "view-technique-distribution-radix",
          "parentId": "view-technique-distribution",
          "kind": "entity",
          "entityId": "algo-radix-sort",
          "order": 20
        },
        {
          "id": "view-technique-adaptive",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-adaptive",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-technique-adaptive-timsort",
          "parentId": "view-technique-adaptive",
          "kind": "entity",
          "entityId": "algo-timsort",
          "order": 10
        },
        {
          "id": "view-technique-preprocessing-boyer-moore",
          "parentId": "view-technique-preprocessing",
          "kind": "entity",
          "entityId": "algo-boyer-moore",
          "order": 20
        },
        {
          "id": "view-technique-preprocessing-aho-corasick",
          "parentId": "view-technique-preprocessing",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "order": 30
        },
        {
          "id": "view-technique-substitution-permutation-network",
          "parentId": "view-group-techniques-cryptographic-constructions",
          "kind": "entity",
          "entityId": "technique-substitution-permutation-network",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-spn-aes",
          "parentId": "view-technique-substitution-permutation-network",
          "kind": "entity",
          "entityId": "algo-aes",
          "order": 10
        },
        {
          "id": "view-technique-merkle-damgard",
          "parentId": "view-group-techniques-cryptographic-constructions",
          "kind": "entity",
          "entityId": "technique-merkle-damgard",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-merkle-damgard-sha256",
          "parentId": "view-technique-merkle-damgard",
          "kind": "entity",
          "entityId": "algo-sha-256",
          "order": 10
        },
        {
          "id": "view-technique-dictionary-coding",
          "parentId": "view-group-techniques-compression-coding",
          "kind": "entity",
          "entityId": "technique-dictionary-coding",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-dictionary-lzw",
          "parentId": "view-technique-dictionary-coding",
          "kind": "entity",
          "entityId": "algo-lzw",
          "order": 10
        },
        {
          "id": "view-technique-decrease-euclidean",
          "parentId": "view-group-technique-decrease-arithmetic",
          "kind": "entity",
          "entityId": "algo-euclidean",
          "order": 10
        },
        {
          "id": "view-technique-modular-diffie-hellman",
          "parentId": "view-technique-modular-arithmetic",
          "kind": "entity",
          "entityId": "algo-diffie-hellman",
          "order": 20
        },
        {
          "id": "view-technique-geometric-scan",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-geometric-scan",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-geometric-scan-graham",
          "parentId": "view-technique-geometric-scan",
          "kind": "entity",
          "entityId": "algo-graham-scan",
          "order": 10
        },
        {
          "id": "view-technique-iterative-refinement",
          "parentId": "view-group-techniques-search-optimization",
          "kind": "entity",
          "entityId": "technique-iterative-refinement",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-iterative-refinement-kmeans",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-k-means",
          "order": 10
        },
        {
          "id": "view-technique-basis-pivoting",
          "parentId": "view-group-techniques-search-optimization",
          "kind": "entity",
          "entityId": "technique-basis-pivoting",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-basis-pivoting-simplex",
          "parentId": "view-technique-basis-pivoting",
          "kind": "entity",
          "entityId": "algo-simplex",
          "order": 10
        },
        {
          "id": "view-technique-decrease-ternary",
          "parentId": "view-group-technique-decrease-search",
          "kind": "entity",
          "entityId": "algo-ternary-search",
          "order": 20
        },
        {
          "id": "view-technique-preprocessing-z",
          "parentId": "view-technique-preprocessing",
          "kind": "entity",
          "entityId": "algo-z-algorithm",
          "order": 40
        },
        {
          "id": "view-technique-gift-wrapping",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-gift-wrapping",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-technique-line-sweep",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-line-sweep",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-technique-density-based",
          "parentId": "view-group-techniques-learning-methods",
          "kind": "entity",
          "entityId": "technique-density-based",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-technique-instance-based",
          "parentId": "view-group-techniques-learning-methods",
          "kind": "entity",
          "entityId": "technique-instance-based",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-decision-tree-learning",
          "parentId": "view-group-techniques-learning-methods",
          "kind": "entity",
          "entityId": "technique-decision-tree-learning",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-arx",
          "parentId": "view-group-techniques-cryptographic-constructions",
          "kind": "entity",
          "entityId": "technique-arx",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-memory-hard",
          "parentId": "view-group-techniques-cryptographic-constructions",
          "kind": "entity",
          "entityId": "technique-memory-hard",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-technique-elliptic-curve",
          "parentId": "view-group-techniques-cryptographic-constructions",
          "kind": "entity",
          "entityId": "technique-elliptic-curve",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-technique-entropy-coding",
          "parentId": "view-group-techniques-compression-coding",
          "kind": "entity",
          "entityId": "technique-entropy-coding",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-run-length",
          "parentId": "view-group-techniques-compression-coding",
          "kind": "entity",
          "entityId": "technique-run-length",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-technique-block-sorting",
          "parentId": "view-group-techniques-compression-coding",
          "kind": "entity",
          "entityId": "technique-block-sorting",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-technique-range-expansion",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-range-expansion",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-technique-interpolation",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-interpolation",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-technique-elimination",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-elimination",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-technique-local-search",
          "parentId": "view-group-techniques-search-optimization",
          "kind": "entity",
          "entityId": "technique-local-search",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase2-jarvis-march-technique-0",
          "parentId": "view-technique-gift-wrapping",
          "kind": "entity",
          "entityId": "algo-jarvis-march",
          "order": 20
        },
        {
          "id": "view-phase2-andrew-monotone-chain-technique-0",
          "parentId": "view-technique-geometric-scan",
          "kind": "entity",
          "entityId": "algo-andrew-monotone-chain",
          "order": 30
        },
        {
          "id": "view-phase2-quickhull-technique-0",
          "parentId": "view-group-technique-divide-geometry",
          "kind": "entity",
          "entityId": "algo-quickhull",
          "order": 10
        },
        {
          "id": "view-phase2-closest-pair-divide-conquer-technique-0",
          "parentId": "view-group-technique-divide-geometry",
          "kind": "entity",
          "entityId": "algo-closest-pair-divide-conquer",
          "order": 20
        },
        {
          "id": "view-phase2-bentley-ottmann-technique-0",
          "parentId": "view-technique-line-sweep",
          "kind": "entity",
          "entityId": "algo-bentley-ottmann",
          "order": 60
        },
        {
          "id": "view-phase2-dbscan-technique-0",
          "parentId": "view-technique-density-based",
          "kind": "entity",
          "entityId": "algo-dbscan",
          "order": 20
        },
        {
          "id": "view-phase2-knn-technique-0",
          "parentId": "view-technique-instance-based",
          "kind": "entity",
          "entityId": "algo-knn",
          "order": 30
        },
        {
          "id": "view-phase2-perceptron-technique-0",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-perceptron",
          "order": 40
        },
        {
          "id": "view-phase2-id3-technique-0",
          "parentId": "view-technique-decision-tree-learning",
          "kind": "entity",
          "entityId": "algo-id3",
          "order": 50
        },
        {
          "id": "view-phase2-pagerank-technique-0",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "order": 60
        },
        {
          "id": "view-phase2-chacha20-technique-0",
          "parentId": "view-technique-arx",
          "kind": "entity",
          "entityId": "algo-chacha20",
          "order": 50
        },
        {
          "id": "view-phase2-blake2-technique-0",
          "parentId": "view-technique-arx",
          "kind": "entity",
          "entityId": "algo-blake2",
          "order": 60
        },
        {
          "id": "view-phase2-argon2id-technique-0",
          "parentId": "view-technique-memory-hard",
          "kind": "entity",
          "entityId": "algo-argon2id",
          "order": 70
        },
        {
          "id": "view-phase2-ecdh-technique-0",
          "parentId": "view-technique-elliptic-curve",
          "kind": "entity",
          "entityId": "algo-ecdh",
          "order": 80
        },
        {
          "id": "view-phase2-arithmetic-coding-technique-0",
          "parentId": "view-technique-entropy-coding",
          "kind": "entity",
          "entityId": "algo-arithmetic-coding",
          "order": 30
        },
        {
          "id": "view-phase2-run-length-encoding-technique-0",
          "parentId": "view-technique-run-length",
          "kind": "entity",
          "entityId": "algo-run-length-encoding",
          "order": 40
        },
        {
          "id": "view-phase2-deflate-technique-0",
          "parentId": "view-technique-dictionary-coding",
          "kind": "entity",
          "entityId": "algo-deflate",
          "order": 50
        },
        {
          "id": "view-phase2-deflate-technique-1",
          "parentId": "view-technique-entropy-coding",
          "kind": "entity",
          "entityId": "algo-deflate",
          "order": 50
        },
        {
          "id": "view-phase2-burrows-wheeler-transform-technique-0",
          "parentId": "view-technique-block-sorting",
          "kind": "entity",
          "entityId": "algo-burrows-wheeler-transform",
          "order": 60
        },
        {
          "id": "view-phase2-lz77-technique-0",
          "parentId": "view-technique-dictionary-coding",
          "kind": "entity",
          "entityId": "algo-lz77",
          "order": 70
        },
        {
          "id": "view-phase2-lz78-technique-0",
          "parentId": "view-technique-dictionary-coding",
          "kind": "entity",
          "entityId": "algo-lz78",
          "order": 80
        },
        {
          "id": "view-phase2-exponential-search-technique-0",
          "parentId": "view-technique-range-expansion",
          "kind": "entity",
          "entityId": "algo-exponential-search",
          "order": 50
        },
        {
          "id": "view-phase2-jump-search-technique-0",
          "parentId": "view-group-technique-decrease-search",
          "kind": "entity",
          "entityId": "algo-jump-search",
          "order": 30
        },
        {
          "id": "view-phase2-interpolation-search-technique-0",
          "parentId": "view-technique-interpolation",
          "kind": "entity",
          "entityId": "algo-interpolation-search",
          "order": 70
        },
        {
          "id": "view-phase2-extended-euclidean-technique-0",
          "parentId": "view-group-technique-decrease-arithmetic",
          "kind": "entity",
          "entityId": "algo-extended-euclidean",
          "order": 20
        },
        {
          "id": "view-phase2-binary-modular-exponentiation-technique-0",
          "parentId": "view-group-technique-decrease-arithmetic",
          "kind": "entity",
          "entityId": "algo-binary-modular-exponentiation",
          "order": 30
        },
        {
          "id": "view-phase2-miller-rabin-technique-0",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-miller-rabin",
          "order": 70
        },
        {
          "id": "view-phase2-gaussian-elimination-technique-0",
          "parentId": "view-technique-elimination",
          "kind": "entity",
          "entityId": "algo-gaussian-elimination",
          "order": 80
        },
        {
          "id": "view-phase2-gradient-descent-technique-0",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "order": 50
        },
        {
          "id": "view-phase2-hungarian-technique-0",
          "parentId": "view-technique-augmenting-path",
          "kind": "entity",
          "entityId": "algo-hungarian",
          "order": 60
        },
        {
          "id": "view-phase2-nelder-mead-technique-0",
          "parentId": "view-technique-local-search",
          "kind": "entity",
          "entityId": "algo-nelder-mead",
          "order": 70
        },
        {
          "id": "view-phase3-technique-backtracking",
          "parentId": "view-group-techniques-core-paradigms",
          "kind": "entity",
          "entityId": "technique-backtracking",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-phase3-technique-doubling",
          "parentId": "view-group-techniques-data-access-ordering",
          "kind": "entity",
          "entityId": "technique-doubling",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-phase3-technique-incremental",
          "parentId": "view-group-techniques-mathematics-geometry",
          "kind": "entity",
          "entityId": "technique-incremental",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-shell-sort-uses_technique-1",
          "parentId": "view-group-technique-decrease-ordering",
          "kind": "entity",
          "entityId": "algo-shell-sort",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-bucket-sort-uses_technique-1",
          "parentId": "view-technique-distribution",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-cycle-sort-uses_technique-1",
          "parentId": "view-group-technique-decrease-ordering",
          "kind": "entity",
          "entityId": "algo-cycle-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-external-merge-sort-uses_technique-1",
          "parentId": "view-group-technique-divide-merge-external",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-fibonacci-search-uses_technique-1",
          "parentId": "view-technique-range-expansion",
          "kind": "entity",
          "entityId": "algo-fibonacci-search",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-boruvka-uses_technique-1",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-boruvka",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-uses_technique-1",
          "parentId": "view-technique-augmenting-path",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-uses_technique-1",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-hierholzer-uses_technique-1",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-uses_technique-1",
          "parentId": "view-phase3-technique-backtracking",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-louvain-uses_technique-1",
          "parentId": "view-technique-greedy",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-yen-k-shortest-uses_technique-1",
          "parentId": "view-group-technique-decrease-candidates-cycles",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-floyd-cycle-finding-uses_technique-1",
          "parentId": "view-group-technique-decrease-candidates-cycles",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-uses_technique-1",
          "parentId": "view-technique-augmenting-path",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 590
        },
        {
          "id": "view-phase3-cross-algo-suffix-array-doubling-uses_technique-1",
          "parentId": "view-phase3-technique-doubling",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-manacher-uses_technique-1",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-manacher",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-smith-waterman-uses_technique-1",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-myers-diff-uses_technique-1",
          "parentId": "view-group-technique-dp-sequences",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-newton-raphson-uses_technique-1",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "order": 511
        },
        {
          "id": "view-phase3-cross-algo-gauss-seidel-uses_technique-1",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-lu-decomposition-uses_technique-1",
          "parentId": "view-technique-elimination",
          "kind": "entity",
          "entityId": "algo-lu-decomposition",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-cholesky-uses_technique-1",
          "parentId": "view-technique-elimination",
          "kind": "entity",
          "entityId": "algo-cholesky",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-strassen-uses_technique-1",
          "parentId": "view-group-technique-divide-algebra-transforms",
          "kind": "entity",
          "entityId": "algo-strassen",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-pollard-rho-uses_technique-1",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-chinese-remainder-uses_technique-1",
          "parentId": "view-technique-modular-arithmetic",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "order": 570
        },
        {
          "id": "view-phase3-cross-algo-ed25519-uses_technique-1",
          "parentId": "view-technique-elliptic-curve",
          "kind": "entity",
          "entityId": "algo-ed25519",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-pbkdf2-uses_technique-1",
          "parentId": "view-technique-hashing",
          "kind": "entity",
          "entityId": "algo-pbkdf2",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-rotating-calipers-uses_technique-1",
          "parentId": "view-technique-geometric-scan",
          "kind": "entity",
          "entityId": "algo-rotating-calipers",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-ramer-douglas-peucker-uses_technique-1",
          "parentId": "view-group-technique-divide-geometry",
          "kind": "entity",
          "entityId": "algo-ramer-douglas-peucker",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-bowyer-watson-uses_technique-1",
          "parentId": "view-phase3-technique-incremental",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-ray-casting-point-in-polygon-uses_technique-1",
          "parentId": "view-technique-geometric-scan",
          "kind": "entity",
          "entityId": "algo-ray-casting-point-in-polygon",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-uses_technique-1",
          "parentId": "view-technique-iterative-refinement",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-random-forest-uses_technique-1",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "order": 521
        },
        {
          "id": "view-phase3-cross-algo-simulated-annealing-uses_technique-1",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-simulated-annealing",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-particle-swarm-uses_technique-1",
          "parentId": "view-technique-randomized",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "order": 520
        },
        {
          "id": "view-phase4-cross-rel-demo-011",
          "parentId": "view-group-technique-decrease-ordering",
          "kind": "entity",
          "entityId": "algo-insertion-sort",
          "order": 10
        },
        {
          "id": "view-phase4-cross-rel-phase2-introsort-divide",
          "parentId": "view-group-technique-divide-partition-selection",
          "kind": "entity",
          "entityId": "algo-introsort",
          "order": 50
        },
        {
          "id": "view-group-techniques-core-paradigms",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Core Design Paradigms",
          "localizedLabels": {
            "en": "Core Design Paradigms",
            "ko": "핵심 설계 패러다임"
          },
          "order": 10
        },
        {
          "id": "view-group-techniques-search-optimization",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Search & Optimization",
          "localizedLabels": {
            "en": "Search & Optimization",
            "ko": "탐색·최적화"
          },
          "order": 20
        },
        {
          "id": "view-group-techniques-graph-methods",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Graph Methods",
          "localizedLabels": {
            "en": "Graph Methods",
            "ko": "그래프 기법"
          },
          "order": 30
        },
        {
          "id": "view-group-techniques-data-access-ordering",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Data Access & Ordering",
          "localizedLabels": {
            "en": "Data Access & Ordering",
            "ko": "데이터 접근·순서화"
          },
          "order": 40
        },
        {
          "id": "view-group-techniques-mathematics-geometry",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Mathematics & Geometry",
          "localizedLabels": {
            "en": "Mathematics & Geometry",
            "ko": "수학·기하"
          },
          "order": 50
        },
        {
          "id": "view-group-techniques-compression-coding",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Compression & Coding",
          "localizedLabels": {
            "en": "Compression & Coding",
            "ko": "압축·부호화"
          },
          "order": 60
        },
        {
          "id": "view-group-techniques-cryptographic-constructions",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Cryptographic Constructions",
          "localizedLabels": {
            "en": "Cryptographic Constructions",
            "ko": "암호 구성"
          },
          "order": 70
        },
        {
          "id": "view-group-techniques-learning-methods",
          "parentId": "view-type-techniques",
          "kind": "group",
          "label": "Learning Methods",
          "localizedLabels": {
            "en": "Learning Methods",
            "ko": "학습 기법"
          },
          "order": 80
        },
        {
          "id": "view-group-technique-divide-partition-selection",
          "parentId": "view-technique-divide-and-conquer",
          "kind": "group",
          "label": "Partition & Selection",
          "localizedLabels": {
            "en": "Partition & Selection",
            "ko": "분할·선택"
          },
          "order": 10
        },
        {
          "id": "view-group-technique-divide-merge-external",
          "parentId": "view-technique-divide-and-conquer",
          "kind": "group",
          "label": "Merge & External",
          "localizedLabels": {
            "en": "Merge & External",
            "ko": "병합·외부 처리"
          },
          "order": 20
        },
        {
          "id": "view-group-technique-divide-geometry",
          "parentId": "view-technique-divide-and-conquer",
          "kind": "group",
          "label": "Geometric Decomposition",
          "localizedLabels": {
            "en": "Geometric Decomposition",
            "ko": "기하 분할"
          },
          "order": 30
        },
        {
          "id": "view-group-technique-divide-algebra-transforms",
          "parentId": "view-technique-divide-and-conquer",
          "kind": "group",
          "label": "Algebra & Transforms",
          "localizedLabels": {
            "en": "Algebra & Transforms",
            "ko": "대수·변환"
          },
          "order": 40
        },
        {
          "id": "view-group-technique-dp-graph-paths",
          "parentId": "view-technique-dynamic-programming",
          "kind": "group",
          "label": "Graph Paths",
          "localizedLabels": {
            "en": "Graph Paths",
            "ko": "그래프 경로"
          },
          "order": 10
        },
        {
          "id": "view-group-technique-dp-sequences",
          "parentId": "view-technique-dynamic-programming",
          "kind": "group",
          "label": "Sequences & Alignment",
          "localizedLabels": {
            "en": "Sequences & Alignment",
            "ko": "시퀀스·정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-technique-dp-optimization",
          "parentId": "view-technique-dynamic-programming",
          "kind": "group",
          "label": "Optimization DP",
          "localizedLabels": {
            "en": "Optimization DP",
            "ko": "최적화 동적 계획법"
          },
          "order": 30
        },
        {
          "id": "view-group-technique-decrease-search",
          "parentId": "view-technique-decrease-and-conquer",
          "kind": "group",
          "label": "Search-Space Reduction",
          "localizedLabels": {
            "en": "Search-Space Reduction",
            "ko": "탐색 공간 축소"
          },
          "order": 10
        },
        {
          "id": "view-group-technique-decrease-ordering",
          "parentId": "view-technique-decrease-and-conquer",
          "kind": "group",
          "label": "Incremental Ordering",
          "localizedLabels": {
            "en": "Incremental Ordering",
            "ko": "점진적 순서화"
          },
          "order": 20
        },
        {
          "id": "view-group-technique-decrease-arithmetic",
          "parentId": "view-technique-decrease-and-conquer",
          "kind": "group",
          "label": "Arithmetic Reduction",
          "localizedLabels": {
            "en": "Arithmetic Reduction",
            "ko": "산술 축소"
          },
          "order": 30
        },
        {
          "id": "view-group-technique-decrease-candidates-cycles",
          "parentId": "view-technique-decrease-and-conquer",
          "kind": "group",
          "label": "Candidates & Cycles",
          "localizedLabels": {
            "en": "Candidates & Cycles",
            "ko": "후보·순환 축소"
          },
          "order": 40
        },
        { "id": "view-wave150-technique-depth-first-traversal", "parentId": "view-group-techniques-graph-methods", "kind": "entity", "entityId": "technique-depth-first-traversal", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-maximum-adjacency-search", "parentId": "view-group-techniques-graph-methods", "kind": "entity", "entityId": "technique-maximum-adjacency-search", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-technique-bit-parallelism", "parentId": "view-group-techniques-data-access-ordering", "kind": "entity", "entityId": "technique-bit-parallelism", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-binary-arithmetic", "parentId": "view-group-techniques-mathematics-geometry", "kind": "entity", "entityId": "technique-binary-arithmetic", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-orthogonal-transformation", "parentId": "view-group-techniques-mathematics-geometry", "kind": "entity", "entityId": "technique-orthogonal-transformation", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-technique-krylov-subspace", "parentId": "view-group-techniques-mathematics-geometry", "kind": "entity", "entityId": "technique-krylov-subspace", "primaryForSearch": true, "order": 110 },
        { "id": "view-wave150-technique-keyed-hashing", "parentId": "view-group-techniques-cryptographic-constructions", "kind": "entity", "entityId": "technique-keyed-hashing", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-extract-expand", "parentId": "view-group-techniques-cryptographic-constructions", "kind": "entity", "entityId": "technique-extract-expand", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-technique-probabilistic-modeling", "parentId": "view-group-techniques-learning-methods", "kind": "entity", "entityId": "technique-probabilistic-modeling", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-coordinate-optimization", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-coordinate-optimization", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-technique-boosting", "parentId": "view-group-techniques-learning-methods", "kind": "entity", "entityId": "technique-boosting", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-technique-alternating-optimization", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-alternating-optimization", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-technique-stochastic-gradient", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-stochastic-gradient", "primaryForSearch": true, "order": 110 },
        { "id": "view-wave150-technique-momentum", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-momentum", "primaryForSearch": true, "order": 120 },
        { "id": "view-wave150-technique-quasi-newton", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-quasi-newton", "primaryForSearch": true, "order": 130 },
        { "id": "view-wave150-technique-adaptive-gradient", "parentId": "view-group-techniques-search-optimization", "kind": "entity", "entityId": "technique-adaptive-gradient", "primaryForSearch": true, "order": 140 },
        {
          "id": "view-group-wave150-technique-greedy-bounded-paths",
          "parentId": "view-technique-greedy",
          "kind": "group",
          "label": "Bounded-Weight Paths",
          "localizedLabels": { "en": "Bounded-Weight Paths", "ko": "제한 가중치 경로" },
          "order": 90
        },
        { "id": "view-wave150-technique-selection-sort", "parentId": "view-group-technique-decrease-ordering", "kind": "entity", "entityId": "algo-selection-sort", "order": 90 },
        { "id": "view-wave150-technique-bubble-sort", "parentId": "view-group-technique-decrease-ordering", "kind": "entity", "entityId": "algo-bubble-sort", "order": 100 },
        { "id": "view-wave150-technique-median-of-medians", "parentId": "view-group-technique-divide-partition-selection", "kind": "entity", "entityId": "algo-median-of-medians", "order": 90 },
        { "id": "view-wave150-technique-dial-shortest-path", "parentId": "view-group-wave150-technique-greedy-bounded-paths", "kind": "entity", "entityId": "algo-dial-shortest-path", "order": 10 },
        { "id": "view-wave150-technique-zero-one-bfs", "parentId": "view-group-wave150-technique-greedy-bounded-paths", "kind": "entity", "entityId": "algo-zero-one-bfs", "order": 20 },
        { "id": "view-wave150-technique-gabow-scc", "parentId": "view-wave150-technique-depth-first-traversal", "kind": "entity", "entityId": "algo-gabow-scc", "order": 10 },
        { "id": "view-wave150-technique-stoer-wagner-min-cut", "parentId": "view-wave150-technique-maximum-adjacency-search", "kind": "entity", "entityId": "algo-stoer-wagner-min-cut", "order": 10 },
        { "id": "view-wave150-technique-successive-shortest-path", "parentId": "view-technique-augmenting-path", "kind": "entity", "entityId": "algo-successive-shortest-path", "order": 90 },
        { "id": "view-wave150-technique-naive-string-search", "parentId": "view-technique-brute-force", "kind": "entity", "entityId": "algo-naive-string-search", "order": 90 },
        { "id": "view-wave150-technique-bitap", "parentId": "view-wave150-technique-bit-parallelism", "kind": "entity", "entityId": "algo-bitap", "order": 10 },
        { "id": "view-wave150-technique-ukkonen-suffix-tree", "parentId": "view-phase3-technique-incremental", "kind": "entity", "entityId": "algo-ukkonen-suffix-tree", "order": 90 },
        { "id": "view-wave150-technique-binary-gcd", "parentId": "view-wave150-technique-binary-arithmetic", "kind": "entity", "entityId": "algo-binary-gcd", "order": 10 },
        { "id": "view-wave150-technique-tonelli-shanks", "parentId": "view-technique-modular-arithmetic", "kind": "entity", "entityId": "algo-tonelli-shanks", "order": 90 },
        { "id": "view-wave150-technique-householder-qr", "parentId": "view-wave150-technique-orthogonal-transformation", "kind": "entity", "entityId": "algo-householder-qr", "order": 10 },
        { "id": "view-wave150-technique-conjugate-gradient", "parentId": "view-wave150-technique-krylov-subspace", "kind": "entity", "entityId": "algo-conjugate-gradient", "order": 10 },
        { "id": "view-wave150-technique-hmac", "parentId": "view-wave150-technique-keyed-hashing", "kind": "entity", "entityId": "algo-hmac", "order": 10 },
        { "id": "view-wave150-technique-hkdf", "parentId": "view-wave150-technique-extract-expand", "kind": "entity", "entityId": "algo-hkdf", "order": 10 },
        { "id": "view-wave150-technique-x25519", "parentId": "view-technique-elliptic-curve", "kind": "entity", "entityId": "algo-x25519", "order": 90 },
        { "id": "view-wave150-technique-lz4", "parentId": "view-technique-dictionary-coding", "kind": "entity", "entityId": "algo-lz4", "order": 90 },
        { "id": "view-wave150-technique-brotli", "parentId": "view-technique-entropy-coding", "kind": "entity", "entityId": "algo-brotli", "order": 90 },
        { "id": "view-wave150-technique-fortune-voronoi", "parentId": "view-technique-line-sweep", "kind": "entity", "entityId": "algo-fortune-voronoi", "order": 90 },
        { "id": "view-wave150-technique-sutherland-hodgman", "parentId": "view-phase3-technique-incremental", "kind": "entity", "entityId": "algo-sutherland-hodgman", "order": 100 },
        { "id": "view-wave150-technique-gaussian-naive-bayes", "parentId": "view-wave150-technique-probabilistic-modeling", "kind": "entity", "entityId": "algo-gaussian-naive-bayes", "order": 10 },
        { "id": "view-wave150-technique-smo", "parentId": "view-wave150-technique-coordinate-optimization", "kind": "entity", "entityId": "algo-smo", "order": 10 },
        { "id": "view-wave150-technique-adaboost", "parentId": "view-wave150-technique-boosting", "kind": "entity", "entityId": "algo-adaboost", "order": 10 },
        { "id": "view-wave150-technique-expectation-maximization", "parentId": "view-wave150-technique-alternating-optimization", "kind": "entity", "entityId": "algo-expectation-maximization", "order": 10 },
        { "id": "view-wave150-technique-stochastic-gradient-descent", "parentId": "view-wave150-technique-stochastic-gradient", "kind": "entity", "entityId": "algo-stochastic-gradient-descent", "order": 10 },
        { "id": "view-wave150-technique-momentum-gradient-descent", "parentId": "view-wave150-technique-momentum", "kind": "entity", "entityId": "algo-momentum-gradient-descent", "order": 10 },
        { "id": "view-wave150-technique-bfgs", "parentId": "view-wave150-technique-quasi-newton", "kind": "entity", "entityId": "algo-bfgs", "order": 10 },
        { "id": "view-wave150-technique-adam", "parentId": "view-wave150-technique-adaptive-gradient", "kind": "entity", "entityId": "algo-adam", "order": 10 }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
