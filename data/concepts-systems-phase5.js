(function registerAlgoriaPhase5Concepts(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  const rows = [
    ["problem-database-join", "problem", "Database Join", "데이터베이스 조인", "공통 조건을 만족하는 두 관계의 튜플을 결합하는 문제", "Combining tuples from two relations that satisfy a join predicate."],
    ["problem-external-run-generation", "problem", "External Run Generation", "외부 정렬 런 생성", "제한된 메모리로 긴 정렬 런을 생성하는 문제", "Producing long sorted runs with bounded internal memory."],
    ["problem-distributed-consensus", "problem", "Distributed Consensus", "분산 합의", "일부 장애가 있어도 여러 프로세스가 하나의 값이나 로그에 합의하는 문제", "Making processes agree on a value or log despite failures."],
    ["problem-distributed-snapshot", "problem", "Distributed Snapshot", "분산 스냅샷", "전역 시계 없이 일관된 분산 시스템 상태를 기록하는 문제", "Recording a consistent distributed state without a global clock."],
    ["problem-distributed-mutual-exclusion", "problem", "Distributed Mutual Exclusion", "분산 상호 배제", "공유 메모리 없이 임계 구역에 한 프로세스만 진입시키는 문제", "Allowing one process at a time into a critical section without shared memory."],
    ["problem-leader-election", "problem", "Leader Election", "리더 선출", "장애 이후 참여 프로세스 중 조정자를 선택하는 문제", "Selecting a coordinator among participating processes after failures."],
    ["problem-stream-sampling", "problem", "Stream Sampling", "스트림 표본 추출", "길이를 미리 모르는 스트림에서 균등 표본을 유지하는 문제", "Maintaining a uniform sample from a stream of unknown length."],
    ["problem-heavy-hitters", "problem", "Heavy Hitters", "빈발 항목 탐지", "제한된 메모리로 스트림의 빈번한 항목을 찾는 문제", "Finding frequent stream items with bounded memory."],
    ["problem-cardinality-estimation", "problem", "Cardinality Estimation", "고유값 개수 추정", "대규모 스트림의 서로 다른 원소 수를 근사하는 문제", "Approximating the number of distinct stream elements."],
    ["problem-stream-quantiles", "problem", "Streaming Quantiles", "스트림 분위수 추정", "전체 데이터를 저장하지 않고 순위와 분위수를 근사하는 문제", "Approximating ranks and quantiles without storing the stream."],
    ["problem-phylogenetic-tree", "problem", "Phylogenetic Tree Reconstruction", "계통수 복원", "거리 또는 유사도 자료에서 계통 관계 트리를 구성하는 문제", "Constructing an evolutionary tree from distance or similarity data."],
    ["problem-rna-secondary-structure", "problem", "RNA Secondary Structure Prediction", "RNA 이차 구조 예측", "비교차 염기쌍 제약 아래 RNA 접힘 구조를 예측하는 문제", "Predicting an RNA fold under noncrossing base-pair constraints."],

    ["technique-block-processing", "technique", "Block Processing", "블록 처리", "여러 레코드를 메모리 블록 단위로 묶어 I/O를 줄이는 기법", "Processing records in memory-sized blocks to reduce I/O."],
    ["technique-sort-merge", "technique", "Sort-Merge Processing", "정렬 병합 처리", "입력을 정렬한 뒤 정렬 순서를 따라 동기화하며 결합하는 기법", "Sorting inputs and synchronously merging them by key order."],
    ["technique-hash-partitioning", "technique", "Hash Partitioning", "해시 분할", "동일 키가 같은 파티션으로 가도록 데이터를 나누는 기법", "Partitioning data so equal keys reach the same partition."],
    ["technique-run-generation", "technique", "Run Generation", "정렬 런 생성", "메모리보다 큰 입력을 정렬된 연속 구간으로 내보내는 기법", "Emitting sorted runs from inputs larger than memory."],
    ["technique-quorum-consensus", "technique", "Quorum Consensus", "쿼럼 합의", "서로 교차하는 다수 집합의 승인을 사용해 안전성을 확보하는 기법", "Using intersecting majorities to preserve agreement safety."],
    ["technique-marker-recording", "technique", "Marker-Based Recording", "마커 기반 기록", "채널 마커로 로컬 상태와 전송 중 메시지의 경계를 기록하는 기법", "Using channel markers to delimit local state and in-transit messages."],
    ["technique-logical-clock-ordering", "technique", "Logical-Clock Ordering", "논리 시계 순서화", "논리 타임스탬프로 분산 요청의 전체 순서를 정하는 기법", "Ordering distributed requests with logical timestamps."],
    ["technique-failure-election", "technique", "Failure-Driven Election", "장애 감지 기반 선출", "타임아웃과 프로세스 우선순위로 새 조정자를 선출하는 기법", "Electing a coordinator from timeouts and process priorities."],
    ["technique-randomized-online", "technique", "Randomized Online Selection", "무작위 온라인 선택", "미래 입력을 모르는 상태에서 확률적으로 표본을 갱신하는 기법", "Randomly updating a sample without knowing future input."],
    ["technique-counter-reduction", "technique", "Counter Reduction", "카운터 축소", "제한된 후보 카운터를 동시에 줄여 빈발 후보만 유지하는 기법", "Reducing bounded candidate counters to retain frequent candidates."],
    ["technique-probabilistic-sketching", "technique", "Probabilistic Sketching", "확률적 스케치", "해시된 요약 상태로 통계량을 오차 한계 내에서 근사하는 기법", "Approximating statistics with compact hashed summaries."],
    ["technique-level-compaction", "technique", "Level Compaction", "레벨 압축", "가중치가 같은 표본을 레벨별로 병합·부분 폐기하는 기법", "Merging and subsampling equal-weight items by levels."],
    ["technique-agglomerative-clustering", "technique", "Agglomerative Clustering", "응집형 군집화", "가까운 군집을 반복 병합해 계층 구조를 만드는 기법", "Repeatedly merging nearby clusters into a hierarchy."],
    ["technique-backward-search", "technique", "Backward Search", "역방향 검색", "패턴을 뒤에서부터 처리하며 변환 기반 검색 구간을 좁히는 기법", "Narrowing a transformed-text interval from the pattern's end."],

    ["domain-database", "domain", "Database Systems", "데이터베이스", "관계형 질의 처리와 외부 메모리 데이터 관리 분야", "Relational query processing and external-memory data management."],
    ["domain-distributed-systems", "domain", "Distributed Systems", "분산 시스템", "메시지 전달 노드의 합의·조정·장애 처리를 다루는 분야", "Agreement, coordination, and failure handling among message-passing nodes."],
    ["domain-data-streaming", "domain", "Data Streaming", "데이터 스트리밍", "한 번 또는 소수 번의 통과와 제한된 메모리로 연속 데이터를 처리하는 분야", "Processing continuous data in few passes with bounded memory."]
  ];

  registry.registerPart({
    id: "concepts-systems-phase5",
    entities: rows.map(([id, type, name, ko, summaryKo, summaryEn]) => ({
      id,
      type,
      name,
      summary: summaryKo,
      localizedNames: { en: name, ko },
      content: { ko: { summary: summaryKo }, en: { summary: summaryEn } }
    }))
  });
})(typeof window !== "undefined" ? window : globalThis);
