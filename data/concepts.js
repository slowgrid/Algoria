(function registerAlgoriaConcepts(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    "id": "concepts",
    "entities": [
      {
        "id": "problem-sorting",
        "type": "problem",
        "name": "Sorting",
        "summary": "원소를 정의된 순서로 배열하는 문제",
        "localizedNames": {"en":"Sorting","ko":"정렬"},
        "content": {
          "ko": {"summary":"원소를 정의된 순서로 배열하는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-shortest-path",
        "type": "problem",
        "name": "Shortest Path",
        "summary": "그래프에서 비용이 최소인 경로를 찾는 문제",
        "localizedNames": {"en":"Shortest Path","ko":"최단 경로"},
        "content": {
          "ko": {"summary":"그래프에서 비용이 최소인 경로를 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "technique-greedy",
        "type": "technique",
        "name": "Greedy",
        "aliases": ["Greedy Method"],
        "summary": "각 단계에서 현재 가장 유리한 선택을 하는 설계 기법",
        "localizedNames": {"en":"Greedy","ko":"그리디"},
        "content": {
          "ko": {"summary":"각 단계에서 현재 가장 유리한 선택을 하는 설계 기법"},
          "en": {}
        }
      },
      {
        "id": "technique-divide-and-conquer",
        "type": "technique",
        "name": "Divide and Conquer",
        "summary": "문제를 작은 부분 문제로 나누고 결과를 결합하는 설계 기법",
        "localizedNames": {"en":"Divide and Conquer","ko":"분할 정복"},
        "content": {
          "ko": {"summary":"문제를 작은 부분 문제로 나누고 결과를 결합하는 설계 기법"},
          "en": {}
        }
      },
      {
        "id": "ds-heap",
        "type": "data_structure",
        "name": "Heap",
        "summary": "우선순위가 가장 높은 원소를 효율적으로 찾는 트리 기반 자료구조",
        "localizedNames": {"en":"Heap","ko":"힙"},
        "content": {
          "ko": {"summary":"우선순위가 가장 높은 원소를 효율적으로 찾는 트리 기반 자료구조"},
          "en": {}
        }
      },
      {
        "id": "domain-graph",
        "type": "domain",
        "name": "Graph",
        "summary": "정점과 간선으로 관계를 표현하는 알고리즘 분야",
        "localizedNames": {"en":"Graph","ko":"그래프"},
        "content": {
          "ko": {"summary":"정점과 간선으로 관계를 표현하는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "problem-searching",
        "type": "problem",
        "name": "Searching",
        "summary": "데이터에서 목표 원소나 위치를 찾는 문제",
        "localizedNames": {"en":"Searching","ko":"탐색"},
        "content": {
          "ko": {"summary":"데이터에서 목표 원소나 위치를 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-selection",
        "type": "problem",
        "name": "Selection",
        "summary": "정렬하지 않고 순서상 k번째 원소를 찾는 문제",
        "localizedNames": {"en":"Selection","ko":"선택"},
        "content": {
          "ko": {"summary":"정렬하지 않고 순서상 k번째 원소를 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-string-matching",
        "type": "problem",
        "name": "String Matching",
        "summary": "텍스트에서 하나 이상의 패턴 위치를 찾는 문제",
        "localizedNames": {"en":"String Matching","ko":"문자열 매칭"},
        "content": {
          "ko": {"summary":"텍스트에서 하나 이상의 패턴 위치를 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-mst",
        "type": "problem",
        "name": "Minimum Spanning Tree",
        "aliases": ["MST"],
        "summary": "모든 정점을 최소 가중치로 연결하는 트리를 찾는 문제",
        "localizedNames": {"en":"Minimum Spanning Tree","ko":"최소 신장 트리"},
        "content": {
          "ko": {"summary":"모든 정점을 최소 가중치로 연결하는 트리를 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-max-flow",
        "type": "problem",
        "name": "Maximum Flow",
        "summary": "용량 제한 네트워크에서 가능한 최대 유량을 찾는 문제",
        "localizedNames": {"en":"Maximum Flow","ko":"최대 유량"},
        "content": {
          "ko": {"summary":"용량 제한 네트워크에서 가능한 최대 유량을 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-graph-traversal",
        "type": "problem",
        "name": "Graph Traversal",
        "summary": "그래프의 정점과 간선을 체계적으로 방문하는 문제",
        "localizedNames": {"en":"Graph Traversal","ko":"그래프 순회"},
        "content": {
          "ko": {"summary":"그래프의 정점과 간선을 체계적으로 방문하는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-topological-ordering",
        "type": "problem",
        "name": "Topological Ordering",
        "summary": "방향 비순환 그래프의 선후 순서를 구하는 문제",
        "localizedNames": {"en":"Topological Ordering","ko":"위상 순서"},
        "content": {
          "ko": {"summary":"방향 비순환 그래프의 선후 순서를 구하는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-integer-multiplication",
        "type": "problem",
        "name": "Integer Multiplication",
        "summary": "큰 정수의 곱을 효율적으로 계산하는 문제",
        "localizedNames": {"en":"Integer Multiplication","ko":"큰 정수 곱셈"},
        "content": {
          "ko": {"summary":"큰 정수의 곱을 효율적으로 계산하는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-public-key-crypto",
        "type": "problem",
        "name": "Public-Key Cryptography",
        "summary": "서로 다른 공개키와 개인키로 암호화와 서명을 수행하는 문제",
        "localizedNames": {"en":"Public-Key Cryptography","ko":"공개키 암호"},
        "content": {
          "ko": {"summary":"서로 다른 공개키와 개인키로 암호화와 서명을 수행하는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-lossless-compression",
        "type": "problem",
        "name": "Lossless Compression",
        "summary": "정보 손실 없이 데이터 표현 크기를 줄이는 문제",
        "localizedNames": {"en":"Lossless Compression","ko":"무손실 압축"},
        "content": {
          "ko": {"summary":"정보 손실 없이 데이터 표현 크기를 줄이는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-convex-hull",
        "type": "problem",
        "name": "Convex Hull",
        "summary": "점 집합을 포함하는 최소 볼록 다각형을 찾는 문제",
        "localizedNames": {"en":"Convex Hull","ko":"볼록 껍질"},
        "content": {
          "ko": {"summary":"점 집합을 포함하는 최소 볼록 다각형을 찾는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-clustering",
        "type": "problem",
        "name": "Clustering",
        "summary": "유사한 데이터들을 같은 그룹으로 나누는 문제",
        "localizedNames": {"en":"Clustering","ko":"군집화"},
        "content": {
          "ko": {"summary":"유사한 데이터들을 같은 그룹으로 나누는 문제"},
          "en": {}
        }
      },
      {
        "id": "problem-linear-optimization",
        "type": "problem",
        "name": "Linear Optimization",
        "aliases": ["Linear Programming"],
        "summary": "선형 제약 아래 선형 목적함수를 최적화하는 문제",
        "localizedNames": {"en":"Linear Optimization","ko":"선형 최적화"},
        "content": {
          "ko": {"summary":"선형 제약 아래 선형 목적함수를 최적화하는 문제"},
          "en": {}
        }
      },
      {
        "id": "technique-dynamic-programming",
        "type": "technique",
        "name": "Dynamic Programming",
        "aliases": ["DP"],
        "summary": "겹치는 부분 문제의 결과를 저장하고 재사용하는 설계 기법",
        "localizedNames": {"en":"Dynamic Programming","ko":"동적 계획법"},
        "content": {
          "ko": {"summary":"겹치는 부분 문제의 결과를 저장하고 재사용하는 설계 기법"},
          "en": {}
        }
      },
      {
        "id": "technique-randomized",
        "type": "technique",
        "name": "Randomized Algorithm",
        "summary": "무작위 선택을 계산 과정에 사용하는 설계 기법",
        "localizedNames": {"en":"Randomized Algorithm","ko":"무작위 알고리즘"},
        "content": {
          "ko": {"summary":"무작위 선택을 계산 과정에 사용하는 설계 기법"},
          "en": {}
        }
      },
      {
        "id": "technique-brute-force",
        "type": "technique",
        "name": "Brute Force",
        "summary": "가능한 후보를 직접 검사하는 단순하고 일반적인 접근법",
        "localizedNames": {"en":"Brute Force","ko":"완전 탐색"},
        "content": {
          "ko": {"summary":"가능한 후보를 직접 검사하는 단순하고 일반적인 접근법"},
          "en": {}
        }
      },
      {
        "id": "technique-decrease-and-conquer",
        "type": "technique",
        "name": "Decrease and Conquer",
        "summary": "문제를 더 작은 하나의 부분 문제로 줄여 해결하는 기법",
        "localizedNames": {"en":"Decrease and Conquer","ko":"축소 정복"},
        "content": {
          "ko": {"summary":"문제를 더 작은 하나의 부분 문제로 줄여 해결하는 기법"},
          "en": {}
        }
      },
      {
        "id": "technique-hashing",
        "type": "technique",
        "name": "Hashing",
        "summary": "값을 고정 범위의 해시로 변환해 비교와 탐색을 가속하는 기법",
        "localizedNames": {"en":"Hashing","ko":"해싱"},
        "content": {
          "ko": {"summary":"값을 고정 범위의 해시로 변환해 비교와 탐색을 가속하는 기법"},
          "en": {}
        }
      },
      {
        "id": "technique-heuristic-search",
        "type": "technique",
        "name": "Heuristic Search",
        "summary": "목표까지의 추정 비용으로 탐색 순서를 안내하는 기법",
        "localizedNames": {"en":"Heuristic Search","ko":"휴리스틱 탐색"},
        "content": {
          "ko": {"summary":"목표까지의 추정 비용으로 탐색 순서를 안내하는 기법"},
          "en": {}
        }
      },
      {
        "id": "ds-queue",
        "type": "data_structure",
        "name": "Queue",
        "summary": "먼저 들어온 원소를 먼저 꺼내는 FIFO 자료구조",
        "localizedNames": {"en":"Queue","ko":"큐"},
        "content": {
          "ko": {"summary":"먼저 들어온 원소를 먼저 꺼내는 FIFO 자료구조"},
          "en": {}
        }
      },
      {
        "id": "ds-stack",
        "type": "data_structure",
        "name": "Stack",
        "summary": "나중에 들어온 원소를 먼저 꺼내는 LIFO 자료구조",
        "localizedNames": {"en":"Stack","ko":"스택"},
        "content": {
          "ko": {"summary":"나중에 들어온 원소를 먼저 꺼내는 LIFO 자료구조"},
          "en": {}
        }
      },
      {
        "id": "ds-union-find",
        "type": "data_structure",
        "name": "Union-Find",
        "aliases": ["Disjoint Set Union","DSU"],
        "summary": "서로소 집합의 합치기와 대표 찾기를 지원하는 자료구조",
        "localizedNames": {"en":"Union-Find","ko":"유니온 파인드"},
        "content": {
          "ko": {"summary":"서로소 집합의 합치기와 대표 찾기를 지원하는 자료구조"},
          "en": {}
        }
      },
      {
        "id": "ds-hash-table",
        "type": "data_structure",
        "name": "Hash Table",
        "summary": "해시값을 이용해 키와 값을 저장하고 조회하는 자료구조",
        "localizedNames": {"en":"Hash Table","ko":"해시 테이블"},
        "content": {
          "ko": {"summary":"해시값을 이용해 키와 값을 저장하고 조회하는 자료구조"},
          "en": {}
        }
      },
      {
        "id": "ds-trie",
        "type": "data_structure",
        "name": "Trie",
        "summary": "문자열의 접두사를 공유해 저장하는 트리 자료구조",
        "localizedNames": {"en":"Trie","ko":"트라이"},
        "content": {
          "ko": {"summary":"문자열의 접두사를 공유해 저장하는 트리 자료구조"},
          "en": {}
        }
      },
      {
        "id": "ds-array",
        "type": "data_structure",
        "name": "Array",
        "summary": "같은 종류의 원소를 연속적인 위치로 다루는 자료구조",
        "localizedNames": {"en":"Array","ko":"배열"},
        "content": {
          "ko": {"summary":"같은 종류의 원소를 연속적인 위치로 다루는 자료구조"},
          "en": {}
        }
      },
      {
        "id": "domain-string",
        "type": "domain",
        "name": "String Processing",
        "summary": "텍스트와 패턴을 처리하는 알고리즘 분야",
        "localizedNames": {"en":"String Processing","ko":"문자열 처리"},
        "content": {
          "ko": {"summary":"텍스트와 패턴을 처리하는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-mathematics",
        "type": "domain",
        "name": "Mathematics",
        "summary": "수론과 수치 계산을 포함하는 알고리즘 분야",
        "localizedNames": {"en":"Mathematics","ko":"수학"},
        "content": {
          "ko": {"summary":"수론과 수치 계산을 포함하는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-cryptography",
        "type": "domain",
        "name": "Cryptography",
        "summary": "기밀성, 무결성, 인증을 위한 알고리즘 분야",
        "localizedNames": {"en":"Cryptography","ko":"암호학"},
        "content": {
          "ko": {"summary":"기밀성, 무결성, 인증을 위한 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-compression",
        "type": "domain",
        "name": "Compression",
        "summary": "데이터 표현 크기를 줄이는 알고리즘 분야",
        "localizedNames": {"en":"Compression","ko":"압축"},
        "content": {
          "ko": {"summary":"데이터 표현 크기를 줄이는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-computational-geometry",
        "type": "domain",
        "name": "Computational Geometry",
        "summary": "기하 객체와 공간 관계를 계산하는 알고리즘 분야",
        "localizedNames": {"en":"Computational Geometry","ko":"계산기하학"},
        "content": {
          "ko": {"summary":"기하 객체와 공간 관계를 계산하는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-machine-learning",
        "type": "domain",
        "name": "Machine Learning",
        "summary": "데이터에서 패턴과 모델을 학습하는 알고리즘 분야",
        "localizedNames": {"en":"Machine Learning","ko":"머신러닝"},
        "content": {
          "ko": {"summary":"데이터에서 패턴과 모델을 학습하는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "domain-optimization",
        "type": "domain",
        "name": "Optimization",
        "summary": "제약 아래 최선의 해를 찾는 알고리즘 분야",
        "localizedNames": {"en":"Optimization","ko":"최적화"},
        "content": {
          "ko": {"summary":"제약 아래 최선의 해를 찾는 알고리즘 분야"},
          "en": {}
        }
      },
      {
        "id": "technique-preprocessing",
        "type": "technique",
        "name": "Preprocessing",
        "summary": "입력의 보조 정보를 미리 계산해 이후 연산을 줄이는 기법",
        "content": {
          "ko": {"summary":"입력의 보조 정보를 미리 계산해 이후 연산을 줄이는 기법"},
          "en": {"summary":"A technique that precomputes auxiliary information to reduce later work."}
        },
        "localizedNames": {"en":"Preprocessing","ko":"전처리"}
      },
      {
        "id": "technique-modular-arithmetic",
        "type": "technique",
        "name": "Modular Arithmetic",
        "summary": "나머지 연산 체계에서 정수 계산을 수행하는 기법",
        "content": {
          "ko": {"summary":"나머지 연산 체계에서 정수 계산을 수행하는 기법"},
          "en": {"summary":"Integer computation in a residue class system."}
        },
        "localizedNames": {"en":"Modular Arithmetic","ko":"모듈러 산술"}
      },
      {
        "id": "domain-data-processing",
        "type": "domain",
        "name": "Data Processing",
        "summary": "데이터의 정렬, 탐색, 변환을 다루는 알고리즘 분야",
        "content": {
          "ko": {"summary":"데이터의 정렬, 탐색, 변환을 다루는 알고리즘 분야"},
          "en": {"summary":"The algorithmic domain of ordering, searching, and transforming data."}
        },
        "localizedNames": {"en":"Data Processing","ko":"데이터 처리"}
      },
      {
        "id": "technique-distribution",
        "type": "technique",
        "name": "Distribution",
        "summary": "비교 대신 키의 범위나 자릿수에 따라 원소를 분배하는 기법",
        "content": {
          "ko": {"summary":"비교 대신 키의 범위나 자릿수에 따라 원소를 분배하는 기법"},
          "en": {"summary":"A technique that distributes items by key ranges or digits instead of comparing pairs."}
        },
        "localizedNames": {"en":"Distribution","ko":"분배"}
      },
      {
        "id": "technique-adaptive",
        "type": "technique",
        "name": "Adaptive Algorithm",
        "summary": "입력에 이미 존재하는 구조를 감지해 작업량을 줄이는 기법",
        "content": {
          "ko": {"summary":"입력에 이미 존재하는 구조를 감지해 작업량을 줄이는 기법"},
          "en": {"summary":"A technique that detects existing input structure and reduces work accordingly."}
        },
        "localizedNames": {"en":"Adaptive Algorithm","ko":"적응형 알고리즘"}
      },
      {
        "id": "problem-strongly-connected-components",
        "type": "problem",
        "name": "Strongly Connected Components",
        "summary": "방향 그래프를 서로 도달 가능한 정점들의 최대 집합으로 분해하는 문제",
        "content": {
          "ko": {"summary":"방향 그래프를 서로 도달 가능한 정점들의 최대 집합으로 분해하는 문제"},
          "en": {"summary":"The problem of partitioning a directed graph into maximal mutually reachable vertex sets."}
        },
        "localizedNames": {"en":"Strongly Connected Components","ko":"강결합 요소"}
      },
      {
        "id": "problem-greatest-common-divisor",
        "type": "problem",
        "name": "Greatest Common Divisor",
        "aliases": ["GCD"],
        "summary": "둘 이상의 정수를 모두 나누는 가장 큰 양의 정수를 구하는 문제",
        "content": {
          "ko": {"summary":"둘 이상의 정수를 모두 나누는 가장 큰 양의 정수를 구하는 문제"},
          "en": {"summary":"The problem of finding the largest positive integer that divides each given integer."}
        },
        "localizedNames": {"en":"Greatest Common Divisor","ko":"최대공약수"}
      },
      {
        "id": "problem-prime-enumeration",
        "type": "problem",
        "name": "Prime Enumeration",
        "summary": "주어진 상한 이하의 모든 소수를 찾는 문제",
        "content": {
          "ko": {"summary":"주어진 상한 이하의 모든 소수를 찾는 문제"},
          "en": {"summary":"The problem of finding every prime number up to a given bound."}
        },
        "localizedNames": {"en":"Prime Enumeration","ko":"소수 열거"}
      },
      {
        "id": "problem-discrete-fourier-transform",
        "type": "problem",
        "name": "Discrete Fourier Transform",
        "aliases": ["DFT"],
        "summary": "유한한 표본열을 주파수 성분 표현으로 변환하는 문제",
        "content": {
          "ko": {"summary":"유한한 표본열을 주파수 성분 표현으로 변환하는 문제"},
          "en": {"summary":"The problem of transforming a finite sample sequence into its frequency-component representation."}
        },
        "localizedNames": {"en":"Discrete Fourier Transform","ko":"이산 푸리에 변환"}
      },
      {
        "id": "problem-symmetric-key-encryption",
        "type": "problem",
        "name": "Symmetric-Key Encryption",
        "summary": "같은 비밀키 계열로 평문을 암호화하고 복호화하는 문제",
        "content": {
          "ko": {"summary":"같은 비밀키 계열로 평문을 암호화하고 복호화하는 문제"},
          "en": {"summary":"The problem of encrypting and decrypting data with the same secret-key material."}
        },
        "localizedNames": {"en":"Symmetric-Key Encryption","ko":"대칭키 암호화"}
      },
      {
        "id": "problem-key-agreement",
        "type": "problem",
        "name": "Key Agreement",
        "summary": "통신 당사자들이 공개 채널에서 공유 비밀을 합의하는 문제",
        "content": {
          "ko": {"summary":"통신 당사자들이 공개 채널에서 공유 비밀을 합의하는 문제"},
          "en": {"summary":"The problem of establishing shared secret material between parties over a public channel."}
        },
        "localizedNames": {"en":"Key Agreement","ko":"키 합의"}
      },
      {
        "id": "problem-cryptographic-hashing",
        "type": "problem",
        "name": "Cryptographic Hashing",
        "summary": "임의 길이 메시지를 보안 성질을 갖는 고정 길이 다이제스트로 변환하는 문제",
        "content": {
          "ko": {"summary":"임의 길이 메시지를 보안 성질을 갖는 고정 길이 다이제스트로 변환하는 문제"},
          "en": {"summary":"The problem of mapping arbitrary-length messages to fixed-length digests with cryptographic properties."}
        },
        "localizedNames": {"en":"Cryptographic Hashing","ko":"암호학적 해싱"}
      },
      {
        "id": "technique-substitution-permutation-network",
        "type": "technique",
        "name": "Substitution–Permutation Network",
        "aliases": ["SPN"],
        "summary": "치환과 선형 혼합을 여러 라운드 반복하는 블록 암호 설계 기법",
        "content": {
          "ko": {"summary":"치환과 선형 혼합을 여러 라운드 반복하는 블록 암호 설계 기법"},
          "en": {"summary":"A block-cipher design technique that repeats substitution and linear mixing across rounds."}
        },
        "localizedNames": {"en":"Substitution–Permutation Network","ko":"치환–순열 네트워크"}
      },
      {
        "id": "technique-merkle-damgard",
        "type": "technique",
        "name": "Merkle–Damgård Construction",
        "summary": "고정 크기 압축 함수를 메시지 블록에 반복 적용해 해시를 구성하는 기법",
        "content": {
          "ko": {"summary":"고정 크기 압축 함수를 메시지 블록에 반복 적용해 해시를 구성하는 기법"},
          "en": {"summary":"A technique that builds a hash by iterating a fixed-size compression function over message blocks."}
        },
        "localizedNames": {"en":"Merkle–Damgård Construction","ko":"머클–담고르 구성"}
      },
      {
        "id": "technique-dictionary-coding",
        "type": "technique",
        "name": "Dictionary Coding",
        "summary": "반복되는 문자열을 사전 항목의 코드로 치환하는 압축 기법",
        "content": {
          "ko": {"summary":"반복되는 문자열을 사전 항목의 코드로 치환하는 압축 기법"},
          "en": {"summary":"A compression technique that replaces recurring strings with dictionary-entry codes."}
        },
        "localizedNames": {"en":"Dictionary Coding","ko":"사전 부호화"}
      },
      {
        "id": "technique-geometric-scan",
        "type": "technique",
        "name": "Geometric Scan",
        "summary": "정렬된 기하 객체를 순서대로 훑으며 경계 불변식을 유지하는 기법",
        "content": {
          "ko": {"summary":"정렬된 기하 객체를 순서대로 훑으며 경계 불변식을 유지하는 기법"},
          "en": {"summary":"A technique that scans ordered geometric objects while maintaining a boundary invariant."}
        },
        "localizedNames": {"en":"Geometric Scan","ko":"기하 스캔"}
      },
      {
        "id": "technique-iterative-refinement",
        "type": "technique",
        "name": "Iterative Refinement",
        "summary": "현재 해를 반복적으로 재평가하고 갱신해 목적 함수를 개선하는 기법",
        "content": {
          "ko": {"summary":"현재 해를 반복적으로 재평가하고 갱신해 목적 함수를 개선하는 기법"},
          "en": {"summary":"A technique that repeatedly reevaluates and updates a current solution to improve an objective."}
        },
        "localizedNames": {"en":"Iterative Refinement","ko":"반복 개선"}
      },
      {
        "id": "technique-basis-pivoting",
        "type": "technique",
        "name": "Basis Pivoting",
        "summary": "기저 변수를 교환하며 인접한 기본 가능해로 이동하는 최적화 기법",
        "content": {
          "ko": {"summary":"기저 변수를 교환하며 인접한 기본 가능해로 이동하는 최적화 기법"},
          "en": {"summary":"An optimization technique that exchanges basis variables to move between adjacent basic feasible solutions."}
        },
        "localizedNames": {"en":"Basis Pivoting","ko":"기저 피벗"}
      },
      {
        "id": "problem-all-pairs-shortest-paths",
        "type": "problem",
        "name": "All-Pairs Shortest Paths",
        "aliases": ["APSP"],
        "summary": "가중 그래프의 모든 정점 쌍 사이 최단 거리를 구하는 문제",
        "content": {
          "ko": {"summary":"가중 그래프의 모든 정점 쌍 사이 최단 거리를 구하는 문제"},
          "en": {"summary":"The problem of finding shortest-path distances between every ordered pair of vertices in a weighted graph."}
        },
        "localizedNames": {"en":"All-Pairs Shortest Paths","ko":"모든 쌍 최단 경로"}
      },
      {
        "id": "problem-edit-distance",
        "type": "problem",
        "name": "Edit Distance",
        "summary": "한 문자열을 다른 문자열로 바꾸는 최소 편집 비용을 구하는 문제",
        "content": {
          "ko": {"summary":"한 문자열을 다른 문자열로 바꾸는 최소 편집 비용을 구하는 문제"},
          "en": {"summary":"The problem of finding the minimum edit cost needed to transform one string into another."}
        },
        "localizedNames": {"en":"Edit Distance","ko":"편집 거리"}
      },
      {
        "id": "problem-longest-common-subsequence",
        "type": "problem",
        "name": "Longest Common Subsequence",
        "aliases": ["LCS"],
        "summary": "두 수열에 공통으로 나타나는 가장 긴 부분 수열을 찾는 문제",
        "content": {
          "ko": {"summary":"두 수열에 공통으로 나타나는 가장 긴 부분 수열을 찾는 문제"},
          "en": {"summary":"The problem of finding a longest sequence that occurs as a subsequence of two input sequences."}
        },
        "localizedNames": {"en":"Longest Common Subsequence","ko":"최장 공통 부분 수열"}
      },
      {
        "id": "problem-longest-increasing-subsequence",
        "type": "problem",
        "name": "Longest Increasing Subsequence",
        "aliases": ["LIS"],
        "summary": "한 수열에서 값이 증가하는 가장 긴 부분 수열을 찾는 문제",
        "content": {
          "ko": {"summary":"한 수열에서 값이 증가하는 가장 긴 부분 수열을 찾는 문제"},
          "en": {"summary":"The problem of finding a longest strictly increasing subsequence of a sequence."}
        },
        "localizedNames": {"en":"Longest Increasing Subsequence","ko":"최장 증가 부분 수열"}
      },
      {
        "id": "problem-zero-one-knapsack",
        "type": "problem",
        "name": "0/1 Knapsack",
        "summary": "각 물건을 한 번만 선택해 용량 안에서 총 가치를 최대화하는 문제",
        "content": {
          "ko": {"summary":"각 물건을 한 번만 선택해 용량 안에서 총 가치를 최대화하는 문제"},
          "en": {"summary":"The problem of maximizing total value under a capacity when each item may be selected at most once."}
        },
        "localizedNames": {"en":"0/1 Knapsack","ko":"0/1 배낭 문제"}
      },
      {
        "id": "problem-matrix-chain-ordering",
        "type": "problem",
        "name": "Matrix Chain Ordering",
        "summary": "행렬 곱셈 사슬의 스칼라 연산 수를 최소화하는 괄호 배치를 찾는 문제",
        "content": {
          "ko": {"summary":"행렬 곱셈 사슬의 스칼라 연산 수를 최소화하는 괄호 배치를 찾는 문제"},
          "en": {"summary":"The problem of parenthesizing a matrix product to minimize scalar multiplications."}
        },
        "localizedNames": {"en":"Matrix Chain Ordering","ko":"행렬 연쇄 순서"}
      },
      {
        "id": "problem-global-sequence-alignment",
        "type": "problem",
        "name": "Global Sequence Alignment",
        "summary": "두 생물학적 서열 전체의 점수를 최적화하는 정렬을 찾는 문제",
        "content": {
          "ko": {"summary":"두 생물학적 서열 전체의 점수를 최적화하는 정렬을 찾는 문제"},
          "en": {"summary":"The problem of finding an optimal end-to-end alignment of two biological sequences."}
        },
        "localizedNames": {"en":"Global Sequence Alignment","ko":"전역 서열 정렬"}
      },
      {
        "id": "technique-augmenting-path",
        "type": "technique",
        "name": "Augmenting Path",
        "summary": "잔여 네트워크의 경로를 따라 가능한 양만큼 유량을 늘리는 기법",
        "content": {
          "ko": {"summary":"잔여 네트워크의 경로를 따라 가능한 양만큼 유량을 늘리는 기법"},
          "en": {"summary":"A technique that increases flow along a source-to-sink path in a residual network."}
        },
        "localizedNames": {"en":"Augmenting Path","ko":"증가 경로"}
      },
      {
        "id": "technique-blocking-flow",
        "type": "technique",
        "name": "Blocking Flow",
        "summary": "레벨 그래프의 모든 s–t 경로에서 적어도 한 간선을 포화시키는 유량 기법",
        "content": {
          "ko": {"summary":"레벨 그래프의 모든 s–t 경로에서 적어도 한 간선을 포화시키는 유량 기법"},
          "en": {"summary":"A flow technique that saturates at least one edge on every source-to-sink path in a level graph."}
        },
        "localizedNames": {"en":"Blocking Flow","ko":"차단 유량"}
      },
      {
        "id": "technique-reweighting",
        "type": "technique",
        "name": "Graph Reweighting",
        "summary": "최단 경로를 보존하면서 간선 가중치를 다른 형태로 변환하는 기법",
        "content": {
          "ko": {"summary":"최단 경로를 보존하면서 간선 가중치를 다른 형태로 변환하는 기법"},
          "en": {"summary":"A technique that transforms edge weights while preserving shortest paths."}
        },
        "localizedNames": {"en":"Graph Reweighting","ko":"그래프 재가중"}
      },
      {
        "id": "domain-bioinformatics",
        "type": "domain",
        "name": "Bioinformatics",
        "summary": "생물학적 서열과 분자 데이터를 계산적으로 분석하는 분야",
        "content": {
          "ko": {"summary":"생물학적 서열과 분자 데이터를 계산적으로 분석하는 분야"},
          "en": {"summary":"The field of computational analysis of biological sequences and molecular data."}
        },
        "localizedNames": {"en":"Bioinformatics","ko":"생물정보학"}
      },
      {
        "id": "problem-closest-pair",
        "type": "problem",
        "name": "Closest Pair of Points",
        "summary": "평면 점 집합에서 거리가 가장 가까운 두 점을 찾는 문제",
        "content": {
          "ko": {"summary":"평면 점 집합에서 거리가 가장 가까운 두 점을 찾는 문제"},
          "en": {"summary":"The problem of finding the two closest points in a planar point set."}
        },
        "localizedNames": {"en":"Closest Pair of Points","ko":"최근접 점 쌍"}
      },
      {
        "id": "problem-segment-intersections",
        "type": "problem",
        "name": "Line Segment Intersections",
        "summary": "평면의 선분 쌍이 만나는 모든 지점을 찾는 문제",
        "content": {
          "ko": {"summary":"평면의 선분 쌍이 만나는 모든 지점을 찾는 문제"},
          "en": {"summary":"The problem of reporting all intersections among planar line segments."}
        },
        "localizedNames": {"en":"Line Segment Intersections","ko":"선분 교차"}
      },
      {
        "id": "problem-supervised-classification",
        "type": "problem",
        "name": "Supervised Classification",
        "summary": "레이블이 있는 학습 데이터로 새 표본의 클래스를 예측하는 문제",
        "content": {
          "ko": {"summary":"레이블이 있는 학습 데이터로 새 표본의 클래스를 예측하는 문제"},
          "en": {"summary":"The problem of predicting a class for new samples from labeled training data."}
        },
        "localizedNames": {"en":"Supervised Classification","ko":"지도 분류"}
      },
      {
        "id": "problem-link-ranking",
        "type": "problem",
        "name": "Link-Based Ranking",
        "summary": "그래프 연결 구조에서 노드의 상대적 중요도를 계산하는 문제",
        "content": {
          "ko": {"summary":"그래프 연결 구조에서 노드의 상대적 중요도를 계산하는 문제"},
          "en": {"summary":"The problem of ranking nodes by their relative importance in a link graph."}
        },
        "localizedNames": {"en":"Link-Based Ranking","ko":"링크 기반 순위"}
      },
      {
        "id": "technique-gift-wrapping",
        "type": "technique",
        "name": "Gift Wrapping",
        "summary": "현재 경계점에서 가장 바깥쪽 회전의 다음 점을 반복 선택하는 기법",
        "content": {
          "ko": {"summary":"현재 경계점에서 가장 바깥쪽 회전의 다음 점을 반복 선택하는 기법"},
          "en": {"summary":"A technique that repeatedly chooses the most outward next point from the current boundary point."}
        },
        "localizedNames": {"en":"Gift Wrapping","ko":"기프트 래핑"}
      },
      {
        "id": "technique-line-sweep",
        "type": "technique",
        "name": "Plane Sweep",
        "aliases": ["Sweep Line"],
        "summary": "가상의 선을 이동하며 국소 이벤트만 처리하는 계산기하 기법",
        "content": {
          "ko": {"summary":"가상의 선을 이동하며 국소 이벤트만 처리하는 계산기하 기법"},
          "en": {"summary":"A computational-geometry technique that moves an imaginary line and processes local events."}
        },
        "localizedNames": {"en":"Plane Sweep","ko":"평면 스윕"}
      },
      {
        "id": "technique-density-based",
        "type": "technique",
        "name": "Density-Based Clustering",
        "summary": "충분히 조밀하게 연결된 표본을 하나의 군집으로 확장하는 기법",
        "content": {
          "ko": {"summary":"충분히 조밀하게 연결된 표본을 하나의 군집으로 확장하는 기법"},
          "en": {"summary":"A technique that expands clusters through sufficiently dense neighborhoods."}
        },
        "localizedNames": {"en":"Density-Based Clustering","ko":"밀도 기반 군집화"}
      },
      {
        "id": "technique-instance-based",
        "type": "technique",
        "name": "Instance-Based Learning",
        "summary": "학습 표본을 직접 보존하고 가까운 사례로 예측하는 기법",
        "content": {
          "ko": {"summary":"학습 표본을 직접 보존하고 가까운 사례로 예측하는 기법"},
          "en": {"summary":"A technique that retains training instances and predicts from nearby examples."}
        },
        "localizedNames": {"en":"Instance-Based Learning","ko":"사례 기반 학습"}
      },
      {
        "id": "technique-decision-tree-learning",
        "type": "technique",
        "name": "Decision Tree Learning",
        "summary": "특성 검사를 재귀적으로 선택해 예측 규칙 트리를 만드는 기법",
        "content": {
          "ko": {"summary":"특성 검사를 재귀적으로 선택해 예측 규칙 트리를 만드는 기법"},
          "en": {"summary":"A technique that recursively selects feature tests to build a predictive rule tree."}
        },
        "localizedNames": {"en":"Decision Tree Learning","ko":"결정 트리 학습"}
      },
      {
        "id": "problem-password-hashing",
        "type": "problem",
        "name": "Password Hashing",
        "summary": "비밀번호 추측 공격 비용을 높이는 검증용 파생값을 만드는 문제",
        "content": {
          "ko": {"summary":"비밀번호 추측 공격 비용을 높이는 검증용 파생값을 만드는 문제"},
          "en": {"summary":"The problem of deriving verification values that make password guessing expensive."}
        },
        "localizedNames": {"en":"Password Hashing","ko":"비밀번호 해싱"}
      },
      {
        "id": "problem-block-sorting-transform",
        "type": "problem",
        "name": "Reversible Block-Sorting Transform",
        "summary": "문자열 블록을 반복 문맥이 모이도록 가역적으로 재배열하는 문제",
        "content": {
          "ko": {"summary":"문자열 블록을 반복 문맥이 모이도록 가역적으로 재배열하는 문제"},
          "en": {"summary":"The problem of reversibly rearranging a text block so similar contexts become adjacent."}
        },
        "localizedNames": {"en":"Reversible Block-Sorting Transform","ko":"가역 블록 정렬 변환"}
      },
      {
        "id": "technique-arx",
        "type": "technique",
        "name": "ARX Construction",
        "summary": "덧셈·회전·XOR 연산을 조합하는 암호 설계 기법",
        "content": {
          "ko": {"summary":"덧셈·회전·XOR 연산을 조합하는 암호 설계 기법"},
          "en": {"summary":"A cryptographic design technique combining addition, rotation, and XOR."}
        },
        "localizedNames": {"en":"ARX Construction","ko":"ARX 구성"}
      },
      {
        "id": "technique-memory-hard",
        "type": "technique",
        "name": "Memory-Hard Function",
        "summary": "계산에 큰 메모리 대역폭과 저장 공간을 강제하는 기법",
        "content": {
          "ko": {"summary":"계산에 큰 메모리 대역폭과 저장 공간을 강제하는 기법"},
          "en": {"summary":"A technique designed to force substantial memory capacity and bandwidth."}
        },
        "localizedNames": {"en":"Memory-Hard Function","ko":"메모리 하드 함수"}
      },
      {
        "id": "technique-elliptic-curve",
        "type": "technique",
        "name": "Elliptic-Curve Cryptography",
        "aliases": ["ECC"],
        "summary": "유한체 위 타원곡선 군의 스칼라 곱을 사용하는 암호 기법",
        "content": {
          "ko": {"summary":"유한체 위 타원곡선 군의 스칼라 곱을 사용하는 암호 기법"},
          "en": {"summary":"A cryptographic technique using scalar multiplication in elliptic-curve groups over finite fields."}
        },
        "localizedNames": {"en":"Elliptic-Curve Cryptography","ko":"타원곡선 암호"}
      },
      {
        "id": "technique-entropy-coding",
        "type": "technique",
        "name": "Entropy Coding",
        "summary": "기호 확률에 따라 평균 부호 길이를 줄이는 무손실 부호화 기법",
        "content": {
          "ko": {"summary":"기호 확률에 따라 평균 부호 길이를 줄이는 무손실 부호화 기법"},
          "en": {"summary":"A lossless coding technique reducing average length according to symbol probabilities."}
        },
        "localizedNames": {"en":"Entropy Coding","ko":"엔트로피 부호화"}
      },
      {
        "id": "technique-run-length",
        "type": "technique",
        "name": "Run-Length Coding",
        "aliases": [
          "Run-Length Coding Technique",
          "런 길이 부호화"
        ],
        "summary": "연속 반복 기호를 값과 길이 쌍으로 표현하는 기법",
        "content": {
          "ko": {"summary":"연속 반복 기호를 값과 길이 쌍으로 표현하는 기법"},
          "en": {"summary":"A technique representing repeated symbol runs as value-length pairs."}
        },
        "localizedNames": {"en":"Run-Length Coding","ko":"런 길이 부호화 기법"}
      },
      {
        "id": "technique-block-sorting",
        "type": "technique",
        "name": "Block Sorting",
        "summary": "블록의 순환 이동을 정렬해 문맥을 모으는 가역 변환 기법",
        "content": {
          "ko": {"summary":"블록의 순환 이동을 정렬해 문맥을 모으는 가역 변환 기법"},
          "en": {"summary":"A reversible technique sorting cyclic block rotations to group contexts."}
        },
        "localizedNames": {"en":"Block Sorting","ko":"블록 정렬"}
      },
      {
        "id": "problem-modular-exponentiation",
        "type": "problem",
        "name": "Modular Exponentiation",
        "summary": "큰 지수의 거듭제곱 나머지를 효율적으로 계산하는 문제",
        "content": {
          "ko": {"summary":"큰 지수의 거듭제곱 나머지를 효율적으로 계산하는 문제"},
          "en": {"summary":"The problem of efficiently computing a large power modulo an integer."}
        },
        "localizedNames": {"en":"Modular Exponentiation","ko":"모듈러 거듭제곱"}
      },
      {
        "id": "problem-primality-testing",
        "type": "problem",
        "name": "Primality Testing",
        "summary": "주어진 정수가 소수인지 판정하는 문제",
        "content": {
          "ko": {"summary":"주어진 정수가 소수인지 판정하는 문제"},
          "en": {"summary":"The problem of determining whether a given integer is prime."}
        },
        "localizedNames": {"en":"Primality Testing","ko":"소수 판정"}
      },
      {
        "id": "problem-linear-system-solving",
        "type": "problem",
        "name": "Linear System Solving",
        "summary": "연립 일차방정식의 해를 구하거나 존재 여부를 판정하는 문제",
        "content": {
          "ko": {"summary":"연립 일차방정식의 해를 구하거나 존재 여부를 판정하는 문제"},
          "en": {"summary":"The problem of solving a system of linear equations or determining its consistency."}
        },
        "localizedNames": {"en":"Linear System Solving","ko":"연립 일차방정식 풀이"}
      },
      {
        "id": "problem-continuous-optimization",
        "type": "problem",
        "name": "Continuous Optimization",
        "summary": "연속 변수 공간에서 목적 함수 값을 최소화하거나 최대화하는 문제",
        "content": {
          "ko": {"summary":"연속 변수 공간에서 목적 함수 값을 최소화하거나 최대화하는 문제"},
          "en": {"summary":"The problem of minimizing or maximizing an objective over continuous variables."}
        },
        "localizedNames": {"en":"Continuous Optimization","ko":"연속 최적화"}
      },
      {
        "id": "problem-assignment",
        "type": "problem",
        "name": "Assignment Problem",
        "aliases": ["할당 문제"],
        "summary": "작업과 담당자를 일대일로 연결해 총 비용을 최소화하는 문제",
        "content": {
          "ko": {"summary":"작업과 담당자를 일대일로 연결해 총 비용을 최소화하는 문제"},
          "en": {"summary":"The problem of matching agents to tasks one-to-one with minimum total cost."}
        },
        "localizedNames": {"en":"Assignment Problem","ko":"배정 문제"}
      },
      {
        "id": "technique-range-expansion",
        "type": "technique",
        "name": "Range Expansion",
        "summary": "탐색 경계를 지수적으로 넓혀 목표가 포함된 구간을 찾는 기법",
        "content": {
          "ko": {"summary":"탐색 경계를 지수적으로 넓혀 목표가 포함된 구간을 찾는 기법"},
          "en": {"summary":"A technique that expands a search bound exponentially until it contains the target."}
        },
        "localizedNames": {"en":"Range Expansion","ko":"범위 확장"}
      },
      {
        "id": "technique-interpolation",
        "type": "technique",
        "name": "Interpolation",
        "summary": "키 값의 분포로 목표 위치를 비례 추정하는 탐색 기법",
        "content": {
          "ko": {"summary":"키 값의 분포로 목표 위치를 비례 추정하는 탐색 기법"},
          "en": {"summary":"A search technique estimating target position proportionally from key distribution."}
        },
        "localizedNames": {"en":"Interpolation","ko":"보간"}
      },
      {
        "id": "technique-elimination",
        "type": "technique",
        "name": "Algebraic Elimination",
        "summary": "연산으로 변수를 차례로 제거해 연립 문제를 단순화하는 기법",
        "content": {
          "ko": {"summary":"연산으로 변수를 차례로 제거해 연립 문제를 단순화하는 기법"},
          "en": {"summary":"A technique simplifying a system by successively eliminating variables."}
        },
        "localizedNames": {"en":"Algebraic Elimination","ko":"대수적 소거"}
      },
      {
        "id": "technique-local-search",
        "type": "technique",
        "name": "Derivative-Free Local Search",
        "summary": "미분 없이 주변 후보의 함수값으로 해를 반복 개선하는 기법",
        "content": {
          "ko": {"summary":"미분 없이 주변 후보의 함수값으로 해를 반복 개선하는 기법"},
          "en": {"summary":"A technique improving a solution from nearby objective values without derivatives."}
        },
        "localizedNames": {"en":"Derivative-Free Local Search","ko":"무미분 지역 탐색"}
      },
      {
        "id": "problem-bipartite-matching",
        "type": "problem",
        "name": "Bipartite Matching",
        "localizedNames": {"en":"Bipartite Matching","ko":"이분 매칭"},
        "content": {
          "ko": {"summary":"이분 그래프에서 서로 겹치지 않는 간선 집합을 찾는 문제"},
          "en": {"summary":"Finding a set of nonconflicting edges in a bipartite graph."}
        }
      },
      {
        "id": "problem-eulerian-trail",
        "type": "problem",
        "name": "Eulerian Trail",
        "localizedNames": {"en":"Eulerian Trail","ko":"오일러 경로"},
        "content": {
          "ko": {"summary":"모든 간선을 정확히 한 번 지나는 경로를 찾는 문제"},
          "en": {"summary":"Finding a trail that uses every edge exactly once."}
        }
      },
      {
        "id": "problem-maximum-clique-enumeration",
        "type": "problem",
        "name": "Maximal Clique Enumeration",
        "localizedNames": {"en":"Maximal Clique Enumeration","ko":"극대 클릭 열거"},
        "content": {
          "ko": {"summary":"더 확장할 수 없는 모든 완전 부분그래프를 찾는 문제"},
          "en": {"summary":"Enumerating every complete subgraph that cannot be extended."}
        }
      },
      {
        "id": "problem-community-detection",
        "type": "problem",
        "name": "Community Detection",
        "localizedNames": {"en":"Community Detection","ko":"커뮤니티 탐지"},
        "content": {
          "ko": {"summary":"네트워크에서 내부 연결이 조밀한 정점 집단을 찾는 문제"},
          "en": {"summary":"Finding densely connected groups of vertices in a network."}
        }
      },
      {
        "id": "problem-k-shortest-paths",
        "type": "problem",
        "name": "K Shortest Paths",
        "localizedNames": {"en":"K Shortest Paths","ko":"K개 최단 경로"},
        "content": {
          "ko": {"summary":"두 정점 사이의 비용이 작은 경로를 여러 개 찾는 문제"},
          "en": {"summary":"Finding several low-cost paths between two vertices."}
        }
      },
      {
        "id": "problem-cycle-detection",
        "type": "problem",
        "name": "Cycle Detection",
        "localizedNames": {"en":"Cycle Detection","ko":"순환 검출"},
        "content": {
          "ko": {"summary":"상태 전이 또는 그래프에 순환이 존재하는지 찾는 문제"},
          "en": {"summary":"Detecting a cycle in a state transition or graph."}
        }
      },
      {
        "id": "problem-general-graph-matching",
        "type": "problem",
        "name": "General Graph Matching",
        "localizedNames": {"en":"General Graph Matching","ko":"일반 그래프 매칭"},
        "content": {
          "ko": {"summary":"일반 그래프에서 끝점을 공유하지 않는 최대 간선 집합을 찾는 문제"},
          "en": {"summary":"Finding a maximum set of vertex-disjoint edges in a general graph."}
        }
      },
      {
        "id": "problem-suffix-ordering",
        "type": "problem",
        "name": "Suffix Ordering",
        "localizedNames": {"en":"Suffix Ordering","ko":"접미사 정렬"},
        "content": {
          "ko": {"summary":"문자열의 모든 접미사를 사전순으로 정렬하는 문제"},
          "en": {"summary":"Ordering all suffixes of a string lexicographically."}
        }
      },
      {
        "id": "problem-longest-palindrome",
        "type": "problem",
        "name": "Longest Palindromic Substring",
        "localizedNames": {"en":"Longest Palindromic Substring","ko":"최장 팰린드롬 부분 문자열"},
        "content": {
          "ko": {"summary":"문자열에서 가장 긴 연속 팰린드롬을 찾는 문제"},
          "en": {"summary":"Finding the longest contiguous palindrome in a string."}
        }
      },
      {
        "id": "problem-local-sequence-alignment",
        "type": "problem",
        "name": "Local Sequence Alignment",
        "localizedNames": {"en":"Local Sequence Alignment","ko":"지역 서열 정렬"},
        "content": {
          "ko": {"summary":"두 서열에서 점수가 가장 높은 부분 구간 정렬을 찾는 문제"},
          "en": {"summary":"Finding the highest-scoring alignment between subsequences."}
        }
      },
      {
        "id": "problem-sequence-diff",
        "type": "problem",
        "name": "Sequence Difference",
        "localizedNames": {"en":"Sequence Difference","ko":"서열 차이"},
        "content": {
          "ko": {"summary":"두 서열을 변환하는 짧은 편집 스크립트를 찾는 문제"},
          "en": {"summary":"Finding a short edit script transforming one sequence into another."}
        }
      },
      {
        "id": "problem-root-finding",
        "type": "problem",
        "name": "Root Finding",
        "localizedNames": {"en":"Root Finding","ko":"근 찾기"},
        "content": {
          "ko": {"summary":"함숫값이 0이 되는 지점을 수치적으로 찾는 문제"},
          "en": {"summary":"Numerically locating a point where a function is zero."}
        }
      },
      {
        "id": "problem-matrix-factorization",
        "type": "problem",
        "name": "Matrix Factorization",
        "localizedNames": {"en":"Matrix Factorization","ko":"행렬 분해"},
        "content": {
          "ko": {"summary":"행렬을 계산에 유리한 인수의 곱으로 분해하는 문제"},
          "en": {"summary":"Factoring a matrix into computationally useful components."}
        }
      },
      {
        "id": "problem-matrix-multiplication",
        "type": "problem",
        "name": "Matrix Multiplication",
        "localizedNames": {"en":"Matrix Multiplication","ko":"행렬 곱셈"},
        "content": {
          "ko": {"summary":"두 행렬의 곱을 효율적으로 계산하는 문제"},
          "en": {"summary":"Computing the product of two matrices efficiently."}
        }
      },
      {
        "id": "problem-integer-factorization",
        "type": "problem",
        "name": "Integer Factorization",
        "localizedNames": {"en":"Integer Factorization","ko":"정수 인수분해"},
        "content": {
          "ko": {"summary":"합성수를 비자명한 인수의 곱으로 분해하는 문제"},
          "en": {"summary":"Decomposing a composite integer into nontrivial factors."}
        }
      },
      {
        "id": "problem-simultaneous-congruences",
        "type": "problem",
        "name": "Simultaneous Congruences",
        "localizedNames": {"en":"Simultaneous Congruences","ko":"연립 합동식"},
        "content": {
          "ko": {"summary":"여러 모듈러 합동식을 동시에 만족하는 값을 찾는 문제"},
          "en": {"summary":"Finding a value satisfying several modular congruences."}
        }
      },
      {
        "id": "problem-digital-signature",
        "type": "problem",
        "name": "Digital Signature",
        "localizedNames": {"en":"Digital Signature","ko":"디지털 서명"},
        "content": {
          "ko": {"summary":"메시지의 출처와 무결성을 검증할 서명을 생성하는 문제"},
          "en": {"summary":"Creating signatures that authenticate message origin and integrity."}
        }
      },
      {
        "id": "problem-polygon-simplification",
        "type": "problem",
        "name": "Polygonal Simplification",
        "localizedNames": {"en":"Polygonal Simplification","ko":"폴리라인 단순화"},
        "content": {
          "ko": {"summary":"형상을 보존하며 폴리라인의 점 수를 줄이는 문제"},
          "en": {"summary":"Reducing polyline vertices while preserving shape."}
        }
      },
      {
        "id": "problem-planar-triangulation",
        "type": "problem",
        "name": "Planar Triangulation",
        "localizedNames": {"en":"Planar Triangulation","ko":"평면 삼각분할"},
        "content": {
          "ko": {"summary":"평면 점 집합을 겹치지 않는 삼각형으로 연결하는 문제"},
          "en": {"summary":"Connecting planar points into nonoverlapping triangles."}
        }
      },
      {
        "id": "problem-point-in-polygon",
        "type": "problem",
        "name": "Point in Polygon",
        "localizedNames": {"en":"Point in Polygon","ko":"점의 다각형 포함 판정"},
        "content": {
          "ko": {"summary":"점이 다각형 내부·외부·경계에 있는지 판정하는 문제"},
          "en": {"summary":"Classifying a point as inside, outside, or on a polygon."}
        }
      },
      {
        "id": "problem-ensemble-classification",
        "type": "problem",
        "name": "Ensemble Classification",
        "localizedNames": {"en":"Ensemble Classification","ko":"앙상블 분류"},
        "content": {
          "ko": {"summary":"여러 학습기의 예측을 결합해 분류하는 문제"},
          "en": {"summary":"Combining multiple learners to classify observations."}
        }
      },
      {
        "id": "problem-global-optimization",
        "type": "problem",
        "name": "Global Optimization",
        "localizedNames": {"en":"Global Optimization","ko":"전역 최적화"},
        "content": {
          "ko": {"summary":"여러 지역해가 있는 목적 함수에서 좋은 전역해를 찾는 문제"},
          "en": {"summary":"Seeking a good global solution in a multimodal objective."}
        }
      },
      {
        "id": "technique-backtracking",
        "type": "technique",
        "name": "Backtracking",
        "localizedNames": {"en":"Backtracking","ko":"백트래킹"},
        "content": {
          "ko": {"summary":"불가능한 부분해를 조기에 버리며 후보를 탐색하는 기법"},
          "en": {"summary":"Exploring candidates while pruning partial solutions that cannot succeed."}
        }
      },
      {
        "id": "technique-doubling",
        "type": "technique",
        "name": "Doubling",
        "localizedNames": {"en":"Doubling","ko":"배가 기법"},
        "content": {
          "ko": {"summary":"이미 계산한 길이의 정보를 결합해 처리 범위를 두 배로 늘리는 기법"},
          "en": {"summary":"Doubling the processed range by combining information already computed."}
        }
      },
      {
        "id": "technique-incremental",
        "type": "technique",
        "name": "Incremental Construction",
        "localizedNames": {"en":"Incremental Construction","ko":"증분 구성"},
        "content": {
          "ko": {"summary":"입력 요소를 하나씩 추가하며 유효한 해 구조를 유지하는 기법"},
          "en": {"summary":"Maintaining a valid solution structure as elements are inserted one at a time."}
        }
      },
      {
        "id": "ds-linked-list",
        "type": "data_structure",
        "name": "Linked List",
        "localizedNames": {"en":"Linked List","ko":"연결 리스트"},
        "content": {
          "ko": {"summary":"노드를 포인터로 연결한 순차 자료구조"},
          "en": {"summary":"A sequential structure whose nodes are linked by references."}
        }
      },
      {
        "id": "ds-binary-search-tree",
        "type": "data_structure",
        "name": "Binary Search Tree",
        "localizedNames": {"en":"Binary Search Tree","ko":"이진 탐색 트리"},
        "content": {
          "ko": {"summary":"왼쪽과 오른쪽 부분트리에 순서 조건을 유지하는 트리"},
          "en": {"summary":"A tree maintaining an ordering invariant across left and right subtrees."}
        }
      },
      {
        "id": "ds-balanced-search-tree",
        "type": "data_structure",
        "name": "Balanced Search Tree",
        "localizedNames": {"en":"Balanced Search Tree","ko":"균형 탐색 트리"},
        "content": {
          "ko": {"summary":"높이를 로그 수준으로 유지하는 정렬 탐색 트리"},
          "en": {"summary":"An ordered search tree maintaining logarithmic height."}
        }
      },
      {
        "id": "ds-bitset",
        "type": "data_structure",
        "name": "Bitset",
        "localizedNames": {"en":"Bitset","ko":"비트셋"},
        "content": {
          "ko": {"summary":"불리언 집합을 비트 단위로 압축한 자료구조"},
          "en": {"summary":"A bit-packed representation of a Boolean set."}
        }
      },
      {
        "id": "ds-matrix",
        "type": "data_structure",
        "name": "Matrix",
        "localizedNames": {"en":"Matrix","ko":"행렬"},
        "content": {
          "ko": {"summary":"행과 열로 배치된 수치 자료구조"},
          "en": {"summary":"A numeric structure arranged in rows and columns."}
        }
      },
      {
        "id": "ds-adjacency-list",
        "type": "data_structure",
        "name": "Adjacency List",
        "localizedNames": {"en":"Adjacency List","ko":"인접 리스트"},
        "content": {
          "ko": {"summary":"각 정점의 이웃을 목록으로 저장하는 그래프 표현"},
          "en": {"summary":"A graph representation storing each vertex's neighbors in a list."}
        }
      },
      {
        "id": "ds-adjacency-matrix",
        "type": "data_structure",
        "name": "Adjacency Matrix",
        "localizedNames": {"en":"Adjacency Matrix","ko":"인접 행렬"},
        "content": {
          "ko": {"summary":"정점 쌍의 연결 정보를 행렬에 저장하는 그래프 표현"},
          "en": {"summary":"A graph representation storing vertex-pair connections in a matrix."}
        }
      },
      {
        "id": "ds-deque",
        "type": "data_structure",
        "name": "Deque",
        "localizedNames": {"en":"Deque","ko":"덱"},
        "content": {
          "ko": {"summary":"양쪽 끝에서 삽입과 삭제가 가능한 큐"},
          "en": {"summary":"A queue supporting insertion and removal at both ends."}
        }
      },
      {
        "id": "ds-suffix-array",
        "type": "data_structure",
        "name": "Suffix Array",
        "localizedNames": {"en":"Suffix Array","ko":"접미사 배열"},
        "content": {
          "ko": {"summary":"정렬된 접미사의 시작 위치를 저장하는 배열"},
          "en": {"summary":"An array storing starting positions of lexicographically sorted suffixes."}
        }
      },
      {
        "id": "ds-b-tree",
        "type": "data_structure",
        "name": "B-Tree",
        "localizedNames": {"en":"B-Tree","ko":"B-트리"},
        "content": {
          "ko": {"summary":"블록 저장장치에 적합한 다분기 균형 탐색 트리"},
          "en": {"summary":"A multiway balanced search tree designed for block storage."}
        }
      },
      {
        "id": "ds-fenwick-tree",
        "type": "data_structure",
        "name": "Fenwick Tree",
        "localizedNames": {"en":"Fenwick Tree","ko":"펜윅 트리"},
        "content": {
          "ko": {"summary":"접두 집계와 점 갱신을 로그 시간에 처리하는 배열형 트리"},
          "en": {"summary":"An array-based tree supporting logarithmic prefix aggregates and updates."}
        }
      },
      {
        "id": "ds-segment-tree",
        "type": "data_structure",
        "name": "Segment Tree",
        "localizedNames": {"en":"Segment Tree","ko":"세그먼트 트리"},
        "content": {
          "ko": {"summary":"구간 질의를 위해 범위를 계층적으로 분할하는 트리"},
          "en": {"summary":"A tree hierarchically partitioning ranges for interval queries."}
        }
      },
      {
        "id": "ds-disjoint-set-forest",
        "type": "data_structure",
        "name": "Disjoint-Set Forest",
        "localizedNames": {"en":"Disjoint-Set Forest","ko":"분리 집합 숲"},
        "content": {
          "ko": {"summary":"서로소 집합을 부모 포인터 숲으로 표현한 구조"},
          "en": {"summary":"A parent-pointer forest representing disjoint sets."}
        }
      },
      {
        "id": "domain-numerical-computing",
        "type": "domain",
        "name": "Numerical Computing",
        "localizedNames": {"en":"Numerical Computing","ko":"수치 계산"},
        "content": {
          "ko": {"summary":"근사 수치 연산과 과학 계산을 다루는 분야"},
          "en": {"summary":"The domain of approximate numerical and scientific computation."}
        }
      },
      {
        "id": "domain-network-science",
        "type": "domain",
        "name": "Network Science",
        "localizedNames": {"en":"Network Science","ko":"네트워크 과학"},
        "content": {
          "ko": {"summary":"복잡한 연결망의 구조와 동역학을 분석하는 분야"},
          "en": {"summary":"The study of structure and dynamics in complex networks."}
        }
      },
      {
        "id": "problem-global-min-cut",
        "type": "problem",
        "name": "Global Minimum Cut",
        "localizedNames": {"en":"Global Minimum Cut","ko":"전역 최소 컷"},
        "content": {
          "ko": {"summary":"그래프 전체를 두 부분으로 나누는 간선 가중치 합을 최소화하는 문제"},
          "en": {"summary":"The problem of partitioning an entire graph with minimum total crossing-edge weight."}
        }
      },
      {
        "id": "problem-min-cost-flow",
        "type": "problem",
        "name": "Minimum-Cost Flow",
        "localizedNames": {"en":"Minimum-Cost Flow","ko":"최소 비용 흐름"},
        "content": {
          "ko": {"summary":"용량과 비용이 있는 네트워크에서 요구 유량을 최소 비용으로 보내는 문제"},
          "en": {"summary":"The problem of sending required flow through a capacitated network at minimum cost."}
        }
      },
      {
        "id": "problem-modular-square-root",
        "type": "problem",
        "name": "Modular Square Root",
        "localizedNames": {"en":"Modular Square Root","ko":"모듈러 제곱근"},
        "content": {
          "ko": {"summary":"주어진 합동식 x² ≡ n (mod p)을 만족하는 값을 찾는 문제"},
          "en": {"summary":"The problem of finding a value satisfying x² ≡ n modulo a given modulus."}
        }
      },
      {
        "id": "problem-message-authentication",
        "type": "problem",
        "name": "Message Authentication",
        "localizedNames": {"en":"Message Authentication","ko":"메시지 인증"},
        "content": {
          "ko": {"summary":"공유 비밀을 이용해 메시지의 무결성과 출처를 검증하는 문제"},
          "en": {"summary":"The problem of verifying message integrity and origin with shared secret material."}
        }
      },
      {
        "id": "problem-key-derivation",
        "type": "problem",
        "name": "Key Derivation",
        "localizedNames": {"en":"Key Derivation","ko":"키 파생"},
        "content": {
          "ko": {"summary":"초기 비밀 재료에서 용도별 암호 키를 안전하게 생성하는 문제"},
          "en": {"summary":"The problem of deriving purpose-specific cryptographic keys from initial secret material."}
        }
      },
      {
        "id": "problem-voronoi-diagram",
        "type": "problem",
        "name": "Voronoi Diagram Construction",
        "localizedNames": {"en":"Voronoi Diagram Construction","ko":"보로노이 다이어그램 구성"},
        "content": {
          "ko": {"summary":"평면을 각 생성점에 가장 가까운 영역으로 분할하는 구조를 만드는 문제"},
          "en": {"summary":"The problem of partitioning the plane into regions nearest to individual sites."}
        }
      },
      {
        "id": "problem-polygon-clipping",
        "type": "problem",
        "name": "Polygon Clipping",
        "localizedNames": {"en":"Polygon Clipping","ko":"다각형 클리핑"},
        "content": {
          "ko": {"summary":"다각형을 지정된 클리핑 영역 안쪽 부분으로 잘라내는 문제"},
          "en": {"summary":"The problem of restricting a polygon to the portion inside a clipping region."}
        }
      },
      {
        "id": "technique-depth-first-traversal",
        "type": "technique",
        "name": "Depth-First Traversal",
        "localizedNames": {"en":"Depth-First Traversal","ko":"깊이 우선 순회"},
        "content": {
          "ko": {"summary":"한 경로를 가능한 깊게 탐색한 뒤 되돌아오는 그래프 처리 기법"},
          "en": {"summary":"A graph-processing technique that follows a path deeply before backtracking."}
        }
      },
      {
        "id": "technique-maximum-adjacency-search",
        "type": "technique",
        "name": "Maximum Adjacency Search",
        "localizedNames": {"en":"Maximum Adjacency Search","ko":"최대 인접 탐색"},
        "content": {
          "ko": {"summary":"현재 집합과 연결된 가중치가 가장 큰 정점을 차례로 선택하는 기법"},
          "en": {"summary":"A technique that repeatedly selects the vertex most strongly connected to the current set."}
        }
      },
      {
        "id": "technique-bit-parallelism",
        "type": "technique",
        "name": "Bit Parallelism",
        "localizedNames": {"en":"Bit Parallelism","ko":"비트 병렬 처리"},
        "content": {
          "ko": {"summary":"여러 논리 상태를 한 기계어 비트열에 담아 동시에 갱신하는 기법"},
          "en": {"summary":"A technique that packs logical states into machine-word bits and updates them together."}
        }
      },
      {
        "id": "technique-binary-arithmetic",
        "type": "technique",
        "name": "Binary Arithmetic",
        "localizedNames": {"en":"Binary Arithmetic","ko":"이진 산술"},
        "content": {
          "ko": {"summary":"나눗셈 대신 시프트·짝홀성·뺄셈을 중심으로 계산하는 기법"},
          "en": {"summary":"A technique centered on shifts, parity, and subtraction rather than general division."}
        }
      },
      {
        "id": "technique-orthogonal-transformation",
        "type": "technique",
        "name": "Orthogonal Transformation",
        "localizedNames": {"en":"Orthogonal Transformation","ko":"직교 변환"},
        "content": {
          "ko": {"summary":"길이와 직교성을 보존하는 변환으로 행렬을 안정적으로 단순화하는 기법"},
          "en": {"summary":"A technique using norm-preserving transformations to simplify matrices stably."}
        }
      },
      {
        "id": "technique-krylov-subspace",
        "type": "technique",
        "name": "Krylov Subspace Method",
        "localizedNames": {"en":"Krylov Subspace Method","ko":"크릴로프 부분공간 기법"},
        "content": {
          "ko": {"summary":"행렬과 벡터의 반복 곱이 만드는 부분공간에서 해를 근사하는 기법"},
          "en": {"summary":"A technique approximating solutions in subspaces generated by repeated matrix-vector products."}
        }
      },
      {
        "id": "technique-keyed-hashing",
        "type": "technique",
        "name": "Keyed Hashing",
        "localizedNames": {"en":"Keyed Hashing","ko":"키 기반 해싱"},
        "content": {
          "ko": {"summary":"비밀 키와 해시 함수를 결합해 인증 값을 계산하는 기법"},
          "en": {"summary":"A technique combining secret keys with hash functions to compute authentication values."}
        }
      },
      {
        "id": "technique-extract-expand",
        "type": "technique",
        "name": "Extract-and-Expand",
        "localizedNames": {"en":"Extract-and-Expand","ko":"추출–확장"},
        "content": {
          "ko": {"summary":"입력 비밀의 엔트로피를 추출한 뒤 필요한 길이의 키 재료로 확장하는 기법"},
          "en": {"summary":"A technique that extracts entropy from input secret material and expands it into output keys."}
        }
      },
      {
        "id": "technique-probabilistic-modeling",
        "type": "technique",
        "name": "Probabilistic Modeling",
        "localizedNames": {"en":"Probabilistic Modeling","ko":"확률 모델링"},
        "content": {
          "ko": {"summary":"확률 분포와 조건부 가정으로 데이터 생성 과정이나 예측을 표현하는 기법"},
          "en": {"summary":"A technique representing data generation or prediction through probability distributions."}
        }
      },
      {
        "id": "technique-coordinate-optimization",
        "type": "technique",
        "name": "Coordinate Optimization",
        "localizedNames": {"en":"Coordinate Optimization","ko":"좌표별 최적화"},
        "content": {
          "ko": {"summary":"전체 변수 중 작은 부분만 선택해 반복적으로 최적화하는 기법"},
          "en": {"summary":"A technique that repeatedly optimizes a small subset of variables while holding others fixed."}
        }
      },
      {
        "id": "technique-boosting",
        "type": "technique",
        "name": "Boosting",
        "localizedNames": {"en":"Boosting","ko":"부스팅"},
        "content": {
          "ko": {"summary":"약한 학습기를 순차적으로 결합해 강한 예측기를 만드는 앙상블 기법"},
          "en": {"summary":"An ensemble technique that sequentially combines weak learners into a strong predictor."}
        }
      },
      {
        "id": "technique-alternating-optimization",
        "type": "technique",
        "name": "Alternating Optimization",
        "localizedNames": {"en":"Alternating Optimization","ko":"교대 최적화"},
        "content": {
          "ko": {"summary":"서로 의존하는 변수 묶음을 번갈아 추정하며 목적을 개선하는 기법"},
          "en": {"summary":"A technique that alternates between dependent variable blocks to improve an objective."}
        }
      },
      {
        "id": "technique-stochastic-gradient",
        "type": "technique",
        "name": "Stochastic Gradient",
        "localizedNames": {"en":"Stochastic Gradient","ko":"확률적 경사"},
        "content": {
          "ko": {"summary":"전체 데이터 대신 표본이나 미니배치의 경사 추정치를 사용하는 기법"},
          "en": {"summary":"A technique using sample or mini-batch gradient estimates instead of the full dataset."}
        }
      },
      {
        "id": "technique-momentum",
        "type": "technique",
        "name": "Momentum",
        "localizedNames": {"en":"Momentum","ko":"모멘텀"},
        "content": {
          "ko": {"summary":"이전 갱신 방향을 누적해 진동을 줄이고 진행을 가속하는 최적화 기법"},
          "en": {"summary":"An optimization technique accumulating prior updates to damp oscillation and accelerate progress."}
        }
      },
      {
        "id": "technique-quasi-newton",
        "type": "technique",
        "name": "Quasi-Newton Method",
        "localizedNames": {"en":"Quasi-Newton Method","ko":"준뉴턴 기법"},
        "content": {
          "ko": {"summary":"경사 변화로 헤시안 또는 그 역행렬을 근사해 탐색 방향을 정하는 기법"},
          "en": {"summary":"A technique estimating Hessian information from gradient changes to choose search directions."}
        }
      },
      {
        "id": "technique-adaptive-gradient",
        "type": "technique",
        "name": "Adaptive Gradient Scaling",
        "localizedNames": {"en":"Adaptive Gradient Scaling","ko":"적응형 경사 스케일링"},
        "content": {
          "ko": {"summary":"좌표별 경사 통계에 따라 학습률이나 갱신 크기를 조정하는 기법"},
          "en": {"summary":"A technique adapting coordinate-wise update scales from accumulated gradient statistics."}
        }
      },
      {
        "id": "ds-suffix-tree",
        "type": "data_structure",
        "name": "Suffix Tree",
        "localizedNames": {"en":"Suffix Tree","ko":"접미사 트리"},
        "content": {
          "ko": {"summary":"문자열의 모든 접미사를 압축 트라이 형태로 색인하는 자료구조"},
          "en": {"summary":"A compressed trie indexing all suffixes of a string."}
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
