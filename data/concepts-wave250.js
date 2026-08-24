(function registerAlgoriaWave250Concepts(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");
  const rows = [
    ["problem-dominator-tree","problem","Dominator Tree","지배자 트리","흐름 그래프에서 각 정점의 지배 관계를 트리로 구성하는 문제"],
    ["problem-elementary-cycle-enumeration","problem","Elementary Cycle Enumeration","기본 순환 열거","방향 그래프의 단순 순환을 중복 없이 모두 찾는 문제"],
    ["problem-string-index-construction","problem","String Index Construction","문자열 인덱스 구축","빠른 문자열 질의를 위한 인덱스 구조를 만드는 문제"],
    ["problem-lyndon-factorization","problem","Lyndon Factorization","린던 분해","문자열을 사전순 성질을 가진 린던 단어 열로 분해하는 문제"],
    ["problem-approximate-string-matching","problem","Approximate String Matching","근사 문자열 매칭","제한된 불일치를 허용해 패턴 위치를 찾는 문제"],
    ["problem-discrete-logarithm","problem","Discrete Logarithm","이산 로그","유한 군에서 거듭제곱 결과로 지수를 복원하는 문제"],
    ["problem-discrete-transform","problem","Discrete Transform","이산 변환","데이터를 구조화된 직교 기저의 계수로 변환하는 문제"],
    ["problem-authenticated-encryption","problem","Authenticated Encryption","인증 암호","기밀성과 무결성을 함께 제공하는 암호문을 만드는 문제"],
    ["problem-public-key-encryption","problem","Public-Key Encryption","공개키 암호화","공개키로 암호화하고 대응 개인키로만 복호화하는 문제"],
    ["problem-secret-sharing","problem","Secret Sharing","비밀 분산","비밀을 임계 수 이상의 조각으로만 복원되도록 나누는 문제"],
    ["problem-key-encapsulation","problem","Key Encapsulation","키 캡슐화","공개키를 사용해 공유 비밀을 캡슐화하고 복원하는 문제"],
    ["problem-integer-compression","problem","Integer Compression","정수 압축","분포를 이용해 정수열을 짧은 비트열로 표현하는 문제"],
    ["problem-quality-mesh-generation","problem","Quality Mesh Generation","고품질 메시 생성","기하 영역을 품질 제약을 만족하는 삼각형 메시로 분할하는 문제"],
    ["problem-bezier-curve-evaluation","problem","Bezier Curve Evaluation","베지어 곡선 평가","제어점과 매개변수에서 베지어 곡선상의 점을 계산하는 문제"],
    ["problem-anomaly-detection","problem","Anomaly Detection","이상 탐지","대부분의 데이터 패턴에서 벗어난 관측치를 찾는 문제"],
    ["problem-black-box-optimization","problem","Black-Box Optimization","블랙박스 최적화","미분 정보 없이 함수 평가만으로 최적점을 찾는 문제"],
    ["problem-constrained-convex-optimization","problem","Constrained Convex Optimization","제약 볼록 최적화","볼록 목적함수를 제약 집합 위에서 최소화하는 문제"],
    ["problem-nonlinear-least-squares","problem","Nonlinear Least Squares","비선형 최소제곱","비선형 잔차의 제곱합을 최소화하는 문제"],
    ["problem-constrained-optimization","problem","Constrained Optimization","제약 최적화","허용 영역의 제약을 만족하며 목적함수를 최적화하는 문제"],
    ["problem-traveling-salesperson","problem","Traveling Salesperson","외판원 문제","모든 도시를 한 번씩 방문하고 돌아오는 최소 비용 순환을 찾는 문제"],
    ["technique-adaptive-heap-ordering","technique","Adaptive Heap Ordering","적응형 힙 순서화","입력의 기존 순서를 활용하면서 힙 구조를 조정하는 기법"],
    ["technique-sorting-network","technique","Sorting Network","정렬 네트워크","입력 값과 무관한 고정 비교·교환 단계로 정렬하는 기법"],
    ["technique-hybrid-selection","technique","Hybrid Selection","하이브리드 선택","빠른 평균 방법과 안전한 최악 보장 방법을 전환하는 기법"],
    ["technique-randomized-contraction","technique","Randomized Contraction","무작위 축약","무작위 간선을 선택해 그래프 정점을 반복 축약하는 기법"],
    ["technique-module-lattice","technique","Module-Lattice Cryptography","모듈 격자 암호","모듈 격자 문제의 계산 난이도를 사용하는 암호 기법"],
    ["technique-population-search","technique","Population Search","개체군 탐색","여러 후보 해를 동시에 변화시키며 탐색하는 기법"],
    ["technique-conditional-gradient","technique","Conditional Gradient","조건부 경사","투영 대신 선형 최소화 오라클로 제약 방향을 정하는 기법"],
    ["technique-operator-splitting","technique","Operator Splitting","연산자 분할","복합 문제를 단순한 부분 연산으로 나누어 번갈아 푸는 기법"]
  ];
  registry.registerPart({ id: "concepts-wave250", entities: rows.map(([id,type,name,ko,summary]) => ({
    id,type,name,summary,localizedNames:{en:name,ko},content:{ko:{summary},en:{summary:`A concept for ${name.toLowerCase()} in algorithm design and analysis.`}}
  })) });
})(typeof window !== "undefined" ? window : globalThis);
