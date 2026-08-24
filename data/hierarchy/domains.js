(function registerAlgoriaDomainsHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-domains",
    hierarchy: {
      nodes: [
        {
          "id": "view-type-domains",
          "parentId": "view-root",
          "kind": "group",
          "label": "Domains",
          "order": 50,
          "localizedLabels": {
            "en": "Domains",
            "ko": "응용 분야"
          }
        },
        {
          "id": "view-domain-graph",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-graph",
          "primaryForSearch": true,
          "order": 10
        },
        {
          "id": "view-domain-graph-dijkstra",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-dijkstra",
          "order": 10
        },
        {
          "id": "view-domain-graph-a-star",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-a-star",
          "order": 20
        },
        {
          "id": "view-domain-string",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-string",
          "primaryForSearch": true,
          "order": 20
        },
        {
          "id": "view-domain-mathematics",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-mathematics",
          "primaryForSearch": true,
          "order": 30
        },
        {
          "id": "view-domain-cryptography",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-cryptography",
          "primaryForSearch": true,
          "order": 40
        },
        {
          "id": "view-domain-compression",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-compression",
          "primaryForSearch": true,
          "order": 50
        },
        {
          "id": "view-domain-computational-geometry",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-computational-geometry",
          "primaryForSearch": true,
          "order": 60
        },
        {
          "id": "view-domain-machine-learning",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-machine-learning",
          "primaryForSearch": true,
          "order": 70
        },
        {
          "id": "view-domain-optimization",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-optimization",
          "primaryForSearch": true,
          "order": 80
        },
        {
          "id": "view-domain-string-kmp",
          "parentId": "view-group-domain-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-kmp",
          "order": 10
        },
        {
          "id": "view-domain-string-aho-corasick",
          "parentId": "view-group-domain-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-aho-corasick",
          "order": 20
        },
        {
          "id": "view-domain-math-euclidean",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-euclidean",
          "order": 10
        },
        {
          "id": "view-domain-math-fft",
          "parentId": "view-group-domain-mathematics-transforms-multiplication",
          "kind": "entity",
          "entityId": "algo-fft",
          "order": 10
        },
        {
          "id": "view-domain-crypto-rsa",
          "parentId": "view-group-domain-cryptography-public-signatures",
          "kind": "entity",
          "entityId": "algo-rsa",
          "order": 10
        },
        {
          "id": "view-domain-crypto-aes",
          "parentId": "view-group-domain-cryptography-symmetric",
          "kind": "entity",
          "entityId": "algo-aes",
          "order": 10
        },
        {
          "id": "view-domain-compression-huffman",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-huffman-coding",
          "order": 10
        },
        {
          "id": "view-domain-compression-lzw",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-lzw",
          "order": 20
        },
        {
          "id": "view-domain-geometry-graham",
          "parentId": "view-group-domain-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-graham-scan",
          "order": 10
        },
        {
          "id": "view-domain-ml-k-means",
          "parentId": "view-group-domain-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-k-means",
          "order": 10
        },
        {
          "id": "view-domain-optimization-simplex",
          "parentId": "view-group-domain-optimization-mathematical-programming",
          "kind": "entity",
          "entityId": "algo-simplex",
          "order": 10
        },
        {
          "id": "view-domain-graph-bfs",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-breadth-first-search",
          "order": 10
        },
        {
          "id": "view-domain-graph-dfs",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-depth-first-search",
          "order": 20
        },
        {
          "id": "view-domain-graph-bellman-ford",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-bellman-ford",
          "order": 30
        },
        {
          "id": "view-domain-graph-floyd-warshall",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-floyd-warshall",
          "order": 40
        },
        {
          "id": "view-domain-graph-bidirectional-dijkstra",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-bidirectional-dijkstra",
          "order": 50
        },
        {
          "id": "view-domain-graph-kruskal",
          "parentId": "view-group-domain-graph-spanning-structures",
          "kind": "entity",
          "entityId": "algo-kruskal",
          "order": 10
        },
        {
          "id": "view-domain-graph-prim",
          "parentId": "view-group-domain-graph-spanning-structures",
          "kind": "entity",
          "entityId": "algo-prim",
          "order": 20
        },
        {
          "id": "view-domain-graph-topological-sort",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-topological-sort",
          "order": 30
        },
        {
          "id": "view-domain-graph-edmonds-karp",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-edmonds-karp",
          "order": 20
        },
        {
          "id": "view-domain-graph-tarjan-scc",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-tarjan-scc",
          "order": 50
        },
        {
          "id": "view-domain-graph-ford-fulkerson",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-ford-fulkerson",
          "order": 10
        },
        {
          "id": "view-domain-graph-dinic",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-dinic",
          "order": 30
        },
        {
          "id": "view-domain-graph-kosaraju",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-kosaraju-sharir",
          "order": 40
        },
        {
          "id": "view-domain-graph-johnson",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-johnson",
          "order": 60
        },
        {
          "id": "view-domain-string-levenshtein",
          "parentId": "view-group-domain-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-levenshtein-distance",
          "order": 10
        },
        {
          "id": "view-domain-string-lcs",
          "parentId": "view-group-domain-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-longest-common-subsequence",
          "order": 20
        },
        {
          "id": "view-domain-optimization-lis",
          "parentId": "view-group-domain-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-longest-increasing-subsequence-dp",
          "order": 10
        },
        {
          "id": "view-domain-optimization-knapsack",
          "parentId": "view-group-domain-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-zero-one-knapsack-dp",
          "order": 20
        },
        {
          "id": "view-domain-optimization-matrix-chain",
          "parentId": "view-group-domain-optimization-dynamic-programming",
          "kind": "entity",
          "entityId": "algo-matrix-chain-multiplication",
          "order": 30
        },
        {
          "id": "view-domain-bioinformatics",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-bioinformatics",
          "primaryForSearch": true,
          "order": 100
        },
        {
          "id": "view-domain-bioinformatics-needleman-wunsch",
          "parentId": "view-domain-bioinformatics",
          "kind": "entity",
          "entityId": "algo-needleman-wunsch",
          "order": 10
        },
        {
          "id": "view-domain-data-processing",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-data-processing",
          "primaryForSearch": true,
          "order": 90
        },
        {
          "id": "view-domain-data-processing-quick",
          "parentId": "view-group-domain-data-processing-sorting-partition",
          "kind": "entity",
          "entityId": "algo-quick-sort",
          "order": 10
        },
        {
          "id": "view-domain-data-processing-merge",
          "parentId": "view-group-domain-data-processing-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-merge-sort",
          "order": 10
        },
        {
          "id": "view-domain-data-processing-binary",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-binary-search",
          "order": 10
        },
        {
          "id": "view-domain-data-processing-randomized-quick",
          "parentId": "view-group-domain-data-processing-sorting-partition",
          "kind": "entity",
          "entityId": "algo-randomized-quick-sort",
          "order": 20
        },
        {
          "id": "view-domain-data-processing-dual-pivot",
          "parentId": "view-group-domain-data-processing-sorting-partition",
          "kind": "entity",
          "entityId": "algo-dual-pivot-quick-sort",
          "order": 30
        },
        {
          "id": "view-domain-data-processing-three-way",
          "parentId": "view-group-domain-data-processing-sorting-partition",
          "kind": "entity",
          "entityId": "algo-three-way-quick-sort",
          "order": 40
        },
        {
          "id": "view-domain-data-processing-introsort",
          "parentId": "view-group-domain-data-processing-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-introsort",
          "order": 20
        },
        {
          "id": "view-domain-data-processing-heap-sort",
          "parentId": "view-group-domain-data-processing-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-heap-sort",
          "order": 10
        },
        {
          "id": "view-domain-data-processing-insertion",
          "parentId": "view-group-domain-data-processing-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-insertion-sort",
          "order": 20
        },
        {
          "id": "view-domain-data-processing-counting",
          "parentId": "view-group-domain-data-processing-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-counting-sort",
          "order": 10
        },
        {
          "id": "view-domain-data-processing-radix",
          "parentId": "view-group-domain-data-processing-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-radix-sort",
          "order": 20
        },
        {
          "id": "view-domain-data-processing-timsort",
          "parentId": "view-group-domain-data-processing-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-timsort",
          "order": 30
        },
        {
          "id": "view-domain-data-processing-linear",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-linear-search",
          "order": 20
        },
        {
          "id": "view-domain-data-processing-quickselect",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-quickselect",
          "order": 30
        },
        {
          "id": "view-domain-data-processing-ternary",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-ternary-search",
          "order": 40
        },
        {
          "id": "view-phase2-jarvis-march-domain-0",
          "parentId": "view-group-domain-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-jarvis-march",
          "order": 20
        },
        {
          "id": "view-phase2-andrew-monotone-chain-domain-0",
          "parentId": "view-group-domain-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-andrew-monotone-chain",
          "order": 30
        },
        {
          "id": "view-phase2-quickhull-domain-0",
          "parentId": "view-group-domain-geometry-convex-hull",
          "kind": "entity",
          "entityId": "algo-quickhull",
          "order": 40
        },
        {
          "id": "view-phase2-closest-pair-divide-conquer-domain-0",
          "parentId": "view-group-domain-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-closest-pair-divide-conquer",
          "order": 10
        },
        {
          "id": "view-phase2-bentley-ottmann-domain-0",
          "parentId": "view-group-domain-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-bentley-ottmann",
          "order": 20
        },
        {
          "id": "view-phase2-dbscan-domain-0",
          "parentId": "view-group-domain-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-dbscan",
          "order": 20
        },
        {
          "id": "view-phase2-knn-domain-0",
          "parentId": "view-group-domain-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-knn",
          "order": 10
        },
        {
          "id": "view-phase2-perceptron-domain-0",
          "parentId": "view-group-domain-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-perceptron",
          "order": 20
        },
        {
          "id": "view-phase2-id3-domain-0",
          "parentId": "view-group-domain-machine-learning-trees-ensembles",
          "kind": "entity",
          "entityId": "algo-id3",
          "order": 10
        },
        {
          "id": "view-phase2-pagerank-domain-0",
          "parentId": "view-group-domain-machine-learning-clustering-ranking",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "order": 30
        },
        {
          "id": "view-phase2-pagerank-domain-1",
          "parentId": "view-group-domain-graph-network-analysis",
          "kind": "entity",
          "entityId": "algo-pagerank",
          "order": 10
        },
        {
          "id": "view-phase2-chacha20-domain-0",
          "parentId": "view-group-domain-cryptography-symmetric",
          "kind": "entity",
          "entityId": "algo-chacha20",
          "order": 20
        },
        {
          "id": "view-phase2-blake2-domain-0",
          "parentId": "view-group-domain-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-blake2",
          "order": 20
        },
        {
          "id": "view-phase2-argon2id-domain-0",
          "parentId": "view-group-domain-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-argon2id",
          "order": 30
        },
        {
          "id": "view-phase2-ecdh-domain-0",
          "parentId": "view-group-domain-cryptography-key-agreement",
          "kind": "entity",
          "entityId": "algo-ecdh",
          "order": 20
        },
        {
          "id": "view-phase2-arithmetic-coding-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-arithmetic-coding",
          "order": 30
        },
        {
          "id": "view-phase2-run-length-encoding-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-run-length-encoding",
          "order": 40
        },
        {
          "id": "view-phase2-deflate-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-deflate",
          "order": 50
        },
        {
          "id": "view-phase2-burrows-wheeler-transform-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-burrows-wheeler-transform",
          "order": 60
        },
        {
          "id": "view-phase2-lz77-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-lz77",
          "order": 70
        },
        {
          "id": "view-phase2-lz78-domain-0",
          "parentId": "view-domain-compression",
          "kind": "entity",
          "entityId": "algo-lz78",
          "order": 80
        },
        {
          "id": "view-phase2-exponential-search-domain-0",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-exponential-search",
          "order": 50
        },
        {
          "id": "view-phase2-jump-search-domain-0",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-jump-search",
          "order": 60
        },
        {
          "id": "view-phase2-interpolation-search-domain-0",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-interpolation-search",
          "order": 70
        },
        {
          "id": "view-phase2-extended-euclidean-domain-0",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-extended-euclidean",
          "order": 20
        },
        {
          "id": "view-phase2-binary-modular-exponentiation-domain-0",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-binary-modular-exponentiation",
          "order": 30
        },
        {
          "id": "view-phase2-miller-rabin-domain-0",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-miller-rabin",
          "order": 40
        },
        {
          "id": "view-phase2-gaussian-elimination-domain-0",
          "parentId": "view-group-domain-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-gaussian-elimination",
          "order": 10
        },
        {
          "id": "view-phase2-gradient-descent-domain-0",
          "parentId": "view-group-domain-optimization-continuous-learning",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "order": 10
        },
        {
          "id": "view-phase2-gradient-descent-domain-1",
          "parentId": "view-group-domain-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-gradient-descent",
          "order": 40
        },
        {
          "id": "view-phase2-hungarian-domain-0",
          "parentId": "view-group-domain-optimization-mathematical-programming",
          "kind": "entity",
          "entityId": "algo-hungarian",
          "order": 20
        },
        {
          "id": "view-phase2-nelder-mead-domain-0",
          "parentId": "view-group-domain-optimization-continuous-learning",
          "kind": "entity",
          "entityId": "algo-nelder-mead",
          "order": 20
        },
        {
          "id": "view-phase3-domain-numerical-computing",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-numerical-computing",
          "primaryForSearch": true,
          "order": 200
        },
        {
          "id": "view-phase3-domain-network-science",
          "parentId": "view-type-domains",
          "kind": "entity",
          "entityId": "domain-network-science",
          "primaryForSearch": true,
          "order": 201
        },
        {
          "id": "view-phase3-cross-algo-shell-sort-belongs_to_domain-3",
          "parentId": "view-group-domain-data-processing-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-shell-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-bucket-sort-belongs_to_domain-4",
          "parentId": "view-group-domain-data-processing-sorting-distribution",
          "kind": "entity",
          "entityId": "algo-bucket-sort",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-cycle-sort-belongs_to_domain-3",
          "parentId": "view-group-domain-data-processing-sorting-in-place-comparison",
          "kind": "entity",
          "entityId": "algo-cycle-sort",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-external-merge-sort-belongs_to_domain-4",
          "parentId": "view-group-domain-data-processing-sorting-merge-hybrid",
          "kind": "entity",
          "entityId": "algo-external-merge-sort",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-fibonacci-search-belongs_to_domain-3",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "entity",
          "entityId": "algo-fibonacci-search",
          "order": 80
        },
        {
          "id": "view-phase3-cross-algo-boruvka-belongs_to_domain-3",
          "parentId": "view-group-domain-graph-spanning-structures",
          "kind": "entity",
          "entityId": "algo-boruvka",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-hopcroft-karp-belongs_to_domain-5",
          "parentId": "view-group-domain-optimization-matching-flow",
          "kind": "entity",
          "entityId": "algo-hopcroft-karp",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-push-relabel-belongs_to_domain-5",
          "parentId": "view-group-domain-optimization-matching-flow",
          "kind": "entity",
          "entityId": "algo-push-relabel",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-hierholzer-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-hierholzer",
          "order": 70
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-network-analysis",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-bron-kerbosch-belongs_to_domain-5",
          "parentId": "view-phase3-domain-network-science",
          "kind": "entity",
          "entityId": "algo-bron-kerbosch",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-louvain-belongs_to_domain-4",
          "parentId": "view-phase3-domain-network-science",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 560
        },
        {
          "id": "view-phase3-cross-algo-louvain-belongs_to_domain-5",
          "parentId": "view-group-domain-graph-network-analysis",
          "kind": "entity",
          "entityId": "algo-louvain",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-yen-k-shortest-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "entity",
          "entityId": "algo-yen-k-shortest",
          "order": 70
        },
        {
          "id": "view-phase3-cross-algo-floyd-cycle-finding-belongs_to_domain-3",
          "parentId": "view-group-domain-graph-traversal-connectivity",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-floyd-cycle-finding-belongs_to_domain-4",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-floyd-cycle-finding",
          "order": 80
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-belongs_to_domain-4",
          "parentId": "view-group-domain-graph-flow-matching",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-edmonds-blossom-belongs_to_domain-5",
          "parentId": "view-group-domain-optimization-matching-flow",
          "kind": "entity",
          "entityId": "algo-edmonds-blossom",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-suffix-array-doubling-belongs_to_domain-4",
          "parentId": "view-group-domain-string-indexing-palindromes",
          "kind": "entity",
          "entityId": "algo-suffix-array-doubling",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-manacher-belongs_to_domain-3",
          "parentId": "view-group-domain-string-indexing-palindromes",
          "kind": "entity",
          "entityId": "algo-manacher",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-smith-waterman-belongs_to_domain-3",
          "parentId": "view-domain-bioinformatics",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-smith-waterman-belongs_to_domain-4",
          "parentId": "view-group-domain-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-smith-waterman",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-myers-diff-belongs_to_domain-3",
          "parentId": "view-group-domain-string-sequence-comparison",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-myers-diff-belongs_to_domain-4",
          "parentId": "view-group-domain-data-processing-string",
          "kind": "entity",
          "entityId": "algo-myers-diff",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-newton-raphson-belongs_to_domain-3",
          "parentId": "view-phase3-domain-numerical-computing",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "order": 510
        },
        {
          "id": "view-phase3-cross-algo-newton-raphson-belongs_to_domain-4",
          "parentId": "view-group-domain-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-newton-raphson",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-gauss-seidel-belongs_to_domain-4",
          "parentId": "view-phase3-domain-numerical-computing",
          "kind": "entity",
          "entityId": "algo-gauss-seidel",
          "order": 520
        },
        {
          "id": "view-phase3-cross-algo-lu-decomposition-belongs_to_domain-3",
          "parentId": "view-phase3-domain-numerical-computing",
          "kind": "entity",
          "entityId": "algo-lu-decomposition",
          "order": 530
        },
        {
          "id": "view-phase3-cross-algo-cholesky-belongs_to_domain-3",
          "parentId": "view-phase3-domain-numerical-computing",
          "kind": "entity",
          "entityId": "algo-cholesky",
          "order": 540
        },
        {
          "id": "view-phase3-cross-algo-strassen-belongs_to_domain-3",
          "parentId": "view-group-domain-mathematics-linear-numerical",
          "kind": "entity",
          "entityId": "algo-strassen",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-strassen-belongs_to_domain-4",
          "parentId": "view-phase3-domain-numerical-computing",
          "kind": "entity",
          "entityId": "algo-strassen",
          "order": 550
        },
        {
          "id": "view-phase3-cross-algo-pollard-rho-belongs_to_domain-3",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "order": 50
        },
        {
          "id": "view-phase3-cross-algo-pollard-rho-belongs_to_domain-4",
          "parentId": "view-group-domain-cryptography-mathematical-foundations",
          "kind": "entity",
          "entityId": "algo-pollard-rho",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-chinese-remainder-belongs_to_domain-3",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "order": 60
        },
        {
          "id": "view-phase3-cross-algo-chinese-remainder-belongs_to_domain-4",
          "parentId": "view-group-domain-cryptography-mathematical-foundations",
          "kind": "entity",
          "entityId": "algo-chinese-remainder",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-ed25519-belongs_to_domain-3",
          "parentId": "view-group-domain-cryptography-public-signatures",
          "kind": "entity",
          "entityId": "algo-ed25519",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-pbkdf2-belongs_to_domain-3",
          "parentId": "view-group-domain-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-pbkdf2",
          "order": 40
        },
        {
          "id": "view-phase3-cross-algo-rotating-calipers-belongs_to_domain-3",
          "parentId": "view-group-domain-geometry-proximity-intersections",
          "kind": "entity",
          "entityId": "algo-rotating-calipers",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-ramer-douglas-peucker-belongs_to_domain-3",
          "parentId": "view-group-domain-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-ramer-douglas-peucker",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-bowyer-watson-belongs_to_domain-4",
          "parentId": "view-group-domain-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-bowyer-watson",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-ray-casting-point-in-polygon-belongs_to_domain-3",
          "parentId": "view-group-domain-geometry-polygon-planar",
          "kind": "entity",
          "entityId": "algo-ray-casting-point-in-polygon",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-belongs_to_domain-4",
          "parentId": "view-group-domain-machine-learning-linear-instance",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-logistic-regression-belongs_to_domain-5",
          "parentId": "view-group-domain-optimization-continuous-learning",
          "kind": "entity",
          "entityId": "algo-logistic-regression",
          "order": 30
        },
        {
          "id": "view-phase3-cross-algo-random-forest-belongs_to_domain-4",
          "parentId": "view-group-domain-machine-learning-trees-ensembles",
          "kind": "entity",
          "entityId": "algo-random-forest",
          "order": 20
        },
        {
          "id": "view-phase3-cross-algo-simulated-annealing-belongs_to_domain-3",
          "parentId": "view-group-domain-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-simulated-annealing",
          "order": 10
        },
        {
          "id": "view-phase3-cross-algo-particle-swarm-belongs_to_domain-4",
          "parentId": "view-group-domain-optimization-metaheuristics",
          "kind": "entity",
          "entityId": "algo-particle-swarm",
          "order": 20
        },
        {
          "id": "view-phase4-cross-rel-demo-066",
          "parentId": "view-group-domain-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-rabin-karp",
          "order": 30
        },
        {
          "id": "view-phase4-cross-rel-demo-069",
          "parentId": "view-group-domain-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-boyer-moore",
          "order": 40
        },
        {
          "id": "view-phase4-cross-rel-demo-072",
          "parentId": "view-group-domain-string-pattern-matching",
          "kind": "entity",
          "entityId": "algo-z-algorithm",
          "order": 50
        },
        {
          "id": "view-phase4-cross-rel-demo-079",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "entity",
          "entityId": "algo-sieve-eratosthenes",
          "order": 70
        },
        {
          "id": "view-phase4-cross-rel-demo-085",
          "parentId": "view-group-domain-mathematics-transforms-multiplication",
          "kind": "entity",
          "entityId": "algo-karatsuba",
          "order": 20
        },
        {
          "id": "view-phase4-cross-rel-demo-090",
          "parentId": "view-group-domain-cryptography-key-agreement",
          "kind": "entity",
          "entityId": "algo-diffie-hellman",
          "order": 10
        },
        {
          "id": "view-phase4-cross-rel-demo-091",
          "parentId": "view-group-domain-cryptography-hashing-passwords",
          "kind": "entity",
          "entityId": "algo-sha-256",
          "order": 10
        },
        {
          "id": "view-group-domain-data-processing-sorting",
          "parentId": "view-domain-data-processing",
          "kind": "group",
          "label": "Sorting",
          "localizedLabels": {
            "en": "Sorting",
            "ko": "정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-data-processing-sorting-partition",
          "parentId": "view-group-domain-data-processing-sorting",
          "kind": "group",
          "label": "Partition-Based",
          "localizedLabels": {
            "en": "Partition-Based",
            "ko": "분할 기반 정렬"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-data-processing-sorting-merge-hybrid",
          "parentId": "view-group-domain-data-processing-sorting",
          "kind": "group",
          "label": "Merge & Hybrid",
          "localizedLabels": {
            "en": "Merge & Hybrid",
            "ko": "병합·하이브리드 정렬"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-data-processing-sorting-in-place-comparison",
          "parentId": "view-group-domain-data-processing-sorting",
          "kind": "group",
          "label": "In-Place Comparison",
          "localizedLabels": {
            "en": "In-Place Comparison",
            "ko": "제자리 비교 정렬"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-data-processing-sorting-distribution",
          "parentId": "view-group-domain-data-processing-sorting",
          "kind": "group",
          "label": "Distribution-Based",
          "localizedLabels": {
            "en": "Distribution-Based",
            "ko": "분포 기반 정렬"
          },
          "order": 40
        },
        {
          "id": "view-group-domain-data-processing-searching",
          "parentId": "view-domain-data-processing",
          "kind": "group",
          "label": "Searching",
          "localizedLabels": {
            "en": "Searching",
            "ko": "탐색"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-data-processing-string",
          "parentId": "view-domain-data-processing",
          "kind": "group",
          "label": "String",
          "localizedLabels": {
            "en": "String",
            "ko": "문자열"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-graph-paths-routing",
          "parentId": "view-domain-graph",
          "kind": "group",
          "label": "Paths & Routing",
          "localizedLabels": {
            "en": "Paths & Routing",
            "ko": "경로·라우팅"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-graph-traversal-connectivity",
          "parentId": "view-domain-graph",
          "kind": "group",
          "label": "Traversal & Connectivity",
          "localizedLabels": {
            "en": "Traversal & Connectivity",
            "ko": "순회·연결성"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-graph-flow-matching",
          "parentId": "view-domain-graph",
          "kind": "group",
          "label": "Flow & Matching",
          "localizedLabels": {
            "en": "Flow & Matching",
            "ko": "유량·매칭"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-graph-spanning-structures",
          "parentId": "view-domain-graph",
          "kind": "group",
          "label": "Spanning Structures",
          "localizedLabels": {
            "en": "Spanning Structures",
            "ko": "신장 구조"
          },
          "order": 40
        },
        {
          "id": "view-group-domain-graph-network-analysis",
          "parentId": "view-domain-graph",
          "kind": "group",
          "label": "Network Analysis",
          "localizedLabels": {
            "en": "Network Analysis",
            "ko": "네트워크 분석"
          },
          "order": 50
        },
        {
          "id": "view-group-domain-mathematics-number-theory",
          "parentId": "view-domain-mathematics",
          "kind": "group",
          "label": "Number Theory",
          "localizedLabels": {
            "en": "Number Theory",
            "ko": "정수론"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-mathematics-linear-numerical",
          "parentId": "view-domain-mathematics",
          "kind": "group",
          "label": "Linear Algebra & Numerical",
          "localizedLabels": {
            "en": "Linear Algebra & Numerical",
            "ko": "선형대수·수치해석"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-mathematics-transforms-multiplication",
          "parentId": "view-domain-mathematics",
          "kind": "group",
          "label": "Transforms & Multiplication",
          "localizedLabels": {
            "en": "Transforms & Multiplication",
            "ko": "변환·곱셈"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-cryptography-public-signatures",
          "parentId": "view-domain-cryptography",
          "kind": "group",
          "label": "Public-Key & Signatures",
          "localizedLabels": {
            "en": "Public-Key & Signatures",
            "ko": "공개키·전자서명"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-cryptography-key-agreement",
          "parentId": "view-domain-cryptography",
          "kind": "group",
          "label": "Key Agreement",
          "localizedLabels": {
            "en": "Key Agreement",
            "ko": "키 합의"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-cryptography-symmetric",
          "parentId": "view-domain-cryptography",
          "kind": "group",
          "label": "Symmetric Ciphers",
          "localizedLabels": {
            "en": "Symmetric Ciphers",
            "ko": "대칭 암호"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-cryptography-hashing-passwords",
          "parentId": "view-domain-cryptography",
          "kind": "group",
          "label": "Hashing & Passwords",
          "localizedLabels": {
            "en": "Hashing & Passwords",
            "ko": "해시·비밀번호"
          },
          "order": 40
        },
        {
          "id": "view-group-domain-cryptography-mathematical-foundations",
          "parentId": "view-domain-cryptography",
          "kind": "group",
          "label": "Mathematical Foundations",
          "localizedLabels": {
            "en": "Mathematical Foundations",
            "ko": "수학적 기반"
          },
          "order": 50
        },
        {
          "id": "view-group-domain-optimization-dynamic-programming",
          "parentId": "view-domain-optimization",
          "kind": "group",
          "label": "Dynamic Programming",
          "localizedLabels": {
            "en": "Dynamic Programming",
            "ko": "동적 계획법"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-optimization-mathematical-programming",
          "parentId": "view-domain-optimization",
          "kind": "group",
          "label": "Mathematical Programming",
          "localizedLabels": {
            "en": "Mathematical Programming",
            "ko": "수리 계획법"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-optimization-matching-flow",
          "parentId": "view-domain-optimization",
          "kind": "group",
          "label": "Matching & Flow",
          "localizedLabels": {
            "en": "Matching & Flow",
            "ko": "매칭·유량"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-optimization-continuous-learning",
          "parentId": "view-domain-optimization",
          "kind": "group",
          "label": "Continuous & Learning",
          "localizedLabels": {
            "en": "Continuous & Learning",
            "ko": "연속 최적화·학습"
          },
          "order": 40
        },
        {
          "id": "view-group-domain-optimization-metaheuristics",
          "parentId": "view-domain-optimization",
          "kind": "group",
          "label": "Metaheuristics",
          "localizedLabels": {
            "en": "Metaheuristics",
            "ko": "메타휴리스틱"
          },
          "order": 50
        },
        {
          "id": "view-group-domain-string-pattern-matching",
          "parentId": "view-domain-string",
          "kind": "group",
          "label": "Pattern Matching",
          "localizedLabels": {
            "en": "Pattern Matching",
            "ko": "패턴 매칭"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-string-sequence-comparison",
          "parentId": "view-domain-string",
          "kind": "group",
          "label": "Sequence Comparison",
          "localizedLabels": {
            "en": "Sequence Comparison",
            "ko": "시퀀스 비교"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-string-indexing-palindromes",
          "parentId": "view-domain-string",
          "kind": "group",
          "label": "Indexing & Palindromes",
          "localizedLabels": {
            "en": "Indexing & Palindromes",
            "ko": "인덱스·팰린드롬"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-geometry-convex-hull",
          "parentId": "view-domain-computational-geometry",
          "kind": "group",
          "label": "Convex Hull",
          "localizedLabels": {
            "en": "Convex Hull",
            "ko": "볼록 껍질"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-geometry-proximity-intersections",
          "parentId": "view-domain-computational-geometry",
          "kind": "group",
          "label": "Proximity & Intersections",
          "localizedLabels": {
            "en": "Proximity & Intersections",
            "ko": "근접·교차"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-geometry-polygon-planar",
          "parentId": "view-domain-computational-geometry",
          "kind": "group",
          "label": "Polygon & Planar Geometry",
          "localizedLabels": {
            "en": "Polygon & Planar Geometry",
            "ko": "다각형·평면 기하"
          },
          "order": 30
        },
        {
          "id": "view-group-domain-machine-learning-clustering-ranking",
          "parentId": "view-domain-machine-learning",
          "kind": "group",
          "label": "Clustering & Graph Ranking",
          "localizedLabels": {
            "en": "Clustering & Graph Ranking",
            "ko": "군집화·그래프 순위"
          },
          "order": 10
        },
        {
          "id": "view-group-domain-machine-learning-linear-instance",
          "parentId": "view-domain-machine-learning",
          "kind": "group",
          "label": "Linear, Instance & Training",
          "localizedLabels": {
            "en": "Linear, Instance & Training",
            "ko": "선형·사례 기반·학습"
          },
          "order": 20
        },
        {
          "id": "view-group-domain-machine-learning-trees-ensembles",
          "parentId": "view-domain-machine-learning",
          "kind": "group",
          "label": "Trees & Ensembles",
          "localizedLabels": {
            "en": "Trees & Ensembles",
            "ko": "트리·앙상블"
          },
          "order": 30
        },
        {
          "id": "view-group-wave150-domain-compression-modern-dictionary",
          "parentId": "view-domain-compression",
          "kind": "group",
          "label": "Modern Dictionary Compression",
          "localizedLabels": { "en": "Modern Dictionary Compression", "ko": "현대 사전식 압축" },
          "order": 90
        },
        {
          "id": "view-group-wave150-domain-mathematics-gcd-modular",
          "parentId": "view-group-domain-mathematics-number-theory",
          "kind": "group",
          "label": "GCD & Modular Roots",
          "localizedLabels": { "en": "GCD & Modular Roots", "ko": "최대공약수·모듈러 근" },
          "order": 90
        },
        {
          "id": "view-group-wave150-domain-data-processing-selection",
          "parentId": "view-group-domain-data-processing-searching",
          "kind": "group",
          "label": "Selection",
          "localizedLabels": { "en": "Selection", "ko": "선택" },
          "order": 90
        },
        {
          "id": "view-group-wave150-domain-graph-bounded-paths",
          "parentId": "view-group-domain-graph-paths-routing",
          "kind": "group",
          "label": "Bounded-Weight Paths",
          "localizedLabels": { "en": "Bounded-Weight Paths", "ko": "제한 가중치 경로" },
          "order": 90
        },
        { "id": "view-wave150-domain-selection-sort", "parentId": "view-group-domain-data-processing-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-selection-sort", "order": 90 },
        { "id": "view-wave150-domain-bubble-sort", "parentId": "view-group-domain-data-processing-sorting-in-place-comparison", "kind": "entity", "entityId": "algo-bubble-sort", "order": 100 },
        { "id": "view-wave150-domain-median-of-medians", "parentId": "view-group-wave150-domain-data-processing-selection", "kind": "entity", "entityId": "algo-median-of-medians", "order": 10 },
        { "id": "view-wave150-domain-dial-shortest-path", "parentId": "view-group-wave150-domain-graph-bounded-paths", "kind": "entity", "entityId": "algo-dial-shortest-path", "order": 10 },
        { "id": "view-wave150-domain-zero-one-bfs", "parentId": "view-group-wave150-domain-graph-bounded-paths", "kind": "entity", "entityId": "algo-zero-one-bfs", "order": 20 },
        { "id": "view-wave150-domain-gabow-scc", "parentId": "view-group-domain-graph-traversal-connectivity", "kind": "entity", "entityId": "algo-gabow-scc", "order": 90 },
        { "id": "view-wave150-domain-stoer-wagner-min-cut", "parentId": "view-group-domain-graph-flow-matching", "kind": "entity", "entityId": "algo-stoer-wagner-min-cut", "order": 90 },
        { "id": "view-wave150-domain-successive-shortest-path", "parentId": "view-group-domain-graph-flow-matching", "kind": "entity", "entityId": "algo-successive-shortest-path", "order": 100 },
        { "id": "view-wave150-domain-naive-string-search", "parentId": "view-group-domain-string-pattern-matching", "kind": "entity", "entityId": "algo-naive-string-search", "order": 90 },
        { "id": "view-wave150-domain-bitap", "parentId": "view-group-domain-string-pattern-matching", "kind": "entity", "entityId": "algo-bitap", "order": 100 },
        { "id": "view-wave150-domain-ukkonen-suffix-tree", "parentId": "view-group-domain-string-indexing-palindromes", "kind": "entity", "entityId": "algo-ukkonen-suffix-tree", "order": 90 },
        { "id": "view-wave150-domain-binary-gcd", "parentId": "view-group-wave150-domain-mathematics-gcd-modular", "kind": "entity", "entityId": "algo-binary-gcd", "order": 10 },
        { "id": "view-wave150-domain-tonelli-shanks", "parentId": "view-group-wave150-domain-mathematics-gcd-modular", "kind": "entity", "entityId": "algo-tonelli-shanks", "order": 20 },
        { "id": "view-wave150-domain-householder-qr", "parentId": "view-phase3-domain-numerical-computing", "kind": "entity", "entityId": "algo-householder-qr", "order": 90 },
        { "id": "view-wave150-domain-conjugate-gradient", "parentId": "view-phase3-domain-numerical-computing", "kind": "entity", "entityId": "algo-conjugate-gradient", "order": 100 },
        { "id": "view-wave150-domain-hmac", "parentId": "view-group-domain-cryptography-hashing-passwords", "kind": "entity", "entityId": "algo-hmac", "order": 90 },
        { "id": "view-wave150-domain-hkdf", "parentId": "view-group-domain-cryptography-hashing-passwords", "kind": "entity", "entityId": "algo-hkdf", "order": 100 },
        { "id": "view-wave150-domain-x25519", "parentId": "view-group-domain-cryptography-key-agreement", "kind": "entity", "entityId": "algo-x25519", "order": 90 },
        { "id": "view-wave150-domain-lz4", "parentId": "view-group-wave150-domain-compression-modern-dictionary", "kind": "entity", "entityId": "algo-lz4", "order": 10 },
        { "id": "view-wave150-domain-brotli", "parentId": "view-group-wave150-domain-compression-modern-dictionary", "kind": "entity", "entityId": "algo-brotli", "order": 20 },
        { "id": "view-wave150-domain-fortune-voronoi", "parentId": "view-group-domain-geometry-polygon-planar", "kind": "entity", "entityId": "algo-fortune-voronoi", "order": 90 },
        { "id": "view-wave150-domain-sutherland-hodgman", "parentId": "view-group-domain-geometry-polygon-planar", "kind": "entity", "entityId": "algo-sutherland-hodgman", "order": 100 },
        { "id": "view-wave150-domain-gaussian-naive-bayes", "parentId": "view-group-domain-machine-learning-linear-instance", "kind": "entity", "entityId": "algo-gaussian-naive-bayes", "order": 90 },
        { "id": "view-wave150-domain-smo", "parentId": "view-group-domain-machine-learning-linear-instance", "kind": "entity", "entityId": "algo-smo", "order": 100 },
        { "id": "view-wave150-domain-adaboost", "parentId": "view-group-domain-machine-learning-trees-ensembles", "kind": "entity", "entityId": "algo-adaboost", "order": 90 },
        { "id": "view-wave150-domain-expectation-maximization", "parentId": "view-group-domain-machine-learning-clustering-ranking", "kind": "entity", "entityId": "algo-expectation-maximization", "order": 90 },
        { "id": "view-wave150-domain-stochastic-gradient-descent", "parentId": "view-group-domain-optimization-continuous-learning", "kind": "entity", "entityId": "algo-stochastic-gradient-descent", "order": 90 },
        { "id": "view-wave150-domain-momentum-gradient-descent", "parentId": "view-group-domain-optimization-continuous-learning", "kind": "entity", "entityId": "algo-momentum-gradient-descent", "order": 100 },
        { "id": "view-wave150-domain-bfgs", "parentId": "view-group-domain-optimization-continuous-learning", "kind": "entity", "entityId": "algo-bfgs", "order": 110 },
        { "id": "view-wave150-domain-adam", "parentId": "view-group-domain-optimization-continuous-learning", "kind": "entity", "entityId": "algo-adam", "order": 120 }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
