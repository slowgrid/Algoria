(function registerAlgoriaLineageRelations(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "relations-lineage",
    relations: [
      {
        "id": "rel-randomized-quick-variant-quick",
        "from": "algo-randomized-quick-sort",
        "type": "variant_of",
        "to": "algo-quick-sort",
        "note": "피벗 선택을 무작위화한 변형",
        "evidenceIds": [
          "source-princeton-quicksort"
        ],
        "treePriority": 72
      },
      {
        "id": "rel-dual-pivot-variant-quick",
        "from": "algo-dual-pivot-quick-sort",
        "type": "variant_of",
        "to": "algo-quick-sort",
        "evidenceIds": [
          "source-nist-quicksort",
          "source-princeton-quicksort"
        ],
        "treePriority": 94
      },
      {
        "id": "rel-three-way-variant-quick",
        "from": "algo-three-way-quick-sort",
        "type": "variant_of",
        "to": "algo-quick-sort",
        "evidenceIds": [
          "source-princeton-quicksort"
        ],
        "treePriority": 90
      },
      {
        "id": "rel-introsort-improves-quick",
        "from": "algo-introsort",
        "type": "improves_upon",
        "to": "algo-quick-sort",
        "localizedNotes": {
          "ko": "재귀 깊이가 커지면 힙 정렬로 전환해 퀵 정렬의 최악 시간복잡도를 보완한다.",
          "en": "Switches to heap sort at excessive recursion depth to avoid quicksort's quadratic worst case."
        },
        "evidenceIds": [
          "source-musser-introsort-1997",
          "source-nist-introsort"
        ],
        "treePriority": 98
      },
      {
        "id": "rel-introsort-hybrid-quick",
        "from": "algo-introsort",
        "type": "hybrid_of",
        "to": "algo-quick-sort",
        "evidenceIds": [
          "source-musser-introsort-1997"
        ]
      },
      {
        "id": "rel-introsort-hybrid-heap",
        "from": "algo-introsort",
        "type": "hybrid_of",
        "to": "algo-heap-sort",
        "evidenceIds": [
          "source-musser-introsort-1997",
          "source-nist-introsort"
        ]
      },
      {
        "id": "rel-timsort-hybrid-merge",
        "from": "algo-timsort",
        "type": "hybrid_of",
        "to": "algo-merge-sort",
        "evidenceIds": [
          "source-cpython-listsort"
        ]
      },
      {
        "id": "rel-timsort-hybrid-insertion",
        "from": "algo-timsort",
        "type": "hybrid_of",
        "to": "algo-insertion-sort",
        "evidenceIds": [
          "source-cpython-listsort"
        ]
      },
      {
        "id": "rel-bidirectional-variant-dijkstra",
        "from": "algo-bidirectional-dijkstra",
        "type": "variant_of",
        "to": "algo-dijkstra",
        "evidenceIds": [
          "source-bidirectional-dijkstra-2024"
        ],
        "treePriority": 90
      },
      {
        "id": "rel-phase2-edmonds-karp-variant-ford-fulkerson",
        "from": "algo-edmonds-karp",
        "type": "variant_of",
        "to": "algo-ford-fulkerson",
        "evidenceIds": [
          "source-ford-fulkerson-1956",
          "source-edmonds-karp-1972"
        ],
        "treePriority": 88
      },
      {
        "id": "rel-phase2-dinic-improves-ford-fulkerson",
        "from": "algo-dinic",
        "type": "improves_upon",
        "to": "algo-ford-fulkerson",
        "evidenceIds": [
          "source-dinitz-1970",
          "source-erickson-max-flow"
        ],
        "localizedNotes": {
          "ko": "임의의 증가 경로 하나 대신 레벨 그래프의 차단 유량을 처리해 일반 네트워크에서 O(V²E) 다항 시간 상한을 제공한다.",
          "en": "It replaces one arbitrary augmenting path at a time with blocking flows in level graphs, yielding an O(V²E) polynomial bound on general networks."
        },
        "treePriority": 96
      },
      {
        "id": "rel-phase2-johnson-hybrid-bellman-ford",
        "from": "algo-johnson",
        "type": "hybrid_of",
        "to": "algo-bellman-ford",
        "evidenceIds": [
          "source-johnson-apsp-1977"
        ]
      },
      {
        "id": "rel-phase2-johnson-hybrid-dijkstra",
        "from": "algo-johnson",
        "type": "hybrid_of",
        "to": "algo-dijkstra",
        "evidenceIds": [
          "source-johnson-apsp-1977"
        ]
      },
      {
        "id": "rel-phase2-ecdh-variant-diffie-hellman",
        "from": "algo-ecdh",
        "type": "variant_of",
        "to": "algo-diffie-hellman",
        "evidenceIds": [
          "source-nist-sp800-56a",
          "source-rfc-6090"
        ],
        "treePriority": 94
      },
      {
        "id": "rel-phase2-lzw-variant-lz78",
        "from": "algo-lzw",
        "type": "variant_of",
        "to": "algo-lz78",
        "evidenceIds": [
          "source-lz78-1978",
          "source-welch-lzw-1984"
        ],
        "treePriority": 94
      },
      {
        "id": "rel-phase2-deflate-hybrid-lz77",
        "from": "algo-deflate",
        "type": "hybrid_of",
        "to": "algo-lz77",
        "evidenceIds": [
          "source-rfc-1951"
        ]
      },
      {
        "id": "rel-phase2-deflate-hybrid-huffman",
        "from": "algo-deflate",
        "type": "hybrid_of",
        "to": "algo-huffman-coding",
        "evidenceIds": [
          "source-rfc-1951"
        ]
      },
      {
        "id": "rel-phase2-extended-euclid-variant-euclid",
        "from": "algo-extended-euclidean",
        "type": "variant_of",
        "to": "algo-euclidean",
        "evidenceIds": [
          "source-nist-fips-197",
          "source-nist-euclidean"
        ],
        "treePriority": 90
      },
      {
        "id": "rel-phase2-exponential-search-hybrid-binary",
        "from": "algo-exponential-search",
        "type": "hybrid_of",
        "to": "algo-binary-search",
        "evidenceIds": [
          "source-bentley-yao-unbounded-search-1976"
        ]
      },
      {
        "id": "rel-phase4-a-star-derived-dijkstra",
        "from": "algo-a-star",
        "type": "derived_from",
        "to": "algo-dijkstra",
        "treePriority": 100,
        "evidenceIds": [
          "source-astar-1968",
          "source-dijkstra-1959"
        ],
        "localizedNotes": {
          "ko": "Dijkstra의 누적 경로 비용 g에 목표까지의 휴리스틱 h를 더해 탐색 순서를 목표 지향적으로 확장한다.",
          "en": "Extends Dijkstra's accumulated path cost g with a goal heuristic h to guide the expansion order."
        }
      },
      {
        "id": "rel-phase4-quickselect-derived-quicksort",
        "from": "algo-quickselect",
        "type": "derived_from",
        "to": "algo-quick-sort",
        "treePriority": 88,
        "evidenceIds": [
          "source-hoare-find-1961",
          "source-hoare-quicksort-1962"
        ],
        "localizedNotes": {
          "ko": "Quick Sort의 partition 절차를 재사용하되 목표 순위가 들어 있는 한쪽 구간만 반복 처리한다.",
          "en": "Reuses Quick Sort's partition procedure while continuing only into the side containing the requested rank."
        }
      },
      {
        "id": "rel-phase4-shell-derived-insertion",
        "from": "algo-shell-sort",
        "type": "derived_from",
        "to": "algo-insertion-sort",
        "treePriority": 90,
        "evidenceIds": [
          "source-shell-1959"
        ],
        "localizedNotes": {
          "ko": "간격이 있는 부분 수열에 삽입 정렬을 적용하고 마지막 간격 1에서 일반 삽입 정렬로 마무리한다.",
          "en": "Applies insertion sorting to gapped subsequences and finishes with ordinary insertion sort at gap one."
        }
      },
      {
        "id": "rel-phase4-smith-waterman-derived-needleman-wunsch",
        "from": "algo-smith-waterman",
        "type": "derived_from",
        "to": "algo-needleman-wunsch",
        "treePriority": 100,
        "evidenceIds": [
          "source-smith-waterman-1981",
          "source-needleman-wunsch-1970"
        ],
        "localizedNotes": {
          "ko": "전역 정렬 점화식에 0으로 재시작하는 선택을 추가해 최고 점수의 지역 구간을 찾는다.",
          "en": "Adds a zero restart to the global-alignment recurrence so the highest-scoring local region is selected."
        }
      },
      {
        "id": "rel-phase4-external-merge-variant-merge",
        "from": "algo-external-merge-sort",
        "type": "variant_of",
        "to": "algo-merge-sort",
        "treePriority": 92,
        "evidenceIds": [
          "source-knuth-taocp-vol3"
        ],
        "localizedNotes": {
          "ko": "병합 정렬을 제한된 메모리와 블록 I/O에 맞게 정렬 run 생성과 다방향 병합으로 변형한다.",
          "en": "Adapts merge sorting to bounded memory and block I/O through sorted-run generation and multiway merging."
        }
      },
      {
        "id": "rel-phase4-lz78-inspired-lz77",
        "from": "algo-lz78",
        "type": "inspired_by",
        "to": "algo-lz77",
        "treePriority": 70,
        "evidenceIds": [
          "source-lz77-1977",
          "source-lz78-1978"
        ],
        "localizedNotes": {
          "ko": "두 알고리즘은 연속된 Ziv–Lempel 연구에서 나왔지만 LZ78은 슬라이딩 윈도 대신 명시적으로 성장하는 구문 사전을 사용한다.",
          "en": "Both arise from consecutive Ziv–Lempel work, while LZ78 replaces a sliding window with an explicitly growing phrase dictionary."
        }
      },
      {
        "id": "rel-wave150-median-improves-quickselect",
        "from": "algo-median-of-medians",
        "type": "improves_upon",
        "to": "algo-quickselect",
        "treePriority": 94,
        "evidenceIds": ["source-bfprt-selection-1973", "source-clrs-fourth"],
        "localizedNotes": {
          "ko": "5개 그룹의 중앙값으로 피벗을 정해 Quickselect 계열 선택에 최악 O(n) 보장을 제공한다.",
          "en": "Chooses a pivot from medians of five to give Quickselect-style selection an O(n) worst-case guarantee."
        }
      },
      {
        "id": "rel-wave150-dial-variant-dijkstra",
        "from": "algo-dial-shortest-path",
        "type": "variant_of",
        "to": "algo-dijkstra",
        "treePriority": 82,
        "evidenceIds": ["source-dial-shortest-path-1969", "source-princeton-shortest-paths"],
        "localizedNotes": {
          "ko": "작은 비음수 정수 가중치에서 Dijkstra의 일반 우선순위 큐를 거리 버킷으로 특수화한다.",
          "en": "Specializes Dijkstra's general priority queue into distance buckets for small nonnegative integer weights."
        }
      },
      {
        "id": "rel-wave150-zero-one-bfs-variant-dijkstra",
        "from": "algo-zero-one-bfs",
        "type": "variant_of",
        "to": "algo-dijkstra",
        "treePriority": 78,
        "evidenceIds": ["source-cp-zero-one-bfs", "source-clrs-fourth"],
        "localizedNotes": {
          "ko": "가중치가 0과 1뿐일 때 Dijkstra의 최소 거리 순서를 덱의 앞·뒤 삽입으로 구현한다.",
          "en": "Implements Dijkstra's nondecreasing-distance order with front/back deque insertion when weights are only zero or one."
        }
      },
      {
        "id": "rel-wave150-kmp-improves-naive-search",
        "from": "algo-kmp",
        "type": "improves_upon",
        "to": "algo-naive-string-search",
        "treePriority": 92,
        "evidenceIds": ["source-kmp-1977", "source-nist-string-matching"],
        "localizedNotes": {
          "ko": "실패 함수를 전처리해 불일치 뒤 이미 확인한 접두 정보를 재사용하고 최악 시간을 선형으로 줄인다.",
          "en": "Preprocesses a failure function so confirmed prefix information is reused after mismatches, reducing worst-case time to linear."
        }
      },
      {
        "id": "rel-wave150-boyer-moore-improves-naive-search",
        "from": "algo-boyer-moore",
        "type": "improves_upon",
        "to": "algo-naive-string-search",
        "treePriority": 88,
        "evidenceIds": ["source-boyer-moore-1977", "source-nist-string-matching"],
        "localizedNotes": {
          "ko": "패턴을 오른쪽부터 비교하고 불일치 정보를 이용해 여러 시작 위치를 한 번에 건너뛴다.",
          "en": "Compares from the pattern's right side and uses mismatch information to skip multiple candidate starts."
        }
      },
      {
        "id": "rel-wave150-binary-gcd-variant-euclidean",
        "from": "algo-binary-gcd",
        "type": "variant_of",
        "to": "algo-euclidean",
        "treePriority": 84,
        "evidenceIds": ["source-stein-binary-gcd-1967", "source-nist-euclidean"],
        "localizedNotes": {
          "ko": "나머지 연산 대신 짝홀성, 시프트와 뺄셈으로 유클리드 최대공약수 축소를 구현한다.",
          "en": "Implements Euclidean GCD reduction with parity, shifts, and subtraction instead of remainder operations."
        }
      },
      {
        "id": "rel-wave150-x25519-variant-ecdh",
        "from": "algo-x25519",
        "type": "variant_of",
        "to": "algo-ecdh",
        "treePriority": 92,
        "evidenceIds": ["source-rfc-7748", "source-rfc-6090"],
        "localizedNotes": {
          "ko": "Curve25519의 u 좌표와 Montgomery ladder를 고정한 구체적인 타원곡선 Diffie–Hellman 함수다.",
          "en": "Defines a concrete elliptic-curve Diffie–Hellman function using Curve25519 u-coordinates and a Montgomery ladder."
        }
      },
      {
        "id": "rel-wave150-lz4-variant-lz77",
        "from": "algo-lz4",
        "type": "variant_of",
        "to": "algo-lz77",
        "treePriority": 86,
        "evidenceIds": ["source-lz4-block-format", "source-lz77-1977"],
        "localizedNotes": {
          "ko": "LZ77형 역참조를 고정된 바이트 지향 토큰 형식으로 표현해 빠른 디코딩을 지향한다.",
          "en": "Represents LZ77-style backreferences in a fixed byte-oriented token format designed for fast decoding."
        }
      },
      {
        "id": "rel-wave150-brotli-hybrid-lz77",
        "from": "algo-brotli",
        "type": "hybrid_of",
        "to": "algo-lz77",
        "evidenceIds": ["source-rfc-7932"]
      },
      {
        "id": "rel-wave150-brotli-hybrid-huffman",
        "from": "algo-brotli",
        "type": "hybrid_of",
        "to": "algo-huffman-coding",
        "evidenceIds": ["source-rfc-7932"]
      },
      {
        "id": "rel-wave150-sgd-variant-gradient-descent",
        "from": "algo-stochastic-gradient-descent",
        "type": "variant_of",
        "to": "algo-gradient-descent",
        "treePriority": 88,
        "evidenceIds": ["source-robbins-monro-1951", "source-stanford-cs229-gradient-descent"],
        "localizedNotes": {
          "ko": "전체 목적함수의 정확한 경사 대신 표본 또는 미니배치 경사 추정치로 갱신한다.",
          "en": "Updates with a sample or mini-batch gradient estimate instead of the exact full-objective gradient."
        }
      },
      {
        "id": "rel-wave150-momentum-improves-sgd",
        "from": "algo-momentum-gradient-descent",
        "type": "improves_upon",
        "to": "algo-stochastic-gradient-descent",
        "treePriority": 86,
        "evidenceIds": ["source-polyak-momentum-1964", "source-nocedal-wright-numerical-optimization"],
        "localizedNotes": {
          "ko": "이전 갱신을 누적해 일부 곡률 조건에서 SGD의 지그재그 진동을 줄이고 일관된 방향을 가속한다.",
          "en": "Accumulates prior updates to reduce SGD's zigzagging and accelerate persistent directions under suitable curvature conditions."
        }
      },
      {
        "id": "rel-wave150-adam-improves-sgd",
        "from": "algo-adam",
        "type": "improves_upon",
        "to": "algo-stochastic-gradient-descent",
        "treePriority": 90,
        "evidenceIds": ["source-adam-2014", "source-deep-learning-book-optimization"],
        "localizedNotes": {
          "ko": "경사의 1차·2차 모멘트 추정과 편향 보정을 더해 좌표별 갱신 크기를 적응시킨다.",
          "en": "Adds bias-corrected first- and second-moment estimates to adapt update scales per coordinate."
        }
      },
      {
        "id": "rel-wave150-hkdf-derived-hmac",
        "from": "algo-hkdf",
        "type": "derived_from",
        "to": "algo-hmac",
        "treePriority": 94,
        "evidenceIds": ["source-rfc-5869", "source-rfc-2104"],
        "localizedNotes": {
          "ko": "HMAC을 의사난수 함수로 사용해 추출 단계와 반복 확장 단계를 구성한다.",
          "en": "Uses HMAC as its pseudorandom function in an extract stage followed by iterative expansion."
        }
      },
      {
        "id": "rel-wave150-gabow-related-tarjan",
        "from": "algo-gabow-scc",
        "type": "related_to",
        "to": "algo-tarjan-scc",
        "evidenceIds": ["source-gabow-path-scc-2000", "source-tarjan-1972"],
        "localizedNotes": {
          "ko": "두 알고리즘 모두 한 번의 깊이 우선 탐색으로 SCC를 찾지만 경계 상태를 관리하는 방식이 다르다.",
          "en": "Both find SCCs in one depth-first traversal, but maintain component-boundary state differently."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
