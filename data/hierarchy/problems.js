(function registerAlgoriaProblemsHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-problems",
    hierarchy: {
      nodes: [
        {
          "id": "view-type-problems",
          "parentId": "view-root",
          "kind": "group",
          "label": "Problems",
          "order": 20,
          "localizedLabels": {
            "en": "Problems",
            "ko": "문제"
          }
        },
        {
          "id": "view-problem-sorting",
          "parentId": "view-group-problems-ordering-retrieval",
          "kind": "entity",
          "entityId": "problem-sorting",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-sorting-quick-sort",
          "parentId": "view-group-problem-sorting-partition",
          "kind": "entity",
          "entityId": "algo-quick-sort",
          "order": 10
        },
        {
          "id": "view-problem-sorting-merge-sort",
          "parentId": "view-group-problem-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-merge-sort",
          "order": 10
        },
        {
          "id": "view-problem-shortest-path",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-shortest-path",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-shortest-path-dijkstra",
          "parentId": "view-problem-shortest-path",
          "kind": "entity",
          "entityId": "algo-dijkstra",
          "order": 10
        },
        {
          "id": "view-problem-shortest-path-a-star",
          "parentId": "view-problem-shortest-path",
          "kind": "entity",
          "entityId": "algo-a-star",
          "order": 20
        },
        {
          "id": "view-problem-searching",
          "parentId": "view-group-problems-ordering-retrieval",
          "kind": "entity",
          "entityId": "problem-searching",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-selection",
          "parentId": "view-group-problems-ordering-retrieval",
          "kind": "entity",
          "entityId": "problem-selection",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-problem-string-matching",
          "parentId": "view-group-problems-strings-pattern-structure",
          "kind": "entity",
          "entityId": "problem-string-matching",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-mst",
          "parentId": "view-group-problems-graph-connectivity-structure",
          "kind": "entity",
          "entityId": "problem-mst",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-max-flow",
          "parentId": "view-group-problems-graph-flow-matching",
          "kind": "entity",
          "entityId": "problem-max-flow",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-graph-traversal",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-graph-traversal",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-problem-topological-ordering",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-topological-ordering",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-problem-integer-multiplication",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-integer-multiplication",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-public-key-crypto",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-public-key-crypto",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-lossless-compression",
          "parentId": "view-group-problems-compression",
          "kind": "entity",
          "entityId": "problem-lossless-compression",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-convex-hull",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-convex-hull",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-clustering",
          "parentId": "view-group-problems-learning",
          "kind": "entity",
          "entityId": "problem-clustering",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-linear-optimization",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-linear-optimization",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-searching-binary-search",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-binary-search",
          "order": 10
        },
        {
          "id": "view-problem-searching-linear-search",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-linear-search",
          "order": 20
        },
        {
          "id": "view-problem-searching-ternary-search",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-ternary-search",
          "order": 30
        },
        {
          "id": "view-problem-selection-quickselect",
          "parentId": "view-problem-selection",
          "kind": "entity",
          "entityId": "algo-quickselect",
          "order": 10
        },
        {
          "id": "view-problem-string-kmp",
          "parentId": "view-problem-string-matching",
          "kind": "entity",
          "entityId": "algo-kmp",
          "order": 10
        },
        {
          "id": "view-problem-string-rabin-karp",
          "parentId": "view-problem-string-matching",
          "kind": "entity",
          "entityId": "algo-rabin-karp",
          "order": 20
        },
        {
          "id": "view-problem-string-boyer-moore",
          "parentId": "view-problem-string-matching",
          "kind": "entity",
          "entityId": "algo-boyer-moore",
          "order": 30
        },
        {
          "id": "view-problem-string-aho-corasick",
          "parentId": "view-problem-string-matching",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "order": 40
        },
        {
          "id": "view-problem-mst-kruskal",
          "parentId": "view-problem-mst",
          "kind": "entity",
          "entityId": "algo-kruskal",
          "order": 10
        },
        {
          "id": "view-problem-mst-prim",
          "parentId": "view-problem-mst",
          "kind": "entity",
          "entityId": "algo-prim",
          "order": 20
        },
        {
          "id": "view-problem-max-flow-edmonds-karp",
          "parentId": "view-problem-max-flow",
          "kind": "entity",
          "entityId": "algo-edmonds-karp",
          "order": 10
        },
        {
          "id": "view-problem-traversal-bfs",
          "parentId": "view-problem-graph-traversal",
          "kind": "entity",
          "entityId": "algo-breadth-first-search",
          "order": 10
        },
        {
          "id": "view-problem-traversal-dfs",
          "parentId": "view-problem-graph-traversal",
          "kind": "entity",
          "entityId": "algo-depth-first-search",
          "order": 20
        },
        {
          "id": "view-problem-topological-sort",
          "parentId": "view-problem-topological-ordering",
          "kind": "entity",
          "entityId": "algo-topological-sort",
          "order": 10
        },
        {
          "id": "view-problem-integer-karatsuba",
          "parentId": "view-problem-integer-multiplication",
          "kind": "entity",
          "entityId": "algo-karatsuba",
          "order": 10
        },
        {
          "id": "view-problem-public-key-rsa",
          "parentId": "view-problem-public-key-crypto",
          "kind": "entity",
          "entityId": "algo-rsa",
          "order": 10
        },
        {
          "id": "view-problem-compression-huffman",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-huffman-coding",
          "order": 10
        },
        {
          "id": "view-problem-compression-lzw",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-lzw",
          "order": 20
        },
        {
          "id": "view-problem-convex-hull-graham",
          "parentId": "view-problem-convex-hull",
          "kind": "entity",
          "entityId": "algo-graham-scan",
          "order": 10
        },
        {
          "id": "view-problem-clustering-k-means",
          "parentId": "view-problem-clustering",
          "kind": "entity",
          "entityId": "algo-k-means",
          "order": 10
        },
        {
          "id": "view-problem-linear-simplex",
          "parentId": "view-problem-linear-optimization",
          "kind": "entity",
          "entityId": "algo-simplex",
          "order": 10
        },
        {
          "id": "view-problem-sorting-randomized-quick",
          "parentId": "view-group-problem-sorting-partition",
          "kind": "entity",
          "entityId": "algo-randomized-quick-sort",
          "order": 20
        },
        {
          "id": "view-problem-sorting-dual-pivot",
          "parentId": "view-group-problem-sorting-partition",
          "kind": "entity",
          "entityId": "algo-dual-pivot-quick-sort",
          "order": 30
        },
        {
          "id": "view-problem-sorting-three-way",
          "parentId": "view-group-problem-sorting-partition",
          "kind": "entity",
          "entityId": "algo-three-way-quick-sort",
          "order": 40
        },
        {
          "id": "view-problem-sorting-introsort",
          "parentId": "view-group-problem-sorting-partition",
          "kind": "entity",
          "entityId": "algo-introsort",
          "order": 50
        },
        {
          "id": "view-problem-sorting-heap-sort",
          "parentId": "view-group-problem-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-heap-sort",
          "order": 10
        },
        {
          "id": "view-problem-sorting-insertion-sort",
          "parentId": "view-group-problem-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-insertion-sort",
          "order": 20
        },
        {
          "id": "view-problem-sorting-counting-sort",
          "parentId": "view-group-problem-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-counting-sort",
          "order": 10
        },
        {
          "id": "view-problem-sorting-radix-sort",
          "parentId": "view-group-problem-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-radix-sort",
          "order": 20
        },
        {
          "id": "view-problem-sorting-timsort",
          "parentId": "view-group-problem-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-timsort",
          "order": 20
        },
        {
          "id": "view-problem-shortest-bellman-ford",
          "parentId": "view-problem-shortest-path",
          "kind": "entity",
          "entityId": "algo-bellman-ford",
          "order": 30
        },
        {
          "id": "view-problem-shortest-floyd-warshall",
          "parentId": "view-problem-shortest-path",
          "kind": "entity",
          "entityId": "algo-floyd-warshall",
          "order": 40
        },
        {
          "id": "view-problem-shortest-bidirectional-dijkstra",
          "parentId": "view-problem-shortest-path",
          "kind": "entity",
          "entityId": "algo-bidirectional-dijkstra",
          "order": 50
        },
        {
          "id": "view-problem-all-pairs-shortest-paths",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-all-pairs-shortest-paths",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-apsp-johnson",
          "parentId": "view-problem-all-pairs-shortest-paths",
          "kind": "entity",
          "entityId": "algo-johnson",
          "order": 10
        },
        {
          "id": "view-problem-edit-distance",
          "parentId": "view-group-problems-strings-distance-alignment",
          "kind": "entity",
          "entityId": "problem-edit-distance",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-edit-distance-levenshtein",
          "parentId": "view-problem-edit-distance",
          "kind": "entity",
          "entityId": "algo-levenshtein-distance",
          "order": 10
        },
        {
          "id": "view-problem-longest-common-subsequence",
          "parentId": "view-group-problems-strings-subsequences",
          "kind": "entity",
          "entityId": "problem-longest-common-subsequence",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-lcs-algorithm",
          "parentId": "view-problem-longest-common-subsequence",
          "kind": "entity",
          "entityId": "algo-longest-common-subsequence",
          "order": 10
        },
        {
          "id": "view-problem-longest-increasing-subsequence",
          "parentId": "view-group-problems-strings-subsequences",
          "kind": "entity",
          "entityId": "problem-longest-increasing-subsequence",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-lis-dp",
          "parentId": "view-problem-longest-increasing-subsequence",
          "kind": "entity",
          "entityId": "algo-longest-increasing-subsequence-dp",
          "order": 10
        },
        {
          "id": "view-problem-zero-one-knapsack",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-zero-one-knapsack",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-problem-zero-one-knapsack-dp",
          "parentId": "view-problem-zero-one-knapsack",
          "kind": "entity",
          "entityId": "algo-zero-one-knapsack-dp",
          "order": 10
        },
        {
          "id": "view-problem-matrix-chain-ordering",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-matrix-chain-ordering",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-problem-matrix-chain-algorithm",
          "parentId": "view-problem-matrix-chain-ordering",
          "kind": "entity",
          "entityId": "algo-matrix-chain-multiplication",
          "order": 10
        },
        {
          "id": "view-problem-global-sequence-alignment",
          "parentId": "view-group-problems-strings-distance-alignment",
          "kind": "entity",
          "entityId": "problem-global-sequence-alignment",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-global-alignment-needleman-wunsch",
          "parentId": "view-problem-global-sequence-alignment",
          "kind": "entity",
          "entityId": "algo-needleman-wunsch",
          "order": 10
        },
        {
          "id": "view-problem-max-flow-ford-fulkerson",
          "parentId": "view-problem-max-flow",
          "kind": "entity",
          "entityId": "algo-ford-fulkerson",
          "order": 20
        },
        {
          "id": "view-problem-max-flow-dinic",
          "parentId": "view-problem-max-flow",
          "kind": "entity",
          "entityId": "algo-dinic",
          "order": 30
        },
        {
          "id": "view-problem-scc-kosaraju",
          "parentId": "view-problem-strongly-connected-components",
          "kind": "entity",
          "entityId": "algo-kosaraju-sharir",
          "order": 20
        },
        {
          "id": "view-problem-strongly-connected-components",
          "parentId": "view-group-problems-graph-connectivity-structure",
          "kind": "entity",
          "entityId": "problem-strongly-connected-components",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-scc-tarjan",
          "parentId": "view-problem-strongly-connected-components",
          "kind": "entity",
          "entityId": "algo-tarjan-scc",
          "order": 10
        },
        {
          "id": "view-problem-greatest-common-divisor",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-greatest-common-divisor",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-gcd-euclidean",
          "parentId": "view-problem-greatest-common-divisor",
          "kind": "entity",
          "entityId": "algo-euclidean",
          "order": 10
        },
        {
          "id": "view-problem-prime-enumeration",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-prime-enumeration",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-problem-prime-sieve",
          "parentId": "view-problem-prime-enumeration",
          "kind": "entity",
          "entityId": "algo-sieve-eratosthenes",
          "order": 10
        },
        {
          "id": "view-problem-discrete-fourier-transform",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-discrete-fourier-transform",
          "primaryForSearch": true,
          "order": 80
        },
        {
          "id": "view-problem-dft-fft",
          "parentId": "view-problem-discrete-fourier-transform",
          "kind": "entity",
          "entityId": "algo-fft",
          "order": 10
        },
        {
          "id": "view-problem-symmetric-key-encryption",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-symmetric-key-encryption",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-symmetric-aes",
          "parentId": "view-problem-symmetric-key-encryption",
          "kind": "entity",
          "entityId": "algo-aes",
          "order": 10
        },
        {
          "id": "view-problem-key-agreement",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-key-agreement",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-problem-key-agreement-dh",
          "parentId": "view-problem-key-agreement",
          "kind": "entity",
          "entityId": "algo-diffie-hellman",
          "order": 10
        },
        {
          "id": "view-problem-cryptographic-hashing",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-cryptographic-hashing",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-problem-cryptographic-hashing-sha256",
          "parentId": "view-problem-cryptographic-hashing",
          "kind": "entity",
          "entityId": "algo-sha-256",
          "order": 10
        },
        {
          "id": "view-problem-closest-pair",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-closest-pair",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-segment-intersections",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-segment-intersections",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-problem-supervised-classification",
          "parentId": "view-group-problems-learning",
          "kind": "entity",
          "entityId": "problem-supervised-classification",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-link-ranking",
          "parentId": "view-group-problems-graph-connectivity-structure",
          "kind": "entity",
          "entityId": "problem-link-ranking",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-problem-password-hashing",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-password-hashing",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-problem-block-sorting-transform",
          "parentId": "view-group-problems-compression",
          "kind": "entity",
          "entityId": "problem-block-sorting-transform",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-modular-exponentiation",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-modular-exponentiation",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-problem-primality-testing",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-primality-testing",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-problem-linear-system-solving",
          "parentId": "view-group-problems-linear-algebra-numerical",
          "kind": "entity",
          "entityId": "problem-linear-system-solving",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-problem-continuous-optimization",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-continuous-optimization",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-problem-assignment",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-assignment",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase2-jarvis-march-problem",
          "parentId": "view-problem-convex-hull",
          "kind": "entity",
          "entityId": "algo-jarvis-march",
          "order": 20
        },
        {
          "id": "view-phase2-andrew-monotone-chain-problem",
          "parentId": "view-problem-convex-hull",
          "kind": "entity",
          "entityId": "algo-andrew-monotone-chain",
          "order": 30
        },
        {
          "id": "view-phase2-quickhull-problem",
          "parentId": "view-problem-convex-hull",
          "kind": "entity",
          "entityId": "algo-quickhull",
          "order": 40
        },
        {
          "id": "view-phase2-closest-pair-divide-conquer-problem",
          "parentId": "view-problem-closest-pair",
          "kind": "entity",
          "entityId": "algo-closest-pair-divide-conquer",
          "order": 50
        },
        {
          "id": "view-phase2-bentley-ottmann-problem",
          "parentId": "view-problem-segment-intersections",
          "kind": "entity",
          "entityId": "algo-bentley-ottmann",
          "order": 60
        },
        {
          "id": "view-phase2-dbscan-problem",
          "parentId": "view-problem-clustering",
          "kind": "entity",
          "entityId": "algo-dbscan",
          "order": 20
        },
        {
          "id": "view-phase2-knn-problem",
          "parentId": "view-problem-supervised-classification",
          "kind": "entity",
          "entityId": "algo-knn",
          "order": 30
        },
        {
          "id": "view-phase2-perceptron-problem",
          "parentId": "view-problem-supervised-classification",
          "kind": "entity",
          "entityId": "algo-perceptron",
          "order": 40
        },
        {
          "id": "view-phase2-id3-problem",
          "parentId": "view-problem-supervised-classification",
          "kind": "entity",
          "entityId": "algo-id3",
          "order": 50
        },
        {
          "id": "view-phase2-pagerank-problem",
          "parentId": "view-problem-link-ranking",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "order": 60
        },
        {
          "id": "view-phase2-chacha20-problem",
          "parentId": "view-problem-symmetric-key-encryption",
          "kind": "entity",
          "entityId": "algo-chacha20",
          "order": 50
        },
        {
          "id": "view-phase2-blake2-problem",
          "parentId": "view-problem-cryptographic-hashing",
          "kind": "entity",
          "entityId": "algo-blake2",
          "order": 60
        },
        {
          "id": "view-phase2-argon2id-problem",
          "parentId": "view-problem-password-hashing",
          "kind": "entity",
          "entityId": "algo-argon2id",
          "order": 70
        },
        {
          "id": "view-phase2-ecdh-problem",
          "parentId": "view-problem-key-agreement",
          "kind": "entity",
          "entityId": "algo-ecdh",
          "order": 80
        },
        {
          "id": "view-phase2-arithmetic-coding-problem",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-arithmetic-coding",
          "order": 30
        },
        {
          "id": "view-phase2-run-length-encoding-problem",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-run-length-encoding",
          "order": 40
        },
        {
          "id": "view-phase2-deflate-problem",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-deflate",
          "order": 50
        },
        {
          "id": "view-phase2-burrows-wheeler-transform-problem",
          "parentId": "view-problem-block-sorting-transform",
          "kind": "entity",
          "entityId": "algo-burrows-wheeler-transform",
          "order": 60
        },
        {
          "id": "view-phase2-lz77-problem",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-lz77",
          "order": 70
        },
        {
          "id": "view-phase2-lz78-problem",
          "parentId": "view-problem-lossless-compression",
          "kind": "entity",
          "entityId": "algo-lz78",
          "order": 80
        },
        {
          "id": "view-phase2-exponential-search-problem",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-exponential-search",
          "order": 50
        },
        {
          "id": "view-phase2-jump-search-problem",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-jump-search",
          "order": 60
        },
        {
          "id": "view-phase2-interpolation-search-problem",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-interpolation-search",
          "order": 70
        },
        {
          "id": "view-phase2-extended-euclidean-problem",
          "parentId": "view-problem-greatest-common-divisor",
          "kind": "entity",
          "entityId": "algo-extended-euclidean",
          "order": 50
        },
        {
          "id": "view-phase2-binary-modular-exponentiation-problem",
          "parentId": "view-problem-modular-exponentiation",
          "kind": "entity",
          "entityId": "algo-binary-modular-exponentiation",
          "order": 60
        },
        {
          "id": "view-phase2-miller-rabin-problem",
          "parentId": "view-problem-primality-testing",
          "kind": "entity",
          "entityId": "algo-miller-rabin",
          "order": 70
        },
        {
          "id": "view-phase2-gaussian-elimination-problem",
          "parentId": "view-problem-linear-system-solving",
          "kind": "entity",
          "entityId": "algo-gaussian-elimination",
          "order": 80
        },
        {
          "id": "view-phase2-gradient-descent-problem",
          "parentId": "view-problem-continuous-optimization",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "order": 50
        },
        {
          "id": "view-phase2-hungarian-problem",
          "parentId": "view-problem-assignment",
          "kind": "entity",
          "entityId": "algo-hungarian",
          "order": 60
        },
        {
          "id": "view-phase2-nelder-mead-problem",
          "parentId": "view-problem-continuous-optimization",
          "kind": "entity",
          "entityId": "algo-nelder-mead",
          "order": 70
        },
        {
          "id": "view-phase3-problem-bipartite-matching",
          "parentId": "view-group-problems-graph-flow-matching",
          "kind": "entity",
          "entityId": "problem-bipartite-matching",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-problem-eulerian-trail",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-eulerian-trail",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-phase3-problem-maximum-clique-enumeration",
          "parentId": "view-group-problems-graph-connectivity-structure",
          "kind": "entity",
          "entityId": "problem-maximum-clique-enumeration",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-community-detection",
          "parentId": "view-group-problems-graph-connectivity-structure",
          "kind": "entity",
          "entityId": "problem-community-detection",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-problem-k-shortest-paths",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-k-shortest-paths",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-cycle-detection",
          "parentId": "view-group-problems-graph-paths-traversal",
          "kind": "entity",
          "entityId": "problem-cycle-detection",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-problem-general-graph-matching",
          "parentId": "view-group-problems-graph-flow-matching",
          "kind": "entity",
          "entityId": "problem-general-graph-matching",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-suffix-ordering",
          "parentId": "view-group-problems-strings-pattern-structure",
          "kind": "entity",
          "entityId": "problem-suffix-ordering",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-problem-longest-palindrome",
          "parentId": "view-group-problems-strings-pattern-structure",
          "kind": "entity",
          "entityId": "problem-longest-palindrome",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-local-sequence-alignment",
          "parentId": "view-group-problems-strings-distance-alignment",
          "kind": "entity",
          "entityId": "problem-local-sequence-alignment",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-sequence-diff",
          "parentId": "view-group-problems-strings-distance-alignment",
          "kind": "entity",
          "entityId": "problem-sequence-diff",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-problem-root-finding",
          "parentId": "view-group-problems-linear-algebra-numerical",
          "kind": "entity",
          "entityId": "problem-root-finding",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-problem-matrix-factorization",
          "parentId": "view-group-problems-linear-algebra-numerical",
          "kind": "entity",
          "entityId": "problem-matrix-factorization",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-matrix-multiplication",
          "parentId": "view-group-problems-linear-algebra-numerical",
          "kind": "entity",
          "entityId": "problem-matrix-multiplication",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-problem-integer-factorization",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-integer-factorization",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-problem-simultaneous-congruences",
          "parentId": "view-group-problems-arithmetic-number-theory",
          "kind": "entity",
          "entityId": "problem-simultaneous-congruences",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-phase3-problem-digital-signature",
          "parentId": "view-group-problems-cryptography",
          "kind": "entity",
          "entityId": "problem-digital-signature",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-problem-polygon-simplification",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-polygon-simplification",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-problem-planar-triangulation",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-planar-triangulation",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-problem-point-in-polygon",
          "parentId": "view-group-problems-geometry",
          "kind": "entity",
          "entityId": "problem-point-in-polygon",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-problem-ensemble-classification",
          "parentId": "view-group-problems-learning",
          "kind": "entity",
          "entityId": "problem-ensemble-classification",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-problem-global-optimization",
          "parentId": "view-group-problems-optimization",
          "kind": "entity",
          "entityId": "problem-global-optimization",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-shell-sort-solves-0",
          "parentId": "view-group-problem-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-shell-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-bucket-sort-solves-0",
          "parentId": "view-group-problem-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-cycle-sort-solves-0",
          "parentId": "view-group-problem-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-cycle-sort",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-external-merge-sort-solves-0",
          "parentId": "view-group-problem-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-fibonacci-search-solves-0",
          "parentId": "view-problem-searching",
          "kind": "entity",
          "entityId": "algo-fibonacci-search",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-boruvka-solves-0",
          "parentId": "view-problem-mst",
          "kind": "entity",
          "entityId": "algo-boruvka",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-solves-0",
          "parentId": "view-phase3-problem-bipartite-matching",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-solves-0",
          "parentId": "view-problem-max-flow",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-hierholzer-solves-0",
          "parentId": "view-phase3-problem-eulerian-trail",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-solves-0",
          "parentId": "view-phase3-problem-maximum-clique-enumeration",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-louvain-solves-0",
          "parentId": "view-phase3-problem-community-detection",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-yen-k-shortest-solves-0",
          "parentId": "view-phase3-problem-k-shortest-paths",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "order": 570
        },
        {
          "id": "view-phase3-cross-algo-floyd-cycle-finding-solves-0",
          "parentId": "view-phase3-problem-cycle-detection",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "order": 580
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-solves-0",
          "parentId": "view-phase3-problem-general-graph-matching",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 590
        },
        {
          "id": "view-phase3-cross-algo-suffix-array-doubling-solves-0",
          "parentId": "view-phase3-problem-suffix-ordering",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-manacher-solves-0",
          "parentId": "view-phase3-problem-longest-palindrome",
          "kind": "entity",
          "entityId": "algo-manacher",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-smith-waterman-solves-0",
          "parentId": "view-phase3-problem-local-sequence-alignment",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-myers-diff-solves-0",
          "parentId": "view-phase3-problem-sequence-diff",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-newton-raphson-solves-0",
          "parentId": "view-phase3-problem-root-finding",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-gauss-seidel-solves-0",
          "parentId": "view-problem-linear-system-solving",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-lu-decomposition-solves-0",
          "parentId": "view-phase3-problem-matrix-factorization",
          "kind": "entity",
          "entityId": "algo-lu-decomposition",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-cholesky-solves-0",
          "parentId": "view-phase3-problem-matrix-factorization",
          "kind": "entity",
          "entityId": "algo-cholesky",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-strassen-solves-0",
          "parentId": "view-phase3-problem-matrix-multiplication",
          "kind": "entity",
          "entityId": "algo-strassen",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-pollard-rho-solves-0",
          "parentId": "view-phase3-problem-integer-factorization",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-chinese-remainder-solves-0",
          "parentId": "view-phase3-problem-simultaneous-congruences",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "order": 570
        },
        {
          "id": "view-phase3-cross-algo-ed25519-solves-0",
          "parentId": "view-phase3-problem-digital-signature",
          "kind": "entity",
          "entityId": "algo-ed25519",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-pbkdf2-solves-0",
          "parentId": "view-problem-password-hashing",
          "kind": "entity",
          "entityId": "algo-pbkdf2",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-rotating-calipers-solves-0",
          "parentId": "view-problem-convex-hull",
          "kind": "entity",
          "entityId": "algo-rotating-calipers",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-ramer-douglas-peucker-solves-0",
          "parentId": "view-phase3-problem-polygon-simplification",
          "kind": "entity",
          "entityId": "algo-ramer-douglas-peucker",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-bowyer-watson-solves-0",
          "parentId": "view-phase3-problem-planar-triangulation",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-ray-casting-point-in-polygon-solves-0",
          "parentId": "view-phase3-problem-point-in-polygon",
          "kind": "entity",
          "entityId": "algo-ray-casting-point-in-polygon",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-solves-0",
          "parentId": "view-problem-supervised-classification",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-random-forest-solves-0",
          "parentId": "view-phase3-problem-ensemble-classification",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-simulated-annealing-solves-0",
          "parentId": "view-phase3-problem-global-optimization",
          "kind": "entity",
          "entityId": "algo-simulated-annealing",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-particle-swarm-solves-0",
          "parentId": "view-phase3-problem-global-optimization",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "order": 520
        },
        {
          "id": "view-phase4-cross-rel-demo-070",
          "parentId": "view-problem-string-matching",
          "kind": "entity",
          "entityId": "algo-z-algorithm",
          "order": 900
        },
        {
          "id": "view-group-problems-ordering-retrieval",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Ordering & Retrieval",
          "localizedLabels": {
            "en": "Ordering & Retrieval",
            "ko": "정렬·탐색·선택"
          },
          "order": 10
        },
        {
          "id": "view-group-problems-graph",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Graph Problems",
          "localizedLabels": {
            "en": "Graph Problems",
            "ko": "그래프 문제"
          },
          "order": 20
        },
        {
          "id": "view-group-problems-strings-sequences",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Strings & Sequences",
          "localizedLabels": {
            "en": "Strings & Sequences",
            "ko": "문자열·시퀀스"
          },
          "order": 30
        },
        {
          "id": "view-group-problems-arithmetic-number-theory",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Arithmetic, Number Theory & Transforms",
          "localizedLabels": {
            "en": "Arithmetic, Number Theory & Transforms",
            "ko": "산술·정수론·변환"
          },
          "order": 40
        },
        {
          "id": "view-group-problems-linear-algebra-numerical",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Linear Algebra & Numerical",
          "localizedLabels": {
            "en": "Linear Algebra & Numerical",
            "ko": "선형대수·수치해석"
          },
          "order": 50
        },
        {
          "id": "view-group-problems-optimization",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Optimization Problems",
          "localizedLabels": {
            "en": "Optimization Problems",
            "ko": "최적화 문제"
          },
          "order": 60
        },
        {
          "id": "view-group-problems-cryptography",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Cryptography Problems",
          "localizedLabels": {
            "en": "Cryptography Problems",
            "ko": "암호 문제"
          },
          "order": 70
        },
        {
          "id": "view-group-problems-compression",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Compression Problems",
          "localizedLabels": {
            "en": "Compression Problems",
            "ko": "압축 문제"
          },
          "order": 80
        },
        {
          "id": "view-group-problems-geometry",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Geometry Problems",
          "localizedLabels": {
            "en": "Geometry Problems",
            "ko": "기하 문제"
          },
          "order": 90
        },
        {
          "id": "view-group-problems-learning",
          "parentId": "view-type-problems",
          "kind": "group",
          "label": "Learning Problems",
          "localizedLabels": {
            "en": "Learning Problems",
            "ko": "학습 문제"
          },
          "order": 100
        },
        {
          "id": "view-group-problems-graph-paths-traversal",
          "parentId": "view-group-problems-graph",
          "kind": "group",
          "label": "Paths & Traversal",
          "localizedLabels": {
            "en": "Paths & Traversal",
            "ko": "경로·순회"
          },
          "order": 10
        },
        {
          "id": "view-group-problems-graph-connectivity-structure",
          "parentId": "view-group-problems-graph",
          "kind": "group",
          "label": "Connectivity & Structure",
          "localizedLabels": {
            "en": "Connectivity & Structure",
            "ko": "연결성·구조"
          },
          "order": 20
        },
        {
          "id": "view-group-problems-graph-flow-matching",
          "parentId": "view-group-problems-graph",
          "kind": "group",
          "label": "Flow & Matching",
          "localizedLabels": {
            "en": "Flow & Matching",
            "ko": "유량·매칭"
          },
          "order": 30
        },
        {
          "id": "view-group-problems-strings-pattern-structure",
          "parentId": "view-group-problems-strings-sequences",
          "kind": "group",
          "label": "Pattern & Structure",
          "localizedLabels": {
            "en": "Pattern & Structure",
            "ko": "패턴·구조"
          },
          "order": 10
        },
        {
          "id": "view-group-problems-strings-distance-alignment",
          "parentId": "view-group-problems-strings-sequences",
          "kind": "group",
          "label": "Distance & Alignment",
          "localizedLabels": {
            "en": "Distance & Alignment",
            "ko": "거리·정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-problems-strings-subsequences",
          "parentId": "view-group-problems-strings-sequences",
          "kind": "group",
          "label": "Subsequences",
          "localizedLabels": {
            "en": "Subsequences",
            "ko": "부분 수열"
          },
          "order": 30
        },
        {
          "id": "view-group-problem-sorting-partition",
          "parentId": "view-problem-sorting",
          "kind": "group",
          "label": "Partition-Based",
          "localizedLabels": {
            "en": "Partition-Based",
            "ko": "분할 기반 정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-problem-sorting-merge-hybrid",
          "parentId": "view-problem-sorting",
          "kind": "group",
          "label": "Merge, Hybrid & External",
          "localizedLabels": {
            "en": "Merge, Hybrid & External",
            "ko": "병합·하이브리드·외부 정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-problem-sorting-in-place-comparison",
          "parentId": "view-problem-sorting",
          "kind": "group",
          "label": "In-Place Comparison",
          "localizedLabels": {
            "en": "In-Place Comparison",
            "ko": "제자리 비교 정렬"
          },
          "order": 30
        },
        {
          "id": "view-group-problem-sorting-distribution",
          "parentId": "view-problem-sorting",
          "kind": "group",
          "label": "Distribution-Based",
          "localizedLabels": {
            "en": "Distribution-Based",
            "ko": "분포 기반 정렬"
          },
          "order": 40
        },
        { "id": "view-wave150-problem-global-min-cut", "parentId": "view-group-problems-graph-flow-matching", "kind": "entity", "entityId": "problem-global-min-cut", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-problem-min-cost-flow", "parentId": "view-group-problems-graph-flow-matching", "kind": "entity", "entityId": "problem-min-cost-flow", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-problem-modular-square-root", "parentId": "view-group-problems-arithmetic-number-theory", "kind": "entity", "entityId": "problem-modular-square-root", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-problem-message-authentication", "parentId": "view-group-problems-cryptography", "kind": "entity", "entityId": "problem-message-authentication", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-problem-key-derivation", "parentId": "view-group-problems-cryptography", "kind": "entity", "entityId": "problem-key-derivation", "primaryForSearch": true, "order": 100 },
        { "id": "view-wave150-problem-voronoi-diagram", "parentId": "view-group-problems-geometry", "kind": "entity", "entityId": "problem-voronoi-diagram", "primaryForSearch": true, "order": 90 },
        { "id": "view-wave150-problem-polygon-clipping", "parentId": "view-group-problems-geometry", "kind": "entity", "entityId": "problem-polygon-clipping", "primaryForSearch": true, "order": 100 },
        {
          "id": "view-group-wave150-problem-lossless-modern-dictionary",
          "parentId": "view-problem-lossless-compression",
          "kind": "group",
          "label": "Modern Dictionary Compression",
          "localizedLabels": { "en": "Modern Dictionary Compression", "ko": "현대 사전식 압축" },
          "order": 90
        },
        { "id": "view-wave150-problem-selection-sort", "parentId": "view-group-problem-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-selection-sort", "order": 90 },
        { "id": "view-wave150-problem-bubble-sort", "parentId": "view-group-problem-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-bubble-sort", "order": 100 },
        { "id": "view-wave150-problem-median-of-medians", "parentId": "view-problem-selection", "kind": "entity", "entityId": "algo-median-of-medians", "order": 90 },
        { "id": "view-wave150-problem-dial-shortest-path", "parentId": "view-problem-shortest-path", "kind": "entity", "entityId": "algo-dial-shortest-path", "order": 90 },
        { "id": "view-wave150-problem-zero-one-bfs", "parentId": "view-problem-shortest-path", "kind": "entity", "entityId": "algo-zero-one-bfs", "order": 100 },
        { "id": "view-wave150-problem-gabow-scc", "parentId": "view-problem-strongly-connected-components", "kind": "entity", "entityId": "algo-gabow-scc", "order": 90 },
        { "id": "view-wave150-problem-stoer-wagner-min-cut", "parentId": "view-wave150-problem-global-min-cut", "kind": "entity", "entityId": "algo-stoer-wagner-min-cut", "order": 10 },
        { "id": "view-wave150-problem-successive-shortest-path", "parentId": "view-wave150-problem-min-cost-flow", "kind": "entity", "entityId": "algo-successive-shortest-path", "order": 10 },
        { "id": "view-wave150-problem-naive-string-search", "parentId": "view-problem-string-matching", "kind": "entity", "entityId": "algo-naive-string-search", "order": 90 },
        { "id": "view-wave150-problem-bitap", "parentId": "view-problem-string-matching", "kind": "entity", "entityId": "algo-bitap", "order": 100 },
        { "id": "view-wave150-problem-ukkonen-suffix-tree", "parentId": "view-phase3-problem-suffix-ordering", "kind": "entity", "entityId": "algo-ukkonen-suffix-tree", "order": 90 },
        { "id": "view-wave150-problem-binary-gcd", "parentId": "view-problem-greatest-common-divisor", "kind": "entity", "entityId": "algo-binary-gcd", "order": 90 },
        { "id": "view-wave150-problem-tonelli-shanks", "parentId": "view-wave150-problem-modular-square-root", "kind": "entity", "entityId": "algo-tonelli-shanks", "order": 10 },
        { "id": "view-wave150-problem-householder-qr", "parentId": "view-phase3-problem-matrix-factorization", "kind": "entity", "entityId": "algo-householder-qr", "order": 90 },
        { "id": "view-wave150-problem-conjugate-gradient", "parentId": "view-problem-linear-system-solving", "kind": "entity", "entityId": "algo-conjugate-gradient", "order": 90 },
        { "id": "view-wave150-problem-hmac", "parentId": "view-wave150-problem-message-authentication", "kind": "entity", "entityId": "algo-hmac", "order": 10 },
        { "id": "view-wave150-problem-hkdf", "parentId": "view-wave150-problem-key-derivation", "kind": "entity", "entityId": "algo-hkdf", "order": 10 },
        { "id": "view-wave150-problem-x25519", "parentId": "view-problem-key-agreement", "kind": "entity", "entityId": "algo-x25519", "order": 90 },
        { "id": "view-wave150-problem-lz4", "parentId": "view-group-wave150-problem-lossless-modern-dictionary", "kind": "entity", "entityId": "algo-lz4", "order": 10 },
        { "id": "view-wave150-problem-brotli", "parentId": "view-group-wave150-problem-lossless-modern-dictionary", "kind": "entity", "entityId": "algo-brotli", "order": 20 },
        { "id": "view-wave150-problem-fortune-voronoi", "parentId": "view-wave150-problem-voronoi-diagram", "kind": "entity", "entityId": "algo-fortune-voronoi", "order": 10 },
        { "id": "view-wave150-problem-sutherland-hodgman", "parentId": "view-wave150-problem-polygon-clipping", "kind": "entity", "entityId": "algo-sutherland-hodgman", "order": 10 },
        { "id": "view-wave150-problem-gaussian-naive-bayes", "parentId": "view-problem-supervised-classification", "kind": "entity", "entityId": "algo-gaussian-naive-bayes", "order": 90 },
        { "id": "view-wave150-problem-smo", "parentId": "view-problem-supervised-classification", "kind": "entity", "entityId": "algo-smo", "order": 100 },
        { "id": "view-wave150-problem-adaboost", "parentId": "view-phase3-problem-ensemble-classification", "kind": "entity", "entityId": "algo-adaboost", "order": 90 },
        { "id": "view-wave150-problem-expectation-maximization", "parentId": "view-problem-clustering", "kind": "entity", "entityId": "algo-expectation-maximization", "order": 90 },
        { "id": "view-wave150-problem-stochastic-gradient-descent", "parentId": "view-problem-continuous-optimization", "kind": "entity", "entityId": "algo-stochastic-gradient-descent", "order": 90 },
        { "id": "view-wave150-problem-momentum-gradient-descent", "parentId": "view-problem-continuous-optimization", "kind": "entity", "entityId": "algo-momentum-gradient-descent", "order": 100 },
        { "id": "view-wave150-problem-bfgs", "parentId": "view-problem-continuous-optimization", "kind": "entity", "entityId": "algo-bfgs", "order": 110 },
        { "id": "view-wave150-problem-adam", "parentId": "view-problem-continuous-optimization", "kind": "entity", "entityId": "algo-adam", "order": 120 }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
