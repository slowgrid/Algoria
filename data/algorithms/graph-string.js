(function registerAlgoriaGraphStringAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "algorithms-graph-string",
    entities: [
      {
        "id": "algo-dijkstra",
        "type": "algorithm",
        "name": "Dijkstra's Algorithm",
        "aliases": [
          "Dijkstra",
          "Dijkstra Algorithm"
        ],
        "summary": "비음수 가중치 그래프에서 최단 경로를 찾는 알고리즘",
        "description": "아직 확정되지 않은 정점 중 거리가 가장 짧은 정점을 반복해서 선택한다.",
        "complexity": {
          "time": {
            "binaryHeap": "O((V + E) log V)",
            "array": "O(V²)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "introduced": {
          "year": 1959
        },
        "authors": [
          {
            "name": "Edsger W. Dijkstra"
          }
        ],
        "pseudocode": "DIJKSTRA(G, source)\n  for each vertex v\n    distance[v] <- INFINITY\n    parent[v] <- NONE\n  distance[source] <- 0\n  queue <- min-priority queue containing source\n  while queue is not empty\n    u <- extract vertex with minimum distance\n    for each edge (u, v, weight)\n      candidate <- distance[u] + weight\n      if candidate < distance[v]\n        distance[v] <- candidate\n        parent[v] <- u\n        update v in queue\n  return distance, parent",
        "referenceIds": [
          "source-dijkstra-1959",
          "source-nist-dijkstra",
          "source-princeton-shortest-paths"
        ],
        "content": {
          "ko": {
            "summary": "비음수 가중치 그래프에서 한 출발점의 최단 경로를 구하는 알고리즘",
            "description": "아직 확정하지 않은 정점 중 거리가 가장 작은 정점을 선택하고 그 정점의 간선을 완화한다. 모든 간선 가중치가 비음수일 때 선택된 거리가 최종 최단 거리임을 보장한다.",
            "advantages": [
              "비음수 가중치 그래프에서 정확한 단일 출발점 최단 경로를 구한다.",
              "우선순위 큐와 인접 리스트를 사용하면 희소 그래프에서 효율적이다."
            ],
            "disadvantages": [
              "음수 가중치 간선이 있으면 올바른 결과를 보장하지 않는다.",
              "감소 키 또는 중복 항목을 다루는 우선순위 큐 구현이 필요하다."
            ],
            "useCases": [
              "도로망 경로 계획과 네트워크 라우팅",
              "다른 최단 경로·휴리스틱 탐색 알고리즘의 기준 절차"
            ]
          },
          "en": {
            "summary": "A single-source shortest-path algorithm for graphs with nonnegative edge weights.",
            "description": "It selects the unsettled vertex with the smallest tentative distance and relaxes its outgoing edges. With nonnegative weights, each selected distance is guaranteed to be final.",
            "advantages": [
              "It computes exact single-source shortest paths for nonnegative weights.",
              "A priority queue and adjacency lists make it efficient on sparse graphs."
            ],
            "disadvantages": [
              "Negative-weight edges invalidate its correctness guarantee.",
              "The implementation must handle decrease-key operations or duplicate queue entries."
            ],
            "useCases": [
              "Route planning and network routing",
              "A baseline procedure for other shortest-path and heuristic searches"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function dijkstra(graph, source) {\n      const vertices = new Set([source, ...Object.keys(graph)]);\n      for (const edges of Object.values(graph)) {\n        for (const edge of edges) {\n          if (edge.weight < 0) throw new RangeError(\"Dijkstra requires nonnegative weights.\");\n          vertices.add(edge.to);\n        }\n      }\n      const distance = Object.fromEntries([...vertices].map((vertex) => [vertex, Infinity]));\n      const previous = Object.fromEntries([...vertices].map((vertex) => [vertex, null]));\n      const unvisited = new Set(vertices);\n      distance[source] = 0;\n      while (unvisited.size > 0) {\n        let current = null;\n        for (const vertex of unvisited) {\n          if (current === null || distance[vertex] < distance[current]) current = vertex;\n        }\n        if (current === null || distance[current] === Infinity) break;\n        unvisited.delete(current);\n        for (const edge of graph[current] || []) {\n          const candidate = distance[current] + edge.weight;\n          if (candidate < distance[edge.to]) {\n            distance[edge.to] = candidate;\n            previous[edge.to] = current;\n          }\n        }\n      }\n      return { distance, previous };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Dijkstra's Algorithm",
          "ko": "다익스트라 알고리즘"
        }
      },
      {
        "id": "algo-a-star",
        "type": "algorithm",
        "name": "A*",
        "aliases": [
          "A-star",
          "A Star"
        ],
        "summary": "휴리스틱을 사용해 목표 방향을 우선 탐색하는 최단 경로 알고리즘",
        "complexity": {
          "time": {
            "explicitGraph": "O((V + E) log V)",
            "implicitWorstCase": "O(b^d)"
          },
          "space": {
            "explicitGraph": "O(V)",
            "implicitWorstCase": "O(b^d)"
          }
        },
        "pseudocode": "A_STAR(G, start, goal, h)\n  g[start] <- 0\n  parent[start] <- NONE\n  open <- min-priority queue ordered by g[v] + h(v)\n  insert start into open\n  while open is not empty\n    current <- extract minimum\n    if current = goal: return RECONSTRUCT(parent)\n    for each edge (current, next, weight)\n      candidate <- g[current] + weight\n      if candidate < g[next]\n        g[next] <- candidate\n        parent[next] <- current\n        insert or update next in open\n  return NO_PATH",
        "introduced": {
          "year": 1968
        },
        "authors": [
          {
            "name": "Peter E. Hart"
          },
          {
            "name": "Nils J. Nilsson"
          },
          {
            "name": "Bertram Raphael"
          }
        ],
        "referenceIds": [
          "source-astar-1968",
          "source-astar-correction-1972",
          "source-red-blob-a-star"
        ],
        "content": {
          "ko": {
            "summary": "실제 비용과 휴리스틱 추정 비용을 함께 사용해 목표를 찾는 최단 경로 탐색",
            "description": "각 후보를 시작점부터의 실제 비용 g와 목표까지의 추정 비용 h의 합으로 평가한다. 허용 가능한 휴리스틱은 최적 경로를 보장하며, h가 항상 0이면 Dijkstra 탐색과 같은 우선순위를 갖는다.",
            "advantages": [
              "좋은 휴리스틱은 목표와 무관한 영역의 탐색을 크게 줄인다.",
              "허용 가능한 휴리스틱으로 최적 경로를 구할 수 있다."
            ],
            "disadvantages": [
              "정확하면서 저렴한 휴리스틱을 설계하기 어려울 수 있다.",
              "넓은 탐색 공간에서는 열린 집합 때문에 메모리 사용량이 커진다."
            ],
            "useCases": [
              "게임과 로봇의 격자·내비게이션 경로 탐색",
              "상태 공간에서 목표 지향적 최적 경로 검색"
            ]
          },
          "en": {
            "summary": "A shortest-path search guided by both known path cost and a heuristic estimate.",
            "description": "It ranks candidates by the sum of actual cost g from the start and estimated cost h to the goal. An admissible heuristic preserves optimality; when h is always zero, its priority matches Dijkstra's search.",
            "advantages": [
              "A good heuristic greatly reduces exploration away from the goal.",
              "An admissible heuristic can retain optimal-path guarantees."
            ],
            "disadvantages": [
              "Designing a cheap and informative heuristic can be difficult.",
              "The open set can consume substantial memory in broad search spaces."
            ],
            "useCases": [
              "Grid and navigation pathfinding for games and robots",
              "Goal-directed optimal search through state spaces"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function aStar(graph, start, goal, heuristic = () => 0) {\n      const open = new Set([start]);\n      const cameFrom = new Map();\n      const gScore = new Map([[start, 0]]);\n      const fScore = new Map([[start, heuristic(start, goal)]]);\n      while (open.size > 0) {\n        let current = null;\n        for (const vertex of open) {\n          if (current === null || (fScore.get(vertex) ?? Infinity) < (fScore.get(current) ?? Infinity)) current = vertex;\n        }\n        if (current === goal) {\n          const path = [current];\n          while (cameFrom.has(current)) {\n            current = cameFrom.get(current);\n            path.push(current);\n          }\n          return { path: path.reverse(), cost: gScore.get(goal) };\n        }\n        open.delete(current);\n        for (const edge of graph[current] || []) {\n          if (edge.weight < 0) throw new RangeError(\"A* requires nonnegative weights.\");\n          const tentative = gScore.get(current) + edge.weight;\n          if (tentative < (gScore.get(edge.to) ?? Infinity)) {\n            cameFrom.set(edge.to, current);\n            gScore.set(edge.to, tentative);\n            fScore.set(edge.to, tentative + heuristic(edge.to, goal));\n            open.add(edge.to);\n          }\n        }\n      }\n      return null;\n    }"
          }
        ],
        "localizedNames": {
          "en": "A*",
          "ko": "A* 알고리즘"
        }
      },
      {
        "id": "algo-breadth-first-search",
        "type": "algorithm",
        "name": "Breadth-First Search",
        "aliases": [
          "BFS"
        ],
        "summary": "시작 정점에서 가까운 계층부터 그래프를 탐색하는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(V + E)"
          },
          "space": {
            "typical": "O(V)"
          }
        },
        "pseudocode": "BFS(G, start)\n  queue <- empty queue\n  mark start as visited\n  enqueue start\n  while queue is not empty\n    vertex <- dequeue\n    visit vertex\n    for each neighbor of vertex\n      if neighbor is not visited\n        mark neighbor as visited\n        set parent[neighbor] <- vertex\n        enqueue neighbor",
        "referenceIds": [
          "source-nist-bfs",
          "source-princeton-graph-search"
        ],
        "content": {
          "ko": {
            "summary": "시작 정점에서 가까운 계층부터 그래프를 탐색하는 알고리즘",
            "description": "큐를 사용해 시작점에서 같은 간선 거리에 있는 정점들을 차례로 방문한다. 비가중 그래프에서는 처음 도달한 경로가 간선 수 기준 최단 경로다.",
            "advantages": [
              "비가중 그래프의 최단 간선 경로를 구할 수 있다.",
              "인접 리스트에서는 모든 정점과 간선을 한 번씩 처리한다."
            ],
            "disadvantages": [
              "넓은 계층의 정점을 큐에 모두 보관해 메모리를 많이 쓸 수 있다.",
              "가중치가 서로 다른 그래프의 최소 비용 경로를 직접 해결하지 못한다."
            ],
            "useCases": [
              "비가중 그래프의 최단 경로와 거리 계산",
              "연결 요소 탐색과 레벨 순회"
            ]
          },
          "en": {
            "summary": "A graph traversal that explores vertices in increasing distance layers from a start.",
            "description": "Using a queue, it visits vertices at the same edge distance before moving outward. In an unweighted graph, the first discovered route is shortest by number of edges.",
            "advantages": [
              "It finds shortest edge-count paths in unweighted graphs.",
              "With adjacency lists, it processes every vertex and edge only once."
            ],
            "disadvantages": [
              "A wide frontier can require substantial queue memory.",
              "It does not directly solve minimum-cost paths with unequal edge weights."
            ],
            "useCases": [
              "Distances and shortest paths in unweighted graphs",
              "Connected components and level-order traversal"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "BFS 자체가 독립적인 기본 그래프 순회 전략이므로 별도의 설계 기법을 강제로 지정하지 않는다.",
              "en": "BFS is itself a foundational graph traversal strategy, so no separate design technique is forced onto it."
            }
          }
        },
        "localizedNames": {
          "en": "Breadth-First Search",
          "ko": "너비 우선 탐색"
        }
      },
      {
        "id": "algo-depth-first-search",
        "type": "algorithm",
        "name": "Depth-First Search",
        "aliases": [
          "DFS"
        ],
        "summary": "한 경로를 가능한 깊게 진행한 뒤 되돌아오는 그래프 탐색",
        "complexity": {
          "time": {
            "typical": "O(V + E)"
          },
          "space": {
            "typical": "O(V)"
          }
        },
        "pseudocode": "DFS(G, start)\n  mark start as visited\n  visit start\n  for each neighbor of start\n    if neighbor is not visited\n      set parent[neighbor] <- start\n      DFS(G, neighbor)",
        "referenceIds": [
          "source-nist-dfs",
          "source-princeton-graph-search"
        ],
        "content": {
          "ko": {
            "summary": "한 경로를 가능한 깊게 진행한 뒤 되돌아오는 그래프 탐색 알고리즘",
            "description": "재귀 호출이나 명시적 스택으로 방문하지 않은 이웃을 끝까지 따라간 뒤 막히면 되돌아온다. 탐색 과정의 진입과 종료 순서는 여러 그래프 구조 분석의 기반이 된다.",
            "advantages": [
              "인접 리스트에서 O(V + E) 시간으로 전체 그래프를 순회한다.",
              "재귀 구조가 단순하며 위상 정렬과 연결성 분석의 기반이 된다."
            ],
            "disadvantages": [
              "깊은 그래프에서는 재귀 호출 스택이 넘칠 수 있다.",
              "일반적으로 최단 경로를 보장하지 않는다."
            ],
            "useCases": [
              "사이클 탐지와 위상 정렬",
              "미로 탐색, 연결 요소, 강결합 요소 분석"
            ]
          },
          "en": {
            "summary": "A graph traversal that follows one path as deeply as possible before backtracking.",
            "description": "Recursion or an explicit stack follows unvisited neighbors until blocked, then backtracks. Entry and exit order form the basis of many graph-structure analyses.",
            "advantages": [
              "It traverses an adjacency-list graph in O(V + E) time.",
              "Its simple recursive structure underlies topological and connectivity algorithms."
            ],
            "disadvantages": [
              "Very deep graphs can overflow a recursive call stack.",
              "It does not generally guarantee a shortest path."
            ],
            "useCases": [
              "Cycle detection and topological ordering",
              "Maze search, connected components, and strongly connected components"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "DFS 자체가 독립적인 기본 그래프 순회 전략이므로 별도의 설계 기법을 강제로 지정하지 않는다.",
              "en": "DFS is itself a foundational graph traversal strategy, so no separate design technique is forced onto it."
            }
          }
        },
        "localizedNames": {
          "en": "Depth-First Search",
          "ko": "깊이 우선 탐색"
        }
      },
      {
        "id": "algo-bellman-ford",
        "type": "algorithm",
        "name": "Bellman–Ford Algorithm",
        "aliases": [
          "Bellman-Ford"
        ],
        "summary": "음수 가중치를 허용하며 간선을 반복 완화하는 최단 경로 알고리즘",
        "complexity": {
          "time": {
            "worst": "O(VE)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "BELLMAN_FORD(G, source)\n  distance[source] <- 0\n  all other distances <- INFINITY\n  repeat V - 1 times\n    changed <- false\n    for each edge (u, v, weight)\n      if distance[u] + weight < distance[v]\n        distance[v] <- distance[u] + weight\n        parent[v] <- u\n        changed <- true\n    if not changed: break\n  for each edge (u, v, weight)\n    if distance[u] + weight < distance[v]\n      report a reachable negative cycle\n  return distance, parent",
        "introduced": {
          "year": 1958
        },
        "authors": [
          {
            "name": "Richard Bellman"
          },
          {
            "name": "Lester R. Ford Jr."
          }
        ],
        "referenceIds": [
          "source-nist-bellman-ford",
          "source-princeton-shortest-paths",
          "source-bellman-dynamic-programming-1957"
        ],
        "content": {
          "ko": {
            "summary": "음수 간선을 허용하고 음수 사이클을 감지하는 단일 출발점 최단 경로 알고리즘",
            "description": "모든 간선을 최대 V−1번 반복 완화해 각 간선 수 한도에서 가능한 최단 거리를 확장한다. 한 번 더 완화되는 간선이 있으면 출발점에서 도달 가능한 음수 가중치 사이클이 존재한다.",
            "advantages": [
              "음수 가중치 간선이 있는 그래프도 처리한다.",
              "도달 가능한 음수 사이클을 명시적으로 탐지할 수 있다."
            ],
            "disadvantages": [
              "O(VE) 시간으로 비음수 희소 그래프의 Dijkstra보다 느리다.",
              "음수 사이클이 도달 가능하면 유한한 최단 거리가 정의되지 않는다."
            ],
            "useCases": [
              "음수 비용이나 보상을 포함한 최단 경로 모델",
              "거리 벡터 라우팅과 음수 사이클 검증"
            ]
          },
          "en": {
            "summary": "A single-source shortest-path algorithm that permits negative edges and detects negative cycles.",
            "description": "It relaxes every edge up to V−1 times, extending the shortest distances possible under increasing edge-count limits. If another relaxation is possible, a negative-weight cycle is reachable from the source.",
            "advantages": [
              "It handles graphs containing negative edge weights.",
              "It explicitly detects reachable negative-weight cycles."
            ],
            "disadvantages": [
              "Its O(VE) time is slower than Dijkstra on sparse nonnegative graphs.",
              "A reachable negative cycle means finite shortest distances are undefined."
            ],
            "useCases": [
              "Shortest-path models with negative costs or rewards",
              "Distance-vector routing and negative-cycle validation"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function bellmanFord(vertexCount, edges, source) {\n      const distance = Array(vertexCount).fill(Infinity);\n      const previous = Array(vertexCount).fill(null);\n      distance[source] = 0;\n      for (let pass = 1; pass < vertexCount; pass += 1) {\n        let changed = false;\n        for (const { from, to, weight } of edges) {\n          if (distance[from] !== Infinity && distance[from] + weight < distance[to]) {\n            distance[to] = distance[from] + weight;\n            previous[to] = from;\n            changed = true;\n          }\n        }\n        if (!changed) break;\n      }\n      const hasNegativeCycle = edges.some(({ from, to, weight }) => distance[from] !== Infinity && distance[from] + weight < distance[to]);\n      return { distance, previous, hasNegativeCycle };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Bellman–Ford Algorithm",
          "ko": "벨만–포드 알고리즘"
        }
      },
      {
        "id": "algo-floyd-warshall",
        "type": "algorithm",
        "name": "Floyd–Warshall Algorithm",
        "aliases": [
          "Floyd-Warshall"
        ],
        "summary": "모든 정점 쌍의 최단 경로를 동적 계획법으로 계산하는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(V³)"
          },
          "space": {
            "typical": "O(V²)"
          }
        },
        "pseudocode": "FLOYD_WARSHALL(weight)\n  distance <- copy of weight matrix\n  for each vertex v: distance[v][v] <- 0\n  for k <- 0 to V - 1\n    for i <- 0 to V - 1\n      for j <- 0 to V - 1\n        throughK <- distance[i][k] + distance[k][j]\n        if throughK < distance[i][j]\n          distance[i][j] <- throughK\n          next[i][j] <- next[i][k]\n  if any distance[v][v] < 0: report a negative cycle\n  return distance, next",
        "introduced": {
          "year": 1962
        },
        "authors": [
          {
            "name": "Robert W. Floyd"
          },
          {
            "name": "Stephen Warshall"
          }
        ],
        "referenceIds": [
          "source-nist-floyd-warshall",
          "source-princeton-graph-cheatsheet",
          "source-floyd-1962"
        ],
        "content": {
          "ko": {
            "summary": "동적 계획법으로 모든 정점 쌍의 최단 거리를 계산하는 알고리즘",
            "description": "중간 정점으로 사용할 수 있는 집합을 하나씩 늘리며 distance[i][j]와 i→k→j 경로를 비교한다. 음수 간선을 허용하지만 음수 사이클이 없어야 유한한 최단 경로가 정의된다.",
            "advantages": [
              "한 번의 실행으로 모든 정점 쌍의 최단 거리를 구한다.",
              "행렬 기반의 단순한 구조로 음수 간선과 경로 복원을 지원한다."
            ],
            "disadvantages": [
              "O(V³) 시간과 O(V²) 공간 때문에 큰 희소 그래프에는 비효율적이다.",
              "음수 사이클이 있으면 해당 경로들의 최단 거리가 정의되지 않는다."
            ],
            "useCases": [
              "정점 수가 비교적 작은 조밀 그래프의 모든 쌍 거리",
              "전이 폐쇄, 경로 복원, 음수 사이클 검사"
            ]
          },
          "en": {
            "summary": "A dynamic-programming algorithm computing shortest paths between every pair of vertices.",
            "description": "It grows the allowed set of intermediate vertices and compares distance[i][j] with a route through k. Negative edges are allowed, but finite shortest paths require the absence of relevant negative cycles.",
            "advantages": [
              "One run computes shortest distances for every vertex pair.",
              "Its simple matrix form supports negative edges and path reconstruction."
            ],
            "disadvantages": [
              "O(V³) time and O(V²) space are inefficient for large sparse graphs.",
              "Negative cycles make affected shortest paths undefined."
            ],
            "useCases": [
              "All-pairs distances in moderately sized dense graphs",
              "Transitive closure, path reconstruction, and negative-cycle checks"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function floydWarshall(matrix) {\n      const distance = matrix.map((row) => [...row]);\n      for (let via = 0; via < distance.length; via += 1) {\n        for (let from = 0; from < distance.length; from += 1) {\n          for (let to = 0; to < distance.length; to += 1) {\n            distance[from][to] = Math.min(distance[from][to], distance[from][via] + distance[via][to]);\n          }\n        }\n      }\n      return { distance, hasNegativeCycle: distance.some((row, index) => row[index] < 0) };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Floyd–Warshall Algorithm",
          "ko": "플로이드–워셜 알고리즘"
        }
      },
      {
        "id": "algo-bidirectional-dijkstra",
        "type": "algorithm",
        "name": "Bidirectional Dijkstra",
        "summary": "출발점과 도착점 양쪽에서 Dijkstra 탐색을 진행하는 변형",
        "complexity": {
          "time": {
            "worst": "O((V + E) log V)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "BIDIRECTIONAL_DIJKSTRA(G, source, target)\n  initialize forward distances from source\n  initialize backward distances from target\n  best <- INFINITY\n  while both priority queues are nonempty\n    expand the direction with the smaller minimum key\n    relax edges in that direction\n    when a vertex or edge touches both searches\n      update best complete source-to-target distance\n    if minimumForward + minimumBackward >= best\n      stop\n  reconstruct the best path through the meeting point",
        "referenceIds": [
          "source-bidirectional-dijkstra-2024",
          "source-dijkstra-1959"
        ],
        "content": {
          "ko": {
            "summary": "출발점과 도착점에서 Dijkstra 탐색을 동시에 진행하는 단일 쌍 최단 경로 변형",
            "description": "정방향 그래프에서는 출발점부터, 역방향 그래프에서는 도착점부터 비음수 가중치 탐색을 수행한다. 두 탐색의 경계와 현재까지 찾은 최선 경로를 이용한 올바른 종료 조건이 핵심이다.",
            "advantages": [
              "큰 그래프의 단일 출발점–도착점 질의에서 탐색 영역을 줄일 수 있다.",
              "양쪽 탐색 모두 Dijkstra의 비음수 가중치 보장을 활용한다."
            ],
            "disadvantages": [
              "두 탐색이 처음 만나는 즉시 종료하면 잘못된 경로를 선택할 수 있다.",
              "역방향 간선 접근과 두 우선순위 큐·거리 표가 필요하다."
            ],
            "useCases": [
              "대규모 도로망의 지점 간 최단 경로 질의",
              "출발점과 목표가 모두 알려진 희소 그래프 탐색"
            ]
          },
          "en": {
            "summary": "A point-to-point shortest-path variant running Dijkstra searches from both endpoints.",
            "description": "One search advances from the source in the original graph and another from the target in the reverse graph. Correctness depends on a stopping rule that combines both frontiers with the best complete path found so far.",
            "advantages": [
              "It can reduce the explored region for point-to-point queries on large graphs.",
              "Both directions retain Dijkstra's guarantee for nonnegative weights."
            ],
            "disadvantages": [
              "Stopping at the first meeting can return an incorrect path.",
              "It needs reverse-edge access plus two priority queues and distance tables."
            ],
            "useCases": [
              "Point-to-point route queries in large road networks",
              "Sparse-graph search when both source and destination are known"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Bidirectional Dijkstra",
          "ko": "양방향 다익스트라"
        }
      },
      {
        "id": "algo-kruskal",
        "type": "algorithm",
        "name": "Kruskal's Algorithm",
        "aliases": [
          "Kruskal"
        ],
        "summary": "가중치가 작은 간선부터 선택해 최소 신장 트리를 구성하는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(E log E)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "KRUSKAL(G)\n  forest <- empty edge set\n  make a disjoint set for every vertex\n  sort all edges by nondecreasing weight\n  for each edge (u, v) in sorted order\n    if FIND(u) != FIND(v)\n      add (u, v) to forest\n      UNION(u, v)\n    if forest has V - 1 edges: break\n  return forest",
        "introduced": {
          "year": 1956
        },
        "authors": [
          {
            "name": "Joseph B. Kruskal"
          }
        ],
        "referenceIds": [
          "source-kruskal-1956",
          "source-nist-kruskal",
          "source-princeton-mst"
        ],
        "content": {
          "ko": {
            "summary": "가중치가 작은 간선부터 사이클 없이 선택하는 최소 신장 트리 알고리즘",
            "description": "모든 간선을 가중치순으로 정렬하고 서로 다른 연결 요소를 잇는 간선만 채택한다. Union–Find가 두 끝점의 연결 여부와 요소 병합을 효율적으로 처리한다.",
            "advantages": [
              "간선 정렬과 Union–Find로 구현이 명확하다.",
              "희소 그래프에 적합하며 연결되지 않은 입력에서는 최소 신장 숲을 만든다."
            ],
            "disadvantages": [
              "모든 간선을 정렬해야 하므로 간선이 매우 많으면 비용이 크다.",
              "Union–Find가 없으면 사이클 검사가 비효율적이다."
            ],
            "useCases": [
              "통신·도로·배관망의 최소 비용 연결 설계",
              "클러스터링에서 간선을 순서대로 결합하거나 절단하는 처리"
            ]
          },
          "en": {
            "summary": "A minimum-spanning-tree algorithm that accepts light edges without creating cycles.",
            "description": "It sorts every edge by weight and accepts an edge only when it joins different components. Union–Find efficiently tests connectivity and merges those components.",
            "advantages": [
              "Edge sorting plus Union–Find yields a clear implementation.",
              "It suits sparse graphs and produces a minimum spanning forest for disconnected input."
            ],
            "disadvantages": [
              "Sorting every edge is costly when the graph is extremely dense.",
              "Cycle tests become inefficient without a suitable Union–Find structure."
            ],
            "useCases": [
              "Minimum-cost communication, road, and utility networks",
              "Clustering processes that merge or cut edges by weight"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function kruskal(vertexCount, edges) {\n      if (!Number.isInteger(vertexCount) || vertexCount < 0) throw new RangeError(\"vertexCount must be a nonnegative integer.\");\n      const parent = Array.from({ length: vertexCount }, (_, index) => index);\n      const rank = Array(vertexCount).fill(0);\n      const find = (vertex) => {\n        while (parent[vertex] !== vertex) {\n          parent[vertex] = parent[parent[vertex]];\n          vertex = parent[vertex];\n        }\n        return vertex;\n      };\n      const unite = (left, right) => {\n        left = find(left);\n        right = find(right);\n        if (left === right) return false;\n        if (rank[left] < rank[right]) [left, right] = [right, left];\n        parent[right] = left;\n        if (rank[left] === rank[right]) rank[left] += 1;\n        return true;\n      };\n      const tree = [];\n      let weight = 0;\n      for (const edge of [...edges].sort((left, right) => left.weight - right.weight)) {\n        if (unite(edge.from, edge.to)) {\n          tree.push({ ...edge });\n          weight += edge.weight;\n        }\n      }\n      return { edges: tree, weight, connected: vertexCount === 0 || tree.length === vertexCount - 1 };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Kruskal's Algorithm",
          "ko": "크루스칼 알고리즘"
        }
      },
      {
        "id": "algo-prim",
        "type": "algorithm",
        "name": "Prim's Algorithm",
        "aliases": [
          "Prim–Jarník Algorithm",
          "Prim–Dijkstra Algorithm"
        ],
        "summary": "현재 트리와 연결되는 최소 가중치 간선을 반복 선택하는 알고리즘",
        "complexity": {
          "time": {
            "binaryHeap": "O(E log V)",
            "adjacencyMatrix": "O(V²)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "PRIM(G, start)\n  key[start] <- 0\n  all other keys <- INFINITY\n  queue <- min-priority queue of vertices by key\n  while queue is not empty\n    u <- extract minimum\n    add parent edge of u to the tree, if any\n    for each edge (u, v, weight) crossing to the queue\n      if weight < key[v]\n        key[v] <- weight\n        parent[v] <- u\n        decrease key of v\n  return tree edges",
        "referenceIds": [
          "source-nist-prim",
          "source-princeton-mst"
        ],
        "content": {
          "ko": {
            "summary": "하나의 정점에서 시작해 가장 가벼운 경계 간선으로 최소 신장 트리를 성장시키는 알고리즘",
            "description": "현재 트리와 바깥 정점을 잇는 간선 중 가중치가 가장 작은 것을 반복해서 선택한다. 우선순위 큐에는 각 바깥 정점이 트리에 연결될 수 있는 현재 최저 비용을 저장한다.",
            "advantages": [
              "트리를 한 덩어리로 성장시키며 조밀 그래프에서는 행렬 구현이 단순하다.",
              "인접 리스트와 힙을 사용하면 희소 그래프에서도 효율적이다."
            ],
            "disadvantages": [
              "연결되지 않은 그래프에서는 각 요소마다 다시 실행해야 신장 숲을 얻는다.",
              "효율적인 희소 그래프 구현에는 우선순위 갱신 관리가 필요하다."
            ],
            "useCases": [
              "연결된 가중 그래프의 최소 비용 네트워크 설계",
              "정점 중심으로 확장하기 편한 조밀 그래프의 최소 신장 트리"
            ]
          },
          "en": {
            "summary": "A minimum-spanning-tree algorithm that grows one tree through its lightest boundary edge.",
            "description": "It repeatedly selects the lightest edge joining the current tree to an outside vertex. A priority queue stores each outside vertex's cheapest known connection to the tree.",
            "advantages": [
              "It grows one connected tree, with a simple matrix form for dense graphs.",
              "Adjacency lists and a heap also make it efficient on sparse graphs."
            ],
            "disadvantages": [
              "A disconnected graph needs a restart per component to produce a spanning forest.",
              "Efficient sparse implementations must manage priority updates carefully."
            ],
            "useCases": [
              "Minimum-cost network design on connected weighted graphs",
              "Minimum spanning trees in dense graphs suited to vertex-based growth"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Prim's Algorithm",
          "ko": "프림 알고리즘"
        }
      },
      {
        "id": "algo-topological-sort",
        "type": "algorithm",
        "name": "Topological Sort",
        "summary": "방향 비순환 그래프의 정점을 선후 관계에 맞게 나열하는 알고리즘",
        "aliases": [
          "Kahn's Algorithm"
        ],
        "complexity": {
          "time": {
            "typical": "O(V + E)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "KAHN_TOPOLOGICAL_SORT(G)\n  indegree <- count incoming edges for every vertex\n  queue <- all vertices with indegree 0\n  order <- empty list\n  while queue is not empty\n    u <- dequeue\n    append u to order\n    for each edge u -> v\n      indegree[v]--\n      if indegree[v] = 0: enqueue v\n  if length(order) != V: report a directed cycle\n  return order",
        "introduced": {
          "year": 1962
        },
        "authors": [
          {
            "name": "Arthur B. Kahn"
          }
        ],
        "referenceIds": [
          "source-kahn-topological-1962",
          "source-princeton-directed-graphs",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "방향 비순환 그래프에서 모든 간선의 선후 관계를 지키는 정점 순서를 만드는 알고리즘",
            "description": "Kahn 방식은 진입 차수가 0인 정점을 큐에서 꺼내고 그 정점의 간선을 제거하며 새 후보를 추가한다. 모든 정점을 처리하지 못하면 그래프에 방향 사이클이 존재한다.",
            "advantages": [
              "O(V+E) 시간에 위상 순서와 사이클 존재 여부를 함께 얻는다.",
              "진입 차수 0 후보의 선택 규칙으로 가능한 여러 순서를 제어할 수 있다."
            ],
            "disadvantages": [
              "방향 비순환 그래프에서만 완전한 위상 순서가 존재한다.",
              "모든 정점의 진입 차수와 후보 큐를 유지해야 한다."
            ],
            "useCases": [
              "빌드·패키지·과목 선수 조건의 의존성 순서",
              "DAG 작업 스케줄링과 데이터 처리 파이프라인"
            ]
          },
          "en": {
            "summary": "An algorithm ordering a directed acyclic graph so every edge respects precedence.",
            "description": "Kahn's form dequeues zero-indegree vertices, removes their outgoing edges, and adds newly eligible vertices. If not every vertex is processed, the graph contains a directed cycle.",
            "advantages": [
              "It produces an order and detects cycles in O(V+E) time.",
              "The choice among zero-indegree candidates can control which valid order is returned."
            ],
            "disadvantages": [
              "A complete topological order exists only for directed acyclic graphs.",
              "It must maintain every indegree and a queue of eligible vertices."
            ],
            "useCases": [
              "Dependency order for builds, packages, and course prerequisites",
              "DAG task scheduling and data-processing pipelines"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "Topological Sort는 Kahn 방식이나 DFS 방식으로 구현되는 독립 그래프 절차이므로 하나의 별도 설계 Technique으로 고정하지 않는다.",
              "en": "Topological Sort is an independent graph procedure implemented via Kahn's method or DFS, so it is not forced into one separate design technique."
            }
          }
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function topologicalSort(graph) {\n      const vertices = new Set(Object.keys(graph));\n      for (const neighbors of Object.values(graph)) for (const vertex of neighbors) vertices.add(vertex);\n      const indegree = Object.fromEntries([...vertices].map((vertex) => [vertex, 0]));\n      for (const neighbors of Object.values(graph)) for (const vertex of neighbors) indegree[vertex] += 1;\n      const queue = [...vertices].filter((vertex) => indegree[vertex] === 0);\n      const order = [];\n      for (let head = 0; head < queue.length; head += 1) {\n        const vertex = queue[head];\n        order.push(vertex);\n        for (const neighbor of graph[vertex] || []) if (--indegree[neighbor] === 0) queue.push(neighbor);\n      }\n      if (order.length !== vertices.size) throw new RangeError(\"The graph contains a cycle.\");\n      return order;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Topological Sort",
          "ko": "위상 정렬"
        }
      },
      {
        "id": "algo-edmonds-karp",
        "type": "algorithm",
        "name": "Edmonds–Karp Algorithm",
        "aliases": [
          "Edmonds-Karp"
        ],
        "summary": "BFS로 증가 경로를 선택하는 Ford–Fulkerson 방식의 최대 유량 알고리즘",
        "complexity": {
          "time": {
            "worst": "O(VE²)"
          },
          "space": {
            "auxiliary": "O(V)",
            "includingResidualNetwork": "O(V + E)"
          }
        },
        "pseudocode": "EDMONDS_KARP(G, source, sink)\n  flow <- 0\n  residual <- residual network of G\n  while BFS(residual, source) reaches sink\n    parent <- predecessors recorded by BFS\n    bottleneck <- minimum residual capacity on source-to-sink path\n    for each edge (u, v) on the path\n      residual[u, v] <- residual[u, v] - bottleneck\n      residual[v, u] <- residual[v, u] + bottleneck\n    flow <- flow + bottleneck\n  return flow",
        "introduced": {
          "year": 1972
        },
        "authors": [
          {
            "name": "Jack Edmonds"
          },
          {
            "name": "Richard M. Karp"
          }
        ],
        "referenceIds": [
          "source-edmonds-karp-1972",
          "source-princeton-max-flow",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "잔여 그래프에서 BFS로 가장 적은 간선의 증가 경로를 선택하는 최대 유량 알고리즘",
            "description": "Ford–Fulkerson 방법에서 매 반복마다 BFS로 최단 증가 경로를 찾고 병목 용량만큼 유량을 보낸다. 이 경로 선택 규칙 덕분에 용량 값과 무관하게 O(VE²)의 다항 시간 상한을 갖는다.",
            "advantages": [
              "용량 크기에 의존하지 않는 O(VE²) 최악 시간 상한이 있다.",
              "BFS와 잔여 용량 갱신만으로 구현 흐름이 명확하다."
            ],
            "disadvantages": [
              "큰 밀집 네트워크에서는 Dinic이나 push–relabel 계열보다 느릴 수 있다.",
              "역방향 간선을 포함한 잔여 그래프를 정확히 유지해야 한다."
            ],
            "useCases": [
              "중소 규모 네트워크의 최대 s–t 유량과 최소 컷 계산",
              "이분 그래프 매칭을 최대 유량으로 환원한 교육용·기준 구현"
            ]
          },
          "en": {
            "summary": "A maximum-flow algorithm that uses BFS to choose a minimum-edge augmenting path in the residual graph.",
            "description": "It instantiates Ford–Fulkerson by finding a shortest augmenting path with BFS on every iteration and sending the bottleneck capacity along it. This path rule yields an O(VE²) polynomial bound independent of capacity magnitudes.",
            "advantages": [
              "It has an O(VE²) worst-case bound independent of capacity values.",
              "Its control flow uses only BFS and residual-capacity updates."
            ],
            "disadvantages": [
              "It can be slower than Dinic or push–relabel methods on large dense networks.",
              "The residual graph, including reverse edges, must be maintained correctly."
            ],
            "useCases": [
              "Maximum s–t flow and minimum cut in small or medium networks",
              "Teaching and baseline implementations of bipartite matching via max-flow reduction"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function edmondsKarp(capacity, source, sink) {\n      const n = capacity.length;\n      const residual = capacity.map((row) => [...row]);\n      let maxFlow = 0;\n      while (true) {\n        const parent = Array(n).fill(-1);\n        parent[source] = source;\n        const queue = [source];\n        for (let head = 0; head < queue.length && parent[sink] < 0; head += 1) {\n          const from = queue[head];\n          for (let to = 0; to < n; to += 1) if (parent[to] < 0 && residual[from][to] > 0) {\n            parent[to] = from;\n            queue.push(to);\n          }\n        }\n        if (parent[sink] < 0) break;\n        let amount = Infinity;\n        for (let vertex = sink; vertex !== source; vertex = parent[vertex]) amount = Math.min(amount, residual[parent[vertex]][vertex]);\n        for (let vertex = sink; vertex !== source; vertex = parent[vertex]) {\n          residual[parent[vertex]][vertex] -= amount;\n          residual[vertex][parent[vertex]] += amount;\n        }\n        maxFlow += amount;\n      }\n      return { maxFlow, residual };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Edmonds–Karp Algorithm",
          "ko": "에드몬즈–카프 알고리즘"
        }
      },
      {
        "id": "algo-tarjan-scc",
        "type": "algorithm",
        "name": "Tarjan's SCC Algorithm",
        "aliases": [
          "Tarjan SCC"
        ],
        "summary": "한 번의 DFS로 강한 연결 요소를 찾는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(V + E)"
          },
          "space": {
            "auxiliary": "O(V)"
          }
        },
        "pseudocode": "TARJAN_SCC(G)\n  index <- 0; stack <- empty\n  for each vertex v not yet indexed\n    STRONG_CONNECT(v)\n\nSTRONG_CONNECT(v)\n  v.index <- index; v.lowlink <- index; index++\n  push v; v.onStack <- true\n  for each edge v -> w\n    if w is unvisited\n      STRONG_CONNECT(w)\n      v.lowlink <- min(v.lowlink, w.lowlink)\n    else if w.onStack\n      v.lowlink <- min(v.lowlink, w.index)\n  if v.lowlink = v.index\n    pop through v as one strongly connected component",
        "introduced": {
          "year": 1972
        },
        "authors": [
          {
            "name": "Robert Tarjan"
          }
        ],
        "referenceIds": [
          "source-tarjan-1972",
          "source-princeton-graph-cheatsheet",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "한 번의 깊이 우선 탐색과 lowlink 값으로 방향 그래프의 강결합 요소를 찾는 알고리즘",
            "description": "각 정점에 DFS 방문 순서와 현재 DFS 부분 트리에서 도달 가능한 가장 이른 활성 정점의 번호를 기록한다. 정점의 lowlink가 자신의 방문 번호와 같아지면 스택에서 그 정점까지 꺼낸 집합이 하나의 SCC다.",
            "advantages": [
              "그래프 전체를 O(V+E) 시간에 한 번만 순회한다.",
              "SCC를 발견하는 즉시 출력할 수 있어 전치 그래프가 필요 없다."
            ],
            "disadvantages": [
              "lowlink 갱신과 스택 포함 여부를 혼동하면 구현 오류가 생기기 쉽다.",
              "재귀 DFS 구현은 매우 깊은 그래프에서 호출 스택 한계에 걸릴 수 있다."
            ],
            "useCases": [
              "의존성 그래프의 순환 묶음 탐지",
              "프로그램 분석·상태 그래프를 SCC 축약 DAG로 변환"
            ]
          },
          "en": {
            "summary": "An algorithm finding strongly connected components with one DFS and lowlink values.",
            "description": "Each vertex stores its DFS index and the earliest active vertex reachable from its DFS subtree. When a vertex's lowlink equals its index, the vertices popped through it form one strongly connected component.",
            "advantages": [
              "It traverses the whole graph once in O(V+E) time.",
              "It emits components without constructing a transposed graph."
            ],
            "disadvantages": [
              "Lowlink updates and on-stack checks are easy to implement incorrectly.",
              "A recursive implementation can exceed the call-stack limit on very deep graphs."
            ],
            "useCases": [
              "Detecting cyclic groups in dependency graphs",
              "Condensing program-analysis or state graphs into an SCC DAG"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "Tarjan SCC는 DFS와 lowlink 불변식으로 정의되는 독립 그래프 절차이므로 하나의 별도 설계 Technique으로 고정하지 않는다.",
              "en": "Tarjan SCC is an independent graph procedure defined by DFS and a lowlink invariant, so it is not assigned a separate general design technique."
            }
          }
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function tarjanScc(graph) {\n      let nextIndex = 0;\n      const index = new Map();\n      const low = new Map();\n      const stack = [];\n      const onStack = new Set();\n      const components = [];\n      const visit = (vertex) => {\n        index.set(vertex, nextIndex);\n        low.set(vertex, nextIndex++);\n        stack.push(vertex);\n        onStack.add(vertex);\n        for (const neighbor of graph[vertex] || []) {\n          if (!index.has(neighbor)) { visit(neighbor); low.set(vertex, Math.min(low.get(vertex), low.get(neighbor))); }\n          else if (onStack.has(neighbor)) low.set(vertex, Math.min(low.get(vertex), index.get(neighbor)));\n        }\n        if (low.get(vertex) === index.get(vertex)) {\n          const component = [];\n          let item;\n          do { item = stack.pop(); onStack.delete(item); component.push(item); } while (item !== vertex);\n          components.push(component);\n        }\n      };\n      const vertices = new Set([...Object.keys(graph), ...Object.values(graph).flat()]);\n      for (const vertex of vertices) if (!index.has(vertex)) visit(vertex);\n      return components;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Tarjan's SCC Algorithm",
          "ko": "타잔 강결합 요소 알고리즘"
        }
      },
      {
        "id": "algo-kmp",
        "type": "algorithm",
        "name": "Knuth–Morris–Pratt",
        "aliases": [
          "KMP"
        ],
        "summary": "패턴의 접두사와 접미사 정보를 이용해 비교를 건너뛰는 문자열 검색",
        "complexity": {
          "time": {
            "preprocessing": "O(m)",
            "searching": "O(n)",
            "total": "O(n + m)"
          },
          "space": {
            "typical": "O(m)"
          }
        },
        "pseudocode": "KMP_SEARCH(text, pattern)\n  lps <- BUILD_PREFIX_TABLE(pattern)\n  i <- 0; j <- 0\n  while i < length(text)\n    if text[i] = pattern[j]\n      i <- i + 1; j <- j + 1\n      if j = length(pattern): report i - j; j <- lps[j - 1]\n    else if j > 0\n      j <- lps[j - 1]\n    else\n      i <- i + 1",
        "introduced": {
          "year": 1977
        },
        "authors": [
          {
            "name": "Donald E. Knuth"
          },
          {
            "name": "James H. Morris Jr."
          },
          {
            "name": "Vaughan R. Pratt"
          }
        ],
        "referenceIds": [
          "source-kmp-1977",
          "source-nist-kmp",
          "source-gusfield-strings"
        ],
        "content": {
          "ko": {
            "summary": "패턴의 접두사·접미사 정보를 이용해 되풀이 비교를 피하는 문자열 검색 알고리즘",
            "description": "패턴을 전처리해 불일치 뒤에도 이미 일치한 접두사 정보를 재사용하는 실패 함수를 만든다. 텍스트 인덱스를 뒤로 돌리지 않아 전처리와 검색을 합쳐 선형 시간을 보장한다.",
            "advantages": [
              "최악의 경우에도 O(n + m) 시간을 보장한다.",
              "텍스트 문자를 되돌아가며 다시 읽지 않아 스트리밍 처리에 활용할 수 있다."
            ],
            "disadvantages": [
              "패턴마다 O(m) 전처리 표가 필요하다.",
              "아주 짧은 패턴에서는 전처리와 인덱스 관리 비용이 이점보다 클 수 있다."
            ],
            "useCases": [
              "대용량 텍스트에서 단일 패턴 검색",
              "문자 스트림과 DNA 서열의 정확한 부분 문자열 탐색"
            ]
          },
          "en": {
            "summary": "A string search that uses prefix-suffix information to avoid repeated comparisons.",
            "description": "It preprocesses the pattern into a failure table that reuses matched-prefix information after a mismatch. Because the text index never moves backward, preprocessing plus search is linear.",
            "advantages": [
              "It guarantees O(n + m) worst-case time.",
              "It never rereads earlier text positions, which supports streaming use."
            ],
            "disadvantages": [
              "Each pattern requires an O(m) preprocessing table.",
              "For very short patterns, preprocessing and index bookkeeping may outweigh the benefit."
            ],
            "useCases": [
              "Single-pattern search in large texts",
              "Exact substring search in streams and DNA sequences"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function kmpSearch(text, pattern) {\n      if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);\n      const prefix = Array(pattern.length).fill(0);\n      for (let index = 1, matched = 0; index < pattern.length;) {\n        if (pattern[index] === pattern[matched]) prefix[index++] = ++matched;\n        else if (matched > 0) matched = prefix[matched - 1];\n        else index += 1;\n      }\n      const matches = [];\n      for (let index = 0, matched = 0; index < text.length;) {\n        if (text[index] === pattern[matched]) {\n          index += 1;\n          matched += 1;\n          if (matched === pattern.length) {\n            matches.push(index - matched);\n            matched = prefix[matched - 1];\n          }\n        } else if (matched > 0) matched = prefix[matched - 1];\n        else index += 1;\n      }\n      return matches;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Knuth–Morris–Pratt",
          "ko": "KMP 문자열 검색"
        }
      },
      {
        "id": "algo-rabin-karp",
        "type": "algorithm",
        "name": "Rabin–Karp Algorithm",
        "aliases": [
          "Karp–Rabin"
        ],
        "summary": "롤링 해시로 텍스트의 부분 문자열과 패턴을 비교하는 알고리즘",
        "complexity": {
          "time": {
            "expected": "O(n + m)",
            "worst": "O(nm)"
          },
          "space": {
            "auxiliary": "O(1)"
          }
        },
        "pseudocode": "RABIN_KARP(text, pattern, base, modulus)\n  patternHash <- hash(pattern)\n  windowHash <- hash(first length(pattern) characters of text)\n  for start <- 0 to length(text) - length(pattern)\n    if windowHash = patternHash\n      if text[start..start + m) equals pattern: report start\n    if another window exists\n      remove the outgoing character from windowHash\n      add the incoming character using a rolling hash",
        "introduced": {
          "year": 1987
        },
        "authors": [
          {
            "name": "Richard M. Karp"
          },
          {
            "name": "Michael O. Rabin"
          }
        ],
        "referenceIds": [
          "source-rabin-karp-1987",
          "source-nist-string-matching",
          "source-gusfield-strings"
        ],
        "content": {
          "ko": {
            "summary": "롤링 해시로 텍스트 창과 패턴의 후보 일치를 빠르게 찾는 문자열 검색",
            "description": "패턴과 같은 길이의 텍스트 창 해시를 상수 시간에 갱신하고 해시가 같을 때만 실제 문자열을 비교한다. 충돌 검증을 포함하면 정확하지만 충돌이 반복되면 최악 O(nm)이 된다.",
            "advantages": [
              "롤링 해시로 다음 창의 값을 빠르게 갱신한다.",
              "여러 패턴이나 2차원 패턴 검색으로 일반화하기 쉽다."
            ],
            "disadvantages": [
              "해시 충돌 시 실제 문자를 다시 비교해야 한다.",
              "나쁜 모듈러스나 적대적 입력에서는 최악 O(nm)이 될 수 있다."
            ],
            "useCases": [
              "문서 내 부분 문자열과 표절 후보 탐색",
              "여러 같은 길이 패턴 또는 2차원 패턴의 후보 필터링"
            ]
          },
          "en": {
            "summary": "A string search using a rolling hash to identify candidate pattern windows quickly.",
            "description": "It updates the hash of each pattern-length text window in constant time and verifies characters only when hashes match. Verification makes it exact, but repeated collisions can cause O(nm) worst-case work.",
            "advantages": [
              "A rolling hash updates the next window efficiently.",
              "It generalizes naturally to multiple patterns and two-dimensional matching."
            ],
            "disadvantages": [
              "Hash collisions require direct character verification.",
              "Poor parameters or adversarial input can produce O(nm) worst-case time."
            ],
            "useCases": [
              "Substring and plagiarism-candidate search in documents",
              "Candidate filtering for equal-length or two-dimensional patterns"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function rabinKarp(text, pattern, modulus = 1000000007, base = 257) {\n      if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);\n      if (pattern.length > text.length) return [];\n      let patternHash = 0;\n      let windowHash = 0;\n      let power = 1;\n      for (let index = 0; index < pattern.length; index += 1) {\n        patternHash = (patternHash * base + pattern.charCodeAt(index)) % modulus;\n        windowHash = (windowHash * base + text.charCodeAt(index)) % modulus;\n        if (index + 1 < pattern.length) power = (power * base) % modulus;\n      }\n      const matches = [];\n      for (let start = 0; start <= text.length - pattern.length; start += 1) {\n        if (patternHash === windowHash && text.slice(start, start + pattern.length) === pattern) matches.push(start);\n        if (start + pattern.length < text.length) {\n          windowHash = (windowHash - text.charCodeAt(start) * power) % modulus;\n          if (windowHash < 0) windowHash += modulus;\n          windowHash = (windowHash * base + text.charCodeAt(start + pattern.length)) % modulus;\n        }\n      }\n      return matches;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Rabin–Karp Algorithm",
          "ko": "라빈–카프 알고리즘"
        }
      },
      {
        "id": "algo-boyer-moore",
        "type": "algorithm",
        "name": "Boyer–Moore Algorithm",
        "aliases": [
          "Boyer-Moore"
        ],
        "summary": "패턴의 오른쪽부터 비교하고 불일치 정보를 이용해 크게 이동하는 검색",
        "complexity": {
          "time": {
            "average": "sublinear character inspections",
            "worst": "O(nm)"
          },
          "space": {
            "preprocessing": "O(m + |Σ|)"
          }
        },
        "pseudocode": "BOYER_MOORE(text, pattern)\n  badCharacter <- build last-occurrence table\n  goodSuffix <- build suffix-shift table\n  alignment <- 0\n  while alignment <= length(text) - length(pattern)\n    j <- length(pattern) - 1\n    while j >= 0 and pattern[j] = text[alignment + j]\n      j <- j - 1\n    if j < 0: report alignment\n    shift by max(bad-character shift, good-suffix shift)",
        "introduced": {
          "year": 1977
        },
        "authors": [
          {
            "name": "Robert S. Boyer"
          },
          {
            "name": "J. Strother Moore"
          }
        ],
        "referenceIds": [
          "source-boyer-moore-1977",
          "source-boyer-moore-authors",
          "source-nist-string-matching"
        ],
        "content": {
          "ko": {
            "summary": "패턴을 오른쪽부터 비교하고 불일치 정보로 여러 위치를 건너뛰는 문자열 검색",
            "description": "bad-character와 good-suffix 표를 전처리하고 각 정렬 위치에서 패턴의 끝부터 비교한다. 긴 패턴과 큰 알파벳에서는 텍스트의 모든 문자를 검사하지 않는 평균적 이점이 크다.",
            "advantages": [
              "실제 텍스트에서 한 번에 여러 위치를 건너뛰어 평균적으로 매우 빠르다.",
              "긴 패턴과 큰 알파벳에서 특히 효과적이다."
            ],
            "disadvantages": [
              "두 이동 표의 올바른 전처리 구현이 복잡하다.",
              "기본 형태는 특정 반복 입력에서 최악 O(nm)이 될 수 있다."
            ],
            "useCases": [
              "편집기와 문서의 단일 긴 패턴 검색",
              "바이트·문자 알파벳이 큰 데이터에서 정확한 부분 문자열 찾기"
            ]
          },
          "en": {
            "summary": "A string search that compares from the pattern's right end and skips alignments after mismatches.",
            "description": "It preprocesses bad-character and good-suffix tables and compares from the pattern's end at each alignment. Long patterns and large alphabets often let it avoid inspecting every text character.",
            "advantages": [
              "Large mismatch shifts make it very fast on typical text.",
              "It is particularly effective for long patterns over large alphabets."
            ],
            "disadvantages": [
              "Correct preprocessing of both shift tables is complex.",
              "The basic form can take O(nm) on certain repetitive inputs."
            ],
            "useCases": [
              "Searching for one long pattern in editors and documents",
              "Exact substring search over large byte or character alphabets"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function boyerMoore(text, pattern) {\n      if (pattern.length === 0) return Array.from({ length: text.length + 1 }, (_, index) => index);\n      const last = new Map();\n      for (let index = 0; index < pattern.length; index += 1) last.set(pattern[index], index);\n      const matches = [];\n      let offset = 0;\n      while (offset <= text.length - pattern.length) {\n        let index = pattern.length - 1;\n        while (index >= 0 && pattern[index] === text[offset + index]) index -= 1;\n        if (index < 0) {\n          matches.push(offset);\n          offset += Math.max(1, pattern.length - (last.get(text[offset + pattern.length]) ?? -1));\n        } else {\n          offset += Math.max(1, index - (last.get(text[offset + index]) ?? -1));\n        }\n      }\n      return matches;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Boyer–Moore Algorithm",
          "ko": "보이어–무어 알고리즘"
        }
      },
      {
        "id": "algo-z-algorithm",
        "type": "algorithm",
        "name": "Z Algorithm",
        "summary": "각 위치에서 문자열 접두사와 일치하는 최대 길이를 계산하는 알고리즘",
        "aliases": [
          "Z-Function Algorithm"
        ],
        "complexity": {
          "time": {
            "typical": "O(n)"
          },
          "space": {
            "zArray": "O(n)"
          }
        },
        "pseudocode": "Z_FUNCTION(S)\n  Z[0] <- length(S)\n  left <- 0; right <- 0\n  for i <- 1 to length(S) - 1\n    if i < right\n      Z[i] <- min(right - i, Z[i - left])\n    while i + Z[i] < length(S) and S[Z[i]] = S[i + Z[i]]\n      Z[i]++\n    if i + Z[i] > right\n      left <- i; right <- i + Z[i]\n  return Z",
        "referenceIds": [
          "source-gusfield-strings",
          "source-cmu-z-algorithm"
        ],
        "content": {
          "ko": {
            "summary": "각 위치에서 시작하는 접미사와 전체 문자열 접두사의 최장 일치 길이를 선형 시간에 계산하는 알고리즘",
            "description": "가장 오른쪽까지 뻗은 이전 Z-box [left,right)를 유지하고 그 안의 위치에서는 이미 계산한 Z 값을 재사용한다. 경계 밖 문자만 새로 비교하므로 전체 확장 횟수가 선형이며, pattern + 구분자 + text의 Z 값으로 정확한 패턴 출현을 찾을 수 있다.",
            "advantages": [
              "길이 n 문자열의 모든 접두사 일치 길이를 O(n)에 계산한다.",
              "하나의 Z 배열로 정확한 문자열 검색과 주기·경계 분석을 지원한다."
            ],
            "disadvantages": [
              "Z-box 경계와 인덱스 규약을 혼동하면 off-by-one 오류가 생기기 쉽다.",
              "검색에 사용할 구분자는 패턴과 텍스트에 나타나지 않거나 별도 토큰으로 처리해야 한다."
            ],
            "useCases": [
              "pattern + separator + text를 이용한 정확한 부분 문자열 검색",
              "문자열의 주기, 접두사이자 접미사인 경계, 반복 구조 분석"
            ]
          },
          "en": {
            "summary": "An algorithm computing, in linear time, the longest match between the full prefix and the suffix starting at every position.",
            "description": "It maintains the previously discovered Z-box [left,right) that reaches farthest right and reuses known Z values for positions inside it. Only characters beyond the boundary are compared, keeping total extension work linear; Z values of pattern + separator + text reveal exact matches.",
            "advantages": [
              "It computes all prefix-match lengths of an n-character string in O(n).",
              "One Z array supports exact matching as well as period and border analysis."
            ],
            "disadvantages": [
              "Z-box boundaries and indexing conventions are prone to off-by-one errors.",
              "A search separator must be absent from both inputs or represented as a distinct token."
            ],
            "useCases": [
              "Exact substring search using pattern + separator + text",
              "Finding periods, prefix-suffix borders, and repetition structure"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Z Algorithm",
          "ko": "Z 알고리즘"
        }
      },
      {
        "id": "algo-aho-corasick",
        "type": "algorithm",
        "name": "Aho–Corasick Algorithm",
        "aliases": [
          "Aho-Corasick"
        ],
        "summary": "Trie와 실패 링크를 이용해 여러 패턴을 동시에 찾는 문자열 검색",
        "complexity": {
          "time": {
            "build": "O(L)",
            "search": "O(n + z)"
          },
          "space": {
            "sparseTransitions": "O(L)"
          }
        },
        "pseudocode": "BUILD_AHO_CORASICK(patterns)\n  insert every pattern into a trie\n  queue <- all root children\n  while queue is not empty\n    state <- dequeue\n    for each outgoing character edge to next\n      set next.failure using state.failure transitions\n      inherit outputs from next.failure\n      enqueue next\n\nSEARCH(text)\n  follow trie edges and failure links for each character\n  report every output pattern at the current state",
        "introduced": {
          "year": 1975
        },
        "authors": [
          {
            "name": "Alfred V. Aho"
          },
          {
            "name": "Margaret J. Corasick"
          }
        ],
        "referenceIds": [
          "source-aho-corasick-1975",
          "source-nist-aho-corasick",
          "source-gusfield-strings"
        ],
        "content": {
          "ko": {
            "summary": "Trie와 실패 링크로 여러 패턴을 한 번에 찾는 문자열 검색 알고리즘",
            "description": "모든 패턴을 Trie에 넣고 BFS로 실패 링크와 출력 집합을 계산해 유한 상태 기계를 만든다. 검색 중 불일치해도 적절한 접미 상태로 이동하므로 패턴 수와 무관하게 텍스트를 한 번 통과한다.",
            "advantages": [
              "여러 패턴의 모든 출현을 O(n+z) 검색 시간에 찾는다.",
              "실패 링크가 이미 일치한 접미 정보를 재사용한다."
            ],
            "disadvantages": [
              "패턴 집합을 위한 Trie와 실패 링크 메모리가 필요하다.",
              "패턴이 자주 바뀌면 자동 기계를 다시 만들거나 동적으로 관리해야 한다."
            ],
            "useCases": [
              "악성 코드 시그니처와 금칙어 다중 검색",
              "사전 키워드를 한 번에 찾는 로그·문서 분석"
            ]
          },
          "en": {
            "summary": "A multi-pattern string search combining a trie with failure links.",
            "description": "It inserts all patterns into a trie and uses BFS to compute failure links and output sets, forming a finite-state machine. Mismatches fall back to a suffix state, so the text is scanned once regardless of pattern count.",
            "advantages": [
              "It finds every occurrence of many patterns in O(n+z) search time.",
              "Failure links reuse suffix information from previous matches."
            ],
            "disadvantages": [
              "The trie and failure links consume memory proportional to the pattern set.",
              "Frequently changing patterns require rebuilding or dynamically maintaining the automaton."
            ],
            "useCases": [
              "Multi-signature malware and prohibited-term scanning",
              "Log and document analysis against a keyword dictionary"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function ahoCorasick(text, patterns) {\n      const root = { next: new Map(), fail: null, output: [] };\n      for (const pattern of patterns) {\n        if (pattern.length === 0) continue;\n        let node = root;\n        for (const symbol of pattern) {\n          if (!node.next.has(symbol)) node.next.set(symbol, { next: new Map(), fail: null, output: [] });\n          node = node.next.get(symbol);\n        }\n        node.output.push(pattern);\n      }\n      root.fail = root;\n      const queue = [];\n      for (const child of root.next.values()) {\n        child.fail = root;\n        queue.push(child);\n      }\n      for (let head = 0; head < queue.length; head += 1) {\n        const node = queue[head];\n        for (const [symbol, child] of node.next) {\n          let fallback = node.fail;\n          while (fallback !== root && !fallback.next.has(symbol)) fallback = fallback.fail;\n          if (fallback.next.has(symbol) && fallback.next.get(symbol) !== child) fallback = fallback.next.get(symbol);\n          child.fail = fallback;\n          child.output.push(...fallback.output);\n          queue.push(child);\n        }\n      }\n      const matches = [];\n      let node = root;\n      for (let index = 0; index < text.length; index += 1) {\n        const symbol = text[index];\n        while (node !== root && !node.next.has(symbol)) node = node.fail;\n        if (node.next.has(symbol)) node = node.next.get(symbol);\n        for (const pattern of node.output) matches.push({ pattern, index: index - pattern.length + 1 });\n      }\n      return matches;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Aho–Corasick Algorithm",
          "ko": "아호–코라식 알고리즘"
        }
      },
      {
        "id": "algo-ford-fulkerson",
        "type": "algorithm",
        "name": "Ford–Fulkerson Method",
        "aliases": [
          "Ford-Fulkerson Algorithm"
        ],
        "summary": "잔여 네트워크에서 증가 경로를 반복해 최대 유량을 구하는 일반 방법",
        "complexity": {
          "time": {
            "integerCapacities": "O(E · |f*|)"
          },
          "space": {
            "includingResidualNetwork": "O(V + E)"
          }
        },
        "pseudocode": "FORD_FULKERSON(G, source, sink)\n  flow on every edge <- 0\n  build the residual network\n  while a residual source-to-sink path P exists\n    bottleneck <- minimum residual capacity on P\n    augment flow by bottleneck along P\n    update forward and reverse residual capacities\n  return flow",
        "introduced": {
          "year": 1956
        },
        "authors": [
          {
            "name": "L. R. Ford Jr."
          },
          {
            "name": "D. R. Fulkerson"
          }
        ],
        "referenceIds": [
          "source-ford-fulkerson-1956",
          "source-erickson-max-flow",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "잔여 네트워크에서 증가 경로를 반복해 최대 유량을 구하는 일반 방법",
            "description": "현재 유량의 잔여 네트워크에서 소스부터 싱크까지 증가 경로를 찾고, 그 경로의 병목 잔여 용량만큼 유량을 보낸다. 경로 선택 규칙을 고정하지 않은 방법이며 정수 용량에서는 유량이 매번 적어도 1씩 늘어 종료한다.",
            "advantages": [
              "증가 경로와 잔여 간선이라는 핵심 원리가 단순하고 여러 최대 유량 알고리즘의 기반이 된다.",
              "정수 용량에서는 최대 유량과 함께 최소 컷을 구성할 수 있다."
            ],
            "disadvantages": [
              "실행 시간 O(E·|f*|)가 최대 유량 값에 의존하는 의사다항 시간이다.",
              "무리수 용량과 부적절한 경로 선택에서는 종료하지 않거나 최적값에 수렴하지 않을 수 있다."
            ],
            "useCases": [
              "작은 정수 용량 네트워크의 최대 유량 계산",
              "Edmonds–Karp와 Dinic 등 잔여 네트워크 알고리즘의 원리 학습"
            ]
          },
          "en": {
            "summary": "A general maximum-flow method that repeatedly augments along residual source-to-sink paths.",
            "description": "It finds a source-to-sink augmenting path in the residual network and sends the path's bottleneck residual capacity. The method leaves path selection unspecified; with integer capacities, every augmentation increases the flow by at least one and termination follows.",
            "advantages": [
              "Its augmenting-path and residual-edge ideas are simple and underpin many maximum-flow algorithms.",
              "With integer capacities it constructs a maximum flow and supports recovery of a minimum cut."
            ],
            "disadvantages": [
              "The O(E·|f*|) bound is pseudo-polynomial because it depends on the maximum-flow value.",
              "With irrational capacities and unfortunate path choices it may fail to terminate or converge to the optimum."
            ],
            "useCases": [
              "Maximum flow in networks with small integer capacities",
              "Learning the residual-network basis of Edmonds–Karp, Dinic, and related methods"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function fordFulkerson(capacity, source, sink) {\n      const residual = capacity.map((row) => [...row]);\n      let maxFlow = 0;\n      while (true) {\n        const visited = new Set();\n        const find = (from, limit) => {\n          if (from === sink) return limit;\n          visited.add(from);\n          for (let to = 0; to < residual.length; to += 1) {\n            if (!visited.has(to) && residual[from][to] > 0) {\n              const sent = find(to, Math.min(limit, residual[from][to]));\n              if (sent > 0) { residual[from][to] -= sent; residual[to][from] += sent; return sent; }\n            }\n          }\n          return 0;\n        };\n        const sent = find(source, Infinity);\n        if (sent === 0) break;\n        maxFlow += sent;\n      }\n      return { maxFlow, residual };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Ford–Fulkerson Method",
          "ko": "포드–풀커슨 방법"
        }
      },
      {
        "id": "algo-dinic",
        "type": "algorithm",
        "name": "Dinic's Algorithm",
        "aliases": [
          "Dinitz's Algorithm",
          "Dinic Algorithm"
        ],
        "summary": "레벨 그래프와 차단 유량을 반복해 최대 유량을 구하는 알고리즘",
        "complexity": {
          "time": {
            "worst": "O(V²E)"
          },
          "space": {
            "includingResidualNetwork": "O(V + E)"
          }
        },
        "pseudocode": "DINIC(G, source, sink)\n  flow <- 0\n  while BFS on residual edges builds levels reaching sink\n    nextEdge[v] <- first outgoing edge for every vertex\n    while pushed <- SEND_FLOW(source, infinity, levels, nextEdge) is positive\n      flow <- flow + pushed\n  return flow\n\nSEND_FLOW(v, available, levels, nextEdge)\n  send flow only through residual edges to level[v] + 1\n  advance nextEdge[v] past unusable edges\n  return the amount pushed to sink",
        "introduced": {
          "year": 1970
        },
        "authors": [
          {
            "name": "Yefim Dinitz"
          }
        ],
        "referenceIds": [
          "source-dinitz-1970",
          "source-erickson-max-flow",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "레벨 그래프와 차단 유량을 반복해 최대 유량을 구하는 알고리즘",
            "description": "잔여 네트워크에서 BFS로 소스와의 거리 레벨을 만들고 레벨이 정확히 하나 증가하는 간선만 남긴다. 그 DAG에서 차단 유량을 보낸 뒤 새 레벨 그래프를 구성하며, 일반 네트워크에서 O(V²E)에 종료한다.",
            "advantages": [
              "한 레벨 그래프에서 여러 증가 경로를 함께 처리해 단순 경로 반복보다 효율적이다.",
              "현재 간선 포인터를 사용하면 이미 실패한 간선을 반복 검사하지 않는다."
            ],
            "disadvantages": [
              "레벨 그래프와 차단 유량 절차 때문에 Ford–Fulkerson이나 Edmonds–Karp보다 구현이 복잡하다.",
              "일반 그래프의 O(V²E) 상한은 매우 큰 밀집 네트워크에서 여전히 부담이 될 수 있다."
            ],
            "useCases": [
              "이분 매칭과 단위 용량 네트워크를 포함한 최대 유량 문제",
              "경쟁 프로그래밍과 중대형 희소 네트워크의 실용적 최대 유량 구현"
            ]
          },
          "en": {
            "summary": "A maximum-flow algorithm that repeatedly builds a level graph and sends a blocking flow.",
            "description": "A BFS assigns residual distances from the source and retains edges that advance exactly one level. It sends a blocking flow through that DAG, rebuilds the levels, and terminates in O(V²E) time on general networks.",
            "advantages": [
              "It processes many augmenting paths in one level graph instead of committing to only one path.",
              "Current-edge pointers avoid rescanning residual edges already known to be unusable."
            ],
            "disadvantages": [
              "Level construction and blocking-flow logic are more complex than Ford–Fulkerson or Edmonds–Karp.",
              "The general O(V²E) bound can still be costly on very large dense networks."
            ],
            "useCases": [
              "Maximum flow including bipartite matching and unit-capacity networks",
              "Practical maximum-flow implementations for programming contests and medium-to-large sparse networks"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function dinic(capacity, source, sink) {\n      const residual = capacity.map((row) => [...row]);\n      let maxFlow = 0;\n      while (true) {\n        const level = Array(residual.length).fill(-1);\n        level[source] = 0;\n        const queue = [source];\n        for (let head = 0; head < queue.length; head += 1) for (let to = 0; to < residual.length; to += 1) {\n          if (level[to] < 0 && residual[queue[head]][to] > 0) { level[to] = level[queue[head]] + 1; queue.push(to); }\n        }\n        if (level[sink] < 0) break;\n        const next = Array(residual.length).fill(0);\n        const send = (from, limit) => {\n          if (from === sink) return limit;\n          for (; next[from] < residual.length; next[from] += 1) {\n            const to = next[from];\n            if (level[to] === level[from] + 1 && residual[from][to] > 0) {\n              const amount = send(to, Math.min(limit, residual[from][to]));\n              if (amount > 0) { residual[from][to] -= amount; residual[to][from] += amount; return amount; }\n            }\n          }\n          return 0;\n        };\n        for (let amount; (amount = send(source, Infinity)) > 0;) maxFlow += amount;\n      }\n      return { maxFlow, residual };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Dinic's Algorithm",
          "ko": "디닉 알고리즘"
        }
      },
      {
        "id": "algo-kosaraju-sharir",
        "type": "algorithm",
        "name": "Kosaraju–Sharir Algorithm",
        "aliases": [
          "Kosaraju's Algorithm",
          "Kosaraju Algorithm"
        ],
        "summary": "원 그래프와 전치 그래프를 두 번 DFS해 강결합 요소를 찾는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(V + E)"
          },
          "space": {
            "includingTranspose": "O(V + E)"
          }
        },
        "pseudocode": "KOSARAJU_SHARIR(G)\n  visited <- empty\n  finishOrder <- empty stack\n  for each unvisited vertex v in G\n    DFS(G, v); push each vertex when its call finishes\n  clear visited\n  GT <- transpose of G\n  while finishOrder is not empty\n    v <- pop finishOrder\n    if v is unvisited\n      component <- all vertices reached by DFS(GT, v)\n      report component",
        "introduced": {
          "year": 1981
        },
        "authors": [
          {
            "name": "S. Rao Kosaraju"
          },
          {
            "name": "Micha Sharir"
          }
        ],
        "referenceIds": [
          "source-sharir-scc-1981",
          "source-erickson-algorithms",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "원 그래프와 전치 그래프를 두 번 DFS해 강결합 요소를 찾는 알고리즘",
            "description": "첫 DFS의 종료 시각 역순으로 정점을 배열하고, 모든 간선 방향을 뒤집은 전치 그래프에서 그 순서대로 DFS한다. 두 번째 탐색이 새로 방문하는 정점 집합마다 하나의 강결합 요소가 된다.",
            "advantages": [
              "두 번의 DFS와 전치 그래프 구성만으로 O(V+E) 시간에 동작한다.",
              "두 단계의 역할이 분리되어 정당성 설명과 구현 검사가 비교적 쉽다."
            ],
            "disadvantages": [
              "전치 그래프를 저장하거나 역방향 인접 목록에 접근해야 한다.",
              "두 번의 전체 순회와 종료 순서 저장이 필요해 Tarjan보다 상수 비용과 메모리가 클 수 있다."
            ],
            "useCases": [
              "의존성·호출 그래프의 순환 집합 분해",
              "2-SAT, 상태 공간, 웹 링크 그래프의 SCC 축약"
            ]
          },
          "en": {
            "summary": "An algorithm finding strongly connected components with two DFS passes over a graph and its transpose.",
            "description": "The first DFS orders vertices by decreasing finish time. A second DFS visits the transposed graph in that order, and every newly reached set is one strongly connected component.",
            "advantages": [
              "Two DFS passes plus graph transposition give O(V+E) running time.",
              "Its two clearly separated passes make the correctness argument and implementation relatively easy to audit."
            ],
            "disadvantages": [
              "It must store the transposed graph or provide reverse-adjacency access.",
              "Two full traversals and finish-order storage may have larger constants and memory use than Tarjan's method."
            ],
            "useCases": [
              "Decomposing dependency and call graphs into cyclic groups",
              "SCC condensation for 2-SAT, state spaces, and web-link graphs"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "Kosaraju–Sharir는 두 번의 DFS와 전치 그래프 순서로 정의되는 구체적인 그래프 절차이므로 별도 일반 Technique을 지정하지 않는다.",
              "en": "Kosaraju–Sharir is a concrete graph procedure defined by two DFS passes and transpose order, so no separate general technique is assigned."
            }
          }
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function kosarajuSharir(graph) {\n      const vertices = new Set([...Object.keys(graph), ...Object.values(graph).flat()]);\n      const reverse = Object.fromEntries([...vertices].map((vertex) => [vertex, []]));\n      for (const [from, neighbors] of Object.entries(graph)) for (const to of neighbors) reverse[to].push(from);\n      const visited = new Set();\n      const order = [];\n      const finish = (vertex) => { visited.add(vertex); for (const next of graph[vertex] || []) if (!visited.has(next)) finish(next); order.push(vertex); };\n      for (const vertex of vertices) if (!visited.has(vertex)) finish(vertex);\n      visited.clear();\n      const components = [];\n      const collect = (vertex, component) => { visited.add(vertex); component.push(vertex); for (const next of reverse[vertex]) if (!visited.has(next)) collect(next, component); };\n      while (order.length) { const vertex = order.pop(); if (!visited.has(vertex)) { const component = []; collect(vertex, component); components.push(component); } }\n      return components;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Kosaraju–Sharir Algorithm",
          "ko": "코사라주–샤리르 알고리즘"
        }
      },
      {
        "id": "algo-johnson",
        "type": "algorithm",
        "name": "Johnson's Algorithm",
        "aliases": [
          "Johnson Algorithm"
        ],
        "summary": "재가중 후 각 정점에서 Dijkstra를 실행하는 희소 그래프용 모든 쌍 최단 경로 알고리즘",
        "complexity": {
          "time": {
            "binaryHeap": "O(VE + V(E + V) log V)"
          },
          "space": {
            "working": "O(V + E)",
            "includingOutput": "O(V² + E)"
          }
        },
        "pseudocode": "JOHNSON(G)\n  add new source q with zero-weight edges to every vertex\n  h <- BELLMAN_FORD distances from q\n  if a negative cycle is found: report failure\n  for each edge (u, v)\n    reweighted(u, v) <- weight(u, v) + h[u] - h[v]\n  for each source s\n    dPrime <- DIJKSTRA on reweighted edges from s\n    for each vertex v\n      distance[s, v] <- dPrime[v] - h[s] + h[v]\n  return distance",
        "introduced": {
          "year": 1977
        },
        "authors": [
          {
            "name": "Donald B. Johnson"
          }
        ],
        "referenceIds": [
          "source-johnson-apsp-1977",
          "source-erickson-algorithms",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "재가중 후 각 정점에서 Dijkstra를 실행하는 희소 그래프용 모든 쌍 최단 경로 알고리즘",
            "description": "새 소스에서 Bellman–Ford를 실행해 잠재값을 얻고 모든 간선을 비음수로 재가중한다. 최단 경로 자체는 보존되므로 각 정점에서 Dijkstra를 실행한 결과를 원래 가중치로 복원하며, 음수 사이클이 있으면 중단한다.",
            "advantages": [
              "음수 간선을 허용하면서 음수 사이클도 검출한다.",
              "희소 그래프에서는 O(V³) 표 기반 방법보다 훨씬 적은 간선을 반복 처리할 수 있다."
            ],
            "disadvantages": [
              "Bellman–Ford 한 번과 Dijkstra V번이 필요해 작은 밀집 그래프에서는 Floyd–Warshall이 더 단순할 수 있다.",
              "모든 쌍 거리를 저장하면 결과 자체가 O(V²) 공간을 차지한다."
            ],
            "useCases": [
              "음수 간선이 있을 수 있는 희소 네트워크의 모든 쌍 거리",
              "여러 출발점 경로 질의를 위한 거리 행렬 전처리"
            ]
          },
          "en": {
            "summary": "An all-pairs shortest-path algorithm for sparse graphs that reweights edges and runs Dijkstra from every vertex.",
            "description": "It runs Bellman–Ford from a new source to obtain vertex potentials and reweights every edge to be nonnegative. Shortest paths are preserved, so Dijkstra runs from each vertex and the distances are converted back; a negative cycle causes failure.",
            "advantages": [
              "It accepts negative edges while also detecting negative cycles.",
              "On sparse graphs it can avoid the cubic work of table-based all-pairs methods."
            ],
            "disadvantages": [
              "One Bellman–Ford run plus V Dijkstra runs may be less attractive than Floyd–Warshall on small dense graphs.",
              "Materializing all pairwise distances inherently takes O(V²) output space."
            ],
            "useCases": [
              "All-pairs distances in sparse networks that may contain negative edges",
              "Precomputing a distance matrix for many-source path queries"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function johnson(vertexCount, edges) {\n      const potential = Array(vertexCount).fill(0);\n      for (let pass = 0; pass < vertexCount; pass += 1) {\n        let changed = false;\n        for (const edge of edges) if (potential[edge.from] + edge.weight < potential[edge.to]) {\n          potential[edge.to] = potential[edge.from] + edge.weight;\n          changed = true;\n        }\n        if (!changed) break;\n        if (pass === vertexCount - 1) throw new RangeError(\"The graph contains a negative cycle.\");\n      }\n      const adjacency = Array.from({ length: vertexCount }, () => []);\n      for (const edge of edges) adjacency[edge.from].push({ to: edge.to, weight: edge.weight + potential[edge.from] - potential[edge.to] });\n      return Array.from({ length: vertexCount }, (_, source) => {\n        const distance = Array(vertexCount).fill(Infinity);\n        const used = Array(vertexCount).fill(false);\n        distance[source] = 0;\n        for (let step = 0; step < vertexCount; step += 1) {\n          let from = -1;\n          for (let vertex = 0; vertex < vertexCount; vertex += 1) if (!used[vertex] && (from < 0 || distance[vertex] < distance[from])) from = vertex;\n          if (from < 0 || distance[from] === Infinity) break;\n          used[from] = true;\n          for (const edge of adjacency[from]) distance[edge.to] = Math.min(distance[edge.to], distance[from] + edge.weight);\n        }\n        return distance.map((value, target) => value === Infinity ? value : value - potential[source] + potential[target]);\n      });\n    }"
          }
        ],
        "localizedNames": {
          "en": "Johnson's Algorithm",
          "ko": "존슨 알고리즘"
        }
      },
      {
        "id": "algo-levenshtein-distance",
        "type": "algorithm",
        "name": "Levenshtein Distance",
        "aliases": [
          "Edit Distance Algorithm"
        ],
        "summary": "삽입·삭제·치환으로 두 문자열 사이 최소 편집 횟수를 계산하는 동적 계획 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(mn)"
          },
          "space": {
            "fullTable": "O(mn)",
            "distanceOnly": "O(min(m, n))"
          }
        },
        "pseudocode": "LEVENSHTEIN(a, b)\n  D[i, 0] <- i for i = 0..m\n  D[0, j] <- j for j = 0..n\n  for i <- 1 to m\n    for j <- 1 to n\n      substitution <- 0 if a[i - 1] = b[j - 1] else 1\n      D[i, j] <- min(D[i - 1, j] + 1,\n                     D[i, j - 1] + 1,\n                     D[i - 1, j - 1] + substitution)\n  return D[m, n]",
        "introduced": {
          "year": 1965
        },
        "authors": [
          {
            "name": "Vladimir I. Levenshtein"
          }
        ],
        "referenceIds": [
          "source-levenshtein-1966",
          "source-nist-levenshtein",
          "source-gusfield-strings"
        ],
        "content": {
          "ko": {
            "summary": "삽입·삭제·치환으로 두 문자열 사이 최소 편집 횟수를 계산하는 동적 계획 알고리즘",
            "description": "D[i,j]를 첫 문자열의 길이 i 접두사를 두 번째 문자열의 길이 j 접두사로 바꾸는 최소 비용으로 둔다. 마지막 연산이 삭제·삽입·일치 또는 치환인 세 경우의 최솟값으로 표를 채운다.",
            "advantages": [
              "모든 삽입·삭제·치환 조합 가운데 전역 최소 편집 비용을 보장한다.",
              "연산별 가중치를 바꾸거나 정렬 경로를 복원하도록 자연스럽게 확장할 수 있다."
            ],
            "disadvantages": [
              "두 문자열 길이의 곱에 비례하는 시간이 필요하다.",
              "실제 편집 순서를 복원하려면 보통 전체 O(mn) 표나 별도 추적 정보가 필요하다."
            ],
            "useCases": [
              "맞춤법 교정과 유사 문자열 검색",
              "OCR·음성 인식 결과 평가와 중복 레코드 매칭"
            ]
          },
          "en": {
            "summary": "A dynamic-programming algorithm computing the minimum insertions, deletions, and substitutions between two strings.",
            "description": "D[i,j] stores the minimum cost of changing the length-i prefix of one string into the length-j prefix of the other. Each cell takes the best final operation among deletion, insertion, match, and substitution.",
            "advantages": [
              "It guarantees the global minimum over all insertion, deletion, and substitution sequences.",
              "It extends naturally to weighted operations and reconstruction of an edit alignment."
            ],
            "disadvantages": [
              "Its time grows with the product of the two string lengths.",
              "Recovering the actual edit sequence usually needs the full O(mn) table or extra trace information."
            ],
            "useCases": [
              "Spell correction and fuzzy string search",
              "Evaluating OCR or speech recognition and matching duplicate records"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function levenshteinDistance(left, right) {\n      let previous = Array.from({ length: right.length + 1 }, (_, index) => index);\n      for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {\n        const current = [leftIndex];\n        for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {\n          const substitution = previous[rightIndex - 1] + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1);\n          current[rightIndex] = Math.min(previous[rightIndex] + 1, current[rightIndex - 1] + 1, substitution);\n        }\n        previous = current;\n      }\n      return previous[right.length];\n    }"
          }
        ],
        "localizedNames": {
          "en": "Levenshtein Distance",
          "ko": "레벤슈타인 거리"
        }
      },
      {
        "id": "algo-longest-common-subsequence",
        "type": "algorithm",
        "name": "Longest Common Subsequence DP",
        "aliases": [
          "LCS Algorithm"
        ],
        "summary": "두 수열의 순서를 보존하는 가장 긴 공통 부분 수열을 구하는 동적 계획 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(mn)"
          },
          "space": {
            "fullTable": "O(mn)",
            "lengthOnly": "O(min(m, n))"
          }
        },
        "pseudocode": "LCS(a, b)\n  L[0..m, 0..n] <- 0\n  for i <- 1 to m\n    for j <- 1 to n\n      if a[i - 1] = b[j - 1]\n        L[i, j] <- L[i - 1, j - 1] + 1\n      else\n        L[i, j] <- max(L[i - 1, j], L[i, j - 1])\n  backtrack from L[m, n] to reconstruct one LCS\n  return the reconstructed subsequence",
        "referenceIds": [
          "source-nist-lcs",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "두 수열의 순서를 보존하는 가장 긴 공통 부분 수열을 구하는 동적 계획 알고리즘",
            "description": "접두사 쌍의 최적 길이를 표에 저장한다. 마지막 원소가 같으면 대각선 값에 1을 더하고, 다르면 어느 한 수열의 마지막 원소를 제외한 두 상태 중 큰 값을 선택한다.",
            "advantages": [
              "연속하지 않아도 되는 공통 순서를 정확히 최적화한다.",
              "표를 역추적하면 실제 공통 부분 수열과 차이 정렬을 복원할 수 있다."
            ],
            "disadvantages": [
              "일반적인 두 수열에서는 O(mn) 시간이 필요하다.",
              "길이뿐 아니라 수열을 복원하려면 전체 표 또는 더 복잡한 분할 전략이 필요하다."
            ],
            "useCases": [
              "파일·소스 코드 diff와 버전 비교",
              "DNA·단백질 서열의 공통 순서 분석"
            ]
          },
          "en": {
            "summary": "A dynamic-programming algorithm finding a longest order-preserving subsequence shared by two sequences.",
            "description": "A table stores the optimum length for every pair of prefixes. Equal final elements extend the diagonal state; otherwise the recurrence takes the larger state obtained by dropping one final element.",
            "advantages": [
              "It exactly optimizes common order even when matching elements are not contiguous.",
              "Backtracking the table reconstructs an actual subsequence and an edit-style alignment."
            ],
            "disadvantages": [
              "General inputs require O(mn) time.",
              "Reconstructing the subsequence rather than only its length needs the full table or a more involved divide-and-conquer strategy."
            ],
            "useCases": [
              "File and source-code diff or version comparison",
              "Shared-order analysis of DNA and protein sequences"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Longest Common Subsequence DP",
          "ko": "최장 공통 부분 수열 DP"
        }
      },
      {
        "id": "algo-needleman-wunsch",
        "type": "algorithm",
        "name": "Needleman–Wunsch Algorithm",
        "aliases": [
          "Needleman-Wunsch"
        ],
        "summary": "동적 계획으로 두 생물학적 서열 전체의 최적 전역 정렬을 구하는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(mn)"
          },
          "space": {
            "fullAlignment": "O(mn)"
          }
        },
        "pseudocode": "NEEDLEMAN_WUNSCH(a, b, score, gap)\n  F[i, 0] <- i * gap; F[0, j] <- j * gap\n  for i <- 1 to m\n    for j <- 1 to n\n      F[i, j] <- max(F[i - 1, j - 1] + score(a[i - 1], b[j - 1]),\n                     F[i - 1, j] + gap,\n                     F[i, j - 1] + gap)\n  trace back from F[m, n] to F[0, 0]\n  return the aligned sequences",
        "introduced": {
          "year": 1970
        },
        "authors": [
          {
            "name": "Saul B. Needleman"
          },
          {
            "name": "Christian D. Wunsch"
          }
        ],
        "referenceIds": [
          "source-needleman-wunsch-1970",
          "source-ncbi-global-alignment",
          "source-gusfield-strings"
        ],
        "content": {
          "ko": {
            "summary": "동적 계획으로 두 생물학적 서열 전체의 최적 전역 정렬을 구하는 알고리즘",
            "description": "두 서열의 모든 접두사 쌍에 대해 일치·불일치와 gap 점수를 누적한다. 표의 오른쪽 아래에서 역추적하면 두 서열의 처음부터 끝까지를 포함하며 선택한 점수 체계에서 최적인 전역 정렬을 얻는다.",
            "advantages": [
              "주어진 점수와 선형 gap 모델 아래 최적 전역 정렬을 보장한다.",
              "점수 표와 역추적 경로가 정렬 결과의 근거를 명확히 보여준다."
            ],
            "disadvantages": [
              "긴 유전체 서열에서는 O(mn) 시간과 메모리가 매우 커진다.",
              "부분적으로만 유사한 서열에는 전역 정렬보다 지역 정렬이 더 의미 있을 수 있다."
            ],
            "useCases": [
              "길이와 전체 구조가 비슷한 DNA·RNA·단백질 서열 비교",
              "서열 정렬 알고리즘과 점수 행렬을 검증하는 기준 해법"
            ]
          },
          "en": {
            "summary": "A dynamic-programming algorithm computing an optimal global alignment of two biological sequences.",
            "description": "It accumulates match, mismatch, and gap scores for every pair of prefixes. Tracing back from the bottom-right cell yields an alignment spanning both sequences end to end that is optimal under the chosen scoring scheme.",
            "advantages": [
              "It guarantees an optimal global alignment under the specified score and linear-gap model.",
              "The score table and traceback make the basis of the returned alignment explicit."
            ],
            "disadvantages": [
              "O(mn) time and memory become expensive for long genomic sequences.",
              "A local alignment can be more meaningful when only parts of the sequences are similar."
            ],
            "useCases": [
              "Comparing DNA, RNA, or protein sequences with similar length and overall structure",
              "A reference solution for validating sequence-alignment methods and scoring matrices"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function needlemanWunsch(left, right, match = 1, mismatch = -1, gap = -1) {\n      const score = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0));\n      for (let i = 1; i <= left.length; i += 1) score[i][0] = i * gap;\n      for (let j = 1; j <= right.length; j += 1) score[0][j] = j * gap;\n      for (let i = 1; i <= left.length; i += 1) for (let j = 1; j <= right.length; j += 1) {\n        score[i][j] = Math.max(score[i - 1][j - 1] + (left[i - 1] === right[j - 1] ? match : mismatch), score[i - 1][j] + gap, score[i][j - 1] + gap);\n      }\n      let alignedLeft = \"\";\n      let alignedRight = \"\";\n      let i = left.length;\n      let j = right.length;\n      while (i > 0 || j > 0) {\n        if (i > 0 && j > 0 && score[i][j] === score[i - 1][j - 1] + (left[i - 1] === right[j - 1] ? match : mismatch)) {\n          alignedLeft = left[--i] + alignedLeft;\n          alignedRight = right[--j] + alignedRight;\n        } else if (i > 0 && score[i][j] === score[i - 1][j] + gap) {\n          alignedLeft = left[--i] + alignedLeft;\n          alignedRight = \"-\" + alignedRight;\n        } else {\n          alignedLeft = \"-\" + alignedLeft;\n          alignedRight = right[--j] + alignedRight;\n        }\n      }\n      return { score: score[left.length][right.length], alignedLeft, alignedRight };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Needleman–Wunsch Algorithm",
          "ko": "니들먼–운쉬 알고리즘"
        }
      },
      {
        "id": "algo-boruvka",
        "type": "algorithm",
        "name": "Borůvka's Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Borůvka's Algorithm",
          "ko": "보루프카 알고리즘"
        },
        "complexity": {
          "time": "O(E log V)",
          "space": "O(V + E)"
        },
        "pseudocode": "BORUVKA(G)\n  make each vertex a component\n  while more than one component remains\n    find the cheapest outgoing edge per component\n    for each chosen edge\n      if its endpoints are in different components\n        add edge and union the components\n  return selected edges",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "각 연결 성분의 가장 싼 외향 간선을 동시에 선택하는 최소 신장 트리 알고리즘",
            "description": "처음에는 각 정점이 독립 성분이며 매 라운드마다 각 성분에서 밖으로 나가는 최소 간선을 추가해 성분 수를 빠르게 줄인다.",
            "advantages": [
              "서로 독립적인 성분의 최소 간선 탐색을 병렬화하기 좋다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "간선 스캔과 성분 관리가 단순한 Prim 방식보다 구현상 무거울 수 있다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "병렬·분산 최소 신장 트리 계산",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A minimum-spanning-tree algorithm simultaneously choosing the cheapest outgoing edge of each component.",
            "description": "Each vertex starts as a component; every round adds each component's minimum outgoing edge and rapidly reduces the component count.",
            "advantages": [
              "Independent component scans are well suited to parallel execution.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "Repeated edge scans and component management can be heavier than a simple Prim implementation.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Parallel and distributed minimum-spanning-tree construction",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-hopcroft-karp",
        "type": "algorithm",
        "name": "Hopcroft–Karp Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Hopcroft–Karp Algorithm",
          "ko": "홉크로프트–카프 알고리즘"
        },
        "complexity": {
          "time": "O(E sqrt(V))",
          "space": "O(V + E)"
        },
        "pseudocode": "HOPCROFT_KARP(G)\n  matching <- empty\n  repeat\n    BFS layers all shortest augmenting paths\n    DFS from each free left vertex\n      follow only layered edges\n      augment every vertex-disjoint path found\n  until BFS reaches no free right vertex\n  return matching",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "최단 증가 경로를 층으로 묶어 한 단계에서 여러 개 확장하는 이분 매칭 알고리즘",
            "description": "BFS가 자유 정점 사이의 최단 증가 경로 층을 만들고 DFS가 서로 정점이 겹치지 않는 경로들을 한꺼번에 매칭에 반영한다.",
            "advantages": [
              "한 번에 여러 증가 경로를 처리해 단순 반복보다 빠르다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "이분 그래프에만 적용되며 층과 매칭 배열 관리가 필요하다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "작업 배정과 이분 네트워크의 최대 매칭",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A bipartite-matching algorithm batching many shortest augmenting paths in layered phases.",
            "description": "BFS builds layers of shortest paths between free vertices, and DFS augments along a vertex-disjoint collection in one phase.",
            "advantages": [
              "Processing many augmenting paths per phase improves over one-at-a-time methods.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "It applies only to bipartite graphs and requires careful layer and matching arrays.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Task assignment and maximum matching in bipartite networks",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-push-relabel",
        "type": "algorithm",
        "name": "Push–Relabel Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Push–Relabel Algorithm",
          "ko": "푸시–재레이블 알고리즘"
        },
        "complexity": {
          "time": "O(V²E) generic",
          "space": "O(V + E)"
        },
        "pseudocode": "PUSH_RELABEL(G, source, sink)\n  saturate every source edge as a preflow\n  set source height to V\n  while an active nonterminal vertex exists\n    if an admissible residual edge exists\n      push as much excess as possible\n    else raise the vertex height\n  return flow entering sink",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-max-flow"
        ],
        "content": {
          "ko": {
            "summary": "초과 유량과 높이 라벨을 유지하며 국소 push로 최대 유량을 만드는 알고리즘",
            "description": "source 간선을 먼저 포화한 preflow에서 시작해, 초과 유량이 있는 정점이 더 낮은 잔여 이웃으로 유량을 보내거나 높이를 올린다.",
            "advantages": [
              "경로 전체를 찾지 않고 국소 연산으로 진행하며 실용 최적화가 많다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "기본 구현은 상태와 불변식이 복잡하고 선택 규칙에 따라 성능 차이가 크다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "조밀한 네트워크의 최대 유량과 최소 컷",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A maximum-flow algorithm maintaining excess flow and height labels while applying local pushes.",
            "description": "Starting from a source-saturated preflow, an active vertex sends excess to a lower residual neighbor or raises its height.",
            "advantages": [
              "It avoids whole-path searches and supports many practical optimizations.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "The state invariants are intricate and performance depends on active-vertex rules.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Maximum flow and minimum cut in dense networks",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-hierholzer",
        "type": "algorithm",
        "name": "Hierholzer's Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Hierholzer's Algorithm",
          "ko": "히어홀처 알고리즘"
        },
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": "HIERHOLZER(G, start)\n  stack <- [start]\n  circuit <- empty\n  while stack is not empty\n    if top has an unused incident edge\n      remove edge and push its other endpoint\n    else\n      append pop(stack) to circuit\n  reverse circuit",
        "referenceIds": [
          "source-erickson-algorithms",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "사용하지 않은 간선을 따라 만든 순환들을 이어 붙이는 오일러 경로 알고리즘",
            "description": "스택의 현재 정점에 미사용 간선이 있으면 이동하고, 없으면 그 정점을 결과에 뒤에서부터 추가해 모든 간선을 정확히 한 번 포함한다.",
            "advantages": [
              "인접 간선을 제거 가능하게 관리하면 선형 시간에 동작한다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "그래프가 오일러 경로의 차수와 연결 조건을 만족하는지 별도 확인해야 한다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "우편배달 경로와 de Bruijn 서열 구성",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "An Eulerian-trail algorithm splicing cycles formed by following unused edges.",
            "description": "It advances through unused edges from the stack top and appends a vertex in reverse order when no edge remains, using every edge exactly once.",
            "advantages": [
              "With removable adjacency entries it runs in linear time.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "Eulerian degree and connectivity conditions must be checked separately.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Route inspection and de Bruijn sequence construction",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-bron-kerbosch",
        "type": "algorithm",
        "name": "Bron–Kerbosch Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Bron–Kerbosch Algorithm",
          "ko": "브론–커보시 알고리즘"
        },
        "complexity": {
          "time": {
            "worst": "O(3^(V/3))"
          },
          "space": "O(V²) with adjacency bitsets"
        },
        "pseudocode": "BRON_KERBOSCH(R, P, X)\n  if P and X are empty: emit R\n  choose pivot from P union X\n  for vertex in P minus neighbors(pivot)\n    recurse with R union vertex, P intersect N(vertex), X intersect N(vertex)\n    move vertex from P to X",
        "referenceIds": [
          "source-erickson-algorithms",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "후보와 제외 집합을 갱신하며 모든 극대 클릭을 열거하는 백트래킹 알고리즘",
            "description": "현재 clique R에 붙일 후보 P와 이미 처리한 X를 유지한다. pivot의 이웃이 아닌 후보만 분기하면 중복과 탐색 폭을 줄인다.",
            "advantages": [
              "pivot과 bitset을 사용하면 희소·중간 규모 그래프에서 매우 효율적이다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "출력 개수 자체가 지수적일 수 있어 큰 조밀 그래프에서는 비용이 폭증한다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "사회망의 완전 연결 집단과 분자 구조 패턴 탐색",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A backtracking algorithm enumerating maximal cliques while updating candidate and excluded sets.",
            "description": "It maintains a current clique R, candidates P, and processed vertices X. Branching only outside a pivot's neighborhood reduces duplication and search width.",
            "advantages": [
              "Pivoting and bitsets are effective on many sparse and medium graphs.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "The number of maximal cliques can itself be exponential.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Fully connected groups in social networks and molecular-structure patterns",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-louvain",
        "type": "algorithm",
        "name": "Louvain Method",
        "aliases": [],
        "localizedNames": {
          "en": "Louvain Method",
          "ko": "루뱅 방법"
        },
        "complexity": {
          "time": {
            "practical": "near O(E) per pass"
          },
          "space": "O(V + E)"
        },
        "pseudocode": "LOUVAIN(G)\n  put each vertex in its own community\n  repeat local passes\n    move each vertex to a neighboring community if modularity increases\n  until no move improves modularity\n  collapse communities into weighted supervertices\n  repeat until modularity stops improving",
        "referenceIds": [
          "source-elements-statistical-learning",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "국소 modularity 개선과 커뮤니티 축약을 반복하는 네트워크 군집화 알고리즘",
            "description": "각 정점을 이웃 커뮤니티로 옮겼을 때 modularity가 증가하면 이동하고, 안정되면 커뮤니티를 초정점으로 축약해 다단계로 반복한다.",
            "advantages": [
              "대규모 희소 네트워크에서 빠르고 계층적 커뮤니티를 만든다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "정점 순서와 해상도 한계에 민감하며 전역 최적 modularity를 보장하지 않는다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "사회망·인용망·거래망의 커뮤니티 탐지",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A network-clustering method alternating local modularity gains with community contraction.",
            "description": "Vertices move into neighboring communities when modularity improves; stable communities are collapsed into weighted supervertices for another level.",
            "advantages": [
              "It is fast on large sparse networks and naturally produces a hierarchy.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "It is order-sensitive, subject to resolution limits, and does not guarantee global modularity.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Community detection in social, citation, and transaction networks",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-yen-k-shortest",
        "type": "algorithm",
        "name": "Yen's Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Yen's Algorithm",
          "ko": "옌 알고리즘"
        },
        "complexity": {
          "time": "O(K V (E + V log V)) with Dijkstra",
          "space": "O(KV + E)"
        },
        "pseudocode": "YEN_K_SHORTEST(G, source, target, K)\n  shortest <- first shortest simple path\n  for rank <- 2 to K\n    for each spur position of previous path\n      temporarily exclude edges recreating accepted prefixes\n      find shortest spur path\n      queue combined root and spur candidate\n    accept the cheapest unseen candidate",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "최단 경로의 각 분기점에서 대체 경로를 만들어 K개 단순 최단 경로를 찾는 알고리즘",
            "description": "이미 채택한 경로의 prefix를 기준으로 특정 다음 간선을 제외하고 spur path를 계산한 뒤 후보 힙에서 가장 싼 새 경로를 선택한다.",
            "advantages": [
              "루프 없는 대안 경로를 비용 순서대로 반환한다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "K와 경로 길이가 커지면 반복 최단 경로 계산 비용이 높다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "내비게이션의 대안 경로와 네트워크 복원력 분석",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "An algorithm finding K shortest simple paths by generating deviations from accepted shortest paths.",
            "description": "At each prefix it excludes the accepted next edge, computes a spur path, and selects the cheapest unseen root-plus-spur candidate from a heap.",
            "advantages": [
              "It returns loopless alternatives in nondecreasing cost order.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "Repeated shortest-path searches become expensive as K and path length grow.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Alternative navigation routes and network-resilience analysis",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-floyd-cycle-finding",
        "type": "algorithm",
        "name": "Floyd's Cycle-Finding Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Floyd's Cycle-Finding Algorithm",
          "ko": "플로이드 순환 검출 알고리즘"
        },
        "complexity": {
          "time": "O(mu + lambda)",
          "space": "O(1)"
        },
        "pseudocode": "FLOYD_CYCLE(next, start)\n  tortoise <- next(start); hare <- next(next(start))\n  advance tortoise once and hare twice until equal\n  reset tortoise to start\n  advance both once to find cycle entry\n  keep tortoise fixed and count one full cycle\n  return entry index and cycle length",
        "referenceIds": [
          "source-knuth-taocp-vol3",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "한 칸·두 칸 포인터의 만남으로 함수 반복의 순환을 찾는 알고리즘",
            "description": "느린 포인터와 빠른 포인터가 순환 안에서 만나면 하나를 시작점으로 되돌려 진입점을 찾고, 한 바퀴를 세어 주기를 계산한다.",
            "advantages": [
              "방문 집합 없이 O(1) 공간으로 순환 진입점과 길이를 구한다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "다음 상태를 결정적으로 계산할 수 있는 함수형 그래프에 한정된다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "연결 리스트 순환 검사와 의사난수 주기 분석",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A cycle-finding algorithm using the meeting of one-step and two-step pointers in a functional graph.",
            "description": "After slow and fast pointers meet inside the cycle, resetting one to the start locates the entry; one extra lap measures the period.",
            "advantages": [
              "It finds the cycle entry and length in O(1) auxiliary space.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "It applies to deterministic successor functions rather than arbitrary branching graphs.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Linked-list cycle checks and pseudorandom-period analysis",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-edmonds-blossom",
        "type": "algorithm",
        "name": "Edmonds' Blossom Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Edmonds' Blossom Algorithm",
          "ko": "에드먼즈 블로섬 알고리즘"
        },
        "complexity": {
          "time": "O(V³) common implementation",
          "space": "O(V²)"
        },
        "pseudocode": "BLOSSOM_MATCHING(G)\n  start an alternating forest from every free vertex\n  search for an augmenting path\n  when an odd alternating cycle appears\n    contract the cycle into one blossom\n    continue search in the contracted graph\n  expand blossoms on a found path and augment\n  repeat until no augmenting path remains",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "홀수 교대 순환을 blossom으로 축약해 일반 그래프 최대 매칭을 찾는 알고리즘",
            "description": "교대 숲을 확장하다 같은 parity의 정점이 연결되면 홀수 순환을 하나의 초정점으로 축약한다. 증가 경로를 찾으면 blossom을 펼쳐 매칭을 뒤집는다.",
            "advantages": [
              "이분이 아닌 일반 그래프에서도 최대 cardinality matching을 보장한다.",
              "그래프의 국소 구조를 이용해 전체 조합 탐색을 줄인다."
            ],
            "disadvantages": [
              "blossom 축약·복원과 교대 숲 구현이 매우 복잡하다.",
              "그래프 크기와 밀도에 따라 메모리와 실행 시간이 빠르게 증가할 수 있다."
            ],
            "useCases": [
              "일반 네트워크의 페어링과 스케줄 매칭",
              "네트워크 구조 분석과 경로·연결 관계 계산"
            ]
          },
          "en": {
            "summary": "A maximum-matching algorithm for general graphs that contracts odd alternating cycles into blossoms.",
            "description": "When an alternating forest connects same-parity vertices, it contracts the odd cycle to one supervertex, later expands it along an augmenting path.",
            "advantages": [
              "It guarantees maximum-cardinality matching beyond bipartite graphs.",
              "It exploits local graph structure to avoid exhaustive combinations."
            ],
            "disadvantages": [
              "Blossom contraction, expansion, and alternating-forest bookkeeping are intricate.",
              "Time and memory can grow quickly with graph size and density."
            ],
            "useCases": [
              "Pairing and scheduling in non-bipartite networks",
              "Network-structure analysis and path or connectivity computation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-suffix-array-doubling",
        "type": "algorithm",
        "name": "Suffix Array Doubling",
        "aliases": [],
        "localizedNames": {
          "en": "Suffix Array Doubling",
          "ko": "접미사 배열 배가 알고리즘"
        },
        "complexity": {
          "time": "O(n log² n), or O(n log n) with radix sorting",
          "space": "O(n)"
        },
        "pseudocode": "SUFFIX_ARRAY_DOUBLING(text)\n  rank suffixes by their first character\n  length <- 1\n  while length < n\n    sort suffix indices by pair (rank[i], rank[i+length])\n    assign compact new ranks to equal pairs\n    length <- 2 * length\n  return indices ordered by final rank",
        "referenceIds": [
          "source-gusfield-strings",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "접두 길이를 두 배씩 늘리며 접미사의 순위를 갱신하는 접미사 배열 구성",
            "description": "길이 2^k 접두 순위를 두 개 결합해 길이 2^(k+1) 순서를 정렬하고 같은 쌍에는 같은 새 rank를 부여한다.",
            "advantages": [
              "복잡한 suffix tree 없이 배열과 정렬만으로 구현할 수 있다.",
              "문자열의 접두·접미 또는 반복 구조를 재사용한다."
            ],
            "disadvantages": [
              "비교 정렬을 쓰면 O(n log² n)이며 유니코드 인덱스 정책이 필요하다.",
              "문자 인코딩과 인덱스 단위가 다르면 구현 오류가 생기기 쉽다."
            ],
            "useCases": [
              "전문 검색과 반복 부분 문자열·LCP 계산의 색인",
              "텍스트 검색과 서열 분석"
            ]
          },
          "en": {
            "summary": "A suffix-array construction method repeatedly doubling the ranked prefix length.",
            "description": "It sorts suffixes by pairs of length-2^k ranks and assigns compact new ranks for the next doubled round.",
            "advantages": [
              "It uses arrays and sorting without a complex suffix tree.",
              "It reuses prefix, suffix, or repetition structure in strings."
            ],
            "disadvantages": [
              "Comparison sorting costs O(n log² n), and Unicode indexing needs a clear policy.",
              "Mismatched character encodings and indexing units easily cause errors."
            ],
            "useCases": [
              "Indexes for full-text search, repeated substrings, and LCP computation",
              "Text retrieval and sequence analysis"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-manacher",
        "type": "algorithm",
        "name": "Manacher's Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Manacher's Algorithm",
          "ko": "매내처 알고리즘"
        },
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": "MANACHER(text)\n  insert separators to unify odd and even centers\n  radius <- zero array; center <- right <- 0\n  for each transformed position i\n    mirror known radius inside right boundary\n    expand while symmetric symbols match\n    if expansion passes right, update center and right\n  return center with maximum radius",
        "referenceIds": [
          "source-gusfield-strings",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "가장 오른쪽 팰린드롬의 대칭 반지름을 재사용해 최장 팰린드롬을 선형 시간에 찾는 알고리즘",
            "description": "홀수·짝수 중심을 통합한 문자열에서 현재 위치의 거울 반지름을 초기값으로 쓰고, 기존 오른쪽 경계를 넘는 부분만 직접 비교한다.",
            "advantages": [
              "모든 중심을 검사하면서도 전체 확장 비교를 O(n)으로 제한한다.",
              "문자열의 접두·접미 또는 반복 구조를 재사용한다."
            ],
            "disadvantages": [
              "변환 문자열과 원래 인덱스 사이 변환이 직관적이지 않다.",
              "문자 인코딩과 인덱스 단위가 다르면 구현 오류가 생기기 쉽다."
            ],
            "useCases": [
              "DNA·텍스트의 대칭 구간과 최장 팰린드롬 탐색",
              "텍스트 검색과 서열 분석"
            ]
          },
          "en": {
            "summary": "A linear-time algorithm reusing mirrored radii inside the rightmost known palindrome.",
            "description": "After unifying odd and even centers with separators, it initializes each radius from its mirror and compares only beyond the current right boundary.",
            "advantages": [
              "It examines every center while limiting total expansion work to O(n).",
              "It reuses prefix, suffix, or repetition structure in strings."
            ],
            "disadvantages": [
              "Mapping transformed positions back to original indexes is easy to mishandle.",
              "Mismatched character encodings and indexing units easily cause errors."
            ],
            "useCases": [
              "Symmetric regions and longest palindromes in text or DNA",
              "Text retrieval and sequence analysis"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-smith-waterman",
        "type": "algorithm",
        "name": "Smith–Waterman Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Smith–Waterman Algorithm",
          "ko": "스미스–워터먼 알고리즘"
        },
        "complexity": {
          "time": "O(mn)",
          "space": "O(mn), O(min(m,n)) for score only"
        },
        "pseudocode": "SMITH_WATERMAN(A, B, scores)\n  initialize first row and column to zero\n  for i <- 1 to m\n    for j <- 1 to n\n      H[i,j] <- max(0, diagonal + matchScore, up - gap, left - gap)\n      remember the largest cell\n  traceback from the largest cell\n  stop when a zero cell is reached",
        "referenceIds": [
          "source-gusfield-strings",
          "source-clrs-fourth",
          "source-smith-waterman-1981"
        ],
        "content": {
          "ko": {
            "summary": "점수가 음수가 되면 0에서 다시 시작해 최적 지역 서열 정렬을 찾는 동적 계획법",
            "description": "각 셀은 문자 일치·불일치, gap 삽입, 새 지역 시작 중 최댓값을 저장한다. 전체 최댓값에서 0까지 역추적한다.",
            "advantages": [
              "서열 전체가 달라도 가장 유사한 부분 구간을 정확히 찾는다.",
              "문자열의 접두·접미 또는 반복 구조를 재사용한다."
            ],
            "disadvantages": [
              "두 서열 길이의 곱에 비례하는 계산과 행렬 메모리가 필요하다.",
              "문자 인코딩과 인덱스 단위가 다르면 구현 오류가 생기기 쉽다."
            ],
            "useCases": [
              "단백질·DNA의 보존된 지역 서열 비교",
              "텍스트 검색과 서열 분석"
            ]
          },
          "en": {
            "summary": "A dynamic program finding an optimal local alignment by restarting whenever the score would become negative.",
            "description": "Each cell chooses among a character score, either gap, and zero. Traceback runs from the global maximum until reaching zero.",
            "advantages": [
              "It exactly finds the most similar local regions even when whole sequences differ.",
              "It reuses prefix, suffix, or repetition structure in strings."
            ],
            "disadvantages": [
              "Computation and full traceback storage scale with the product of sequence lengths.",
              "Mismatched character encodings and indexing units easily cause errors."
            ],
            "useCases": [
              "Conserved-region comparison in protein and DNA sequences",
              "Text retrieval and sequence analysis"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-myers-diff",
        "type": "algorithm",
        "name": "Myers Difference Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Myers Difference Algorithm",
          "ko": "마이어스 차이 알고리즘"
        },
        "complexity": {
          "time": "O((N + M)D)",
          "space": "O(N + M)"
        },
        "pseudocode": "MYERS_DIFF(A, B)\n  V[1] <- 0\n  for edit distance D <- 0 upward\n    for diagonal k <- -D to D by 2\n      choose insertion or deletion predecessor\n      follow equal symbols as a diagonal snake\n      store furthest reached x on diagonal k\n      if both sequences end, reconstruct edits",
        "referenceIds": [
          "source-gusfield-strings",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "편집 그래프의 각 대각선에서 가장 멀리 도달한 지점을 추적하는 최단 편집 스크립트 알고리즘",
            "description": "삽입·삭제 횟수 D를 증가시키며 각 대각선의 최장 일치 snake를 확장한다. 끝에 도달한 첫 D가 최소 편집 수다.",
            "advantages": [
              "두 서열이 비슷해 D가 작으면 매우 빠르다.",
              "문자열의 접두·접미 또는 반복 구조를 재사용한다."
            ],
            "disadvantages": [
              "역추적과 대규모 완전히 다른 입력의 메모리 관리가 복잡하다.",
              "문자 인코딩과 인덱스 단위가 다르면 구현 오류가 생기기 쉽다."
            ],
            "useCases": [
              "버전 관리 시스템과 텍스트 diff 도구",
              "텍스트 검색과 서열 분석"
            ]
          },
          "en": {
            "summary": "A shortest-edit-script algorithm tracking the furthest point reached on each edit-graph diagonal.",
            "description": "It increases edit count D, extends maximal equal-symbol snakes, and stops at the first D reaching both sequence ends.",
            "advantages": [
              "It is especially fast when the two sequences are similar and D is small.",
              "It reuses prefix, suffix, or repetition structure in strings."
            ],
            "disadvantages": [
              "Traceback and memory handling are involved for large, highly different inputs.",
              "Mismatched character encodings and indexing units easily cause errors."
            ],
            "useCases": [
              "Version-control systems and text-difference tools",
              "Text retrieval and sequence analysis"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
