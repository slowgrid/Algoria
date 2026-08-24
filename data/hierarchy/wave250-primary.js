(function registerAlgoriaWave250PrimaryHierarchy(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaWave250Catalog;
  if (!registry || !catalog) {
    throw new Error("Wave 250 primary hierarchy requires the registry and catalog.");
  }

  const categories = {
    sorting: { parentId: "view-algorithms-sorting", en: "Adaptive & Network Sorting", ko: "적응형·정렬 네트워크" },
    searching: { parentId: "view-algorithms-searching", en: "Robust Selection", ko: "안전한 선택" },
    graph: { parentId: "view-algorithms-graph", en: "Graph Paths, Cuts & Structure", ko: "그래프 경로·컷·구조" },
    string: { parentId: "view-algorithms-string", en: "String Indexes & Matching", ko: "문자열 인덱스·매칭" },
    mathematics: { parentId: "view-algorithms-mathematics", en: "Number Theory & Numerical Methods", ko: "정수론·수치 해석" },
    cryptography: { parentId: "view-algorithms-cryptography", en: "Modern Encryption & Signatures", ko: "현대 암호화·전자서명" },
    compression: { parentId: "view-algorithms-compression", en: "Integer & Entropy Coding", ko: "정수·엔트로피 부호화" },
    "computational-geometry": { parentId: "view-algorithms-computational-geometry", en: "Planar Geometry & Meshing", ko: "평면 기하·메시 생성" },
    "machine-learning": { parentId: "view-algorithms-machine-learning", en: "Clustering & Ensemble Learning", ko: "군집·앙상블 학습" },
    optimization: { parentId: "view-algorithms-optimization", en: "Constrained & Global Optimization", ko: "제약·전역 최적화" }
  };

  const nodes = [];
  let groupOrder = 300;
  for (const [categoryId, meta] of Object.entries(categories)) {
    const items = catalog.items.filter((item) => item.category === categoryId);
    const chunkCount = Math.ceil(items.length / 8);
    for (let chunkIndex = 0; chunkIndex < chunkCount; chunkIndex += 1) {
      const chunk = items.slice(chunkIndex * 8, chunkIndex * 8 + 8);
      const suffix = chunkCount > 1 ? `-${chunkIndex + 1}` : "";
      const groupId = `view-wave250-group-${categoryId}${suffix}`;
      nodes.push({
        id: groupId,
        parentId: meta.parentId,
        kind: "group",
        label: chunkCount > 1 ? `${meta.en} ${chunkIndex + 1}` : meta.en,
        localizedLabels: {
          en: chunkCount > 1 ? `${meta.en} ${chunkIndex + 1}` : meta.en,
          ko: chunkCount > 1 ? `${meta.ko} ${chunkIndex + 1}` : meta.ko
        },
        order: groupOrder
      });
      groupOrder += 10;
      chunk.forEach((item, itemIndex) => {
        nodes.push({
          id: `view-wave250-primary-${item.id}`,
          parentId: groupId,
          kind: "entity",
          entityId: item.id,
          primaryForSearch: true,
          order: 300 + itemIndex * 10
        });
      });
    }
  }

  registry.registerPart({ id: "hierarchy-wave250-primary", hierarchy: { nodes } });
})(typeof window !== "undefined" ? window : globalThis);
