(function registerAlgoriaPhase5PrimaryHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaPhase5Catalog;
  if (!registry || !catalog) throw new Error("Phase 5 catalog must be loaded first.");

  const areaMeta = {
    database: { parentId: "view-phase5-algorithms-systems-data", en: "Database Algorithms", ko: "데이터베이스 알고리즘", order: 10 },
    distributed: { parentId: "view-phase5-algorithms-systems-data", en: "Distributed Algorithms", ko: "분산 알고리즘", order: 20 },
    streaming: { parentId: "view-phase5-algorithms-systems-data", en: "Streaming Algorithms", ko: "스트리밍 알고리즘", order: 30 },
    bioinformatics: { parentId: "view-phase5-algorithms-bioinformatics-root", en: "Sequence & Phylogeny", ko: "서열·계통 분석", order: 10 }
  };

  const nodes = [
    { id: "view-phase5-algorithms-systems-data", parentId: "view-type-algorithms", kind: "group", label: "Systems & Data", localizedLabels: { en: "Systems & Data", ko: "시스템·데이터" }, order: 110 },
    { id: "view-phase5-algorithms-bioinformatics-root", parentId: "view-type-algorithms", kind: "group", label: "Bioinformatics", localizedLabels: { en: "Bioinformatics", ko: "생물정보학" }, order: 120 }
  ];

  for (const [area, meta] of Object.entries(areaMeta)) {
    const groupId = `view-phase5-algorithms-${area}`;
    nodes.push({ id: groupId, parentId: meta.parentId, kind: "group", label: meta.en, localizedLabels: { en: meta.en, ko: meta.ko }, order: meta.order });
    catalog.items.filter((spec) => spec.area === area).forEach((spec, index) => {
      nodes.push({
        id: `view-phase5-primary-${spec.id}`,
        parentId: groupId,
        kind: "entity",
        entityId: spec.id,
        primaryForSearch: true,
        order: 10 + index * 10
      });
    });
  }

  registry.registerPart({ id: "hierarchy-systems-phase5-primary", hierarchy: { nodes } });
})(typeof window !== "undefined" ? window : globalThis);
