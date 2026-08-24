(function registerAlgoriaCoreExpansionAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  function defineAlgorithm(spec) {
    const algorithm = {
      id: spec.id,
      type: "algorithm",
      name: spec.name,
      aliases: spec.aliases || [],
      summary: spec.content.ko.summary,
      description: spec.content.ko.description,
      complexity: spec.complexity,
      pseudocode: spec.pseudocode,
      referenceIds: spec.referenceIds,
      content: spec.content,
      quality: {
        tier: spec.tier || "standard",
        status: "reviewed"
      },
      localizedNames: {
        en: spec.name,
        ko: spec.nameKo
      }
    };

    if (spec.introduced) algorithm.introduced = spec.introduced;
    if (spec.authors) algorithm.authors = spec.authors;
    if (spec.implementations) algorithm.implementations = spec.implementations;

    return algorithm;
  }

  registry.registerPart({
    id: "algorithms-core-expansion",
    entities: [
      defineAlgorithm({
        id: "algo-selection-sort",
        name: "Selection Sort",
        nameKo: "선택 정렬",
        aliases: ["Straight Selection Sort"],
        complexity: {
          time: {
            best: "O(n²)",
            average: "O(n²)",
            worst: "O(n²)"
          },
          space: { auxiliary: "O(1)" }
        },
        pseudocode:
          "SELECTION_SORT(A)\n  for i <- 0 to length(A) - 2\n    minimum <- i\n    for j <- i + 1 to length(A) - 1\n      if A[j] < A[minimum]\n        minimum <- j\n    if minimum != i\n      swap A[i], A[minimum]\n  return A",
        referenceIds: [
          "source-nist-selection-sort",
          "source-princeton-elementary-sorts"
        ],
        content: {
          ko: {
            summary:
              "미정렬 구간의 최솟값을 골라 앞쪽에 차례로 놓는 제자리 비교 정렬 알고리즘",
            description:
              "각 위치마다 남은 구간을 끝까지 훑어 최솟값의 위치를 찾고 현재 값과 교환한다. 입력 순서와 관계없이 비교 횟수는 이차식이며, 일반적인 교환형 구현은 안정적이지 않지만 교환은 최대 n-1회만 수행한다.",
            advantages: [
              "O(1) 보조 공간만 사용하는 단순한 제자리 구현이다.",
              "교환 횟수가 O(n)이어서 값 이동 비용이 큰 작은 레코드 집합에 유리할 수 있다."
            ],
            disadvantages: [
              "이미 정렬된 입력도 O(n²) 비교가 필요하다.",
              "일반적인 교환형 구현은 같은 키의 기존 순서를 보존하지 않는다."
            ],
            useCases: [
              "원소 수가 매우 작은 배열의 단순 정렬",
              "비교보다 쓰기나 교환 비용이 큰 환경의 소규모 정렬"
            ]
          },
          en: {
            summary:
              "An in-place comparison sort that repeatedly moves the minimum remaining value into position.",
            description:
              "For each position, it scans the entire unsorted suffix, finds its minimum, and swaps that value into place. Its comparison count stays quadratic for every input order; the usual swap-based form is unstable but performs at most n-1 swaps.",
            advantages: [
              "It has a simple in-place implementation using O(1) auxiliary space.",
              "Its O(n) swaps can help on small data sets when moving values is expensive."
            ],
            disadvantages: [
              "Even an already sorted input requires O(n²) comparisons.",
              "The usual swap-based implementation does not preserve the order of equal keys."
            ],
            useCases: [
              "Straightforward sorting of very small arrays",
              "Small sorts where writes or swaps cost more than comparisons"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-bubble-sort",
        name: "Bubble Sort",
        nameKo: "버블 정렬",
        aliases: ["Sinking Sort", "Exchange Sort"],
        complexity: {
          time: {
            best: "O(n) with early termination",
            average: "O(n²)",
            worst: "O(n²)"
          },
          space: { auxiliary: "O(1)" }
        },
        pseudocode:
          "BUBBLE_SORT(A)\n  for end <- length(A) - 1 down to 1\n    swapped <- false\n    for i <- 0 to end - 1\n      if A[i] > A[i + 1]\n        swap A[i], A[i + 1]\n        swapped <- true\n    if not swapped\n      break\n  return A",
        referenceIds: [
          "source-nist-bubble-sort",
          "source-opendsa-bubble-sort"
        ],
        content: {
          ko: {
            summary:
              "인접한 역순 쌍을 반복 교환해 큰 값을 배열 끝으로 보내는 안정 정렬 알고리즘",
            description:
              "왼쪽부터 인접 원소를 비교하고 순서가 뒤집힌 쌍을 교환하는 패스를 반복한다. 한 패스가 끝날 때마다 가장 큰 미정렬 값이 뒤쪽에 확정되며, 교환이 한 번도 없으면 이미 정렬된 것으로 보고 종료할 수 있다.",
            advantages: [
              "인접한 원소만 교환하므로 같은 키의 순서를 보존하는 안정 정렬이다.",
              "교환 여부를 확인하면 이미 정렬되었거나 거의 정렬된 입력에서 일찍 끝날 수 있다."
            ],
            disadvantages: [
              "평균과 최악의 경우 O(n²) 시간이 걸린다.",
              "비교와 교환 횟수가 많아 큰 배열의 범용 정렬에는 적합하지 않다."
            ],
            useCases: [
              "정렬 과정과 안정성을 설명하는 교육용 예제",
              "크기가 매우 작고 거의 정렬된 배열의 간단한 처리"
            ]
          },
          en: {
            summary:
              "A stable sort that repeatedly swaps adjacent inversions and moves large values toward the end.",
            description:
              "It makes repeated left-to-right passes, comparing adjacent values and swapping inverted pairs. Each pass fixes the largest remaining value at the back, and a pass with no swaps proves that the array is already sorted.",
            advantages: [
              "Adjacent swaps preserve the original order of equal keys, making it stable.",
              "A swap flag allows early termination on sorted or nearly sorted inputs."
            ],
            disadvantages: [
              "Its average and worst-case running times are O(n²).",
              "Frequent comparisons and swaps make it unsuitable as a general large-array sort."
            ],
            useCases: [
              "Teaching sorting passes and stability",
              "Simple handling of very small, nearly sorted arrays"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-median-of-medians",
        name: "Median of Medians",
        nameKo: "중앙값들의 중앙값 알고리즘",
        aliases: ["BFPRT", "PICK"],
        tier: "deep",
        complexity: {
          time: {
            best: "O(n)",
            average: "O(n)",
            worst: "O(n)"
          },
          space: { auxiliary: "O(n) in this immutable implementation" }
        },
        pseudocode:
          "SELECT(A, k)\n  if length(A) <= 5\n    return SORT(A)[k]\n  medians <- medians of consecutive groups of at most 5\n  pivot <- SELECT(medians, floor(length(medians) / 2))\n  lower, equal, higher <- partition A around pivot\n  if k < length(lower)\n    return SELECT(lower, k)\n  if k < length(lower) + length(equal)\n    return pivot\n  return SELECT(higher, k - length(lower) - length(equal))",
        introduced: { year: 1973 },
        authors: [
          { name: "Manuel Blum" },
          { name: "Robert W. Floyd" },
          { name: "Vaughan Pratt" },
          { name: "Ronald L. Rivest" },
          { name: "Robert E. Tarjan" }
        ],
        referenceIds: [
          "source-bfprt-selection-1973",
          "source-clrs-fourth",
          "source-nist-select-kth"
        ],
        implementations: [
          {
            language: "JavaScript",
            code:
              "function medianOfMedians(values, k, compare = (left, right) => left - right) {\n  if (!Number.isInteger(k) || k < 0 || k >= values.length) {\n    throw new RangeError(\"k must be a valid zero-based index\");\n  }\n\n  function select(items, index) {\n    if (items.length <= 5) {\n      return [...items].sort(compare)[index];\n    }\n\n    const medians = [];\n    for (let start = 0; start < items.length; start += 5) {\n      const group = items.slice(start, start + 5).sort(compare);\n      medians.push(group[Math.floor(group.length / 2)]);\n    }\n\n    const pivot = select(medians, Math.floor(medians.length / 2));\n    const lower = [];\n    const equal = [];\n    const higher = [];\n    for (const value of items) {\n      const order = compare(value, pivot);\n      if (order < 0) lower.push(value);\n      else if (order > 0) higher.push(value);\n      else equal.push(value);\n    }\n\n    if (index < lower.length) return select(lower, index);\n    if (index < lower.length + equal.length) return pivot;\n    return select(higher, index - lower.length - equal.length);\n  }\n\n  return select([...values], k);\n}"
          }
        ],
        content: {
          ko: {
            summary:
              "작은 그룹의 중앙값을 재귀적으로 선택해 최악 선형 시간을 보장하는 결정적 선택 알고리즘",
            description:
              "입력을 보통 5개씩 묶어 각 그룹의 중앙값을 구하고, 그 중앙값들의 중앙값을 피벗으로 삼아 분할한다. 매 단계에서 충분한 비율의 원소가 제거되므로 정렬하지 않고도 k번째 작은 원소를 최악 O(n) 시간에 선택한다.",
            advantages: [
              "무작위성 없이 최악 O(n) 선택 시간을 보장한다.",
              "적대적으로 배열된 입력에서도 피벗 품질의 하한이 유지된다."
            ],
            disadvantages: [
              "그룹 정렬과 재귀 선택의 상수 비용이 커서 실무에서는 단순한 Quickselect보다 느릴 수 있다.",
              "이 예제처럼 배열을 분리해 구현하면 O(n) 보조 공간을 사용한다."
            ],
            useCases: [
              "최악 실행 시간 보장이 필요한 순서 통계량 선택",
              "Quickselect나 Introselect에 결정적인 안전 피벗 제공"
            ]
          },
          en: {
            summary:
              "A deterministic selection algorithm that recursively chooses group medians to guarantee worst-case linear time.",
            description:
              "It usually partitions the input into groups of five, finds each group median, and uses the median of those medians as a pivot. Each step discards a guaranteed fraction of the values, selecting the kth smallest item in O(n) worst-case time without fully sorting the input.",
            advantages: [
              "It guarantees O(n) worst-case selection without randomness.",
              "Its pivot-quality bound survives adversarial input orderings."
            ],
            disadvantages: [
              "Grouping and recursive pivot selection have large constants, so simpler Quickselect is often faster in practice.",
              "An immutable partitioning implementation such as this one uses O(n) auxiliary space."
            ],
            useCases: [
              "Order-statistic selection that requires a worst-case bound",
              "A deterministic fallback pivot for Quickselect or Introselect"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-dial-shortest-path",
        name: "Dial's Algorithm",
        nameKo: "다이얼 최단 경로 알고리즘",
        aliases: [
          "Dial's Shortest Path Algorithm",
          "Shortest-Path Forest with Topological Ordering"
        ],
        complexity: {
          time: { worst: "O(E + WV), where W is the maximum edge weight" },
          space: { auxiliary: "O(WV + V) for a direct bucket array" }
        },
        pseudocode:
          "DIAL(G, source, W)\n  dist[*] <- infinity\n  dist[source] <- 0\n  put source in bucket[0]\n  for distance <- 0 to W * (|V| - 1)\n    while bucket[distance] is not empty\n      u <- remove a vertex from bucket[distance]\n      if u is already settled\n        continue\n      settle u\n      for each edge (u, v, weight)\n        candidate <- distance + weight\n        if candidate < dist[v]\n          remove v from its old bucket if present\n          dist[v] <- candidate\n          put v in bucket[candidate]\n  return dist",
        referenceIds: [
          "source-dial-shortest-path-1969",
          "source-princeton-shortest-paths"
        ],
        content: {
          ko: {
            summary:
              "작은 비음수 정수 가중치 그래프에서 거리 버킷으로 우선순위를 관리하는 최단 경로 알고리즘",
            description:
              "Dijkstra 알고리즘의 최소 우선순위 큐를 0부터 W(V-1)까지의 거리 버킷으로 바꾼다. 현재 비어 있지 않은 최소 거리 버킷을 순서대로 처리하므로 최대 간선 가중치 W가 작을 때 힙의 로그 비용을 피할 수 있다.",
            advantages: [
              "가중치 상한이 작으면 O(E+WV)로 힙 기반 Dijkstra보다 빠를 수 있다.",
              "버킷 이동만으로 우선순위 갱신을 표현할 수 있다."
            ],
            disadvantages: [
              "가중치 상한 W가 크면 버킷 스캔 시간과 메모리가 커진다.",
              "음수나 일반 실수 가중치에는 직접 적용할 수 없다."
            ],
            useCases: [
              "작은 정수 비용을 갖는 도로·통신 네트워크",
              "이동 비용의 상한이 낮은 상태 공간 최단 경로"
            ]
          },
          en: {
            summary:
              "A shortest-path algorithm that manages priorities with distance buckets for small nonnegative integer weights.",
            description:
              "It replaces Dijkstra's minimum-priority queue with distance buckets from 0 through W(V-1). Processing the next nonempty bucket in order avoids heap logarithms when the maximum edge weight W is small.",
            advantages: [
              "With a small weight bound, O(E+WV) can beat heap-based Dijkstra.",
              "Priority updates reduce to moving vertices between buckets."
            ],
            disadvantages: [
              "A large W increases both bucket-scanning time and memory use.",
              "It does not directly support negative or arbitrary real-valued weights."
            ],
            useCases: [
              "Road or communication networks with small integer costs",
              "State-space shortest paths whose move costs have a low bound"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-zero-one-bfs",
        name: "0-1 BFS",
        nameKo: "0-1 너비 우선 탐색",
        aliases: ["Zero-One BFS"],
        complexity: {
          time: { worst: "O(V + E)" },
          space: { auxiliary: "O(V)" }
        },
        pseudocode:
          "ZERO_ONE_BFS(G, source)\n  dist[*] <- infinity\n  dist[source] <- 0\n  deque <- [source]\n  while deque is not empty\n    u <- pop front of deque\n    for each edge (u, v, weight)\n      require weight in {0, 1}\n      if dist[u] + weight < dist[v]\n        dist[v] <- dist[u] + weight\n        if weight = 0\n          push v to front of deque\n        else\n          push v to back of deque\n  return dist",
        referenceIds: ["source-cp-zero-one-bfs", "source-clrs-fourth"],
        content: {
          ko: {
            summary:
              "가중치가 0 또는 1인 그래프에서 deque로 최단 거리를 구하는 알고리즘",
            description:
              "간선을 완화해 거리가 줄어들면 가중치 0의 도착 정점은 deque 앞에, 가중치 1의 도착 정점은 뒤에 넣는다. 이 순서가 미처리 정점을 비감소 거리로 유지하므로 일반 우선순위 큐 없이 선형 시간에 최단 거리를 계산한다.",
            advantages: [
              "이진 가중치 그래프에서 힙 없이 O(V+E)에 동작한다.",
              "BFS와 유사한 구조에 deque 하나만 추가하면 된다."
            ],
            disadvantages: [
              "모든 간선 가중치가 정확히 0 또는 1이어야 한다.",
              "일반 BFS와 달리 방문 여부만이 아니라 거리 완화와 deque 순서를 관리해야 한다."
            ],
            useCases: [
              "무료 이동과 유료 이동이 섞인 경로 비용 최소화",
              "격자에서 벽 제거 횟수나 방향 전환 횟수 최소화"
            ]
          },
          en: {
            summary:
              "A deque-based shortest-path algorithm for graphs whose edge weights are only zero or one.",
            description:
              "After a successful relaxation, it pushes a zero-weight destination to the front of a deque and a one-weight destination to the back. This keeps pending vertices in nondecreasing distance order and computes shortest paths in linear time without a general priority queue.",
            advantages: [
              "It runs in O(V+E) on binary-weight graphs without a heap.",
              "Its structure is close to BFS and needs only a deque."
            ],
            disadvantages: [
              "Every edge weight must be exactly zero or one.",
              "Unlike ordinary BFS, it must manage distance relaxation as well as deque order."
            ],
            useCases: [
              "Paths combining free and paid transitions",
              "Minimizing removed walls or direction changes on a grid"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-gabow-scc",
        name: "Gabow's SCC Algorithm",
        nameKo: "가보 강결합 요소 알고리즘",
        aliases: [
          "Gabow's Path-Based SCC Algorithm",
          "Path-Based Strong Component Algorithm"
        ],
        complexity: {
          time: { worst: "O(V + E)" },
          space: { auxiliary: "O(V)" }
        },
        pseudocode:
          "GABOW_SCC(G)\n  preorder[*] <- unvisited\n  S, P <- empty stacks\n  for each vertex v\n    if v is unvisited\n      DFS(v)\n\nDFS(v)\n  assign preorder[v]\n  push v on S and P\n  for each edge (v, w)\n    if w is unvisited\n      DFS(w)\n    else if w is not assigned to a component\n      while preorder[top(P)] > preorder[w]\n        pop P\n  if top(P) = v\n    pop P\n    pop S through v to form one component",
        referenceIds: [
          "source-gabow-path-scc-2000",
          "source-princeton-directed-graphs"
        ],
        content: {
          ko: {
            summary:
              "깊이 우선 탐색과 두 스택으로 방향 그래프의 강결합 요소를 찾는 경로 기반 알고리즘",
            description:
              "한 스택은 아직 강결합 요소에 배정되지 않은 정점을, 다른 스택은 현재 요소 후보의 경계를 추적한다. 이미 열린 정점으로 향하는 간선을 만나면 경계 스택을 줄이고, DFS가 경계 정점으로 돌아오면 한 강결합 요소를 꺼낸다.",
            advantages: [
              "한 번의 DFS로 모든 강결합 요소를 O(V+E)에 찾는다.",
              "low-link 값을 직접 유지하는 대신 두 번째 스택으로 요소 경계를 표현한다."
            ],
            disadvantages: [
              "두 스택 사이의 불변식이 처음에는 직관적이지 않을 수 있다.",
              "재귀 DFS 구현은 매우 깊은 그래프에서 호출 스택 한계를 넘을 수 있다."
            ],
            useCases: [
              "강결합 요소를 축약한 DAG 구축",
              "의존성 그래프와 상태 전이 그래프의 순환 영역 분석"
            ]
          },
          en: {
            summary:
              "A path-based algorithm that finds strongly connected components with depth-first search and two stacks.",
            description:
              "One stack stores vertices not yet assigned to a component, while the other tracks boundaries of current component candidates. An edge to an open vertex shrinks the boundary stack, and returning to a boundary vertex pops one complete strongly connected component.",
            advantages: [
              "A single DFS finds all strongly connected components in O(V+E).",
              "A second stack represents component boundaries instead of explicitly maintaining low-link values."
            ],
            disadvantages: [
              "The invariant between the two stacks can be difficult to learn.",
              "A recursive DFS implementation can overflow the call stack on very deep graphs."
            ],
            useCases: [
              "Building the condensation DAG of a directed graph",
              "Analyzing cyclic regions in dependency or state-transition graphs"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-stoer-wagner-min-cut",
        name: "Stoer-Wagner Minimum Cut",
        nameKo: "슈퇴어-바그너 최소 컷",
        aliases: ["Stoer-Wagner Algorithm"],
        complexity: {
          time: { worst: "O(V³) with an adjacency-matrix implementation" },
          space: { auxiliary: "O(V²)" }
        },
        pseudocode:
          "STOER_WAGNER(weight)\n  active <- all vertices\n  best <- infinity\n  while |active| > 1\n    added[*] <- false\n    connection[*] <- 0\n    repeatedly add the unused vertex most tightly connected to the added set\n    let s and t be the last two added vertices\n    best <- min(best, connection[t])\n    merge t into s by summing their incident weights\n    remove t from active\n  return best",
        referenceIds: ["source-stoer-wagner-1997", "source-clrs-fourth"],
        content: {
          ko: {
            summary:
              "최대 인접 탐색 단계와 정점 병합을 반복해 무방향 가중 그래프의 전역 최소 컷을 찾는 알고리즘",
            description:
              "각 단계에서 현재 집합과 연결된 가중치 합이 가장 큰 정점을 차례로 더한다. 마지막 두 정점이 만드는 단계 컷을 후보로 기록하고 둘을 병합하며, 모든 단계에서 얻은 후보 중 최솟값이 전역 최소 컷이다.",
            advantages: [
              "최대 흐름을 여러 번 실행하지 않고 무방향 전역 최소 컷을 직접 구한다.",
              "결정적이며 단계별 최대 인접 탐색과 병합으로 구조가 명확하다."
            ],
            disadvantages: [
              "방향 그래프나 음수 가중치 그래프에는 적용할 수 없다.",
              "단순한 인접 행렬 구현은 O(V³)이어서 큰 희소 그래프에 부담이 된다."
            ],
            useCases: [
              "네트워크의 가장 약한 전역 분할 탐색",
              "가중 유사도 그래프의 이분 군집 후보 생성"
            ]
          },
          en: {
            summary:
              "An algorithm that repeatedly performs maximum-adjacency phases and vertex merges to find a global cut in an undirected weighted graph.",
            description:
              "Each phase adds the vertex with the greatest total connection to the current set. The last two vertices define a phase cut, after which they are merged; the lightest candidate over all phases is the global minimum cut.",
            advantages: [
              "It directly finds an undirected global minimum cut without repeated maximum-flow calls.",
              "Its deterministic maximum-adjacency and merge phases have a clear structure."
            ],
            disadvantages: [
              "It is not applicable to directed graphs or negative edge weights.",
              "A straightforward adjacency-matrix implementation costs O(V³), which is heavy for large sparse graphs."
            ],
            useCases: [
              "Finding the weakest global partition in a network",
              "Producing bipartition candidates in weighted similarity graphs"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-successive-shortest-path",
        name: "Successive Shortest Path",
        nameKo: "연속 최단 경로 알고리즘",
        aliases: ["Successive Shortest Paths", "SSP Minimum-Cost Flow"],
        complexity: {
          time: {
            typical:
              "O(VE + A E log V), with one Bellman-Ford initialization and A augmentations"
          },
          space: { auxiliary: "O(V + E)" }
        },
        pseudocode:
          "SUCCESSIVE_SHORTEST_PATH(G, source, sink, targetFlow)\n  build residual graph with reverse edges\n  initialize vertex potentials for negative costs\n  flow, totalCost <- 0, 0\n  while flow < targetFlow\n    run Dijkstra using reduced residual costs\n    if sink is unreachable\n      break\n    update potentials with shortest distances\n    delta <- minimum residual capacity on the path and remaining demand\n    augment delta along the path and update reverse edges\n    flow <- flow + delta\n    totalCost <- totalCost + delta * original path cost\n  return flow, totalCost",
        referenceIds: [
          "source-dalhousie-successive-shortest-path",
          "source-mit-ocw-successive-shortest-path"
        ],
        content: {
          ko: {
            summary:
              "잔여 네트워크의 최단 경로를 따라 유량을 반복 증대하는 최소 비용 흐름 알고리즘",
            description:
              "potential을 이용해 잔여 간선의 reduced cost를 비음수로 유지한 뒤, 공급 정점에서 수요 정점까지 가장 싼 잔여 경로를 찾아 병목 유량을 보낸다. 역간선과 potential을 갱신하며 목표 유량에 도달할 때까지 이 과정을 반복한다.",
            advantages: [
              "증대 경로 관점이 명확해 최소 비용 흐름의 구현과 추적이 비교적 쉽다.",
              "요구 유량이나 증대 횟수가 작을 때 실용적이다."
            ],
            disadvantages: [
              "실행 시간이 증대 횟수 A에 의존하므로 일반적으로 강다항 시간 알고리즘은 아니다.",
              "음수 비용을 다루려면 초기 potential과 reduced cost를 정확히 관리해야 한다."
            ],
            useCases: [
              "운송·할당 문제의 최소 비용 흐름 계산",
              "용량과 단위 비용이 함께 있는 자원 라우팅"
            ]
          },
          en: {
            summary:
              "A minimum-cost-flow algorithm that repeatedly augments along a shortest path in the residual network.",
            description:
              "It maintains vertex potentials so reduced residual costs stay nonnegative, finds the cheapest residual path from supply to demand, and sends its bottleneck flow. Reverse edges and potentials are updated until the requested flow has been delivered.",
            advantages: [
              "Its augmenting-path view makes minimum-cost flow relatively straightforward to implement and inspect.",
              "It is practical when the requested flow or number of augmentations is small."
            ],
            disadvantages: [
              "The running time depends on the augmentation count A and is not generally strongly polynomial.",
              "Negative costs require careful initialization of potentials and reduced costs."
            ],
            useCases: [
              "Minimum-cost flow for transportation and assignment models",
              "Resource routing with both capacities and per-unit costs"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-naive-string-search",
        name: "Naive String Search",
        nameKo: "단순 문자열 검색",
        aliases: ["Brute-Force String Search", "Naive Pattern Matching"],
        complexity: {
          time: {
            best: "O(n)",
            worst: "O((n - m + 1)m)"
          },
          space: { auxiliary: "O(1), excluding reported matches" }
        },
        pseudocode:
          "NAIVE_STRING_SEARCH(text, pattern)\n  matches <- empty list\n  for start <- 0 to length(text) - length(pattern)\n    offset <- 0\n    while offset < length(pattern) and text[start + offset] = pattern[offset]\n      offset <- offset + 1\n    if offset = length(pattern)\n      append start to matches\n  return matches",
        referenceIds: [
          "source-nist-brute-force-string-search",
          "source-nist-string-matching"
        ],
        content: {
          ko: {
            summary:
              "텍스트의 모든 가능한 시작 위치에서 패턴을 직접 비교하는 문자열 검색 알고리즘",
            description:
              "패턴이 들어갈 수 있는 텍스트 위치를 왼쪽부터 하나씩 고르고, 각 위치에서 패턴 문자를 순서대로 비교한다. 전처리가 없고 구현은 단순하지만 반복 문자가 많은 입력에서는 같은 문자를 여러 번 다시 비교한다.",
            advantages: [
              "전처리나 추가 검색 테이블 없이 바로 사용할 수 있다.",
              "구현이 짧아 작은 입력의 기준 결과를 만들고 검증하기 쉽다."
            ],
            disadvantages: [
              "최악의 경우 O((n-m+1)m)번 문자를 비교한다.",
              "불일치에서 얻은 정보를 재사용하지 않아 반복적인 텍스트와 패턴에 비효율적이다."
            ],
            useCases: [
              "짧은 텍스트나 한 번만 수행하는 패턴 검색",
              "고급 문자열 검색 알고리즘을 검증하는 기준 구현"
            ]
          },
          en: {
            summary:
              "A string-search algorithm that directly compares the pattern at every possible text position.",
            description:
              "It visits each text position where the pattern can start and compares pattern characters from left to right. It needs no preprocessing and is easy to implement, but inputs with repeated characters can force the same text to be compared many times.",
            advantages: [
              "It works immediately without preprocessing or auxiliary search tables.",
              "Its short implementation is easy to verify and use as a baseline on small inputs."
            ],
            disadvantages: [
              "The worst case performs O((n-m+1)m) character comparisons.",
              "It does not reuse mismatch information and is inefficient on repetitive text and patterns."
            ],
            useCases: [
              "One-off pattern searches in short text",
              "A reference implementation for testing advanced string matchers"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-bitap",
        name: "Bitap Algorithm",
        nameKo: "비트앱 알고리즘",
        aliases: ["Shift-Or", "Shift-And", "Baeza-Yates-Gonnet Algorithm"],
        complexity: {
          time: {
            preprocessing: "O(m)",
            search: "O(n ceil(m / w)); O(n) when the pattern fits in one word"
          },
          space: { auxiliary: "O(sigma ceil(m / w)) for character masks" }
        },
        pseudocode:
          "SHIFT_AND(text, pattern)\n  mask[c] <- bit vector of positions where pattern[position] = c\n  state <- 0\n  matchBit <- 1 << (length(pattern) - 1)\n  for i <- 0 to length(text) - 1\n    state <- ((state << 1) OR 1) AND mask[text[i]]\n    if state AND matchBit != 0\n      report i - length(pattern) + 1",
        referenceIds: [
          "source-baeza-yates-gonnet-1992",
          "source-nist-string-matching"
        ],
        content: {
          ko: {
            summary:
              "패턴의 여러 일치 상태를 비트 벡터 하나로 병렬 갱신하는 문자열 검색 알고리즘",
            description:
              "각 문자에 대해 패턴에서 그 문자가 나타나는 위치를 비트 마스크로 전처리한다. 텍스트 문자를 읽을 때 상태 비트를 이동하고 해당 문자 마스크와 결합해 여러 접두사 일치 상태를 한 번에 갱신한다.",
            advantages: [
              "패턴이 기계어 한 단어에 들어가면 텍스트 문자마다 소수의 비트 연산만 수행한다.",
              "같은 비트 병렬 틀을 제한된 오류 허용 검색으로 확장할 수 있다."
            ],
            disadvantages: [
              "패턴이 워드 크기를 넘으면 여러 워드를 처리해 장점이 줄어든다.",
              "비트 순서와 언어의 정수 폭을 잘못 다루면 구현 오류가 생기기 쉽다."
            ],
            useCases: [
              "짧은 패턴의 대량 정확 일치 검색",
              "DNA 서열이나 사전 항목의 짧은 패턴 필터링"
            ]
          },
          en: {
            summary:
              "A string matcher that updates many pattern-match states in parallel within bit vectors.",
            description:
              "It preprocesses a bit mask showing every pattern position occupied by each character. For each text character, it shifts the state and combines it with that character's mask, updating many prefix-match states at once.",
            advantages: [
              "When the pattern fits in one machine word, each text character needs only a few bit operations.",
              "The bit-parallel framework can be extended to matching with a limited number of errors."
            ],
            disadvantages: [
              "Patterns longer than a machine word require multiple words and reduce the advantage.",
              "Bit ordering and language-specific integer widths make implementations easy to get wrong."
            ],
            useCases: [
              "High-volume exact matching of short patterns",
              "Filtering short patterns in DNA sequences or dictionary entries"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-ukkonen-suffix-tree",
        name: "Ukkonen's Suffix Tree Construction",
        nameKo: "우코넨 접미사 트리 구축",
        aliases: ["Ukkonen's Algorithm"],
        complexity: {
          time: {
            typical: "O(n) with constant-time child lookup",
            orderedMaps: "O(n log sigma) with comparison-based child maps"
          },
          space: { auxiliary: "O(n)" }
        },
        pseudocode:
          "UKKONEN(text)\n  append a unique terminal symbol\n  root <- empty suffix-tree root\n  activePoint <- root\n  remainder <- 0\n  for each new text position i\n    extend every currently pending suffix implicitly\n    apply the showstopper rule when the next character already exists\n    otherwise create a leaf or split an edge\n    connect consecutive internal nodes with suffix links\n    move the active point by suffix links and decrement remainder\n  return root",
        referenceIds: [
          "source-ukkonen-suffix-tree-1995",
          "source-gusfield-strings"
        ],
        content: {
          ko: {
            summary:
              "문자를 왼쪽부터 받아 접미사 링크와 암시적 확장으로 접미사 트리를 구축하는 온라인 알고리즘",
            description:
              "각 새 문자를 읽을 때 아직 끝나지 않은 접미사 확장을 처리하되, 열린 잎 끝점과 active point를 공유해 반복 작업을 피한다. 간선을 분할해 내부 노드를 만들고 suffix link로 다음 접미사 위치로 이동함으로써 선형 개수의 구조 변경만 수행한다.",
            advantages: [
              "문자열을 왼쪽부터 온라인으로 처리하면서 전체 접미사 트리를 구축한다.",
              "상수 시간 자식 탐색을 가정하면 시간과 공간이 모두 O(n)이다."
            ],
            disadvantages: [
              "active point, remainder, suffix link 사이의 불변식이 복잡해 구현 난도가 높다.",
              "포인터와 간선 구간을 많이 저장하는 접미사 트리는 실제 메모리 상수가 크다."
            ],
            useCases: [
              "반복 부분 문자열과 최장 공통 부분 문자열 질의를 위한 텍스트 인덱스 구축",
              "온라인으로 증가하는 문자열의 접미사 구조 유지"
            ]
          },
          en: {
            summary:
              "An online algorithm that builds a suffix tree left to right using suffix links and implicit extensions.",
            description:
              "For each new character, it processes pending suffix extensions while sharing open leaf ends and an active point to avoid repeated work. Edge splits create internal nodes, and suffix links move to the next suffix position, keeping the number of structural changes linear.",
            advantages: [
              "It processes the string online from left to right while constructing the full suffix tree.",
              "With constant-time child lookup, both time and space are O(n)."
            ],
            disadvantages: [
              "The invariants connecting the active point, remainder, and suffix links are difficult to implement.",
              "A pointer-rich suffix tree has a large practical memory constant."
            ],
            useCases: [
              "Building text indexes for repeated-substring and longest-common-substring queries",
              "Maintaining suffix structure for a string that grows online"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-binary-gcd",
        name: "Binary GCD Algorithm",
        nameKo: "이진 최대공약수 알고리즘",
        aliases: ["Stein's Algorithm", "Binary Euclidean Algorithm"],
        tier: "deep",
        complexity: {
          time: { worst: "O((log uv)²) bit operations" },
          space: { auxiliary: "O(1) big integers" }
        },
        pseudocode:
          "BINARY_GCD(u, v)\n  u, v <- |u|, |v|\n  if u = 0 return v\n  if v = 0 return u\n  shift <- number of common trailing zero bits\n  remove all factors of 2 from u\n  repeat\n    remove all factors of 2 from v\n    if u > v swap u, v\n    v <- v - u\n  until v = 0\n  return u << shift",
        introduced: { year: 1967 },
        authors: [{ name: "Josef Stein" }],
        referenceIds: [
          "source-stein-binary-gcd-1967",
          "source-nist-binary-gcd",
          "source-modern-computer-algebra-third"
        ],
        implementations: [
          {
            language: "JavaScript",
            code:
              "function binaryGcd(left, right) {\n  let u = BigInt(left);\n  let v = BigInt(right);\n  if (u < 0n) u = -u;\n  if (v < 0n) v = -v;\n  if (u === 0n) return v;\n  if (v === 0n) return u;\n\n  let shift = 0n;\n  while (((u | v) & 1n) === 0n) {\n    u >>= 1n;\n    v >>= 1n;\n    shift += 1n;\n  }\n  while ((u & 1n) === 0n) u >>= 1n;\n\n  do {\n    while ((v & 1n) === 0n) v >>= 1n;\n    if (u > v) [u, v] = [v, u];\n    v -= u;\n  } while (v !== 0n);\n\n  return u << shift;\n}"
          }
        ],
        content: {
          ko: {
            summary:
              "나눗셈 대신 비트 이동, 뺄셈과 비교를 사용해 두 정수의 최대공약수를 구하는 알고리즘",
            description:
              "두 수의 공통 2의 인수를 따로 세고, 한쪽만 짝수이면 그 수의 2의 인수를 제거한다. 두 수가 모두 홀수이면 큰 수에서 작은 수를 빼 다시 짝수 인수를 제거하며, 마지막 홀수 최대공약수에 공통 2의 인수를 복원한다.",
            advantages: [
              "정수 나눗셈 없이 이동, 비교, 뺄셈만으로 계산한다.",
              "이진 정수 표현과 BigInt 또는 하드웨어 구현에 자연스럽다."
            ],
            disadvantages: [
              "현대 프로세서와 큰 정수 라이브러리에서는 Euclidean GCD보다 항상 빠른 것은 아니다.",
              "부호, 0 입력과 공통 2의 인수를 정확히 처리해야 한다."
            ],
            useCases: [
              "나눗셈 명령이 비싸거나 없는 정수 하드웨어",
              "큰 정수 산술과 암호 구현의 GCD 계산"
            ]
          },
          en: {
            summary:
              "An algorithm that computes the greatest common divisor using shifts, subtraction, and comparison instead of division.",
            description:
              "It counts common factors of two, removes powers of two from whichever operand is even, and subtracts the smaller value when both are odd. Once one operand reaches zero, it restores the shared power of two to the remaining odd gcd.",
            advantages: [
              "It uses shifts, comparisons, and subtraction rather than integer division.",
              "It maps naturally to binary integers, BigInt arithmetic, and hardware implementations."
            ],
            disadvantages: [
              "It is not universally faster than Euclidean GCD on modern processors or multiprecision libraries.",
              "Signs, zero inputs, and the common power of two require careful handling."
            ],
            useCases: [
              "Integer hardware where division is absent or expensive",
              "GCD operations in multiprecision arithmetic and cryptographic code"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-tonelli-shanks",
        name: "Tonelli-Shanks Algorithm",
        nameKo: "토넬리-섕크스 알고리즘",
        aliases: ["RESSOL Algorithm", "Shanks-Tonelli Algorithm"],
        complexity: {
          time: {
            typical:
              "O(log p + s²) modular multiplications, where p - 1 = q * 2^s"
          },
          space: { auxiliary: "O(1) big integers" }
        },
        pseudocode:
          "TONELLI_SHANKS(n, odd prime p)\n  if n is not a quadratic residue modulo p\n    return no root\n  factor p - 1 as q * 2^s with q odd\n  choose a quadratic nonresidue z\n  c <- z^q mod p\n  x <- n^((q + 1) / 2) mod p\n  t <- n^q mod p\n  m <- s\n  while t != 1\n    find least i such that t^(2^i) = 1\n    b <- c^(2^(m - i - 1)) mod p\n    x, t, c, m <- x*b, t*b², b², i modulo p\n  return x",
        referenceIds: [
          "source-tonelli-quadratic-congruences-1891",
          "source-handbook-applied-cryptography"
        ],
        content: {
          ko: {
            summary:
              "홀수 소수 법에서 이차잉여의 모듈러 제곱근을 구하는 수론 알고리즘",
            description:
              "p-1을 홀수 q와 2의 거듭제곱 2^s로 분해하고 이차 비잉여 하나를 선택한다. 현재 잉여의 2-부분 차수를 단계적으로 줄이는 보정값을 곱해 t를 1로 만들면 함께 갱신한 x가 n의 제곱근이 된다.",
            advantages: [
              "모든 홀수 소수 법에서 존재하는 모듈러 제곱근을 계산할 수 있다.",
              "p가 4로 나눈 나머지가 3인 경우에는 한 번의 모듈러 거듭제곱으로 단순화된다."
            ],
            disadvantages: [
              "입력 법이 소수라는 전제가 필요하며 합성수 법에는 그대로 적용할 수 없다.",
              "이차 비잉여 탐색과 여러 모듈러 거듭제곱이 필요하다."
            ],
            useCases: [
              "유한체와 타원곡선에서 점 좌표 복원",
              "수론·암호 알고리즘에서 소수 법의 제곱근 계산"
            ]
          },
          en: {
            summary:
              "A number-theoretic algorithm for finding a modular square root of a quadratic residue modulo an odd prime.",
            description:
              "It factors p-1 into an odd q times 2^s and chooses a quadratic nonresidue. Correction factors progressively reduce the two-power order of the current residue until t becomes one, at which point the updated x is a square root of n.",
            advantages: [
              "It computes an existing modular square root for every odd prime modulus.",
              "When p is congruent to 3 modulo 4, it simplifies to one modular exponentiation."
            ],
            disadvantages: [
              "The modulus must be prime; the method does not directly handle composite moduli.",
              "It must find a quadratic nonresidue and perform several modular exponentiations."
            ],
            useCases: [
              "Recovering point coordinates over finite fields and elliptic curves",
              "Prime-modulus square roots in number-theoretic and cryptographic algorithms"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-householder-qr",
        name: "Householder QR Decomposition",
        nameKo: "하우스홀더 QR 분해",
        aliases: [
          "Householder QR Factorization",
          "QR via Householder Reflections"
        ],
        complexity: {
          time: { typical: "O(mn²) for an m-by-n matrix with m >= n" },
          space: { typical: "O(mn) when reflectors overwrite the input" }
        },
        pseudocode:
          "HOUSEHOLDER_QR(A)\n  for k <- 0 to min(rows(A), columns(A)) - 1\n    x <- A[k..end, k]\n    choose reflector vector v so Hx = -sign(x[0]) * norm(x) * e1\n    store v below the diagonal\n    A[k..end, k..end] <- A[k..end, k..end] - 2v(v^T A[k..end, k..end])\n  R <- upper triangle of A\n  Q <- product of stored reflectors in reverse order\n  return Q, R",
        referenceIds: [
          "source-householder-unitary-triangularization-1958",
          "source-netlib-lapack"
        ],
        content: {
          ko: {
            summary:
              "직교 반사를 연속 적용해 행렬을 Q와 상삼각 행렬 R로 분해하는 수치 알고리즘",
            description:
              "각 열의 대각선 아래 벡터를 첫 좌표축으로 보내는 Householder reflector를 만든 뒤 남은 부분 행렬에 적용한다. reflector의 곱이 직교 행렬 Q가 되고 변환된 행렬의 상삼각 부분이 R이 된다.",
            advantages: [
              "고전 Gram-Schmidt보다 부동소수점 직교성을 안정적으로 유지한다.",
              "reflector 벡터를 행렬 아래쪽에 압축 저장해 Q를 명시적으로 만들지 않을 수 있다."
            ],
            disadvantages: [
              "희소 행렬에서는 reflector 적용이 fill-in을 만들어 희소성을 잃을 수 있다.",
              "Q를 완전한 행렬로 만들면 추가 시간과 O(m²) 저장 공간이 필요하다."
            ],
            useCases: [
              "선형 최소제곱 문제의 안정적인 해법",
              "고유값·특잇값 알고리즘 전처리와 직교 기저 계산"
            ]
          },
          en: {
            summary:
              "A numerical algorithm that applies orthogonal reflections to factor a matrix into Q and upper-triangular R.",
            description:
              "For each column, it constructs a Householder reflector that maps the subdiagonal vector onto the first coordinate axis, then applies it to the trailing matrix. The reflector product forms orthogonal Q, while the transformed upper triangle is R.",
            advantages: [
              "It preserves numerical orthogonality more reliably than classical Gram-Schmidt.",
              "Reflector vectors can overwrite the lower matrix, avoiding explicit construction of Q."
            ],
            disadvantages: [
              "On sparse matrices, applying reflectors can create fill-in and destroy sparsity.",
              "Forming a full Q requires extra work and O(m²) storage."
            ],
            useCases: [
              "Stable solutions of linear least-squares problems",
              "Orthogonal bases and preprocessing for eigenvalue or singular-value algorithms"
            ]
          }
        }
      }),
      defineAlgorithm({
        id: "algo-conjugate-gradient",
        name: "Conjugate Gradient Method",
        nameKo: "켤레 기울기법",
        aliases: ["Conjugate Gradient", "CG Method"],
        complexity: {
          time: {
            typical: "O(k * nnz(A)) for k iterations on a sparse matrix"
          },
          space: { auxiliary: "O(n), excluding storage of A" }
        },
        pseudocode:
          "CONJUGATE_GRADIENT(A, b, x)\n  r <- b - A*x\n  p <- r\n  residualSquared <- r^T r\n  repeat until convergence\n    Ap <- A*p\n    alpha <- residualSquared / (p^T Ap)\n    x <- x + alpha*p\n    r <- r - alpha*Ap\n    nextResidualSquared <- r^T r\n    if sqrt(nextResidualSquared) <= tolerance\n      break\n    beta <- nextResidualSquared / residualSquared\n    p <- r + beta*p\n    residualSquared <- nextResidualSquared\n  return x",
        referenceIds: [
          "source-hestenes-stiefel-cg-1952",
          "source-netlib-templates"
        ],
        content: {
          ko: {
            summary:
              "대칭 양의 정부호 선형 시스템을 켤레 탐색 방향으로 반복해서 푸는 Krylov 부분공간 알고리즘",
            description:
              "잔차에서 시작한 탐색 방향을 A에 대해 서로 켤레가 되도록 갱신하며 이차 에너지 함수를 최소화한다. 희소 행렬에서는 한 반복의 핵심 비용이 행렬-벡터 곱 하나이므로 큰 시스템을 행렬 분해 없이 풀 수 있다.",
            advantages: [
              "희소 행렬에서 반복당 O(nnz(A)) 연산과 O(n) 보조 공간만 필요하다.",
              "정확한 산술에서는 n차 대칭 양의 정부호 시스템을 최대 n번 반복으로 푼다."
            ],
            disadvantages: [
              "기본 형태는 대칭 양의 정부호 행렬을 전제로 한다.",
              "조건수가 크면 수렴이 느려져 효과적인 전처리기가 필요하다."
            ],
            useCases: [
              "유한요소·편미분방정식에서 생기는 대규모 희소 선형 시스템",
              "정규방정식과 이차 최적화의 반복 해법"
            ]
          },
          en: {
            summary:
              "A Krylov-subspace method that iteratively solves symmetric positive-definite linear systems along conjugate directions.",
            description:
              "Starting from the residual, it updates search directions so they are mutually conjugate with respect to A, minimizing the associated quadratic energy. For a sparse matrix, each iteration is dominated by one matrix-vector product and requires no matrix factorization.",
            advantages: [
              "On sparse matrices, each iteration costs O(nnz(A)) with only O(n) auxiliary space.",
              "In exact arithmetic it solves an n-dimensional symmetric positive-definite system in at most n iterations."
            ],
            disadvantages: [
              "The basic method requires a symmetric positive-definite matrix.",
              "Poor conditioning can slow convergence and make an effective preconditioner necessary."
            ],
            useCases: [
              "Large sparse linear systems from finite elements and partial differential equations",
              "Iterative solutions of normal equations and quadratic optimization problems"
            ]
          }
        }
      })
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
