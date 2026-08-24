(function registerAlgoriaDomainRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "relations-domains",
    relations: [
      {
        "id": "rel-dijkstra-domain-graph",
        "from": "algo-dijkstra",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-a-star-domain-graph",
        "from": "algo-a-star",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-031",
        "from": "algo-breadth-first-search",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-034",
        "from": "algo-depth-first-search",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-037",
        "from": "algo-bellman-ford",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-040",
        "from": "algo-floyd-warshall",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-044",
        "from": "algo-bidirectional-dijkstra",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-048",
        "from": "algo-kruskal",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-052",
        "from": "algo-prim",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-054",
        "from": "algo-topological-sort",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-057",
        "from": "algo-edmonds-karp",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-059",
        "from": "algo-tarjan-scc",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-demo-062",
        "from": "algo-kmp",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-demo-066",
        "from": "algo-rabin-karp",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-demo-069",
        "from": "algo-boyer-moore",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-demo-072",
        "from": "algo-z-algorithm",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-demo-076",
        "from": "algo-aho-corasick",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-demo-077",
        "from": "algo-euclidean",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-demo-079",
        "from": "algo-sieve-eratosthenes",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-demo-082",
        "from": "algo-fft",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-demo-085",
        "from": "algo-karatsuba",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-demo-087",
        "from": "algo-rsa",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-demo-088",
        "from": "algo-aes",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-demo-090",
        "from": "algo-diffie-hellman",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-demo-091",
        "from": "algo-sha-256",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-demo-095",
        "from": "algo-huffman-coding",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-demo-098",
        "from": "algo-lzw",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-demo-101",
        "from": "algo-graham-scan",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-demo-104",
        "from": "algo-k-means",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-demo-107",
        "from": "algo-simplex",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-ford-fulkerson-domain-graph",
        "from": "algo-ford-fulkerson",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase2-dinic-domain-graph",
        "from": "algo-dinic",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase2-kosaraju-domain-graph",
        "from": "algo-kosaraju-sharir",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase2-johnson-domain-graph",
        "from": "algo-johnson",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase2-levenshtein-domain-string",
        "from": "algo-levenshtein-distance",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase2-lcs-domain-string",
        "from": "algo-longest-common-subsequence",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase2-lis-domain-optimization",
        "from": "algo-longest-increasing-subsequence-dp",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-knapsack-domain-optimization",
        "from": "algo-zero-one-knapsack-dp",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-matrix-chain-domain-optimization",
        "from": "algo-matrix-chain-multiplication",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-needleman-wunsch-domain-bioinformatics",
        "from": "algo-needleman-wunsch",
        "type": "belongs_to_domain",
        "to": "domain-bioinformatics"
      },
      {
        "id": "rel-phase1-quick-domain",
        "from": "algo-quick-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase1-merge-domain",
        "from": "algo-merge-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase1-binary-domain",
        "from": "algo-binary-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-randomized-quick-domain",
        "from": "algo-randomized-quick-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-dual-pivot-domain",
        "from": "algo-dual-pivot-quick-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-three-way-domain",
        "from": "algo-three-way-quick-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-introsort-domain",
        "from": "algo-introsort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-heap-sort-domain",
        "from": "algo-heap-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-insertion-domain",
        "from": "algo-insertion-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-counting-domain",
        "from": "algo-counting-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-radix-domain",
        "from": "algo-radix-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-timsort-domain",
        "from": "algo-timsort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-linear-domain",
        "from": "algo-linear-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-quickselect-domain",
        "from": "algo-quickselect",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase5-ternary-domain",
        "from": "algo-ternary-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-jarvis-march-domain-0",
        "from": "algo-jarvis-march",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase2-andrew-monotone-chain-domain-0",
        "from": "algo-andrew-monotone-chain",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase2-quickhull-domain-0",
        "from": "algo-quickhull",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase2-closest-pair-divide-conquer-domain-0",
        "from": "algo-closest-pair-divide-conquer",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase2-bentley-ottmann-domain-0",
        "from": "algo-bentley-ottmann",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase2-dbscan-domain-0",
        "from": "algo-dbscan",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-knn-domain-0",
        "from": "algo-knn",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-perceptron-domain-0",
        "from": "algo-perceptron",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-id3-domain-0",
        "from": "algo-id3",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-pagerank-domain-0",
        "from": "algo-pagerank",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-pagerank-domain-1",
        "from": "algo-pagerank",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase2-chacha20-domain-0",
        "from": "algo-chacha20",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase2-blake2-domain-0",
        "from": "algo-blake2",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase2-argon2id-domain-0",
        "from": "algo-argon2id",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase2-ecdh-domain-0",
        "from": "algo-ecdh",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase2-arithmetic-coding-domain-0",
        "from": "algo-arithmetic-coding",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-run-length-encoding-domain-0",
        "from": "algo-run-length-encoding",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-deflate-domain-0",
        "from": "algo-deflate",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-burrows-wheeler-transform-domain-0",
        "from": "algo-burrows-wheeler-transform",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-lz77-domain-0",
        "from": "algo-lz77",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-lz78-domain-0",
        "from": "algo-lz78",
        "type": "belongs_to_domain",
        "to": "domain-compression"
      },
      {
        "id": "rel-phase2-exponential-search-domain-0",
        "from": "algo-exponential-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-jump-search-domain-0",
        "from": "algo-jump-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-interpolation-search-domain-0",
        "from": "algo-interpolation-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase2-extended-euclidean-domain-0",
        "from": "algo-extended-euclidean",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase2-binary-modular-exponentiation-domain-0",
        "from": "algo-binary-modular-exponentiation",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase2-miller-rabin-domain-0",
        "from": "algo-miller-rabin",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase2-gaussian-elimination-domain-0",
        "from": "algo-gaussian-elimination",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase2-gradient-descent-domain-0",
        "from": "algo-gradient-descent",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-gradient-descent-domain-1",
        "from": "algo-gradient-descent",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase2-hungarian-domain-0",
        "from": "algo-hungarian",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase2-nelder-mead-domain-0",
        "from": "algo-nelder-mead",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-shell-sort-belongs_to_domain-3",
        "from": "algo-shell-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-bucket-sort-belongs_to_domain-4",
        "from": "algo-bucket-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-cycle-sort-belongs_to_domain-3",
        "from": "algo-cycle-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-external-merge-sort-belongs_to_domain-4",
        "from": "algo-external-merge-sort",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-fibonacci-search-belongs_to_domain-3",
        "from": "algo-fibonacci-search",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-boruvka-belongs_to_domain-3",
        "from": "algo-boruvka",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-belongs_to_domain-4",
        "from": "algo-hopcroft-karp",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-hopcroft-karp-belongs_to_domain-5",
        "from": "algo-hopcroft-karp",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-belongs_to_domain-4",
        "from": "algo-push-relabel",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-push-relabel-belongs_to_domain-5",
        "from": "algo-push-relabel",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-hierholzer-belongs_to_domain-4",
        "from": "algo-hierholzer",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-belongs_to_domain-4",
        "from": "algo-bron-kerbosch",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-bron-kerbosch-belongs_to_domain-5",
        "from": "algo-bron-kerbosch",
        "type": "belongs_to_domain",
        "to": "domain-network-science"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-belongs_to_domain-4",
        "from": "algo-louvain",
        "type": "belongs_to_domain",
        "to": "domain-network-science"
      },
      {
        "id": "rel-phase3-expansion-algo-louvain-belongs_to_domain-5",
        "from": "algo-louvain",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-yen-k-shortest-belongs_to_domain-4",
        "from": "algo-yen-k-shortest",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-floyd-cycle-finding-belongs_to_domain-3",
        "from": "algo-floyd-cycle-finding",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-floyd-cycle-finding-belongs_to_domain-4",
        "from": "algo-floyd-cycle-finding",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-belongs_to_domain-4",
        "from": "algo-edmonds-blossom",
        "type": "belongs_to_domain",
        "to": "domain-graph"
      },
      {
        "id": "rel-phase3-expansion-algo-edmonds-blossom-belongs_to_domain-5",
        "from": "algo-edmonds-blossom",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-suffix-array-doubling-belongs_to_domain-4",
        "from": "algo-suffix-array-doubling",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase3-expansion-algo-manacher-belongs_to_domain-3",
        "from": "algo-manacher",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase3-expansion-algo-smith-waterman-belongs_to_domain-3",
        "from": "algo-smith-waterman",
        "type": "belongs_to_domain",
        "to": "domain-bioinformatics"
      },
      {
        "id": "rel-phase3-expansion-algo-smith-waterman-belongs_to_domain-4",
        "from": "algo-smith-waterman",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase3-expansion-algo-myers-diff-belongs_to_domain-3",
        "from": "algo-myers-diff",
        "type": "belongs_to_domain",
        "to": "domain-string"
      },
      {
        "id": "rel-phase3-expansion-algo-myers-diff-belongs_to_domain-4",
        "from": "algo-myers-diff",
        "type": "belongs_to_domain",
        "to": "domain-data-processing"
      },
      {
        "id": "rel-phase3-expansion-algo-newton-raphson-belongs_to_domain-3",
        "from": "algo-newton-raphson",
        "type": "belongs_to_domain",
        "to": "domain-numerical-computing"
      },
      {
        "id": "rel-phase3-expansion-algo-newton-raphson-belongs_to_domain-4",
        "from": "algo-newton-raphson",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase3-expansion-algo-gauss-seidel-belongs_to_domain-4",
        "from": "algo-gauss-seidel",
        "type": "belongs_to_domain",
        "to": "domain-numerical-computing"
      },
      {
        "id": "rel-phase3-expansion-algo-lu-decomposition-belongs_to_domain-3",
        "from": "algo-lu-decomposition",
        "type": "belongs_to_domain",
        "to": "domain-numerical-computing"
      },
      {
        "id": "rel-phase3-expansion-algo-cholesky-belongs_to_domain-3",
        "from": "algo-cholesky",
        "type": "belongs_to_domain",
        "to": "domain-numerical-computing"
      },
      {
        "id": "rel-phase3-expansion-algo-strassen-belongs_to_domain-3",
        "from": "algo-strassen",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase3-expansion-algo-strassen-belongs_to_domain-4",
        "from": "algo-strassen",
        "type": "belongs_to_domain",
        "to": "domain-numerical-computing"
      },
      {
        "id": "rel-phase3-expansion-algo-pollard-rho-belongs_to_domain-3",
        "from": "algo-pollard-rho",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase3-expansion-algo-pollard-rho-belongs_to_domain-4",
        "from": "algo-pollard-rho",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase3-expansion-algo-chinese-remainder-belongs_to_domain-3",
        "from": "algo-chinese-remainder",
        "type": "belongs_to_domain",
        "to": "domain-mathematics"
      },
      {
        "id": "rel-phase3-expansion-algo-chinese-remainder-belongs_to_domain-4",
        "from": "algo-chinese-remainder",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase3-expansion-algo-ed25519-belongs_to_domain-3",
        "from": "algo-ed25519",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase3-expansion-algo-pbkdf2-belongs_to_domain-3",
        "from": "algo-pbkdf2",
        "type": "belongs_to_domain",
        "to": "domain-cryptography"
      },
      {
        "id": "rel-phase3-expansion-algo-rotating-calipers-belongs_to_domain-3",
        "from": "algo-rotating-calipers",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase3-expansion-algo-ramer-douglas-peucker-belongs_to_domain-3",
        "from": "algo-ramer-douglas-peucker",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase3-expansion-algo-bowyer-watson-belongs_to_domain-4",
        "from": "algo-bowyer-watson",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase3-expansion-algo-ray-casting-point-in-polygon-belongs_to_domain-3",
        "from": "algo-ray-casting-point-in-polygon",
        "type": "belongs_to_domain",
        "to": "domain-computational-geometry"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-belongs_to_domain-4",
        "from": "algo-logistic-regression",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase3-expansion-algo-logistic-regression-belongs_to_domain-5",
        "from": "algo-logistic-regression",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-random-forest-belongs_to_domain-4",
        "from": "algo-random-forest",
        "type": "belongs_to_domain",
        "to": "domain-machine-learning"
      },
      {
        "id": "rel-phase3-expansion-algo-simulated-annealing-belongs_to_domain-3",
        "from": "algo-simulated-annealing",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {
        "id": "rel-phase3-expansion-algo-particle-swarm-belongs_to_domain-4",
        "from": "algo-particle-swarm",
        "type": "belongs_to_domain",
        "to": "domain-optimization"
      },
      {"id":"rel-wave150-selection-sort-domain","from":"algo-selection-sort","type":"belongs_to_domain","to":"domain-data-processing"},
      {"id":"rel-wave150-bubble-sort-domain","from":"algo-bubble-sort","type":"belongs_to_domain","to":"domain-data-processing"},
      {"id":"rel-wave150-median-of-medians-domain","from":"algo-median-of-medians","type":"belongs_to_domain","to":"domain-data-processing"},
      {"id":"rel-wave150-dial-domain","from":"algo-dial-shortest-path","type":"belongs_to_domain","to":"domain-graph"},
      {"id":"rel-wave150-zero-one-bfs-domain","from":"algo-zero-one-bfs","type":"belongs_to_domain","to":"domain-graph"},
      {"id":"rel-wave150-gabow-scc-domain","from":"algo-gabow-scc","type":"belongs_to_domain","to":"domain-graph"},
      {"id":"rel-wave150-stoer-wagner-domain","from":"algo-stoer-wagner-min-cut","type":"belongs_to_domain","to":"domain-graph"},
      {"id":"rel-wave150-successive-shortest-path-domain","from":"algo-successive-shortest-path","type":"belongs_to_domain","to":"domain-graph"},
      {"id":"rel-wave150-naive-string-search-domain","from":"algo-naive-string-search","type":"belongs_to_domain","to":"domain-string"},
      {"id":"rel-wave150-bitap-domain","from":"algo-bitap","type":"belongs_to_domain","to":"domain-string"},
      {"id":"rel-wave150-ukkonen-domain","from":"algo-ukkonen-suffix-tree","type":"belongs_to_domain","to":"domain-string"},
      {"id":"rel-wave150-binary-gcd-domain","from":"algo-binary-gcd","type":"belongs_to_domain","to":"domain-mathematics"},
      {"id":"rel-wave150-tonelli-shanks-domain","from":"algo-tonelli-shanks","type":"belongs_to_domain","to":"domain-mathematics"},
      {"id":"rel-wave150-householder-qr-domain","from":"algo-householder-qr","type":"belongs_to_domain","to":"domain-numerical-computing"},
      {"id":"rel-wave150-conjugate-gradient-domain","from":"algo-conjugate-gradient","type":"belongs_to_domain","to":"domain-numerical-computing"},
      {"id":"rel-wave150-hmac-domain","from":"algo-hmac","type":"belongs_to_domain","to":"domain-cryptography"},
      {"id":"rel-wave150-hkdf-domain","from":"algo-hkdf","type":"belongs_to_domain","to":"domain-cryptography"},
      {"id":"rel-wave150-x25519-domain","from":"algo-x25519","type":"belongs_to_domain","to":"domain-cryptography"},
      {"id":"rel-wave150-lz4-domain","from":"algo-lz4","type":"belongs_to_domain","to":"domain-compression"},
      {"id":"rel-wave150-brotli-domain","from":"algo-brotli","type":"belongs_to_domain","to":"domain-compression"},
      {"id":"rel-wave150-fortune-domain","from":"algo-fortune-voronoi","type":"belongs_to_domain","to":"domain-computational-geometry"},
      {"id":"rel-wave150-sutherland-hodgman-domain","from":"algo-sutherland-hodgman","type":"belongs_to_domain","to":"domain-computational-geometry"},
      {"id":"rel-wave150-gaussian-nb-domain","from":"algo-gaussian-naive-bayes","type":"belongs_to_domain","to":"domain-machine-learning"},
      {"id":"rel-wave150-smo-domain","from":"algo-smo","type":"belongs_to_domain","to":"domain-machine-learning"},
      {"id":"rel-wave150-adaboost-domain","from":"algo-adaboost","type":"belongs_to_domain","to":"domain-machine-learning"},
      {"id":"rel-wave150-em-domain","from":"algo-expectation-maximization","type":"belongs_to_domain","to":"domain-machine-learning"},
      {"id":"rel-wave150-sgd-domain","from":"algo-stochastic-gradient-descent","type":"belongs_to_domain","to":"domain-optimization"},
      {"id":"rel-wave150-momentum-domain","from":"algo-momentum-gradient-descent","type":"belongs_to_domain","to":"domain-optimization"},
      {"id":"rel-wave150-bfgs-domain","from":"algo-bfgs","type":"belongs_to_domain","to":"domain-optimization"},
      {"id":"rel-wave150-adam-domain","from":"algo-adam","type":"belongs_to_domain","to":"domain-optimization"}
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
