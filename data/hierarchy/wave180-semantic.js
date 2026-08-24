(function registerAlgoriaWave180SemanticHierarchy(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  const conceptNodes = [
    ["problem-transitive-closure", "view-group-problems-graph-connectivity-structure"],
    ["problem-minimum-arborescence", "view-group-problems-graph-connectivity-structure"],
    ["problem-lowest-common-ancestor", "view-group-problems-graph-paths-traversal"],
    ["problem-lcp-array-construction", "view-group-problems-strings-pattern-structure"],
    ["problem-minimal-string-rotation", "view-group-problems-strings-pattern-structure"],
    ["problem-polynomial-evaluation", "view-group-problems-arithmetic-number-theory"],
    ["problem-dominant-eigenpair", "view-group-problems-linear-algebra-numerical"],
    ["problem-line-clipping", "view-group-problems-geometry"],
    ["problem-dimensionality-reduction", "view-group-problems-learning"],
    ["technique-gap-reduction", "view-group-techniques-data-access-ordering"],
    ["technique-offline-union-find", "view-group-techniques-graph-methods"],
    ["technique-nested-evaluation", "view-group-techniques-mathematics-geometry"],
    ["technique-region-coding", "view-group-techniques-mathematics-geometry"],
    ["technique-proximal-gradient", "view-group-techniques-search-optimization"],
    ["technique-accelerated-proximal-gradient", "view-group-techniques-search-optimization"]
  ];
  const targetView = new Map([
    ["problem-sorting", "view-problem-sorting"], ["problem-selection", "view-problem-selection"],
    ["problem-topological-ordering", "view-problem-topological-ordering"], ["problem-shortest-path", "view-problem-shortest-path"],
    ["problem-eulerian-trail", "view-phase3-problem-eulerian-trail"], ["problem-string-matching", "view-problem-string-matching"],
    ["problem-global-sequence-alignment", "view-problem-global-sequence-alignment"], ["problem-root-finding", "view-phase3-problem-root-finding"],
    ["problem-password-hashing", "view-problem-password-hashing"], ["problem-digital-signature", "view-phase3-problem-digital-signature"],
    ["problem-lossless-compression", "view-problem-lossless-compression"], ["problem-convex-hull", "view-problem-convex-hull"],
    ["problem-planar-triangulation", "view-phase3-problem-planar-triangulation"], ["problem-supervised-classification", "view-problem-supervised-classification"],
    ["problem-ensemble-classification", "view-phase3-problem-ensemble-classification"], ["problem-clustering", "view-problem-clustering"],
    ["problem-continuous-optimization", "view-problem-continuous-optimization"],
    ["technique-randomized", "view-technique-randomized"], ["technique-depth-first-traversal", "view-wave150-technique-depth-first-traversal"],
    ["technique-dynamic-programming", "view-technique-dynamic-programming"], ["technique-iterative-refinement", "view-technique-iterative-refinement"],
    ["technique-greedy", "view-technique-greedy"], ["technique-preprocessing", "view-technique-preprocessing"],
    ["technique-divide-and-conquer", "view-technique-divide-and-conquer"], ["technique-decrease-and-conquer", "view-technique-decrease-and-conquer"],
    ["technique-memory-hard", "view-technique-memory-hard"], ["technique-adaptive", "view-technique-adaptive"],
    ["technique-elliptic-curve", "view-technique-elliptic-curve"], ["technique-dictionary-coding", "view-technique-dictionary-coding"],
    ["technique-incremental", "view-phase3-technique-incremental"], ["technique-decision-tree-learning", "view-technique-decision-tree-learning"],
    ["technique-boosting", "view-wave150-technique-boosting"], ["technique-orthogonal-transformation", "view-wave150-technique-orthogonal-transformation"],
    ["technique-quasi-newton", "view-wave150-technique-quasi-newton"],
    ["ds-array", "view-ds-array"], ["ds-stack", "view-ds-stack"], ["ds-adjacency-matrix", "view-phase3-ds-adjacency-matrix"],
    ["ds-queue", "view-ds-queue"], ["ds-adjacency-list", "view-phase3-ds-adjacency-list"],
    ["ds-disjoint-set-forest", "view-phase3-ds-disjoint-set-forest"], ["ds-suffix-array", "view-phase3-ds-suffix-array"],
    ["ds-matrix", "view-phase3-ds-matrix"], ["ds-linked-list", "view-phase3-ds-linked-list"],
    ["ds-binary-search-tree", "view-phase3-ds-binary-search-tree"],
    ["domain-data-processing", "view-domain-data-processing"], ["domain-graph", "view-domain-graph"], ["domain-string", "view-domain-string"],
    ["domain-numerical-computing", "view-phase3-domain-numerical-computing"], ["domain-mathematics", "view-domain-mathematics"],
    ["domain-cryptography", "view-domain-cryptography"], ["domain-compression", "view-domain-compression"],
    ["domain-computational-geometry", "view-domain-computational-geometry"], ["domain-machine-learning", "view-domain-machine-learning"],
    ["domain-optimization", "view-domain-optimization"]
  ]);
  for (const [conceptId] of conceptNodes) targetView.set(conceptId, `view-wave180-concept-${conceptId}`);

  const rows = [
    ["algo-comb-sort", "problem-sorting", "technique-gap-reduction", "ds-array", "domain-data-processing"], ["algo-floyd-rivest-selection", "problem-selection", "technique-randomized", "ds-array", "domain-data-processing"],
    ["algo-dfs-topological-sort", "problem-topological-ordering", "technique-depth-first-traversal", "ds-stack", "domain-graph"], ["algo-warshall-transitive-closure", "problem-transitive-closure", "technique-dynamic-programming", "ds-adjacency-matrix", "domain-graph"],
    ["algo-spfa", "problem-shortest-path", "technique-iterative-refinement", "ds-queue", "domain-graph"], ["algo-chu-liu-edmonds", "problem-minimum-arborescence", "technique-greedy", "ds-adjacency-list", "domain-graph"],
    ["algo-fleury", "problem-eulerian-trail", "technique-greedy", "ds-adjacency-list", "domain-graph"], ["algo-tarjan-offline-lca", "problem-lowest-common-ancestor", "technique-offline-union-find", "ds-disjoint-set-forest", "domain-graph"],
    ["algo-kasai-lcp", "problem-lcp-array-construction", "technique-preprocessing", "ds-suffix-array", "domain-string"], ["algo-horspool-string-matching", "problem-string-matching", "technique-preprocessing", "ds-array", "domain-string"],
    ["algo-hirschberg-sequence-alignment", "problem-global-sequence-alignment", "technique-divide-and-conquer", "ds-array", "domain-string"], ["algo-booth-minimum-rotation", "problem-minimal-string-rotation", "technique-preprocessing", "ds-array", "domain-string"],
    ["algo-bisection-root-finding", "problem-root-finding", "technique-decrease-and-conquer", null, "domain-numerical-computing"], ["algo-secant-root-finding", "problem-root-finding", "technique-iterative-refinement", null, "domain-numerical-computing"],
    ["algo-horner", "problem-polynomial-evaluation", "technique-nested-evaluation", "ds-array", "domain-mathematics"], ["algo-power-iteration", "problem-dominant-eigenpair", "technique-iterative-refinement", "ds-matrix", "domain-numerical-computing"],
    ["algo-scrypt", "problem-password-hashing", "technique-memory-hard", "ds-array", "domain-cryptography"], ["algo-bcrypt", "problem-password-hashing", "technique-adaptive", "ds-array", "domain-cryptography"],
    ["algo-ecdsa", "problem-digital-signature", "technique-elliptic-curve", "ds-array", "domain-cryptography"], ["algo-lzma", "problem-lossless-compression", "technique-dictionary-coding", "ds-array", "domain-compression"],
    ["algo-chan-convex-hull", "problem-convex-hull", "technique-divide-and-conquer", "ds-array", "domain-computational-geometry"], ["algo-cohen-sutherland", "problem-line-clipping", "technique-region-coding", "ds-array", "domain-computational-geometry"],
    ["algo-ear-clipping-triangulation", "problem-planar-triangulation", "technique-incremental", "ds-linked-list", "domain-computational-geometry"], ["algo-cart", "problem-supervised-classification", "technique-decision-tree-learning", "ds-binary-search-tree", "domain-machine-learning"],
    ["algo-gradient-boosting", "problem-ensemble-classification", "technique-boosting", "ds-array", "domain-machine-learning"], ["algo-pca-svd", "problem-dimensionality-reduction", "technique-orthogonal-transformation", "ds-matrix", "domain-machine-learning"],
    ["algo-k-means-plus-plus", "problem-clustering", "technique-randomized", "ds-array", "domain-machine-learning"], ["algo-l-bfgs", "problem-continuous-optimization", "technique-quasi-newton", "ds-array", "domain-optimization"],
    ["algo-ista", "problem-continuous-optimization", "technique-proximal-gradient", "ds-array", "domain-optimization"], ["algo-fista", "problem-continuous-optimization", "technique-accelerated-proximal-gradient", "ds-array", "domain-optimization"]
  ];
  const nodes = conceptNodes.map(([entityId, parentId], index) => ({ id: `view-wave180-concept-${entityId}`, parentId, kind: "entity", entityId, primaryForSearch: true, order: 200 + index * 10 }));
  const branchNames = ["problem", "technique", "data-structure", "domain"];
  const usedTargets = new Set(rows.flatMap((row) => row.slice(1).filter(Boolean)));
  const targetCounts = new Map();
  for (const row of rows) for (const targetId of row.slice(1).filter(Boolean)) targetCounts.set(targetId, (targetCounts.get(targetId) || 0) + 1);
  const targetGroup = new Map();
  for (const targetId of usedTargets) {
    const groupIds = [];
    const groupCount = Math.ceil(targetCounts.get(targetId) / 8);
    for (let groupIndex = 0; groupIndex < groupCount; groupIndex += 1) {
      const suffix = groupCount > 1 ? `-${groupIndex + 1}` : "";
      const groupId = `view-wave180-more-${targetId}${suffix}`;
      groupIds.push(groupId);
      nodes.push({
        id: groupId,
        parentId: targetView.get(targetId),
        kind: "group",
        searchable: false,
        label: groupCount > 1 ? `More Algorithms ${groupIndex + 1}` : "More Algorithms",
        localizedLabels: {
          en: groupCount > 1 ? `More Algorithms ${groupIndex + 1}` : "More Algorithms",
          ko: groupCount > 1 ? `추가 알고리즘 ${groupIndex + 1}` : "추가 알고리즘"
        },
        order: 200 + groupIndex * 10
      });
    }
    targetGroup.set(targetId, groupIds);
  }
  const targetSeen = new Map();
  for (const row of rows) {
    const algorithmId = row[0];
    row.slice(1).forEach((targetId, index) => {
      if (!targetId) return;
      const seen = targetSeen.get(targetId) || 0;
      targetSeen.set(targetId, seen + 1);
      nodes.push({ id: `view-wave180-${branchNames[index]}-${algorithmId}`, parentId: targetGroup.get(targetId)[Math.floor(seen / 8)], kind: "entity", entityId: algorithmId, order: 200 + (seen % 8) * 10 });
    });
  }
  registry.registerPart({ id: "hierarchy-wave180-semantic", hierarchy: { nodes } });
})(typeof window !== "undefined" ? window : globalThis);
