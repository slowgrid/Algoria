(function registerAlgoriaPhase5Algorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  const catalog = global.AlgoriaPhase5Catalog;
  if (!registry || !catalog) throw new Error("Phase 5 catalog must be loaded first.");

  const text = (koAdvantages, koDisadvantages, koUseCases, enAdvantages, enDisadvantages, enUseCases) => ({
    koAdvantages, koDisadvantages, koUseCases, enAdvantages, enDisadvantages, enUseCases
  });
  const algorithmText = {
    "algo-block-nested-loop-join": text(
      ["등가 조건이 아닌 일반 조인 조건에도 그대로 적용할 수 있다.", "가용 버퍼가 늘면 내부 관계의 반복 스캔 횟수가 줄어든다."],
      ["외부 관계가 크거나 버퍼가 작으면 내부 관계를 여러 번 읽는다.", "외부·내부 입력의 선택과 출력 크기에 비용이 민감하다."],
      ["소규모 외부 입력을 이용한 비등가 조인", "다른 물리 조인을 적용하기 어려운 실행 계획의 기본 대안"],
      ["It works with general join predicates, not only equality.", "More buffer pages reduce repeated scans of the inner relation."],
      ["A large outer input or small buffer forces many inner scans.", "Cost is sensitive to input orientation and output size."],
      ["Non-equi joins with a small outer input", "A fallback physical join when specialized methods do not apply"]
    ),
    "algo-sort-merge-join": text(
      ["이미 조인 키로 정렬된 입력을 순차적으로 처리할 수 있다.", "범위 조건과 큰 외부 메모리 입력에 잘 맞는다."],
      ["정렬되지 않은 입력에는 선행 정렬 비용이 필요하다.", "중복 키 구간이 크면 그룹 버퍼링과 출력 비용이 증가한다."],
      ["정렬 인덱스를 이용한 대용량 등가 조인", "정렬 순서를 후속 연산에서도 재사용하는 실행 계획"],
      ["It scans inputs sequentially when they are already ordered by join key.", "It suits range predicates and large external-memory inputs."],
      ["Unsorted inputs require an additional sort.", "Large duplicate-key runs increase buffering and output cost."],
      ["Large equijoins using ordered indexes", "Plans that reuse join-key order in later operators"]
    ),
    "algo-hash-join": text(
      ["빌드 입력이 메모리에 맞으면 등가 조인을 기대 선형 시간에 수행한다.", "정렬 없이 단순한 빌드·프로브 단계로 구현할 수 있다."],
      ["해시 가능한 등가 조건에 주로 제한된다.", "키 편향이나 빌드 입력의 메모리 초과는 버킷 병목과 디스크 유출을 만든다."],
      ["작은 차원 테이블과 큰 사실 테이블의 조인", "메모리 내 분석 질의의 등가 조인"],
      ["It gives expected linear work for an in-memory equijoin build side.", "Its build-and-probe structure avoids sorting."],
      ["It mainly applies to hashable equality predicates.", "Skew or an oversized build side causes bucket hot spots and spills."],
      ["Joining a small dimension table to a large fact table", "In-memory analytical equijoins"]
    ),
    "algo-grace-hash-join": text(
      ["두 입력이 메모리보다 커도 해시 파티션별로 처리할 수 있다.", "파티션 단계가 대부분 순차 I/O로 이루어진다."],
      ["편향된 키는 메모리에 맞지 않는 큰 파티션을 만들 수 있다.", "파티션 기록과 재읽기 때문에 메모리 내 해시 조인보다 I/O가 많다."],
      ["메모리를 초과하는 대형 등가 조인", "동일 해시 분할을 공유하는 병렬 조인"],
      ["It processes inputs larger than memory one hash partition at a time.", "Partitioning is dominated by sequential I/O."],
      ["Skew can create a partition that still does not fit memory.", "Writing and rereading partitions adds I/O over an in-memory hash join."],
      ["Large equijoins that exceed memory", "Parallel joins over shared hash partitions"]
    ),
    "algo-replacement-selection": text(
      ["무작위 순서 입력에서는 메모리 용량보다 긴 초기 런을 만드는 경향이 있다.", "입력을 한 번 읽으면서 다음 런의 후보를 동시에 관리한다."],
      ["입력 순서에 따라 생성되는 런 길이가 크게 달라진다.", "활성·동결 레코드 구분과 힙 갱신이 필요하다."],
      ["외부 병합 정렬의 초기 런 생성", "데이터베이스 정렬 연산자의 디스크 런 준비"],
      ["Randomly ordered input tends to produce runs longer than memory capacity.", "It prepares the next run while scanning input once."],
      ["Run length varies substantially with input order.", "The heap must distinguish active from frozen records."],
      ["Initial run generation for external merge sort", "Preparing disk runs in a database sort operator"]
    ),
    "algo-paxos-consensus": text(
      ["교차하는 다수 쿼럼으로 비동기 메시지와 일부 중단 장애에서도 합의 안전성을 지킨다.", "제안 번호 규칙이 이미 선택된 값과 새 제안을 연결한다."],
      ["기본 프로토콜만으로는 안정적인 리더 선출과 재시도 정책이 정해지지 않는다.", "복제 로그로 확장한 Multi-Paxos의 구현 세부가 복잡하다."],
      ["복제 상태 머신의 합의 핵심", "장애 허용 메타데이터와 구성 정보 복제"],
      ["Intersecting majorities preserve safety under asynchronous messages and crash failures.", "Proposal-number rules carry prior choices into later rounds."],
      ["The core protocol does not prescribe stable leadership or retry policy.", "A practical Multi-Paxos replicated log has substantial implementation detail."],
      ["Consensus core for replicated state machines", "Fault-tolerant replication of metadata and configuration"]
    ),
    "algo-raft-consensus": text(
      ["리더 선출·로그 복제·안전성 규칙을 분리해 동작을 추론하기 쉽다.", "안정된 리더 아래에서는 한 번의 다수 복제로 로그 항목을 커밋한다."],
      ["리더 장애나 네트워크 분할 동안 재선출로 지연이 발생한다.", "스냅샷·로그 압축·구성 변경은 핵심 복제 절차 밖의 추가 구현이 필요하다."],
      ["키-값 저장소의 복제 로그", "클러스터 리더 선출과 일관된 상태 머신 복제"],
      ["Separating election, replication, and safety makes behavior easier to reason about.", "A stable leader commits entries with one majority replication round."],
      ["Leader failure or partition triggers election delay.", "Snapshots, log compaction, and membership changes add implementation work."],
      ["Replicated logs for key-value stores", "Cluster leadership and consistent state-machine replication"]
    ),
    "algo-chandy-lamport-snapshot": text(
      ["분산 실행을 중지하지 않고 일관된 전역 상태를 기록한다.", "마커가 로컬 상태와 채널 내 전송 중 메시지의 경계를 명확히 한다."],
      ["원형 알고리즘은 신뢰할 수 있는 FIFO 채널 가정에 의존한다.", "채널 수와 전송 중 메시지 양만큼 기록·마커 비용이 든다."],
      ["분산 체크포인트와 복구", "전역 불변식·종료·교착 상태 분석"],
      ["It records a consistent global state without stopping the computation.", "Markers delimit local state from messages in transit."],
      ["The original algorithm assumes reliable FIFO channels.", "Recording costs grow with channels and in-transit messages."],
      ["Distributed checkpointing and recovery", "Analyzing global invariants, termination, or deadlock"]
    ),
    "algo-ricart-agrawala": text(
      ["논리 시각의 전체 순서로 충돌 요청의 우선순위를 결정한다.", "토큰 없이 임계 구역 진입당 정확히 두 차례의 전 노드 메시지를 사용한다."],
      ["한 프로세스의 장애나 응답 지연도 장애 감지 없이는 진입을 막을 수 있다.", "참여 노드가 늘면 모든 노드와 통신하는 비용이 커진다."],
      ["소규모 분산 시스템의 상호 배제", "논리 시계 기반 조정 알고리즘 학습"],
      ["A total order on logical timestamps resolves conflicting requests.", "It needs two all-peer message waves per entry without a token."],
      ["One failed or delayed peer can block entry without failure handling.", "All-to-all communication scales poorly with membership."],
      ["Mutual exclusion in small distributed groups", "Teaching logical-clock coordination"]
    ),
    "algo-bully-election": text(
      ["프로세스 우선순위가 알려진 소규모 집합에서 구현이 단순하다.", "가장 높은 생존 ID를 조정자로 선택한다는 결과가 명확하다."],
      ["낮은 ID가 선거를 시작하면 최악의 경우 메시지가 제곱으로 증가한다.", "정확한 장애 감지와 알려진 전체 구성원 목록을 가정한다."],
      ["고정 구성원의 소규모 클러스터 리더 복구", "우선순위 기반 조정자 선출 시뮬레이션"],
      ["It is simple for a small group with known process priorities.", "Its outcome is clearly the highest surviving identifier."],
      ["An election started by a low identifier can use quadratic messages.", "It assumes accurate failure detection and known membership."],
      ["Leader recovery in a small fixed-membership cluster", "Simulating priority-based coordinator election"]
    ),
    "algo-reservoir-sampling": text(
      ["스트림 길이를 미리 몰라도 모든 항목에 같은 최종 선택 확률을 준다.", "표본 크기 k만큼의 메모리로 한 번의 통과에서 동작한다."],
      ["결과는 무작위 표본이므로 실행마다 달라진다.", "Algorithm R은 각 항목을 방문하며 가중 표본에는 별도 변형이 필요하다."],
      ["대규모 로그의 균등 표본 유지", "온라인 품질 검사와 탐색용 데이터 축소"],
      ["It gives every item equal final probability without knowing stream length.", "It works in one pass with O(k) sample memory."],
      ["The random sample differs between runs.", "Algorithm R visits every item, and weighted sampling needs a variant."],
      ["Maintaining a uniform sample of a large log", "Online quality inspection and exploratory downsampling"]
    ),
    "algo-misra-gries": text(
      ["결정적 알고리즘으로 빈도 임계값을 넘는 항목을 후보에서 놓치지 않는다.", "최대 k-1개 후보만 저장해 메모리 상한이 명확하다."],
      ["카운터는 실제 빈도의 하한이므로 정확한 빈도에는 두 번째 통과가 필요하다.", "단순 구현의 전체 카운터 감소는 항목당 O(k)가 될 수 있다."],
      ["네트워크·로그 스트림의 빈발 후보 탐지", "후속 정확 집계를 위한 후보 축소"],
      ["It deterministically retains every item above the frequency threshold as a candidate.", "At most k-1 counters give a strict memory bound."],
      ["Counters underestimate exact frequencies, so verification needs a second pass.", "A basic global decrement can cost O(k) per item."],
      ["Finding frequent candidates in network or log streams", "Reducing candidates before an exact recount"]
    ),
    "algo-space-saving": text(
      ["제한된 카운터로 상위 빈발 항목과 빈도 오차 상한을 동시에 유지한다.", "최소 카운터 교체가 최근 등장한 강한 후보를 빠르게 반영한다."],
      ["추정 빈도는 교체 당시 최솟값만큼 과대평가될 수 있다.", "빠른 갱신에는 최소 카운터를 추적하는 힙·버킷 관리가 필요하다."],
      ["실시간 인기 검색어·상품 집계", "트래픽의 상위 k 플로 추적"],
      ["It maintains heavy hitters together with explicit overestimation bounds.", "Replacing the minimum counter quickly admits a strong new candidate."],
      ["An estimate may overcount by the minimum value at replacement time.", "Fast updates require heap or bucket bookkeeping for the minimum counter."],
      ["Real-time trending query or product counts", "Tracking top-k traffic flows"]
    ),
    "algo-hyperloglog": text(
      ["매우 작은 고정 크기 레지스터로 방대한 고유값 수를 추정한다.", "동일 매개변수의 스케치는 레지스터별 최댓값으로 쉽게 병합된다."],
      ["확률적 추정치이므로 정확한 원소 목록이나 개수를 복원하지 못한다.", "작은 카디널리티 편향과 해시 품질을 보정·점검해야 한다."],
      ["고유 사용자·세션 수 추정", "분산 파티션의 distinct 집계 병합"],
      ["It estimates huge cardinalities with a small fixed register array.", "Compatible sketches merge by taking register-wise maxima."],
      ["It cannot recover exact members or an exact count.", "Small-cardinality bias and hash quality require correction and care."],
      ["Estimating unique users or sessions", "Merging distinct counts across distributed partitions"]
    ),
    "algo-kll-quantile-sketch": text(
      ["순위 오차에 대해 거의 최적인 공간으로 전체 분위수를 근사한다.", "compactor 기반 변형은 분산 스트림 요약을 병합할 수 있다."],
      ["확률적 오차와 실패 확률 매개변수를 함께 해석해야 한다.", "최적 비병합형과 실용 병합형은 공간·업데이트 비용이 서로 다르다."],
      ["지연 시간·응답 시간 백분위 모니터링", "분산 데이터 파티션의 분위수 요약 병합"],
      ["It approximates all quantiles with near-optimal rank-error space.", "Compactor variants can merge summaries from distributed streams."],
      ["Error and failure-probability parameters must be interpreted together.", "Optimal non-mergeable and practical mergeable variants have different bounds."],
      ["Monitoring latency and response-time percentiles", "Merging quantile summaries across data partitions"]
    ),
    "algo-gotoh-alignment": text(
      ["affine gap 비용을 세 DP 상태로 O(nm)에 정확히 계산한다.", "긴 gap 하나와 여러 짧은 gap을 생물학적으로 다르게 벌점화할 수 있다."],
      ["전체 traceback 행렬은 O(nm) 메모리를 사용한다.", "결과가 치환 점수와 gap open·extension 매개변수에 민감하다."],
      ["단백질·DNA 전역 쌍별 정렬", "연속 삽입·삭제 비용이 중요한 문자열 정렬"],
      ["Three DP states compute affine-gap alignment exactly in O(nm).", "It distinguishes one long gap from many short gaps biologically."],
      ["Full traceback uses O(nm) memory.", "Results depend strongly on substitution and gap parameters."],
      ["Global pairwise protein or DNA alignment", "String alignment where gap runs need affine cost"]
    ),
    "algo-neighbor-joining": text(
      ["모든 분류군이 같은 속도로 진화한다는 초거리 가정을 요구하지 않는다.", "거리 행렬에서 비근 트리와 가지 길이를 함께 추정한다."],
      ["기본 구현은 O(n³)이며 많은 분류군에서 비용이 크다.", "부정확하거나 비가산적인 거리 행렬은 잘못된 토폴로지를 만들 수 있다."],
      ["유전 거리 기반 계통수의 초기 복원", "다수 서열 관계의 탐색적 비근 트리 구성"],
      ["It does not require an ultrametric equal-rate assumption.", "It estimates an unrooted topology and branch lengths from distances."],
      ["The basic implementation is O(n³).", "Noisy or non-additive distances can produce a misleading topology."],
      ["Initial reconstruction of a distance-based phylogeny", "Exploratory unrooted trees for many sequences"]
    ),
    "algo-upgma": text(
      ["평균 연결 규칙이 단순하고 항상 하나의 근 계층 트리를 만든다.", "초거리 데이터에서는 분자 시계와 일치하는 복원 결과를 낸다."],
      ["계통별 진화 속도가 같다는 분자 시계 가정에 의존한다.", "속도 차이가 있는 데이터에서는 잘못된 군집 순서와 가지 길이가 생긴다."],
      ["초거리 또는 시계형 거리 자료의 계통 군집화", "거리 행렬 기반 계층적 군집화의 기준선"],
      ["Its average-linkage rule is simple and always yields a rooted hierarchy.", "For ultrametric data it agrees with a molecular-clock reconstruction."],
      ["It assumes equal evolutionary rates across lineages.", "Rate variation can distort merge order and branch lengths."],
      ["Phylogenetic clustering of clock-like distance data", "A baseline for distance-matrix hierarchical clustering"]
    ),
    "algo-nussinov-rna-folding": text(
      ["단순한 비공유 염기쌍 모델에서는 최적 구조를 동적 계획법으로 보장한다.", "구간 분할 점화식이 명확해 구현과 traceback을 설명하기 쉽다."],
      ["에너지와 loop 구조를 단순화해 실제 열역학 안정성을 충분히 반영하지 못한다.", "pseudoknot을 표현하지 못하며 기본 시간 복잡도가 O(n³)이다."],
      ["RNA 이차 구조 알고리즘 교육과 기준선", "비교차 염기쌍 후보의 빠른 구조 탐색"],
      ["It is exact under a simple maximum-noncrossing-pairs model.", "The interval recurrence and traceback are easy to inspect."],
      ["It omits realistic loop energetics and thermodynamic parameters.", "It cannot represent pseudoknots and takes O(n³) time."],
      ["Teaching and baselining RNA secondary-structure prediction", "Exploring noncrossing base-pair candidates"]
    ),
    "algo-fm-index-backward-search": text(
      ["압축된 BWT 기반 인덱스에서 패턴 빈도를 패턴 길이에 비례해 계산한다.", "원문 전체를 직접 저장하지 않고도 exact substring 검색을 지원한다."],
      ["빠른 rank 연산을 위한 보조 구조와 인덱스 구축이 필요하다.", "일치 위치를 나열하려면 접미사 배열 표본과 추가 LF 단계가 필요하다."],
      ["유전체 read의 exact seed 검색", "대용량 텍스트의 압축 전문 검색 인덱스"],
      ["It counts pattern occurrences in time proportional to pattern length on a BWT index.", "It supports exact substring search without storing the plain text directly."],
      ["Construction and fast rank queries need auxiliary index structures.", "Locating matches requires suffix-array samples and extra LF steps."],
      ["Exact seed lookup for genomic reads", "Compressed full-text indexes for large collections"]
    )
  };

  function koreanTopic(label) {
    const syllable = [...label].reverse().find((character) => {
      const code = character.charCodeAt(0);
      return code >= 0xac00 && code <= 0xd7a3;
    });
    if (!syllable) return `${label}는`;
    return `${label}${(syllable.charCodeAt(0) - 0xac00) % 28 === 0 ? "는" : "은"}`;
  }

  function makeAlgorithm(spec) {
    const copy = algorithmText[spec.id];
    if (!copy) throw new Error(`Missing Phase 5 content for ${spec.id}.`);
    const directReferences = Array.isArray(spec.source) ? spec.source : [spec.source];
    const topicKo = koreanTopic(spec.ko);
    const algorithm = {
      id: spec.id,
      type: "algorithm",
      name: spec.en,
      aliases: [...spec.aliases],
      summary: `${topicKo} ${spec.koIdea}.`,
      description: `${topicKo} ${spec.koIdea}. 적용 전 입력 모델과 복잡도 가정을 확인해야 한다.`,
      complexity: {
        time: typeof spec.time === "object" ? spec.time : { typical: spec.time },
        space: typeof spec.space === "object" ? spec.space : { auxiliary: spec.space }
      },
      pseudocode: spec.pseudocode,
      referenceIds: [...new Set(directReferences)],
      localizedNames: { en: spec.en, ko: spec.ko },
      quality: { tier: "standard", status: "reviewed" },
      content: {
        ko: {
          summary: `${topicKo} ${spec.koIdea}.`,
          description: `${topicKo} ${spec.koIdea}. 이 절차의 보장은 명시된 입력 모델과 복잡도 조건 안에서 해석해야 한다.`,
          advantages: copy.koAdvantages,
          disadvantages: copy.koDisadvantages,
          useCases: copy.koUseCases
        },
        en: {
          summary: `${spec.en} ${spec.enIdea}.`,
          description: `${spec.en} ${spec.enIdea}. Its guarantees should be interpreted under the stated input model and complexity assumptions.`,
          advantages: copy.enAdvantages,
          disadvantages: copy.enDisadvantages,
          useCases: copy.enUseCases
        }
      }
    };

    if (Number.isInteger(spec.year)) {
      algorithm.introduced = { year: spec.year };
    }
    if (Array.isArray(spec.authors) && spec.authors.length > 0) {
      algorithm.authors = spec.authors.map((name) => ({ name }));
    }

    return algorithm;
  }

  registry.registerPart({
    id: "algorithms-systems-phase5",
    entities: catalog.items.map(makeAlgorithm)
  });
})(typeof window !== "undefined" ? window : globalThis);
