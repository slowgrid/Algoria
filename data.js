(function buildAlgoriaData(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before data.js."
    );
  }

  global.ALGORIA_DATA = registry.build({
    requiredPartIds: ["meta","sources","sources-expansion","sources-applied","sources-wave180","sources-wave250","sources-lineage-phase4","sources-systems-phase5","concepts","concepts-wave180","concepts-wave250","concepts-systems-phase5","algorithms-sorting-searching","algorithms-graph-string","algorithms-math-crypto-compression","algorithms-geometry-ml-optimization","algorithms-core-expansion","algorithms-applied-expansion","algorithms-foundations-wave180","algorithms-applied-wave180","algorithms-wave250-foundations","algorithms-wave250-math-crypto","algorithms-wave250-applied","algorithms-systems-phase5","relations-problems","relations-techniques","relations-data-structures","relations-domains","relations-lineage","relations-wave180","relations-wave250","relations-lineage-phase4","relations-systems-phase5","hierarchy-root","hierarchy-algorithms","hierarchy-problems","hierarchy-techniques","hierarchy-data-structures","hierarchy-domains","hierarchy-wave180-primary","hierarchy-wave180-semantic","hierarchy-wave250-primary","hierarchy-wave250-semantic","hierarchy-systems-phase5-primary","hierarchy-systems-phase5-semantic"]
  });
})(typeof window !== "undefined" ? window : globalThis);
