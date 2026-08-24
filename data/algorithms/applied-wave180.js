(function registerAlgoriaWave180Applied(global) {
  "use strict";
  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  function algorithm(spec) {
    const deep = Boolean(spec.code);
    const entity = {
      id: spec.id, type: "algorithm", name: spec.en, aliases: spec.aliases || [],
      summary: spec.koSummary, description: spec.koDescription,
      complexity: { time: spec.time, space: { auxiliary: spec.space } },
      pseudocode: spec.pseudocode, referenceIds: spec.references,
      localizedNames: { en: spec.en, ko: spec.ko },
      quality: { tier: deep ? "deep" : "standard", status: "reviewed" },
      content: {
        ko: { summary: spec.koSummary, description: spec.koDescription, advantages: spec.koAdvantages || ["목표 문제의 구조를 활용한다.", "단계별 절차가 명확하다."], disadvantages: spec.koDisadvantages || ["매개변수에 따라 결과가 달라질 수 있다.", "입력 조건에 따라 계산 비용이 커질 수 있다."], useCases: spec.koUses || ["관련 분야의 대표적인 계산 절차", "유사 방법을 비교하는 기준 알고리즘"] },
        en: { summary: spec.enSummary, description: spec.enDescription, advantages: spec.enAdvantages || ["It exploits the target problem's structure.", "Its computational stages are explicit."], disadvantages: spec.enDisadvantages || ["Results may depend on parameter choices.", "Computation can grow under unfavorable input conditions."], useCases: spec.enUses || ["A representative computation in its application area", "A baseline for comparing related methods"] }
      }
    };
    if (spec.year) entity.introduced = { year: spec.year };
    if (spec.authors) entity.authors = spec.authors.map((name) => ({ name }));
    if (deep) entity.implementations = [{ language: "JavaScript", code: spec.code }];
    return entity;
  }

  registry.registerPart({
    id: "algorithms-applied-wave180",
    entities: [
      algorithm({
        id: "algo-power-iteration", en: "Power Iteration", ko: "거듭제곱 반복법", year: 1929, authors: ["Richard von Mises", "Hilda Pollaczek-Geiringer"],
        koSummary: "행렬과 벡터의 반복 곱셈으로 지배 고유벡터와 고유값을 근사하는 알고리즘",
        enSummary: "An iterative algorithm estimating a matrix's dominant eigenvector and eigenvalue.",
        koDescription: "0이 아닌 벡터에 행렬을 반복 적용하고 매번 정규화한다. 지배 고유값이 분리되어 있고 시작 벡터 성분이 있으면 그 고유벡터 방향으로 수렴한다.",
        enDescription: "It repeatedly applies the matrix to a nonzero vector and normalizes. With a separated dominant eigenvalue and a suitable start, the direction converges to its eigenvector.",
        time: { perIteration: "O(nnz(A))", convergence: "Depends on |λ₂/λ₁|" }, space: "O(n)", pseudocode: "choose nonzero vector v\nrepeat\n  w <- A v\n  v <- w / norm(w)\n  lambda <- v^T A v\nuntil converged",
        references: ["source-golub-van-loan-matrix-computations", "source-netlib-lapack", "source-von-mises-power-1929"],
        code: "function powerIteration(A,steps=100){let v=Array(A.length).fill(1/Math.sqrt(A.length));for(let s=0;s<steps;s++){const w=A.map(r=>r.reduce((z,x,i)=>z+x*v[i],0));const n=Math.hypot(...w);v=w.map(x=>x/n);}const Av=A.map(r=>r.reduce((z,x,i)=>z+x*v[i],0));return{value:v.reduce((z,x,i)=>z+x*Av[i],0),vector:v};}"
      }),
      algorithm({
        id: "algo-scrypt", en: "scrypt", ko: "스크립트 비밀번호 해싱", year: 2009, authors: ["Colin Percival"],
        koSummary: "대규모 메모리 접근을 요구해 병렬 하드웨어 공격 비용을 높이는 암호 기반 키 유도 함수",
        enSummary: "A memory-hard password-based key derivation function designed to raise parallel attack costs.",
        koDescription: "PBKDF2와 Salsa20/8 기반 ROMix를 결합하며 N, r, p 매개변수로 CPU·메모리·병렬 비용을 조절한다.",
        enDescription: "It combines PBKDF2 with Salsa20/8-based ROMix and exposes N, r, and p parameters controlling CPU, memory, and parallel work.",
        time: { typical: "O(Nrp)" }, space: "O(Nr)", pseudocode: "B <- PBKDF2(password,salt)\nfor each parallel block: B_i <- ROMix(B_i,N)\nreturn PBKDF2(password,B)", references: ["source-rfc-7914", "source-percival-scrypt-2009"]
      }),
      algorithm({
        id: "algo-bcrypt", en: "bcrypt", ko: "비크립트 비밀번호 해싱", year: 1999, authors: ["Niels Provos", "David Mazieres"],
        koSummary: "비용 인자를 조절할 수 있는 EksBlowfish 기반 적응형 비밀번호 해시",
        enSummary: "An adaptive password hash based on EksBlowfish with a configurable work factor.",
        koDescription: "무작위 salt와 지수형 비용 인자를 사용해 시간이 지나 하드웨어가 빨라져도 검증 비용을 높일 수 있다.",
        enDescription: "It uses a random salt and exponential cost factor so deployments can raise verification work as hardware becomes faster.",
        time: { typical: "O(2^cost)" }, space: "O(1) fixed state", pseudocode: "state <- EksBlowfishSetup(cost,salt,password)\nrepeat encryption of fixed text\nencode cost, salt, and result", references: ["source-bcrypt-1999", "source-handbook-applied-cryptography"]
      }),
      algorithm({
        id: "algo-ecdsa", en: "Elliptic Curve Digital Signature Algorithm", ko: "타원 곡선 전자서명 알고리즘", aliases: ["ECDSA"],
        koSummary: "타원곡선 이산 로그 문제를 기반으로 메시지 서명을 생성하고 검증하는 알고리즘",
        enSummary: "A digital signature algorithm based on the elliptic-curve discrete logarithm problem.",
        koDescription: "개인키와 메시지 해시, 매 서명의 nonce로 (r,s)를 만들고 공개키와 곡선 연산으로 검증한다. nonce 재사용이나 편향은 개인키를 노출한다.",
        enDescription: "It creates (r,s) from a private key, message hash, and per-signature nonce, then verifies with the public key and curve operations. Nonce reuse or bias can expose the key.",
        time: { sign: "O(log n) curve operations", verify: "O(log n) curve operations" }, space: "O(1) curve points", pseudocode: "z <- hash(message); choose nonce k\nR <- kG; r <- R.x mod n\ns <- k^-1(z + r*d) mod n\nverify using u1G + u2Q", references: ["source-fips-186-5", "source-rfc-6979", "source-nist-sp800-56a"]
      }),
      algorithm({
        id: "algo-lzma", en: "LZMA", ko: "LZMA 압축 알고리즘", aliases: ["Lempel–Ziv–Markov Chain Algorithm"],
        koSummary: "큰 사전의 LZ 계열 매칭과 범위 부호화를 결합한 무손실 압축 알고리즘",
        enSummary: "A lossless compressor combining large-dictionary LZ matching with range coding.",
        koDescription: "반복 문자열을 거리·길이 참조로 표현하고 문맥별 확률 모델이 제공하는 확률을 범위 부호화한다.",
        enDescription: "It represents repeated text with distance-length references and range-codes symbols using context-dependent probability models.",
        time: { compression: "Input and match-finder dependent", decompression: "O(n)" }, space: "O(dictionary size)", pseudocode: "find candidate dictionary matches\nchoose literals or distance-length pairs\nupdate context probabilities\nrange-encode each decision", references: ["source-lzma-sdk", "source-princeton-compression"]
      }),
      algorithm({
        id: "algo-chan-convex-hull", en: "Chan's Convex Hull Algorithm", ko: "찬 볼록 껍질 알고리즘", year: 1996, authors: ["Timothy M. Chan"],
        koSummary: "그레이엄 스캔과 자비스 행진을 결합해 O(n log h)에 평면 볼록 껍질을 구하는 알고리즘",
        enSummary: "An output-sensitive planar convex-hull algorithm running in O(n log h).",
        koDescription: "점을 작은 그룹으로 나눠 각 그룹 껍질을 만들고, 이 껍질들을 대상으로 제한된 자비스 행진을 수행하며 추정 h를 빠르게 늘린다.",
        enDescription: "It builds hulls for small groups and performs a bounded Jarvis march over those hulls, rapidly increasing a guess for output size h until it succeeds.",
        time: { typical: "O(n log h)" }, space: "O(n)", pseudocode: "for increasing hull-size guesses m\n  partition points into groups of m and hull each group\n  perform at most m gift-wrapping steps across group hulls\n  return if the hull closes", references: ["source-chan-convex-hull-1996", "source-de-berg-geometry"]
      }),
      algorithm({
        id: "algo-cohen-sutherland", en: "Cohen-Sutherland Line Clipping", ko: "코헨-서덜랜드 선분 클리핑", year: 1967, authors: ["Danny Cohen", "Ivan Sutherland"],
        koSummary: "끝점의 4비트 영역 코드로 직사각형 창에 대한 선분 수용·거부·절단을 수행하는 알고리즘",
        enSummary: "A rectangular line-clipping algorithm using four-bit endpoint region codes.",
        koDescription: "두 코드의 OR가 0이면 완전 수용하고 AND가 0이 아니면 완전 거부한다. 그 외에는 바깥 끝점을 해당 경계 교점으로 교체한다.",
        enDescription: "It trivially accepts when the codes' OR is zero and rejects when their AND is nonzero; otherwise it replaces an outside endpoint with its boundary intersection.",
        time: { typical: "O(1)" }, space: "O(1)", pseudocode: "compute outcodes c0,c1\nloop\n  if (c0 OR c1)=0: accept\n  if (c0 AND c1)!=0: reject\n  intersect an outside endpoint with a coded boundary",
        references: ["source-cohen-sutherland", "source-de-berg-geometry", "source-sutherland-graphics-1968"],
        code: "function cohenSutherland(x0,y0,x1,y1,r){const code=(x,y)=>(y>r.ymax?8:y<r.ymin?4:0)|(x>r.xmax?2:x<r.xmin?1:0);let a=code(x0,y0),b=code(x1,y1);for(;;){if(!(a|b))return[x0,y0,x1,y1];if(a&b)return null;const c=a||b;let x,y;if(c&8){x=x0+(x1-x0)*(r.ymax-y0)/(y1-y0);y=r.ymax;}else if(c&4){x=x0+(x1-x0)*(r.ymin-y0)/(y1-y0);y=r.ymin;}else if(c&2){y=y0+(y1-y0)*(r.xmax-x0)/(x1-x0);x=r.xmax;}else{y=y0+(y1-y0)*(r.xmin-x0)/(x1-x0);x=r.xmin;}if(c===a){x0=x;y0=y;a=code(x0,y0);}else{x1=x;y1=y;b=code(x1,y1);}}}"
      }),
      algorithm({
        id: "algo-ear-clipping-triangulation", en: "Ear Clipping Triangulation", ko: "귀 자르기 삼각분할",
        koSummary: "단순 다각형에서 내부 대각선이 되는 귀를 반복 제거해 삼각분할하는 알고리즘",
        enSummary: "A polygon triangulation algorithm that repeatedly removes a valid ear.",
        koDescription: "볼록한 세 연속 정점의 삼각형 안에 다른 정점이 없으면 가운데 정점을 귀로 제거하고 해당 삼각형을 출력한다.",
        enDescription: "When three consecutive vertices form a convex triangle containing no other vertex, it emits that triangle and removes the middle ear vertex.",
        time: { typical: "O(n²)" }, space: "O(n)", pseudocode: "store vertices in a circular list\nwhile more than three remain\n  find a convex ear containing no other vertex\n  output it and remove its middle vertex\noutput final triangle", references: ["source-meisters-ears-1975", "source-de-berg-geometry"]
      }),
      algorithm({
        id: "algo-cart", en: "CART", ko: "CART 결정 트리 알고리즘", aliases: ["Classification and Regression Trees"], year: 1984, authors: ["Leo Breiman", "Jerome Friedman", "Richard Olshen", "Charles Stone"],
        koSummary: "이진 분할과 비용 복잡도 가지치기로 분류·회귀 트리를 학습하는 알고리즘",
        enSummary: "A method for learning binary classification and regression trees with cost-complexity pruning.",
        koDescription: "각 노드에서 불순도나 제곱 오차를 가장 많이 줄이는 특성·임곗값을 골라 재귀 분할한 뒤 검증된 복잡도에 맞게 가지친다.",
        enDescription: "At each node it selects the feature-threshold split with greatest impurity or squared-error reduction, grows recursively, and prunes to a validated complexity.",
        time: { training: "Typically O(d n log n) with sorted features" }, space: "O(n + tree size)", pseudocode: "grow(node)\n  evaluate binary splits\n  choose best impurity reduction\n  recurse on both children\nprune using cost-complexity sequence", references: ["source-cart-1984", "source-sklearn-trees"]
      }),
      algorithm({
        id: "algo-gradient-boosting", en: "Gradient Boosting", ko: "그래디언트 부스팅", year: 2001, authors: ["Jerome H. Friedman"],
        koSummary: "손실의 음의 경사를 근사하는 약한 학습기를 순차적으로 더하는 앙상블 알고리즘",
        enSummary: "An ensemble method that sequentially adds weak learners approximating the negative loss gradient.",
        koDescription: "현재 모델의 의사 잔차를 계산하고 새 약한 학습기를 맞춘 뒤 학습률을 곱해 누적 모델에 추가한다.",
        enDescription: "It computes pseudo-residuals of the current model, fits a new weak learner to them, and adds its prediction scaled by a learning rate.",
        time: { training: "O(M × base learner cost)" }, space: "O(M × model size)", pseudocode: "initialize constant model F0\nfor m=1..M\n  residual <- negative loss gradient at F\n  fit weak learner h to residual\n  F <- F + learning_rate * h", references: ["source-friedman-gradient-boosting-2001", "source-elements-statistical-learning", "source-sklearn-ensemble"]
      }),
      algorithm({
        id: "algo-pca-svd", en: "PCA via SVD", ko: "SVD 기반 주성분 분석", aliases: ["Principal Component Analysis via SVD"],
        koSummary: "중심화한 데이터 행렬의 특이값 분해로 주성분을 구하는 차원 축소 알고리즘",
        enSummary: "A dimensionality-reduction algorithm obtaining principal components from the SVD of centered data.",
        koDescription: "각 특성 평균을 빼고 X=UΣVᵀ를 계산한다. V의 앞 열들이 최대 분산 방향이며 여기에 투영해 저차원 표현을 얻는다.",
        enDescription: "It centers each feature and computes X=UΣVᵀ. Leading columns of V are maximum-variance directions used for the lower-dimensional projection.",
        time: { dense: "O(min(nd², n²d))" }, space: "O(nd)", pseudocode: "Xc <- X - column means\nU,S,Vt <- SVD(Xc)\ncomponents <- first k rows of Vt\nreturn Xc * components^T", references: ["source-jolliffe-pca", "source-netlib-lapack"]
      }),
      algorithm({
        id: "algo-k-means-plus-plus", en: "k-means++", ko: "k-means++ 초기화 알고리즘", year: 2007, authors: ["David Arthur", "Sergei Vassilvitskii"],
        koSummary: "기존 중심과의 제곱 거리 비례 확률로 k-means 초기 중심을 선택하는 알고리즘",
        enSummary: "A k-means seeding algorithm sampling each new center proportional to squared distance from existing centers.",
        koDescription: "첫 중심은 균등 선택하고 이후 각 점의 가장 가까운 중심까지 제곱 거리를 가중치로 사용한다. 나쁜 무작위 초기화를 줄이고 기대 O(log k) 근사 보장을 준다.",
        enDescription: "It chooses the first center uniformly and weights later points by squared distance to the nearest center, reducing poor random starts and giving an expected O(log k) guarantee.",
        time: { initialization: "O(nkd)" }, space: "O(n + kd)", pseudocode: "choose first center uniformly\nwhile fewer than k centers\n  D(x) <- distance to nearest center\n  sample x with probability D(x)^2 / sum D^2\nrun ordinary k-means",
        references: ["source-kmeans-plus-plus-2007", "source-elements-statistical-learning", "source-sklearn-clustering"],
        code: "function kmeansPlusPlus(points,k,random=Math.random){const centers=[points[Math.floor(random()*points.length)]];const d2=(a,b)=>a.reduce((s,x,i)=>s+(x-b[i])**2,0);while(centers.length<k){const weights=points.map(p=>Math.min(...centers.map(c=>d2(p,c))));let r=random()*weights.reduce((a,b)=>a+b,0),i=0;while((r-=weights[i])>0)i++;centers.push(points[Math.min(i,points.length-1)]);}return centers;}"
      }),
      algorithm({
        id: "algo-l-bfgs", en: "Limited-Memory BFGS", ko: "제한 메모리 BFGS", aliases: ["L-BFGS"], year: 1989, authors: ["Dong C. Liu", "Jorge Nocedal"],
        koSummary: "최근의 위치·경사 차이만 저장해 BFGS 역헤시안 작용을 근사하는 대규모 최적화 알고리즘",
        enSummary: "A large-scale optimizer approximating the BFGS inverse-Hessian action from a short history.",
        koDescription: "최근 m개의 s와 y 벡터 쌍으로 두 번의 루프 재귀를 수행해 탐색 방향을 만들고 선 탐색으로 이동한다.",
        enDescription: "It uses a two-loop recursion over the latest m pairs of displacement and gradient-difference vectors to form a direction, followed by line search.",
        time: { perIteration: "O(md)" }, space: "O(md)", pseudocode: "g <- gradient(x)\np <- -twoLoopRecursion(g, recent s,y pairs)\nalpha <- lineSearch(x,p)\nupdate x and bounded history", references: ["source-lbfgs-1989", "source-nocedal-wright-numerical-optimization"]
      }),
      algorithm({
        id: "algo-ista", en: "Iterative Shrinkage-Thresholding Algorithm", ko: "반복 수축 임계 알고리즘", aliases: ["ISTA"], year: 2004, authors: ["Ingrid Daubechies", "Michel Defrise", "Christine De Mol"],
        koSummary: "경사 단계 뒤 소프트 임계값 근접 연산을 적용해 L1 정규화 문제를 푸는 알고리즘",
        enSummary: "A proximal-gradient algorithm solving L1-regularized objectives with soft thresholding.",
        koDescription: "매 반복에서 매끄러운 손실의 경사 방향으로 이동한 뒤 L1 항의 근접 연산인 soft-threshold를 적용한다.",
        enDescription: "Each iteration takes a gradient step on the smooth loss and then applies soft thresholding, the proximal operator of the L1 term.",
        time: { convergence: "O(1/t) objective residual" }, space: "O(d)", pseudocode: "repeat\n  z <- x - step * gradient(f,x)\n  x <- softThreshold(z, step*lambda)\nuntil converged",
        references: ["source-ista-2004", "source-fista-2009", "source-nocedal-wright-numerical-optimization"],
        code: "function ista(gradient,x,lambda,step,iters){const soft=(v,t)=>Math.sign(v)*Math.max(Math.abs(v)-t,0);for(let k=0;k<iters;k++){const g=gradient(x);x=x.map((v,i)=>soft(v-step*g[i],step*lambda));}return x;}"
      }),
      algorithm({
        id: "algo-fista", en: "FISTA", ko: "고속 반복 수축 임계 알고리즘", aliases: ["Fast Iterative Shrinkage-Thresholding Algorithm"], year: 2009, authors: ["Amir Beck", "Marc Teboulle"],
        koSummary: "Nesterov형 모멘텀으로 ISTA의 근접 경사 반복을 가속한 알고리즘",
        enSummary: "An accelerated proximal-gradient method adding Nesterov-style momentum to ISTA.",
        koDescription: "근접 경사로 새 점을 구한 뒤 이전 두 점의 차이를 가중해 외삽점을 만든다. 볼록 복합 목적함수에서 목적값 오차 O(1/t²)를 달성한다.",
        enDescription: "After a proximal-gradient step it extrapolates from the two latest points. For convex composite objectives it obtains an O(1/t²) objective residual.",
        time: { convergence: "O(1/t²) objective residual" }, space: "O(d)", pseudocode: "x <- y; t <- 1\nrepeat\n  next <- prox(y - step*gradient(f,y))\n  nextT <- (1 + sqrt(1+4t²))/2\n  y <- next + ((t-1)/nextT)(next-x)\n  x <- next; t <- nextT",
        references: ["source-fista-2009", "source-ista-2004", "source-nocedal-wright-numerical-optimization"],
        code: "function fista(gradient,x,prox,step,iters){let y=[...x],t=1;for(let k=0;k<iters;k++){const g=gradient(y),next=prox(y.map((v,i)=>v-step*g[i]),step);const nt=(1+Math.sqrt(1+4*t*t))/2;y=next.map((v,i)=>v+((t-1)/nt)*(v-x[i]));x=next;t=nt;}return x;}"
      })
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
