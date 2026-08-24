(function registerAlgoriaWave180Foundations(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  function algorithm(spec) {
    const deep = Boolean(spec.code);
    const result = {
      id: spec.id,
      type: "algorithm",
      name: spec.en,
      aliases: spec.aliases || [],
      summary: spec.koSummary,
      description: spec.koDescription,
      complexity: { time: spec.time, space: { auxiliary: spec.space } },
      pseudocode: spec.pseudocode,
      referenceIds: spec.references,
      localizedNames: { en: spec.en, ko: spec.ko },
      quality: { tier: deep ? "deep" : "standard", status: "reviewed" },
      content: {
        ko: {
          summary: spec.koSummary,
          description: spec.koDescription,
          advantages: spec.koAdvantages || ["핵심 아이디어가 명확하다.", "목표 문제에 직접 적용할 수 있다."],
          disadvantages: spec.koDisadvantages || ["입력 조건에 따라 성능이 달라질 수 있다.", "자료 표현과 구현 선택에 주의가 필요하다."],
          useCases: spec.koUses || ["해당 문제의 표준적인 해결 절차", "알고리즘 설계와 비교를 위한 기준 방법"]
        },
        en: {
          summary: spec.enSummary,
          description: spec.enDescription,
          advantages: spec.enAdvantages || ["Its central idea is explicit.", "It directly addresses the target problem."],
          disadvantages: spec.enDisadvantages || ["Performance can depend on input assumptions.", "Representation and implementation choices require care."],
          useCases: spec.enUses || ["A standard procedure for the corresponding problem", "A baseline method for algorithm design and comparison"]
        }
      }
    };
    if (spec.year) result.introduced = { year: spec.year };
    if (spec.authors) result.authors = spec.authors.map((name) => ({ name }));
    if (deep) result.implementations = [{ language: "JavaScript", code: spec.code }];
    return result;
  }

  registry.registerPart({
    id: "algorithms-foundations-wave180",
    entities: [
      algorithm({
        id: "algo-comb-sort", en: "Comb Sort", ko: "콤 정렬", year: 1991, authors: ["Stephen Lacey", "Richard Box"],
        koSummary: "큰 간격의 역순 쌍부터 제거한 뒤 버블 정렬로 마무리하는 제자리 정렬",
        enSummary: "An in-place sort that removes distant inversions before finishing like bubble sort.",
        koDescription: "배열 길이에서 시작한 간격을 약 1.3으로 나누어 줄이며 떨어진 원소를 비교·교환한다. 간격이 1이 된 뒤 교환이 없어질 때까지 반복한다.",
        enDescription: "It repeatedly divides a gap initially spanning the array by about 1.3, swapping out-of-order elements at that distance, then continues at gap one until no swap occurs.",
        time: { best: "O(n log n)", average: "O(n² / 2^p), gap-dependent", worst: "O(n²)" }, space: "O(1)",
        pseudocode: "gap <- n; swapped <- true\nwhile gap > 1 or swapped\n  gap <- max(1, floor(gap / 1.3))\n  swapped <- false\n  for i <- 0 to n-gap-1\n    if A[i] > A[i+gap]: swap; swapped <- true",
        references: ["source-comb-sort-1991", "source-nist-bubble-sort", "source-clrs-fourth"],
        code: "function combSort(a){let gap=a.length,swapped=true;while(gap>1||swapped){gap=Math.max(1,Math.floor(gap/1.3));swapped=false;for(let i=0;i+gap<a.length;i++){if(a[i]>a[i+gap]){[a[i],a[i+gap]]=[a[i+gap],a[i]];swapped=true;}}}return a;}",
        koAdvantages: ["버블 정렬을 느리게 하는 거북이 원소를 초기에 이동시킨다.", "O(1) 보조 공간을 사용한다."],
        enAdvantages: ["It moves turtle values early instead of waiting for adjacent swaps.", "It uses O(1) auxiliary space."],
        koDisadvantages: ["최악 시간은 여전히 O(n²)이다.", "안정 정렬이 아니다."], enDisadvantages: ["Worst-case time remains O(n²).", "It is not stable."],
        koUses: ["작은 배열의 단순한 제자리 정렬", "버블 정렬의 개선 원리 교육"], enUses: ["Simple in-place sorting of small arrays", "Teaching an improvement over bubble sort"]
      }),
      algorithm({
        id: "algo-floyd-rivest-selection", en: "Floyd-Rivest Selection", ko: "플로이드-리베스트 선택 알고리즘", year: 1975, authors: ["Robert W. Floyd", "Ronald L. Rivest"],
        koSummary: "표본으로 좁힌 구간과 두 경계를 이용해 k번째 원소를 기대 선형 시간에 선택하는 알고리즘",
        enSummary: "An expected-linear selection algorithm using sampling and two-sided partition bounds.",
        koDescription: "큰 입력에서 표본 통계로 k번째 원소가 있을 법한 구간을 먼저 줄인 뒤 양방향 분할을 반복한다.",
        enDescription: "For large inputs it estimates a narrow region containing the kth item from a sample, then repeatedly partitions with two bounds.",
        time: { average: "O(n)", worst: "O(n²)" }, space: "O(log n) expected stack", pseudocode: "SELECT(A,left,right,k)\n  narrow a large interval using a sample\n  partition around A[k] with two indices\n  continue only in the side containing k",
        references: ["source-floyd-rivest-1975", "source-clrs-fourth"]
      }),
      algorithm({
        id: "algo-dfs-topological-sort", en: "DFS-Based Topological Sort", ko: "DFS 기반 위상 정렬", year: 1972, authors: ["Robert Tarjan"],
        koSummary: "DFS가 정점을 완료하는 역순으로 방향 비순환 그래프의 위상 순서를 만드는 알고리즘",
        enSummary: "A topological sort that reverses DFS finishing order in a directed acyclic graph.",
        koDescription: "방문 중인 정점으로 되돌아가는 간선을 만나면 순환을 보고하고, 각 정점의 탐색이 끝날 때 스택에 넣어 역 완료 순서를 얻는다.",
        enDescription: "It detects a cycle on an edge to an active vertex and pushes each vertex after exploring its descendants, producing reverse finishing order.",
        time: { typical: "O(V + E)" }, space: "O(V)", pseudocode: "for each unvisited v: visit(v)\nvisit(v): mark active; visit outgoing neighbors; mark done; push v\nreturn reverse finish order",
        references: ["source-clrs-fourth", "source-princeton-directed-graphs", "source-tarjan-1972"],
        code: "function topoSort(graph){const state=new Map(),out=[];function visit(v){if(state.get(v)===1)throw new Error('cycle');if(state.get(v)===2)return;state.set(v,1);for(const w of graph.get(v)||[])visit(w);state.set(v,2);out.push(v);}for(const v of graph.keys())visit(v);return out.reverse();}"
      }),
      algorithm({
        id: "algo-warshall-transitive-closure", en: "Warshall's Transitive Closure", ko: "워셜 추이 폐쇄 알고리즘", year: 1962, authors: ["Stephen Warshall"],
        koSummary: "불리언 인접 행렬을 갱신해 모든 정점 쌍의 도달 가능성을 구하는 동적 계획법",
        enSummary: "A dynamic program that computes all-pairs reachability in a Boolean adjacency matrix.",
        koDescription: "정점 k를 중간 정점으로 허용할 때마다 reach[i][j]를 기존 값 또는 i→k와 k→j의 결합으로 갱신한다.",
        enDescription: "For each newly allowed intermediate vertex k, it updates reach[i][j] with its old value or the conjunction of reach[i][k] and reach[k][j].",
        time: { typical: "O(V³)" }, space: "O(V²)", pseudocode: "reach <- adjacency matrix\nfor k\n  for i\n    for j\n      reach[i][j] <- reach[i][j] or (reach[i][k] and reach[k][j])",
        references: ["source-warshall-1962", "source-clrs-fourth", "source-aho-hopcroft-ullman-graphs"],
        code: "function warshall(matrix){const r=matrix.map(row=>row.map(Boolean));for(let k=0;k<r.length;k++)for(let i=0;i<r.length;i++)for(let j=0;j<r.length;j++)r[i][j]=r[i][j]||(r[i][k]&&r[k][j]);return r;}"
      }),
      algorithm({
        id: "algo-spfa", en: "Shortest Path Faster Algorithm", ko: "최단 경로 고속 알고리즘", aliases: ["SPFA"],
        koSummary: "최근 완화된 정점만 큐에 넣어 Bellman–Ford 완화를 선택적으로 수행하는 최단 경로 알고리즘",
        enSummary: "A queue-driven Bellman–Ford variant that revisits only recently relaxed vertices.",
        koDescription: "거리 값이 줄어든 정점의 바깥 간선만 다시 검사한다. 많은 입력에서 빠르지만 구성된 최악 입력에서는 Bellman–Ford와 같은 O(VE)이다.",
        enDescription: "It rechecks outgoing edges only from vertices whose distances decreased. It is often fast empirically but retains Bellman–Ford's O(VE) worst case.",
        time: { average: "Input-dependent", worst: "O(VE)" }, space: "O(V)", pseudocode: "enqueue source\nwhile queue not empty\n  u <- dequeue\n  relax each edge u->v\n  if v changed and not queued: enqueue v", references: ["source-clrs-fourth", "source-princeton-shortest-paths"]
      }),
      algorithm({
        id: "algo-chu-liu-edmonds", en: "Chu-Liu/Edmonds Algorithm", ko: "추-리우/에드먼즈 알고리즘", year: 1967, authors: ["Jack Edmonds"],
        koSummary: "가중 방향 그래프에서 지정된 루트의 최소 비용 신장 수형도를 찾는 알고리즘",
        enSummary: "An algorithm for a minimum-cost arborescence rooted at a chosen vertex.",
        koDescription: "각 루트 외 정점으로 들어오는 최소 간선을 고르고, 생긴 순환을 축약해 재귀적으로 해결한 뒤 펼친다.",
        enDescription: "It selects a cheapest incoming edge for every non-root vertex, contracts resulting cycles, solves the reduced instance, and expands them.",
        time: { typical: "O(VE) in a basic implementation" }, space: "O(V + E)", pseudocode: "choose minimum incoming edge per non-root vertex\nif no cycle: return edges\ncontract each cycle with adjusted costs\nsolve recursively and expand", references: ["source-edmonds-branchings-1967", "source-clrs-fourth"]
      }),
      algorithm({
        id: "algo-fleury", en: "Fleury's Algorithm", ko: "플뢰리 알고리즘",
        koSummary: "가능하면 다리를 피하며 오일러 트레일을 한 간선씩 구성하는 알고리즘",
        enSummary: "An Euler-trail algorithm that avoids crossing a bridge whenever another unused edge exists.",
        koDescription: "현재 정점에서 사용하지 않은 간선 중 남은 그래프를 끊지 않는 간선을 우선 선택하고 간선을 삭제하며 진행한다.",
        enDescription: "At each vertex it prefers an unused edge that does not disconnect the remaining graph, removes it, and continues.",
        time: { typical: "O(E²) with repeated bridge tests" }, space: "O(V + E)", pseudocode: "start at a valid Euler endpoint\nwhile unused edges remain\n  choose a non-bridge edge unless it is the only choice\n  traverse and remove it", references: ["source-clrs-fourth", "source-aho-hopcroft-ullman-graphs"]
      }),
      algorithm({
        id: "algo-tarjan-offline-lca", en: "Tarjan's Offline LCA", ko: "타잔 오프라인 최소 공통 조상", year: 1979, authors: ["Robert Endre Tarjan"],
        koSummary: "DFS와 분리 집합을 결합해 미리 주어진 최소 공통 조상 질의를 일괄 처리하는 알고리즘",
        enSummary: "An offline lowest-common-ancestor algorithm combining DFS with disjoint sets.",
        koDescription: "자식 서브트리를 처리한 뒤 부모와 합치고 대표의 조상을 기록한다. 질의 상대가 이미 처리되었으면 그 대표의 조상이 답이다.",
        enDescription: "After a child subtree is processed it unions child and parent and records the ancestor of the representative; a query is answered when its other endpoint is finished.",
        time: { typical: "O((V + Q) α(V))" }, space: "O(V + Q)", pseudocode: "DFS(u)\n  make-set(u); ancestor[find(u)] <- u\n  for child v: DFS(v); union(u,v); ancestor[find(u)] <- u\n  mark u done; answer queries whose other endpoint is done", references: ["source-tarjan-path-compression-1979", "source-clrs-fourth"]
      }),
      algorithm({
        id: "algo-kasai-lcp", en: "Kasai's LCP Algorithm", ko: "카사이 LCP 배열 알고리즘", year: 2001, authors: ["Toru Kasai", "Gunho Lee", "Hiroki Arimura", "Setsuo Arikawa", "Kunsoo Park"],
        koSummary: "접미사 배열과 역순위 배열로 LCP 배열을 선형 시간에 구성하는 알고리즘",
        enSummary: "A linear-time algorithm for constructing an LCP array from a suffix array.",
        koDescription: "텍스트 위치 순서로 접미사를 보며 이전에 확인한 공통 접두사 길이를 한 글자 줄여 재사용한다.",
        enDescription: "It scans suffixes in text order and reuses the previous match length after decrementing it by at most one.",
        time: { typical: "O(n)" }, space: "O(n)", pseudocode: "build inverse rank\nk <- 0\nfor suffix i in text order\n  j <- previous suffix in array\n  extend k while characters match\n  LCP[rank[i]] <- k; k <- max(0,k-1)", references: ["source-kasai-lcp-2001", "source-gusfield-strings"]
      }),
      algorithm({
        id: "algo-horspool-string-matching", en: "Boyer-Moore-Horspool", ko: "보이어-무어-호스풀 문자열 매칭", aliases: ["Horspool String Matching"], year: 1980, authors: ["R. Nigel Horspool"],
        koSummary: "패턴의 마지막 문자에 맞춘 단일 이동 표로 비교 창을 건너뛰는 문자열 탐색",
        enSummary: "A string matcher using one bad-character shift table aligned to the pattern's last position.",
        koDescription: "창 안에서는 오른쪽부터 비교하고 실패하면 현재 창의 마지막 텍스트 문자에 해당하는 이동량만큼 건너뛴다.",
        enDescription: "It compares a window right-to-left and, after failure, shifts according to the text character aligned with the pattern's final position.",
        time: { average: "Sublinear comparisons on typical text", worst: "O(nm)" }, space: "O(|Σ|)", pseudocode: "build shift table from pattern except last char\nwhile window fits\n  compare pattern from right to left\n  if all match: report\n  shift by table[text[window end]]", references: ["source-horspool-1980", "source-gusfield-strings"]
      }),
      algorithm({
        id: "algo-hirschberg-sequence-alignment", en: "Hirschberg's Algorithm", ko: "히르슈베르크 서열 정렬 알고리즘", aliases: ["Hirschberg Sequence Alignment"], year: 1975, authors: ["Daniel S. Hirschberg"],
        koSummary: "분할 정복으로 전역 서열 정렬을 선형 공간에 복원하는 알고리즘",
        enSummary: "A divide-and-conquer algorithm that reconstructs a global sequence alignment in linear space.",
        koDescription: "한 서열을 반으로 나누고 앞·뒤 방향 DP 점수만 저장해 최적 분할 지점을 찾은 뒤 두 부분을 재귀 정렬한다.",
        enDescription: "It halves one sequence, uses forward and reverse DP score rows to locate an optimal split, and recursively aligns both halves.",
        time: { typical: "O(nm)" }, space: "O(min(n,m))", pseudocode: "split X at midpoint\ncompute last DP rows forward and backward\nchoose split of Y minimizing combined cost\nrecurse on the two subproblems", references: ["source-hirschberg-1975", "source-gusfield-strings"]
      }),
      algorithm({
        id: "algo-booth-minimum-rotation", en: "Booth's Minimum Rotation", ko: "부스 최소 문자열 회전 알고리즘", year: 1980, authors: ["Kellogg S. Booth"],
        koSummary: "문자열의 사전순 최소 순환 이동 시작점을 선형 시간에 찾는 알고리즘",
        enSummary: "A linear-time algorithm for locating a string's lexicographically minimum cyclic rotation.",
        koDescription: "문자열을 두 번 이어 붙인 뒤 두 후보 시작점을 비교하고 불일치로 열등함이 드러난 후보 구간을 한꺼번에 건너뛴다.",
        enDescription: "It scans the doubled string with two candidate starts and skips an entire losing candidate range after each mismatch.",
        time: { typical: "O(n)" }, space: "O(n) for the doubled string", pseudocode: "s <- text + text; i <- 0; j <- 1\nwhile i,j < n\n  compare rotations from i and j\n  advance the losing start past the mismatch\nreturn min(i,j)", references: ["source-booth-1980", "source-gusfield-strings"]
      }),
      algorithm({
        id: "algo-bisection-root-finding", en: "Bisection Method", ko: "이분법", aliases: ["Bisection Root Finding"], year: 1817, authors: ["Bernard Bolzano"],
        koSummary: "부호가 다른 구간을 반복해서 반으로 나누어 연속 함수의 근을 찾는 방법",
        enSummary: "A bracketing method that repeatedly halves a sign-changing interval to locate a root.",
        koDescription: "f(a)와 f(b)의 부호가 다른 연속 함수에서 중점의 부호를 검사해 근을 포함하는 절반만 유지한다. 수렴은 느리지만 보장된다.",
        enDescription: "For a continuous function with opposite signs at a and b, it keeps the half interval whose endpoints still bracket a root. Convergence is slow but guaranteed.",
        time: { typical: "O(log((b-a)/ε)) iterations" }, space: "O(1)", pseudocode: "require f(a)f(b) <= 0\nwhile b-a > tolerance\n  m <- (a+b)/2\n  keep [a,m] or [m,b] with a sign change\nreturn midpoint",
        references: ["source-nist-bisection", "source-burden-faires-numerical-analysis", "source-dekker-root-1969"],
        code: "function bisection(f,a,b,tol=1e-9){let fa=f(a),fb=f(b);if(fa*fb>0)throw new Error('root is not bracketed');while(b-a>tol){const m=(a+b)/2,fm=f(m);if(fm===0)return m;if(fa*fm<=0){b=m;fb=fm;}else{a=m;fa=fm;}}return(a+b)/2;}"
      }),
      algorithm({
        id: "algo-secant-root-finding", en: "Secant Method", ko: "할선법",
        koSummary: "두 함수값을 잇는 할선의 x절편으로 근을 반복 근사하는 방법",
        enSummary: "A root finder that iterates using the x-intercept of a secant through two function values.",
        koDescription: "도함수 대신 최근 두 점의 기울기를 사용해 다음 근사값을 계산한다. 이분법보다 빠를 수 있지만 구간 보장은 없다.",
        enDescription: "It replaces a derivative with the slope through the two latest points. It can converge faster than bisection but does not preserve a bracket.",
        time: { convergence: "Superlinear, order about 1.618 near a simple root" }, space: "O(1)", pseudocode: "repeat\n  x2 <- x1 - f(x1)(x1-x0)/(f(x1)-f(x0))\n  x0 <- x1; x1 <- x2\nuntil converged", references: ["source-burden-faires-numerical-analysis", "source-nocedal-wright-numerical-optimization"]
      }),
      algorithm({
        id: "algo-horner", en: "Horner's Method", ko: "호너법", year: 1819, authors: ["William George Horner"],
        koSummary: "다항식을 중첩 곱셈 형태로 평가해 곱셈 횟수를 최소화하는 알고리즘",
        enSummary: "An algorithm that evaluates a polynomial as nested multiplication with minimal arithmetic.",
        koDescription: "최고차항 계수에서 시작해 현재 누적값에 x를 곱하고 다음 계수를 더한다. n차 다항식을 n번의 곱셈과 n번의 덧셈으로 계산한다.",
        enDescription: "Starting from the leading coefficient, it multiplies the accumulator by x and adds the next coefficient, evaluating degree n with n multiplications and n additions.",
        time: { typical: "O(n)" }, space: "O(1)", pseudocode: "value <- coefficients[0]\nfor each remaining coefficient c\n  value <- value*x + c\nreturn value",
        references: ["source-horner-1819", "source-modern-computer-algebra-third", "source-burden-faires-numerical-analysis"],
        code: "function horner(coefficients,x){let value=0;for(const coefficient of coefficients)value=value*x+coefficient;return value;}"
      })
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
