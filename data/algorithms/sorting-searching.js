(function registerAlgoriaSortingSearchingAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "algorithms-sorting-searching",
    entities: [
      {
        "id": "algo-quick-sort",
        "type": "algorithm",
        "name": "Quick Sort",
        "aliases": [
          "Quicksort"
        ],
        "summary": "피벗을 기준으로 배열을 분할하며 정렬하는 알고리즘",
        "description": "피벗보다 작은 값과 큰 값을 나눈 뒤 각 부분 배열을 재귀적으로 정렬한다.",
        "complexity": {
          "time": {
            "best": "O(n log n)",
            "average": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "typical": "O(log n)",
            "worst": "O(n)"
          }
        },
        "pseudocode": "QUICKSORT(A, lo, hi)\n  if lo >= hi: return\n  pivotIndex <- PARTITION(A, lo, hi)\n  QUICKSORT(A, lo, pivotIndex - 1)\n  QUICKSORT(A, pivotIndex + 1, hi)\n\nPARTITION(A, lo, hi)\n  pivot <- A[hi]\n  boundary <- lo\n  for i <- lo to hi - 1\n    if A[i] <= pivot\n      swap A[i], A[boundary]\n      boundary <- boundary + 1\n  swap A[boundary], A[hi]\n  return boundary",
        "advantages": [
          "평균적으로 빠르다",
          "제자리 구현이 가능하다"
        ],
        "disadvantages": [
          "피벗 선택에 따라 최악 O(n²)이 될 수 있다"
        ],
        "useCases": [
          "범용 배열 정렬"
        ],
        "introduced": {
          "year": 1959
        },
        "authors": [
          {
            "name": "C. A. R. Hoare"
          }
        ],
        "referenceIds": [
          "source-hoare-quicksort-1962",
          "source-nist-quicksort",
          "source-princeton-quicksort"
        ],
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function quickSort(values) {\n  if (values.length < 2) return values;\n  const [pivot, ...rest] = values;\n  const lower = rest.filter((value) => value <= pivot);\n  const higher = rest.filter((value) => value > pivot);\n  return [...quickSort(lower), pivot, ...quickSort(higher)];\n}"
          }
        ],
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "content": {
          "ko": {
            "summary": "피벗을 기준으로 배열을 분할하며 정렬하는 비교 정렬 알고리즘",
            "description": "피벗 하나를 선택하고 작은 값과 큰 값을 양쪽으로 분할한 뒤 각 구간을 재귀적으로 정렬한다. 균형 잡힌 분할에서는 빠르지만 피벗 선택이 계속 치우치면 이차 시간이 걸린다.",
            "advantages": [
              "평균 O(n log n)이며 메모리 지역성이 좋아 배열 정렬에서 빠르다.",
              "일반적인 분할 방식은 작은 재귀 스택만으로 제자리 구현할 수 있다."
            ],
            "disadvantages": [
              "불균형한 피벗이 반복되면 최악 O(n²)이 된다.",
              "일반적인 제자리 구현은 같은 키의 기존 순서를 보존하지 않는다."
            ],
            "useCases": [
              "안정성이 필요하지 않은 메모리 내 배열 정렬",
              "비교 함수로 순서를 정의하는 범용 정렬"
            ]
          },
          "en": {
            "summary": "A comparison sort that partitions an array around a pivot.",
            "description": "It chooses a pivot, partitions smaller and larger values to opposite sides, and recursively sorts both ranges. Balanced partitions are fast, while repeatedly skewed pivots produce quadratic time.",
            "advantages": [
              "Its O(n log n) average time and cache locality make it fast for arrays.",
              "Common partition schemes can operate in place with only a small recursion stack."
            ],
            "disadvantages": [
              "Repeatedly unbalanced pivots cause O(n²) worst-case time.",
              "Typical in-place implementations do not preserve the order of equal keys."
            ],
            "useCases": [
              "In-memory array sorting when stability is unnecessary",
              "General comparison sorting with a custom ordering"
            ]
          }
        },
        "localizedNames": {
          "en": "Quick Sort",
          "ko": "퀵 정렬"
        }
      },
      {
        "id": "algo-randomized-quick-sort",
        "type": "algorithm",
        "name": "Randomized Quick Sort",
        "summary": "피벗을 무작위로 선택하는 Quick Sort 변형",
        "complexity": {
          "time": {
            "expected": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "expected": "O(log n)",
            "worst": "O(n)"
          }
        },
        "pseudocode": "RANDOMIZED_QUICKSORT(A, lo, hi)\n  if lo >= hi: return\n  pivotIndex <- RANDOM_INTEGER(lo, hi)\n  swap A[pivotIndex], A[hi]\n  split <- PARTITION(A, lo, hi)\n  RANDOMIZED_QUICKSORT(A, lo, split - 1)\n  RANDOMIZED_QUICKSORT(A, split + 1, hi)",
        "referenceIds": [
          "source-nist-quicksort",
          "source-princeton-quicksort"
        ],
        "content": {
          "ko": {
            "summary": "피벗을 무작위로 선택해 입력 순서에 대한 편향을 줄인 Quick Sort 변형",
            "description": "각 분할에서 피벗 위치를 무작위로 고른 뒤 일반 Quick Sort와 같은 분할과 재귀를 수행한다. 어떤 고정 입력에서도 피벗 선택에 대한 기대 실행 시간은 O(n log n)이지만, 특정 난수 선택열에서는 여전히 최악 O(n²)이 가능하다.",
            "advantages": [
              "정렬되거나 공격적으로 구성된 입력 순서의 영향을 줄인다.",
              "추가 변경이 작으면서 기대 O(n log n) 성능을 얻는다."
            ],
            "disadvantages": [
              "최악 O(n²) 가능성을 제거하지는 않는다.",
              "재현 가능한 테스트에는 난수 시드 관리가 필요하다."
            ],
            "useCases": [
              "입력 분포를 신뢰할 수 없는 범용 배열 정렬",
              "피벗 편향을 피해야 하는 Quick Sort 기반 선택·정렬"
            ]
          },
          "en": {
            "summary": "A Quick Sort variant that randomizes pivot choice to reduce input-order bias.",
            "description": "Each partition chooses a random pivot position, then performs the usual partition and recursion. For any fixed input its expected running time over pivot choices is O(n log n), though an unlucky random sequence can still produce O(n²).",
            "advantages": [
              "It reduces sensitivity to sorted or adversarially ordered input.",
              "A small change provides expected O(n log n) performance."
            ],
            "disadvantages": [
              "It does not eliminate the O(n²) worst case.",
              "Reproducible testing requires controlled random seeds."
            ],
            "useCases": [
              "General array sorting with unknown input distributions",
              "Quick Sort-based sorting or selection where pivot bias matters"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Randomized Quick Sort",
          "ko": "무작위 퀵 정렬"
        }
      },
      {
        "id": "algo-merge-sort",
        "type": "algorithm",
        "name": "Merge Sort",
        "summary": "부분 배열을 정렬한 뒤 병합하는 분할 정복 정렬 알고리즘",
        "complexity": {
          "time": {
            "best": "O(n log n)",
            "average": "O(n log n)",
            "worst": "O(n log n)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "MERGE_SORT(A)\n  if length(A) <= 1: return A\n  middle <- floor(length(A) / 2)\n  left <- MERGE_SORT(A[0..middle))\n  right <- MERGE_SORT(A[middle..end))\n  return MERGE(left, right)\n\nMERGE(left, right)\n  result <- empty sequence\n  while both sequences are nonempty\n    append the smaller front value to result\n  append all remaining values\n  return result",
        "referenceIds": [
          "source-nist-mergesort",
          "source-princeton-mergesort",
          "source-von-neumann-edvac-1945"
        ],
        "content": {
          "ko": {
            "summary": "부분 배열을 정렬한 뒤 병합하는 안정적인 분할 정복 정렬 알고리즘",
            "description": "입력을 절반씩 나누어 각 부분을 재귀적으로 정렬하고, 두 정렬 결과를 선형 시간에 병합한다. 입력 순서와 무관하게 O(n log n)을 보장한다.",
            "advantages": [
              "모든 입력에서 O(n log n) 시간을 보장한다.",
              "동일한 키의 순서를 보존하는 안정 정렬로 구현하기 쉽다."
            ],
            "disadvantages": [
              "배열 구현은 보통 O(n)의 보조 메모리가 필요하다.",
              "작은 배열에서는 복사와 병합 비용이 부담이 될 수 있다."
            ],
            "useCases": [
              "안정성이 필요한 레코드 정렬",
              "연결 리스트나 외부 저장장치의 대용량 정렬"
            ]
          },
          "en": {
            "summary": "A stable divide-and-conquer sort that sorts subarrays and merges them.",
            "description": "It halves the input, recursively sorts each half, and merges the two sorted results in linear time. Its O(n log n) running time does not depend on the original order.",
            "advantages": [
              "It guarantees O(n log n) time for every input order.",
              "It is straightforward to implement as a stable sort."
            ],
            "disadvantages": [
              "Array implementations usually require O(n) auxiliary memory.",
              "Copying and merging can be costly for small arrays."
            ],
            "useCases": [
              "Sorting records when stability matters",
              "Large linked-list or external-storage sorting"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "introduced": {
          "year": 1945
        },
        "authors": [
          {
            "name": "John von Neumann"
          }
        ],
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function mergeSort(values, compare = (left, right) => left - right) {\n      if (values.length <= 1) return [...values];\n      const middle = Math.floor(values.length / 2);\n      const left = mergeSort(values.slice(0, middle), compare);\n      const right = mergeSort(values.slice(middle), compare);\n      const result = [];\n      let i = 0;\n      let j = 0;\n      while (i < left.length && j < right.length) {\n        if (compare(left[i], right[j]) <= 0) result.push(left[i++]);\n        else result.push(right[j++]);\n      }\n      return result.concat(left.slice(i), right.slice(j));\n    }"
          }
        ],
        "localizedNames": {
          "en": "Merge Sort",
          "ko": "병합 정렬"
        }
      },
      {
        "id": "algo-dual-pivot-quick-sort",
        "type": "algorithm",
        "name": "Dual-Pivot Quick Sort",
        "summary": "두 개의 피벗으로 배열을 세 구간으로 나누는 Quick Sort 변형",
        "complexity": {
          "time": {
            "average": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "typical": "O(log n)",
            "worst": "O(n)"
          }
        },
        "pseudocode": "DUAL_PIVOT_QUICKSORT(A, lo, hi)\n  if lo >= hi: return\n  choose pivots p <= q from A[lo..hi]\n  partition into values < p, p..q, and > q\n  place p and q at their final boundaries\n  sort the left partition\n  sort the middle partition\n  sort the right partition",
        "introduced": {
          "year": 2009
        },
        "authors": [
          {
            "name": "Vladimir Yaroslavskiy"
          }
        ],
        "referenceIds": [
          "source-yaroslavskiy-dual-pivot-2009",
          "source-nist-quicksort",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "두 피벗으로 입력을 세 구간으로 나누는 Quick Sort 변형",
            "description": "작은 피벗 p와 큰 피벗 q를 정하고 값을 p보다 작은 구간, 두 피벗 사이, q보다 큰 구간으로 분할해 재귀적으로 정렬한다. 비교 횟수만이 아니라 메모리 접근과 실제 구현 상수까지 고려한 최적화형이다.",
            "advantages": [
              "조정된 구현은 일부 배열 자료형에서 고전 Quick Sort보다 실제 성능이 좋다.",
              "한 번의 분할로 세 개의 하위 구간을 만든다."
            ],
            "disadvantages": [
              "분할 로직과 경계 조건이 단일 피벗 방식보다 복잡하다.",
              "불균형한 피벗에서는 여전히 최악 O(n²)이 된다."
            ],
            "useCases": [
              "원시형 배열을 위한 고성능 라이브러리 정렬",
              "메모리 접근 비용을 세밀하게 최적화하는 내부 정렬"
            ]
          },
          "en": {
            "summary": "A Quick Sort variant that partitions input into three regions with two pivots.",
            "description": "It chooses pivots p and q, then separates values below p, between the pivots, and above q before recursing. It is tuned around memory access and implementation constants, not comparison count alone.",
            "advantages": [
              "A tuned implementation can outperform classic Quick Sort for some array types.",
              "One partitioning pass creates three recursive regions."
            ],
            "disadvantages": [
              "Partition logic and boundary cases are more complex than with one pivot.",
              "Poor pivots still allow O(n²) worst-case time."
            ],
            "useCases": [
              "High-performance library sorting for primitive arrays",
              "Internal sorting tuned for memory-access behavior"
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
            "code": "function dualPivotQuickSort(values) {\n      const items = [...values];\n      const swap = (left, right) => { [items[left], items[right]] = [items[right], items[left]]; };\n      const sort = (low, high) => {\n        if (low >= high) return;\n        if (items[low] > items[high]) swap(low, high);\n        const leftPivot = items[low];\n        const rightPivot = items[high];\n        let left = low + 1;\n        let scan = left;\n        let right = high - 1;\n        while (scan <= right) {\n          if (items[scan] < leftPivot) {\n            swap(scan, left);\n            left += 1;\n          }\n          else if (items[scan] > rightPivot) {\n            while (items[right] > rightPivot && scan < right) right -= 1;\n            swap(scan, right);\n            right -= 1;\n            if (items[scan] < leftPivot) {\n              swap(scan, left);\n              left += 1;\n            }\n          }\n          scan += 1;\n        }\n        left -= 1;\n        right += 1;\n        swap(low, left);\n        swap(high, right);\n        sort(low, left - 1);\n        if (leftPivot < rightPivot) sort(left + 1, right - 1);\n        sort(right + 1, high);\n      };\n      sort(0, items.length - 1);\n      return items;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Dual-Pivot Quick Sort",
          "ko": "듀얼 피벗 퀵 정렬"
        }
      },
      {
        "id": "algo-three-way-quick-sort",
        "type": "algorithm",
        "name": "Three-Way Quick Sort",
        "aliases": [
          "3-Way Quick Sort"
        ],
        "summary": "피벗보다 작은 값, 같은 값, 큰 값의 세 구간으로 분할하는 변형",
        "complexity": {
          "time": {
            "allEqual": "O(n)",
            "average": "O(n log n)",
            "worst": "O(n²)"
          },
          "space": {
            "typical": "O(log n)",
            "worst": "O(n)"
          }
        },
        "pseudocode": "THREE_WAY_QUICKSORT(A, lo, hi)\n  if lo >= hi: return\n  pivot <- A[lo]\n  less <- lo; scan <- lo + 1; greater <- hi\n  while scan <= greater\n    if A[scan] < pivot: swap A[less], A[scan]; less++; scan++\n    else if A[scan] > pivot: swap A[scan], A[greater]; greater--\n    else: scan++\n  THREE_WAY_QUICKSORT(A, lo, less - 1)\n  THREE_WAY_QUICKSORT(A, greater + 1, hi)",
        "referenceIds": [
          "source-princeton-quicksort",
          "source-princeton-quick3way"
        ],
        "content": {
          "ko": {
            "summary": "피벗보다 작은 값·같은 값·큰 값의 세 구간으로 분할하는 Quick Sort 변형",
            "description": "한 번의 스캔으로 피벗과 같은 키를 가운데에 모으고, 작은 구간과 큰 구간만 재귀적으로 정렬한다. 중복 키가 많으면 같은 값을 다시 분할하지 않아 표준 2방향 분할보다 효율적이다.",
            "advantages": [
              "중복 키가 많은 입력에서 불필요한 재귀와 비교를 크게 줄인다.",
              "모든 키가 같으면 한 번의 선형 분할로 끝난다."
            ],
            "disadvantages": [
              "서로 다른 키가 대부분이면 3방향 경계 관리의 추가 비용이 생긴다.",
              "피벗이 계속 치우치면 최악 O(n²)은 남는다."
            ],
            "useCases": [
              "중복 값이 많은 배열이나 범주형 키 정렬",
              "서로 다른 키의 수가 입력 크기보다 훨씬 작은 데이터"
            ]
          },
          "en": {
            "summary": "A Quick Sort variant that partitions values below, equal to, and above the pivot.",
            "description": "A single scan groups keys equal to the pivot in the middle and recurses only on smaller and larger regions. With many duplicate keys, it avoids repartitioning equal values.",
            "advantages": [
              "It sharply reduces recursion and comparisons on duplicate-heavy input.",
              "When all keys are equal, one linear partition finishes the sort."
            ],
            "disadvantages": [
              "Mostly distinct keys pay extra bookkeeping for three boundaries.",
              "Repeatedly skewed pivots still permit O(n²) worst-case time."
            ],
            "useCases": [
              "Arrays with many duplicates or categorical keys",
              "Data whose number of distinct keys is much smaller than its size"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Three-Way Quick Sort",
          "ko": "3방향 퀵 정렬"
        }
      },
      {
        "id": "algo-introsort",
        "type": "algorithm",
        "name": "Introsort",
        "aliases": [
          "Introspective Sort"
        ],
        "summary": "Quick Sort로 시작하고 재귀가 깊어지면 Heap Sort로 전환하는 정렬",
        "complexity": {
          "time": {
            "best": "O(n log n)",
            "average": "O(n log n)",
            "worst": "O(n log n)"
          },
          "space": {
            "typical": "O(log n)"
          }
        },
        "pseudocode": "INTROSORT(A)\n  depthLimit <- 2 * floor(log2(length(A)))\n  INTRO_LOOP(A, 0, length(A) - 1, depthLimit)\n\nINTRO_LOOP(A, lo, hi, depthLimit)\n  while hi - lo is larger than cutoff\n    if depthLimit = 0: HEAPSORT(A, lo, hi); return\n    depthLimit <- depthLimit - 1\n    split <- PARTITION(A, lo, hi)\n    INTRO_LOOP(A, split, hi, depthLimit)\n    hi <- split - 1\n  INSERTION_SORT_SMALL_RANGE(A, lo, hi)",
        "introduced": {
          "year": 1997
        },
        "authors": [
          {
            "name": "David R. Musser"
          }
        ],
        "referenceIds": [
          "source-musser-introsort-1997",
          "source-nist-introsort",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "Quick Sort의 평균 성능과 Heap Sort의 최악 보장을 결합한 혼합 정렬",
            "description": "Quick Sort로 시작하되 분할 재귀 깊이가 한계를 넘으면 해당 구간을 Heap Sort로 전환한다. 작은 구간에는 Insertion Sort를 적용해 실제 성능을 보완할 수 있다.",
            "advantages": [
              "평균적으로 Quick Sort의 빠른 성능을 유지한다.",
              "깊이 제한과 Heap Sort 전환으로 최악 O(n log n)을 보장한다."
            ],
            "disadvantages": [
              "세 정렬 전략과 전환 조건 때문에 구현이 복잡하다.",
              "일반적인 구현은 안정 정렬이 아니다."
            ],
            "useCases": [
              "최악 시간 보장이 필요한 범용 비교 정렬",
              "표준 라이브러리의 고성능 내부 정렬 구현"
            ]
          },
          "en": {
            "summary": "A hybrid sort combining Quick Sort's average performance with Heap Sort's worst-case bound.",
            "description": "It starts with Quick Sort but switches a range to Heap Sort when partition depth exceeds a limit. Small ranges can be finished with Insertion Sort for practical speed.",
            "advantages": [
              "It retains Quick Sort's strong average practical performance.",
              "A depth limit and Heap Sort fallback guarantee O(n log n) worst-case time."
            ],
            "disadvantages": [
              "Multiple sorting strategies and transition rules complicate implementation.",
              "Typical implementations are not stable."
            ],
            "useCases": [
              "General comparison sorting that requires a worst-case bound",
              "High-performance internal sorting in standard libraries"
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
            "code": "function introsort(values) {\n      const items = [...values];\n      const swap = (i, j) => { [items[i], items[j]] = [items[j], items[i]]; };\n      const heapSortRange = (low, high) => {\n        const length = high - low + 1;\n        const sift = (root, end) => {\n          while (root * 2 + 1 <= end) {\n            let child = root * 2 + 1;\n            if (child + 1 <= end && items[low + child] < items[low + child + 1]) child += 1;\n            if (items[low + root] >= items[low + child]) return;\n            swap(low + root, low + child);\n            root = child;\n          }\n        };\n        for (let root = Math.floor(length / 2) - 1; root >= 0; root -= 1) sift(root, length - 1);\n        for (let end = length - 1; end > 0; end -= 1) { swap(low, low + end); sift(0, end - 1); }\n      };\n      const sort = (low, high, depth) => {\n        if (low >= high) return;\n        if (depth === 0) return heapSortRange(low, high);\n        const pivot = items[Math.floor((low + high) / 2)];\n        let i = low;\n        let j = high;\n        while (i <= j) {\n          while (items[i] < pivot) i += 1;\n          while (items[j] > pivot) j -= 1;\n          if (i <= j) { swap(i, j); i += 1; j -= 1; }\n        }\n        sort(low, j, depth - 1);\n        sort(i, high, depth - 1);\n      };\n      sort(0, items.length - 1, 2 * Math.floor(Math.log2(Math.max(1, items.length))));\n      return items;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Introsort",
          "ko": "인트로 정렬"
        }
      },
      {
        "id": "algo-heap-sort",
        "type": "algorithm",
        "name": "Heap Sort",
        "summary": "Heap에서 최댓값 또는 최솟값을 반복 추출하는 비교 정렬",
        "complexity": {
          "time": {
            "best": "O(n log n)",
            "average": "O(n log n)",
            "worst": "O(n log n)"
          },
          "space": {
            "auxiliary": "O(1)"
          }
        },
        "pseudocode": "HEAPSORT(A)\n  BUILD_MAX_HEAP(A)\n  for end <- length(A) - 1 down to 1\n    swap A[0], A[end]\n    SINK(A, 0, end)\n\nBUILD_MAX_HEAP(A)\n  for i <- floor(length(A) / 2) - 1 down to 0\n    SINK(A, i, length(A))",
        "introduced": {
          "year": 1964
        },
        "authors": [
          {
            "name": "J. W. J. Williams"
          }
        ],
        "referenceIds": [
          "source-nist-heapsort",
          "source-princeton-priority-queues",
          "source-williams-heapsort-1964"
        ],
        "content": {
          "ko": {
            "summary": "배열을 힙으로 만든 뒤 최댓값을 반복 추출하는 제자리 비교 정렬",
            "description": "배열 자체를 최대 힙으로 구성하고 루트의 최댓값을 정렬되지 않은 구간 끝과 교환한다. 힙 크기를 줄이며 복구를 반복해 추가 배열 없이 O(n log n)을 보장한다.",
            "advantages": [
              "모든 입력에서 O(n log n) 시간을 보장한다.",
              "배열 안에서 동작해 O(1) 보조 공간만 필요하다."
            ],
            "disadvantages": [
              "메모리 접근의 지역성이 Quick Sort보다 좋지 않아 실제로 느릴 수 있다.",
              "동일 키의 기존 순서를 보존하지 않는 불안정 정렬이다."
            ],
            "useCases": [
              "추가 메모리가 제한된 최악 시간 보장 정렬",
              "Introsort의 재귀 깊이 초과 시 안전한 대체 정렬"
            ]
          },
          "en": {
            "summary": "An in-place comparison sort that heapifies an array and repeatedly extracts its maximum.",
            "description": "The array itself becomes a max heap, and its root is swapped with the end of the unsorted range. Repeated heap repair guarantees O(n log n) without an auxiliary array.",
            "advantages": [
              "It guarantees O(n log n) for every input.",
              "It needs only O(1) auxiliary space when stored in an array."
            ],
            "disadvantages": [
              "Poorer memory locality can make it slower than Quick Sort in practice.",
              "It is unstable and does not preserve the order of equal keys."
            ],
            "useCases": [
              "Worst-case-bounded sorting under tight memory limits",
              "A safe fallback when Introsort exceeds its recursion-depth limit"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "Heap Sort는 별도 설계 기법보다 Heap 자료구조에 의해 핵심 동작이 정의되므로 Technique를 강제로 지정하지 않는다.",
              "en": "Heap Sort is defined primarily by the Heap data structure rather than a separate design technique, so no technique is forced onto it."
            }
          }
        },
        "implementations": [
          {
            "language": "JavaScript",
            "code": "function heapSort(values) {\n      const items = [...values];\n      const siftDown = (root, end) => {\n        while (root * 2 + 1 <= end) {\n          let child = root * 2 + 1;\n          if (child + 1 <= end && items[child] < items[child + 1]) child += 1;\n          if (items[root] >= items[child]) return;\n          [items[root], items[child]] = [items[child], items[root]];\n          root = child;\n        }\n      };\n      for (let root = Math.floor(items.length / 2) - 1; root >= 0; root -= 1) siftDown(root, items.length - 1);\n      for (let end = items.length - 1; end > 0; end -= 1) {\n        [items[0], items[end]] = [items[end], items[0]];\n        siftDown(0, end - 1);\n      }\n      return items;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Heap Sort",
          "ko": "힙 정렬"
        }
      },
      {
        "id": "algo-insertion-sort",
        "type": "algorithm",
        "name": "Insertion Sort",
        "summary": "각 원소를 이미 정렬된 앞부분의 알맞은 위치에 삽입하는 정렬",
        "complexity": {
          "time": {
            "best": "O(n)",
            "average": "O(n²)",
            "worst": "O(n²)"
          },
          "space": {
            "auxiliary": "O(1)"
          }
        },
        "pseudocode": "INSERTION_SORT(A)\n  for i <- 1 to length(A) - 1\n    value <- A[i]\n    j <- i - 1\n    while j >= 0 and A[j] > value\n      A[j + 1] <- A[j]\n      j <- j - 1\n    A[j + 1] <- value",
        "referenceIds": [
          "source-nist-insertion-sort",
          "source-princeton-elementary-sorts"
        ],
        "content": {
          "ko": {
            "summary": "정렬된 앞부분의 올바른 위치에 다음 원소를 삽입하는 안정 정렬",
            "description": "왼쪽 구간이 정렬되어 있다는 불변식을 유지하며 다음 값을 더 큰 원소들 앞으로 이동시킨다. 입력이 거의 정렬되어 있거나 구간이 작으면 이동 횟수가 적어 효율적이다.",
            "advantages": [
              "거의 정렬된 입력에서는 O(n)에 가깝게 동작한다.",
              "안정적이며 제자리에서 구현할 수 있고 작은 입력의 상수가 작다."
            ],
            "disadvantages": [
              "역순 같은 입력에서는 O(n²)번 비교와 이동이 필요하다.",
              "큰 무작위 배열의 단독 정렬에는 적합하지 않다."
            ],
            "useCases": [
              "작거나 거의 정렬된 배열",
              "Timsort·Introsort에서 작은 하위 구간을 마무리하는 정렬"
            ]
          },
          "en": {
            "summary": "A stable sort that inserts each next item into the correct position of a sorted prefix.",
            "description": "It maintains a sorted prefix and shifts larger values right to insert the next item. Nearly sorted input or small ranges require few moves and are handled efficiently.",
            "advantages": [
              "It approaches O(n) on nearly sorted input.",
              "It is stable, in-place, and has low overhead for small inputs."
            ],
            "disadvantages": [
              "Reverse-ordered input requires O(n²) comparisons and moves.",
              "It is unsuitable as a standalone sort for large random arrays."
            ],
            "useCases": [
              "Small or nearly sorted arrays",
              "Finishing small subranges inside Timsort or Introsort"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Insertion Sort",
          "ko": "삽입 정렬"
        }
      },
      {
        "id": "algo-counting-sort",
        "type": "algorithm",
        "name": "Counting Sort",
        "summary": "제한된 정수 범위에서 값의 출현 횟수를 세어 정렬하는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n + k)"
          },
          "space": {
            "stable": "O(n + k)"
          }
        },
        "pseudocode": "COUNTING_SORT(A, minimum, maximum)\n  count <- array of zeros with size maximum - minimum + 1\n  for each value in A\n    count[value - minimum]++\n  for i <- 1 to length(count) - 1\n    count[i] <- count[i] + count[i - 1]\n  output <- array of length(A)\n  for value in A scanned from right to left\n    output[count[value - minimum] - 1] <- value\n    count[value - minimum]--\n  return output",
        "referenceIds": [
          "source-nist-counting-sort",
          "source-nist-sort"
        ],
        "content": {
          "ko": {
            "summary": "제한된 정수 키의 출현 횟수로 위치를 계산하는 비비교 정렬",
            "description": "각 키의 빈도를 센 뒤 누적합으로 출력 배열의 마지막 위치를 계산한다. 키 범위 k가 입력 크기와 비슷할 때 비교 정렬의 하한을 피해 O(n+k)에 정렬한다.",
            "advantages": [
              "작은 정수 키 범위에서는 선형 시간에 안정 정렬할 수 있다.",
              "키 비교 없이 빈도와 인덱스 계산만 사용한다."
            ],
            "disadvantages": [
              "키 범위 k가 크면 시간과 메모리가 낭비된다.",
              "임의 객체에는 제한된 정수 키로의 매핑이 필요하다."
            ],
            "useCases": [
              "점수·등급처럼 범위가 작은 정수 레코드 정렬",
              "Radix Sort의 안정적인 자릿수별 하위 정렬"
            ]
          },
          "en": {
            "summary": "A non-comparison sort that computes positions from frequencies of bounded integer keys.",
            "description": "It counts each key and uses prefix sums to determine final output positions. When key range k is comparable to input size, it sorts in O(n+k), bypassing comparison-sort bounds.",
            "advantages": [
              "It can stably sort bounded integer keys in linear time.",
              "It uses frequency and index arithmetic instead of key comparisons."
            ],
            "disadvantages": [
              "A large key range wastes both time and memory.",
              "Arbitrary objects need a mapping to bounded integer keys."
            ],
            "useCases": [
              "Records keyed by bounded scores or categories",
              "A stable digit-level subroutine for Radix Sort"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Counting Sort",
          "ko": "계수 정렬"
        }
      },
      {
        "id": "algo-radix-sort",
        "type": "algorithm",
        "name": "Radix Sort",
        "summary": "숫자나 문자열의 자릿값을 순서대로 처리하는 비비교 정렬",
        "complexity": {
          "time": {
            "typical": "O(d(n + b))"
          },
          "space": {
            "typical": "O(n + b)"
          }
        },
        "pseudocode": "LSD_RADIX_SORT(A, digits, base)\n  output <- array of length(A)\n  for position <- 0 to digits - 1\n    stably distribute every value by DIGIT(value, position, base)\n    collect buckets in digit order back into A\n  return A",
        "referenceIds": [
          "source-nist-radix-sort",
          "source-princeton-radix-sorts"
        ],
        "content": {
          "ko": {
            "summary": "키를 자릿수별로 안정적으로 분배해 정렬하는 비비교 알고리즘",
            "description": "LSD 방식은 가장 낮은 자릿수부터 각 자릿수에 대해 안정 정렬을 반복한다. d개의 자릿수와 기수 b가 제한되면 전체 비용은 O(d(n+b))다.",
            "advantages": [
              "고정 길이 정수나 문자열 키를 비교 없이 빠르게 정렬할 수 있다.",
              "자릿수 수가 제한되면 입력 크기에 선형인 성능을 낸다."
            ],
            "disadvantages": [
              "키 표현과 기수 선택에 성능이 크게 좌우된다.",
              "안정적인 버킷 처리와 O(n+b) 보조 공간이 필요할 수 있다."
            ],
            "useCases": [
              "고정 폭 정수, 식별자, 문자열 정렬",
              "대량 키 데이터의 자릿수 기반 정렬"
            ]
          },
          "en": {
            "summary": "A non-comparison algorithm that stably distributes keys one digit at a time.",
            "description": "The LSD form applies a stable sort from the least-significant digit upward. With d digits and radix b, its total cost is O(d(n+b)).",
            "advantages": [
              "It sorts fixed-length integers or strings without pairwise comparisons.",
              "With bounded digit count it can run linearly in the input size."
            ],
            "disadvantages": [
              "Performance depends strongly on key representation and radix choice.",
              "Stable bucket processing may require O(n+b) auxiliary space."
            ],
            "useCases": [
              "Fixed-width integers, identifiers, and strings",
              "Digit-oriented sorting of large key collections"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Radix Sort",
          "ko": "기수 정렬"
        }
      },
      {
        "id": "algo-timsort",
        "type": "algorithm",
        "name": "Timsort",
        "summary": "Insertion Sort와 Merge Sort를 결합해 실제 데이터의 부분 정렬을 활용하는 정렬",
        "complexity": {
          "time": {
            "best": "O(n)",
            "average": "O(n log n)",
            "worst": "O(n log n)"
          },
          "space": {
            "worst": "O(n)"
          }
        },
        "pseudocode": "TIMSORT(A)\n  minRun <- CHOOSE_MIN_RUN(length(A))\n  runs <- empty stack\n  while unprocessed items remain\n    run <- detect next ascending or descending run\n    reverse run if descending\n    extend short run to minRun using binary insertion sort\n    push run and merge while stack invariants are violated\n  merge remaining runs until one run remains",
        "introduced": {
          "year": 2002
        },
        "authors": [
          {
            "name": "Tim Peters"
          }
        ],
        "referenceIds": [
          "source-cpython-listsort",
          "source-python-sorting-howto"
        ],
        "content": {
          "ko": {
            "summary": "기존 정렬 구간을 감지해 병합하는 안정적이고 적응적인 혼합 정렬",
            "description": "입력에서 이미 오름차순·내림차순인 run을 찾고 짧은 run은 삽입 정렬로 확장한 뒤 균형 규칙에 따라 병합한다. 실제 데이터의 부분 정렬을 활용하면서 최악 O(n log n)을 유지한다.",
            "advantages": [
              "이미 정렬되거나 부분 정렬된 입력에서 O(n)에 가까워질 수 있다.",
              "안정 정렬이며 실제 객체·레코드 데이터에 강하다."
            ],
            "disadvantages": [
              "run 스택과 병합 규칙이 복잡해 정확한 구현이 어렵다.",
              "병합을 위한 보조 메모리가 필요하다."
            ],
            "useCases": [
              "Python 등 런타임의 안정적인 범용 객체 정렬",
              "부분 정렬 구조가 자주 존재하는 실제 레코드 배열"
            ]
          },
          "en": {
            "summary": "A stable adaptive hybrid sort that detects and merges existing ordered runs.",
            "description": "It finds ascending or descending runs, extends short runs with insertion sort, and merges according to balancing invariants. It exploits partial order while retaining O(n log n) worst-case time.",
            "advantages": [
              "It can approach O(n) on sorted or partially ordered input.",
              "It is stable and performs well on real object and record data."
            ],
            "disadvantages": [
              "Run-stack and merge invariants make correct implementation complex.",
              "Merging requires auxiliary memory."
            ],
            "useCases": [
              "Stable general object sorting in runtimes such as Python",
              "Real record arrays that often contain partially sorted runs"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Timsort",
          "ko": "팀소트"
        }
      },
      {
        "id": "algo-binary-search",
        "type": "algorithm",
        "name": "Binary Search",
        "summary": "정렬된 탐색 범위를 절반씩 줄여 목표를 찾는 알고리즘",
        "complexity": {
          "time": {
            "best": "O(1)",
            "average": "O(log n)",
            "worst": "O(log n)"
          },
          "space": {
            "iterative": "O(1)",
            "recursive": "O(log n)"
          }
        },
        "pseudocode": "BINARY_SEARCH(A, target)\n  low <- 0\n  high <- length(A) - 1\n  while low <= high\n    middle <- low + floor((high - low) / 2)\n    if A[middle] = target: return middle\n    if A[middle] < target\n      low <- middle + 1\n    else\n      high <- middle - 1\n  return NOT_FOUND",
        "referenceIds": [
          "source-nist-binary-search",
          "source-princeton-binary-search"
        ],
        "content": {
          "ko": {
            "summary": "정렬된 탐색 범위를 절반씩 줄여 목표를 찾는 알고리즘",
            "description": "가운데 원소를 목표와 비교하고 목표가 있을 수 없는 절반을 반복해서 버린다. 정렬되고 임의 접근이 가능한 데이터에서 로그 시간 탐색을 제공한다.",
            "advantages": [
              "최악의 경우에도 O(log n)번 비교한다.",
              "반복 구현은 O(1) 추가 공간만 사용한다."
            ],
            "disadvantages": [
              "데이터가 비교 기준에 따라 미리 정렬되어 있어야 한다.",
              "연결 리스트처럼 임의 접근이 느린 구조에는 적합하지 않다."
            ],
            "useCases": [
              "정렬 배열에서 정확한 키 찾기",
              "lower bound 같은 경계 위치와 단조 조건의 전환점 찾기"
            ]
          },
          "en": {
            "summary": "An algorithm that finds a target by repeatedly halving a sorted search range.",
            "description": "It compares the target with the middle element and discards the half that cannot contain it. It provides logarithmic search on sorted, random-access data.",
            "advantages": [
              "It needs only O(log n) comparisons in the worst case.",
              "The iterative form uses O(1) auxiliary space."
            ],
            "disadvantages": [
              "The data must already be sorted under the same comparison rule.",
              "It is unsuitable for structures with slow random access, such as linked lists."
            ],
            "useCases": [
              "Exact-key lookup in sorted arrays",
              "Finding boundaries or transition points of monotone predicates"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Binary Search",
          "ko": "이진 탐색"
        }
      },
      {
        "id": "algo-linear-search",
        "type": "algorithm",
        "name": "Linear Search",
        "summary": "원소를 처음부터 차례대로 검사하는 탐색 알고리즘",
        "aliases": [
          "Sequential Search"
        ],
        "complexity": {
          "time": {
            "best": "O(1)",
            "average": "O(n)",
            "worst": "O(n)"
          },
          "space": {
            "auxiliary": "O(1)"
          }
        },
        "pseudocode": "LINEAR_SEARCH(A, target)\n  for i <- 0 to length(A) - 1\n    if A[i] = target\n      return i\n  return NOT_FOUND",
        "referenceIds": [
          "source-nist-linear-search",
          "source-nist-search"
        ],
        "content": {
          "ko": {
            "summary": "처음부터 원소를 하나씩 검사해 목표를 찾는 순차 탐색",
            "description": "정렬 여부나 인덱스 구조를 요구하지 않고 각 원소를 목표와 비교한다. 찾는 즉시 종료하며 목표가 없으면 모든 원소를 검사한다.",
            "advantages": [
              "정렬이나 전처리 없이 어떤 순차 자료에도 적용할 수 있다.",
              "구현이 단순하고 추가 공간이 거의 필요하지 않다."
            ],
            "disadvantages": [
              "목표가 뒤에 있거나 없으면 O(n)번 비교한다.",
              "반복 검색에는 해시나 정렬 인덱스보다 비효율적이다."
            ],
            "useCases": [
              "작거나 한 번만 검색하는 비정렬 데이터",
              "스트림·연결 리스트에서 조건을 만족하는 첫 원소 찾기"
            ]
          },
          "en": {
            "summary": "A sequential search that checks elements one by one from the beginning.",
            "description": "It needs no ordering or index and compares each item with the target. It stops on a match and examines every item when the target is absent.",
            "advantages": [
              "It works on any sequential data without sorting or preprocessing.",
              "It is simple and uses essentially no auxiliary space."
            ],
            "disadvantages": [
              "A late or absent target requires O(n) comparisons.",
              "Repeated queries are less efficient than hashing or a sorted index."
            ],
            "useCases": [
              "Small unsorted collections or one-off queries",
              "Finding the first matching item in streams or linked lists"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Linear Search",
          "ko": "선형 탐색"
        }
      },
      {
        "id": "algo-ternary-search",
        "type": "algorithm",
        "name": "Ternary Search",
        "summary": "탐색 구간을 세 부분으로 나누어 범위를 줄이는 알고리즘",
        "aliases": [
          "Three-Way Search"
        ],
        "complexity": {
          "time": {
            "typical": "O(log n)"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "TERNARY_SEARCH(A, target)\n  low <- 0; high <- length(A) - 1\n  while low <= high\n    third <- floor((high - low) / 3)\n    mid1 <- low + third\n    mid2 <- high - third\n    if A[mid1] = target: return mid1\n    if A[mid2] = target: return mid2\n    if target < A[mid1]\n      high <- mid1 - 1\n    else if target > A[mid2]\n      low <- mid2 + 1\n    else\n      low <- mid1 + 1; high <- mid2 - 1\n  return NOT_FOUND",
        "referenceIds": [
          "source-princeton-ternary-search",
          "source-nist-search"
        ],
        "content": {
          "ko": {
            "summary": "정렬된 배열을 두 분할점과 비교해 후보 구간을 세 부분 중 하나로 줄이는 탐색",
            "description": "현재 정렬 구간에 두 분할점을 두고 목표값이 왼쪽·가운데·오른쪽 중 어디에 있을 수 있는지 판정한다. 반복 횟수는 log₃n 수준이지만 한 단계에 최대 두 번의 키 비교가 필요해 일반적인 정렬 배열 탐색에서는 Binary Search보다 유리하지 않다.",
            "advantages": [
              "매 단계마다 후보 원소 수를 약 3분의 1로 줄인다.",
              "반복형은 정렬 배열의 임의 접근만 사용하며 보조 공간이 상수다."
            ],
            "disadvantages": [
              "두 분할점 비교 때문에 Binary Search보다 전체 비교 횟수가 많아지는 경우가 일반적이다.",
              "정렬되지 않은 데이터나 임의 접근이 비싼 자료구조에는 적합하지 않다."
            ],
            "useCases": [
              "다분 탐색의 원리를 설명하고 Binary Search와 비교하는 교육용 구현",
              "비교·프로브 비용 모델이 특수한 정렬 데이터 탐색 실험"
            ]
          },
          "en": {
            "summary": "A sorted-array search comparing two split points to retain one of three candidate ranges.",
            "description": "It places two split points in the current sorted range and determines whether the target can lie in the left, middle, or right third. Although it takes about log₃n iterations, each iteration may need two key comparisons, so it usually does not outperform binary search on ordinary sorted arrays.",
            "advantages": [
              "It reduces the candidate count to roughly one third at each step.",
              "The iterative form uses only random access to the sorted array and constant auxiliary space."
            ],
            "disadvantages": [
              "Two split-point checks usually produce more total comparisons than binary search.",
              "It is unsuitable for unsorted data or structures with expensive random access."
            ],
            "useCases": [
              "Teaching multiway search and comparing it with binary search",
              "Experiments on sorted data with specialized comparison or probe cost models"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Ternary Search",
          "ko": "삼진 탐색"
        }
      },
      {
        "id": "algo-quickselect",
        "type": "algorithm",
        "name": "Quickselect",
        "summary": "Quick Sort의 분할을 이용해 k번째 원소를 찾는 선택 알고리즘",
        "aliases": [
          "Hoare's Find"
        ],
        "complexity": {
          "time": {
            "expected": "O(n)",
            "worst": "O(n²)"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "QUICKSELECT(A, k)\n  lo <- 0; hi <- length(A) - 1\n  while lo <= hi\n    pivot <- choose a pivot in A[lo..hi]\n    split <- PARTITION(A, lo, hi, pivot)\n    if split = k: return A[split]\n    if k < split: hi <- split - 1\n    else: lo <- split + 1\n  return NOT_FOUND",
        "introduced": {
          "year": 1961
        },
        "authors": [
          {
            "name": "C. A. R. Hoare"
          }
        ],
        "referenceIds": [
          "source-hoare-find-1961",
          "source-nist-quicksort",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "피벗 분할 후 k번째 원소가 있는 한쪽만 탐색하는 선택 알고리즘",
            "description": "Quick Sort와 같은 분할을 사용하지만 목표 순위 k를 포함하는 구간 하나만 계속 처리한다. 무작위 피벗을 사용하면 기대 O(n)이지만 계속 나쁜 피벗을 고르면 O(n²)이 된다.",
            "advantages": [
              "전체 정렬 없이 기대 선형 시간에 k번째 원소를 찾는다.",
              "반복형 분할은 배열 안에서 O(1) 보조 공간으로 구현할 수 있다."
            ],
            "disadvantages": [
              "피벗 선택이 나쁘면 최악 O(n²)이 된다.",
              "분할 과정이 입력 배열의 순서를 변경한다."
            ],
            "useCases": [
              "중앙값·백분위수·k번째 최소값 계산",
              "상위 k개 후보를 전체 정렬 없이 분리하는 처리"
            ]
          },
          "en": {
            "summary": "A selection algorithm that partitions around a pivot and follows only the side containing rank k.",
            "description": "It uses Quick Sort's partition step but continues in only the range containing target rank k. Random pivots give expected O(n), while repeatedly poor pivots lead to O(n²).",
            "advantages": [
              "It finds the kth item in expected linear time without fully sorting.",
              "An iterative partition form can use O(1) auxiliary array space."
            ],
            "disadvantages": [
              "Poor pivot choices cause O(n²) worst-case time.",
              "Partitioning changes the input array's order."
            ],
            "useCases": [
              "Medians, percentiles, and kth-order statistics",
              "Separating top-k candidates without a complete sort"
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
            "code": "function quickselect(values, k) {\n      if (!Number.isInteger(k) || k < 0 || k >= values.length) throw new RangeError(\"k is outside the array.\");\n      const items = [...values];\n      let low = 0;\n      let high = items.length - 1;\n      while (low <= high) {\n        const pivot = items[high];\n        let boundary = low;\n        for (let index = low; index < high; index += 1) {\n          if (items[index] <= pivot) {\n            [items[index], items[boundary]] = [items[boundary], items[index]];\n            boundary += 1;\n          }\n        }\n        [items[boundary], items[high]] = [items[high], items[boundary]];\n        if (boundary === k) return items[boundary];\n        if (boundary < k) low = boundary + 1;\n        else high = boundary - 1;\n      }\n    }"
          }
        ],
        "localizedNames": {
          "en": "Quickselect",
          "ko": "퀵셀렉트"
        }
      },
      {
        "id": "algo-exponential-search",
        "type": "algorithm",
        "name": "Exponential Search",
        "summary": "경계를 두 배씩 넓혀 후보 구간을 찾은 뒤 이진 탐색하는 알고리즘",
        "complexity": {
          "time": {
            "targetAtIndexI": "O(log i)",
            "worst": "O(log n)"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "EXPONENTIAL_SEARCH(sorted, target)\n  if sorted[0] = target: return 0\n  bound <- 1\n  while bound < n and sorted[bound] < target\n    bound <- bound * 2\n  return BINARY_SEARCH(sorted, target, bound / 2, min(bound, n - 1))",
        "referenceIds": [
          "source-bentley-yao-unbounded-search-1976",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "경계를 두 배씩 넓혀 후보 구간을 찾은 뒤 이진 탐색하는 알고리즘",
            "description": "첫 원소에서 시작해 인덱스 1, 2, 4, 8처럼 경계를 확장하다 목표 이상 값이나 배열 끝을 만난다. 직전 경계와 현재 경계 사이만 이진 탐색한다.",
            "advantages": [
              "목표가 앞쪽 인덱스 i에 있으면 O(log i)에 찾는다.",
              "크기를 미리 모르는 정렬 스트림이나 unbounded array 모델에 적용할 수 있다."
            ],
            "disadvantages": [
              "무작위 접근 가능한 정렬 데이터가 필요하다.",
              "일반 배열 끝의 목표에는 이진 탐색과 같은 O(log n)이며 경계 탐색 비용이 추가된다."
            ],
            "useCases": [
              "길이를 즉시 알 수 없는 정렬 데이터 탐색",
              "희소한 앞쪽 영역에 목표가 자주 나타나는 인덱스"
            ]
          },
          "en": {
            "summary": "An algorithm doubling a bound to find a candidate interval and then using binary search.",
            "description": "It probes indices 1, 2, 4, 8, and so on until reaching the target range or array end. Only the interval between the previous and current bound is binary-searched.",
            "advantages": [
              "A target at early index i is found in O(log i) time.",
              "It works with sorted streams or unbounded-array models whose size is initially unknown."
            ],
            "disadvantages": [
              "It requires sorted data with random access.",
              "For targets near the end it remains O(log n) like binary search with added range-finding work."
            ],
            "useCases": [
              "Searching sorted data whose length is not immediately known",
              "Indexes where targets are often concentrated near the beginning"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Exponential Search",
          "ko": "지수 탐색"
        }
      },
      {
        "id": "algo-jump-search",
        "type": "algorithm",
        "name": "Jump Search",
        "summary": "고정 블록을 건너뛴 뒤 후보 블록을 선형 검사하는 정렬 배열 탐색",
        "complexity": {
          "time": {
            "optimalBlock": "O(√n)"
          },
          "space": {
            "typical": "O(1)"
          }
        },
        "pseudocode": "JUMP_SEARCH(sorted, target)\n  step <- floor(sqrt(n))\n  previous <- 0\n  while previous < n and sorted[min(previous + step, n) - 1] < target\n    previous <- previous + step\n  for i <- previous to min(previous + step, n) - 1\n    if sorted[i] = target: return i\n    if sorted[i] > target: break\n  return NOT_FOUND",
        "referenceIds": [
          "source-nist-jump-search",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "고정 블록을 건너뛴 뒤 후보 블록을 선형 검사하는 정렬 배열 탐색",
            "description": "약 √n 간격의 블록 끝을 비교해 목표가 들어갈 첫 블록을 찾고 그 블록 안을 순서대로 확인한다. 점프 횟수와 블록 내부 검사 횟수의 합이 최소가 되도록 간격을 정한다.",
            "advantages": [
              "앞으로만 이동하는 접근 패턴이라 되감기 비용이 큰 매체에 단순하게 적용된다.",
              "이진 탐색보다 비교는 많지만 구현과 메모리 요구가 작다."
            ],
            "disadvantages": [
              "O(√n)은 배열의 이진 탐색 O(log n)보다 느리다.",
              "정렬과 효율적인 블록 위치 접근이 필요하다."
            ],
            "useCases": [
              "순차 이동 비용과 무작위 접근 비용이 비대칭인 정렬 저장소",
              "블록 기반 검색 원리 교육"
            ]
          },
          "en": {
            "summary": "A sorted-array search that skips fixed-size blocks and linearly scans the candidate block.",
            "description": "It compares block endpoints about √n positions apart until the first block that may contain the target, then scans that block in order. The step balances jump count against final scan length.",
            "advantages": [
              "Its forward-only access pattern is simple on media where backward movement is costly.",
              "It uses little memory and simpler control than binary search."
            ],
            "disadvantages": [
              "O(√n) is slower than O(log n) binary search on ordinary arrays.",
              "It requires sorted data and efficient access to block endpoints."
            ],
            "useCases": [
              "Sorted storage with asymmetric sequential and random-access costs",
              "Teaching block-based search tradeoffs"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Jump Search",
          "ko": "점프 탐색"
        }
      },
      {
        "id": "algo-interpolation-search",
        "type": "algorithm",
        "name": "Interpolation Search",
        "summary": "양 끝 키 값으로 목표 위치를 비례 추정하는 정렬 수치 배열 탐색",
        "complexity": {
          "time": {
            "averageUniform": "O(log log n)",
            "worst": "O(n)"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "INTERPOLATION_SEARCH(sorted, target)\n  low <- 0; high <- n - 1\n  while low <= high and target between sorted[low] and sorted[high]\n    if sorted[low] = sorted[high]: handle equality and stop\n    pos <- low + (target - sorted[low]) * (high - low) / (sorted[high] - sorted[low])\n    compare sorted[pos] and move low or high\n  return NOT_FOUND",
        "referenceIds": [
          "source-nist-interpolation-search",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "양 끝 키 값으로 목표 위치를 비례 추정하는 정렬 수치 배열 탐색",
            "description": "중간 위치를 고정하지 않고 목표가 현재 최솟값과 최댓값 사이 어디에 놓이는지 비율로 추정한다. 값이 균일하게 분포하면 범위를 빠르게 줄이지만 치우친 분포에서는 거의 한 칸씩 진행할 수 있다.",
            "advantages": [
              "균일한 독립 수치 키에서는 평균 O(log log n) 탐색이 가능하다.",
              "추정이 정확할 때 이진 탐색보다 훨씬 적은 위치를 확인한다."
            ],
            "disadvantages": [
              "편향·군집 분포에서는 최악 O(n)으로 퇴화한다.",
              "중복 끝값·오버플로·부동소수점 위치 계산을 방어해야 한다."
            ],
            "useCases": [
              "균일하게 분포한 정렬 정수 키의 메모리 인덱스",
              "분포 정보를 이용하는 탐색과 learned index의 기초 비교"
            ]
          },
          "en": {
            "summary": "A search over sorted numeric keys that proportionally estimates the target position from endpoint values.",
            "description": "Instead of a fixed midpoint, it estimates where the target falls between current minimum and maximum keys. Uniform values shrink quickly, while skewed distributions can advance almost one position at a time.",
            "advantages": [
              "Uniform independent numeric keys can yield O(log log n) average search.",
              "Accurate estimates inspect far fewer positions than binary search."
            ],
            "disadvantages": [
              "Skewed or clustered distributions degrade to O(n) worst case.",
              "Equal endpoints, overflow, and floating-point position calculations need safeguards."
            ],
            "useCases": [
              "In-memory indexes of uniformly distributed sorted integer keys",
              "Comparing distribution-aware search with learned-index ideas"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Interpolation Search",
          "ko": "보간 탐색"
        }
      },
      {
        "id": "algo-shell-sort",
        "type": "algorithm",
        "name": "Shell Sort",
        "aliases": [],
        "localizedNames": {
          "en": "Shell Sort",
          "ko": "셸 정렬"
        },
        "complexity": {
          "time": {
            "gapDependent": "O(n log² n) for common sequences; O(n²) worst for Shell gaps"
          },
          "space": "O(1)"
        },
        "pseudocode": "SHELL_SORT(A, gaps)\n  for gap in gaps from large to small\n    for i <- gap to n - 1\n      value <- A[i]\n      j <- i\n      while j >= gap and A[j-gap] > value\n        A[j] <- A[j-gap]\n        j <- j-gap\n      A[j] <- value",
        "referenceIds": [
          "source-knuth-taocp-vol3",
          "source-clrs-fourth",
          "source-shell-1959"
        ],
        "content": {
          "ko": {
            "summary": "간격을 줄여 가며 떨어진 원소에 삽입 정렬을 적용하는 제자리 정렬",
            "description": "큰 간격에서 원소를 목표 위치 가까이 이동시킨 뒤 마지막 간격 1의 삽입 정렬로 마무리한다. 성능은 gap sequence에 의존한다.",
            "advantages": [
              "추가 배열 없이 멀리 떨어진 역전을 일찍 제거한다.",
              "명확한 순서 불변식으로 결과를 검증하기 쉽다."
            ],
            "disadvantages": [
              "일반적인 간격 선택에서 안정 정렬이 아니며 정확한 시간 상한이 간격마다 다르다.",
              "입력 분포와 저장 매체에 따라 실제 성능이 크게 달라진다."
            ],
            "useCases": [
              "중간 크기 배열의 단순한 제자리 정렬",
              "정렬된 후속 처리와 인덱스 구축의 전처리"
            ]
          },
          "en": {
            "summary": "An in-place sort applying insertion passes over progressively smaller gaps.",
            "description": "Large gaps move elements near their final positions before a final gap-one insertion pass. Performance depends on the chosen gap sequence.",
            "advantages": [
              "It removes distant inversions early without an auxiliary array.",
              "A clear ordering invariant makes results straightforward to verify."
            ],
            "disadvantages": [
              "It is generally unstable and its time bound varies by gap sequence.",
              "Practical performance varies with the input distribution and storage medium."
            ],
            "useCases": [
              "Simple in-place sorting of medium-sized arrays",
              "Preprocessing for ordered downstream operations and indexing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-bucket-sort",
        "type": "algorithm",
        "name": "Bucket Sort",
        "aliases": [],
        "localizedNames": {
          "en": "Bucket Sort",
          "ko": "버킷 정렬"
        },
        "complexity": {
          "time": {
            "averageUniform": "O(n + k)",
            "worst": "O(n²)"
          },
          "space": "O(n + k)"
        },
        "pseudocode": "BUCKET_SORT(A, bucketCount)\n  create bucketCount empty buckets\n  for value in A\n    index <- map value to a bucket range\n    append value to bucket[index]\n  for each bucket\n    sort bucket locally\n  concatenate buckets in range order",
        "referenceIds": [
          "source-clrs-fourth",
          "source-knuth-taocp-vol3"
        ],
        "content": {
          "ko": {
            "summary": "값 범위를 여러 버킷으로 나눈 뒤 각 버킷을 정렬해 합치는 분배 정렬",
            "description": "키를 범위별 버킷에 분산하고 작은 버킷을 개별 정렬한 뒤 순서대로 이어 붙인다. 균일 분포와 적절한 매핑에서 선형에 가깝다.",
            "advantages": [
              "분포가 고르면 비교 정렬 하한을 피해 평균 선형 성능을 낸다.",
              "명확한 순서 불변식으로 결과를 검증하기 쉽다."
            ],
            "disadvantages": [
              "한 버킷에 값이 몰리면 내부 정렬이 이차 시간으로 퇴화할 수 있다.",
              "입력 분포와 저장 매체에 따라 실제 성능이 크게 달라진다."
            ],
            "useCases": [
              "범위가 알려진 실수·점수·좌표 정렬",
              "정렬된 후속 처리와 인덱스 구축의 전처리"
            ]
          },
          "en": {
            "summary": "A distribution sort that partitions values into ranges, sorts each bucket, and concatenates them.",
            "description": "Keys are scattered into range buckets, each small bucket is sorted, and the buckets are joined in order. Uniform data and a suitable mapping approach linear time.",
            "advantages": [
              "Uniform distributions can approach linear time beyond the comparison-sort bound.",
              "A clear ordering invariant makes results straightforward to verify."
            ],
            "disadvantages": [
              "A skewed distribution can put most values in one quadratic bucket.",
              "Practical performance varies with the input distribution and storage medium."
            ],
            "useCases": [
              "Sorting bounded real values, scores, or coordinates",
              "Preprocessing for ordered downstream operations and indexing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-cycle-sort",
        "type": "algorithm",
        "name": "Cycle Sort",
        "aliases": [],
        "localizedNames": {
          "en": "Cycle Sort",
          "ko": "사이클 정렬"
        },
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)",
          "writes": "O(n)"
        },
        "pseudocode": "CYCLE_SORT(A)\n  for cycleStart <- 0 to n - 2\n    item <- A[cycleStart]\n    position <- count elements smaller than item\n    skip duplicate positions\n    while position != cycleStart\n      swap item with A[position]\n      recompute position for item\n      skip duplicate positions",
        "referenceIds": [
          "source-knuth-taocp-vol3",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "순열의 사이클을 따라 각 원소를 최종 위치에 직접 놓아 쓰기를 줄이는 정렬",
            "description": "현재 원소보다 작은 값의 수로 최종 위치를 계산하고, 교체로 나온 원소를 같은 사이클 안에서 계속 배치한다.",
            "advantages": [
              "원소 쓰기 횟수를 O(n) 수준으로 제한한다.",
              "명확한 순서 불변식으로 결과를 검증하기 쉽다."
            ],
            "disadvantages": [
              "비교 횟수는 O(n²)이고 중복 키 처리가 까다롭다.",
              "입력 분포와 저장 매체에 따라 실제 성능이 크게 달라진다."
            ],
            "useCases": [
              "플래시 메모리처럼 쓰기 비용이 큰 저장장치",
              "정렬된 후속 처리와 인덱스 구축의 전처리"
            ]
          },
          "en": {
            "summary": "A sort that follows permutation cycles to place each value directly in its final position with few writes.",
            "description": "It counts smaller values to determine the final position and continues placing each displaced value around the same cycle.",
            "advantages": [
              "It limits element writes to O(n)-scale work.",
              "A clear ordering invariant makes results straightforward to verify."
            ],
            "disadvantages": [
              "It performs O(n²) comparisons and duplicate-key handling is subtle.",
              "Practical performance varies with the input distribution and storage medium."
            ],
            "useCases": [
              "Storage media where writes are substantially more expensive than reads",
              "Preprocessing for ordered downstream operations and indexing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-external-merge-sort",
        "type": "algorithm",
        "name": "External Merge Sort",
        "aliases": [],
        "localizedNames": {
          "en": "External Merge Sort",
          "ko": "외부 병합 정렬"
        },
        "complexity": {
          "time": {
            "io": "O((N/B) log_(M/B)(N/B)) block transfers"
          },
          "space": "O(M) working memory"
        },
        "pseudocode": "EXTERNAL_MERGE_SORT(stream, memoryLimit)\n  read chunks that fit in memory\n  sort each chunk and write a run\n  while more than one run remains\n    open as many runs as memory allows\n    merge their smallest buffered items\n    write one larger run\n  return the final run",
        "referenceIds": [
          "source-knuth-taocp-vol3",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "메모리보다 큰 데이터를 정렬된 run으로 만든 뒤 다방향 병합하는 외부 정렬",
            "description": "입력을 메모리에 맞는 청크로 나누어 정렬하고 디스크에 기록한 다음, 버퍼와 최소 선택 구조로 여러 run을 반복 병합한다.",
            "advantages": [
              "순차 I/O를 중심으로 설계되어 대용량 데이터를 제한된 메모리에서 처리한다.",
              "명확한 순서 불변식으로 결과를 검증하기 쉽다."
            ],
            "disadvantages": [
              "임시 저장 공간과 여러 번의 디스크 읽기·쓰기가 필요하다.",
              "입력 분포와 저장 매체에 따라 실제 성능이 크게 달라진다."
            ],
            "useCases": [
              "데이터베이스 정렬과 대규모 로그 처리",
              "정렬된 후속 처리와 인덱스 구축의 전처리"
            ]
          },
          "en": {
            "summary": "An external-memory sort that creates sorted runs and repeatedly performs multiway merging.",
            "description": "It sorts memory-sized chunks to disk, then merges many runs using buffers and a minimum-selection structure.",
            "advantages": [
              "Sequential I/O lets it process data far larger than memory.",
              "A clear ordering invariant makes results straightforward to verify."
            ],
            "disadvantages": [
              "It requires temporary storage and multiple passes of disk reads and writes.",
              "Practical performance varies with the input distribution and storage medium."
            ],
            "useCases": [
              "Database sorting and large-scale log processing",
              "Preprocessing for ordered downstream operations and indexing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-fibonacci-search",
        "type": "algorithm",
        "name": "Fibonacci Search",
        "aliases": [],
        "localizedNames": {
          "en": "Fibonacci Search",
          "ko": "피보나치 탐색"
        },
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": "FIBONACCI_SEARCH(A, target)\n  find smallest Fibonacci number >= n\n  offset <- -1\n  while current Fibonacci number > 1\n    probe <- min(offset + previousFib, n-1)\n    compare A[probe] with target\n    discard one Fibonacci-sized range\n  check the final remaining position",
        "referenceIds": [
          "source-knuth-taocp-vol3",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "피보나치 수 비율로 정렬 배열의 탐색 범위를 줄이는 알고리즘",
            "description": "배열 길이를 덮는 피보나치 수를 만든 뒤 덧셈 기반 위치를 확인하고, 비교 결과에 따라 인접한 더 작은 피보나치 구간으로 이동한다.",
            "advantages": [
              "나눗셈 없이 덧셈과 뺄셈으로 탐색 위치를 갱신한다.",
              "정렬 또는 구조적 조건을 이용해 불필요한 후보를 건너뛴다."
            ],
            "disadvantages": [
              "일반 메모리 배열에서는 이진 탐색보다 구현이 복잡하고 이점이 작다.",
              "전제 조건이 깨지면 정확도나 성능 보장이 사라진다."
            ],
            "useCases": [
              "나눗셈 비용이 크거나 순차 접근 특성이 있는 정렬 저장소",
              "정렬 컬렉션과 색인의 키 조회"
            ]
          },
          "en": {
            "summary": "A sorted-array search that shrinks the range according to Fibonacci ratios.",
            "description": "It finds a Fibonacci number covering the array, probes using additive offsets, and moves into adjacent smaller Fibonacci ranges after each comparison.",
            "advantages": [
              "Probe positions are updated with addition and subtraction rather than division.",
              "It uses ordering or structure to skip impossible candidates."
            ],
            "disadvantages": [
              "On ordinary memory arrays it is more complex than binary search with little benefit.",
              "Violating its preconditions removes correctness or performance guarantees."
            ],
            "useCases": [
              "Sorted storage where division is costly or access has sequential characteristics",
              "Key lookup in ordered collections and indexes"
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
