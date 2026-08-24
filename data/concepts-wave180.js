(function registerAlgoriaWave180Concepts(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  const rows = [
    ["problem-transitive-closure", "problem", "Transitive Closure", "추이 폐쇄", "그래프에서 도달 가능한 모든 정점 쌍을 구하는 문제", "Finding every reachable ordered pair of vertices in a graph."],
    ["problem-minimum-arborescence", "problem", "Minimum Arborescence", "최소 유향 신장 트리", "지정된 루트에서 뻗는 최소 비용 유향 신장 구조를 찾는 문제", "Finding a minimum-cost rooted spanning arborescence in a directed graph."],
    ["problem-lowest-common-ancestor", "problem", "Lowest Common Ancestor", "최소 공통 조상", "트리에서 두 정점의 가장 가까운 공통 조상을 찾는 문제", "Finding the deepest common ancestor of two tree vertices."],
    ["problem-lcp-array-construction", "problem", "LCP Array Construction", "LCP 배열 구성", "접미사 배열에서 인접 접미사의 최장 공통 접두사 길이를 구하는 문제", "Constructing longest-common-prefix lengths for adjacent suffixes."],
    ["problem-minimal-string-rotation", "problem", "Minimal String Rotation", "최소 문자열 회전", "문자열의 순환 이동 중 사전순 최소 표현을 찾는 문제", "Finding the lexicographically least cyclic rotation of a string."],
    ["problem-polynomial-evaluation", "problem", "Polynomial Evaluation", "다항식 평가", "주어진 점에서 다항식 값을 효율적으로 계산하는 문제", "Efficiently evaluating a polynomial at a given point."],
    ["problem-dominant-eigenpair", "problem", "Dominant Eigenpair", "지배 고유쌍", "행렬의 절댓값이 가장 큰 고유값과 고유벡터를 근사하는 문제", "Approximating the eigenvalue of largest magnitude and its eigenvector."],
    ["problem-line-clipping", "problem", "Line Clipping", "선분 클리핑", "뷰포트 내부에 놓이는 선분 부분만 계산하는 문제", "Computing the portion of a line segment inside a clipping window."],
    ["problem-dimensionality-reduction", "problem", "Dimensionality Reduction", "차원 축소", "중요한 구조를 보존하며 특성 수를 줄이는 문제", "Reducing feature count while retaining important structure."],
    ["technique-gap-reduction", "technique", "Gap Reduction", "간격 축소", "멀리 떨어진 원소 비교 간격을 점차 줄이는 반복 기법", "Iteratively shrinking the distance between compared elements."],
    ["technique-offline-union-find", "technique", "Offline Union-Find", "오프라인 유니온 파인드", "질의를 모아 두고 트리 순회와 분리 집합으로 함께 처리하는 기법", "Answering a batch of queries with traversal and disjoint sets."],
    ["technique-nested-evaluation", "technique", "Nested Evaluation", "중첩 평가", "식을 중첩 곱셈 꼴로 바꾸어 연산 수를 줄이는 기법", "Reducing operations by rewriting an expression as nested multiplication."],
    ["technique-region-coding", "technique", "Region Coding", "영역 코드", "경계 바깥 위치를 비트 코드로 분류해 빠르게 판정하는 기법", "Classifying outside regions with bit codes for fast acceptance or rejection."],
    ["technique-proximal-gradient", "technique", "Proximal Gradient", "근접 경사", "매끄러운 항의 경사 단계와 비매끄러운 항의 근접 단계를 결합하는 기법", "Combining a gradient step on a smooth term with a proximal step."],
    ["technique-accelerated-proximal-gradient", "technique", "Accelerated Proximal Gradient", "가속 근접 경사", "모멘텀을 사용해 근접 경사법의 수렴을 가속하는 기법", "Accelerating proximal gradient iterations with momentum." ]
  ];

  registry.registerPart({
    id: "concepts-wave180",
    entities: rows.map(([id, type, name, nameKo, summaryKo, summaryEn]) => ({
      id, type, name, summary: summaryKo,
      localizedNames: { en: name, ko: nameKo },
      content: { ko: { summary: summaryKo }, en: { summary: summaryEn } }
    }))
  });
})(typeof window !== "undefined" ? window : globalThis);
