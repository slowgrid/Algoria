(function registerAlgoriaWave250Foundations(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaWave250Catalog;
  if (!registry || !catalog) throw new Error("Wave 250 catalog must be loaded first.");
  registry.registerPart({
    id: "algorithms-wave250-foundations",
    entities: catalog.items.slice(0, 23).map(catalog.buildAlgorithm)
  });
})(typeof window !== "undefined" ? window : globalThis);
