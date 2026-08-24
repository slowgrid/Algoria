(function registerAlgoriaAlgorithmsHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-algorithms",
    hierarchy: {
      nodes: [
        {
          "id": "view-type-algorithms",
          "parentId": "view-root",
          "kind": "group",
          "label": "Algorithms",
          "order": 10,
          "localizedLabels": {
            "en": "Algorithms",
            "ko": "알고리즘 분류"
          }
        },
        {
          "id": "view-algorithms-sorting",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Sorting",
          "order": 10,
          "localizedLabels": {
            "en": "Sorting",
            "ko": "정렬"
          }
        },
        {
          "id": "view-algorithms-searching",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Searching",
          "order": 20,
          "localizedLabels": {
            "en": "Searching",
            "ko": "탐색"
          }
        },
        {
          "id": "view-algorithms-graph",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Graph",
          "order": 30,
          "localizedLabels": {
            "en": "Graph",
            "ko": "그래프"
          }
        },
        {
          "id": "view-algorithms-string",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "String",
          "order": 40,
          "localizedLabels": {
            "en": "String",
            "ko": "문자열"
          }
        },
        {
          "id": "view-algorithms-mathematics",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Mathematics",
          "order": 50,
          "localizedLabels": {
            "en": "Mathematics",
            "ko": "수학"
          }
        },
        {
          "id": "view-algorithms-cryptography",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Cryptography",
          "order": 60,
          "localizedLabels": {
            "en": "Cryptography",
            "ko": "암호학"
          }
        },
        {
          "id": "view-algorithms-compression",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Compression",
          "order": 70,
          "localizedLabels": {
            "en": "Compression",
            "ko": "압축"
          }
        },
        {
          "id": "view-algorithms-computational-geometry",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Computational Geometry",
          "order": 80,
          "localizedLabels": {
            "en": "Computational Geometry",
            "ko": "계산기하학"
          }
        },
        {
          "id": "view-algorithms-machine-learning",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Machine Learning",
          "order": 90,
          "localizedLabels": {
            "en": "Machine Learning",
            "ko": "머신러닝"
          }
        },
        {
          "id": "view-algorithms-optimization",
          "parentId": "view-type-algorithms",
          "kind": "group",
          "label": "Optimization",
          "order": 100,
          "localizedLabels": {
            "en": "Optimization",
            "ko": "최적화"
          }
        },
        {
          "id": "view-algo-quick-sort",
          "parentId": "view-group-algorithms-sorting-partition",
          "kind": "entity",
          "entityId": "algo-quick-sort",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-randomized-quick-sort",
          "parentId": "view-group-algorithms-sorting-partition",
          "kind": "entity",
          "entityId": "algo-randomized-quick-sort",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-merge-sort",
          "parentId": "view-group-algorithms-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-merge-sort",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algorithms-graph-shortest-path",
          "parentId": "view-algorithms-graph",
          "kind": "entity",
          "entityId": "problem-shortest-path",
          "order": 10
        },
        {
          "id": "view-algo-dijkstra",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-dijkstra",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-a-star",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-a-star",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-dual-pivot-quick-sort",
          "parentId": "view-group-algorithms-sorting-partition",
          "kind": "entity",
          "entityId": "algo-dual-pivot-quick-sort",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-three-way-quick-sort",
          "parentId": "view-group-algorithms-sorting-partition",
          "kind": "entity",
          "entityId": "algo-three-way-quick-sort",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-introsort",
          "parentId": "view-group-algorithms-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-introsort",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-heap-sort",
          "parentId": "view-group-algorithms-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-heap-sort",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-insertion-sort",
          "parentId": "view-group-algorithms-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-insertion-sort",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-counting-sort",
          "parentId": "view-group-algorithms-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-counting-sort",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-radix-sort",
          "parentId": "view-group-algorithms-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-radix-sort",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-timsort",
          "parentId": "view-group-algorithms-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-timsort",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-binary-search",
          "parentId": "view-group-algorithms-searching-ordered-range",
          "kind": "entity",
          "entityId": "algo-binary-search",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-linear-search",
          "parentId": "view-group-algorithms-searching-sequential-block",
          "kind": "entity",
          "entityId": "algo-linear-search",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-ternary-search",
          "parentId": "view-group-algorithms-searching-ordered-range",
          "kind": "entity",
          "entityId": "algo-ternary-search",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-quickselect",
          "parentId": "view-group-algorithms-searching-selection",
          "kind": "entity",
          "entityId": "algo-quickselect",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algorithms-graph-traversal",
          "parentId": "view-algorithms-graph",
          "kind": "entity",
          "entityId": "problem-graph-traversal",
          "order": 20
        },
        {
          "id": "view-algorithms-graph-mst",
          "parentId": "view-algorithms-graph",
          "kind": "entity",
          "entityId": "problem-mst",
          "order": 30
        },
        {
          "id": "view-algorithms-graph-flow",
          "parentId": "view-algorithms-graph",
          "kind": "entity",
          "entityId": "problem-max-flow",
          "order": 40
        },
        {
          "id": "view-algorithms-graph-ordering",
          "parentId": "view-algorithms-graph",
          "kind": "entity",
          "entityId": "problem-topological-ordering",
          "order": 50
        },
        {
          "id": "view-algorithms-graph-connectivity",
          "parentId": "view-algorithms-graph",
          "kind": "group",
          "label": "Connectivity",
          "order": 60,
          "localizedLabels": {
            "en": "Connectivity",
            "ko": "연결성"
          }
        },
        {
          "id": "view-algo-bellman-ford",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-bellman-ford",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-floyd-warshall",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-floyd-warshall",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-bidirectional-dijkstra",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-bidirectional-dijkstra",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-algo-breadth-first-search",
          "parentId": "view-algorithms-graph-traversal",
          "kind": "entity",
          "entityId": "algo-breadth-first-search",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-depth-first-search",
          "parentId": "view-algorithms-graph-traversal",
          "kind": "entity",
          "entityId": "algo-depth-first-search",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-kruskal",
          "parentId": "view-algorithms-graph-mst",
          "kind": "entity",
          "entityId": "algo-kruskal",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-prim",
          "parentId": "view-algorithms-graph-mst",
          "kind": "entity",
          "entityId": "algo-prim",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-edmonds-karp",
          "parentId": "view-algorithms-graph-flow",
          "kind": "entity",
          "entityId": "algo-edmonds-karp",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-topological-sort",
          "parentId": "view-algorithms-graph-ordering",
          "kind": "entity",
          "entityId": "algo-topological-sort",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-tarjan-scc",
          "parentId": "view-algorithms-graph-connectivity",
          "kind": "entity",
          "entityId": "algo-tarjan-scc",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-kmp",
          "parentId": "view-group-algorithms-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-kmp",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-rabin-karp",
          "parentId": "view-group-algorithms-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-rabin-karp",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-boyer-moore",
          "parentId": "view-group-algorithms-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-boyer-moore",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-z-algorithm",
          "parentId": "view-group-algorithms-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-z-algorithm",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-aho-corasick",
          "parentId": "view-group-algorithms-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-algo-euclidean",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-euclidean",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-sieve-eratosthenes",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-sieve-eratosthenes",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-fft",
          "parentId": "view-group-algorithms-mathematics-transforms-multiplication",
          "kind": "entity",
          "entityId": "algo-fft",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-karatsuba",
          "parentId": "view-group-algorithms-mathematics-transforms-multiplication",
          "kind": "entity",
          "entityId": "algo-karatsuba",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-rsa",
          "parentId": "view-group-algorithms-cryptography-public-signatures",
          "kind": "entity",
          "entityId": "algo-rsa",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-aes",
          "parentId": "view-group-algorithms-cryptography-symmetric",
          "kind": "entity",
          "entityId": "algo-aes",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-diffie-hellman",
          "parentId": "view-group-algorithms-cryptography-key-agreement",
          "kind": "entity",
          "entityId": "algo-diffie-hellman",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-sha-256",
          "parentId": "view-group-algorithms-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-sha-256",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-huffman-coding",
          "parentId": "view-group-algorithms-compression-entropy",
          "kind": "entity",
          "entityId": "algo-huffman-coding",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-lzw",
          "parentId": "view-group-algorithms-compression-dictionary",
          "kind": "entity",
          "entityId": "algo-lzw",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-graham-scan",
          "parentId": "view-group-algorithms-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-graham-scan",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-k-means",
          "parentId": "view-group-algorithms-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-k-means",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-simplex",
          "parentId": "view-group-algorithms-optimization-mathematical-combinatorial",
          "kind": "entity",
          "entityId": "algo-simplex",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-ford-fulkerson",
          "parentId": "view-algorithms-graph-flow",
          "kind": "entity",
          "entityId": "algo-ford-fulkerson",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-dinic",
          "parentId": "view-algorithms-graph-flow",
          "kind": "entity",
          "entityId": "algo-dinic",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-kosaraju-sharir",
          "parentId": "view-algorithms-graph-connectivity",
          "kind": "entity",
          "entityId": "algo-kosaraju-sharir",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-johnson",
          "parentId": "view-algorithms-graph-shortest-path",
          "kind": "entity",
          "entityId": "algo-johnson",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-algo-levenshtein-distance",
          "parentId": "view-group-algorithms-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-levenshtein-distance",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-longest-common-subsequence",
          "parentId": "view-group-algorithms-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-longest-common-subsequence",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-needleman-wunsch",
          "parentId": "view-group-algorithms-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-needleman-wunsch",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-longest-increasing-subsequence-dp",
          "parentId": "view-group-algorithms-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-longest-increasing-subsequence-dp",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-zero-one-knapsack-dp",
          "parentId": "view-group-algorithms-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-zero-one-knapsack-dp",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-matrix-chain-multiplication",
          "parentId": "view-group-algorithms-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-matrix-chain-multiplication",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-jarvis-march",
          "parentId": "view-group-algorithms-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-jarvis-march",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-andrew-monotone-chain",
          "parentId": "view-group-algorithms-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-andrew-monotone-chain",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-quickhull",
          "parentId": "view-group-algorithms-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-quickhull",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-closest-pair-divide-conquer",
          "parentId": "view-group-algorithms-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-closest-pair-divide-conquer",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-bentley-ottmann",
          "parentId": "view-group-algorithms-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-bentley-ottmann",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-dbscan",
          "parentId": "view-group-algorithms-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-dbscan",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-knn",
          "parentId": "view-group-algorithms-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-knn",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-perceptron",
          "parentId": "view-group-algorithms-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-perceptron",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-id3",
          "parentId": "view-group-algorithms-machine-learning-trees-ensembles",
          "kind": "entity",
          "entityId": "algo-id3",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-pagerank",
          "parentId": "view-group-algorithms-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-chacha20",
          "parentId": "view-group-algorithms-cryptography-symmetric",
          "kind": "entity",
          "entityId": "algo-chacha20",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-blake2",
          "parentId": "view-group-algorithms-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-blake2",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-argon2id",
          "parentId": "view-group-algorithms-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-argon2id",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-ecdh",
          "parentId": "view-group-algorithms-cryptography-key-agreement",
          "kind": "entity",
          "entityId": "algo-ecdh",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-arithmetic-coding",
          "parentId": "view-group-algorithms-compression-entropy",
          "kind": "entity",
          "entityId": "algo-arithmetic-coding",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-run-length-encoding",
          "parentId": "view-group-algorithms-compression-transform-simple",
          "kind": "entity",
          "entityId": "algo-run-length-encoding",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-deflate",
          "parentId": "view-group-algorithms-compression-dictionary",
          "kind": "entity",
          "entityId": "algo-deflate",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-burrows-wheeler-transform",
          "parentId": "view-group-algorithms-compression-transform-simple",
          "kind": "entity",
          "entityId": "algo-burrows-wheeler-transform",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-lz77",
          "parentId": "view-group-algorithms-compression-dictionary",
          "kind": "entity",
          "entityId": "algo-lz77",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-lz78",
          "parentId": "view-group-algorithms-compression-dictionary",
          "kind": "entity",
          "entityId": "algo-lz78",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-exponential-search",
          "parentId": "view-group-algorithms-searching-ordered-range",
          "kind": "entity",
          "entityId": "algo-exponential-search",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-algo-jump-search",
          "parentId": "view-group-algorithms-searching-sequential-block",
          "kind": "entity",
          "entityId": "algo-jump-search",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-interpolation-search",
          "parentId": "view-group-algorithms-searching-ordered-range",
          "kind": "entity",
          "entityId": "algo-interpolation-search",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-extended-euclidean",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-extended-euclidean",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-binary-modular-exponentiation",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-binary-modular-exponentiation",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-algo-miller-rabin",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-miller-rabin",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-algo-gaussian-elimination",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-gaussian-elimination",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-gradient-descent",
          "parentId": "view-group-algorithms-optimization-continuous-local",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-algo-hungarian",
          "parentId": "view-group-algorithms-optimization-mathematical-combinatorial",
          "kind": "entity",
          "entityId": "algo-hungarian",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-algo-nelder-mead",
          "parentId": "view-group-algorithms-optimization-continuous-local",
          "kind": "entity",
          "entityId": "algo-nelder-mead",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-shell-sort",
          "parentId": "view-group-algorithms-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-shell-sort",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-bucket-sort",
          "parentId": "view-group-algorithms-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-cycle-sort",
          "parentId": "view-group-algorithms-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-cycle-sort",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-external-merge-sort",
          "parentId": "view-group-algorithms-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-fibonacci-search",
          "parentId": "view-group-algorithms-searching-ordered-range",
          "kind": "entity",
          "entityId": "algo-fibonacci-search",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-primary-algo-boruvka",
          "parentId": "view-algorithms-graph-mst",
          "kind": "entity",
          "entityId": "algo-boruvka",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-hopcroft-karp",
          "parentId": "view-group-algorithms-graph-matching-routes-cycles",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-primary-algo-push-relabel",
          "parentId": "view-algorithms-graph-flow",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-hierholzer",
          "parentId": "view-group-algorithms-graph-matching-routes-cycles",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-bron-kerbosch",
          "parentId": "view-group-algorithms-graph-network-structure",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-primary-algo-louvain",
          "parentId": "view-group-algorithms-graph-network-structure",
          "kind": "entity",
          "entityId": "algo-louvain",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-yen-k-shortest",
          "parentId": "view-group-algorithms-graph-matching-routes-cycles",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-floyd-cycle-finding",
          "parentId": "view-group-algorithms-graph-matching-routes-cycles",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-primary-algo-edmonds-blossom",
          "parentId": "view-group-algorithms-graph-matching-routes-cycles",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-suffix-array-doubling",
          "parentId": "view-group-algorithms-string-indexing-structure",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-primary-algo-manacher",
          "parentId": "view-group-algorithms-string-indexing-structure",
          "kind": "entity",
          "entityId": "algo-manacher",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-smith-waterman",
          "parentId": "view-group-algorithms-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-myers-diff",
          "parentId": "view-group-algorithms-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-primary-algo-newton-raphson",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-primary-algo-gauss-seidel",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-lu-decomposition",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-lu-decomposition",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-cholesky",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-cholesky",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-strassen",
          "parentId": "view-group-algorithms-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-strassen",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-primary-algo-pollard-rho",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-phase3-primary-algo-chinese-remainder",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-phase3-primary-algo-ed25519",
          "parentId": "view-group-algorithms-cryptography-public-signatures",
          "kind": "entity",
          "entityId": "algo-ed25519",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-pbkdf2",
          "parentId": "view-group-algorithms-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-pbkdf2",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-primary-algo-rotating-calipers",
          "parentId": "view-group-algorithms-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-rotating-calipers",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-ramer-douglas-peucker",
          "parentId": "view-group-algorithms-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-ramer-douglas-peucker",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-primary-algo-bowyer-watson",
          "parentId": "view-group-algorithms-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-ray-casting-point-in-polygon",
          "parentId": "view-group-algorithms-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-ray-casting-point-in-polygon",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-primary-algo-logistic-regression",
          "parentId": "view-group-algorithms-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-random-forest",
          "parentId": "view-group-algorithms-machine-learning-trees-ensembles",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-primary-algo-simulated-annealing",
          "parentId": "view-group-algorithms-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-simulated-annealing",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-primary-algo-particle-swarm",
          "parentId": "view-group-algorithms-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-group-algorithms-sorting-partition",
          "parentId": "view-algorithms-sorting",
          "kind": "group",
          "label": "Partition-Based",
          "localizedLabels": {
            "en": "Partition-Based",
            "ko": "분할 기반 정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-sorting-merge-hybrid",
          "parentId": "view-algorithms-sorting",
          "kind": "group",
          "label": "Merge & Hybrid",
          "localizedLabels": {
            "en": "Merge & Hybrid",
            "ko": "병합·하이브리드 정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-sorting-in-place-comparison",
          "parentId": "view-algorithms-sorting",
          "kind": "group",
          "label": "In-Place Comparison",
          "localizedLabels": {
            "en": "In-Place Comparison",
            "ko": "제자리 비교 정렬"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-sorting-distribution",
          "parentId": "view-algorithms-sorting",
          "kind": "group",
          "label": "Distribution-Based",
          "localizedLabels": {
            "en": "Distribution-Based",
            "ko": "분포 기반 정렬"
          },
          "order": 40
        },
        {
          "id": "view-group-algorithms-searching-sequential-block",
          "parentId": "view-algorithms-searching",
          "kind": "group",
          "label": "Sequential & Block",
          "localizedLabels": {
            "en": "Sequential & Block",
            "ko": "순차·블록 탐색"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-searching-ordered-range",
          "parentId": "view-algorithms-searching",
          "kind": "group",
          "label": "Ordered-Range Search",
          "localizedLabels": {
            "en": "Ordered-Range Search",
            "ko": "정렬 범위 탐색"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-searching-selection",
          "parentId": "view-algorithms-searching",
          "kind": "group",
          "label": "Selection",
          "localizedLabels": {
            "en": "Selection",
            "ko": "선택 알고리즘"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-graph-matching-routes-cycles",
          "parentId": "view-algorithms-graph",
          "kind": "group",
          "label": "Matching, Routes & Cycles",
          "localizedLabels": {
            "en": "Matching, Routes & Cycles",
            "ko": "매칭·경로·순환"
          },
          "order": 70
        },
        {
          "id": "view-group-algorithms-graph-network-structure",
          "parentId": "view-algorithms-graph",
          "kind": "group",
          "label": "Network Structure",
          "localizedLabels": {
            "en": "Network Structure",
            "ko": "네트워크 구조"
          },
          "order": 80
        },
        {
          "id": "view-group-algorithms-string-pattern-matching",
          "parentId": "view-algorithms-string",
          "kind": "group",
          "label": "Pattern Matching",
          "localizedLabels": {
            "en": "Pattern Matching",
            "ko": "패턴 매칭"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-string-sequence-comparison",
          "parentId": "view-algorithms-string",
          "kind": "group",
          "label": "Sequence Comparison",
          "localizedLabels": {
            "en": "Sequence Comparison",
            "ko": "시퀀스 비교"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-string-indexing-structure",
          "parentId": "view-algorithms-string",
          "kind": "group",
          "label": "Indexing & Structural Patterns",
          "localizedLabels": {
            "en": "Indexing & Structural Patterns",
            "ko": "인덱스·구조 패턴"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-mathematics-number-theory",
          "parentId": "view-algorithms-mathematics",
          "kind": "group",
          "label": "Number Theory",
          "localizedLabels": {
            "en": "Number Theory",
            "ko": "정수론"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-mathematics-linear-numerical",
          "parentId": "view-algorithms-mathematics",
          "kind": "group",
          "label": "Linear Algebra & Numerical",
          "localizedLabels": {
            "en": "Linear Algebra & Numerical",
            "ko": "선형대수·수치해석"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-mathematics-transforms-multiplication",
          "parentId": "view-algorithms-mathematics",
          "kind": "group",
          "label": "Transforms & Multiplication",
          "localizedLabels": {
            "en": "Transforms & Multiplication",
            "ko": "변환·곱셈"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-cryptography-public-signatures",
          "parentId": "view-algorithms-cryptography",
          "kind": "group",
          "label": "Public-Key & Signatures",
          "localizedLabels": {
            "en": "Public-Key & Signatures",
            "ko": "공개키·전자서명"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-cryptography-key-agreement",
          "parentId": "view-algorithms-cryptography",
          "kind": "group",
          "label": "Key Agreement",
          "localizedLabels": {
            "en": "Key Agreement",
            "ko": "키 합의"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-cryptography-symmetric",
          "parentId": "view-algorithms-cryptography",
          "kind": "group",
          "label": "Symmetric Ciphers",
          "localizedLabels": {
            "en": "Symmetric Ciphers",
            "ko": "대칭 암호"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-cryptography-hashing-passwords",
          "parentId": "view-algorithms-cryptography",
          "kind": "group",
          "label": "Hashing & Passwords",
          "localizedLabels": {
            "en": "Hashing & Passwords",
            "ko": "해시·비밀번호"
          },
          "order": 40
        },
        {
          "id": "view-group-algorithms-compression-entropy",
          "parentId": "view-algorithms-compression",
          "kind": "group",
          "label": "Entropy Coding",
          "localizedLabels": {
            "en": "Entropy Coding",
            "ko": "엔트로피 부호화"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-compression-dictionary",
          "parentId": "view-algorithms-compression",
          "kind": "group",
          "label": "Dictionary Coding",
          "localizedLabels": {
            "en": "Dictionary Coding",
            "ko": "사전 부호화"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-compression-transform-simple",
          "parentId": "view-algorithms-compression",
          "kind": "group",
          "label": "Transforms & Simple Coding",
          "localizedLabels": {
            "en": "Transforms & Simple Coding",
            "ko": "변환·단순 부호화"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-geometry-convex-hull",
          "parentId": "view-algorithms-computational-geometry",
          "kind": "group",
          "label": "Convex Hull",
          "localizedLabels": {
            "en": "Convex Hull",
            "ko": "볼록 껍질"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-geometry-proximity-intersections",
          "parentId": "view-algorithms-computational-geometry",
          "kind": "group",
          "label": "Proximity & Intersections",
          "localizedLabels": {
            "en": "Proximity & Intersections",
            "ko": "근접·교차"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-geometry-polygon-planar",
          "parentId": "view-algorithms-computational-geometry",
          "kind": "group",
          "label": "Polygon & Planar Geometry",
          "localizedLabels": {
            "en": "Polygon & Planar Geometry",
            "ko": "다각형·평면 기하"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-machine-learning-clustering-ranking",
          "parentId": "view-algorithms-machine-learning",
          "kind": "group",
          "label": "Clustering & Graph Ranking",
          "localizedLabels": {
            "en": "Clustering & Graph Ranking",
            "ko": "군집화·그래프 순위"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-machine-learning-linear-instance",
          "parentId": "view-algorithms-machine-learning",
          "kind": "group",
          "label": "Linear & Instance-Based",
          "localizedLabels": {
            "en": "Linear & Instance-Based",
            "ko": "선형·사례 기반 학습"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-machine-learning-trees-ensembles",
          "parentId": "view-algorithms-machine-learning",
          "kind": "group",
          "label": "Trees & Ensembles",
          "localizedLabels": {
            "en": "Trees & Ensembles",
            "ko": "트리·앙상블"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-optimization-dynamic-programming",
          "parentId": "view-algorithms-optimization",
          "kind": "group",
          "label": "Dynamic Programming",
          "localizedLabels": {
            "en": "Dynamic Programming",
            "ko": "동적 계획법"
          },
          "order": 10
        },
        {
          "id": "view-group-algorithms-optimization-mathematical-combinatorial",
          "parentId": "view-algorithms-optimization",
          "kind": "group",
          "label": "Mathematical & Combinatorial",
          "localizedLabels": {
            "en": "Mathematical & Combinatorial",
            "ko": "수리·조합 최적화"
          },
          "order": 20
        },
        {
          "id": "view-group-algorithms-optimization-continuous-local",
          "parentId": "view-algorithms-optimization",
          "kind": "group",
          "label": "Continuous & Local",
          "localizedLabels": {
            "en": "Continuous & Local",
            "ko": "연속·지역 최적화"
          },
          "order": 30
        },
        {
          "id": "view-group-algorithms-optimization-metaheuristics",
          "parentId": "view-algorithms-optimization",
          "kind": "group",
          "label": "Metaheuristics",
          "localizedLabels": {
            "en": "Metaheuristics",
            "ko": "메타휴리스틱"
          },
          "order": 40
        },
        {
          "id": "view-group-wave150-algorithms-graph-cuts-cost-flow",
          "parentId": "view-algorithms-graph",
          "kind": "group",
          "label": "Cuts & Cost Flow",
          "localizedLabels": { "en": "Cuts & Cost Flow", "ko": "컷·비용 흐름" },
          "order": 90
        },
        { "id": "view-wave150-algorithms-global-min-cut", "parentId": "view-group-wave150-algorithms-graph-cuts-cost-flow", "kind": "entity", "entityId": "problem-global-min-cut", "order": 10 },
        { "id": "view-wave150-primary-algo-stoer-wagner-min-cut", "parentId": "view-wave150-algorithms-global-min-cut", "kind": "entity", "entityId": "algo-stoer-wagner-min-cut", "primaryForSearch": true, "order": 10 },
        { "id": "view-wave150-algorithms-min-cost-flow", "parentId": "view-group-wave150-algorithms-graph-cuts-cost-flow", "kind": "entity", "entityId": "problem-min-cost-flow", "order": 20 },
        { "id": "view-wave150-primary-algo-successive-shortest-path", "parentId": "view-wave150-algorithms-min-cost-flow", "kind": "entity", "entityId": "algo-successive-shortest-path", "primaryForSearch": true, "order": 10 },
        {
          "id": "view-group-wave150-algorithms-mathematics-gcd-modular",
          "parentId": "view-group-algorithms-mathematics-number-theory",
          "kind": "group",
          "label": "GCD & Modular Roots",
          "localizedLabels": { "en": "GCD & Modular Roots", "ko": "최대공약수·모듈러 근" },
          "order": 80
        },
        {
          "id": "view-group-wave150-algorithms-cryptography-auth-kdf",
          "parentId": "view-algorithms-cryptography",
          "kind": "group",
          "label": "Authentication & Key Derivation",
          "localizedLabels": { "en": "Authentication & Key Derivation", "ko": "인증·키 파생" },
          "order": 50
        },
        { "id": "view-wave150-primary-algo-selection-sort", "parentId": "view-group-algorithms-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-selection-sort", "primaryForSearch": true, "order": 50 },
        { "id": "view-wave150-primary-algo-bubble-sort", "parentId": "view-group-algorithms-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-bubble-sort", "primaryForSearch": true, "order": 60 },
        { "id": "view-wave150-primary-algo-median-of-medians", "parentId": "view-group-algorithms-searching-selection", "kind": "entity", "entityId": "algo-median-of-medians", "primaryForSearch": true, "order": 20 },
        { "id": "view-wave150-primary-algo-dial-shortest-path", "parentId": "view-algorithms-graph-shortest-path", "kind": "entity", "entityId": "algo-dial-shortest-path", "primaryForSearch": true, "order": 70 },
        { "id": "view-wave150-primary-algo-zero-one-bfs", "parentId": "view-algorithms-graph-shortest-path", "kind": "entity", "entityId": "algo-zero-one-bfs", "primaryForSearch": true, "order": 80 },
        { "id": "view-wave150-primary-algo-gabow-scc", "parentId": "view-algorithms-graph-connectivity", "kind": "entity", "entityId": "algo-gabow-scc", "primaryForSearch": true, "order": 30 },
        { "id": "view-wave150-primary-algo-naive-string-search", "parentId": "view-group-algorithms-string-pattern-matching", "kind": "entity", "entityId": "algo-naive-string-search", "primaryForSearch": true, "order": 60 },
        { "id": "view-wave150-primary-algo-bitap", "parentId": "view-group-algorithms-string-pattern-matching", "kind": "entity", "entityId": "algo-bitap", "primaryForSearch": true, "order": 70 },
        { "id": "view-wave150-primary-algo-ukkonen-suffix-tree", "parentId": "view-group-algorithms-string-indexing-structure", "kind": "entity", "entityId": "algo-ukkonen-suffix-tree", "primaryForSearch": true, "order": 30 },
        { "id": "view-wave150-primary-algo-binary-gcd", "parentId": "view-group-wave150-algorithms-mathematics-gcd-modular", "kind": "entity", "entityId": "algo-binary-gcd", "primaryForSearch": true, "order": 10 },
        { "id": "view-wave150-primary-algo-tonelli-shanks", "parentId": "view-group-wave150-algorithms-mathematics-gcd-modular", "kind": "entity", "entityId": "algo-tonelli-shanks", "primaryForSearch": true, "order": 20 },
        { "id": "view-wave150-primary-algo-householder-qr", "parentId": "view-group-algorithms-mathematics-linear-numerical", "kind": "entity", "entityId": "algo-householder-qr", "primaryForSearch": true, "order": 70 },
        { "id": "view-wave150-primary-algo-conjugate-gradient", "parentId": "view-group-algorithms-mathematics-linear-numerical", "kind": "entity", "entityId": "algo-conjugate-gradient", "primaryForSearch": true, "order": 80 },
        { "id": "view-wave150-primary-algo-hmac", "parentId": "view-group-wave150-algorithms-cryptography-auth-kdf", "kind": "entity", "entityId": "algo-hmac", "primaryForSearch": true, "order": 10 },
        { "id": "view-wave150-primary-algo-hkdf", "parentId": "view-group-wave150-algorithms-cryptography-auth-kdf", "kind": "entity", "entityId": "algo-hkdf", "primaryForSearch": true, "order": 20 },
        { "id": "view-wave150-primary-algo-x25519", "parentId": "view-group-algorithms-cryptography-key-agreement", "kind": "entity", "entityId": "algo-x25519", "primaryForSearch": true, "order": 30 },
        { "id": "view-wave150-primary-algo-lz4", "parentId": "view-group-algorithms-compression-dictionary", "kind": "entity", "entityId": "algo-lz4", "primaryForSearch": true, "order": 50 },
        { "id": "view-wave150-primary-algo-brotli", "parentId": "view-group-algorithms-compression-dictionary", "kind": "entity", "entityId": "algo-brotli", "primaryForSearch": true, "order": 60 },
        { "id": "view-wave150-primary-algo-fortune-voronoi", "parentId": "view-group-algorithms-geometry-polygon-planar", "kind": "entity", "entityId": "algo-fortune-voronoi", "primaryForSearch": true, "order": 40 },
        { "id": "view-wave150-primary-algo-sutherland-hodgman", "parentId": "view-group-algorithms-geometry-polygon-planar", "kind": "entity", "entityId": "algo-sutherland-hodgman", "primaryForSearch": true, "order": 50 },
        { "id": "view-wave150-primary-algo-gaussian-naive-bayes", "parentId": "view-group-algorithms-machine-learning-linear-instance", "kind": "entity", "entityId": "algo-gaussian-naive-bayes", "primaryForSearch": true, "order": 40 },
        { "id": "view-wave150-primary-algo-smo", "parentId": "view-group-algorithms-machine-learning-linear-instance", "kind": "entity", "entityId": "algo-smo", "primaryForSearch": true, "order": 50 },
        { "id": "view-wave150-primary-algo-adaboost", "parentId": "view-group-algorithms-machine-learning-trees-ensembles", "kind": "entity", "entityId": "algo-adaboost", "primaryForSearch": true, "order": 30 },
        { "id": "view-wave150-primary-algo-expectation-maximization", "parentId": "view-group-algorithms-machine-learning-clustering-ranking", "kind": "entity", "entityId": "algo-expectation-maximization", "primaryForSearch": true, "order": 40 },
        { "id": "view-wave150-primary-algo-stochastic-gradient-descent", "parentId": "view-group-algorithms-optimization-continuous-local", "kind": "entity", "entityId": "algo-stochastic-gradient-descent", "primaryForSearch": true, "order": 30 },
        { "id": "view-wave150-primary-algo-momentum-gradient-descent", "parentId": "view-group-algorithms-optimization-continuous-local", "kind": "entity", "entityId": "algo-momentum-gradient-descent", "primaryForSearch": true, "order": 40 },
        { "id": "view-wave150-primary-algo-bfgs", "parentId": "view-group-algorithms-optimization-continuous-local", "kind": "entity", "entityId": "algo-bfgs", "primaryForSearch": true, "order": 50 },
        { "id": "view-wave150-primary-algo-adam", "parentId": "view-group-algorithms-optimization-continuous-local", "kind": "entity", "entityId": "algo-adam", "primaryForSearch": true, "order": 60 }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
