(function registerAlgoriaPhase5SemanticHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaPhase5Catalog;
  if (!registry || !catalog) throw new Error("Phase 5 catalog must be loaded first.");

  const conceptGroups = [
    ["view-phase5-problems-database", "view-type-problems", "Database & External Memory", "데이터베이스·외부 메모리", 310],
    ["view-phase5-problems-distributed", "view-type-problems", "Distributed Coordination", "분산 조정", 320],
    ["view-phase5-problems-streaming", "view-type-problems", "Streaming Summaries", "스트리밍 요약", 330],
    ["view-phase5-problems-bioinformatics", "view-type-problems", "Bioinformatics", "생물정보학", 340],
    ["view-phase5-techniques-database", "view-type-techniques", "Database Processing", "데이터베이스 처리", 310],
    ["view-phase5-techniques-distributed", "view-type-techniques", "Distributed Coordination", "분산 조정", 320],
    ["view-phase5-techniques-streaming", "view-type-techniques", "Streaming Summaries", "스트리밍 요약", 330],
    ["view-phase5-techniques-bioinformatics", "view-type-techniques", "Bioinformatics Methods", "생물정보학 방법", 340]
  ];

  const conceptRows = [
    ["problem-database-join", "view-phase5-problems-database"],
    ["problem-external-run-generation", "view-phase5-problems-database"],
    ["problem-distributed-consensus", "view-phase5-problems-distributed"],
    ["problem-distributed-snapshot", "view-phase5-problems-distributed"],
    ["problem-distributed-mutual-exclusion", "view-phase5-problems-distributed"],
    ["problem-leader-election", "view-phase5-problems-distributed"],
    ["problem-stream-sampling", "view-phase5-problems-streaming"],
    ["problem-heavy-hitters", "view-phase5-problems-streaming"],
    ["problem-cardinality-estimation", "view-phase5-problems-streaming"],
    ["problem-stream-quantiles", "view-phase5-problems-streaming"],
    ["problem-phylogenetic-tree", "view-phase5-problems-bioinformatics"],
    ["problem-rna-secondary-structure", "view-phase5-problems-bioinformatics"],
    ["technique-block-processing", "view-phase5-techniques-database"],
    ["technique-sort-merge", "view-phase5-techniques-database"],
    ["technique-hash-partitioning", "view-phase5-techniques-database"],
    ["technique-run-generation", "view-phase5-techniques-database"],
    ["technique-quorum-consensus", "view-phase5-techniques-distributed"],
    ["technique-marker-recording", "view-phase5-techniques-distributed"],
    ["technique-logical-clock-ordering", "view-phase5-techniques-distributed"],
    ["technique-failure-election", "view-phase5-techniques-distributed"],
    ["technique-randomized-online", "view-phase5-techniques-streaming"],
    ["technique-counter-reduction", "view-phase5-techniques-streaming"],
    ["technique-probabilistic-sketching", "view-phase5-techniques-streaming"],
    ["technique-level-compaction", "view-phase5-techniques-streaming"],
    ["technique-agglomerative-clustering", "view-phase5-techniques-bioinformatics"],
    ["technique-backward-search", "view-phase5-techniques-bioinformatics"]
  ];

  const nodes = conceptGroups.map(([id, parentId, en, ko, order]) => ({ id, parentId, kind: "group", label: en, localizedLabels: { en, ko }, order }));
  conceptRows.forEach(([entityId, parentId], index) => {
    nodes.push({ id: `view-phase5-concept-${entityId}`, parentId, kind: "entity", entityId, primaryForSearch: true, order: 10 + index * 10 });
  });

  const domains = [
    ["domain-database", "Database Systems", "데이터베이스", 310],
    ["domain-distributed-systems", "Distributed Systems", "분산 시스템", 320],
    ["domain-data-streaming", "Data Streaming", "데이터 스트리밍", 330]
  ];
  domains.forEach(([entityId, en, ko, order]) => {
    nodes.push({ id: `view-phase5-concept-${entityId}`, parentId: "view-type-domains", kind: "entity", entityId, primaryForSearch: true, order });
  });

  const existingPrimaryViews = {
    "problem-global-sequence-alignment": "view-problem-global-sequence-alignment",
    "problem-string-matching": "view-problem-string-matching",
    "technique-dynamic-programming": "view-technique-dynamic-programming",
    "ds-array": "view-ds-array",
    "ds-hash-table": "view-ds-hash-table",
    "ds-heap": "view-ds-heap",
    "ds-queue": "view-ds-queue",
    "ds-matrix": "view-phase3-ds-matrix",
    "ds-suffix-array": "view-phase3-ds-suffix-array",
    "domain-bioinformatics": "view-domain-bioinformatics"
  };
  function primaryView(targetId) {
    return existingPrimaryViews[targetId] || `view-phase5-concept-${targetId}`;
  }

  const placements = catalog.items.flatMap((spec) => [
    { algorithmId: spec.id, targetId: spec.problem, branch: "problem" },
    { algorithmId: spec.id, targetId: spec.technique, branch: "technique" },
    { algorithmId: spec.id, targetId: spec.ds, branch: "data-structure" },
    { algorithmId: spec.id, targetId: spec.domain, branch: "domain" }
  ]).filter((placement) => placement.targetId);
  const byTarget = new Map();
  for (const placement of placements) {
    if (!byTarget.has(placement.targetId)) byTarget.set(placement.targetId, []);
    byTarget.get(placement.targetId).push(placement.algorithmId);
  }

  const groupFor = new Map();
  for (const [targetId, algorithmIds] of byTarget) {
    const groupIds = [];
    for (let offset = 0; offset < algorithmIds.length; offset += 8) {
      const index = offset / 8;
      const suffix = algorithmIds.length > 8 ? `-${index + 1}` : "";
      const groupId = `view-phase5-more-${targetId}${suffix}`;
      groupIds.push(groupId);
      nodes.push({
        id: groupId,
        parentId: primaryView(targetId),
        kind: "group",
        searchable: false,
        label: algorithmIds.length > 8 ? `Phase 5 Algorithms ${index + 1}` : "Phase 5 Algorithms",
        localizedLabels: {
          en: algorithmIds.length > 8 ? `Phase 5 Algorithms ${index + 1}` : "Phase 5 Algorithms",
          ko: algorithmIds.length > 8 ? `Phase 5 알고리즘 ${index + 1}` : "Phase 5 알고리즘"
        },
        order: 400 + index * 10
      });
    }
    groupFor.set(targetId, groupIds);
  }

  const seen = new Map();
  for (const { algorithmId, targetId, branch } of placements) {
    const count = seen.get(targetId) || 0;
    seen.set(targetId, count + 1);
    nodes.push({
      id: `view-phase5-${branch}-${algorithmId}`,
      parentId: groupFor.get(targetId)[Math.floor(count / 8)],
      kind: "entity",
      entityId: algorithmId,
      order: 10 + (count % 8) * 10
    });
  }

  registry.registerPart({ id: "hierarchy-systems-phase5-semantic", hierarchy: { nodes } });
})(typeof window !== "undefined" ? window : globalThis);
