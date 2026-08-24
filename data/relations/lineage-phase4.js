(function registerAlgoriaPhase4LineageRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  registry.registerPart({
    id: "relations-lineage-phase4",
    relations: [
      { id: "rel-phase4-reverse-delete-related-kruskal", from: "algo-reverse-delete-mst", type: "related_to", to: "algo-kruskal", evidenceIds: ["source-clrs-fourth", "source-kruskal-1956"] },
      { id: "rel-phase4-eppstein-related-yen", from: "algo-eppstein-k-shortest-paths", type: "related_to", to: "algo-yen-k-shortest", evidenceIds: ["source-eppstein-k-shortest-1998", "source-yen-k-shortest-1971"], localizedNotes: { ko: "Eppstein은 반복 정점을 허용하는 k개 경로를 다루고 Yen은 단순·loopless 경로를 열거하므로 같은 문제군의 입력 계약이 다르다.", en: "Eppstein permits repeated vertices, whereas Yen enumerates simple loopless paths; they belong to the same problem family but have different path contracts." } },
      { id: "rel-phase4-hits-related-pagerank", from: "algo-hits", type: "related_to", to: "algo-pagerank", evidenceIds: ["source-kleinberg-hits-1999", "source-hits-pagerank-framework-2001"], localizedNotes: { ko: "둘 다 링크 기반 순위 알고리즘이지만 HITS는 허브·권위의 상호 강화를, PageRank는 정규화된 랜덤 워크를 사용한다.", en: "Both rank links, but HITS uses mutual hub-authority reinforcement while PageRank uses a normalized random walk." } },
      { id: "rel-phase4-label-propagation-related-louvain", from: "algo-label-propagation-community", type: "related_to", to: "algo-louvain", evidenceIds: ["source-label-propagation-2007", "source-louvain-2008"] },
      { id: "rel-phase4-label-propagation-related-girvan-newman", from: "algo-label-propagation-community", type: "related_to", to: "algo-girvan-newman", evidenceIds: ["source-label-propagation-2007", "source-girvan-newman-2002"] },
      { id: "rel-phase4-girvan-newman-related-louvain", from: "algo-girvan-newman", type: "related_to", to: "algo-louvain", evidenceIds: ["source-girvan-newman-2002", "source-louvain-2008"] },
      { id: "rel-phase4-sais-related-doubling", from: "algo-sa-is", type: "related_to", to: "algo-suffix-array-doubling", evidenceIds: ["source-nong-sais-2009", "source-gusfield-strings"] },
      { id: "rel-phase4-dc3-related-doubling", from: "algo-dc3-skew-suffix-array", type: "related_to", to: "algo-suffix-array-doubling", evidenceIds: ["source-karkkainen-sanders-dc3-2003", "source-gusfield-strings"] },
      { id: "rel-phase4-two-way-related-boyer-moore", from: "algo-two-way-string-matching", type: "related_to", to: "algo-boyer-moore", evidenceIds: ["source-crochemore-perrin-two-way-1991", "source-boyer-moore-1977"] },
      { id: "rel-phase4-landau-vishkin-related-bitap", from: "algo-landau-vishkin", type: "related_to", to: "algo-bitap", evidenceIds: ["source-landau-vishkin-1989", "source-baeza-yates-gonnet-1992"] },
      { id: "rel-phase4-solovay-strassen-improves-fermat", from: "algo-solovay-strassen", type: "improves_upon", to: "algo-fermat-primality-test", evidenceIds: ["source-solovay-strassen-1977", "source-modern-computer-algebra-third"], localizedNotes: { ko: "오일러-야코비 조건으로 Fermat 합동보다 더 강한 합성수 판별 조건을 사용하지만 확률적 판정이라는 한계는 유지된다.", en: "Its Euler-Jacobi condition is stronger than the Fermat congruence, while the test remains probabilistic." }, treePriority: 90 },
      { id: "rel-phase4-miller-rabin-improves-fermat", from: "algo-miller-rabin", type: "improves_upon", to: "algo-fermat-primality-test", evidenceIds: ["source-miller-primality-1976", "source-rabin-primality-1980"], localizedNotes: { ko: "강한 probable-prime witness를 사용해 Fermat 판정이 통과시키는 Carmichael 수를 포함한 더 많은 합성수를 검출한다.", en: "Strong probable-prime witnesses reject many composites, including Carmichael numbers that pass a Fermat test." }, treePriority: 96 },
      { id: "rel-phase4-pollard-methods-related", from: "algo-pollard-p-minus-one", type: "related_to", to: "algo-pollard-rho", evidenceIds: ["source-pollard-1974", "source-clrs-fourth"] },
      { id: "rel-phase4-cipolla-related-tonelli-shanks", from: "algo-cipolla", type: "related_to", to: "algo-tonelli-shanks", evidenceIds: ["source-modern-computer-algebra-third", "source-tonelli-quadratic-congruences-1891"] },
      { id: "rel-phase4-garner-variant-crt", from: "algo-garner-crt", type: "variant_of", to: "algo-chinese-remainder", evidenceIds: ["source-modern-computer-algebra-third", "source-clrs-fourth"], localizedNotes: { ko: "중국인의 나머지 정리를 혼합 기수 계수로 순차 복원하는 구체적 계산 변형이다.", en: "It is a concrete mixed-radix reconstruction form of the Chinese remainder computation." }, treePriority: 88 },
      { id: "rel-phase4-arnoldi-related-lanczos", from: "algo-arnoldi-iteration", type: "related_to", to: "algo-lanczos", evidenceIds: ["source-arnoldi-lanczos-comparison-1994", "source-arnoldi-1951", "source-lanczos-1950"] },
      { id: "rel-phase4-brent-hybrid-bisection", from: "algo-brent-root-finding", type: "hybrid_of", to: "algo-bisection-root-finding", evidenceIds: ["source-brent-root-1973", "source-burden-faires-numerical-analysis"] },
      { id: "rel-phase4-brent-hybrid-secant", from: "algo-brent-root-finding", type: "hybrid_of", to: "algo-secant-root-finding", evidenceIds: ["source-brent-root-1973", "source-burden-faires-numerical-analysis"] },
      { id: "rel-phase4-huffman-improves-shannon-fano", from: "algo-huffman-coding", type: "improves_upon", to: "algo-shannon-fano-coding", evidenceIds: ["source-huffman-1952", "source-princeton-compression"], localizedNotes: { ko: "주어진 심볼 확률에서 최소 평균 길이의 정수 길이 prefix code를 보장해 Shannon-Fano의 비최적 분할 가능성을 보완한다.", en: "It guarantees a minimum-average-length integral prefix code for the given symbol probabilities, avoiding Shannon-Fano's potentially suboptimal split." }, treePriority: 94 },
      { id: "rel-phase4-rans-related-arithmetic", from: "algo-rans", type: "related_to", to: "algo-arithmetic-coding", evidenceIds: ["source-duda-ans-2013", "source-witten-arithmetic-coding-1987"] },
      { id: "rel-phase4-kirkpatrick-seidel-related-chan", from: "algo-kirkpatrick-seidel-hull", type: "related_to", to: "algo-chan-convex-hull", evidenceIds: ["source-kirkpatrick-seidel-1986", "source-chan-convex-hull-1996"] },
      { id: "rel-phase4-lawson-related-bowyer-watson", from: "algo-lawson-edge-flip", type: "related_to", to: "algo-bowyer-watson", evidenceIds: ["source-de-berg-geometry", "source-erickson-algorithms"] },
      { id: "rel-phase4-mean-shift-related-dbscan", from: "algo-mean-shift", type: "related_to", to: "algo-dbscan", evidenceIds: ["source-mean-shift-2002", "source-dbscan-1996"] },
      { id: "rel-phase4-differential-evolution-related-pso", from: "algo-differential-evolution", type: "related_to", to: "algo-particle-swarm", evidenceIds: ["source-differential-evolution-1997", "source-handbook-metaheuristics"] },
      { id: "rel-phase4-frank-wolfe-related-projected-gradient", from: "algo-frank-wolfe", type: "related_to", to: "algo-projected-gradient-descent", evidenceIds: ["source-frank-wolfe-1956", "source-boyd-convex-optimization"] },
      { id: "rel-phase4-admm-related-ista", from: "algo-admm", type: "related_to", to: "algo-ista", evidenceIds: ["source-boyd-admm-2011", "source-ista-2004"] },
      { id: "rel-phase4-jacobi-related-gauss-seidel", from: "algo-jacobi-iteration", type: "related_to", to: "algo-gauss-seidel", evidenceIds: ["source-burden-faires-numerical-analysis", "source-netlib-templates"] },
      { id: "rel-phase4-karger-related-stoer-wagner", from: "algo-karger-min-cut", type: "related_to", to: "algo-stoer-wagner-min-cut", evidenceIds: ["source-karger-min-cut-1993", "source-stoer-wagner-1997"] },
      { id: "rel-phase4-bitonic-related-odd-even", from: "algo-bitonic-sort", type: "related_to", to: "algo-odd-even-merge-sort", evidenceIds: ["source-batcher-sorting-networks-1968"] },
      { id: "rel-phase4-aead-comparison", from: "algo-aes-gcm", type: "related_to", to: "algo-chacha20-poly1305", evidenceIds: ["source-nist-sp800-38d", "source-rfc-8439"] }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
