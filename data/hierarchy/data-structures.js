(function registerAlgoriaDataStructuresHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-data-structures",
    hierarchy: {
      nodes: [
        {
          "id": "view-type-data-structures",
          "parentId": "view-root",
          "kind": "group",
          "label": "Data Structures",
          "order": 40,
          "localizedLabels": {
            "en": "Data Structures",
            "ko": "자료구조"
          }
        },
        {
          "id": "view-ds-heap",
          "parentId": "view-group-data-structures-priority-associative",
          "kind": "entity",
          "entityId": "ds-heap",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-ds-heap-dijkstra",
          "parentId": "view-group-ds-heap-paths-routing",
          "kind": "entity",
          "entityId": "algo-dijkstra",
          "order": 10
        },
        {
          "id": "view-ds-heap-a-star",
          "parentId": "view-group-ds-heap-paths-routing",
          "kind": "entity",
          "entityId": "algo-a-star",
          "order": 20
        },
        {
          "id": "view-ds-queue",
          "parentId": "view-group-data-structures-linear-collections",
          "kind": "entity",
          "entityId": "ds-queue",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-ds-stack",
          "parentId": "view-group-data-structures-linear-collections",
          "kind": "entity",
          "entityId": "ds-stack",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-ds-union-find",
          "parentId": "view-group-data-structures-graph-connectivity",
          "kind": "entity",
          "entityId": "ds-union-find",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-ds-hash-table",
          "parentId": "view-group-data-structures-priority-associative",
          "kind": "entity",
          "entityId": "ds-hash-table",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-ds-trie",
          "parentId": "view-group-data-structures-ordered-trees",
          "kind": "entity",
          "entityId": "ds-trie",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-ds-array",
          "parentId": "view-group-data-structures-linear-collections",
          "kind": "entity",
          "entityId": "ds-array",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-ds-queue-bfs",
          "parentId": "view-group-ds-queue-traversal-ordering",
          "kind": "entity",
          "entityId": "algo-breadth-first-search",
          "order": 10
        },
        {
          "id": "view-ds-queue-edmonds-karp",
          "parentId": "view-group-ds-queue-flow-matching",
          "kind": "entity",
          "entityId": "algo-edmonds-karp",
          "order": 10
        },
        {
          "id": "view-ds-stack-dfs",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-depth-first-search",
          "order": 10
        },
        {
          "id": "view-ds-stack-tarjan",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-tarjan-scc",
          "order": 20
        },
        {
          "id": "view-ds-union-find-kruskal",
          "parentId": "view-ds-union-find",
          "kind": "entity",
          "entityId": "algo-kruskal",
          "order": 10
        },
        {
          "id": "view-ds-hash-table-rabin-karp",
          "parentId": "view-ds-hash-table",
          "kind": "entity",
          "entityId": "algo-rabin-karp",
          "order": 10
        },
        {
          "id": "view-ds-trie-aho-corasick",
          "parentId": "view-ds-trie",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "order": 10
        },
        {
          "id": "view-ds-array-quick-sort",
          "parentId": "view-group-ds-array-sorting-partition",
          "kind": "entity",
          "entityId": "algo-quick-sort",
          "order": 10
        },
        {
          "id": "view-ds-heap-heap-sort",
          "parentId": "view-group-ds-heap-ordering-compression",
          "kind": "entity",
          "entityId": "algo-heap-sort",
          "order": 10
        },
        {
          "id": "view-ds-heap-bidirectional-dijkstra",
          "parentId": "view-group-ds-heap-paths-routing",
          "kind": "entity",
          "entityId": "algo-bidirectional-dijkstra",
          "order": 30
        },
        {
          "id": "view-ds-heap-prim",
          "parentId": "view-group-ds-heap-graph-events",
          "kind": "entity",
          "entityId": "algo-prim",
          "order": 10
        },
        {
          "id": "view-ds-heap-huffman",
          "parentId": "view-group-ds-heap-ordering-compression",
          "kind": "entity",
          "entityId": "algo-huffman-coding",
          "order": 40
        },
        {
          "id": "view-ds-queue-dinic",
          "parentId": "view-group-ds-queue-flow-matching",
          "kind": "entity",
          "entityId": "algo-dinic",
          "order": 20
        },
        {
          "id": "view-ds-stack-kosaraju",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-kosaraju-sharir",
          "order": 30
        },
        {
          "id": "view-ds-heap-johnson",
          "parentId": "view-group-ds-heap-paths-routing",
          "kind": "entity",
          "entityId": "algo-johnson",
          "order": 40
        },
        {
          "id": "view-ds-array-levenshtein",
          "parentId": "view-group-ds-array-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-levenshtein-distance",
          "order": 10
        },
        {
          "id": "view-ds-array-lcs",
          "parentId": "view-group-ds-array-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-longest-common-subsequence",
          "order": 20
        },
        {
          "id": "view-ds-array-lis",
          "parentId": "view-group-ds-array-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-longest-increasing-subsequence-dp",
          "order": 10
        },
        {
          "id": "view-ds-array-knapsack",
          "parentId": "view-group-ds-array-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-zero-one-knapsack-dp",
          "order": 20
        },
        {
          "id": "view-ds-array-matrix-chain",
          "parentId": "view-group-ds-array-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-matrix-chain-multiplication",
          "order": 30
        },
        {
          "id": "view-ds-array-needleman-wunsch",
          "parentId": "view-group-ds-array-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-needleman-wunsch",
          "order": 30
        },
        {
          "id": "view-ds-array-randomized-quick",
          "parentId": "view-group-ds-array-sorting-partition",
          "kind": "entity",
          "entityId": "algo-randomized-quick-sort",
          "order": 20
        },
        {
          "id": "view-ds-array-dual-pivot",
          "parentId": "view-group-ds-array-sorting-partition",
          "kind": "entity",
          "entityId": "algo-dual-pivot-quick-sort",
          "order": 30
        },
        {
          "id": "view-ds-array-three-way",
          "parentId": "view-group-ds-array-sorting-partition",
          "kind": "entity",
          "entityId": "algo-three-way-quick-sort",
          "order": 40
        },
        {
          "id": "view-ds-array-introsort",
          "parentId": "view-group-ds-array-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-introsort",
          "order": 10
        },
        {
          "id": "view-ds-heap-introsort",
          "parentId": "view-group-ds-heap-ordering-compression",
          "kind": "entity",
          "entityId": "algo-introsort",
          "order": 20
        },
        {
          "id": "view-ds-array-insertion",
          "parentId": "view-group-ds-array-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-insertion-sort",
          "order": 10
        },
        {
          "id": "view-ds-array-timsort",
          "parentId": "view-group-ds-array-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-timsort",
          "order": 20
        },
        {
          "id": "view-ds-queue-topological",
          "parentId": "view-group-ds-queue-traversal-ordering",
          "kind": "entity",
          "entityId": "algo-topological-sort",
          "order": 20
        },
        {
          "id": "view-phase2-jarvis-march-ds-0",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-jarvis-march",
          "order": 10
        },
        {
          "id": "view-phase2-andrew-monotone-chain-ds-0",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-andrew-monotone-chain",
          "order": 40
        },
        {
          "id": "view-phase2-quickhull-ds-0",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-quickhull",
          "order": 20
        },
        {
          "id": "view-phase2-closest-pair-divide-conquer-ds-0",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-closest-pair-divide-conquer",
          "order": 30
        },
        {
          "id": "view-phase2-bentley-ottmann-ds-0",
          "parentId": "view-group-ds-heap-graph-events",
          "kind": "entity",
          "entityId": "algo-bentley-ottmann",
          "order": 20
        },
        {
          "id": "view-phase2-dbscan-ds-0",
          "parentId": "view-group-ds-queue-traversal-ordering",
          "kind": "entity",
          "entityId": "algo-dbscan",
          "order": 30
        },
        {
          "id": "view-phase2-knn-ds-0",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-knn",
          "order": 10
        },
        {
          "id": "view-phase2-perceptron-ds-0",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-perceptron",
          "order": 20
        },
        {
          "id": "view-phase2-id3-ds-0",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-id3",
          "order": 30
        },
        {
          "id": "view-phase2-pagerank-ds-0",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "order": 40
        },
        {
          "id": "view-phase2-chacha20-ds-0",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-chacha20",
          "order": 10
        },
        {
          "id": "view-phase2-blake2-ds-0",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-blake2",
          "order": 20
        },
        {
          "id": "view-phase2-argon2id-ds-0",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-argon2id",
          "order": 30
        },
        {
          "id": "view-phase2-ecdh-ds-0",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-ecdh",
          "order": 40
        },
        {
          "id": "view-phase2-arithmetic-coding-ds-0",
          "parentId": "view-group-ds-array-compression",
          "kind": "entity",
          "entityId": "algo-arithmetic-coding",
          "order": 10
        },
        {
          "id": "view-phase2-run-length-encoding-ds-0",
          "parentId": "view-group-ds-array-compression",
          "kind": "entity",
          "entityId": "algo-run-length-encoding",
          "order": 20
        },
        {
          "id": "view-phase2-deflate-ds-0",
          "parentId": "view-group-ds-array-compression",
          "kind": "entity",
          "entityId": "algo-deflate",
          "order": 30
        },
        {
          "id": "view-phase2-burrows-wheeler-transform-ds-0",
          "parentId": "view-group-ds-array-compression",
          "kind": "entity",
          "entityId": "algo-burrows-wheeler-transform",
          "order": 40
        },
        {
          "id": "view-phase2-lz77-ds-0",
          "parentId": "view-group-ds-array-compression",
          "kind": "entity",
          "entityId": "algo-lz77",
          "order": 50
        },
        {
          "id": "view-phase2-lz78-ds-0",
          "parentId": "view-ds-trie",
          "kind": "entity",
          "entityId": "algo-lz78",
          "order": 80
        },
        {
          "id": "view-phase2-exponential-search-ds-0",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-exponential-search",
          "order": 10
        },
        {
          "id": "view-phase2-jump-search-ds-0",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-jump-search",
          "order": 20
        },
        {
          "id": "view-phase2-interpolation-search-ds-0",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-interpolation-search",
          "order": 30
        },
        {
          "id": "view-phase2-extended-euclidean-ds-0",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-extended-euclidean",
          "order": 10
        },
        {
          "id": "view-phase2-binary-modular-exponentiation-ds-0",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-binary-modular-exponentiation",
          "order": 20
        },
        {
          "id": "view-phase2-miller-rabin-ds-0",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-miller-rabin",
          "order": 30
        },
        {
          "id": "view-phase2-gaussian-elimination-ds-0",
          "parentId": "view-group-ds-array-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-gaussian-elimination",
          "order": 10
        },
        {
          "id": "view-phase2-gradient-descent-ds-0",
          "parentId": "view-group-ds-array-optimization-continuous-local",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "order": 10
        },
        {
          "id": "view-phase2-hungarian-ds-0",
          "parentId": "view-group-ds-array-optimization-mathematical-combinatorial",
          "kind": "entity",
          "entityId": "algo-hungarian",
          "order": 10
        },
        {
          "id": "view-phase2-nelder-mead-ds-0",
          "parentId": "view-group-ds-array-optimization-continuous-local",
          "kind": "entity",
          "entityId": "algo-nelder-mead",
          "order": 20
        },
        {
          "id": "view-phase3-ds-linked-list",
          "parentId": "view-group-data-structures-linear-collections",
          "kind": "entity",
          "entityId": "ds-linked-list",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-ds-binary-search-tree",
          "parentId": "view-group-data-structures-ordered-trees",
          "kind": "entity",
          "entityId": "ds-binary-search-tree",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-ds-balanced-search-tree",
          "parentId": "view-group-data-structures-ordered-trees",
          "kind": "entity",
          "entityId": "ds-balanced-search-tree",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-ds-bitset",
          "parentId": "view-group-data-structures-specialized-representations",
          "kind": "entity",
          "entityId": "ds-bitset",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-ds-matrix",
          "parentId": "view-group-data-structures-specialized-representations",
          "kind": "entity",
          "entityId": "ds-matrix",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-ds-adjacency-list",
          "parentId": "view-group-data-structures-graph-connectivity",
          "kind": "entity",
          "entityId": "ds-adjacency-list",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-ds-adjacency-matrix",
          "parentId": "view-group-data-structures-graph-connectivity",
          "kind": "entity",
          "entityId": "ds-adjacency-matrix",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-ds-deque",
          "parentId": "view-group-data-structures-linear-collections",
          "kind": "entity",
          "entityId": "ds-deque",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-phase3-ds-suffix-array",
          "parentId": "view-group-data-structures-specialized-representations",
          "kind": "entity",
          "entityId": "ds-suffix-array",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-ds-b-tree",
          "parentId": "view-group-data-structures-ordered-trees",
          "kind": "entity",
          "entityId": "ds-b-tree",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-phase3-ds-fenwick-tree",
          "parentId": "view-group-data-structures-range-query",
          "kind": "entity",
          "entityId": "ds-fenwick-tree",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-phase3-ds-segment-tree",
          "parentId": "view-group-data-structures-range-query",
          "kind": "entity",
          "entityId": "ds-segment-tree",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-phase3-ds-disjoint-set-forest",
          "parentId": "view-group-data-structures-graph-connectivity",
          "kind": "entity",
          "entityId": "ds-disjoint-set-forest",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-shell-sort-uses_data_structure-2",
          "parentId": "view-group-ds-array-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-shell-sort",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-bucket-sort-uses_data_structure-2",
          "parentId": "view-group-ds-array-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-bucket-sort-uses_data_structure-3",
          "parentId": "view-phase3-ds-linked-list",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-cycle-sort-uses_data_structure-2",
          "parentId": "view-group-ds-array-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-cycle-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-external-merge-sort-uses_data_structure-2",
          "parentId": "view-group-ds-heap-ordering-compression",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-external-merge-sort-uses_data_structure-3",
          "parentId": "view-phase3-ds-b-tree",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-fibonacci-search-uses_data_structure-2",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-fibonacci-search",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-boruvka-uses_data_structure-2",
          "parentId": "view-ds-union-find",
          "kind": "entity",
          "entityId": "algo-boruvka",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-uses_data_structure-2",
          "parentId": "view-group-ds-queue-flow-matching",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-uses_data_structure-3",
          "parentId": "view-group-ds-array-graph",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-uses_data_structure-2",
          "parentId": "view-group-ds-queue-flow-matching",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-uses_data_structure-3",
          "parentId": "view-group-ds-array-graph",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-hierholzer-uses_data_structure-2",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-hierholzer-uses_data_structure-3",
          "parentId": "view-phase3-ds-adjacency-list",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-uses_data_structure-2",
          "parentId": "view-phase3-ds-bitset",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-uses_data_structure-3",
          "parentId": "view-phase3-ds-adjacency-list",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-louvain-uses_data_structure-2",
          "parentId": "view-phase3-ds-adjacency-list",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-louvain-uses_data_structure-3",
          "parentId": "view-ds-hash-table",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-yen-k-shortest-uses_data_structure-2",
          "parentId": "view-group-ds-heap-paths-routing",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-yen-k-shortest-uses_data_structure-3",
          "parentId": "view-phase3-ds-adjacency-list",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "order": 570
        },
        {
          "id": "view-phase3-cross-algo-floyd-cycle-finding-uses_data_structure-2",
          "parentId": "view-phase3-ds-linked-list",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "order": 580
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-uses_data_structure-2",
          "parentId": "view-group-ds-queue-flow-matching",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-uses_data_structure-3",
          "parentId": "view-group-ds-array-graph",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-suffix-array-doubling-uses_data_structure-2",
          "parentId": "view-phase3-ds-suffix-array",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-suffix-array-doubling-uses_data_structure-3",
          "parentId": "view-group-ds-array-string-indexing-structure",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-manacher-uses_data_structure-2",
          "parentId": "view-group-ds-array-string-indexing-structure",
          "kind": "entity",
          "entityId": "algo-manacher",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-smith-waterman-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "order": 531
        },
        {
          "id": "view-phase3-cross-algo-myers-diff-uses_data_structure-2",
          "parentId": "view-group-ds-array-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-newton-raphson-uses_data_structure-2",
          "parentId": "view-group-ds-array-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-gauss-seidel-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-gauss-seidel-uses_data_structure-3",
          "parentId": "view-group-ds-array-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-lu-decomposition-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-lu-decomposition",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-cholesky-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-cholesky",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-strassen-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-strassen",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-pollard-rho-uses_data_structure-2",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-chinese-remainder-uses_data_structure-2",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-ed25519-uses_data_structure-2",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-ed25519",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-pbkdf2-uses_data_structure-2",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "entity",
          "entityId": "algo-pbkdf2",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-rotating-calipers-uses_data_structure-2",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-rotating-calipers",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-ramer-douglas-peucker-uses_data_structure-2",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-ramer-douglas-peucker",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-bowyer-watson-uses_data_structure-2",
          "parentId": "view-phase3-ds-balanced-search-tree",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-bowyer-watson-uses_data_structure-3",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-ray-casting-point-in-polygon-uses_data_structure-2",
          "parentId": "view-group-ds-array-computational-geometry",
          "kind": "entity",
          "entityId": "algo-ray-casting-point-in-polygon",
          "order": 70
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-uses_data_structure-2",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-uses_data_structure-3",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-random-forest-uses_data_structure-2",
          "parentId": "view-phase3-ds-binary-search-tree",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-random-forest-uses_data_structure-3",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-simulated-annealing-uses_data_structure-2",
          "parentId": "view-group-ds-array-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-simulated-annealing",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-particle-swarm-uses_data_structure-2",
          "parentId": "view-group-ds-array-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-particle-swarm-uses_data_structure-3",
          "parentId": "view-phase3-ds-matrix",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "order": 521
        },
        {
          "id": "view-phase4-cross-rel-demo-013",
          "parentId": "view-group-ds-array-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-counting-sort",
          "order": 20
        },
        {
          "id": "view-phase4-cross-rel-demo-015",
          "parentId": "view-group-ds-array-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-radix-sort",
          "order": 30
        },
        {
          "id": "view-phase4-cross-rel-demo-019",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-binary-search",
          "order": 50
        },
        {
          "id": "view-phase4-cross-rel-demo-022",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-linear-search",
          "order": 60
        },
        {
          "id": "view-phase4-cross-rel-demo-025",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-ternary-search",
          "order": 70
        },
        {
          "id": "view-phase4-cross-rel-demo-028",
          "parentId": "view-group-ds-array-searching",
          "kind": "entity",
          "entityId": "algo-quickselect",
          "order": 80
        },
        {
          "id": "view-phase4-cross-rel-demo-061",
          "parentId": "view-group-ds-array-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-kmp",
          "order": 10
        },
        {
          "id": "view-phase4-cross-rel-demo-068",
          "parentId": "view-group-ds-array-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-boyer-moore",
          "order": 20
        },
        {
          "id": "view-phase4-cross-rel-demo-071",
          "parentId": "view-group-ds-array-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-z-algorithm",
          "order": 30
        },
        {
          "id": "view-phase4-cross-rel-demo-075",
          "parentId": "view-group-ds-queue-traversal-ordering",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "order": 40
        },
        {
          "id": "view-phase4-cross-rel-demo-078",
          "parentId": "view-group-ds-array-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-sieve-eratosthenes",
          "order": 60
        },
        {
          "id": "view-phase4-cross-rel-demo-081",
          "parentId": "view-group-ds-array-mathematics-transforms-multiplication",
          "kind": "entity",
          "entityId": "algo-fft",
          "order": 10
        },
        {
          "id": "view-phase4-cross-rel-demo-097",
          "parentId": "view-ds-hash-table",
          "kind": "entity",
          "entityId": "algo-lzw",
          "order": 900
        },
        {
          "id": "view-phase4-cross-rel-demo-100",
          "parentId": "view-ds-stack",
          "kind": "entity",
          "entityId": "algo-graham-scan",
          "order": 900
        },
        {
          "id": "view-phase4-cross-rel-demo-103",
          "parentId": "view-group-ds-array-machine-learning",
          "kind": "entity",
          "entityId": "algo-k-means",
          "order": 70
        },
        {
          "id": "view-phase4-cross-rel-demo-106",
          "parentId": "view-group-ds-array-optimization-mathematical-combinatorial",
          "kind": "entity",
          "entityId": "algo-simplex",
          "order": 20
        },
        {
          "id": "view-phase4-cross-rel-phase1-merge-array",
          "parentId": "view-group-ds-array-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-merge-sort",
          "order": 30
        },
        {
          "id": "view-group-data-structures-linear-collections",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Linear Collections",
          "localizedLabels": {
            "en": "Linear Collections",
            "ko": "선형 컬렉션"
          },
          "order": 10
        },
        {
          "id": "view-group-data-structures-priority-associative",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Priority & Associative",
          "localizedLabels": {
            "en": "Priority & Associative",
            "ko": "우선순위·연관 구조"
          },
          "order": 20
        },
        {
          "id": "view-group-data-structures-ordered-trees",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Ordered Trees",
          "localizedLabels": {
            "en": "Ordered Trees",
            "ko": "순서 트리"
          },
          "order": 30
        },
        {
          "id": "view-group-data-structures-range-query",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Range Query Structures",
          "localizedLabels": {
            "en": "Range Query Structures",
            "ko": "구간 질의 구조"
          },
          "order": 40
        },
        {
          "id": "view-group-data-structures-graph-connectivity",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Graph Representation & Connectivity",
          "localizedLabels": {
            "en": "Graph Representation & Connectivity",
            "ko": "그래프 표현·연결성"
          },
          "order": 50
        },
        {
          "id": "view-group-data-structures-specialized-representations",
          "parentId": "view-type-data-structures",
          "kind": "group",
          "label": "Specialized Representations",
          "localizedLabels": {
            "en": "Specialized Representations",
            "ko": "특수 표현 구조"
          },
          "order": 60
        },
        {
          "id": "view-group-ds-array-sorting",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Sorting",
          "localizedLabels": {
            "en": "Sorting",
            "ko": "정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-array-sorting-partition",
          "parentId": "view-group-ds-array-sorting",
          "kind": "group",
          "label": "Partition-Based",
          "localizedLabels": {
            "en": "Partition-Based",
            "ko": "분할 기반 정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-array-sorting-merge-hybrid",
          "parentId": "view-group-ds-array-sorting",
          "kind": "group",
          "label": "Merge & Hybrid",
          "localizedLabels": {
            "en": "Merge & Hybrid",
            "ko": "병합·하이브리드 정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-array-sorting-in-place-comparison",
          "parentId": "view-group-ds-array-sorting",
          "kind": "group",
          "label": "In-Place Comparison",
          "localizedLabels": {
            "en": "In-Place Comparison",
            "ko": "제자리 비교 정렬"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-array-sorting-distribution",
          "parentId": "view-group-ds-array-sorting",
          "kind": "group",
          "label": "Distribution-Based",
          "localizedLabels": {
            "en": "Distribution-Based",
            "ko": "분포 기반 정렬"
          },
          "order": 40
        },
        {
          "id": "view-group-ds-array-searching",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Searching",
          "localizedLabels": {
            "en": "Searching",
            "ko": "탐색"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-array-graph",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Graph",
          "localizedLabels": {
            "en": "Graph",
            "ko": "그래프"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-array-string",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "String",
          "localizedLabels": {
            "en": "String",
            "ko": "문자열"
          },
          "order": 40
        },
        {
          "id": "view-group-ds-array-string-pattern-matching",
          "parentId": "view-group-ds-array-string",
          "kind": "group",
          "label": "Pattern Matching",
          "localizedLabels": {
            "en": "Pattern Matching",
            "ko": "패턴 매칭"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-array-string-sequence-comparison",
          "parentId": "view-group-ds-array-string",
          "kind": "group",
          "label": "Sequence Comparison",
          "localizedLabels": {
            "en": "Sequence Comparison",
            "ko": "시퀀스 비교"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-array-string-indexing-structure",
          "parentId": "view-group-ds-array-string",
          "kind": "group",
          "label": "Indexing & Structural Patterns",
          "localizedLabels": {
            "en": "Indexing & Structural Patterns",
            "ko": "인덱스·구조 패턴"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-array-mathematics",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Mathematics",
          "localizedLabels": {
            "en": "Mathematics",
            "ko": "수학"
          },
          "order": 50
        },
        {
          "id": "view-group-ds-array-mathematics-number-theory",
          "parentId": "view-group-ds-array-mathematics",
          "kind": "group",
          "label": "Number Theory",
          "localizedLabels": {
            "en": "Number Theory",
            "ko": "정수론"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-array-mathematics-linear-numerical",
          "parentId": "view-group-ds-array-mathematics",
          "kind": "group",
          "label": "Linear Algebra & Numerical",
          "localizedLabels": {
            "en": "Linear Algebra & Numerical",
            "ko": "선형대수·수치해석"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-array-mathematics-transforms-multiplication",
          "parentId": "view-group-ds-array-mathematics",
          "kind": "group",
          "label": "Transforms & Multiplication",
          "localizedLabels": {
            "en": "Transforms & Multiplication",
            "ko": "변환·곱셈"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-array-cryptography",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Cryptography",
          "localizedLabels": {
            "en": "Cryptography",
            "ko": "암호학"
          },
          "order": 60
        },
        {
          "id": "view-group-ds-array-compression",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Compression",
          "localizedLabels": {
            "en": "Compression",
            "ko": "압축"
          },
          "order": 70
        },
        {
          "id": "view-group-ds-array-computational-geometry",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Computational Geometry",
          "localizedLabels": {
            "en": "Computational Geometry",
            "ko": "계산기하학"
          },
          "order": 80
        },
        {
          "id": "view-group-ds-array-machine-learning",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Machine Learning",
          "localizedLabels": {
            "en": "Machine Learning",
            "ko": "머신러닝"
          },
          "order": 90
        },
        {
          "id": "view-group-ds-array-optimization",
          "parentId": "view-ds-array",
          "kind": "group",
          "label": "Optimization",
          "localizedLabels": {
            "en": "Optimization",
            "ko": "최적화"
          },
          "order": 100
        },
        {
          "id": "view-group-ds-array-optimization-dynamic-programming",
          "parentId": "view-group-ds-array-optimization",
          "kind": "group",
          "label": "Dynamic Programming",
          "localizedLabels": {
            "en": "Dynamic Programming",
            "ko": "동적 계획법"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-array-optimization-mathematical-combinatorial",
          "parentId": "view-group-ds-array-optimization",
          "kind": "group",
          "label": "Mathematical & Combinatorial",
          "localizedLabels": {
            "en": "Mathematical & Combinatorial",
            "ko": "수리·조합 최적화"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-array-optimization-continuous-local",
          "parentId": "view-group-ds-array-optimization",
          "kind": "group",
          "label": "Continuous & Local",
          "localizedLabels": {
            "en": "Continuous & Local",
            "ko": "연속·지역 최적화"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-array-optimization-metaheuristics",
          "parentId": "view-group-ds-array-optimization",
          "kind": "group",
          "label": "Metaheuristics",
          "localizedLabels": {
            "en": "Metaheuristics",
            "ko": "메타휴리스틱"
          },
          "order": 40
        },
        {
          "id": "view-group-ds-heap-paths-routing",
          "parentId": "view-ds-heap",
          "kind": "group",
          "label": "Paths & Routing",
          "localizedLabels": {
            "en": "Paths & Routing",
            "ko": "경로·라우팅"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-heap-ordering-compression",
          "parentId": "view-ds-heap",
          "kind": "group",
          "label": "Ordering & Compression",
          "localizedLabels": {
            "en": "Ordering & Compression",
            "ko": "순서화·압축"
          },
          "order": 20
        },
        {
          "id": "view-group-ds-heap-graph-events",
          "parentId": "view-ds-heap",
          "kind": "group",
          "label": "Graph & Sweep Events",
          "localizedLabels": {
            "en": "Graph & Sweep Events",
            "ko": "그래프·스윕 이벤트"
          },
          "order": 30
        },
        {
          "id": "view-group-ds-queue-traversal-ordering",
          "parentId": "view-ds-queue",
          "kind": "group",
          "label": "Traversal & Ordering",
          "localizedLabels": {
            "en": "Traversal & Ordering",
            "ko": "순회·순서화"
          },
          "order": 10
        },
        {
          "id": "view-group-ds-queue-flow-matching",
          "parentId": "view-ds-queue",
          "kind": "group",
          "label": "Flow & Matching",
          "localizedLabels": {
            "en": "Flow & Matching",
            "ko": "유량·매칭"
          },
          "order": 20
        },
        { "id": "view-wave150-ds-suffix-tree", "parentId": "view-group-data-structures-specialized-representations", "kind": "entity", "entityId": "ds-suffix-tree", "primaryForSearch": true, "order": 90 },
        {
          "id": "view-group-wave150-ds-matrix-numerical-learning",
          "parentId": "view-phase3-ds-matrix",
          "kind": "group",
          "label": "Numerical & Learning Methods",
          "localizedLabels": { "en": "Numerical & Learning Methods", "ko": "수치·학습 기법" },
          "order": 90
        },
        {
          "id": "view-group-wave150-ds-array-search-selection",
          "parentId": "view-group-ds-array-searching",
          "kind": "group",
          "label": "Deterministic Selection",
          "localizedLabels": { "en": "Deterministic Selection", "ko": "결정적 선택" },
          "order": 90
        },
        {
          "id": "view-group-wave150-ds-array-cryptography-auth-kdf",
          "parentId": "view-group-ds-array-cryptography",
          "kind": "group",
          "label": "Authentication & Key Material",
          "localizedLabels": { "en": "Authentication & Key Material", "ko": "인증·키 재료" },
          "order": 90
        },
        { "id": "view-wave150-ds-selection-sort", "parentId": "view-group-ds-array-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-selection-sort", "order": 90 },
        { "id": "view-wave150-ds-bubble-sort", "parentId": "view-group-ds-array-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-bubble-sort", "order": 100 },
        { "id": "view-wave150-ds-median-of-medians", "parentId": "view-group-wave150-ds-array-search-selection", "kind": "entity", "entityId": "algo-median-of-medians", "order": 10 },
        { "id": "view-wave150-ds-dial-shortest-path", "parentId": "view-group-ds-array-graph", "kind": "entity", "entityId": "algo-dial-shortest-path", "order": 90 },
        { "id": "view-wave150-ds-zero-one-bfs", "parentId": "view-phase3-ds-deque", "kind": "entity", "entityId": "algo-zero-one-bfs", "order": 90 },
        { "id": "view-wave150-ds-gabow-scc", "parentId": "view-ds-stack", "kind": "entity", "entityId": "algo-gabow-scc", "order": 90 },
        { "id": "view-wave150-ds-stoer-wagner-min-cut", "parentId": "view-phase3-ds-adjacency-matrix", "kind": "entity", "entityId": "algo-stoer-wagner-min-cut", "order": 90 },
        { "id": "view-wave150-ds-successive-shortest-path", "parentId": "view-group-ds-heap-paths-routing", "kind": "entity", "entityId": "algo-successive-shortest-path", "order": 90 },
        { "id": "view-wave150-ds-naive-string-search", "parentId": "view-group-ds-array-string-pattern-matching", "kind": "entity", "entityId": "algo-naive-string-search", "order": 90 },
        { "id": "view-wave150-ds-bitap", "parentId": "view-phase3-ds-bitset", "kind": "entity", "entityId": "algo-bitap", "order": 90 },
        { "id": "view-wave150-ds-ukkonen-suffix-tree", "parentId": "view-wave150-ds-suffix-tree", "kind": "entity", "entityId": "algo-ukkonen-suffix-tree", "order": 10 },
        { "id": "view-wave150-ds-householder-qr", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-householder-qr", "order": 10 },
        { "id": "view-wave150-ds-conjugate-gradient", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-conjugate-gradient", "order": 20 },
        { "id": "view-wave150-ds-hmac", "parentId": "view-group-wave150-ds-array-cryptography-auth-kdf", "kind": "entity", "entityId": "algo-hmac", "order": 10 },
        { "id": "view-wave150-ds-hkdf", "parentId": "view-group-wave150-ds-array-cryptography-auth-kdf", "kind": "entity", "entityId": "algo-hkdf", "order": 20 },
        { "id": "view-wave150-ds-x25519", "parentId": "view-group-wave150-ds-array-cryptography-auth-kdf", "kind": "entity", "entityId": "algo-x25519", "order": 30 },
        { "id": "view-wave150-ds-lz4", "parentId": "view-group-ds-array-compression", "kind": "entity", "entityId": "algo-lz4", "order": 90 },
        { "id": "view-wave150-ds-brotli", "parentId": "view-group-ds-array-compression", "kind": "entity", "entityId": "algo-brotli", "order": 100 },
        { "id": "view-wave150-ds-fortune-voronoi", "parentId": "view-group-ds-heap-graph-events", "kind": "entity", "entityId": "algo-fortune-voronoi", "order": 90 },
        { "id": "view-wave150-ds-sutherland-hodgman", "parentId": "view-group-ds-array-computational-geometry", "kind": "entity", "entityId": "algo-sutherland-hodgman", "order": 90 },
        { "id": "view-wave150-ds-gaussian-naive-bayes", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-gaussian-naive-bayes", "order": 30 },
        { "id": "view-wave150-ds-smo", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-smo", "order": 40 },
        { "id": "view-wave150-ds-adaboost", "parentId": "view-group-ds-array-machine-learning", "kind": "entity", "entityId": "algo-adaboost", "order": 90 },
        { "id": "view-wave150-ds-expectation-maximization", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-expectation-maximization", "order": 50 },
        { "id": "view-wave150-ds-stochastic-gradient-descent", "parentId": "view-group-ds-array-optimization-continuous-local", "kind": "entity", "entityId": "algo-stochastic-gradient-descent", "order": 90 },
        { "id": "view-wave150-ds-momentum-gradient-descent", "parentId": "view-group-ds-array-optimization-continuous-local", "kind": "entity", "entityId": "algo-momentum-gradient-descent", "order": 100 },
        { "id": "view-wave150-ds-bfgs", "parentId": "view-group-wave150-ds-matrix-numerical-learning", "kind": "entity", "entityId": "algo-bfgs", "order": 60 },
        { "id": "view-wave150-ds-adam", "parentId": "view-group-ds-array-optimization-continuous-local", "kind": "entity", "entityId": "algo-adam", "order": 110 }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
