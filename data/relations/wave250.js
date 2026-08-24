(function registerAlgoriaWave250Relations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaWave250Catalog;
  if (!registry || !catalog) {
    throw new Error("Wave 250 relations require the registry and catalog.");
  }

  const relations = [];
  for (const item of catalog.items) {
    const slug = item.id.slice(5);
    relations.push({ id: `rel-wave250-${slug}-solves`, from: item.id, type: "solves", to: item.problem });
    relations.push({ id: `rel-wave250-${slug}-technique`, from: item.id, type: "uses_technique", to: item.technique });
    if (item.ds) relations.push({ id: `rel-wave250-${slug}-data-structure`, from: item.id, type: "uses_data_structure", to: item.ds });
    relations.push({ id: `rel-wave250-${slug}-domain`, from: item.id, type: "belongs_to_domain", to: item.domain });
  }

  relations.push(
    {
      id: "rel-wave250-smoothsort-variant-heap-sort", from: "algo-smoothsort", type: "variant_of", to: "algo-heap-sort",
      evidenceIds: ["source-dijkstra-smoothsort-1981", "source-skiena-algorithm-design-manual"], treePriority: 86
    },
    {
      id: "rel-wave250-introselect-variant-quickselect", from: "algo-introselect", type: "variant_of", to: "algo-quickselect",
      evidenceIds: ["source-musser-introsort-1997", "source-skiena-algorithm-design-manual"], treePriority: 94
    },
    {
      id: "rel-wave250-karger-stein-improves-karger", from: "algo-karger-stein", type: "improves_upon", to: "algo-karger-min-cut",
      evidenceIds: ["source-karger-stein-1996", "source-karger-min-cut-1993"],
      localizedNotes: { ko: "부분 축약을 두 갈래로 재귀 수행해 단일 무작위 축약보다 성공 확률을 높인다.", en: "Two recursive partial contractions improve the success probability over a single contraction run." }, treePriority: 98
    },
    {
      id: "rel-wave250-bidirectional-bfs-variant-bfs", from: "algo-bidirectional-bfs", type: "variant_of", to: "algo-breadth-first-search",
      evidenceIds: ["source-clrs-fourth", "source-skiena-algorithm-design-manual"], treePriority: 88
    },
    {
      id: "rel-wave250-iddfs-variant-dfs", from: "algo-iterative-deepening-dfs", type: "variant_of", to: "algo-depth-first-search",
      evidenceIds: ["source-clrs-fourth", "source-skiena-algorithm-design-manual"], treePriority: 84
    },
    {
      id: "rel-wave250-myers-improves-levenshtein", from: "algo-myers-bit-vector-edit-distance", type: "improves_upon", to: "algo-levenshtein-distance",
      evidenceIds: ["source-myers-bit-vector-1999", "source-levenshtein-1966"],
      localizedNotes: { ko: "편집거리 DP의 한 열을 비트 벡터로 묶어 워드 단위 병렬성을 활용한다.", en: "It packs an edit-distance DP column into bit vectors to exploit word-level parallelism." }, treePriority: 92
    },
    {
      id: "rel-wave250-rsa-oaep-variant-rsa", from: "algo-rsa-oaep", type: "variant_of", to: "algo-rsa",
      evidenceIds: ["source-rfc-8017-wave250", "source-rfc-8017"], treePriority: 94
    },
    {
      id: "rel-wave250-rsa-pss-variant-rsa", from: "algo-rsa-pss", type: "variant_of", to: "algo-rsa",
      evidenceIds: ["source-rfc-8017-wave250", "source-rfc-8017"], treePriority: 92
    },
    {
      id: "rel-wave250-chacha20-poly1305-hybrid-chacha20", from: "algo-chacha20-poly1305", type: "hybrid_of", to: "algo-chacha20",
      evidenceIds: ["source-rfc-8439"]
    },
    {
      id: "rel-wave250-aes-gcm-hybrid-aes", from: "algo-aes-gcm", type: "hybrid_of", to: "algo-aes",
      evidenceIds: ["source-nist-sp800-38d"]
    },
    {
      id: "rel-wave250-rice-variant-golomb", from: "algo-rice-coding", type: "variant_of", to: "algo-golomb-coding",
      evidenceIds: ["source-golomb-1966", "source-princeton-compression"], treePriority: 90
    },
    {
      id: "rel-wave250-lzss-variant-lz77", from: "algo-lzss", type: "variant_of", to: "algo-lz77",
      evidenceIds: ["source-storer-szymanski-lzss-1982", "source-lz77-1977"], treePriority: 90
    },
    {
      id: "rel-wave250-xgboost-improves-gradient-boosting", from: "algo-xgboost", type: "improves_upon", to: "algo-gradient-boosting",
      evidenceIds: ["source-xgboost-2016", "source-elements-statistical-learning"],
      localizedNotes: { ko: "정규화 목적함수와 희소 인식·병렬 학습 시스템으로 트리 부스팅을 확장한다.", en: "It extends tree boosting with a regularized objective and a sparsity-aware parallel learning system." }, treePriority: 96
    },
    {
      id: "rel-wave250-projected-gradient-variant-gradient-descent", from: "algo-projected-gradient-descent", type: "variant_of", to: "algo-gradient-descent",
      evidenceIds: ["source-boyd-convex-optimization"], treePriority: 86
    },
    {
      id: "rel-wave250-spectral-clustering-related-kmeans", from: "algo-spectral-clustering", type: "related_to", to: "algo-k-means",
      evidenceIds: ["source-elements-statistical-learning"]
    }
  );

  registry.registerPart({ id: "relations-wave250", relations });
})(typeof window !== "undefined" ? window : globalThis);
