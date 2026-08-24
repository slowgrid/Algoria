(function registerAlgoriaWave180PrimaryHierarchy(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  const groups = [
    ["view-wave180-group-sorting", "view-algorithms-sorting", "Gap-Based Sorting", "간격 기반 정렬"],
    ["view-wave180-group-searching", "view-algorithms-searching", "Advanced Selection", "고급 선택"],
    ["view-wave180-group-graph", "view-algorithms-graph", "Directed Paths & Structure", "유향 경로·구조"],
    ["view-wave180-group-string", "view-algorithms-string", "Advanced String Processing", "고급 문자열 처리"],
    ["view-wave180-group-mathematics", "view-algorithms-mathematics", "Numerical Evaluation", "수치 계산·평가"],
    ["view-wave180-group-cryptography", "view-algorithms-cryptography", "Passwords & Signatures", "비밀번호·전자서명"],
    ["view-wave180-group-compression", "view-algorithms-compression", "Advanced Dictionary Coding", "고급 사전 부호화"],
    ["view-wave180-group-geometry", "view-algorithms-computational-geometry", "Hull, Clipping & Triangulation", "껍질·클리핑·삼각분할"],
    ["view-wave180-group-machine-learning", "view-algorithms-machine-learning", "Trees, Ensembles & Projections", "트리·앙상블·투영"],
    ["view-wave180-group-optimization", "view-algorithms-optimization", "Large-Scale & Composite", "대규모·복합 최적화"]
  ];

  const rows = [
    ["algo-comb-sort", "view-wave180-group-sorting"],
    ["algo-floyd-rivest-selection", "view-wave180-group-searching"],
    ["algo-dfs-topological-sort", "view-wave180-group-graph"], ["algo-warshall-transitive-closure", "view-wave180-group-graph"],
    ["algo-spfa", "view-wave180-group-graph"], ["algo-chu-liu-edmonds", "view-wave180-group-graph"],
    ["algo-fleury", "view-wave180-group-graph"], ["algo-tarjan-offline-lca", "view-wave180-group-graph"],
    ["algo-kasai-lcp", "view-wave180-group-string"], ["algo-horspool-string-matching", "view-wave180-group-string"],
    ["algo-hirschberg-sequence-alignment", "view-wave180-group-string"], ["algo-booth-minimum-rotation", "view-wave180-group-string"],
    ["algo-bisection-root-finding", "view-wave180-group-mathematics"], ["algo-secant-root-finding", "view-wave180-group-mathematics"],
    ["algo-horner", "view-wave180-group-mathematics"], ["algo-power-iteration", "view-wave180-group-mathematics"],
    ["algo-scrypt", "view-wave180-group-cryptography"], ["algo-bcrypt", "view-wave180-group-cryptography"], ["algo-ecdsa", "view-wave180-group-cryptography"],
    ["algo-lzma", "view-wave180-group-compression"],
    ["algo-chan-convex-hull", "view-wave180-group-geometry"], ["algo-cohen-sutherland", "view-wave180-group-geometry"], ["algo-ear-clipping-triangulation", "view-wave180-group-geometry"],
    ["algo-cart", "view-wave180-group-machine-learning"], ["algo-gradient-boosting", "view-wave180-group-machine-learning"],
    ["algo-pca-svd", "view-wave180-group-machine-learning"], ["algo-k-means-plus-plus", "view-wave180-group-machine-learning"],
    ["algo-l-bfgs", "view-wave180-group-optimization"], ["algo-ista", "view-wave180-group-optimization"], ["algo-fista", "view-wave180-group-optimization"]
  ];

  registry.registerPart({
    id: "hierarchy-wave180-primary",
    hierarchy: {
      nodes: [
        ...groups.map(([id, parentId, en, ko], index) => ({
          id, parentId, kind: "group", label: en,
          localizedLabels: { en, ko }, order: 200 + index * 10
        })),
        ...rows.map(([entityId, parentId], index) => ({
        id: `view-wave180-primary-${entityId}`,
        parentId,
        kind: "entity",
        entityId,
        primaryForSearch: true,
        order: 200 + index * 10
        }))
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
