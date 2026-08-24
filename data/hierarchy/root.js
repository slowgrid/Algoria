(function registerAlgoriaHierarchyRoot(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "hierarchy-root",
    hierarchy: {
      rootId: "view-root",
      nodes: [
        {
          "id": "view-root",
          "parentId": null,
          "kind": "group",
          "label": "Algorithm",
          "order": 0,
          "localizedLabels": {
            "en": "Algorithm",
            "ko": "알고리즘"
          }
        }
      ]
    }
  });
})(typeof window !== "undefined" ? window : globalThis);
