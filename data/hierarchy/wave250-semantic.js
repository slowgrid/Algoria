(function registerAlgoriaWave250SemanticHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaWave250Catalog;
  if (!registry || !catalog) {
    throw new Error("Wave 250 semantic hierarchy requires the registry and catalog.");
  }

  const conceptRows = [
    ["problem-dominator-tree", "view-group-problems-graph-connectivity-structure"],
    ["problem-elementary-cycle-enumeration", "view-group-problems-graph-paths-traversal"],
    ["problem-string-index-construction", "view-group-problems-strings-pattern-structure"],
    ["problem-lyndon-factorization", "view-group-problems-strings-pattern-structure"],
    ["problem-approximate-string-matching", "view-group-problems-strings-distance-alignment"],
    ["problem-discrete-logarithm", "view-group-problems-arithmetic-number-theory"],
    ["problem-discrete-transform", "view-group-problems-linear-algebra-numerical"],
    ["problem-authenticated-encryption", "view-group-problems-cryptography"],
    ["problem-public-key-encryption", "view-group-problems-cryptography"],
    ["problem-secret-sharing", "view-group-problems-cryptography"],
    ["problem-key-encapsulation", "view-group-problems-cryptography"],
    ["problem-integer-compression", "view-group-problems-compression"],
    ["problem-quality-mesh-generation", "view-group-problems-geometry"],
    ["problem-bezier-curve-evaluation", "view-group-problems-geometry"],
    ["problem-anomaly-detection", "view-group-problems-learning"],
    ["problem-black-box-optimization", "view-group-problems-optimization"],
    ["problem-constrained-convex-optimization", "view-group-problems-optimization"],
    ["problem-nonlinear-least-squares", "view-group-problems-optimization"],
    ["problem-constrained-optimization", "view-group-problems-optimization"],
    ["problem-traveling-salesperson", "view-group-problems-optimization"],
    ["technique-adaptive-heap-ordering", "view-group-techniques-data-access-ordering"],
    ["technique-sorting-network", "view-group-techniques-data-access-ordering"],
    ["technique-hybrid-selection", "view-group-techniques-data-access-ordering"],
    ["technique-randomized-contraction", "view-group-techniques-graph-methods"],
    ["technique-module-lattice", "view-group-techniques-cryptographic-constructions"],
    ["technique-population-search", "view-group-techniques-search-optimization"],
    ["technique-conditional-gradient", "view-group-techniques-search-optimization"],
    ["technique-operator-splitting", "view-group-techniques-search-optimization"]
  ];
  const newConceptIds = new Set(conceptRows.map(([entityId]) => entityId));

  const primaryOverrides = {
    "problem-global-min-cut": "view-wave150-problem-global-min-cut",
    "problem-k-shortest-paths": "view-phase3-problem-k-shortest-paths",
    "problem-community-detection": "view-phase3-problem-community-detection",
    "problem-suffix-ordering": "view-phase3-problem-suffix-ordering",
    "problem-integer-factorization": "view-phase3-problem-integer-factorization",
    "problem-modular-square-root": "view-wave150-problem-modular-square-root",
    "problem-simultaneous-congruences": "view-phase3-problem-simultaneous-congruences",
    "problem-dominant-eigenpair": "view-wave180-concept-problem-dominant-eigenpair",
    "problem-root-finding": "view-phase3-problem-root-finding",
    "problem-message-authentication": "view-wave150-problem-message-authentication",
    "problem-digital-signature": "view-phase3-problem-digital-signature",
    "problem-point-in-polygon": "view-phase3-problem-point-in-polygon",
    "problem-polygon-clipping": "view-wave150-problem-polygon-clipping",
    "problem-line-clipping": "view-wave180-concept-problem-line-clipping",
    "problem-planar-triangulation": "view-phase3-problem-planar-triangulation",
    "problem-dimensionality-reduction": "view-wave180-concept-problem-dimensionality-reduction",
    "problem-ensemble-classification": "view-phase3-problem-ensemble-classification",
    "problem-global-optimization": "view-phase3-problem-global-optimization",
    "technique-depth-first-traversal": "view-wave150-technique-depth-first-traversal",
    "technique-backtracking": "view-phase3-technique-backtracking",
    "technique-incremental": "view-phase3-technique-incremental",
    "technique-bit-parallelism": "view-wave150-technique-bit-parallelism",
    "technique-krylov-subspace": "view-wave150-technique-krylov-subspace",
    "technique-orthogonal-transformation": "view-wave150-technique-orthogonal-transformation",
    "technique-stochastic-gradient": "view-wave150-technique-stochastic-gradient",
    "technique-boosting": "view-wave150-technique-boosting",
    "technique-proximal-gradient": "view-wave180-concept-technique-proximal-gradient",
    "ds-binary-search-tree": "view-phase3-ds-binary-search-tree",
    "ds-adjacency-list": "view-phase3-ds-adjacency-list",
    "ds-disjoint-set-forest": "view-phase3-ds-disjoint-set-forest",
    "ds-adjacency-matrix": "view-phase3-ds-adjacency-matrix",
    "ds-suffix-array": "view-phase3-ds-suffix-array",
    "ds-matrix": "view-phase3-ds-matrix",
    "ds-linked-list": "view-phase3-ds-linked-list",
    "domain-numerical-computing": "view-phase3-domain-numerical-computing"
  };

  function primaryViewFor(entityId) {
    if (newConceptIds.has(entityId)) return `view-wave250-concept-${entityId}`;
    if (primaryOverrides[entityId]) return primaryOverrides[entityId];
    if (entityId.startsWith("problem-")) return `view-problem-${entityId.slice(8)}`;
    if (entityId.startsWith("technique-")) return `view-technique-${entityId.slice(10)}`;
    if (entityId.startsWith("ds-")) return `view-ds-${entityId.slice(3)}`;
    if (entityId.startsWith("domain-")) return `view-domain-${entityId.slice(7)}`;
    throw new Error(`Unsupported Wave 250 semantic target: ${entityId}`);
  }

  const nodes = conceptRows.map(([entityId, parentId], index) => ({
    id: `view-wave250-concept-${entityId}`,
    parentId,
    kind: "entity",
    entityId,
    primaryForSearch: true,
    order: 300 + index * 10
  }));
  const branchNames = ["problem", "technique", "data-structure", "domain"];
  const targetsByItem = catalog.items.map((item) => [item.id, item.problem, item.technique, item.ds, item.domain]);
  const targetCounts = new Map();
  for (const row of targetsByItem) {
    for (const targetId of row.slice(1).filter(Boolean)) {
      targetCounts.set(targetId, (targetCounts.get(targetId) || 0) + 1);
    }
  }

  const groupIdsByTarget = new Map();
  for (const [targetId, count] of targetCounts) {
    const groupCount = Math.ceil(count / 8);
    const groupIds = [];
    for (let groupIndex = 0; groupIndex < groupCount; groupIndex += 1) {
      const suffix = groupCount > 1 ? `-${groupIndex + 1}` : "";
      const groupId = `view-wave250-more-${targetId}${suffix}`;
      groupIds.push(groupId);
      nodes.push({
        id: groupId,
        parentId: primaryViewFor(targetId),
        kind: "group",
        searchable: false,
        label: groupCount > 1 ? `Wave 250 Algorithms ${groupIndex + 1}` : "Wave 250 Algorithms",
        localizedLabels: {
          en: groupCount > 1 ? `Wave 250 Algorithms ${groupIndex + 1}` : "Wave 250 Algorithms",
          ko: groupCount > 1 ? `Wave 250 알고리즘 ${groupIndex + 1}` : "Wave 250 알고리즘"
        },
        order: 300 + groupIndex * 10
      });
    }
    groupIdsByTarget.set(targetId, groupIds);
  }

  const seenByTarget = new Map();
  for (const row of targetsByItem) {
    const algorithmId = row[0];
    row.slice(1).forEach((targetId, branchIndex) => {
      if (!targetId) return;
      const seen = seenByTarget.get(targetId) || 0;
      seenByTarget.set(targetId, seen + 1);
      nodes.push({
        id: `view-wave250-${branchNames[branchIndex]}-${algorithmId}`,
        parentId: groupIdsByTarget.get(targetId)[Math.floor(seen / 8)],
        kind: "entity",
        entityId: algorithmId,
        order: 300 + (seen % 8) * 10
      });
    });
  }

  registry.registerPart({ id: "hierarchy-wave250-semantic", hierarchy: { nodes } });
})(typeof window !== "undefined" ? window : globalThis);
