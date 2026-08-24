(function registerAlgoriaGeometryMlOptimizationAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "algorithms-geometry-ml-optimization",
    entities: [
      {
        "id": "algo-graham-scan",
        "type": "algorithm",
        "name": "Graham Scan",
        "summary": "점들을 각도순으로 훑어 평면 점 집합의 볼록 껍질을 구하는 알고리즘",
        "aliases": [
          "Graham's Scan"
        ],
        "complexity": {
          "time": {
            "worst": "O(n log n)"
          },
          "space": {
            "auxiliary": "O(n)"
          }
        },
        "pseudocode": "GRAHAM_SCAN(points)\n  anchor <- point with smallest y, then smallest x\n  sort remaining points by polar angle around anchor\n  resolve equal angles according to the chosen collinear-point policy\n  hull <- empty stack\n  for each point p in [anchor, sorted points]\n    while size(hull) >= 2 and ORIENTATION(nextToTop, top, p) is not counterclockwise\n      pop hull\n    push p onto hull\n  return hull",
        "introduced": {
          "year": 1972
        },
        "authors": [
          {
            "name": "Ronald L. Graham"
          }
        ],
        "referenceIds": [
          "source-graham-1972",
          "source-princeton-graham-scan",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "점들을 극각순으로 정렬한 뒤 반시계 방향 회전만 남겨 평면 볼록 껍질을 만드는 알고리즘",
            "description": "가장 아래쪽 기준점을 정하고 나머지 점을 기준점 주위의 극각순으로 정렬한다. 정렬된 점을 스택으로 훑으며 마지막 두 점과 새 점이 시계 방향 또는 허용하지 않는 일직선 회전을 만들면 가운데 점을 제거한다.",
            "advantages": [
              "정렬 이후 스캔은 각 점이 한 번 들어가고 나와 O(n)에 끝난다.",
              "방향 판정과 스택만으로 볼록 껍질 꼭짓점을 경계 순서대로 얻는다."
            ],
            "disadvantages": [
              "전체 시간 O(n log n)의 대부분을 극각 정렬이 차지한다.",
              "중복점·일직선점·부동소수점 방향 판정을 위한 명시적인 정책이 필요하다."
            ],
            "useCases": [
              "평면 점 집합의 외곽 경계와 최소 포위 다각형 계산",
              "충돌 검사·형상 전처리·공간 데이터의 외곽선 요약"
            ]
          },
          "en": {
            "summary": "A planar convex-hull algorithm that sorts points by polar angle and retains only counterclockwise turns.",
            "description": "It chooses a lowest anchor, sorts the remaining points by polar angle around it, and scans them with a stack. Whenever the last two hull points and the new point make a clockwise or disallowed collinear turn, the middle point is removed.",
            "advantages": [
              "After sorting, each point enters and leaves the stack at most once, so the scan is O(n).",
              "It needs only orientation tests and a stack to return hull vertices in boundary order."
            ],
            "disadvantages": [
              "Polar-angle sorting dominates the O(n log n) running time.",
              "Duplicate points, collinear points, and floating-point orientation require explicit policies."
            ],
            "useCases": [
              "Computing the outer boundary and minimum enclosing polygon of planar points",
              "Collision preprocessing, shape analysis, and spatial-data outline summaries"
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
            "code": "function grahamScan(points) {\n      const unique = [...new Map(points.map((point) => [`${point.x},${point.y}`, { x: point.x, y: point.y }])).values()];\n      if (unique.length <= 1) return unique;\n      unique.sort((left, right) => left.y - right.y || left.x - right.x);\n      const pivot = unique.shift();\n      const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n      unique.sort((left, right) => {\n        const turn = cross(pivot, left, right);\n        if (turn !== 0) return -turn;\n        const leftDistance = (left.x - pivot.x) ** 2 + (left.y - pivot.y) ** 2;\n        const rightDistance = (right.x - pivot.x) ** 2 + (right.y - pivot.y) ** 2;\n        return leftDistance - rightDistance;\n      });\n      const hull = [pivot];\n      for (const point of unique) {\n        while (hull.length >= 2 && cross(hull[hull.length - 2], hull[hull.length - 1], point) <= 0) hull.pop();\n        hull.push(point);\n      }\n      return hull;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Graham Scan",
          "ko": "그레이엄 스캔"
        }
      },
      {
        "id": "algo-k-means",
        "type": "algorithm",
        "name": "k-means Clustering",
        "aliases": [
          "k-means",
          "Lloyd's Algorithm"
        ],
        "summary": "할당과 중심 갱신을 반복해 데이터를 k개 군집으로 나누는 알고리즘",
        "complexity": {
          "time": {
            "perIteration": "O(nkd)",
            "totalForIIterations": "O(inkd)"
          },
          "space": {
            "labelsAndCentroids": "O(n + kd)"
          }
        },
        "pseudocode": "K_MEANS(points, k)\n  centroids <- initialize k centers\n  repeat until assignments stabilize or stopping criterion is met\n    for each point x\n      assignment[x] <- index of nearest centroid\n    for each cluster j\n      if cluster j is nonempty\n        centroid[j] <- mean of points assigned to j\n      else\n        repair the empty cluster according to policy\n  return assignments and centroids",
        "introduced": {
          "year": 1957
        },
        "authors": [
          {
            "name": "Stuart P. Lloyd"
          },
          {
            "name": "James MacQueen"
          }
        ],
        "referenceIds": [
          "source-lloyd-kmeans-1982",
          "source-stanford-kmeans",
          "source-elements-statistical-learning"
        ],
        "content": {
          "ko": {
            "summary": "각 점의 최근접 중심 할당과 군집 평균 갱신을 반복하는 중심 기반 군집화 알고리즘",
            "description": "대표적인 Lloyd 방식은 k개 중심을 초기화한 뒤 각 표본을 가장 가까운 중심에 할당하고 각 군집의 평균으로 중심을 다시 계산한다. 이 두 단계는 제곱거리 목적 함수를 증가시키지 않지만 결과는 초기값에 따라 달라지는 국소 최적해다.",
            "advantages": [
              "할당과 평균 계산만 반복해 구현이 단순하고 대규모 수치 데이터에서 빠르다.",
              "군집 중심이 원래 특성 공간의 평균 벡터라 결과를 비교적 쉽게 해석할 수 있다."
            ],
            "disadvantages": [
              "k와 초기 중심을 정해야 하며 서로 다른 시작점이 다른 해를 만들 수 있다.",
              "구형·비슷한 크기의 군집과 유클리드 거리를 가정해 이상치와 비볼록 군집에 민감하다."
            ],
            "useCases": [
              "고객·문서·센서 벡터의 탐색적 세분화",
              "색상 양자화와 벡터 코드북 생성"
            ]
          },
          "en": {
            "summary": "A centroid-based clustering algorithm alternating nearest-center assignment with cluster-mean updates.",
            "description": "The common Lloyd form initializes k centers, assigns every sample to its nearest center, and recomputes each center as its cluster mean. These steps do not increase the squared-distance objective, but the result is a local optimum that depends on initialization.",
            "advantages": [
              "Repeated assignment and averaging make it simple and fast on large numerical datasets.",
              "Centroids are mean vectors in the original feature space and are relatively easy to interpret."
            ],
            "disadvantages": [
              "The value of k and initial centers must be chosen, and different starts can produce different solutions.",
              "Its Euclidean, roughly spherical-cluster assumption makes it sensitive to outliers and nonconvex groups."
            ],
            "useCases": [
              "Exploratory segmentation of customer, document, and sensor vectors",
              "Color quantization and vector-codebook construction"
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
            "code": "function kMeans(points, k, maxIterations = 100) {\n      if (points.length === 0 || !Number.isInteger(k) || k < 1 || k > points.length) throw new RangeError(\"k must be between 1 and the number of points.\");\n      const dimensions = points[0].length;\n      let centroids = points.slice(0, k).map((point) => [...point]);\n      let labels = Array(points.length).fill(-1);\n      for (let iteration = 0; iteration < maxIterations; iteration += 1) {\n        const nextLabels = points.map((point) => {\n          let best = 0;\n          let bestDistance = Infinity;\n          for (let cluster = 0; cluster < k; cluster += 1) {\n            const distance = point.reduce((sum, value, dimension) => sum + (value - centroids[cluster][dimension]) ** 2, 0);\n            if (distance < bestDistance) {\n              bestDistance = distance;\n              best = cluster;\n            }\n          }\n          return best;\n        });\n        if (nextLabels.every((label, index) => label === labels[index])) break;\n        labels = nextLabels;\n        const sums = Array.from({ length: k }, () => Array(dimensions).fill(0));\n        const counts = Array(k).fill(0);\n        points.forEach((point, index) => {\n          counts[labels[index]] += 1;\n          point.forEach((value, dimension) => { sums[labels[index]][dimension] += value; });\n        });\n        centroids = centroids.map((centroid, cluster) => counts[cluster] === 0 ? centroid : sums[cluster].map((sum) => sum / counts[cluster]));\n      }\n      return { centroids, labels };\n    }"
          }
        ],
        "localizedNames": {
          "en": "k-means Clustering",
          "ko": "k-평균 군집화"
        }
      },
      {
        "id": "algo-simplex",
        "type": "algorithm",
        "name": "Simplex Algorithm",
        "summary": "가능 영역의 꼭짓점을 이동하며 선형 계획 문제를 푸는 알고리즘",
        "aliases": [
          "Simplex Method",
          "Dantzig's Simplex Method"
        ],
        "complexity": {
          "time": {
            "worst": "exponential number of pivots"
          },
          "space": {
            "tableauForm": "O(mn)"
          }
        },
        "pseudocode": "SIMPLEX(linearProgram)\n  convert the problem to standard form\n  basis <- find an initial basic feasible solution, using Phase I if needed\n  loop\n    reducedCosts <- compute reduced costs for nonbasic variables\n    if no improving entering variable exists: return current optimum\n    entering <- choose an improving nonbasic variable by a pivot rule\n    leaving <- minimum-ratio test among eligible basic variables\n    if no leaving variable exists: report UNBOUNDED\n    pivot entering into the basis and leaving out\n    apply an anti-cycling rule when required",
        "introduced": {
          "year": 1947
        },
        "authors": [
          {
            "name": "George B. Dantzig"
          }
        ],
        "referenceIds": [
          "source-dantzig-simplex-origins",
          "source-princeton-simplex",
          "source-nist-linear-programming"
        ],
        "content": {
          "ko": {
            "summary": "기저 피벗으로 인접한 기본 가능해를 이동하며 선형 목적 함수를 최적화하는 알고리즘",
            "description": "표준형 선형계획에서 현재 기저의 reduced cost로 개선 가능한 진입 변수를 고르고 최소 비율 검사로 이탈 변수를 정한다. 피벗은 가능성을 유지하며 목적값을 개선하지만 퇴화 문제에서는 순환 방지 규칙이 필요할 수 있다.",
            "advantages": [
              "실제 많은 선형계획 문제에서 매우 효율적이며 최적해와 유용한 민감도 정보를 제공한다.",
              "revised simplex는 희소 행렬 구조를 활용해 큰 모델의 전체 tableau 저장을 피할 수 있다."
            ],
            "disadvantages": [
              "피벗 규칙에 따라 최악의 경우 지수적으로 많은 기저를 방문할 수 있다.",
              "초기 가능 기저, 퇴화·순환, 수치 오차와 무한·불가능 판정을 신중히 처리해야 한다."
            ],
            "useCases": [
              "생산·운송·배정·포트폴리오의 연속 자원 최적화",
              "정수계획의 LP relaxation과 branch-and-bound 하위 문제"
            ]
          },
          "en": {
            "summary": "A linear-optimization algorithm moving between adjacent basic feasible solutions through basis pivots.",
            "description": "For a standard-form linear program, it uses reduced costs to choose an improving entering variable and the minimum-ratio test to choose a leaving variable. Each pivot preserves feasibility and improves the objective, though degeneracy may require an anti-cycling rule.",
            "advantages": [
              "It is highly effective on many practical linear programs and provides optimal solutions plus sensitivity information.",
              "Revised simplex exploits sparse matrices and avoids storing an entire tableau for large models."
            ],
            "disadvantages": [
              "Depending on the pivot rule, it can visit exponentially many bases in the worst case.",
              "Initial feasibility, degeneracy, cycling, numerical error, and unbounded or infeasible cases require careful handling."
            ],
            "useCases": [
              "Continuous resource optimization in production, transport, assignment, and portfolios",
              "LP relaxations and subproblems inside branch-and-bound for integer programming"
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
            "code": "function simplexMaximize(tableau, basis, epsilon = 1e-10) {\n      const matrix = tableau.map((row) => [...row]);\n      const activeBasis = [...basis];\n      const constraintCount = matrix.length - 1;\n      const rhs = matrix[0].length - 1;\n      while (true) {\n        const objective = matrix[constraintCount];\n        let entering = -1;\n        for (let column = 0; column < rhs; column += 1) {\n          if (objective[column] < -epsilon && (entering < 0 || objective[column] < objective[entering])) entering = column;\n        }\n        if (entering < 0) break;\n        let leaving = -1;\n        let bestRatio = Infinity;\n        for (let row = 0; row < constraintCount; row += 1) {\n          if (matrix[row][entering] > epsilon) {\n            const ratio = matrix[row][rhs] / matrix[row][entering];\n            if (ratio < bestRatio - epsilon) {\n              bestRatio = ratio;\n              leaving = row;\n            }\n          }\n        }\n        if (leaving < 0) throw new RangeError(\"The objective is unbounded.\");\n        const pivot = matrix[leaving][entering];\n        matrix[leaving] = matrix[leaving].map((value) => value / pivot);\n        for (let row = 0; row < matrix.length; row += 1) {\n          if (row === leaving) continue;\n          const factor = matrix[row][entering];\n          matrix[row] = matrix[row].map((value, column) => value - factor * matrix[leaving][column]);\n        }\n        activeBasis[leaving] = entering;\n      }\n      const solution = Array(rhs).fill(0);\n      for (let row = 0; row < constraintCount; row += 1) solution[activeBasis[row]] = matrix[row][rhs];\n      return { solution, objective: matrix[constraintCount][rhs], tableau: matrix, basis: activeBasis };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Simplex Algorithm",
          "ko": "심플렉스 알고리즘"
        }
      },
      {
        "id": "algo-longest-increasing-subsequence-dp",
        "type": "algorithm",
        "name": "Longest Increasing Subsequence DP",
        "aliases": [
          "LIS Dynamic Programming"
        ],
        "summary": "각 위치에서 끝나는 증가 부분 수열 길이를 누적하는 이차 시간 동적 계획 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n²)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "LIS_DP(values)\n  if values is empty: return empty sequence\n  length[i] <- 1 and previous[i] <- NONE for every i\n  for i <- 0 to n - 1\n    for j <- 0 to i - 1\n      if values[j] < values[i] and length[j] + 1 > length[i]\n        length[i] <- length[j] + 1\n        previous[i] <- j\n  end <- index with maximum length\n  follow previous from end and reverse the result\n  return the subsequence",
        "referenceIds": [
          "source-cmu-lis",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "각 위치에서 끝나는 증가 부분 수열 길이를 누적하는 이차 시간 동적 계획 알고리즘",
            "description": "dp[i]를 i번째 값에서 끝나는 최장 증가 부분 수열의 길이로 정의한다. 앞의 모든 j<i 중 value[j]<value[i]인 상태를 검사해 가장 긴 상태를 연장하고, 이전 인덱스를 기록하면 실제 수열도 복원한다.",
            "advantages": [
              "상태와 전이가 직관적이며 실제 LIS를 쉽게 복원한다.",
              "중복 값의 엄격·비엄격 증가 조건을 비교 연산 하나로 명확히 제어할 수 있다."
            ],
            "disadvantages": [
              "모든 앞선 위치를 검사해 O(n²) 시간이 걸린다.",
              "길이만 필요할 때는 이진 탐색 기반 O(n log n) 알고리즘보다 느리다."
            ],
            "useCases": [
              "작거나 중간 크기 수열의 증가 추세 추출",
              "부분 순서와 스케줄 호환성 문제를 LIS로 환원한 해법"
            ]
          },
          "en": {
            "summary": "A quadratic dynamic program accumulating the longest increasing subsequence ending at each position.",
            "description": "dp[i] is the length of the longest increasing subsequence ending at value i. It checks every earlier j with value[j] < value[i], extends the best state, and can reconstruct a subsequence through predecessor indices.",
            "advantages": [
              "The state and transition are intuitive, and an actual LIS is easy to reconstruct.",
              "Strict versus non-strict growth is controlled explicitly by one comparison."
            ],
            "disadvantages": [
              "Checking every prior position costs O(n²) time.",
              "When only the length is needed, binary-search-based O(n log n) methods are faster."
            ],
            "useCases": [
              "Extracting increasing trends from small or medium sequences",
              "Problems on partial order or schedule compatibility reducible to LIS"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Longest Increasing Subsequence DP",
          "ko": "최장 증가 부분 수열 DP"
        }
      },
      {
        "id": "algo-zero-one-knapsack-dp",
        "type": "algorithm",
        "name": "0/1 Knapsack Dynamic Programming",
        "aliases": [
          "0/1 Knapsack DP"
        ],
        "summary": "용량별 최대 가치를 갱신해 0/1 배낭 문제를 푸는 동적 계획 알고리즘",
        "complexity": {
          "time": {
            "pseudoPolynomial": "O(nC)"
          },
          "space": {
            "valueOnly": "O(C)",
            "withReconstruction": "O(nC)"
          }
        },
        "pseudocode": "ZERO_ONE_KNAPSACK(items, capacity C)\n  best[0..C] <- 0\n  for each item (weight, value)\n    for c <- C down to weight\n      best[c] <- max(best[c], best[c - weight] + value)\n  return best[C]",
        "referenceIds": [
          "source-nist-knapsack",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "용량별 최대 가치를 갱신해 0/1 배낭 문제를 푸는 동적 계획 알고리즘",
            "description": "best[c]에 처리한 물건만으로 용량 c에서 얻는 최대 가치를 저장한다. 각 물건마다 용량을 큰 값부터 역순으로 갱신해야 같은 물건이 한 번의 반복에서 다시 선택되지 않는다.",
            "advantages": [
              "정수 용량이 적당할 때 최적해를 보장하며 구현이 간결하다.",
              "가치만 필요하면 2차원 표를 한 행 O(C) 공간으로 압축할 수 있다."
            ],
            "disadvantages": [
              "O(nC)는 입력 비트 길이가 아니라 용량 값 C에 의존하는 의사다항 시간이다.",
              "선택한 물건을 복원하려면 추가 표나 결정 기록이 필요하다."
            ],
            "useCases": [
              "예산·무게 제한 아래 독립 항목 선택",
              "부분합과 제한 자원 배분 문제의 기준 동적 계획 해법"
            ]
          },
          "en": {
            "summary": "A dynamic program solving 0/1 knapsack by updating the best value at each capacity.",
            "description": "best[c] stores the maximum value attainable at capacity c using processed items. Capacities must be updated in descending order for each item so that the same item cannot be selected twice in one iteration.",
            "advantages": [
              "It guarantees an optimum when the integer capacity is moderate and is concise to implement.",
              "If only the value is needed, the two-dimensional table compresses to one O(C) row."
            ],
            "disadvantages": [
              "O(nC) is pseudo-polynomial because it depends on numeric capacity rather than its bit length.",
              "Recovering the selected items needs an additional table or decision trace."
            ],
            "useCases": [
              "Selecting independent items under budget or weight limits",
              "A baseline dynamic program for subset-sum and constrained resource allocation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "0/1 Knapsack Dynamic Programming",
          "ko": "0/1 배낭 동적 계획법"
        }
      },
      {
        "id": "algo-matrix-chain-multiplication",
        "type": "algorithm",
        "name": "Matrix Chain Multiplication",
        "aliases": [
          "Matrix Chain Ordering DP"
        ],
        "summary": "행렬 곱셈 순서별 비용을 비교해 최적 괄호 배치를 찾는 동적 계획 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n³)"
          },
          "space": {
            "typical": "O(n²)"
          }
        },
        "pseudocode": "MATRIX_CHAIN(dimensions p[0..n])\n  cost[i, i] <- 0 for i = 1..n\n  for chainLength <- 2 to n\n    for i <- 1 to n - chainLength + 1\n      j <- i + chainLength - 1\n      cost[i, j] <- infinity\n      for k <- i to j - 1\n        candidate <- cost[i, k] + cost[k + 1, j] + p[i - 1] * p[k] * p[j]\n        if candidate < cost[i, j]\n          cost[i, j] <- candidate; split[i, j] <- k\n  return cost[1, n] and split",
        "referenceIds": [
          "source-nist-matrix-chain",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "행렬 곱셈 순서별 비용을 비교해 최적 괄호 배치를 찾는 동적 계획 알고리즘",
            "description": "연속한 행렬 구간 A_i…A_j의 최소 스칼라 곱셈 수를 저장하고 가능한 마지막 분할점 k를 모두 비교한다. 행렬 곱셈의 결합법칙으로 결과 행렬은 같지만 중간 차원에 따라 계산량은 크게 달라진다.",
            "advantages": [
              "지수적으로 많은 괄호 배치 중 최적 곱셈 순서를 O(n³)에 찾는다.",
              "분할점 표를 이용해 실제 최적 괄호 구조를 복원할 수 있다."
            ],
            "disadvantages": [
              "행렬 개수에 대해 O(n²) 표와 O(n³) 시간이 필요하다.",
              "기본 비용 모델은 스칼라 곱셈 수만 보며 메모리 이동·희소성·병렬성은 반영하지 않는다."
            ],
            "useCases": [
              "컴파일러와 선형대수 시스템의 행렬 표현식 최적화",
              "연속 구간 분할형 동적 계획법의 대표 예제"
            ]
          },
          "en": {
            "summary": "A dynamic program comparing multiplication orders to find an optimal matrix-chain parenthesization.",
            "description": "It stores the minimum scalar multiplications for each contiguous interval A_i…A_j and tests every possible final split k. Associativity preserves the result matrix, but intermediate dimensions can change the work dramatically.",
            "advantages": [
              "It finds the best among exponentially many parenthesizations in O(n³) time.",
              "A split table reconstructs the actual optimal parenthesization."
            ],
            "disadvantages": [
              "It needs an O(n²) table and O(n³) time in the number of matrices.",
              "The basic cost model counts scalar multiplications but ignores data movement, sparsity, and parallelism."
            ],
            "useCases": [
              "Optimizing matrix expressions in compilers and linear-algebra systems",
              "A canonical example of interval dynamic programming"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Matrix Chain Multiplication",
          "ko": "행렬 연쇄 곱셈"
        }
      },
      {
        "id": "algo-jarvis-march",
        "type": "algorithm",
        "name": "Jarvis March",
        "aliases": [
          "Gift Wrapping Algorithm"
        ],
        "summary": "가장 바깥쪽 다음 점을 반복 선택해 볼록 껍질을 감싸는 출력 민감 알고리즘",
        "complexity": {
          "time": {
            "outputSensitive": "O(nh)"
          },
          "space": {
            "hull": "O(h)"
          }
        },
        "pseudocode": "JARVIS_MARCH(points)\n  start <- leftmost point\n  current <- start\n  repeat\n    append current to hull\n    next <- any point different from current\n    for each point p\n      if p is more counterclockwise than next from current\n        next <- p\n    current <- next\n  until current = start\n  return hull",
        "introduced": {
          "year": 1973
        },
        "authors": [
          {
            "name": "R. A. Jarvis"
          }
        ],
        "referenceIds": [
          "source-jarvis-1973",
          "source-erickson-algorithms",
          "source-de-berg-geometry"
        ],
        "content": {
          "ko": {
            "summary": "가장 바깥쪽 다음 점을 반복 선택해 볼록 껍질을 감싸는 출력 민감 알고리즘",
            "description": "가장 왼쪽 점에서 시작해 모든 점을 검사하며 현재 점 기준 가장 반시계 방향인 다음 경계점을 고른다. 껍질 꼭짓점 수 h번 전체 n개 점을 확인하므로 O(nh)이다.",
            "advantages": [
              "껍질 점이 적으면 O(nh) 출력 민감 성능이 유리하다.",
              "방향 판정만으로 구현 흐름이 직관적이다."
            ],
            "disadvantages": [
              "모든 점이 껍질 위에 있으면 O(n²)이 된다.",
              "공선점과 중복점의 선택 규칙을 명확히 해야 한다."
            ],
            "useCases": [
              "껍질 크기가 작은 평면 점 집합의 외곽선 계산",
              "출력 민감 알고리즘 교육과 기하 전처리"
            ]
          },
          "en": {
            "summary": "An output-sensitive convex-hull algorithm that wraps the set by repeatedly choosing the outermost next point.",
            "description": "Starting at the leftmost point, it scans every point to choose the most counterclockwise next boundary point. It performs one full scan for each of h hull vertices, taking O(nh) time.",
            "advantages": [
              "Its O(nh) output-sensitive bound is attractive when the hull is small.",
              "The control flow needs only orientation tests and is intuitive."
            ],
            "disadvantages": [
              "It degrades to O(n²) when every point lies on the hull.",
              "Collinear and duplicate points require explicit tie-breaking."
            ],
            "useCases": [
              "Convex hulls of planar sets with few boundary points",
              "Teaching output-sensitive algorithms and geometric preprocessing"
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
            "code": "function jarvisMarch(points) {\n      if (points.length < 3) return points.map((point) => ({ ...point }));\n      const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n      const distance = (a, b) => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;\n      const start = points.reduce((best, point) => point.x < best.x || (point.x === best.x && point.y < best.y) ? point : best);\n      const hull = [];\n      let current = start;\n      do {\n        hull.push({ ...current });\n        let next = points.find((point) => point !== current);\n        for (const point of points) {\n          const turn = cross(current, next, point);\n          if (turn < 0 || (turn === 0 && distance(current, point) > distance(current, next))) next = point;\n        }\n        current = next;\n      } while (current !== start);\n      return hull;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Jarvis March",
          "ko": "자비스 행진"
        }
      },
      {
        "id": "algo-andrew-monotone-chain",
        "type": "algorithm",
        "name": "Andrew's Monotone Chain",
        "aliases": [
          "Monotone Chain Convex Hull"
        ],
        "summary": "점을 사전순 정렬한 뒤 위·아래 경계를 선형 스캔하는 볼록 껍질 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n log n)"
          },
          "space": {
            "hullAndSort": "O(n)"
          }
        },
        "pseudocode": "MONOTONE_CHAIN(points)\n  sort unique points lexicographically\n  lower <- empty stack\n  for p in sorted order\n    while last two points with p do not make a counterclockwise turn: pop\n    push p\n  build upper the same way in reverse order\n  concatenate lower and upper without duplicate endpoints",
        "introduced": {
          "year": 1979
        },
        "authors": [
          {
            "name": "A. M. Andrew"
          }
        ],
        "referenceIds": [
          "source-andrew-1979",
          "source-erickson-algorithms",
          "source-de-berg-geometry"
        ],
        "content": {
          "ko": {
            "summary": "점을 사전순 정렬한 뒤 위·아래 경계를 선형 스캔하는 볼록 껍질 알고리즘",
            "description": "중복 점을 제거하고 x, y 사전순으로 정렬한 뒤 스택의 마지막 회전이 반시계가 아닐 때 제거하며 아래 경계를 만든다. 역순으로 같은 과정을 수행해 위 경계를 결합한다.",
            "advantages": [
              "정렬 이후 각 점이 스택에 한 번 들어가고 나와 선형 스캔이다.",
              "극각 계산 없이 사전순 정렬과 orientation만 사용한다."
            ],
            "disadvantages": [
              "전체 시간은 O(n log n) 정렬이 지배한다.",
              "공선 경계점을 포함할지 제외할지 정책이 결과에 영향을 준다."
            ],
            "useCases": [
              "범용 2차원 볼록 껍질 계산",
              "GIS·영상·충돌 처리의 경계 단순화"
            ]
          },
          "en": {
            "summary": "A convex-hull algorithm that lexicographically sorts points and scans lower and upper chains.",
            "description": "After deduplicating and sorting by x then y, it pops while the last turn is not counterclockwise to build the lower chain. The reverse pass builds the upper chain and the two are joined.",
            "advantages": [
              "After sorting, each point enters and leaves a stack at most once.",
              "It avoids polar angles and uses only lexicographic order plus orientation."
            ],
            "disadvantages": [
              "The O(n log n) sort dominates total running time.",
              "A policy is needed for retaining or discarding collinear boundary points."
            ],
            "useCases": [
              "General-purpose two-dimensional convex hulls",
              "Boundary preprocessing in GIS, imaging, and collision systems"
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
            "code": "function monotoneChain(points) {\n      const sorted = [...new Map(points.map((point) => [`${point.x},${point.y}`, { ...point }])).values()].sort((a, b) => a.x - b.x || a.y - b.y);\n      if (sorted.length <= 1) return sorted;\n      const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n      const build = (items) => {\n        const chain = [];\n        for (const point of items) {\n          while (chain.length >= 2 && cross(chain[chain.length - 2], chain[chain.length - 1], point) <= 0) chain.pop();\n          chain.push(point);\n        }\n        return chain;\n      };\n      const lower = build(sorted);\n      const upper = build([...sorted].reverse());\n      return lower.slice(0, -1).concat(upper.slice(0, -1));\n    }"
          }
        ],
        "localizedNames": {
          "en": "Andrew's Monotone Chain",
          "ko": "앤드루 단조 연쇄"
        }
      },
      {
        "id": "algo-quickhull",
        "type": "algorithm",
        "name": "Quickhull",
        "summary": "극단점이 만드는 선에서 가장 먼 점으로 후보를 분할하는 볼록 껍질 알고리즘",
        "complexity": {
          "time": {
            "average": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "recursive": "O(n)"
          }
        },
        "pseudocode": "QUICKHULL(points)\n  a <- leftmost point; b <- rightmost point\n  HULL_SIDE(a, b, points left of ab)\n  HULL_SIDE(b, a, points left of ba)\n\nHULL_SIDE(a, b, set)\n  if set is empty: emit edge a-b\n  p <- point farthest from line ab\n  recurse on points outside triangle a-p-b for edges a-p and p-b",
        "introduced": {
          "year": 1996
        },
        "authors": [
          {
            "name": "C. Bradford Barber"
          },
          {
            "name": "David P. Dobkin"
          },
          {
            "name": "Hannu Huhdanpaa"
          }
        ],
        "referenceIds": [
          "source-quickhull-1996",
          "source-erickson-algorithms",
          "source-de-berg-geometry"
        ],
        "content": {
          "ko": {
            "summary": "극단점이 만드는 선에서 가장 먼 점으로 후보를 분할하는 볼록 껍질 알고리즘",
            "description": "좌우 극단점을 잇는 선 양쪽 후보를 나누고 선에서 가장 먼 점을 새 껍질점으로 선택한다. 그 점과 양 끝점이 만드는 삼각형 안쪽을 버리고 두 바깥 부분을 재귀 처리한다.",
            "advantages": [
              "Quick Sort와 비슷한 분할 구조로 평균적으로 빠르다.",
              "삼각형 내부 점을 일찍 제거해 실제 데이터에서 후보가 빠르게 줄 수 있다."
            ],
            "disadvantages": [
              "불균형 분할에서는 최악 O(n²)이 된다.",
              "고차원과 수치적으로 거의 공면인 입력은 강건한 판정이 어렵다."
            ],
            "useCases": [
              "2차원·3차원 점군의 볼록 껍질",
              "시각화·CAD·충돌 검사의 공간 전처리"
            ]
          },
          "en": {
            "summary": "A convex-hull algorithm partitioning candidates around the point farthest from an extreme-point line.",
            "description": "It splits points around a line through two extremes and selects the farthest point as a new hull vertex. Points inside the resulting triangle are discarded and the two exterior subsets are processed recursively.",
            "advantages": [
              "Its Quick Sort-like partition structure is fast on many practical inputs.",
              "Discarding interior triangles can shrink candidate sets quickly."
            ],
            "disadvantages": [
              "Unbalanced partitions lead to O(n²) worst-case time.",
              "Higher dimensions and nearly coplanar data require robust geometric predicates."
            ],
            "useCases": [
              "Convex hulls of two- and three-dimensional point clouds",
              "Spatial preprocessing for visualization, CAD, and collision detection"
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
            "code": "function quickhull(points) {\n      if (points.length <= 1) return points.map((point) => ({ ...point }));\n      const cross = (a, b, p) => (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);\n      const left = points.reduce((best, point) => point.x < best.x ? point : best);\n      const right = points.reduce((best, point) => point.x > best.x ? point : best);\n      const side = (a, b, candidates) => {\n        if (candidates.length === 0) return [a];\n        const farthest = candidates.reduce((best, point) => Math.abs(cross(a, b, point)) > Math.abs(cross(a, b, best)) ? point : best);\n        return side(a, farthest, candidates.filter((point) => cross(a, farthest, point) > 0)).concat(side(farthest, b, candidates.filter((point) => cross(farthest, b, point) > 0)));\n      };\n      const upper = side(left, right, points.filter((point) => cross(left, right, point) > 0));\n      const lower = side(right, left, points.filter((point) => cross(right, left, point) > 0));\n      return upper.concat(lower);\n    }"
          }
        ],
        "localizedNames": {
          "en": "Quickhull",
          "ko": "퀵헐"
        }
      },
      {
        "id": "algo-closest-pair-divide-conquer",
        "type": "algorithm",
        "name": "Closest Pair Divide and Conquer",
        "summary": "점을 분할하고 중앙 띠의 제한된 이웃만 비교해 최근접 쌍을 찾는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n log n)"
          },
          "space": {
            "auxiliary": "O(n)"
          }
        },
        "pseudocode": "CLOSEST_PAIR(points sorted by x, points sorted by y)\n  if at most 3 points: check every pair\n  split at median x\n  dl <- recurse left; dr <- recurse right; d <- min(dl, dr)\n  strip <- points within d of the split, ordered by y\n  for each point compare only following strip points whose y difference < d\n  return the best pair",
        "referenceIds": [
          "source-shamos-hoey-closest-pair-1975",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "점을 분할하고 중앙 띠의 제한된 이웃만 비교해 최근접 쌍을 찾는 알고리즘",
            "description": "x 중앙값으로 점을 나누어 양쪽 최근접 거리를 재귀 계산한다. 더 작은 거리 d 안의 중앙 띠를 y순으로 훑으면 평면 포장 성질 때문에 각 점은 상수 개의 다음 점만 확인하면 된다.",
            "advantages": [
              "전수 비교 O(n²)을 O(n log n)으로 줄인다.",
              "y순 목록을 재귀에서 유지하면 각 단계 결합이 선형이다."
            ],
            "disadvantages": [
              "x·y 정렬 목록을 함께 분할하는 구현이 단순 전수 조사보다 복잡하다.",
              "거리 동률과 부동소수점 비교를 일관되게 처리해야 한다."
            ],
            "useCases": [
              "GIS와 점군에서 가장 가까운 객체 후보 탐색",
              "충돌·중복 점 검출과 공간 통계 전처리"
            ]
          },
          "en": {
            "summary": "A divide-and-conquer algorithm finding the closest pair by checking only limited neighbors in a central strip.",
            "description": "It splits points at the median x-coordinate and recursively obtains the best distance on each side. Scanning the width-d central strip in y order needs only a constant number of following comparisons per point by planar packing.",
            "advantages": [
              "It improves exhaustive O(n²) comparison to O(n log n).",
              "Maintaining y-sorted lists makes each merge level linear."
            ],
            "disadvantages": [
              "Partitioning both x- and y-sorted views is more involved than brute force.",
              "Distance ties and floating-point comparisons need consistent handling."
            ],
            "useCases": [
              "Nearest-object candidates in GIS and point clouds",
              "Collision, duplicate-point, and spatial-statistics preprocessing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Closest Pair Divide and Conquer",
          "ko": "최근접 점 쌍 분할 정복"
        }
      },
      {
        "id": "algo-bentley-ottmann",
        "type": "algorithm",
        "name": "Bentley–Ottmann Algorithm",
        "summary": "이벤트 큐와 스윕 상태로 선분 교차점을 출력 민감하게 찾는 알고리즘",
        "complexity": {
          "time": {
            "outputSensitive": "O((n + k) log n)"
          },
          "space": {
            "typical": "O(n + k)"
          }
        },
        "pseudocode": "BENTLEY_OTTMANN(segments)\n  events <- all segment endpoints ordered by x\n  status <- segments crossing the sweep line ordered by y\n  while events not empty\n    event <- remove minimum\n    update status for segments starting, ending, or crossing here\n    report crossing events\n    schedule intersections only between newly adjacent status segments",
        "introduced": {
          "year": 1979
        },
        "authors": [
          {
            "name": "Jon L. Bentley"
          },
          {
            "name": "Thomas A. Ottmann"
          }
        ],
        "referenceIds": [
          "source-bentley-ottmann-1979",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "이벤트 큐와 스윕 상태로 선분 교차점을 출력 민감하게 찾는 알고리즘",
            "description": "수직 스윕선을 왼쪽에서 오른쪽으로 움직이며 끝점과 교차 이벤트를 우선순위 큐에서 처리한다. 현재 스윕선을 지나는 선분 순서가 바뀔 때 인접한 선분 쌍만 새 교차 후보가 된다.",
            "advantages": [
              "k개 교차를 O((n+k) log n)에 모두 보고한다.",
              "모든 O(n²) 선분 쌍 대신 국소 인접 관계만 검사한다."
            ],
            "disadvantages": [
              "정확한 이벤트 동률 처리와 동적 순서 자료구조 구현이 어렵다.",
              "수직선분·다중 교차·수치 오차에는 강건한 기하 처리가 필요하다."
            ],
            "useCases": [
              "지도·CAD 선분 네트워크의 교차 검출",
              "평면 배열 구성과 폴리곤 유효성 검사"
            ]
          },
          "en": {
            "summary": "An output-sensitive sweep-line algorithm reporting segment intersections with an event queue and sweep status.",
            "description": "A vertical line moves left to right while endpoint and intersection events are processed in priority order. Only adjacent segments in the current sweep order can create new candidate intersections when the order changes.",
            "advantages": [
              "It reports k intersections in O((n+k) log n) time.",
              "It examines local adjacency instead of all O(n²) segment pairs."
            ],
            "disadvantages": [
              "Event ties and the dynamic ordering structure are difficult to implement correctly.",
              "Vertical segments, multiway intersections, and numerical error need robust geometric handling."
            ],
            "useCases": [
              "Intersection detection in map and CAD segment networks",
              "Planar arrangements and polygon-validity checking"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Bentley–Ottmann Algorithm",
          "ko": "벤틀리–오트만 알고리즘"
        }
      },
      {
        "id": "algo-dbscan",
        "type": "algorithm",
        "name": "DBSCAN",
        "aliases": [
          "Density-Based Spatial Clustering of Applications with Noise"
        ],
        "summary": "고밀도 이웃을 연결해 임의 모양 군집과 잡음을 찾는 밀도 기반 알고리즘",
        "complexity": {
          "time": {
            "indexedTypical": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "DBSCAN(points, eps, minPts)\n  mark every point unvisited\n  for each unvisited point p\n    neighbors <- RANGE_QUERY(p, eps)\n    if size(neighbors) < minPts: label p noise\n    else\n      create cluster and expand a queue from p\n      whenever a queued point is core, append its unseen neighbors\n      assign reachable unassigned points to the cluster",
        "introduced": {
          "year": 1996
        },
        "authors": [
          {
            "name": "Martin Ester"
          },
          {
            "name": "Hans-Peter Kriegel"
          },
          {
            "name": "Jörg Sander"
          },
          {
            "name": "Xiaowei Xu"
          }
        ],
        "referenceIds": [
          "source-dbscan-1996",
          "source-sklearn-clustering",
          "source-elements-statistical-learning"
        ],
        "content": {
          "ko": {
            "summary": "고밀도 이웃을 연결해 임의 모양 군집과 잡음을 찾는 밀도 기반 알고리즘",
            "description": "반경 eps 안에 minPts 이상이 있는 핵심점을 찾고 밀도 도달 가능한 이웃을 큐로 확장한다. 어떤 핵심점에서도 도달하지 못한 표본은 잡음으로 남는다.",
            "advantages": [
              "군집 수를 미리 지정하지 않고 비볼록 모양을 찾을 수 있다.",
              "저밀도 이상치를 잡음으로 명시적으로 분리한다."
            ],
            "disadvantages": [
              "eps와 minPts 선택에 민감하고 밀도가 크게 다른 군집을 동시에 다루기 어렵다.",
              "고차원에서는 거리 집중으로 이웃 질의와 밀도 의미가 약해진다."
            ],
            "useCases": [
              "공간 위치·센서 점군의 군집과 이상치 탐지",
              "임의 모양 궤적·이벤트 군집 분석"
            ]
          },
          "en": {
            "summary": "A density-based algorithm connecting dense neighborhoods into arbitrary-shaped clusters while labeling noise.",
            "description": "It identifies core points with at least minPts neighbors inside radius eps and expands density-reachable neighbors through a queue. Samples unreachable from any core remain noise.",
            "advantages": [
              "It finds nonconvex clusters without specifying their count in advance.",
              "It explicitly separates low-density outliers as noise."
            ],
            "disadvantages": [
              "Results are sensitive to eps and minPts, and one setting struggles with strongly varying densities.",
              "In high dimensions, distance concentration weakens neighborhood queries and density meaning."
            ],
            "useCases": [
              "Clusters and anomaly detection in spatial or sensor point clouds",
              "Arbitrary-shaped trajectory and event-cluster analysis"
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
            "code": "function dbscan(points, epsilon, minPoints) {\n      if (epsilon < 0 || !Number.isInteger(minPoints) || minPoints < 1) throw new RangeError(\"Invalid DBSCAN parameters.\");\n      const squaredEpsilon = epsilon * epsilon;\n      const neighbors = (index) => points.reduce((result, point, candidate) => {\n        const distance = point.reduce((sum, value, dimension) => sum + (value - points[index][dimension]) ** 2, 0);\n        if (distance <= squaredEpsilon) result.push(candidate);\n        return result;\n      }, []);\n      const unclassified = -2;\n      const noise = -1;\n      const labels = Array(points.length).fill(unclassified);\n      let cluster = 0;\n      for (let index = 0; index < points.length; index += 1) {\n        if (labels[index] !== unclassified) continue;\n        const seedNeighbors = neighbors(index);\n        if (seedNeighbors.length < minPoints) {\n          labels[index] = noise;\n          continue;\n        }\n        labels[index] = cluster;\n        const queue = [...seedNeighbors];\n        const queued = new Set(queue);\n        for (let head = 0; head < queue.length; head += 1) {\n          const candidate = queue[head];\n          if (labels[candidate] === noise) labels[candidate] = cluster;\n          if (labels[candidate] !== unclassified) continue;\n          labels[candidate] = cluster;\n          const expanded = neighbors(candidate);\n          if (expanded.length >= minPoints) {\n            for (const neighbor of expanded) {\n              if (!queued.has(neighbor)) {\n                queued.add(neighbor);\n                queue.push(neighbor);\n              }\n            }\n          }\n        }\n        cluster += 1;\n      }\n      return labels;\n    }"
          }
        ],
        "localizedNames": {
          "en": "DBSCAN",
          "ko": "DBSCAN"
        }
      },
      {
        "id": "algo-knn",
        "type": "algorithm",
        "name": "k-Nearest Neighbors",
        "aliases": [
          "k-NN"
        ],
        "summary": "가장 가까운 k개 학습 표본의 레이블로 새 표본을 예측하는 사례 기반 알고리즘",
        "complexity": {
          "time": {
            "naiveQuery": "O(nd)"
          },
          "space": {
            "storedTrainingData": "O(nd)"
          }
        },
        "pseudocode": "KNN_CLASSIFY(training, query, k)\n  distances <- empty list\n  for each labeled sample x\n    append (DISTANCE(x, query), label(x))\n  neighbors <- k entries with smallest distance\n  return majority label, using the declared tie rule",
        "referenceIds": [
          "source-cover-hart-knn-1967",
          "source-sklearn-neighbors"
        ],
        "content": {
          "ko": {
            "summary": "가장 가까운 k개 학습 표본의 레이블로 새 표본을 예측하는 사례 기반 알고리즘",
            "description": "학습 단계에서는 표본을 저장하고 예측 때 거리 함수로 가까운 k개를 선택해 다수결 또는 거리 가중 투표를 한다. 스케일과 거리 정의가 이웃의 의미를 결정한다.",
            "advantages": [
              "명시적 모델 학습이 거의 없고 다중 클래스에 바로 적용된다.",
              "복잡하고 비선형인 결정 경계를 지역 표본으로 표현한다."
            ],
            "disadvantages": [
              "순진한 예측은 모든 학습 표본과 거리를 계산해 느리고 메모리를 많이 쓴다.",
              "특성 스케일·무관 특성·고차원 거리 집중에 민감하다."
            ],
            "useCases": [
              "작은 표 형식 데이터의 분류 기준선",
              "유사 사례 검색과 지역 기반 추천"
            ]
          },
          "en": {
            "summary": "An instance-based algorithm predicting from the labels of the k nearest training samples.",
            "description": "Training mainly stores examples; prediction selects the k closest under a distance function and applies majority or distance-weighted voting. Feature scaling and the metric determine what neighborhood means.",
            "advantages": [
              "It needs almost no explicit model fitting and naturally handles multiple classes.",
              "Local examples can represent complex nonlinear decision boundaries."
            ],
            "disadvantages": [
              "Naive prediction compares every training sample, making queries slow and storage large.",
              "It is sensitive to feature scale, irrelevant dimensions, and high-dimensional distance concentration."
            ],
            "useCases": [
              "Classification baselines for small tabular datasets",
              "Similar-case retrieval and neighborhood-based recommendation"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "k-Nearest Neighbors",
          "ko": "k-최근접 이웃"
        }
      },
      {
        "id": "algo-perceptron",
        "type": "algorithm",
        "name": "Perceptron Learning Algorithm",
        "summary": "오분류 표본 방향으로 선형 결정 경계를 갱신하는 온라인 학습 알고리즘",
        "complexity": {
          "time": {
            "tEpochs": "O(Tnd)"
          },
          "space": {
            "weights": "O(d)"
          }
        },
        "pseudocode": "PERCEPTRON(samples, labels, epochs, rate)\n  weights <- zero vector; bias <- 0\n  repeat for each epoch\n    for each (x, y)\n      if y * (dot(weights, x) + bias) <= 0\n        weights <- weights + rate * y * x\n        bias <- bias + rate * y\n  return weights and bias",
        "introduced": {
          "year": 1958
        },
        "authors": [
          {
            "name": "Frank Rosenblatt"
          }
        ],
        "referenceIds": [
          "source-rosenblatt-perceptron-1958",
          "source-sklearn-linear-model",
          "source-elements-statistical-learning"
        ],
        "content": {
          "ko": {
            "summary": "오분류 표본 방향으로 선형 결정 경계를 갱신하는 온라인 학습 알고리즘",
            "description": "가중치 내적의 부호가 레이블과 맞지 않을 때 레이블 방향의 입력 벡터를 가중치에 더한다. 선형 분리 가능한 데이터에서는 유한 번 갱신 후 분리 경계에 도달한다.",
            "advantages": [
              "한 표본씩 처리하는 갱신이 단순하고 스트리밍 학습에 적합하다.",
              "선형 분리 가능 조건에서는 수렴이 보장된다."
            ],
            "disadvantages": [
              "선형 분리 불가능한 데이터에서는 기본형이 수렴하지 않는다.",
              "출력 점수는 보정된 확률이 아니며 비선형 경계를 직접 표현하지 못한다."
            ],
            "useCases": [
              "고차원 희소 데이터의 온라인 이진 분류",
              "선형 분류와 신경망 학습 원리 교육"
            ]
          },
          "en": {
            "summary": "An online learning algorithm updating a linear boundary toward each misclassified sample.",
            "description": "When the sign of the weight dot product disagrees with the label, it adds the labeled input vector to the weights. For linearly separable data, finitely many updates reach a separating boundary.",
            "advantages": [
              "Its per-sample update is simple and suitable for streaming learning.",
              "Convergence is guaranteed under linear separability."
            ],
            "disadvantages": [
              "The basic form does not converge on nonseparable data.",
              "Its score is not a calibrated probability and it cannot directly express nonlinear boundaries."
            ],
            "useCases": [
              "Online binary classification of high-dimensional sparse data",
              "Teaching linear classification and neural-learning foundations"
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
            "code": "function trainPerceptron(samples, labels, epochs = 20, rate = 1) {\n      if (samples.length !== labels.length || samples.length === 0) throw new RangeError(\"Samples and labels must have equal nonzero length.\");\n      const weights = Array(samples[0].length).fill(0);\n      let bias = 0;\n      for (let epoch = 0; epoch < epochs; epoch += 1) for (let index = 0; index < samples.length; index += 1) {\n        const prediction = samples[index].reduce((sum, value, dimension) => sum + value * weights[dimension], bias) >= 0 ? 1 : -1;\n        const update = rate * (labels[index] - prediction) / 2;\n        samples[index].forEach((value, dimension) => { weights[dimension] += update * value; });\n        bias += update;\n      }\n      return { weights, bias, predict: (sample) => sample.reduce((sum, value, dimension) => sum + value * weights[dimension], bias) >= 0 ? 1 : -1 };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Perceptron Learning Algorithm",
          "ko": "퍼셉트론 학습 알고리즘"
        }
      },
      {
        "id": "algo-id3",
        "type": "algorithm",
        "name": "ID3 Decision Tree",
        "aliases": [
          "Iterative Dichotomiser 3"
        ],
        "summary": "정보 이득이 가장 큰 특성을 재귀 선택해 분류 결정 트리를 만드는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(nfd)"
          },
          "space": {
            "dataAndTree": "O(nf)"
          }
        },
        "pseudocode": "ID3(examples, features)\n  if all labels equal: return that label leaf\n  if features empty: return majority label leaf\n  feature <- feature with maximum information gain\n  node <- decision on feature\n  for each feature value v\n    subset <- examples where feature = v\n    attach majority leaf if subset empty else ID3(subset, remaining features)\n  return node",
        "introduced": {
          "year": 1986
        },
        "authors": [
          {
            "name": "J. Ross Quinlan"
          }
        ],
        "referenceIds": [
          "source-quinlan-id3-1986",
          "source-sklearn-trees",
          "source-elements-statistical-learning"
        ],
        "content": {
          "ko": {
            "summary": "정보 이득이 가장 큰 특성을 재귀 선택해 분류 결정 트리를 만드는 알고리즘",
            "description": "현재 표본의 엔트로피 감소량인 정보 이득을 각 후보 특성에 계산하고 가장 큰 특성으로 분할한다. 노드가 순수해지거나 특성이 소진될 때까지 하위 집합에서 반복한다.",
            "advantages": [
              "분류 규칙을 사람이 읽을 수 있는 if–then 트리로 제공한다.",
              "범주형 특성과 비선형 특성 상호작용을 자연스럽게 표현한다."
            ],
            "disadvantages": [
              "기본 ID3는 연속값·결측값과 가지치기를 별도 처리해야 한다.",
              "정보 이득은 값 종류가 많은 특성을 과도하게 선호하고 깊은 트리는 과적합할 수 있다."
            ],
            "useCases": [
              "해석 가능한 규칙 기반 분류",
              "결정 트리 학습과 엔트로피 분할의 교육용 기준"
            ]
          },
          "en": {
            "summary": "A decision-tree algorithm recursively selecting the feature with greatest information gain.",
            "description": "It computes each candidate feature's entropy reduction and splits on the largest gain. The process repeats on subsets until a node is pure or no features remain.",
            "advantages": [
              "It produces human-readable if–then classification rules.",
              "It naturally represents categorical features and nonlinear feature interactions."
            ],
            "disadvantages": [
              "Basic ID3 needs extensions for continuous values, missing data, and pruning.",
              "Information gain favors many-valued attributes and deep trees can overfit."
            ],
            "useCases": [
              "Interpretable rule-based classification",
              "A teaching baseline for decision-tree induction and entropy splits"
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
            "code": "function id3(rows, features, target) {\n      const entropy = (items) => {\n        const counts = new Map();\n        for (const item of items) counts.set(item[target], (counts.get(item[target]) || 0) + 1);\n        return [...counts.values()].reduce((sum, count) => { const p = count / items.length; return sum - p * Math.log2(p); }, 0);\n      };\n      const majority = (items) => [...items.reduce((counts, item) => counts.set(item[target], (counts.get(item[target]) || 0) + 1), new Map()).entries()].sort((a, b) => b[1] - a[1])[0][0];\n      const build = (items, remaining) => {\n        const labels = new Set(items.map((item) => item[target]));\n        if (labels.size === 1) return { label: items[0][target] };\n        if (remaining.length === 0) return { label: majority(items) };\n        const base = entropy(items);\n        const gain = (feature) => base - [...items.reduce((groups, item) => { const key = item[feature]; if (!groups.has(key)) groups.set(key, []); groups.get(key).push(item); return groups; }, new Map()).values()].reduce((sum, group) => sum + group.length / items.length * entropy(group), 0);\n        const feature = remaining.reduce((best, candidate) => gain(candidate) > gain(best) ? candidate : best);\n        const branches = {};\n        const groups = items.reduce((map, item) => { if (!map.has(item[feature])) map.set(item[feature], []); map.get(item[feature]).push(item); return map; }, new Map());\n        for (const [value, group] of groups) branches[value] = build(group, remaining.filter((candidate) => candidate !== feature));\n        return { feature, fallback: majority(items), branches };\n      };\n      return build(rows, features);\n    }"
          }
        ],
        "localizedNames": {
          "en": "ID3 Decision Tree",
          "ko": "ID3 결정 트리"
        }
      },
      {
        "id": "algo-pagerank",
        "type": "algorithm",
        "name": "PageRank",
        "summary": "무작위 서퍼의 정상 분포를 반복 계산해 링크 그래프 노드의 중요도를 매기는 알고리즘",
        "complexity": {
          "time": {
            "perIteration": "O(V + E)",
            "tIterations": "O(T(V + E))"
          },
          "space": {
            "typical": "O(V + E)"
          }
        },
        "pseudocode": "PAGERANK(G, damping, tolerance)\n  rank[v] <- 1 / V for every vertex\n  repeat\n    dangling <- total rank of vertices with no outgoing edges\n    next[v] <- (1 - damping) / V + damping * dangling / V\n    for each edge u -> v\n      next[v] <- next[v] + damping * rank[u] / outdegree[u]\n    stop when distance(next, rank) < tolerance\n    rank <- next\n  return rank",
        "introduced": {
          "year": 1998
        },
        "authors": [
          {
            "name": "Lawrence Page"
          },
          {
            "name": "Sergey Brin"
          },
          {
            "name": "Rajeev Motwani"
          },
          {
            "name": "Terry Winograd"
          }
        ],
        "referenceIds": [
          "source-pagerank-1998",
          "source-stanford-ir-pagerank",
          "source-networkx-pagerank"
        ],
        "content": {
          "ko": {
            "summary": "무작위 서퍼의 정상 분포를 반복 계산해 링크 그래프 노드의 중요도를 매기는 알고리즘",
            "description": "각 노드는 자신의 점수를 나가는 링크에 나누어 전달하고 감쇠 확률로 전체 노드에 순간 이동한다. dangling 노드의 질량도 재분배하며 점수 벡터가 허용 오차 안에서 안정될 때까지 반복한다.",
            "advantages": [
              "링크 수뿐 아니라 중요한 노드가 보내는 링크를 더 크게 평가한다.",
              "희소 그래프에서 한 반복이 O(V+E)이고 행렬을 명시적으로 만들 필요가 없다."
            ],
            "disadvantages": [
              "감쇠율·수렴 허용치와 dangling 처리 방식이 결과와 비용에 영향을 준다.",
              "링크 조작과 주제 무관한 전역 인기 편향에 취약할 수 있다."
            ],
            "useCases": [
              "웹·인용·참조 그래프의 노드 순위",
              "그래프 중심성과 추천 후보의 전역 중요도 특징"
            ]
          },
          "en": {
            "summary": "An algorithm ranking link-graph nodes by iterating the stationary distribution of a random surfer.",
            "description": "Each node distributes its score across outgoing links, while a damping probability teleports mass across all nodes. Dangling mass is redistributed and the vector is iterated until its change falls below tolerance.",
            "advantages": [
              "It values links from important nodes more than raw incoming-link counts.",
              "Each sparse-graph iteration is O(V+E) without materializing a dense matrix."
            ],
            "disadvantages": [
              "Damping, tolerance, and dangling-node policy affect both scores and cost.",
              "It can be vulnerable to link manipulation and topic-independent popularity bias."
            ],
            "useCases": [
              "Ranking nodes in web, citation, and reference graphs",
              "Global-importance features for graph centrality and recommendation"
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
            "code": "function pageRank(graph, damping = 0.85, iterations = 100, tolerance = 1e-10) {\n      const vertices = [...new Set([...Object.keys(graph), ...Object.values(graph).flat()])];\n      const n = vertices.length;\n      if (n === 0) return {};\n      let rank = Object.fromEntries(vertices.map((vertex) => [vertex, 1 / n]));\n      for (let step = 0; step < iterations; step += 1) {\n        const next = Object.fromEntries(vertices.map((vertex) => [vertex, (1 - damping) / n]));\n        let dangling = 0;\n        for (const from of vertices) {\n          const outgoing = graph[from] || [];\n          if (outgoing.length === 0) dangling += rank[from];\n          else for (const to of outgoing) next[to] += damping * rank[from] / outgoing.length;\n        }\n        for (const vertex of vertices) next[vertex] += damping * dangling / n;\n        const change = vertices.reduce((sum, vertex) => sum + Math.abs(next[vertex] - rank[vertex]), 0);\n        rank = next;\n        if (change < tolerance) break;\n      }\n      return rank;\n    }"
          }
        ],
        "localizedNames": {
          "en": "PageRank",
          "ko": "페이지랭크"
        }
      },
      {
        "id": "algo-gradient-descent",
        "type": "algorithm",
        "name": "Gradient Descent",
        "summary": "목적 함수 기울기의 반대 방향으로 파라미터를 반복 이동하는 최적화 알고리즘",
        "complexity": {
          "time": {
            "tFullBatchIterations": "O(Tnd)"
          },
          "space": {
            "parametersAndGradient": "O(d)"
          }
        },
        "pseudocode": "GRADIENT_DESCENT(objective, gradient, initial, rate)\n  x <- initial\n  repeat until stopping criterion\n    g <- gradient(x)\n    choose or update step size rate\n    next <- x - rate * g\n    stop if objective or parameter change is small\n    x <- next\n  return x",
        "referenceIds": [
          "source-stanford-cs229-gradient-descent",
          "source-sklearn-sgd"
        ],
        "content": {
          "ko": {
            "summary": "목적 함수 기울기의 반대 방향으로 파라미터를 반복 이동하는 최적화 알고리즘",
            "description": "현재 점에서 기울기를 계산하고 학습률만큼 음의 기울기 방향으로 이동한다. 볼록성과 매끄러움·학습률 조건이 맞으면 최솟값으로 수렴하며 batch·stochastic·mini-batch 변형이 있다.",
            "advantages": [
              "기울기만 계산할 수 있으면 매우 높은 차원의 문제에도 적용할 수 있다.",
              "mini-batch와 자동 미분을 이용해 대규모 머신러닝에 효율적으로 확장된다."
            ],
            "disadvantages": [
              "학습률이 너무 크면 발산하고 너무 작으면 수렴이 느리다.",
              "비볼록 함수에서는 초기값에 따라 saddle point나 서로 다른 지역해에 머물 수 있다."
            ],
            "useCases": [
              "선형·로지스틱 회귀와 신경망 학습",
              "미분 가능한 대규모 연속 목적 함수 최소화"
            ]
          },
          "en": {
            "summary": "An optimization algorithm repeatedly moving parameters opposite the objective gradient.",
            "description": "It computes the gradient at the current point and steps in the negative-gradient direction by a learning rate. Under suitable convexity, smoothness, and step-size conditions it converges; batch, stochastic, and mini-batch forms vary the estimate.",
            "advantages": [
              "It applies to very high-dimensional problems whenever gradients can be computed.",
              "Mini-batches and automatic differentiation scale it to large machine-learning workloads."
            ],
            "disadvantages": [
              "A large learning rate diverges while a small one converges slowly.",
              "On nonconvex objectives, initialization can lead to saddle points or different local solutions."
            ],
            "useCases": [
              "Training linear and logistic regression or neural networks",
              "Large-scale minimization of differentiable continuous objectives"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Gradient Descent",
          "ko": "경사 하강법"
        }
      },
      {
        "id": "algo-hungarian",
        "type": "algorithm",
        "name": "Hungarian Algorithm",
        "aliases": [
          "Kuhn–Munkres Algorithm"
        ],
        "summary": "쌍대 잠재값과 증가 경로로 최소 비용 일대일 배정을 찾는 알고리즘",
        "complexity": {
          "time": {
            "denseSquare": "O(n³)"
          },
          "space": {
            "typical": "O(n²)"
          }
        },
        "pseudocode": "HUNGARIAN(cost)\n  initialize row and column potentials and an empty matching\n  for each left vertex\n    grow an alternating tree through zero reduced-cost edges\n    if no new zero edge is reachable\n      shift potentials by the minimum slack\n    when an unmatched right vertex is reached\n      augment the matching along the alternating path\n  return the perfect minimum-cost assignment",
        "introduced": {
          "year": 1955
        },
        "authors": [
          {
            "name": "Harold W. Kuhn"
          }
        ],
        "referenceIds": [
          "source-kuhn-hungarian-1955",
          "source-nist-assignment",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "쌍대 잠재값과 증가 경로로 최소 비용 일대일 배정을 찾는 알고리즘",
            "description": "행·열 잠재값을 유지해 reduced cost가 0인 equality graph를 만들고 그 안에서 증가 경로를 찾는다. 경로가 막히면 최소 slack만큼 잠재값을 조정해 새 0간선을 만든다.",
            "advantages": [
              "조밀한 n×n 배정 문제의 최적해를 O(n³)에 보장한다.",
              "matching과 dual potential을 함께 유지해 최적성 근거를 제공한다."
            ],
            "disadvantages": [
              "직사각형·금지 배정은 패딩이나 큰 비용 처리 규칙이 필요하다.",
              "매우 희소하거나 대규모 문제에서는 전용 min-cost flow 구현이 더 유리할 수 있다."
            ],
            "useCases": [
              "작업자–작업, 차량–요청, 트랙–검출의 최소 비용 매칭",
              "완전 이분 그래프의 최대 가중치 일대일 배정"
            ]
          },
          "en": {
            "summary": "An algorithm finding a minimum-cost one-to-one assignment with dual potentials and augmenting paths.",
            "description": "It maintains row and column potentials to form an equality graph of zero reduced-cost edges and searches it for an augmenting path. If blocked, it shifts potentials by minimum slack to create a new zero edge.",
            "advantages": [
              "It guarantees an optimum for dense n-by-n assignment in O(n³) time.",
              "Maintaining both a matching and dual potentials supplies an optimality certificate."
            ],
            "disadvantages": [
              "Rectangular or forbidden assignments need padding and large-cost conventions.",
              "Specialized min-cost-flow methods can be better for very sparse or huge instances."
            ],
            "useCases": [
              "Minimum-cost worker-task, vehicle-request, and track-detection matching",
              "Maximum-weight one-to-one assignment in complete bipartite graphs"
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
            "code": "function hungarian(cost) {\n      const rows = cost.length;\n      const columns = cost[0]?.length || 0;\n      if (rows === 0 || columns < rows) throw new RangeError(\"Hungarian implementation requires a nonempty matrix with columns >= rows.\");\n      const u = Array(rows + 1).fill(0);\n      const v = Array(columns + 1).fill(0);\n      const matchedRow = Array(columns + 1).fill(0);\n      const way = Array(columns + 1).fill(0);\n      for (let row = 1; row <= rows; row += 1) {\n        matchedRow[0] = row;\n        let column0 = 0;\n        const minimum = Array(columns + 1).fill(Infinity);\n        const used = Array(columns + 1).fill(false);\n        do {\n          used[column0] = true;\n          const currentRow = matchedRow[column0];\n          let delta = Infinity;\n          let column1 = 0;\n          for (let column = 1; column <= columns; column += 1) if (!used[column]) {\n            const reduced = cost[currentRow - 1][column - 1] - u[currentRow] - v[column];\n            if (reduced < minimum[column]) { minimum[column] = reduced; way[column] = column0; }\n            if (minimum[column] < delta) { delta = minimum[column]; column1 = column; }\n          }\n          for (let column = 0; column <= columns; column += 1) {\n            if (used[column]) { u[matchedRow[column]] += delta; v[column] -= delta; }\n            else minimum[column] -= delta;\n          }\n          column0 = column1;\n        } while (matchedRow[column0] !== 0);\n        do { const previous = way[column0]; matchedRow[column0] = matchedRow[previous]; column0 = previous; } while (column0 !== 0);\n      }\n      const assignment = Array(rows).fill(-1);\n      for (let column = 1; column <= columns; column += 1) if (matchedRow[column] > 0) assignment[matchedRow[column] - 1] = column - 1;\n      return { assignment, cost: assignment.reduce((sum, column, row) => sum + cost[row][column], 0) };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Hungarian Algorithm",
          "ko": "헝가리안 알고리즘"
        }
      },
      {
        "id": "algo-nelder-mead",
        "type": "algorithm",
        "name": "Nelder–Mead Method",
        "aliases": [
          "Downhill Simplex Method"
        ],
        "summary": "미분 없이 d+1개 꼭짓점 simplex를 변형해 지역 최솟값을 찾는 알고리즘",
        "complexity": {
          "time": {
            "tIterations": "O(Td) objective evaluations, excluding objective cost"
          },
          "space": {
            "simplex": "O(d²)"
          }
        },
        "pseudocode": "NELDER_MEAD(f, simplex)\n  repeat until simplex and values converge\n    sort vertices by objective value\n    centroid <- mean of all but worst vertex\n    try reflection of worst through centroid\n    if very good, try expansion; if poor, try contraction\n    if contraction fails, shrink all vertices toward best\n  return best vertex",
        "introduced": {
          "year": 1965
        },
        "authors": [
          {
            "name": "John A. Nelder"
          },
          {
            "name": "Roger Mead"
          }
        ],
        "referenceIds": [
          "source-nelder-mead-1965",
          "source-scipy-nelder-mead",
          "source-handbook-metaheuristics"
        ],
        "content": {
          "ko": {
            "summary": "미분 없이 d+1개 꼭짓점 simplex를 변형해 지역 최솟값을 찾는 알고리즘",
            "description": "목적값이 가장 나쁜 꼭짓점을 나머지 중심의 반대편으로 반사하고 결과에 따라 확장·수축·전체 축소를 선택한다. 함수값만 필요하므로 미분할 수 없거나 잡음이 적은 저차원 문제에 사용된다.",
            "advantages": [
              "기울기 계산 없이 목적 함수 평가만으로 동작한다.",
              "차원이 낮고 함수가 비교적 매끄러운 문제에서 구현이 단순하다."
            ],
            "disadvantages": [
              "고차원에서 평가 횟수가 빠르게 늘고 정체하거나 비최적점에 수렴할 수 있다.",
              "일반 비선형 함수에서 전역 최적이나 빠른 수렴을 보장하지 않는다."
            ],
            "useCases": [
              "미분을 제공하지 않는 소수 파라미터 모델 보정",
              "실험·시뮬레이션 기반의 저차원 black-box 최적화"
            ]
          },
          "en": {
            "summary": "A derivative-free algorithm seeking a local minimum by transforming a simplex of d+1 vertices.",
            "description": "It reflects the worst vertex through the centroid of the others and selects expansion, contraction, or full shrink according to the result. It needs only objective values and is used on low-dimensional, reasonably smooth problems.",
            "advantages": [
              "It operates from objective evaluations without gradients.",
              "Implementation is simple for low-dimensional problems with modest noise."
            ],
            "disadvantages": [
              "Evaluation count grows in high dimensions and the simplex can stagnate or converge poorly.",
              "It offers no general global-optimum or fast-convergence guarantee."
            ],
            "useCases": [
              "Calibrating small-parameter models without derivatives",
              "Low-dimensional black-box optimization driven by experiments or simulations"
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
            "code": "function nelderMead(objective, initial, step = 1, iterations = 200) {\n      const dimension = initial.length;\n      let simplex = [initial.slice(), ...initial.map((_, axis) => initial.map((value, index) => value + (index === axis ? step : 0)))];\n      const combine = (a, b, scale) => a.map((value, index) => value + scale * (value - b[index]));\n      for (let iteration = 0; iteration < iterations; iteration += 1) {\n        simplex.sort((a, b) => objective(a) - objective(b));\n        const best = simplex[0];\n        const worst = simplex[dimension];\n        const centroid = Array.from({ length: dimension }, (_, axis) => simplex.slice(0, dimension).reduce((sum, point) => sum + point[axis], 0) / dimension);\n        const reflected = combine(centroid, worst, 1);\n        if (objective(reflected) < objective(best)) {\n          const expanded = combine(centroid, worst, 2);\n          simplex[dimension] = objective(expanded) < objective(reflected) ? expanded : reflected;\n        } else if (objective(reflected) < objective(simplex[dimension - 1])) simplex[dimension] = reflected;\n        else {\n          const contracted = centroid.map((value, axis) => (value + worst[axis]) / 2);\n          if (objective(contracted) < objective(worst)) simplex[dimension] = contracted;\n          else simplex = [best, ...simplex.slice(1).map((point) => point.map((value, axis) => best[axis] + 0.5 * (value - best[axis])))];\n        }\n      }\n      simplex.sort((a, b) => objective(a) - objective(b));\n      return { point: simplex[0], value: objective(simplex[0]) };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Nelder–Mead Method",
          "ko": "넬더–미드 방법"
        }
      },
      {
        "id": "algo-rotating-calipers",
        "type": "algorithm",
        "name": "Rotating Calipers",
        "aliases": [],
        "localizedNames": {
          "en": "Rotating Calipers",
          "ko": "회전 캘리퍼스"
        },
        "complexity": {
          "time": "O(h) after convex hull",
          "space": "O(1)"
        },
        "pseudocode": "ROTATING_CALIPERS(convexPolygon)\n  initialize antipodal vertex for the first edge\n  for each polygon edge in cyclic order\n    advance opposite vertex while area increases\n    evaluate the current antipodal pair\n    update diameter or bounding statistic\n  return the best pair or rectangle",
        "referenceIds": [
          "source-de-berg-geometry",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "볼록 다각형의 평행 지지선을 함께 회전해 극값 쌍을 찾는 기법",
            "description": "한 변이 다음 방향으로 회전할 때 맞은편 접점은 뒤로 가지 않는다는 단조성을 이용해 antipodal pair를 선형 스캔한다.",
            "advantages": [
              "볼록 껍질 이후 지름과 폭 같은 여러 극값을 선형 시간에 구한다.",
              "기하 불변식으로 후보 객체를 효율적으로 줄인다."
            ],
            "disadvantages": [
              "입력이 볼록 순환 순서여야 하며 공선 변의 동률 처리가 필요하다.",
              "부동소수점 오차와 퇴화 입력에 강건한 판정이 필요하다."
            ],
            "useCases": [
              "점 집합 지름과 최소 너비·최소 면적 경계 상자",
              "GIS·CAD·시각화의 공간 전처리"
            ]
          },
          "en": {
            "summary": "A technique rotating parallel support lines around a convex polygon to find extremal pairs.",
            "description": "As one edge direction advances, the opposite contact never moves backward, enabling a linear scan of antipodal pairs.",
            "advantages": [
              "After the hull, it computes diameter, width, and related extrema in linear time.",
              "Geometric invariants efficiently reduce candidate objects."
            ],
            "disadvantages": [
              "Input must be cyclically ordered and collinear-edge ties need care.",
              "Robust predicates are needed for floating-point error and degenerate input."
            ],
            "useCases": [
              "Point-set diameter, minimum width, and minimum-area bounding boxes",
              "Spatial preprocessing in GIS, CAD, and visualization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-ramer-douglas-peucker",
        "type": "algorithm",
        "name": "Ramer–Douglas–Peucker Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Ramer–Douglas–Peucker Algorithm",
          "ko": "래머–더글러스–포이커 알고리즘"
        },
        "complexity": {
          "time": {
            "average": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": "O(n)"
        },
        "pseudocode": "RDP(points, epsilon)\n  line <- first point to last point\n  find point with maximum perpendicular distance\n  if maximum distance <= epsilon\n    return only the two endpoints\n  left <- RDP(points through farthest, epsilon)\n  right <- RDP(points from farthest, epsilon)\n  join without duplicating split point",
        "referenceIds": [
          "source-de-berg-geometry",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "허용 오차보다 멀리 벗어난 점에서 재귀 분할하는 폴리라인 단순화",
            "description": "처음과 끝을 잇는 선분에서 가장 먼 점을 찾고 오차를 넘으면 그 점을 기준으로 양쪽을 재귀 처리한다. 넘지 않으면 중간 점을 모두 제거한다.",
            "advantages": [
              "직관적인 오차 매개변수 하나로 점 수를 크게 줄인다.",
              "기하 불변식으로 후보 객체를 효율적으로 줄인다."
            ],
            "disadvantages": [
              "최악 O(n²)이며 위상 보존이나 전역 최소 점 수를 보장하지 않는다.",
              "부동소수점 오차와 퇴화 입력에 강건한 판정이 필요하다."
            ],
            "useCases": [
              "지도 경로·GPS 궤적·벡터 그래픽 단순화",
              "GIS·CAD·시각화의 공간 전처리"
            ]
          },
          "en": {
            "summary": "A polyline simplifier recursively splitting at the point furthest beyond an error tolerance.",
            "description": "It measures distance from the endpoint segment, recurses on both sides of the furthest violating point, or removes all intermediate points when within tolerance.",
            "advantages": [
              "One intuitive tolerance can greatly reduce vertex count.",
              "Geometric invariants efficiently reduce candidate objects."
            ],
            "disadvantages": [
              "Worst-case time is O(n²), and topology or globally minimal output is not guaranteed.",
              "Robust predicates are needed for floating-point error and degenerate input."
            ],
            "useCases": [
              "Map paths, GPS trajectories, and vector-graphic simplification",
              "Spatial preprocessing in GIS, CAD, and visualization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-bowyer-watson",
        "type": "algorithm",
        "name": "Bowyer–Watson Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Bowyer–Watson Algorithm",
          "ko": "보이어–왓슨 알고리즘"
        },
        "complexity": {
          "time": {
            "expectedWithIndex": "O(n log n)",
            "naive": "O(n²)"
          },
          "space": "O(n)"
        },
        "pseudocode": "BOWYER_WATSON(points)\n  start with a supertriangle containing all points\n  for each point p\n    find triangles whose circumcircles contain p\n    remove them and collect boundary edges of the cavity\n    connect p to every cavity boundary edge\n  remove triangles touching the supertriangle",
        "referenceIds": [
          "source-de-berg-geometry",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "점을 하나씩 삽입하며 빈 외접원 조건을 위반한 삼각형 cavity를 다시 채우는 Delaunay 삼각분할",
            "description": "새 점을 포함하는 외접원을 가진 삼각형을 제거하고 그 구멍의 경계 변과 새 점을 연결한다. 마지막에 supertriangle 관련 면을 버린다.",
            "advantages": [
              "증분 구조가 직관적이며 다양한 공간 색인과 결합할 수 있다.",
              "기하 불변식으로 후보 객체를 효율적으로 줄인다."
            ],
            "disadvantages": [
              "정확한 in-circle 판정과 중복·공선점 처리가 어렵다.",
              "부동소수점 오차와 퇴화 입력에 강건한 판정이 필요하다."
            ],
            "useCases": [
              "메시 생성, 지형 보간, 최근접 구조 전처리",
              "GIS·CAD·시각화의 공간 전처리"
            ]
          },
          "en": {
            "summary": "An incremental Delaunay-triangulation algorithm retriangulating the cavity of circumcircle violations.",
            "description": "For each inserted point it removes triangles whose circumcircles contain it, connects the point to the cavity boundary, and finally removes the supertriangle.",
            "advantages": [
              "Its incremental structure is intuitive and combines with spatial indexes.",
              "Geometric invariants efficiently reduce candidate objects."
            ],
            "disadvantages": [
              "Robust in-circle predicates and duplicate or collinear points are difficult.",
              "Robust predicates are needed for floating-point error and degenerate input."
            ],
            "useCases": [
              "Mesh generation, terrain interpolation, and nearest-neighbor preprocessing",
              "Spatial preprocessing in GIS, CAD, and visualization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-ray-casting-point-in-polygon",
        "type": "algorithm",
        "name": "Ray Casting Point-in-Polygon",
        "aliases": [],
        "localizedNames": {
          "en": "Ray Casting Point-in-Polygon",
          "ko": "광선 교차 점-다각형 판정"
        },
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": "POINT_IN_POLYGON(point, polygon)\n  inside <- false\n  for each edge (a,b)\n    if point lies on edge: return BOUNDARY\n    if edge straddles point's horizontal ray\n      compute whether intersection is to the right\n      if so toggle inside\n  return INSIDE if inside else OUTSIDE",
        "referenceIds": [
          "source-de-berg-geometry",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "점에서 뻗은 광선과 다각형 경계의 교차 parity로 내부를 판정하는 알고리즘",
            "description": "수평 광선이 변을 지날 때마다 inside 상태를 뒤집는다. 꼭짓점 중복 계수와 경계 위 점을 별도 규칙으로 처리한다.",
            "advantages": [
              "단순 다각형에서 O(1) 추가 공간으로 구현이 간단하다.",
              "기하 불변식으로 후보 객체를 효율적으로 줄인다."
            ],
            "disadvantages": [
              "꼭짓점·수평 변·부동소수점 경계 판정에 일관된 규칙이 필요하다.",
              "부동소수점 오차와 퇴화 입력에 강건한 판정이 필요하다."
            ],
            "useCases": [
              "GIS 영역 포함 질의와 클릭 hit testing",
              "GIS·CAD·시각화의 공간 전처리"
            ]
          },
          "en": {
            "summary": "A point-in-polygon test using the parity of boundary intersections with a ray.",
            "description": "It toggles an inside flag whenever a horizontal ray crosses an edge, with separate rules for boundary points and shared vertices.",
            "advantages": [
              "It is simple and uses O(1) auxiliary space on simple polygons.",
              "Geometric invariants efficiently reduce candidate objects."
            ],
            "disadvantages": [
              "Vertices, horizontal edges, and floating-point boundary tests require consistent conventions.",
              "Robust predicates are needed for floating-point error and degenerate input."
            ],
            "useCases": [
              "GIS containment queries and click hit-testing",
              "Spatial preprocessing in GIS, CAD, and visualization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-logistic-regression",
        "type": "algorithm",
        "name": "Logistic Regression Training",
        "aliases": [],
        "localizedNames": {
          "en": "Logistic Regression Training",
          "ko": "로지스틱 회귀 학습"
        },
        "complexity": {
          "time": "O(Tnd) for batch gradient updates",
          "space": "O(d) beyond data"
        },
        "pseudocode": "TRAIN_LOGISTIC(X, y, rate)\n  initialize weights to zero\n  repeat for T iterations\n    gradient <- zero vector\n    for each sample x[i]\n      probability <- sigmoid(dot(weights, x[i]))\n      gradient += (probability - y[i]) * x[i]\n    add regularization gradient\n    weights <- weights - rate * gradient / n\n  return weights",
        "referenceIds": [
          "source-elements-statistical-learning",
          "source-sklearn-linear-model"
        ],
        "content": {
          "ko": {
            "summary": "선형 점수의 sigmoid 확률을 최대우도로 맞추는 분류 학습 알고리즘",
            "description": "각 표본의 예측 확률과 레이블 차이로 log-loss 기울기를 누적하고 가중치를 반복 갱신한다. 정규화로 과적합과 계수 크기를 제어한다.",
            "advantages": [
              "확률 출력과 선형 계수의 방향을 비교적 쉽게 해석할 수 있다.",
              "데이터에서 반복적으로 예측 규칙을 학습한다."
            ],
            "disadvantages": [
              "선형 결정 경계만 직접 표현하며 특성 스케일과 규제 선택에 민감하다.",
              "전처리와 하이퍼파라미터 선택이 일반화 성능에 영향을 준다."
            ],
            "useCases": [
              "이진 분류 기준 모델과 위험 확률 예측",
              "관측 데이터의 분류와 확률 예측"
            ]
          },
          "en": {
            "summary": "A classification training algorithm fitting sigmoid probabilities of a linear score by maximum likelihood.",
            "description": "It accumulates log-loss gradients from probability-label differences and iteratively updates weights, often with regularization.",
            "advantages": [
              "Probabilities and coefficient directions are comparatively interpretable.",
              "It learns predictive rules iteratively from observed data."
            ],
            "disadvantages": [
              "It directly represents only a linear boundary and is sensitive to scaling and regularization.",
              "Preprocessing and hyperparameter choices affect generalization."
            ],
            "useCases": [
              "Binary-classification baselines and risk-probability prediction",
              "Classification and probability prediction from observed data"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-random-forest",
        "type": "algorithm",
        "name": "Random Forest",
        "aliases": [],
        "localizedNames": {
          "en": "Random Forest",
          "ko": "랜덤 포레스트"
        },
        "complexity": {
          "time": "O(T m n log n) typical training",
          "space": "O(Tn) tree nodes typical"
        },
        "pseudocode": "RANDOM_FOREST(data, treeCount, featureCount)\n  for each tree\n    draw a bootstrap sample\n    grow a decision tree\n      at every node consider a random feature subset\n      choose the best split among those features\n  predict by majority vote or mean\n  estimate error with out-of-bag samples",
        "referenceIds": [
          "source-elements-statistical-learning",
          "source-sklearn-ensemble"
        ],
        "content": {
          "ko": {
            "summary": "bootstrap 표본과 무작위 특성 부분집합으로 여러 결정 트리를 학습하는 앙상블",
            "description": "각 트리는 복원 추출한 데이터로 성장하고 노드마다 일부 특성만 분할 후보로 본다. 예측은 투표 또는 평균으로 결합한다.",
            "advantages": [
              "비선형 상호작용을 적은 전처리로 학습하고 단일 트리의 분산을 줄인다.",
              "데이터에서 반복적으로 예측 규칙을 학습한다."
            ],
            "disadvantages": [
              "모델 크기가 크고 개별 예측 근거가 단일 트리보다 해석하기 어렵다.",
              "전처리와 하이퍼파라미터 선택이 일반화 성능에 영향을 준다."
            ],
            "useCases": [
              "표형 데이터의 분류·회귀와 특성 중요도 탐색",
              "관측 데이터의 분류와 확률 예측"
            ]
          },
          "en": {
            "summary": "An ensemble training many decision trees from bootstrap samples and random feature subsets.",
            "description": "Each tree grows on resampled data and considers only a random feature subset at each split; predictions are combined by voting or averaging.",
            "advantages": [
              "It learns nonlinear interactions with little preprocessing and reduces single-tree variance.",
              "It learns predictive rules iteratively from observed data."
            ],
            "disadvantages": [
              "The model can be large and less interpretable than one decision tree.",
              "Preprocessing and hyperparameter choices affect generalization."
            ],
            "useCases": [
              "Classification, regression, and feature exploration on tabular data",
              "Classification and probability prediction from observed data"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-simulated-annealing",
        "type": "algorithm",
        "name": "Simulated Annealing",
        "aliases": [],
        "localizedNames": {
          "en": "Simulated Annealing",
          "ko": "담금질 기법"
        },
        "complexity": {
          "time": "O(T × neighborCost)",
          "space": "O(state size)"
        },
        "pseudocode": "SIMULATED_ANNEALING(initial, schedule)\n  current <- best <- initial\n  for temperature in schedule\n    candidate <- random neighbor of current\n    delta <- cost(candidate) - cost(current)\n    if delta <= 0 or random() < exp(-delta/temperature)\n      current <- candidate\n    if current improves best: best <- current\n  return best",
        "referenceIds": [
          "source-handbook-metaheuristics",
          "source-scipy-optimize"
        ],
        "content": {
          "ko": {
            "summary": "온도에 따라 나쁜 이동도 확률적으로 허용하며 전역해를 탐색하는 메타휴리스틱",
            "description": "초기에는 높은 온도로 지역 최적을 탈출하고, 온도를 낮추면서 개선 이동 위주로 안정화한다. 냉각 일정과 이웃 정의가 성능을 좌우한다.",
            "advantages": [
              "미분 없이 이산·연속의 복잡한 탐색 공간에 적용할 수 있다.",
              "정확한 미분이나 완전 탐색 없이도 복잡한 목적 함수를 탐색한다."
            ],
            "disadvantages": [
              "냉각과 반복 횟수 선택에 민감하고 유한 시간 전역 최적을 보장하지 않는다.",
              "전역 최적해와 재현성을 항상 보장하지는 않는다."
            ],
            "useCases": [
              "조합 스케줄링과 배치·경로 최적화",
              "비선형·블랙박스 목적 함수의 근사 최적화"
            ]
          },
          "en": {
            "summary": "A metaheuristic exploring globally by probabilistically accepting worse moves according to temperature.",
            "description": "High initial temperature escapes local minima; cooling gradually favors improvements. The neighborhood and schedule determine performance.",
            "advantages": [
              "It handles difficult discrete or continuous spaces without derivatives.",
              "It explores complex objectives without exact derivatives or exhaustive search."
            ],
            "disadvantages": [
              "Results depend on cooling and iteration choices, with no finite-time global guarantee.",
              "It does not always guarantee a global optimum or reproducibility."
            ],
            "useCases": [
              "Combinatorial scheduling, placement, and routing optimization",
              "Approximate optimization of nonlinear or black-box objectives"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-particle-swarm",
        "type": "algorithm",
        "name": "Particle Swarm Optimization",
        "aliases": [],
        "localizedNames": {
          "en": "Particle Swarm Optimization",
          "ko": "입자 군집 최적화"
        },
        "complexity": {
          "time": "O(TPd) objective-update work",
          "space": "O(Pd)"
        },
        "pseudocode": "PARTICLE_SWARM(objective, particles)\n  initialize positions, velocities, and personal bests\n  repeat T iterations\n    update global best from personal bests\n    for each particle\n      velocity <- inertia + cognitive pull + social pull\n      position <- position + velocity\n      enforce domain bounds\n      update personal best if improved\n  return global best",
        "referenceIds": [
          "source-handbook-metaheuristics",
          "source-scipy-optimize"
        ],
        "content": {
          "ko": {
            "summary": "개인 최적과 군집 최적 방향을 결합해 후보 입자들을 이동시키는 최적화",
            "description": "각 입자는 관성 속도, 자신의 최선 위치로 향하는 항, 전체 최선으로 향하는 항에 무작위 계수를 곱해 새 위치를 탐색한다.",
            "advantages": [
              "기울기 없이 병렬 평가가 가능하며 연속 블랙박스 문제에 단순하게 적용된다.",
              "정확한 미분이나 완전 탐색 없이도 복잡한 목적 함수를 탐색한다."
            ],
            "disadvantages": [
              "경계 처리와 계수에 민감하고 다양성이 빨리 사라지면 조기 수렴한다.",
              "전역 최적해와 재현성을 항상 보장하지는 않는다."
            ],
            "useCases": [
              "공학 파라미터 튜닝과 시뮬레이션 기반 최적화",
              "비선형·블랙박스 목적 함수의 근사 최적화"
            ]
          },
          "en": {
            "summary": "An optimizer moving candidate particles under combined personal-best and swarm-best attraction.",
            "description": "Each velocity combines inertia, a randomized pull toward personal history, and a pull toward the global best before positions are updated.",
            "advantages": [
              "It is derivative-free, parallelizable, and simple for continuous black-box problems.",
              "It explores complex objectives without exact derivatives or exhaustive search."
            ],
            "disadvantages": [
              "Boundary rules and coefficients matter, and lost diversity causes premature convergence.",
              "It does not always guarantee a global optimum or reproducibility."
            ],
            "useCases": [
              "Engineering parameter tuning and simulation-based optimization",
              "Approximate optimization of nonlinear or black-box objectives"
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
