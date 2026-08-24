(function registerAlgoriaProblemRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "relations-problems",
    relations: [
      {
        "id": "rel-quick-solves-sorting",
        "from": "algo-quick-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-randomized-quick-solves-sorting",
        "from": "algo-randomized-quick-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-merge-solves-sorting",
        "from": "algo-merge-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-dijkstra-solves-shortest-path",
        "from": "algo-dijkstra",
        "type": "solves",
        "to": "problem-shortest-path"
      },
      {
        "id": "rel-a-star-solves-shortest-path",
        "from": "algo-a-star",
        "type": "solves",
        "to": "problem-shortest-path"
      },
      {
        "id": "rel-demo-003",
        "from": "algo-dual-pivot-quick-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-005",
        "from": "algo-three-way-quick-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-007",
        "from": "algo-introsort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-008",
        "from": "algo-heap-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-010",
        "from": "algo-insertion-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-012",
        "from": "algo-counting-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-014",
        "from": "algo-radix-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-016",
        "from": "algo-timsort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-demo-017",
        "from": "algo-binary-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-demo-020",
        "from": "algo-linear-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-demo-023",
        "from": "algo-ternary-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-demo-026",
        "from": "algo-quickselect",
        "type": "solves",
        "to": "problem-selection"
      },
      {
        "id": "rel-demo-029",
        "from": "algo-breadth-first-search",
        "type": "solves",
        "to": "problem-graph-traversal"
      },
      {
        "id": "rel-demo-032",
        "from": "algo-depth-first-search",
        "type": "solves",
        "to": "problem-graph-traversal"
      },
      {
        "id": "rel-demo-035",
        "from": "algo-bellman-ford",
        "type": "solves",
        "to": "problem-shortest-path"
      },
      {
        "id": "rel-demo-038",
        "from": "algo-floyd-warshall",
        "type": "solves",
        "to": "problem-shortest-path"
      },
      {
        "id": "rel-demo-041",
        "from": "algo-bidirectional-dijkstra",
        "type": "solves",
        "to": "problem-shortest-path"
      },
      {
        "id": "rel-demo-045",
        "from": "algo-kruskal",
        "type": "solves",
        "to": "problem-mst"
      },
      {
        "id": "rel-demo-049",
        "from": "algo-prim",
        "type": "solves",
        "to": "problem-mst"
      },
      {
        "id": "rel-demo-053",
        "from": "algo-topological-sort",
        "type": "solves",
        "to": "problem-topological-ordering"
      },
      {
        "id": "rel-demo-055",
        "from": "algo-edmonds-karp",
        "type": "solves",
        "to": "problem-max-flow"
      },
      {
        "id": "rel-demo-060",
        "from": "algo-kmp",
        "type": "solves",
        "to": "problem-string-matching"
      },
      {
        "id": "rel-demo-063",
        "from": "algo-rabin-karp",
        "type": "solves",
        "to": "problem-string-matching"
      },
      {
        "id": "rel-demo-067",
        "from": "algo-boyer-moore",
        "type": "solves",
        "to": "problem-string-matching"
      },
      {
        "id": "rel-demo-070",
        "from": "algo-z-algorithm",
        "type": "solves",
        "to": "problem-string-matching"
      },
      {
        "id": "rel-demo-073",
        "from": "algo-aho-corasick",
        "type": "solves",
        "to": "problem-string-matching"
      },
      {
        "id": "rel-demo-083",
        "from": "algo-karatsuba",
        "type": "solves",
        "to": "problem-integer-multiplication"
      },
      {
        "id": "rel-demo-086",
        "from": "algo-rsa",
        "type": "solves",
        "to": "problem-public-key-crypto"
      },
      {
        "id": "rel-demo-089",
        "from": "algo-diffie-hellman",
        "type": "solves",
        "to": "problem-key-agreement"
      },
      {
        "id": "rel-demo-092",
        "from": "algo-huffman-coding",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-demo-096",
        "from": "algo-lzw",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-demo-099",
        "from": "algo-graham-scan",
        "type": "solves",
        "to": "problem-convex-hull"
      },
      {
        "id": "rel-demo-102",
        "from": "algo-k-means",
        "type": "solves",
        "to": "problem-clustering"
      },
      {
        "id": "rel-demo-105",
        "from": "algo-simplex",
        "type": "solves",
        "to": "problem-linear-optimization"
      },
      {
        "id": "rel-phase2-ford-fulkerson-solves-max-flow",
        "from": "algo-ford-fulkerson",
        "type": "solves",
        "to": "problem-max-flow"
      },
      {
        "id": "rel-phase2-dinic-solves-max-flow",
        "from": "algo-dinic",
        "type": "solves",
        "to": "problem-max-flow"
      },
      {
        "id": "rel-phase2-kosaraju-solves-scc",
        "from": "algo-kosaraju-sharir",
        "type": "solves",
        "to": "problem-strongly-connected-components"
      },
      {
        "id": "rel-phase2-johnson-solves-apsp",
        "from": "algo-johnson",
        "type": "solves",
        "to": "problem-all-pairs-shortest-paths"
      },
      {
        "id": "rel-phase2-levenshtein-solves-edit-distance",
        "from": "algo-levenshtein-distance",
        "type": "solves",
        "to": "problem-edit-distance"
      },
      {
        "id": "rel-phase2-lcs-solves",
        "from": "algo-longest-common-subsequence",
        "type": "solves",
        "to": "problem-longest-common-subsequence"
      },
      {
        "id": "rel-phase2-lis-solves",
        "from": "algo-longest-increasing-subsequence-dp",
        "type": "solves",
        "to": "problem-longest-increasing-subsequence"
      },
      {
        "id": "rel-phase2-knapsack-solves",
        "from": "algo-zero-one-knapsack-dp",
        "type": "solves",
        "to": "problem-zero-one-knapsack"
      },
      {
        "id": "rel-phase2-matrix-chain-solves",
        "from": "algo-matrix-chain-multiplication",
        "type": "solves",
        "to": "problem-matrix-chain-ordering"
      },
      {
        "id": "rel-phase2-needleman-wunsch-solves",
        "from": "algo-needleman-wunsch",
        "type": "solves",
        "to": "problem-global-sequence-alignment"
      },
      {
        "id": "rel-phase4-tarjan-solves-scc",
        "from": "algo-tarjan-scc",
        "type": "solves",
        "to": "problem-strongly-connected-components"
      },
      {
        "id": "rel-phase4-euclidean-solves-gcd",
        "from": "algo-euclidean",
        "type": "solves",
        "to": "problem-greatest-common-divisor"
      },
      {
        "id": "rel-phase4-sieve-solves-primes",
        "from": "algo-sieve-eratosthenes",
        "type": "solves",
        "to": "problem-prime-enumeration"
      },
      {
        "id": "rel-phase4-fft-solves-dft",
        "from": "algo-fft",
        "type": "solves",
        "to": "problem-discrete-fourier-transform"
      },
      {
        "id": "rel-phase4-aes-solves-symmetric-encryption",
        "from": "algo-aes",
        "type": "solves",
        "to": "problem-symmetric-key-encryption"
      },
      {
        "id": "rel-phase4-sha256-solves-hashing",
        "from": "algo-sha-256",
        "type": "solves",
        "to": "problem-cryptographic-hashing"
      },
      {
        "id": "rel-phase2-jarvis-march-solves",
        "from": "algo-jarvis-march",
        "type": "solves",
        "to": "problem-convex-hull"
      },
      {
        "id": "rel-phase2-andrew-monotone-chain-solves",
        "from": "algo-andrew-monotone-chain",
        "type": "solves",
        "to": "problem-convex-hull"
      },
      {
        "id": "rel-phase2-quickhull-solves",
        "from": "algo-quickhull",
        "type": "solves",
        "to": "problem-convex-hull"
      },
      {
        "id": "rel-phase2-closest-pair-divide-conquer-solves",
        "from": "algo-closest-pair-divide-conquer",
        "type": "solves",
        "to": "problem-closest-pair"
      },
      {
        "id": "rel-phase2-bentley-ottmann-solves",
        "from": "algo-bentley-ottmann",
        "type": "solves",
        "to": "problem-segment-intersections"
      },
      {
        "id": "rel-phase2-dbscan-solves",
        "from": "algo-dbscan",
        "type": "solves",
        "to": "problem-clustering"
      },
      {
        "id": "rel-phase2-knn-solves",
        "from": "algo-knn",
        "type": "solves",
        "to": "problem-supervised-classification"
      },
      {
        "id": "rel-phase2-perceptron-solves",
        "from": "algo-perceptron",
        "type": "solves",
        "to": "problem-supervised-classification"
      },
      {
        "id": "rel-phase2-id3-solves",
        "from": "algo-id3",
        "type": "solves",
        "to": "problem-supervised-classification"
      },
      {
        "id": "rel-phase2-pagerank-solves",
        "from": "algo-pagerank",
        "type": "solves",
        "to": "problem-link-ranking"
      },
      {
        "id": "rel-phase2-chacha20-solves",
        "from": "algo-chacha20",
        "type": "solves",
        "to": "problem-symmetric-key-encryption"
      },
      {
        "id": "rel-phase2-blake2-solves",
        "from": "algo-blake2",
        "type": "solves",
        "to": "problem-cryptographic-hashing"
      },
      {
        "id": "rel-phase2-argon2id-solves",
        "from": "algo-argon2id",
        "type": "solves",
        "to": "problem-password-hashing"
      },
      {
        "id": "rel-phase2-ecdh-solves",
        "from": "algo-ecdh",
        "type": "solves",
        "to": "problem-key-agreement"
      },
      {
        "id": "rel-phase2-arithmetic-coding-solves",
        "from": "algo-arithmetic-coding",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-phase2-run-length-encoding-solves",
        "from": "algo-run-length-encoding",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-phase2-deflate-solves",
        "from": "algo-deflate",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-phase2-burrows-wheeler-transform-solves",
        "from": "algo-burrows-wheeler-transform",
        "type": "solves",
        "to": "problem-block-sorting-transform"
      },
      {
        "id": "rel-phase2-lz77-solves",
        "from": "algo-lz77",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-phase2-lz78-solves",
        "from": "algo-lz78",
        "type": "solves",
        "to": "problem-lossless-compression"
      },
      {
        "id": "rel-phase2-exponential-search-solves",
        "from": "algo-exponential-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-phase2-jump-search-solves",
        "from": "algo-jump-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-phase2-interpolation-search-solves",
        "from": "algo-interpolation-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-phase2-extended-euclidean-solves",
        "from": "algo-extended-euclidean",
        "type": "solves",
        "to": "problem-greatest-common-divisor"
      },
      {
        "id": "rel-phase2-binary-modular-exponentiation-solves",
        "from": "algo-binary-modular-exponentiation",
        "type": "solves",
        "to": "problem-modular-exponentiation"
      },
      {
        "id": "rel-phase2-miller-rabin-solves",
        "from": "algo-miller-rabin",
        "type": "solves",
        "to": "problem-primality-testing"
      },
      {
        "id": "rel-phase2-gaussian-elimination-solves",
        "from": "algo-gaussian-elimination",
        "type": "solves",
        "to": "problem-linear-system-solving"
      },
      {
        "id": "rel-phase2-gradient-descent-solves",
        "from": "algo-gradient-descent",
        "type": "solves",
        "to": "problem-continuous-optimization"
      },
      {
        "id": "rel-phase2-hungarian-solves",
        "from": "algo-hungarian",
        "type": "solves",
        "to": "problem-assignment"
      },
      {
        "id": "rel-phase2-nelder-mead-solves",
        "from": "algo-nelder-mead",
        "type": "solves",
        "to": "problem-continuous-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-shell-sort-solves-0",
        "from": "algo-shell-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-phase3-expansion-algo-bucket-sort-solves-0",
        "from": "algo-bucket-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-phase3-expansion-algo-cycle-sort-solves-0",
        "from": "algo-cycle-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-phase3-expansion-algo-external-merge-sort-solves-0",
        "from": "algo-external-merge-sort",
        "type": "solves",
        "to": "problem-sorting"
      },
      {
        "id": "rel-phase3-expansion-algo-fibonacci-search-solves-0",
        "from": "algo-fibonacci-search",
        "type": "solves",
        "to": "problem-searching"
      },
      {
        "id": "rel-phase3-expansion-algo-boruvka-solves-0",
        "from": "algo-boruvka",
        "type": "solves",
        "to": "problem-mst"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-solves-0",
        "from": "algo-hopcroft-karp",
        "type": "solves",
        "to": "problem-bipartite-matching"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-solves-0",
        "from": "algo-push-relabel",
        "type": "solves",
        "to": "problem-max-flow"
      },
      {
        "id": "rel-phase3-expansion-algo-hierholzer-solves-0",
        "from": "algo-hierholzer",
        "type": "solves",
        "to": "problem-eulerian-trail"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-solves-0",
        "from": "algo-bron-kerbosch",
        "type": "solves",
        "to": "problem-maximum-clique-enumeration"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-solves-0",
        "from": "algo-louvain",
        "type": "solves",
        "to": "problem-community-detection"
      },
      {
        "id": "rel-phase3-expansion-algo-yen-k-shortest-solves-0",
        "from": "algo-yen-k-shortest",
        "type": "solves",
        "to": "problem-k-shortest-paths"
      },
      {
        "id": "rel-phase3-expansion-algo-floyd-cycle-finding-solves-0",
        "from": "algo-floyd-cycle-finding",
        "type": "solves",
        "to": "problem-cycle-detection"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-solves-0",
        "from": "algo-edmonds-blossom",
        "type": "solves",
        "to": "problem-general-graph-matching"
      },
      {
        "id": "rel-phase3-expansion-algo-suffix-array-doubling-solves-0",
        "from": "algo-suffix-array-doubling",
        "type": "solves",
        "to": "problem-suffix-ordering"
      },
      {
        "id": "rel-phase3-expansion-algo-manacher-solves-0",
        "from": "algo-manacher",
        "type": "solves",
        "to": "problem-longest-palindrome"
      },
      {
        "id": "rel-phase3-expansion-algo-smith-waterman-solves-0",
        "from": "algo-smith-waterman",
        "type": "solves",
        "to": "problem-local-sequence-alignment"
      },
      {
        "id": "rel-phase3-expansion-algo-myers-diff-solves-0",
        "from": "algo-myers-diff",
        "type": "solves",
        "to": "problem-sequence-diff"
      },
      {
        "id": "rel-phase3-expansion-algo-newton-raphson-solves-0",
        "from": "algo-newton-raphson",
        "type": "solves",
        "to": "problem-root-finding"
      },
      {
        "id": "rel-phase3-expansion-algo-gauss-seidel-solves-0",
        "from": "algo-gauss-seidel",
        "type": "solves",
        "to": "problem-linear-system-solving"
      },
      {
        "id": "rel-phase3-expansion-algo-lu-decomposition-solves-0",
        "from": "algo-lu-decomposition",
        "type": "solves",
        "to": "problem-matrix-factorization"
      },
      {
        "id": "rel-phase3-expansion-algo-cholesky-solves-0",
        "from": "algo-cholesky",
        "type": "solves",
        "to": "problem-matrix-factorization"
      },
      {
        "id": "rel-phase3-expansion-algo-strassen-solves-0",
        "from": "algo-strassen",
        "type": "solves",
        "to": "problem-matrix-multiplication"
      },
      {
        "id": "rel-phase3-expansion-algo-pollard-rho-solves-0",
        "from": "algo-pollard-rho",
        "type": "solves",
        "to": "problem-integer-factorization"
      },
      {
        "id": "rel-phase3-expansion-algo-chinese-remainder-solves-0",
        "from": "algo-chinese-remainder",
        "type": "solves",
        "to": "problem-simultaneous-congruences"
      },
      {
        "id": "rel-phase3-expansion-algo-ed25519-solves-0",
        "from": "algo-ed25519",
        "type": "solves",
        "to": "problem-digital-signature"
      },
      {
        "id": "rel-phase3-expansion-algo-pbkdf2-solves-0",
        "from": "algo-pbkdf2",
        "type": "solves",
        "to": "problem-password-hashing"
      },
      {
        "id": "rel-phase3-expansion-algo-rotating-calipers-solves-0",
        "from": "algo-rotating-calipers",
        "type": "solves",
        "to": "problem-convex-hull"
      },
      {
        "id": "rel-phase3-expansion-algo-ramer-douglas-peucker-solves-0",
        "from": "algo-ramer-douglas-peucker",
        "type": "solves",
        "to": "problem-polygon-simplification"
      },
      {
        "id": "rel-phase3-expansion-algo-bowyer-watson-solves-0",
        "from": "algo-bowyer-watson",
        "type": "solves",
        "to": "problem-planar-triangulation"
      },
      {
        "id": "rel-phase3-expansion-algo-ray-casting-point-in-polygon-solves-0",
        "from": "algo-ray-casting-point-in-polygon",
        "type": "solves",
        "to": "problem-point-in-polygon"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-solves-0",
        "from": "algo-logistic-regression",
        "type": "solves",
        "to": "problem-supervised-classification"
      },
      {
        "id": "rel-phase3-expansion-algo-random-forest-solves-0",
        "from": "algo-random-forest",
        "type": "solves",
        "to": "problem-ensemble-classification"
      },
      {
        "id": "rel-phase3-expansion-algo-simulated-annealing-solves-0",
        "from": "algo-simulated-annealing",
        "type": "solves",
        "to": "problem-global-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-particle-swarm-solves-0",
        "from": "algo-particle-swarm",
        "type": "solves",
        "to": "problem-global-optimization"
      },
      {"id":"rel-wave150-selection-sort-solves","from":"algo-selection-sort","type":"solves","to":"problem-sorting"},
      {"id":"rel-wave150-bubble-sort-solves","from":"algo-bubble-sort","type":"solves","to":"problem-sorting"},
      {"id":"rel-wave150-median-of-medians-solves","from":"algo-median-of-medians","type":"solves","to":"problem-selection"},
      {"id":"rel-wave150-dial-solves","from":"algo-dial-shortest-path","type":"solves","to":"problem-shortest-path"},
      {"id":"rel-wave150-zero-one-bfs-solves","from":"algo-zero-one-bfs","type":"solves","to":"problem-shortest-path"},
      {"id":"rel-wave150-gabow-scc-solves","from":"algo-gabow-scc","type":"solves","to":"problem-strongly-connected-components"},
      {"id":"rel-wave150-stoer-wagner-solves","from":"algo-stoer-wagner-min-cut","type":"solves","to":"problem-global-min-cut"},
      {"id":"rel-wave150-successive-shortest-path-solves","from":"algo-successive-shortest-path","type":"solves","to":"problem-min-cost-flow"},
      {"id":"rel-wave150-naive-string-search-solves","from":"algo-naive-string-search","type":"solves","to":"problem-string-matching"},
      {"id":"rel-wave150-bitap-solves","from":"algo-bitap","type":"solves","to":"problem-string-matching"},
      {"id":"rel-wave150-ukkonen-solves","from":"algo-ukkonen-suffix-tree","type":"solves","to":"problem-suffix-ordering"},
      {"id":"rel-wave150-binary-gcd-solves","from":"algo-binary-gcd","type":"solves","to":"problem-greatest-common-divisor"},
      {"id":"rel-wave150-tonelli-shanks-solves","from":"algo-tonelli-shanks","type":"solves","to":"problem-modular-square-root"},
      {"id":"rel-wave150-householder-qr-solves","from":"algo-householder-qr","type":"solves","to":"problem-matrix-factorization"},
      {"id":"rel-wave150-conjugate-gradient-solves","from":"algo-conjugate-gradient","type":"solves","to":"problem-linear-system-solving"},
      {"id":"rel-wave150-hmac-solves","from":"algo-hmac","type":"solves","to":"problem-message-authentication"},
      {"id":"rel-wave150-hkdf-solves","from":"algo-hkdf","type":"solves","to":"problem-key-derivation"},
      {"id":"rel-wave150-x25519-solves","from":"algo-x25519","type":"solves","to":"problem-key-agreement"},
      {"id":"rel-wave150-lz4-solves","from":"algo-lz4","type":"solves","to":"problem-lossless-compression"},
      {"id":"rel-wave150-brotli-solves","from":"algo-brotli","type":"solves","to":"problem-lossless-compression"},
      {"id":"rel-wave150-fortune-solves","from":"algo-fortune-voronoi","type":"solves","to":"problem-voronoi-diagram"},
      {"id":"rel-wave150-sutherland-hodgman-solves","from":"algo-sutherland-hodgman","type":"solves","to":"problem-polygon-clipping"},
      {"id":"rel-wave150-gaussian-nb-solves","from":"algo-gaussian-naive-bayes","type":"solves","to":"problem-supervised-classification"},
      {"id":"rel-wave150-smo-solves","from":"algo-smo","type":"solves","to":"problem-supervised-classification"},
      {"id":"rel-wave150-adaboost-solves","from":"algo-adaboost","type":"solves","to":"problem-ensemble-classification"},
      {"id":"rel-wave150-em-solves","from":"algo-expectation-maximization","type":"solves","to":"problem-clustering"},
      {"id":"rel-wave150-sgd-solves","from":"algo-stochastic-gradient-descent","type":"solves","to":"problem-continuous-optimization"},
      {"id":"rel-wave150-momentum-solves","from":"algo-momentum-gradient-descent","type":"solves","to":"problem-continuous-optimization"},
      {"id":"rel-wave150-bfgs-solves","from":"algo-bfgs","type":"solves","to":"problem-continuous-optimization"},
      {"id":"rel-wave150-adam-solves","from":"algo-adam","type":"solves","to":"problem-continuous-optimization"}
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
