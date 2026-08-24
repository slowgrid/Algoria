(function registerAlgoriaAppliedExpansionAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  function code(lines) {
    return lines.join("\n");
  }

  function makeAlgorithm(config) {
    const entity = {
      id: config.id,
      type: "algorithm",
      name: config.name,
      aliases: config.aliases || [],
      localizedNames: config.localizedNames,
      summary: config.content.ko.summary,
      complexity: config.complexity,
      pseudocode: config.pseudocode,
      referenceIds: config.referenceIds,
      content: config.content,
      quality: {
        tier: config.tier,
        status: "reviewed"
      }
    };

    if (config.introduced) entity.introduced = config.introduced;
    if (config.authors) entity.authors = config.authors.map((name) => ({ name }));
    if (config.implementation) {
      entity.implementations = [
        { language: "JavaScript", code: config.implementation }
      ];
    }
    return entity;
  }

  const entities = [];

  entities.push(
    makeAlgorithm({
      id: "algo-hmac",
      name: "HMAC",
      aliases: [
        "Hash-Based Message Authentication Code",
        "Keyed-Hash Message Authentication Code"
      ],
      localizedNames: {
        en: "HMAC",
        ko: "해시 기반 메시지 인증 코드"
      },
      complexity: {
        time: {
          tag: "O(n) in the message length"
        },
        space: {
          streaming: "O(1) beyond the fixed-size hash state"
        }
      },
      pseudocode: code([
        "HMAC(hash, key, message)",
        "  if length(key) > blockSize: key <- hash(key)",
        "  pad key with zero bytes to blockSize",
        "  inner <- hash((key XOR ipad) || message)",
        "  return hash((key XOR opad) || inner)"
      ]),
      introduced: { year: 1996 },
      authors: ["Mihir Bellare", "Ran Canetti", "Hugo Krawczyk"],
      referenceIds: [
        "source-hmac-bck-1996",
        "source-rfc-2104",
        "source-rfc-4231"
      ],
      content: {
        ko: {
          summary: "비밀 키와 암호학적 해시를 두 겹으로 결합해 메시지 인증 태그를 만드는 알고리즘",
          description: "키를 해시 블록 크기로 정규화한 뒤 서로 다른 inner·outer 패딩과 XOR해 두 번 해시한다. 수신자는 같은 키로 태그를 다시 계산하고 상수 시간 비교를 해야 하며, HMAC은 무결성과 송신자 인증을 제공하지만 메시지를 암호화하지는 않는다.",
          advantages: [
            "검증된 구성으로 기존 암호학적 해시 구현을 재사용할 수 있다.",
            "메시지를 스트리밍하면서 상수 크기 상태로 태그를 계산할 수 있다."
          ],
          disadvantages: [
            "양쪽이 공유 비밀 키를 안전하게 배포하고 교체해야 한다.",
            "보안 수준은 선택한 해시·키 길이·태그 절단 길이에 의존하며 기밀성은 제공하지 않는다."
          ],
          useCases: [
            "API 요청과 네트워크 메시지의 무결성·인증",
            "HKDF 같은 키 유도 구성의 기반 의사난수 함수"
          ]
        },
        en: {
          summary: "An algorithm combining a secret key with a cryptographic hash in two layers to produce an authentication tag.",
          description: "It normalizes the key to the hash block size, XORs it with distinct inner and outer pads, and hashes twice. A receiver recomputes the tag with the shared key and compares it in constant time; HMAC authenticates integrity and origin but does not encrypt the message.",
          advantages: [
            "Its analyzed construction reuses established cryptographic hash implementations.",
            "It can authenticate a stream while retaining only fixed-size hash state."
          ],
          disadvantages: [
            "Both parties must distribute and rotate a shared secret securely.",
            "Security depends on the hash, key, and tag length, and the construction provides no confidentiality."
          ],
          useCases: [
            "Integrity and authentication for API requests and network messages",
            "A pseudorandom-function building block for key derivation such as HKDF"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "async function hmacSha256(keyBytes, messageBytes) {",
        "  const key = await globalThis.crypto.subtle.importKey(",
        "    \"raw\",",
        "    Uint8Array.from(keyBytes),",
        "    { name: \"HMAC\", hash: \"SHA-256\" },",
        "    false,",
        "    [\"sign\"]",
        "  );",
        "  const tag = await globalThis.crypto.subtle.sign(",
        "    \"HMAC\",",
        "    key,",
        "    Uint8Array.from(messageBytes)",
        "  );",
        "  return new Uint8Array(tag);",
        "}"
      ])
    }),
    makeAlgorithm({
      id: "algo-hkdf",
      name: "HKDF",
      aliases: ["HMAC-Based Extract-and-Expand Key Derivation Function"],
      localizedNames: {
        en: "HKDF",
        ko: "HMAC 기반 키 유도 함수"
      },
      complexity: {
        time: {
          typical: "O(n + L), where n is input-key material and L is output length"
        },
        space: {
          streaming: "O(h) beyond the O(L) output, for hash length h"
        }
      },
      pseudocode: code([
        "HKDF(hash, salt, inputKeyMaterial, info, length)",
        "  pseudorandomKey <- HMAC(hash, salt, inputKeyMaterial)",
        "  previous <- empty; output <- empty",
        "  for counter <- 1 to ceil(length / hashLength)",
        "    previous <- HMAC(hash, pseudorandomKey, previous || info || byte(counter))",
        "    append previous to output",
        "  return first length bytes of output"
      ]),
      introduced: { year: 2010 },
      authors: ["Hugo Krawczyk"],
      referenceIds: [
        "source-hkdf-krawczyk-2010",
        "source-rfc-5869",
        "source-rfc-6234"
      ],
      content: {
        ko: {
          summary: "입력 키 재료를 HMAC으로 추출한 뒤 목적별 키로 확장하는 키 유도 알고리즘",
          description: "Extract 단계는 선택적 salt와 입력 키 재료에서 고정 길이 의사난수 키를 만들고, Expand 단계는 info 컨텍스트와 카운터를 묶어 필요한 길이의 키 재료를 생성한다. RFC 5869는 출력 길이를 해시 출력 길이의 255배 이하로 제한한다.",
          advantages: [
            "불균일할 수 있는 입력 키 재료의 추출과 여러 목적 키의 확장을 분리한다.",
            "info 값으로 프로토콜·세션·용도 사이의 도메인을 명시적으로 분리할 수 있다."
          ],
          disadvantages: [
            "저엔트로피 비밀번호를 느리게 강화하는 용도가 아니므로 비밀번호 KDF를 대체하지 못한다.",
            "salt와 info의 의미를 잘못 정하거나 컨텍스트를 재사용하면 키 분리 목표를 약화할 수 있다."
          ],
          useCases: [
            "Diffie–Hellman 공유 비밀에서 암호화·인증 키 파생",
            "하나의 주 키에서 세션별·용도별 하위 키 생성"
          ]
        },
        en: {
          summary: "A key-derivation algorithm that extracts HMAC pseudorandom key material and expands it into purpose-specific keys.",
          description: "Extract combines optional salt with input keying material to form a fixed-size pseudorandom key. Expand binds context information and a counter to generate the requested key bytes; RFC 5869 limits output to 255 times the hash output length.",
          advantages: [
            "It separates normalization of possibly nonuniform key material from expansion into multiple keys.",
            "The info field explicitly separates protocol, session, and purpose domains."
          ],
          disadvantages: [
            "It is not a deliberately slow password-hardening function and must not replace a password KDF.",
            "Poor salt or info semantics and context reuse can undermine intended key separation."
          ],
          useCases: [
            "Deriving encryption and authentication keys from a Diffie–Hellman secret",
            "Generating session- and purpose-specific subkeys from one master key"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "async function hkdfSha256(inputKeyMaterial, length, salt = new Uint8Array(), info = new Uint8Array()) {",
        "  if (!Number.isInteger(length) || length < 0 || length > 255 * 32) {",
        "    throw new RangeError(\"HKDF-SHA-256 length must be between 0 and 8160 bytes.\");",
        "  }",
        "  if (length === 0) return new Uint8Array();",
        "  const key = await globalThis.crypto.subtle.importKey(",
        "    \"raw\",",
        "    Uint8Array.from(inputKeyMaterial),",
        "    \"HKDF\",",
        "    false,",
        "    [\"deriveBits\"]",
        "  );",
        "  const bits = await globalThis.crypto.subtle.deriveBits(",
        "    { name: \"HKDF\", hash: \"SHA-256\", salt: Uint8Array.from(salt), info: Uint8Array.from(info) },",
        "    key,",
        "    length * 8",
        "  );",
        "  return new Uint8Array(bits);",
        "}"
      ])
    }),
    makeAlgorithm({
      id: "algo-x25519",
      name: "X25519",
      aliases: ["Curve25519 Diffie–Hellman Function"],
      localizedNames: {
        en: "X25519",
        ko: "X25519 키 합의"
      },
      complexity: {
        time: {
          scalarMultiplication: "O(log p) field operations; 255 fixed ladder iterations"
        },
        space: {
          ladderState: "O(1) field elements"
        }
      },
      pseudocode: code([
        "X25519(privateScalar, peerUCoordinate)",
        "  clamp privateScalar as specified by RFC 7748",
        "  decode peerUCoordinate modulo 2^255 - 19",
        "  run the 255-step Montgomery ladder",
        "  encode the resulting u-coordinate as 32 little-endian bytes",
        "  reject an all-zero shared result before key derivation"
      ]),
      introduced: {
        year: 2006,
        note: "Introduced as the Curve25519 Diffie–Hellman function; the X25519 name and encoding were standardized in RFC 7748 in 2016."
      },
      authors: ["Daniel J. Bernstein"],
      referenceIds: [
        "source-curve25519-2006",
        "source-rfc-7748",
        "source-rfc-6090"
      ],
      content: {
        ko: {
          summary: "Curve25519의 Montgomery u-좌표 사다리로 공유 비밀을 계산하는 Diffie–Hellman 함수",
          description: "32바이트 비밀 스칼라를 clamp하고 상대의 32바이트 u-좌표에 고정 255단계 Montgomery ladder를 적용한다. 실제 프로토콜은 all-zero 결과를 거부하고 공유 값을 KDF와 transcript 컨텍스트에 넣어야 하며, X25519 자체는 상대 신원을 인증하지 않는다.",
          advantages: [
            "고정된 연산 구조와 단순한 32바이트 인터페이스로 안전한 구현을 돕는다.",
            "현대 키 합의 프로토콜에서 짧은 키와 높은 성능을 제공한다."
          ],
          disadvantages: [
            "낮은 차수 입력에 대한 all-zero 확인과 프로토콜 수준 KDF·인증이 별도로 필요하다.",
            "BigInt 같은 가변 시간 산술로 직접 구현하면 부채널에 취약하므로 검증된 상수 시간 라이브러리를 써야 한다."
          ],
          useCases: [
            "TLS·VPN·보안 메시징의 ephemeral key agreement",
            "Noise 계열 프로토콜과 현대 공개키 암호 시스템의 공유 비밀 생성"
          ]
        },
        en: {
          summary: "A Diffie–Hellman function computing a shared secret with the Curve25519 Montgomery u-coordinate ladder.",
          description: "It clamps a 32-byte private scalar and applies a fixed 255-step Montgomery ladder to the peer's 32-byte u-coordinate. A protocol must reject an all-zero result and feed the shared value into a KDF with transcript context; X25519 alone does not authenticate the peer.",
          advantages: [
            "A fixed operation structure and simple 32-byte interface support safer implementations.",
            "It offers short keys and high performance in modern key-agreement protocols."
          ],
          disadvantages: [
            "All-zero checking, a protocol-level KDF, and authentication remain mandatory.",
            "Handwritten variable-time arithmetic such as BigInt can leak secrets, so production code needs an audited constant-time library."
          ],
          useCases: [
            "Ephemeral key agreement in TLS, VPNs, and secure messaging",
            "Shared-secret generation in Noise-style protocols and modern public-key systems"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "// Educational variable-time reference; use audited constant-time cryptography in production.",
        "function x25519Educational(scalarBytes, peerBytes = Uint8Array.of(9, ...Array(31).fill(0))) {",
        "  const P = (1n << 255n) - 19n;",
        "  const A24 = 121665n;",
        "  const mod = (value) => { const result = value % P; return result < 0n ? result + P : result; };",
        "  const decode = (bytes) => {",
        "    let value = 0n;",
        "    for (let index = bytes.length - 1; index >= 0; index -= 1) value = (value << 8n) | BigInt(bytes[index]);",
        "    return value;",
        "  };",
        "  const encode = (value) => {",
        "    const output = new Uint8Array(32);",
        "    for (let index = 0; index < output.length; index += 1) { output[index] = Number(value & 255n); value >>= 8n; }",
        "    return output;",
        "  };",
        "  const power = (base, exponent) => {",
        "    let result = 1n; base = mod(base);",
        "    while (exponent > 0n) { if (exponent & 1n) result = mod(result * base); base = mod(base * base); exponent >>= 1n; }",
        "    return result;",
        "  };",
        "  const scalar = Uint8Array.from(scalarBytes);",
        "  const peer = Uint8Array.from(peerBytes);",
        "  if (scalar.length !== 32 || peer.length !== 32) throw new RangeError(\"X25519 inputs must be 32 bytes.\");",
        "  scalar[0] &= 248; scalar[31] &= 127; scalar[31] |= 64; peer[31] &= 127;",
        "  const k = decode(scalar); const x1 = decode(peer);",
        "  let x2 = 1n, z2 = 0n, x3 = x1, z3 = 1n, swap = 0n;",
        "  for (let bit = 254n; bit >= 0n; bit -= 1n) {",
        "    const current = (k >> bit) & 1n; swap ^= current;",
        "    if (swap) { [x2, x3] = [x3, x2]; [z2, z3] = [z3, z2]; }",
        "    swap = current;",
        "    const a = mod(x2 + z2), aa = mod(a * a), b = mod(x2 - z2), bb = mod(b * b);",
        "    const e = mod(aa - bb), c = mod(x3 + z3), d = mod(x3 - z3);",
        "    const da = mod(d * a), cb = mod(c * b);",
        "    x3 = mod((da + cb) * (da + cb)); z3 = mod(x1 * mod((da - cb) * (da - cb)));",
        "    x2 = mod(aa * bb); z2 = mod(e * mod(aa + A24 * e));",
        "  }",
        "  if (swap) { [x2, x3] = [x3, x2]; [z2, z3] = [z3, z2]; }",
        "  const output = encode(mod(x2 * power(z2, P - 2n)));",
        "  if (output.every((byte) => byte === 0)) throw new Error(\"X25519 produced an all-zero shared secret.\");",
        "  return output;",
        "}"
      ])
    })
  );

  entities.push(
    makeAlgorithm({
      id: "algo-stochastic-gradient-descent",
      name: "Stochastic Gradient Descent",
      aliases: ["SGD"],
      localizedNames: {
        en: "Stochastic Gradient Descent",
        ko: "확률적 경사 하강법"
      },
      complexity: {
        time: {
          training: "O(Tbd) for T updates, batch size b, and d parameters"
        },
        space: {
          optimizerState: "O(d) beyond the sampled batch"
        }
      },
      pseudocode: code([
        "STOCHASTIC_GRADIENT_DESCENT(initial, data, schedule)",
        "  parameters <- initial",
        "  for each update t",
        "    batch <- sample one example or a mini-batch",
        "    gradientEstimate <- average gradient on batch",
        "    parameters <- parameters - schedule(t) * gradientEstimate",
        "  return parameters"
      ]),
      introduced: {
        year: 1951,
        note: "Modern SGD descends from the stochastic-approximation method introduced by Robbins and Monro."
      },
      authors: ["Herbert Robbins", "Sutton Monro"],
      referenceIds: [
        "source-robbins-monro-1951",
        "source-stanford-cs229-gradient-descent",
        "source-sklearn-sgd"
      ],
      content: {
        ko: {
          summary: "무작위 표본이나 mini-batch의 기울기 추정으로 파라미터를 자주 갱신하는 최적화 알고리즘",
          description: "전체 데이터 기울기 대신 한 표본 또는 작은 batch에서 계산한 불편 또는 근사 기울기로 이동한다. 한 update가 저렴하고 온라인 학습이 가능하지만 gradient noise를 제어하려면 학습률 감소, 섞기, averaging과 정지 기준을 설계해야 한다.",
          advantages: [
            "전체 데이터가 메모리에 없거나 매우 커도 낮은 update 비용으로 학습할 수 있다.",
            "noise가 있는 반복 갱신은 비볼록 목적에서 평평한 영역과 일부 saddle point를 벗어나는 데 도움을 줄 수 있다."
          ],
          disadvantages: [
            "gradient 분산 때문에 목적 함수가 진동하고 정확한 해 근처 수렴이 느릴 수 있다.",
            "학습률 schedule·batch 크기·데이터 순서에 민감하고 실행이 비결정적일 수 있다."
          ],
          useCases: [
            "대규모 선형 모델과 신경망의 mini-batch 학습",
            "데이터가 계속 도착하는 온라인·스트리밍 최적화"
          ]
        },
        en: {
          summary: "An optimizer frequently updating parameters from gradients estimated on random examples or mini-batches.",
          description: "It moves using a gradient from one example or a small batch rather than the full dataset. Each update is cheap and supports online learning, but controlling gradient noise requires a learning-rate schedule, shuffling, averaging, and stopping criteria.",
          advantages: [
            "It learns with inexpensive updates even when the full dataset is enormous or does not fit in memory.",
            "Noisy iterations can help leave flat regions and some saddle points in nonconvex objectives."
          ],
          disadvantages: [
            "Gradient variance causes objective oscillation and can slow convergence near an accurate solution.",
            "Results are sensitive to schedule, batch size, and sample order and may be nondeterministic."
          ],
          useCases: [
            "Mini-batch training of large linear models and neural networks",
            "Online and streaming optimization as new observations arrive"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "function stochasticGradientDescent(initial, sampleCount, gradientAt, options = {}) {",
        "  if (!Number.isInteger(sampleCount) || sampleCount <= 0) throw new RangeError(\"sampleCount must be positive.\");",
        "  const epochs = options.epochs ?? 10;",
        "  const random = options.random ?? Math.random;",
        "  const rateAt = typeof options.learningRate === \"function\"",
        "    ? options.learningRate",
        "    : () => options.learningRate ?? 0.01;",
        "  const point = initial.slice();",
        "  let update = 0;",
        "  for (let epoch = 0; epoch < epochs; epoch += 1) {",
        "    for (let step = 0; step < sampleCount; step += 1) {",
        "      const index = Math.min(sampleCount - 1, Math.floor(random() * sampleCount));",
        "      const gradient = gradientAt(point.slice(), index);",
        "      if (gradient.length !== point.length) throw new RangeError(\"Gradient dimension mismatch.\");",
        "      const rate = rateAt(update++);",
        "      for (let dimension = 0; dimension < point.length; dimension += 1) point[dimension] -= rate * gradient[dimension];",
        "    }",
        "  }",
        "  return point;",
        "}"
      ])
    }),
    makeAlgorithm({
      id: "algo-momentum-gradient-descent",
      name: "Momentum Gradient Descent",
      aliases: ["Heavy-Ball Method", "Polyak Momentum"],
      localizedNames: {
        en: "Momentum Gradient Descent",
        ko: "모멘텀 경사 하강법"
      },
      complexity: {
        time: {
          updates: "O(Td) plus gradient-evaluation cost"
        },
        space: {
          optimizerState: "O(d) for parameters and velocity"
        }
      },
      pseudocode: code([
        "MOMENTUM_DESCENT(initial, gradient, rate, beta)",
        "  parameters <- initial; velocity <- zero vector",
        "  for each update t",
        "    velocity <- beta * velocity + gradient(parameters)",
        "    parameters <- parameters - rate * velocity",
        "  return parameters"
      ]),
      introduced: { year: 1964 },
      authors: ["Boris T. Polyak"],
      referenceIds: [
        "source-polyak-momentum-1964",
        "source-nocedal-wright-numerical-optimization",
        "source-deep-learning-book-optimization"
      ],
      content: {
        ko: {
          summary: "이전 update 방향을 velocity에 누적해 경사 하강의 진행을 가속하고 진동을 완화하는 알고리즘",
          description: "현재 gradient와 감쇠된 이전 velocity를 합쳐 다음 이동 방향을 만든다. 일관된 경사 방향에서는 속도가 누적되고 좁은 골짜기의 교차 방향 진동은 평균화될 수 있지만, 학습률과 momentum 계수 조합이 안정 영역을 벗어나면 overshoot하거나 발산한다.",
          advantages: [
            "조건이 나쁜 곡률에서 단순 경사 하강보다 관련 방향으로 빠르게 진행할 수 있다.",
            "연속된 gradient를 저역 통과시키듯 누적해 일부 고주파 진동을 줄인다."
          ],
          disadvantages: [
            "학습률과 momentum이 너무 크면 최소점을 지나치거나 지속적으로 진동할 수 있다.",
            "파라미터마다 서로 다른 곡률을 직접 보정하지 않으며 velocity 벡터를 추가 저장해야 한다."
          ],
          useCases: [
            "신경망과 대규모 differentiable 모델 학습",
            "길고 좁은 valley를 가진 smooth 목적 함수 최적화"
          ]
        },
        en: {
          summary: "An optimizer accumulating previous update directions in a velocity to accelerate descent and damp oscillation.",
          description: "It combines the current gradient with a decayed previous velocity to define the next step. Speed accumulates along consistent directions and can average cross-valley oscillation, but a learning-rate and momentum pair outside the stable region overshoots or diverges.",
          advantages: [
            "It can progress faster than plain gradient descent along useful directions under ill-conditioned curvature.",
            "Accumulating consecutive gradients acts like low-pass filtering and reduces some high-frequency oscillation."
          ],
          disadvantages: [
            "Excessive learning rate or momentum can overshoot a minimum or sustain oscillation.",
            "It does not directly adapt to coordinate-wise curvature and must store an extra velocity vector."
          ],
          useCases: [
            "Training neural networks and large differentiable models",
            "Optimizing smooth objectives with long narrow valleys"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "function momentumGradientDescent(initial, gradientAt, options = {}) {",
        "  const iterations = options.iterations ?? 1000;",
        "  const learningRate = options.learningRate ?? 0.01;",
        "  const momentum = options.momentum ?? 0.9;",
        "  const point = initial.slice();",
        "  const velocity = Array(point.length).fill(0);",
        "  for (let iteration = 0; iteration < iterations; iteration += 1) {",
        "    const gradient = gradientAt(point.slice(), iteration);",
        "    if (gradient.length !== point.length) throw new RangeError(\"Gradient dimension mismatch.\");",
        "    for (let dimension = 0; dimension < point.length; dimension += 1) {",
        "      velocity[dimension] = momentum * velocity[dimension] + gradient[dimension];",
        "      point[dimension] -= learningRate * velocity[dimension];",
        "    }",
        "  }",
        "  return point;",
        "}"
      ])
    }),
    makeAlgorithm({
      id: "algo-bfgs",
      name: "BFGS Algorithm",
      aliases: ["Broyden–Fletcher–Goldfarb–Shanno Algorithm", "BFGS Method"],
      localizedNames: {
        en: "BFGS Algorithm",
        ko: "BFGS 알고리즘"
      },
      complexity: {
        time: {
          iterations: "O(Td²) plus gradient and line-search evaluations"
        },
        space: {
          inverseHessianApproximation: "O(d²)"
        }
      },
      pseudocode: code([
        "BFGS(objective, gradient, initial)",
        "  x <- initial; H <- identity matrix",
        "  repeat until gradient is small",
        "    direction <- -H * gradient(x)",
        "    step <- line search satisfying suitable decrease and curvature conditions",
        "    s <- step * direction; y <- gradient(x + s) - gradient(x)",
        "    if transpose(s) * y is sufficiently positive",
        "      rho <- 1 / (transpose(y) * s)",
        "      H <- (I - rho*s*transpose(y)) * H * (I - rho*y*transpose(s)) + rho*s*transpose(s)",
        "    x <- x + s",
        "  return x"
      ]),
      introduced: { year: 1970 },
      authors: ["C. G. Broyden", "Roger Fletcher", "Donald Goldfarb", "David F. Shanno"],
      referenceIds: [
        "source-broyden-bfgs-1970",
        "source-fletcher-bfgs-1970",
        "source-goldfarb-bfgs-1970",
        "source-shanno-bfgs-1970",
        "source-nocedal-wright-numerical-optimization"
      ],
      content: {
        ko: {
          summary: "gradient 차이로 inverse Hessian 근사를 갱신하는 unconstrained quasi-Newton 최적화 알고리즘",
          description: "각 iteration은 현재 양의 정부호 inverse-Hessian 근사로 descent direction을 만들고 line search로 step을 고른다. 이동 s와 gradient 변화 y가 secant equation을 만족하도록 rank-two update를 적용하며, 적절한 smoothness와 line-search 조건에서 빠른 국소 수렴을 보인다.",
          advantages: [
            "실제 Hessian이나 second derivative를 계산하지 않고도 곡률 정보를 축적한다.",
            "매끄러운 중간 차원 문제에서 안정적인 line search와 함께 빠른 국소 수렴을 보이는 경우가 많다."
          ],
          disadvantages: [
            "조밀한 d×d 행렬 때문에 시간과 공간이 O(d²)여서 매우 높은 차원에는 부적합하다.",
            "noise가 큰 gradient·비매끄러운 목적·부적절한 line search에서는 update가 불안정해질 수 있다."
          ],
          useCases: [
            "매끄러운 unconstrained parameter estimation",
            "중간 차원 과학 계산과 maximum-likelihood 최적화"
          ]
        },
        en: {
          summary: "An unconstrained quasi-Newton optimizer updating an inverse-Hessian approximation from gradient differences.",
          description: "Each iteration forms a descent direction from a positive-definite inverse-Hessian approximation and chooses a step by line search. A rank-two update uses displacement s and gradient change y to satisfy the secant equation, giving fast local convergence under suitable smoothness and line-search conditions.",
          advantages: [
            "It accumulates curvature information without evaluating an exact Hessian or second derivatives.",
            "With a stable line search it often converges rapidly on smooth medium-dimensional problems."
          ],
          disadvantages: [
            "A dense d-by-d matrix costs O(d²) time and space, making it unsuitable for very high dimensions.",
            "Noisy gradients, nonsmooth objectives, or poor line search can destabilize the update."
          ],
          useCases: [
            "Smooth unconstrained parameter estimation",
            "Medium-dimensional scientific and maximum-likelihood optimization"
          ]
        }
      },
      tier: "standard"
    }),
    makeAlgorithm({
      id: "algo-adam",
      name: "Adam Optimizer",
      aliases: ["Adam", "Adaptive Moment Estimation"],
      localizedNames: {
        en: "Adam Optimizer",
        ko: "Adam 최적화 알고리즘"
      },
      complexity: {
        time: {
          updates: "O(Td) plus gradient-evaluation cost"
        },
        space: {
          optimizerState: "O(d) for first and second moment vectors"
        }
      },
      pseudocode: code([
        "ADAM(initial, stochasticGradient, rate, beta1, beta2, epsilon)",
        "  parameters <- initial; first <- 0; second <- 0",
        "  for t <- 1 to updateCount",
        "    gradient <- stochasticGradient(parameters)",
        "    first <- beta1 * first + (1 - beta1) * gradient",
        "    second <- beta2 * second + (1 - beta2) * gradient²",
        "    correctedFirst <- first / (1 - beta1^t)",
        "    correctedSecond <- second / (1 - beta2^t)",
        "    parameters <- parameters - rate * correctedFirst / (sqrt(correctedSecond) + epsilon)",
        "  return parameters"
      ]),
      introduced: {
        year: 2014,
        note: "First released as a 2014 preprint and presented at ICLR 2015."
      },
      authors: ["Diederik P. Kingma", "Jimmy Ba"],
      referenceIds: [
        "source-adam-2014",
        "source-deep-learning-book-optimization",
        "source-pytorch-adam"
      ],
      content: {
        ko: {
          summary: "gradient의 1차·2차 지수 이동평균으로 좌표별 학습률을 조절하는 stochastic optimizer",
          description: "Adam은 momentum과 유사한 first moment와 squared-gradient second moment를 유지한다. 초기값이 0인 이동평균의 편향을 보정한 뒤 first moment를 second moment의 제곱근으로 나누어 update한다. 실용적으로 강력하지만 모든 목적과 설정에서 SGD보다 우수하거나 수렴하는 것은 아니다.",
          advantages: [
            "희소하거나 scale이 다른 gradient에서 파라미터별 update 크기를 자동 조절한다.",
            "한 번의 gradient와 두 상태 벡터만 필요해 대규모 mini-batch 학습에 적용하기 쉽다."
          ],
          disadvantages: [
            "파라미터마다 first·second moment 두 벡터를 추가 저장해야 한다.",
            "학습률·beta·epsilon 선택과 문제 구조에 따라 수렴·일반화가 SGD 계열보다 나쁠 수 있다."
          ],
          useCases: [
            "신경망과 transformer의 초기 학습·빠른 기준선 구축",
            "희소 gradient와 비정상 stochastic objective 최적화"
          ]
        },
        en: {
          summary: "A stochastic optimizer adapting coordinate-wise steps from exponential averages of first and second gradient moments.",
          description: "Adam keeps a momentum-like first moment and a second moment of squared gradients. After correcting the zero-initialized averages for bias, it divides the first moment by the square root of the second. It is practical and powerful, but is not universally better than SGD or convergent for every objective and setting.",
          advantages: [
            "It automatically adapts per-parameter update sizes for sparse or differently scaled gradients.",
            "One gradient and two state vectors make it straightforward for large mini-batch training."
          ],
          disadvantages: [
            "It stores two additional first- and second-moment vectors for all parameters.",
            "Depending on learning rate, beta values, epsilon, and problem structure, convergence or generalization can trail SGD variants."
          ],
          useCases: [
            "Initial training and rapid baselines for neural networks and transformers",
            "Optimization with sparse gradients and nonstationary stochastic objectives"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "function adamOptimize(initial, gradientAt, options = {}) {",
        "  const iterations = options.iterations ?? 1000;",
        "  const rate = options.learningRate ?? 0.001;",
        "  const beta1 = options.beta1 ?? 0.9;",
        "  const beta2 = options.beta2 ?? 0.999;",
        "  const epsilon = options.epsilon ?? 1e-8;",
        "  const point = initial.slice();",
        "  const first = Array(point.length).fill(0);",
        "  const second = Array(point.length).fill(0);",
        "  for (let iteration = 1; iteration <= iterations; iteration += 1) {",
        "    const gradient = gradientAt(point.slice(), iteration);",
        "    if (gradient.length !== point.length) throw new RangeError(\"Gradient dimension mismatch.\");",
        "    for (let dimension = 0; dimension < point.length; dimension += 1) {",
        "      first[dimension] = beta1 * first[dimension] + (1 - beta1) * gradient[dimension];",
        "      second[dimension] = beta2 * second[dimension] + (1 - beta2) * gradient[dimension] ** 2;",
        "      const correctedFirst = first[dimension] / (1 - beta1 ** iteration);",
        "      const correctedSecond = second[dimension] / (1 - beta2 ** iteration);",
        "      point[dimension] -= rate * correctedFirst / (Math.sqrt(correctedSecond) + epsilon);",
        "    }",
        "  }",
        "  return point;",
        "}"
      ])
    })
  );

  entities.push(
    makeAlgorithm({
      id: "algo-gaussian-naive-bayes",
      name: "Gaussian Naive Bayes",
      aliases: ["GaussianNB"],
      localizedNames: {
        en: "Gaussian Naive Bayes",
        ko: "가우시안 나이브 베이즈"
      },
      complexity: {
        time: {
          training: "O(nd)",
          prediction: "O(cd) per sample"
        },
        space: {
          model: "O(cd)"
        }
      },
      pseudocode: code([
        "TRAIN_GAUSSIAN_NAIVE_BAYES(samples, labels)",
        "  for each class c",
        "    prior[c] <- count(c) / sampleCount",
        "    for each feature j",
        "      mean[c,j] <- mean of feature j among class-c samples",
        "      variance[c,j] <- smoothed variance among class-c samples",
        "  return prior, mean, variance",
        "",
        "PREDICT(sample)",
        "  for each class c",
        "    score[c] <- log(prior[c]) + sum of Gaussian log likelihoods",
        "  return class with maximum score"
      ]),
      introduced: {
        note: "A Gaussian-likelihood specialization of the classical naive Bayes family; it has no single canonical introduction paper."
      },
      referenceIds: [
        "source-sklearn-naive-bayes",
        "source-elements-statistical-learning"
      ],
      content: {
        ko: {
          summary: "클래스가 주어졌을 때 각 연속 특성이 독립 Gaussian 분포를 따른다고 가정하는 분류 알고리즘",
          description: "학습 시 클래스 prior와 클래스·특성별 평균·분산을 최대우도로 추정한다. 예측은 underflow를 피하기 위해 각 클래스의 log prior와 Gaussian log likelihood 합을 비교하며, 분산에는 작은 smoothing 값을 더한다.",
          advantages: [
            "학습과 예측이 빠르고 모델이 클래스 수와 특성 수에만 비례한다.",
            "적은 데이터에서도 사용할 수 있고 충분 통계를 누적해 온라인 학습하기 쉽다."
          ],
          disadvantages: [
            "조건부 독립성과 Gaussian 가정이 강해 상관된 특성이나 다봉 분포를 잘 표현하지 못한다.",
            "분류가 맞더라도 사후확률이 과도하게 확신적이어서 확률 보정이 필요할 수 있다."
          ],
          useCases: [
            "연속 센서·의료 측정값의 빠른 기준 분류기",
            "작은 데이터셋과 스트리밍 데이터의 증분 분류"
          ]
        },
        en: {
          summary: "A classifier assuming each continuous feature follows an independent Gaussian distribution conditional on the class.",
          description: "Training estimates class priors and a mean and variance for every class-feature pair by maximum likelihood. Prediction compares the sum of log priors and Gaussian log likelihoods to avoid underflow, with a small variance-smoothing term.",
          advantages: [
            "Training and prediction are fast, and model size depends only on classes and features.",
            "It works with limited data and supports online updates through sufficient statistics."
          ],
          disadvantages: [
            "Conditional independence and Gaussian assumptions can poorly model correlated or multimodal features.",
            "Posterior probabilities may be overconfident even when classification is useful, requiring calibration."
          ],
          useCases: [
            "Fast baseline classification of continuous sensor or medical measurements",
            "Incremental classification for small or streaming datasets"
          ]
        }
      },
      tier: "standard"
    }),
    makeAlgorithm({
      id: "algo-smo",
      name: "Sequential Minimal Optimization",
      aliases: ["SMO", "Platt's SMO"],
      localizedNames: {
        en: "Sequential Minimal Optimization",
        ko: "순차 최소 최적화"
      },
      complexity: {
        time: {
          training: "Heuristic- and kernel-dependent; empirical scaling ranges from near O(n) to O(n²) on the original study's test problems",
          pairUpdate: "O(n) without a maintained error cache"
        },
        space: {
          workingSet: "O(n) excluding an optional kernel cache",
          fullKernelCache: "O(n²)"
        }
      },
      pseudocode: code([
        "SMO_TRAIN(samples, labels, C, kernel)",
        "  initialize every multiplier alpha to zero and bias to zero",
        "  repeat until a pass changes no violating pair",
        "    choose alpha[i] that violates a KKT condition",
        "    choose a second multiplier alpha[j] by an error heuristic",
        "    compute feasible bounds from labels and C",
        "    solve the two-variable quadratic subproblem analytically",
        "    clip alpha[j], update alpha[i], and update the bias",
        "    update cached prediction errors if present",
        "  return support vectors, multipliers, and bias"
      ]),
      introduced: { year: 1998 },
      authors: ["John C. Platt"],
      referenceIds: [
        "source-platt-smo-1998",
        "source-elements-statistical-learning"
      ],
      content: {
        ko: {
          summary: "SVM의 이차 계획 문제를 두 Lagrange multiplier씩 해석적으로 푸는 학습 알고리즘",
          description: "SVM dual 제약에서 두 multiplier만 선택하면 등식 제약을 유지한 채 작은 subproblem을 닫힌 형태로 풀 수 있다. SMO는 KKT 위반과 error 차이를 이용해 쌍을 선택하고 수렴할 때까지 multiplier와 bias를 갱신한다. 실행 시간은 kernel·데이터·선택 heuristic과 cache에 크게 좌우된다.",
          advantages: [
            "큰 QP solver나 행렬 분해 없이 가장 작은 두 변수 subproblem을 해석적으로 푼다.",
            "전체 kernel 행렬을 저장하지 않으면 학습 표본 수에 선형인 작업 메모리로 동작할 수 있다."
          ],
          disadvantages: [
            "working-set 선택과 허용 오차에 따라 수렴 속도가 크게 변하고 하나의 단순한 시간 경계로 설명하기 어렵다.",
            "기본 절차는 이진 SVM 학습이며 다중 클래스 전략과 feature scaling을 별도로 설계해야 한다."
          ],
          useCases: [
            "kernel support vector classifier 학습",
            "희소 텍스트·중간 규모 데이터의 maximum-margin 분류"
          ]
        },
        en: {
          summary: "An SVM training algorithm analytically solving the quadratic program two Lagrange multipliers at a time.",
          description: "Selecting two multipliers in the SVM dual preserves the equality constraint while making the tiny subproblem analytically solvable. SMO uses KKT violations and error differences to choose pairs and updates multipliers and bias until convergence. Runtime depends strongly on the kernel, data, selection heuristic, and cache.",
          advantages: [
            "It avoids a large QP solver and matrix factorization by solving the smallest two-variable subproblem analytically.",
            "Without a full kernel matrix it can use working memory linear in the number of training samples."
          ],
          disadvantages: [
            "Working-set selection and tolerances strongly affect convergence, preventing one simple runtime bound.",
            "The core procedure trains a binary SVM; multiclass strategy and feature scaling remain separate concerns."
          ],
          useCases: [
            "Training kernel support vector classifiers",
            "Maximum-margin classification of sparse text and medium-size datasets"
          ]
        }
      },
      tier: "standard"
    }),
    makeAlgorithm({
      id: "algo-adaboost",
      name: "AdaBoost",
      aliases: ["Adaptive Boosting"],
      localizedNames: {
        en: "AdaBoost",
        ko: "에이다부스트"
      },
      complexity: {
        time: {
          training: "O(T(W + n)) for T rounds and weak-learner cost W"
        },
        space: {
          typical: "O(n + Tm), for sample weights and T weak models of size m"
        }
      },
      pseudocode: code([
        "ADABOOST(samples, labels, rounds)",
        "  initialize sample weights uniformly",
        "  for t <- 1 to rounds",
        "    train weak classifier h[t] using current weights",
        "    error <- weighted misclassification rate of h[t]",
        "    alpha[t] <- 0.5 * log((1 - error) / error)",
        "    multiply each weight by exp(-alpha[t] * label * h[t](sample))",
        "    normalize all weights",
        "  return sign of the weighted sum of weak predictions"
      ]),
      introduced: { year: 1995 },
      authors: ["Yoav Freund", "Robert E. Schapire"],
      referenceIds: [
        "source-freund-schapire-adaboost-1995",
        "source-elements-statistical-learning",
        "source-sklearn-ensemble"
      ],
      content: {
        ko: {
          summary: "오분류 표본의 가중치를 높이며 약한 분류기들을 가중 투표로 결합하는 boosting 알고리즘",
          description: "각 round에서 현재 sample weight로 weak learner를 학습하고 weighted error에서 model weight를 계산한다. 틀린 표본은 다음 round에서 더 큰 영향을 받으며, 최종 분류는 모든 weak prediction의 부호 있는 가중 합으로 정한다.",
          advantages: [
            "조금만 우수한 weak learner를 결합해 강한 비선형 분류기를 만들 수 있다.",
            "하나의 간단한 재가중 규칙으로 다양한 기본 분류기와 결합할 수 있다."
          ],
          disadvantages: [
            "label noise와 outlier를 계속 강조해 성능이 악화될 수 있다.",
            "round가 순차 의존하므로 완전 병렬화가 어렵고 확률 출력은 별도 보정이 필요하다."
          ],
          useCases: [
            "decision stump를 이용한 표형 데이터 분류",
            "객체 탐지 cascade와 비용 민감 분류의 기반 앙상블"
          ]
        },
        en: {
          summary: "A boosting algorithm that increases the weight of misclassified samples and combines weak classifiers by weighted vote.",
          description: "Each round fits a weak learner under current sample weights and derives a model weight from its weighted error. Misclassified examples matter more in the next round, and final classification takes the sign of the weighted sum of weak predictions.",
          advantages: [
            "It turns weak learners that are only slightly better than chance into a strong nonlinear classifier.",
            "One simple reweighting rule can wrap many kinds of base classifier."
          ],
          disadvantages: [
            "Repeatedly emphasizing label noise and outliers can damage performance.",
            "Rounds are sequentially dependent, and probability outputs need separate calibration."
          ],
          useCases: [
            "Tabular classification with decision stumps",
            "Base ensembles for object-detection cascades and cost-sensitive classification"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "function trainAdaBoost(samples, labels, rounds = 20) {",
        "  const count = samples.length;",
        "  if (count === 0 || labels.length !== count) throw new RangeError(\"Samples and labels must align.\");",
        "  const dimensions = samples[0].length;",
        "  let weights = Array(count).fill(1 / count);",
        "  const stumps = [];",
        "  const stumpPrediction = (sample, stump) => stump.polarity * (sample[stump.feature] < stump.threshold ? -1 : 1);",
        "  for (let round = 0; round < rounds; round += 1) {",
        "    let best = null;",
        "    for (let feature = 0; feature < dimensions; feature += 1) {",
        "      const values = [...new Set(samples.map((sample) => sample[feature]))].sort((a, b) => a - b);",
        "      const thresholds = [values[0] - 1, ...values.map((value, index) => index + 1 < values.length ? (value + values[index + 1]) / 2 : value + 1)];",
        "      for (const threshold of thresholds) for (const polarity of [-1, 1]) {",
        "        const stump = { feature, threshold, polarity };",
        "        let error = 0;",
        "        for (let index = 0; index < count; index += 1) if (stumpPrediction(samples[index], stump) !== labels[index]) error += weights[index];",
        "        if (!best || error < best.error) best = { ...stump, error };",
        "      }",
        "    }",
        "    if (!best || best.error >= 0.5) break;",
        "    const clippedError = Math.max(1e-15, best.error);",
        "    const alpha = 0.5 * Math.log((1 - clippedError) / clippedError);",
        "    let total = 0;",
        "    weights = weights.map((weight, index) => {",
        "      const next = weight * Math.exp(-alpha * labels[index] * stumpPrediction(samples[index], best));",
        "      total += next; return next;",
        "    }).map((weight) => weight / total);",
        "    stumps.push({ feature: best.feature, threshold: best.threshold, polarity: best.polarity, alpha });",
        "    if (best.error <= 1e-15) break;",
        "  }",
        "  return { stumps, predict(sample) {",
        "    const score = stumps.reduce((sum, stump) => sum + stump.alpha * stumpPrediction(sample, stump), 0);",
        "    return score >= 0 ? 1 : -1;",
        "  } };",
        "}"
      ])
    }),
    makeAlgorithm({
      id: "algo-expectation-maximization",
      name: "Expectation-Maximization Algorithm",
      aliases: ["EM Algorithm", "Expectation–Maximization"],
      localizedNames: {
        en: "Expectation-Maximization Algorithm",
        ko: "기댓값 최대화 알고리즘"
      },
      complexity: {
        time: {
          typical: "O(T(E + M)) for T iterations and model-specific E- and M-step costs"
        },
        space: {
          typical: "Model-dependent; O(nk) when storing responsibilities for n samples and k components"
        }
      },
      pseudocode: code([
        "EXPECTATION_MAXIMIZATION(observedData, initialParameters)",
        "  parameters <- initialParameters",
        "  repeat until likelihood improvement is small",
        "    E-step: compute the conditional distribution of latent variables",
        "            under observed data and current parameters",
        "    M-step: choose parameters maximizing the expected complete-data log likelihood",
        "    evaluate convergence and guard against numerical failure",
        "  return parameters"
      ]),
      introduced: { year: 1977 },
      authors: ["Arthur P. Dempster", "Nan M. Laird", "Donald B. Rubin"],
      referenceIds: [
        "source-dempster-laird-rubin-em-1977",
        "source-elements-statistical-learning"
      ],
      content: {
        ko: {
          summary: "잠재 변수의 조건부 기대와 파라미터 최대화를 번갈아 수행하는 반복 추정 알고리즘",
          description: "E-step은 현재 파라미터에서 관측 데이터가 주어졌을 때 complete-data log likelihood의 기대를 계산하고, M-step은 그 기대를 최대화하는 새 파라미터를 선택한다. 정확한 두 단계를 수행하면 관측 데이터 likelihood는 감소하지 않지만 전역 최대를 보장하지는 않는다.",
          advantages: [
            "직접 최적화하기 어려운 결측·잠재 변수 모델을 두 개의 구조화된 단계로 나눈다.",
            "각 모델의 조건부 추론과 닫힌 형태 업데이트를 활용할 수 있다."
          ],
          disadvantages: [
            "초기값에 따라 서로 다른 local maximum이나 saddle point에 수렴할 수 있다.",
            "E-step 추론 또는 M-step 최적화가 어려운 모델에서는 한 iteration 자체가 비싸거나 근사적이다."
          ],
          useCases: [
            "Gaussian mixture model의 파라미터 추정",
            "결측 데이터·hidden Markov model·latent-variable 통계 추정"
          ]
        },
        en: {
          summary: "An iterative estimator alternating conditional expectation of latent variables with parameter maximization.",
          description: "The E-step computes the expected complete-data log likelihood under latent variables conditioned on observed data and current parameters. The M-step chooses parameters maximizing that expectation. Exact steps do not decrease observed-data likelihood, but they do not guarantee a global maximum.",
          advantages: [
            "It turns difficult missing- or latent-variable optimization into two structured steps.",
            "Each model can exploit its own conditional inference and closed-form updates."
          ],
          disadvantages: [
            "Initialization can lead to different local maxima or saddle points.",
            "A model with difficult inference or optimization can make each E- or M-step expensive or approximate."
          ],
          useCases: [
            "Parameter estimation for Gaussian mixture models",
            "Statistical estimation with missing data, hidden Markov models, and latent variables"
          ]
        }
      },
      tier: "standard"
    })
  );

  entities.push(
    makeAlgorithm({
      id: "algo-lz4",
      name: "LZ4",
      aliases: ["LZ4 Block Compression"],
      localizedNames: {
        en: "LZ4",
        ko: "LZ4 압축 알고리즘"
      },
      complexity: {
        time: {
          decoding: "O(c + u) for compressed size c and produced size u",
          encoding: "Implementation-dependent; hash-table encoders are near O(n) typical, but the format does not prescribe a match finder"
        },
        space: {
          decoding: "O(1) beyond output for one raw block",
          encoding: "Implementation-dependent, commonly O(w) for a bounded history window"
        }
      },
      pseudocode: code([
        "LZ4_BLOCK_DECODE(input, expectedOutputSize)",
        "  while compressed input remains",
        "    token <- next byte",
        "    read literal length from token high nibble and extension bytes",
        "    copy that many literal bytes to output",
        "    if block ended: stop",
        "    read two-byte little-endian match offset",
        "    read match length from token low nibble and extension bytes; add 4",
        "    copy match bytes from already produced output, allowing overlap",
        "  validate the consumed input and produced output sizes"
      ]),
      introduced: {
        year: 2011,
        note: "Created by Yann Collet; current interoperability is defined by the maintained block and frame format documents."
      },
      authors: ["Yann Collet"],
      referenceIds: ["source-lz4-block-format", "source-lz4-frame-format"],
      content: {
        ko: {
          summary: "리터럴과 짧은 거리·길이 참조를 바이트 단위로 표현해 빠른 복호를 지향하는 LZ77 계열 압축 형식",
          description: "raw LZ4 block은 token, literal run, 16비트 offset, match length의 연속으로 구성된다. 공식 block 문서는 유효한 바이트 표현을 정의할 뿐 compressor의 match finder나 탐색 깊이는 고정하지 않으므로, 압축 시간과 압축률은 구현·레벨에 따라 달라진다. 파일·스트림에는 크기와 체크섬 등을 담는 별도 frame 형식이 필요하다.",
          advantages: [
            "단순한 바이트 지향 명령과 겹침 복사로 매우 빠른 복호를 지향한다.",
            "frame 형식에서 독립 블록과 연결 블록을 선택해 병렬성·압축률을 조절할 수 있다."
          ],
          disadvantages: [
            "고압축률 코덱보다 반복 패턴과 통계적 중복을 덜 압축하는 경우가 많다.",
            "raw block만으로는 원본 크기·체크섬·프레이밍을 알 수 없고 encoder 복잡도도 표준이 보장하지 않는다."
          ],
          useCases: [
            "실시간 로그·게임 자산·메모리 캐시의 저지연 압축",
            "저장소와 네트워크 파이프라인에서 처리량 중심의 블록 압축"
          ]
        },
        en: {
          summary: "An LZ77-family format using byte-oriented literals and short distance-length references for fast decoding.",
          description: "A raw LZ4 block is a sequence of tokens, literal runs, 16-bit offsets, and match lengths. The official block document defines the interoperable byte representation, not a compressor's match finder or search depth, so encoding time and ratio vary by implementation and level. Files and streams need the separate frame format for sizes, checksums, and framing.",
          advantages: [
            "Simple byte-oriented commands and overlapping copies are designed for very fast decoding.",
            "The frame format offers independent or linked blocks to trade parallelism for compression ratio."
          ],
          disadvantages: [
            "It often compresses repeated and statistical structure less densely than high-ratio codecs.",
            "A raw block omits size, checksum, and framing metadata, and the standard does not guarantee encoder complexity."
          ],
          useCases: [
            "Low-latency compression for live logs, game assets, and memory caches",
            "Throughput-oriented block compression in storage and network pipelines"
          ]
        }
      },
      tier: "standard"
    }),
    makeAlgorithm({
      id: "algo-brotli",
      name: "Brotli",
      aliases: ["Brotli Compression"],
      localizedNames: {
        en: "Brotli",
        ko: "브로틀리 압축 알고리즘"
      },
      complexity: {
        time: {
          decoding: "O(c + u) for compressed size c and produced size u",
          encoding: "Implementation- and quality-level-dependent"
        },
        space: {
          typical: "O(w + t), for the sliding window w and decoding tables t"
        }
      },
      pseudocode: code([
        "BROTLI_DECODE(stream)",
        "  read stream window parameters",
        "  for each meta-block",
        "    read block splits, context maps, and prefix-code descriptions",
        "    construct canonical prefix-code tables",
        "    decode commands containing literal insertion and backward copy lengths",
        "    emit literals or transformed static-dictionary words",
        "    perform LZ77-style copies from the sliding window",
        "  return the reconstructed byte stream"
      ]),
      introduced: {
        year: 2013,
        note: "Introduced by Google in late 2013; the interoperable data format was published as RFC 7932 in 2016."
      },
      authors: ["Jyrki Alakuijala", "Zoltan Szabadka"],
      referenceIds: ["source-rfc-7932", "source-google-brotli-2019"],
      content: {
        ko: {
          summary: "LZ77 참조, 정적 사전, 컨텍스트 모델링과 Huffman 부호를 결합한 범용 무손실 압축 형식",
          description: "Brotli는 meta-block마다 literal·length·distance용 prefix code와 컨텍스트를 기술하고, sliding-window 참조와 미리 정의된 단어 사전을 함께 사용한다. RFC 7932는 호환 가능한 stream과 decoder를 정의하지만 최적의 encoder 탐색 전략은 하나로 고정하지 않는다.",
          advantages: [
            "웹 텍스트와 글꼴에서 정적 사전과 컨텍스트 모델링으로 높은 압축률을 낼 수 있다.",
            "표준 stream은 bounded window로 순차 복호가 가능하고 브라우저·웹 서버 생태계에 널리 통합된다."
          ],
          disadvantages: [
            "높은 품질 설정의 인코딩은 많은 CPU 시간과 탐색 메모리를 사용할 수 있다.",
            "stream 자체는 임의 접근을 목표로 하지 않으며 완전한 encoder·decoder 구현이 복잡하다."
          ],
          useCases: [
            "HTTP 응답의 HTML·CSS·JavaScript 전송 압축",
            "WOFF2 웹 글꼴과 정적 웹 자산 배포"
          ]
        },
        en: {
          summary: "A general lossless format combining LZ77 references, a static dictionary, context modeling, and Huffman codes.",
          description: "Brotli describes prefix codes and contexts for literals, lengths, and distances in each meta-block, then combines sliding-window references with a predefined word dictionary. RFC 7932 defines an interoperable stream and decoder but does not prescribe one optimal encoder search strategy.",
          advantages: [
            "Its static dictionary and context modeling can provide high ratios for web text and fonts.",
            "The standardized stream supports sequential bounded-window decoding and broad browser and server integration."
          ],
          disadvantages: [
            "High encoder quality levels can consume substantial CPU time and search memory.",
            "The stream does not target random access, and a complete encoder or decoder is complex."
          ],
          useCases: [
            "HTTP transfer compression for HTML, CSS, and JavaScript",
            "Distribution of WOFF2 web fonts and static web assets"
          ]
        }
      },
      tier: "standard"
    })
  );

  entities.push(
    makeAlgorithm({
      id: "algo-fortune-voronoi",
      name: "Fortune's Algorithm",
      aliases: ["Fortune Sweep", "Voronoi Sweep-Line Algorithm"],
      localizedNames: {
        en: "Fortune's Algorithm",
        ko: "포춘 보로노이 알고리즘"
      },
      complexity: {
        time: { worstCase: "O(n log n)" },
        space: { worstCase: "O(n)" }
      },
      pseudocode: code([
        "FORTUNE_VORONOI(sites)",
        "  queue <- all site events ordered by sweep coordinate",
        "  beachLine <- empty balanced search structure",
        "  while queue is not empty",
        "    event <- extract next valid event",
        "    if event is a site event",
        "      split the beach-line arc above the site",
        "      create bisector edges and schedule neighboring circle events",
        "    else",
        "      remove the disappearing arc and finish the meeting vertex",
        "      invalidate stale events and schedule new neighboring circle events",
        "  extend unfinished rays and return the Voronoi diagram"
      ]),
      introduced: { year: 1987 },
      authors: ["Steven Fortune"],
      referenceIds: ["source-fortune-voronoi-1987", "source-de-berg-geometry"],
      content: {
        ko: {
          summary: "포물선 beach line과 site·circle event를 스윕해 평면 Voronoi diagram을 만드는 알고리즘",
          description: "sweep line이 내려가며 이미 만난 site와 아직 만나지 않은 영역의 경계를 beach line으로 유지한다. 새 site는 arc를 분할하고, 세 연속 arc가 한 점에서 사라질 때의 circle event는 Voronoi vertex와 edge를 확정한다. 우선순위 큐와 균형 탐색 구조로 이벤트당 로그 시간을 얻는다.",
          advantages: [
            "평면의 n개 점에 대해 최악 O(n log n) 시간과 O(n) 공간을 달성한다.",
            "생성된 Voronoi 구조의 쌍대 관계를 이용해 Delaunay triangulation도 얻을 수 있다."
          ],
          disadvantages: [
            "beach-line arc와 무효화된 circle event를 정확히 관리하는 구현이 복잡하다.",
            "공선·공원점과 부동소수점 오차에는 강건한 기하 판정과 일관된 tie-breaking이 필요하다."
          ],
          useCases: [
            "최근접 시설 영역과 공간 분할 계산",
            "Delaunay triangulation·메시 생성·GIS 전처리"
          ]
        },
        en: {
          summary: "A sweep-line algorithm constructing a planar Voronoi diagram with a parabolic beach line and site and circle events.",
          description: "As the sweep advances, the beach line separates regions influenced by encountered sites from the untouched plane. A site event splits an arc; a circle event where a middle arc disappears fixes a Voronoi vertex and edges. A priority queue and balanced search structure give logarithmic event operations.",
          advantages: [
            "It achieves O(n log n) worst-case time and O(n) space for n planar point sites.",
            "The dual structure of the output can also yield a Delaunay triangulation."
          ],
          disadvantages: [
            "Correctly maintaining beach-line arcs and invalidated circle events is intricate.",
            "Collinear or cocircular inputs and floating-point error require robust predicates and consistent tie-breaking."
          ],
          useCases: [
            "Nearest-facility regions and spatial partitioning",
            "Delaunay triangulation, mesh generation, and GIS preprocessing"
          ]
        }
      },
      tier: "standard"
    }),
    makeAlgorithm({
      id: "algo-sutherland-hodgman",
      name: "Sutherland-Hodgman Polygon Clipping",
      aliases: ["Sutherland–Hodgman Algorithm", "Reentrant Polygon Clipping"],
      localizedNames: {
        en: "Sutherland-Hodgman Polygon Clipping",
        ko: "서덜랜드-호지먼 다각형 클리핑"
      },
      complexity: {
        time: { typical: "O(m(n + k)) across m clip edges and intermediate output size k" },
        space: { buffered: "O(k) for intermediate vertices" }
      },
      pseudocode: code([
        "SUTHERLAND_HODGMAN(subjectPolygon, convexClipPolygon)",
        "  output <- subjectPolygon",
        "  for each directed edge of the clip polygon",
        "    input <- output; output <- empty",
        "    previous <- last vertex of input",
        "    for each current vertex of input",
        "      if current is inside",
        "        if previous is outside: append boundary intersection",
        "        append current",
        "      else if previous is inside: append boundary intersection",
        "      previous <- current",
        "  return output"
      ]),
      introduced: { year: 1974 },
      authors: ["Ivan E. Sutherland", "Gary W. Hodgman"],
      referenceIds: [
        "source-sutherland-hodgman-1974",
        "source-helsinki-polygon-clipping",
        "source-de-berg-geometry"
      ],
      content: {
        ko: {
          summary: "subject polygon을 볼록 clip window의 각 반평면에 차례로 통과시키는 다각형 클리핑 알고리즘",
          description: "clip polygon의 방향 있는 각 변을 하나의 경계로 보고 현재 vertex 순환을 inside/outside 전이에 따라 복사하거나 교점을 삽입한다. 한 경계의 출력이 다음 경계의 입력이 되며, clip window는 볼록하고 winding 방향이 일관되어야 한다.",
          advantages: [
            "같은 한 경계 처리기를 반복 적용하는 단순한 파이프라인 구조를 갖는다.",
            "각 단계는 vertex stream을 순차 처리하므로 버퍼 또는 재진입 방식으로 구현할 수 있다."
          ],
          disadvantages: [
            "기본 알고리즘은 볼록 clip polygon을 가정하며 오목 window에는 그대로 적용할 수 없다.",
            "경계 위 점·평행선·근접 교점에서는 epsilon과 winding 규칙을 일관되게 정해야 한다."
          ],
          useCases: [
            "그래픽 렌더링 viewport에 대한 polygon clipping",
            "GIS와 CAD에서 convex 영역과 polygon의 교집합 계산"
          ]
        },
        en: {
          summary: "A polygon-clipping algorithm passing a subject polygon through each half-plane of a convex clip window.",
          description: "It treats every directed clip edge as one boundary and copies vertices or inserts intersections according to inside-outside transitions. Each boundary's output becomes the next boundary's input; the clip window must be convex with a consistent winding order.",
          advantages: [
            "It has a simple pipeline structure that repeatedly applies one boundary processor.",
            "Each stage processes a vertex stream sequentially and can be buffered or implemented reentrantly."
          ],
          disadvantages: [
            "The basic algorithm assumes a convex clip polygon and does not directly handle concave windows.",
            "Boundary points, parallel lines, and near intersections need consistent epsilon and winding rules."
          ],
          useCases: [
            "Clipping rendered polygons to a graphics viewport",
            "Intersecting polygons with convex regions in GIS and CAD"
          ]
        }
      },
      tier: "deep",
      implementation: code([
        "function sutherlandHodgman(subjectPolygon, clipPolygon, epsilon = 1e-9) {",
        "  const cross = (left, right) => left.x * right.y - left.y * right.x;",
        "  const subtract = (left, right) => ({ x: left.x - right.x, y: left.y - right.y });",
        "  const inside = (point, start, end) => cross(subtract(end, start), subtract(point, start)) >= -epsilon;",
        "  const intersection = (start, end, clipStart, clipEnd) => {",
        "    const movement = subtract(end, start);",
        "    const boundary = subtract(clipEnd, clipStart);",
        "    const denominator = cross(movement, boundary);",
        "    if (Math.abs(denominator) <= epsilon) return { ...end };",
        "    const amount = cross(subtract(clipStart, start), boundary) / denominator;",
        "    return { x: start.x + amount * movement.x, y: start.y + amount * movement.y };",
        "  };",
        "  let output = subjectPolygon.map((point) => ({ ...point }));",
        "  for (let edge = 0; edge < clipPolygon.length && output.length > 0; edge += 1) {",
        "    const clipStart = clipPolygon[edge];",
        "    const clipEnd = clipPolygon[(edge + 1) % clipPolygon.length];",
        "    const input = output; output = [];",
        "    let previous = input[input.length - 1];",
        "    for (const current of input) {",
        "      const currentInside = inside(current, clipStart, clipEnd);",
        "      const previousInside = inside(previous, clipStart, clipEnd);",
        "      if (currentInside) {",
        "        if (!previousInside) output.push(intersection(previous, current, clipStart, clipEnd));",
        "        output.push({ ...current });",
        "      } else if (previousInside) output.push(intersection(previous, current, clipStart, clipEnd));",
        "      previous = current;",
        "    }",
        "  }",
        "  return output;",
        "}"
      ])
    })
  );

  registry.registerPart({
    id: "algorithms-applied-expansion",
    entities
  });
})(typeof window !== "undefined" ? window : globalThis);
