(function registerAlgoriaPhase5Relations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaPhase5Catalog;
  if (!registry || !catalog) throw new Error("Phase 5 catalog must be loaded first.");

  const relations = [];
  for (const spec of catalog.items) {
    const slug = spec.id.slice(5);
    relations.push({ id: `rel-phase5-systems-${slug}-solves`, from: spec.id, type: "solves", to: spec.problem });
    relations.push({ id: `rel-phase5-systems-${slug}-technique`, from: spec.id, type: "uses_technique", to: spec.technique });
    if (spec.ds) {
      relations.push({ id: `rel-phase5-systems-${slug}-data-structure`, from: spec.id, type: "uses_data_structure", to: spec.ds });
    }
    relations.push({ id: `rel-phase5-systems-${slug}-domain`, from: spec.id, type: "belongs_to_domain", to: spec.domain });
  }

  relations.push(
    {
      id: "rel-phase5-grace-variant-hash-join",
      from: "algo-grace-hash-join",
      type: "variant_of",
      to: "algo-hash-join",
      evidenceIds: ["source-dewitt-gerber-hash-join-1985", "source-graefe-query-evaluation-1993"],
      treePriority: 94
    },
    {
      id: "rel-phase5-raft-related-paxos",
      from: "algo-raft-consensus",
      type: "related_to",
      to: "algo-paxos-consensus",
      evidenceIds: ["source-ongaro-raft-2014", "source-lamport-paxos-simple-2001"],
      localizedNotes: {
        ko: "둘 다 장애 허용 복제 로그의 합의를 다루지만 Raft는 강한 리더와 분리된 선출·복제 절차를 사용한다.",
        en: "Both address fault-tolerant replicated-log consensus, while Raft uses a strong leader and separated election and replication procedures."
      }
    },
    {
      id: "rel-phase5-space-saving-related-misra-gries",
      from: "algo-space-saving",
      type: "related_to",
      to: "algo-misra-gries",
      evidenceIds: ["source-metwally-space-saving-2005", "source-misra-gries-1982"]
    },
    {
      id: "rel-phase5-gotoh-improves-needleman-wunsch",
      from: "algo-gotoh-alignment",
      type: "improves_upon",
      to: "algo-needleman-wunsch",
      evidenceIds: ["source-gotoh-alignment-1982", "source-needleman-wunsch-1970"],
      localizedNotes: {
        ko: "세 상태 DP로 affine gap 비용을 O(nm)에 계산해 일반 gap 비용을 직접 탐색하는 방식보다 효율적으로 처리한다.",
        en: "Three DP states compute affine-gap costs in O(nm), handling gap runs more efficiently than directly searching general gap costs."
      },
      treePriority: 92
    },
    {
      id: "rel-phase5-neighbor-joining-related-upgma",
      from: "algo-neighbor-joining",
      type: "related_to",
      to: "algo-upgma",
      evidenceIds: ["source-saitou-nei-neighbor-joining-1987", "source-sokal-michener-upgma-1958"],
      localizedNotes: {
        ko: "둘 다 거리 행렬을 반복 축소하지만 Neighbor-Joining은 비근 트리의 총 가지 길이 기준을, UPGMA는 분자 시계 가정의 평균 연결을 사용한다.",
        en: "Both reduce a distance matrix, but Neighbor-Joining targets an unrooted total-branch criterion while UPGMA uses average linkage under a molecular-clock assumption."
      }
    },
    {
      id: "rel-phase5-fm-search-related-bwt",
      from: "algo-fm-index-backward-search",
      type: "related_to",
      to: "algo-burrows-wheeler-transform",
      evidenceIds: ["source-ferragina-manzini-fm-index-2000", "source-burrows-wheeler-1994"]
    }
  );

  registry.registerPart({ id: "relations-systems-phase5", relations });
})(typeof window !== "undefined" ? window : globalThis);
