(function registerAlgoriaMathCryptoCompressionAlgorithms(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "algorithms-math-crypto-compression",
    entities: [
      {
        "id": "algo-euclidean",
        "type": "algorithm",
        "name": "Euclidean Algorithm",
        "summary": "나머지 연산을 반복해 두 정수의 최대공약수를 구하는 알고리즘",
        "aliases": [
          "Euclid's Algorithm",
          "GCD Algorithm"
        ],
        "complexity": {
          "time": {
            "moduloOperations": "O(log min(a, b))",
            "bitOperations": "O((log a)(log b))"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "EUCLIDEAN_GCD(a, b)\n  a <- absolute value of a\n  b <- absolute value of b\n  while b != 0\n    remainder <- a mod b\n    a <- b\n    b <- remainder\n  return a",
        "referenceIds": [
          "source-nist-euclidean",
          "source-nist-gcd"
        ],
        "content": {
          "ko": {
            "summary": "나머지 연산으로 두 정수의 최대공약수 문제를 더 작은 쌍으로 줄이는 알고리즘",
            "description": "gcd(a,b)=gcd(b,a mod b)라는 성질을 b가 0이 될 때까지 반복한다. 각 단계에서 두 번째 피연산자가 줄어들며, 마지막으로 0이 아닌 값이 최대공약수다.",
            "advantages": [
              "반복 횟수가 입력 정수의 자릿수에 대해 로그 수준이다.",
              "반복형은 상수 보조 공간과 간단한 나머지 연산만 사용한다."
            ],
            "disadvantages": [
              "큰 정수에서는 나머지 연산 자체의 비트 비용을 따로 고려해야 한다.",
              "최대공약수만 반환하는 기본형은 Bézout 계수나 모듈러 역원을 제공하지 않는다."
            ],
            "useCases": [
              "분수 약분과 정수 비율 정규화",
              "확장 유클리드 알고리즘과 모듈러 산술의 기초"
            ]
          },
          "en": {
            "summary": "An algorithm reducing the greatest-common-divisor problem to progressively smaller remainder pairs.",
            "description": "It repeatedly applies gcd(a,b)=gcd(b,a mod b) until b becomes zero. The second operand shrinks at every step, and the last nonzero value is the greatest common divisor.",
            "advantages": [
              "The number of iterations is logarithmic in the magnitude of the inputs.",
              "The iterative form needs constant auxiliary space and only remainder operations."
            ],
            "disadvantages": [
              "For large integers, the bit cost of division must be accounted for separately.",
              "The basic GCD form does not return Bézout coefficients or a modular inverse."
            ],
            "useCases": [
              "Reducing fractions and normalizing integer ratios",
              "A foundation for the extended Euclidean algorithm and modular arithmetic"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Euclidean Algorithm",
          "ko": "유클리드 알고리즘"
        }
      },
      {
        "id": "algo-sieve-eratosthenes",
        "type": "algorithm",
        "name": "Sieve of Eratosthenes",
        "summary": "합성수의 배수를 지워 일정 범위의 소수를 찾는 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n log log n)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "SIEVE_OF_ERATOSTHENES(n)\n  isPrime[0..n] <- true\n  isPrime[0] <- false; isPrime[1] <- false\n  for p <- 2 while p * p <= n\n    if isPrime[p]\n      for multiple <- p * p to n step p\n        isPrime[multiple] <- false\n  return every i with isPrime[i] = true",
        "authors": [
          {
            "name": "Eratosthenes of Cyrene"
          }
        ],
        "referenceIds": [
          "source-nist-sieve",
          "source-mit-sieve"
        ],
        "content": {
          "ko": {
            "summary": "소수의 배수를 지워 주어진 상한 이하의 모든 소수를 찾는 체 알고리즘",
            "description": "2부터 n까지를 소수 후보로 두고 아직 지워지지 않은 p를 만나면 p²부터 p의 배수를 합성수로 표시한다. p보다 작은 소수의 배수는 이미 처리됐으므로 p² 이전에서 다시 시작할 필요가 없다.",
            "advantages": [
              "상한 이하의 모든 소수를 O(n log log n) 시간에 한꺼번에 구한다.",
              "연속 배열이나 비트셋으로 단순하고 캐시 친화적으로 구현할 수 있다."
            ],
            "disadvantages": [
              "기본 구현은 상한 n에 비례하는 메모리를 사용한다.",
              "매우 큰 구간이나 단일 수의 소수 판정에는 다른 방법이 더 적합하다."
            ],
            "useCases": [
              "범위 내 소수 목록과 소수 개수 전처리",
              "여러 정수론 질의에 사용할 최소 소인수·소수 테이블 구축"
            ]
          },
          "en": {
            "summary": "A sieve that finds every prime up to a bound by marking multiples of discovered primes.",
            "description": "It treats 2 through n as candidates and, for each unmarked p, marks multiples starting at p² as composite. Smaller multiples need not be revisited because they were handled by earlier primes.",
            "advantages": [
              "It enumerates all primes up to a bound in O(n log log n) time.",
              "A contiguous array or bitset makes it simple and cache-friendly."
            ],
            "disadvantages": [
              "The basic form uses memory proportional to the upper bound.",
              "Other methods are preferable for enormous intervals or testing a single number."
            ],
            "useCases": [
              "Precomputing prime lists and prime counts within a range",
              "Building prime or smallest-prime-factor tables for many number-theory queries"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed",
          "notApplicable": {
            "uses_technique": {
              "ko": "에라토스테네스의 체는 배수 제거 규칙 자체가 핵심인 독립 절차이므로 기존 일반 Technique에 억지로 배치하지 않는다.",
              "en": "The Sieve of Eratosthenes is a standalone procedure defined by its multiple-elimination rule, so it is not forced into an existing general technique."
            }
          }
        },
        "localizedNames": {
          "en": "Sieve of Eratosthenes",
          "ko": "에라토스테네스의 체"
        }
      },
      {
        "id": "algo-fft",
        "type": "algorithm",
        "name": "Fast Fourier Transform",
        "aliases": [
          "FFT",
          "Cooley–Tukey FFT"
        ],
        "summary": "이산 푸리에 변환을 분할 정복으로 빠르게 계산하는 알고리즘",
        "complexity": {
          "time": {
            "radix2": "O(n log n)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "RADIX2_FFT(x)\n  n <- length(x)\n  if n = 1: return x\n  even <- RADIX2_FFT(x at even indices)\n  odd <- RADIX2_FFT(x at odd indices)\n  for k <- 0 to n / 2 - 1\n    twiddle <- exp(-2πi * k / n) * odd[k]\n    result[k] <- even[k] + twiddle\n    result[k + n / 2] <- even[k] - twiddle\n  return result",
        "introduced": {
          "year": 1965
        },
        "authors": [
          {
            "name": "James W. Cooley"
          },
          {
            "name": "John W. Tukey"
          }
        ],
        "referenceIds": [
          "source-cooley-tukey-1965",
          "source-nist-fft",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "이산 푸리에 변환을 작은 변환들로 분해해 O(n log n)에 계산하는 알고리즘 계열",
            "description": "대표적인 radix-2 Cooley–Tukey 방식은 입력의 짝수·홀수 인덱스를 재귀적으로 변환한 뒤 회전 인자와 결합한다. 단순 형태는 길이가 2의 거듭제곱일 때 가장 직접적이며 다른 길이에는 다른 radix나 보조 알고리즘을 쓴다.",
            "advantages": [
              "직접 DFT의 O(n²) 연산을 O(n log n)으로 줄인다.",
              "신호 처리뿐 아니라 컨볼루션과 다항식 곱셈에도 재사용된다."
            ],
            "disadvantages": [
              "부동소수점 반올림 오차와 회전 인자 계산을 관리해야 한다.",
              "단순 radix-2 구현은 입력 길이 제약과 비트 역순 재배열 문제가 있다."
            ],
            "useCases": [
              "오디오·영상·통신 신호의 주파수 분석",
              "빠른 컨볼루션과 큰 다항식 곱셈"
            ]
          },
          "en": {
            "summary": "A family of algorithms computing the discrete Fourier transform through smaller transforms in O(n log n).",
            "description": "The common radix-2 Cooley–Tukey form recursively transforms even- and odd-indexed samples and combines them with twiddle factors. Its simplest form fits power-of-two lengths; other sizes use different radices or auxiliary methods.",
            "advantages": [
              "It reduces direct DFT work from O(n²) to O(n log n).",
              "It supports convolution and polynomial multiplication as well as signal processing."
            ],
            "disadvantages": [
              "Floating-point roundoff and twiddle-factor computation require care.",
              "A basic radix-2 implementation has length constraints and bit-reversal concerns."
            ],
            "useCases": [
              "Frequency analysis in audio, imaging, and communications",
              "Fast convolution and multiplication of large polynomials"
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
            "code": "function fft(values) {\n      const n = values.length;\n      if (n === 0) return [];\n      if ((n & (n - 1)) !== 0) throw new RangeError(\"FFT input length must be a power of two.\");\n      const input = values.map((value) => typeof value === \"number\" ? { re: value, im: 0 } : { re: value.re, im: value.im });\n      const transform = (items) => {\n        if (items.length === 1) return items;\n        const even = transform(items.filter((_, index) => index % 2 === 0));\n        const odd = transform(items.filter((_, index) => index % 2 === 1));\n        const result = Array(items.length);\n        for (let index = 0; index < items.length / 2; index += 1) {\n          const angle = -2 * Math.PI * index / items.length;\n          const cosine = Math.cos(angle);\n          const sine = Math.sin(angle);\n          const term = { re: cosine * odd[index].re - sine * odd[index].im, im: sine * odd[index].re + cosine * odd[index].im };\n          result[index] = { re: even[index].re + term.re, im: even[index].im + term.im };\n          result[index + items.length / 2] = { re: even[index].re - term.re, im: even[index].im - term.im };\n        }\n        return result;\n      };\n      return transform(input);\n    }"
          }
        ],
        "localizedNames": {
          "en": "Fast Fourier Transform",
          "ko": "고속 푸리에 변환"
        }
      },
      {
        "id": "algo-karatsuba",
        "type": "algorithm",
        "name": "Karatsuba Algorithm",
        "summary": "큰 정수 곱셈의 부분 곱 개수를 줄이는 분할 정복 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n^log₂3) ≈ O(n^1.585)"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "KARATSUBA(x, y)\n  if x or y is small: return x * y\n  split x into xHigh * B^m + xLow\n  split y into yHigh * B^m + yLow\n  z0 <- KARATSUBA(xLow, yLow)\n  z2 <- KARATSUBA(xHigh, yHigh)\n  z1 <- KARATSUBA(xLow + xHigh, yLow + yHigh) - z0 - z2\n  return z2 * B^(2m) + z1 * B^m + z0",
        "introduced": {
          "year": 1962
        },
        "authors": [
          {
            "name": "Anatoly Karatsuba"
          },
          {
            "name": "Yuri Ofman"
          }
        ],
        "referenceIds": [
          "source-karatsuba-ofman-1962",
          "source-princeton-karatsuba",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "반 크기 부분 곱셈을 네 번 대신 세 번 수행하는 큰 정수 분할 정복 곱셈",
            "description": "두 n자리 수를 상·하위 절반으로 나누고 가운데 교차항을 합의 곱 하나에서 복원한다. 재귀식 T(n)=3T(n/2)+O(n)으로 학교식 곱셈의 이차 시간보다 낮은 O(n^log₂3)을 얻는다.",
            "advantages": [
              "충분히 큰 정수에서 O(n²) 학교식 곱셈보다 점근적으로 빠르다.",
              "정수뿐 아니라 계수 배열로 표현한 다항식 곱셈에도 적용할 수 있다."
            ],
            "disadvantages": [
              "덧셈·메모리 할당의 상수 비용 때문에 작은 입력에서는 학교식 곱셈이 더 빠르다.",
              "부호, 자리 올림, 불균형한 길이를 다루는 실용 구현이 단순 공식보다 복잡하다."
            ],
            "useCases": [
              "다중 정밀도 정수 라이브러리의 중간 크기 곱셈",
              "큰 계수 다항식과 기호 계산"
            ]
          },
          "en": {
            "summary": "A divide-and-conquer multiplication algorithm using three half-size products instead of four.",
            "description": "It splits each n-digit operand into high and low halves and reconstructs the cross term from one product of sums. The recurrence T(n)=3T(n/2)+O(n) gives O(n^log₂3), below quadratic schoolbook multiplication.",
            "advantages": [
              "It is asymptotically faster than O(n²) schoolbook multiplication for sufficiently large operands.",
              "It applies to polynomials represented as coefficient arrays as well as integers."
            ],
            "disadvantages": [
              "Addition and allocation overhead make schoolbook multiplication faster below a crossover size.",
              "Practical handling of signs, carries, and unequal lengths is more complex than the core formula."
            ],
            "useCases": [
              "Medium-size multiplication in arbitrary-precision integer libraries",
              "Large-coefficient polynomial and symbolic computation"
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
            "code": "function karatsuba(left, right) {\n      left = BigInt(left);\n      right = BigInt(right);\n      const sign = (left < 0n) !== (right < 0n) ? -1n : 1n;\n      left = left < 0n ? -left : left;\n      right = right < 0n ? -right : right;\n      const multiply = (x, y) => {\n        if (x < 1000000n || y < 1000000n) return x * y;\n        const digits = Math.max(x.toString().length, y.toString().length);\n        const half = BigInt(Math.floor(digits / 2));\n        const base = 10n ** half;\n        const highX = x / base;\n        const lowX = x % base;\n        const highY = y / base;\n        const lowY = y % base;\n        const lowProduct = multiply(lowX, lowY);\n        const highProduct = multiply(highX, highY);\n        const middle = multiply(lowX + highX, lowY + highY) - lowProduct - highProduct;\n        return highProduct * base * base + middle * base + lowProduct;\n      };\n      return sign * multiply(left, right);\n    }"
          }
        ],
        "localizedNames": {
          "en": "Karatsuba Algorithm",
          "ko": "카라추바 알고리즘"
        }
      },
      {
        "id": "algo-rsa",
        "type": "algorithm",
        "name": "RSA",
        "summary": "큰 정수의 소인수분해 난이도에 기반한 공개키 암호 방식",
        "aliases": [
          "Rivest–Shamir–Adleman"
        ],
        "complexity": {
          "time": {
            "modularExponentiation": "O(log e · M(k))",
            "schoolbookWorstCase": "O(k³)"
          },
          "space": {
            "typical": "O(k²)"
          }
        },
        "pseudocode": "RSA_KEYGEN()\n  choose distinct large primes p and q\n  n <- p * q\n  lambda <- lcm(p - 1, q - 1)\n  choose e with gcd(e, lambda) = 1\n  d <- modular_inverse(e, lambda)\n  publicKey <- (n, e)\n  privateKey <- (n, d)\n\nRSAEP(publicKey, messageRepresentative)\n  return messageRepresentative^e mod n\n\nRSADP(privateKey, ciphertextRepresentative)\n  return ciphertextRepresentative^d mod n",
        "introduced": {
          "year": 1978
        },
        "authors": [
          {
            "name": "Ronald L. Rivest"
          },
          {
            "name": "Adi Shamir"
          },
          {
            "name": "Leonard Adleman"
          }
        ],
        "referenceIds": [
          "source-rsa-1978",
          "source-rfc-8017",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "모듈러 거듭제곱과 큰 정수 문제에 기반한 공개키 암호·서명 방식",
            "description": "두 큰 소수로 공개 모듈러스와 공개·개인 지수를 만든다. 실제 시스템은 원시 RSA 연산을 직접 쓰지 않고 RFC 8017의 OAEP 암호화나 PSS 서명처럼 검증된 인코딩 방식을 사용해야 한다.",
            "advantages": [
              "공개키를 배포해 비밀키 공유 없이 암호화나 서명 검증을 수행할 수 있다.",
              "표준화된 암호화·서명 방식과 광범위한 구현 생태계를 갖는다."
            ],
            "disadvantages": [
              "같은 보안 수준의 대칭키 연산보다 느리고 키와 출력이 크다.",
              "패딩 없는 원시 RSA는 안전하지 않으며 키 생성과 구현에 강한 난수·부채널 방어가 필요하다."
            ],
            "useCases": [
              "디지털 서명과 인증서 기반 신원 검증",
              "표준 패딩을 사용한 작은 키 재료의 캡슐화"
            ]
          },
          "en": {
            "summary": "A public-key encryption and signature scheme built on modular exponentiation and large-integer problems.",
            "description": "Two large primes define a public modulus and paired public and private exponents. Real systems must not use raw RSA directly; they use standardized encodings such as OAEP for encryption and PSS for signatures from RFC 8017.",
            "advantages": [
              "A public key enables encryption or signature verification without sharing the private key.",
              "It has standardized encryption and signature schemes and broad implementation support."
            ],
            "disadvantages": [
              "It is slower and uses larger keys and outputs than symmetric cryptography at comparable security levels.",
              "Unpadded raw RSA is unsafe, and secure key generation needs strong randomness and side-channel defenses."
            ],
            "useCases": [
              "Digital signatures and certificate-based authentication",
              "Encapsulation of small key material with standardized padding"
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
            "code": "function rsaApply(message, exponent, modulus) {\n      let base = BigInt(message) % BigInt(modulus);\n      let power = BigInt(exponent);\n      const mod = BigInt(modulus);\n      if (mod <= 1n || power < 0n) throw new RangeError(\"Invalid RSA parameters.\");\n      let result = 1n;\n      while (power > 0n) {\n        if (power & 1n) result = result * base % mod;\n        base = base * base % mod;\n        power >>= 1n;\n      }\n      return result;\n    }"
          }
        ],
        "localizedNames": {
          "en": "RSA",
          "ko": "RSA"
        }
      },
      {
        "id": "algo-aes",
        "type": "algorithm",
        "name": "Advanced Encryption Standard",
        "aliases": [
          "AES"
        ],
        "summary": "고정 길이 블록을 처리하는 대칭키 블록 암호",
        "complexity": {
          "time": {
            "perBlock": "O(r), r ∈ {10, 12, 14}"
          },
          "space": {
            "fixedState": "O(1)"
          }
        },
        "pseudocode": "AES_ENCRYPT_BLOCK(block, expandedKey, rounds)\n  state <- block XOR roundKey[0]\n  for round <- 1 to rounds - 1\n    state <- SUB_BYTES(state)\n    state <- SHIFT_ROWS(state)\n    state <- MIX_COLUMNS(state)\n    state <- state XOR roundKey[round]\n  state <- SUB_BYTES(state)\n  state <- SHIFT_ROWS(state)\n  state <- state XOR roundKey[rounds]\n  return state",
        "introduced": {
          "year": 2001
        },
        "authors": [
          {
            "name": "Joan Daemen"
          },
          {
            "name": "Vincent Rijmen"
          }
        ],
        "referenceIds": [
          "source-nist-fips-197",
          "source-nist-block-ciphers",
          "source-nist-sp800-38a"
        ],
        "content": {
          "ko": {
            "summary": "128비트 블록과 128·192·256비트 키를 사용하는 표준 대칭키 블록 암호",
            "description": "AES는 Rijndael 계열에서 표준화된 치환–순열 네트워크다. 키 길이에 따라 10·12·14라운드를 수행하며 각 라운드는 바이트 치환, 행 이동, 열 혼합, 라운드 키 결합으로 상태를 변환한다.",
            "advantages": [
              "널리 분석되고 표준화되어 다양한 플랫폼에서 상호운용된다.",
              "현대 CPU의 전용 명령을 활용하면 높은 처리량과 부채널 저항 구현이 가능하다."
            ],
            "disadvantages": [
              "블록 암호 단독으로는 메시지 길이·무결성·재전송을 안전하게 처리하지 않는다.",
              "테이블 기반의 부주의한 구현은 타이밍·캐시 부채널 정보를 누출할 수 있다."
            ],
            "useCases": [
              "AES-GCM 같은 인증 암호 모드의 핵심 블록 암호",
              "저장 장치·백업·통신 데이터의 대칭키 암호화"
            ]
          },
          "en": {
            "summary": "The standard symmetric block cipher using 128-bit blocks and 128-, 192-, or 256-bit keys.",
            "description": "AES is the standardized substitution–permutation member of the Rijndael family. Depending on key length it runs 10, 12, or 14 rounds of byte substitution, row shifting, column mixing, and round-key addition.",
            "advantages": [
              "It is widely analyzed, standardized, and interoperable across platforms.",
              "Dedicated CPU instructions enable high throughput and side-channel-resistant implementations."
            ],
            "disadvantages": [
              "A block cipher alone does not safely handle message length, integrity, or replay.",
              "Careless table-based implementations can leak information through timing or cache side channels."
            ],
            "useCases": [
              "The block-cipher core of authenticated modes such as AES-GCM",
              "Symmetric encryption for storage, backups, and communications"
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
            "code": "async function aesGcmEncrypt(plaintext, key, iv, cryptoApi = globalThis.crypto) {\n      if (!cryptoApi?.subtle) throw new Error(\"Web Crypto is required.\");\n      const encoded = typeof plaintext === \"string\" ? new TextEncoder().encode(plaintext) : plaintext;\n      const CryptoKeyApi = cryptoApi.CryptoKey || globalThis.CryptoKey;\n      const cryptoKey = CryptoKeyApi && key instanceof CryptoKeyApi ? key : await cryptoApi.subtle.importKey(\"raw\", key, \"AES-GCM\", false, [\"encrypt\"]);\n      return new Uint8Array(await cryptoApi.subtle.encrypt({ name: \"AES-GCM\", iv }, cryptoKey, encoded));\n    }"
          }
        ],
        "localizedNames": {
          "en": "Advanced Encryption Standard",
          "ko": "고급 암호화 표준 (AES)"
        }
      },
      {
        "id": "algo-diffie-hellman",
        "type": "algorithm",
        "name": "Diffie–Hellman Key Exchange",
        "aliases": [
          "Diffie-Hellman"
        ],
        "summary": "공개 채널에서 공동 비밀키를 합의하는 키 교환 방식",
        "complexity": {
          "time": {
            "modularExponentiation": "O(log e · M(k))"
          },
          "space": {
            "operands": "O(k) bits"
          }
        },
        "pseudocode": "DIFFIE_HELLMAN(publicParameters)\n  agree on group parameters (p, g)\n  Alice chooses secret a and sends A <- g^a mod p\n  Bob chooses secret b and sends B <- g^b mod p\n  Alice computes shared <- B^a mod p\n  Bob computes shared <- A^b mod p\n  validate public values and derive session keys from shared\n  authenticate the exchange in the surrounding protocol",
        "introduced": {
          "year": 1976
        },
        "authors": [
          {
            "name": "Whitfield Diffie"
          },
          {
            "name": "Martin E. Hellman"
          }
        ],
        "referenceIds": [
          "source-diffie-hellman-1976",
          "source-rfc-2631",
          "source-nist-sp800-56a"
        ],
        "content": {
          "ko": {
            "summary": "각자의 비밀 지수를 공개하지 않고 공개 채널에서 공유 비밀을 계산하는 키 합의 방식",
            "description": "두 참여자는 같은 군 매개변수에서 각자 비밀 지수의 거듭제곱 값을 교환하고 상대의 공개값을 다시 자신의 비밀 지수로 거듭제곱한다. 양쪽은 같은 공유값을 얻지만 기본 방식 자체는 상대의 신원을 인증하지 않는다.",
            "advantages": [
              "사전에 공유한 비밀 없이 공개 채널에서 공동 키 재료를 만들 수 있다.",
              "일회성 지수를 쓰는 변형은 장기 키 유출 뒤에도 과거 세션을 보호하는 순방향 비밀성을 지원한다."
            ],
            "disadvantages": [
              "인증되지 않은 기본 교환은 중간자 공격에 취약하다.",
              "안전한 군·키 크기 선택과 공개값 검증이 필요하다."
            ],
            "useCases": [
              "TLS·SSH·VPN 프로토콜의 인증된 세션 키 합의",
              "장기 암호화 키 대신 일회성 공유 비밀을 만드는 프로토콜"
            ]
          },
          "en": {
            "summary": "A key-agreement method that computes a shared secret over a public channel without revealing either private exponent.",
            "description": "The parties exchange exponentiated values in common group parameters, then raise the received value to their own secret exponent. Both obtain the same shared value, but the basic method does not authenticate the peer.",
            "advantages": [
              "It establishes shared key material over a public channel without a pre-shared secret.",
              "Ephemeral variants can support forward secrecy after long-term key compromise."
            ],
            "disadvantages": [
              "The unauthenticated exchange is vulnerable to a man-in-the-middle attack.",
              "It requires safe group parameters, adequate key sizes, and public-value validation."
            ],
            "useCases": [
              "Authenticated session-key agreement in TLS, SSH, and VPN protocols",
              "Protocols deriving an ephemeral shared secret instead of transporting a long-term encryption key"
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
            "code": "function diffieHellman(privateExponent, peerPublic, prime) {\n      const modulus = BigInt(prime);\n      let base = BigInt(peerPublic) % modulus;\n      let exponent = BigInt(privateExponent);\n      if (modulus <= 2n || base <= 1n || exponent <= 0n) throw new RangeError(\"Invalid Diffie–Hellman parameters.\");\n      let shared = 1n;\n      while (exponent > 0n) {\n        if (exponent & 1n) shared = shared * base % modulus;\n        base = base * base % modulus;\n        exponent >>= 1n;\n      }\n      return shared;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Diffie–Hellman Key Exchange",
          "ko": "디피–헬먼 키 교환"
        }
      },
      {
        "id": "algo-sha-256",
        "type": "algorithm",
        "name": "SHA-256",
        "summary": "입력을 256비트 해시값으로 변환하는 암호학적 해시 알고리즘",
        "aliases": [
          "SHA-256",
          "SHA-2/256"
        ],
        "complexity": {
          "time": {
            "messageLength": "O(n)"
          },
          "space": {
            "streaming": "O(1)"
          }
        },
        "pseudocode": "SHA256(message)\n  pad message with 1 bit, zeros, and 64-bit length\n  state <- eight specified 32-bit initial words\n  for each 512-bit block\n    schedule <- expand 16 block words into 64 words\n    working <- state\n    for round <- 0 to 63\n      update working words using Ch, Maj, rotations, constants, schedule[round]\n    state <- state + working modulo 2^32\n  return concatenation of the eight state words",
        "introduced": {
          "year": 2001
        },
        "referenceIds": [
          "source-nist-fips-180-4",
          "source-rfc-6234",
          "source-nist-hash-functions"
        ],
        "content": {
          "ko": {
            "summary": "메시지를 512비트 블록으로 처리해 256비트 다이제스트를 만드는 SHA-2 해시 알고리즘",
            "description": "메시지를 패딩한 뒤 여덟 개의 32비트 상태를 64라운드 압축 함수로 블록마다 갱신한다. 결과는 고정 길이 다이제스트이며 복호화 가능한 암호문이나 비밀키 없는 인증 태그가 아니다.",
            "advantages": [
              "입력을 한 번 순차 처리하므로 스트리밍 구현이 가능하다.",
              "표준화되어 무결성 검사·전자서명 등 다양한 프로토콜과 도구에서 지원된다."
            ],
            "disadvantages": [
              "비밀키 없이 계산한 해시만으로 메시지의 송신자를 인증할 수 없다.",
              "빠른 일반 해시이므로 솔트와 비용 조정 없이 비밀번호 저장에 사용하면 안 된다."
            ],
            "useCases": [
              "파일·메시지 무결성 다이제스트와 전자서명 전처리",
              "HMAC-SHA-256과 콘텐츠 주소 식별자의 기반 해시"
            ]
          },
          "en": {
            "summary": "A SHA-2 hash algorithm processing 512-bit blocks to produce a 256-bit digest.",
            "description": "After padding, it updates eight 32-bit state words with a 64-round compression function for each block. The result is a fixed-length digest, not decryptable ciphertext or an authentication tag by itself.",
            "advantages": [
              "A single sequential pass supports streaming implementations.",
              "Its standardization gives broad support in integrity and digital-signature protocols."
            ],
            "disadvantages": [
              "An unkeyed hash alone does not authenticate who sent a message.",
              "As a fast general hash, it is unsuitable for password storage without salting and a cost-adjustable password KDF."
            ],
            "useCases": [
              "File and message integrity digests and digital-signature preprocessing",
              "The underlying hash for HMAC-SHA-256 and content-addressed identifiers"
            ]
          }
        },
        "quality": {
          "tier": "deep",
          "status": "reviewed"
        },
        "authors": [
          {
            "name": "National Institute of Standards and Technology"
          }
        ],
        "implementations": [
          {
            "language": "JavaScript",
            "code": "async function sha256(message, cryptoApi = globalThis.crypto) {\n      if (!cryptoApi?.subtle) throw new Error(\"Web Crypto is required.\");\n      const bytes = typeof message === \"string\" ? new TextEncoder().encode(message) : message;\n      const digest = await cryptoApi.subtle.digest(\"SHA-256\", bytes);\n      return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, \"0\")).join(\"\");\n    }"
          }
        ],
        "localizedNames": {
          "en": "SHA-256",
          "ko": "SHA-256"
        }
      },
      {
        "id": "algo-huffman-coding",
        "type": "algorithm",
        "name": "Huffman Coding",
        "summary": "기호 빈도에 따라 가변 길이 접두 코드를 만드는 무손실 압축 알고리즘",
        "complexity": {
          "time": {
            "buildTree": "O(k log k)",
            "encodeAfterTable": "O(n)",
            "total": "O(n + k log k)"
          },
          "space": {
            "typical": "O(k)"
          }
        },
        "pseudocode": "BUILD_HUFFMAN(symbols, frequency)\n  queue <- min-priority queue of leaf nodes\n  while size(queue) > 1\n    left <- extract minimum\n    right <- extract minimum\n    parent <- node(left.frequency + right.frequency)\n    parent.left <- left\n    parent.right <- right\n    insert parent into queue\n  root <- extract minimum\n  assign 0 to left edges and 1 to right edges\n  return prefix codes obtained from root-to-leaf paths",
        "introduced": {
          "year": 1952
        },
        "authors": [
          {
            "name": "David A. Huffman"
          }
        ],
        "referenceIds": [
          "source-huffman-1952",
          "source-nist-huffman",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "빈도가 높은 기호에 짧은 비트를 배정하는 최적 접두 부호 알고리즘",
            "description": "빈도가 가장 낮은 두 기호나 부분 트리를 반복해서 합쳐 이진 트리를 만든다. 알려진 기호 빈도에 대해 접두 부호 중 가중 경로 길이가 최소인 코드를 만든다.",
            "advantages": [
              "알려진 빈도 분포에 대해 최적의 이진 접두 부호를 만든다.",
              "복호화가 모호하지 않고 트리 순회만으로 단순하게 수행된다."
            ],
            "disadvantages": [
              "복호화를 위해 코드 트리나 빈도 정보를 함께 전달해야 한다.",
              "기호당 정수 비트만 사용하므로 산술 부호화보다 압축률이 낮을 수 있다."
            ],
            "useCases": [
              "DEFLATE·JPEG 같은 형식의 엔트로피 부호화 단계",
              "빈도가 알려진 기호 스트림의 무손실 압축"
            ]
          },
          "en": {
            "summary": "An optimal prefix-code algorithm that assigns shorter bit strings to frequent symbols.",
            "description": "It repeatedly combines the two least-frequent symbols or subtrees into a binary tree. For known symbol frequencies, it minimizes weighted path length among prefix codes.",
            "advantages": [
              "It builds an optimal binary prefix code for a known frequency distribution.",
              "Decoding is unambiguous and requires only a tree traversal."
            ],
            "disadvantages": [
              "The code tree or frequency information must accompany the encoded data.",
              "Whole-bit code lengths can compress less than arithmetic coding."
            ],
            "useCases": [
              "Entropy-coding stages in formats such as DEFLATE and JPEG",
              "Lossless compression of symbol streams with known frequencies"
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
            "code": "function huffmanCodes(frequencies) {\n      const queue = Object.entries(frequencies)\n        .filter(([, frequency]) => frequency > 0)\n        .map(([symbol, frequency]) => ({ symbol, frequency, left: null, right: null }));\n      if (queue.length === 0) return {};\n      while (queue.length > 1) {\n        queue.sort((left, right) => left.frequency - right.frequency || String(left.symbol).localeCompare(String(right.symbol)));\n        const left = queue.shift();\n        const right = queue.shift();\n        queue.push({ symbol: null, frequency: left.frequency + right.frequency, left, right });\n      }\n      const codes = {};\n      const visit = (node, prefix) => {\n        if (node.symbol !== null) {\n          codes[node.symbol] = prefix || \"0\";\n          return;\n        }\n        visit(node.left, `${prefix}0`);\n        visit(node.right, `${prefix}1`);\n      };\n      visit(queue[0], \"\");\n      return codes;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Huffman Coding",
          "ko": "허프만 부호화"
        }
      },
      {
        "id": "algo-lzw",
        "type": "algorithm",
        "name": "Lempel–Ziv–Welch",
        "aliases": [
          "LZW"
        ],
        "summary": "반복 문자열을 사전 코드로 치환하는 무손실 압축 알고리즘",
        "complexity": {
          "time": {
            "expectedWithHashDictionary": "O(n)"
          },
          "space": {
            "dictionary": "O(D)"
          }
        },
        "pseudocode": "LZW_ENCODE(input, alphabet)\n  dictionary <- every one-symbol string\n  phrase <- empty\n  for each symbol c in input\n    if phrase + c is in dictionary\n      phrase <- phrase + c\n    else\n      output code(dictionary[phrase])\n      add phrase + c to dictionary\n      phrase <- c\n  if phrase is not empty: output code(dictionary[phrase])",
        "introduced": {
          "year": 1984
        },
        "authors": [
          {
            "name": "Terry A. Welch"
          }
        ],
        "referenceIds": [
          "source-welch-lzw-1984",
          "source-nist-lzw",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "입력에서 발견한 문자열을 동적으로 만든 사전 코드로 바꾸는 무손실 압축 알고리즘",
            "description": "초기 사전에는 단일 기호를 넣고 현재 구문에 다음 기호를 붙인 문자열이 없을 때 현재 구문의 코드를 출력한 뒤 새 문자열을 등록한다. 복호기는 같은 규칙으로 사전을 재구성하므로 사전 자체를 전송할 필요가 없다.",
            "advantages": [
              "입력 통계를 미리 전송하지 않고 반복 문자열을 학습한다.",
              "인코더와 디코더가 같은 사전을 동기적으로 만들 수 있다."
            ],
            "disadvantages": [
              "반복이 적거나 이미 압축된 데이터에서는 사전 코드 오버헤드로 크기가 늘 수 있다.",
              "코드 폭 증가·사전 포화·초기화 규칙을 양쪽이 정확히 공유해야 한다."
            ],
            "useCases": [
              "GIF 이미지 데이터와 일부 TIFF 스트림",
              "반복 구문이 많은 바이트·기호 스트림의 무손실 압축"
            ]
          },
          "en": {
            "summary": "A lossless compressor replacing strings discovered in the input with codes from a growing dictionary.",
            "description": "The initial dictionary contains single symbols. When the current phrase plus the next symbol is absent, it emits the current phrase's code and adds the new string. The decoder rebuilds the same dictionary, so the table need not be transmitted.",
            "advantages": [
              "It learns repeated strings without transmitting a prior statistical model.",
              "Encoder and decoder can build synchronized dictionaries from the code stream."
            ],
            "disadvantages": [
              "Low-repetition or already compressed data can grow because of code overhead.",
              "Both sides must agree exactly on code-width growth, dictionary limits, and reset rules."
            ],
            "useCases": [
              "GIF image data and some TIFF streams",
              "Lossless compression of byte or symbol streams with recurring phrases"
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
            "code": "function lzwEncode(text) {\n      if (text.length === 0) return [];\n      const dictionary = new Map(Array.from({ length: 256 }, (_, code) => [String.fromCharCode(code), code]));\n      const output = [];\n      let phrase = \"\";\n      for (const symbol of text) {\n        const combined = phrase + symbol;\n        if (dictionary.has(combined)) phrase = combined;\n        else {\n          if (phrase !== \"\") output.push(dictionary.get(phrase));\n          dictionary.set(combined, dictionary.size);\n          phrase = symbol;\n        }\n      }\n      if (phrase !== \"\") output.push(dictionary.get(phrase));\n      return output;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Lempel–Ziv–Welch",
          "ko": "렘펠–지브–웰치 (LZW)"
        }
      },
      {
        "id": "algo-chacha20",
        "type": "algorithm",
        "name": "ChaCha20",
        "summary": "32비트 덧셈·회전·XOR 라운드로 키스트림을 만드는 스트림 암호",
        "complexity": {
          "time": {
            "forNBytes": "O(n)"
          },
          "space": {
            "workingState": "O(1)"
          }
        },
        "pseudocode": "CHACHA20_BLOCK(key, counter, nonce)\n  state <- constants || key || counter || nonce\n  working <- state\n  repeat 10 times\n    apply four column quarter-rounds\n    apply four diagonal quarter-rounds\n  return serialize(working + state)\n\nXOR successive blocks with plaintext",
        "introduced": {
          "year": 2008
        },
        "authors": [
          {
            "name": "Daniel J. Bernstein"
          }
        ],
        "referenceIds": [
          "source-chacha-2008",
          "source-rfc-8439",
          "source-libsodium-chacha20"
        ],
        "content": {
          "ko": {
            "summary": "32비트 덧셈·회전·XOR 라운드로 키스트림을 만드는 스트림 암호",
            "description": "키·카운터·nonce로 16워드 상태를 만들고 20라운드의 quarter-round를 적용한 블록을 원상태와 더한다. 생성된 키스트림을 평문과 XOR하며 같은 키와 nonce를 절대 재사용하면 안 된다.",
            "advantages": [
              "소프트웨어에서 빠르고 데이터 의존 테이블 조회가 없어 일정 시간 구현에 유리하다.",
              "RFC 8439가 nonce·카운터 배치와 Poly1305 결합 사용을 명확히 규정한다."
            ],
            "disadvantages": [
              "키와 nonce 쌍을 재사용하면 키스트림 재사용으로 기밀성이 붕괴한다.",
              "ChaCha20 단독은 무결성을 제공하지 않아 보통 인증 태그와 함께 써야 한다."
            ],
            "useCases": [
              "TLS·VPN·메시징 프로토콜의 인증 암호화 구성",
              "AES 하드웨어 가속이 없는 장치의 고속 스트림 암호"
            ]
          },
          "en": {
            "summary": "A stream cipher generating keystream with 32-bit addition, rotation, and XOR rounds.",
            "description": "It forms a 16-word state from a key, counter, and nonce, applies 20 rounds of quarter-round operations, and adds the original state. The keystream is XORed with plaintext; a key-and-nonce pair must never be reused.",
            "advantages": [
              "It is fast in software and avoids data-dependent table lookups, helping constant-time implementations.",
              "RFC 8439 specifies nonce, counter, and Poly1305-combination conventions."
            ],
            "disadvantages": [
              "Reusing a key and nonce repeats keystream and destroys confidentiality.",
              "ChaCha20 alone provides no integrity and normally needs an authentication tag."
            ],
            "useCases": [
              "Authenticated-encryption suites in TLS, VPNs, and messaging",
              "Fast stream encryption on devices without AES hardware acceleration"
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
            "code": "function chacha20Block(key, counter, nonce) {\n      if (key.length !== 8 || nonce.length !== 3) throw new RangeError(\"ChaCha20 needs eight key words and three nonce words.\");\n      const state = new Uint32Array([0x61707865, 0x3320646e, 0x79622d32, 0x6b206574, ...key, counter, ...nonce]);\n      const working = new Uint32Array(state);\n      const rotate = (value, count) => (value << count) | (value >>> (32 - count));\n      const quarter = (a, b, c, d) => {\n        working[a] += working[b]; working[d] = rotate(working[d] ^ working[a], 16);\n        working[c] += working[d]; working[b] = rotate(working[b] ^ working[c], 12);\n        working[a] += working[b]; working[d] = rotate(working[d] ^ working[a], 8);\n        working[c] += working[d]; working[b] = rotate(working[b] ^ working[c], 7);\n      };\n      for (let round = 0; round < 10; round += 1) {\n        quarter(0,4,8,12); quarter(1,5,9,13); quarter(2,6,10,14); quarter(3,7,11,15);\n        quarter(0,5,10,15); quarter(1,6,11,12); quarter(2,7,8,13); quarter(3,4,9,14);\n      }\n      return Uint32Array.from(working, (value, index) => value + state[index]);\n    }"
          }
        ],
        "localizedNames": {
          "en": "ChaCha20",
          "ko": "ChaCha20"
        }
      },
      {
        "id": "algo-blake2",
        "type": "algorithm",
        "name": "BLAKE2",
        "aliases": [
          "BLAKE2b",
          "BLAKE2s"
        ],
        "summary": "BLAKE 계열 압축 함수를 단순화해 빠른 해시와 선택적 keyed mode를 제공하는 알고리즘",
        "complexity": {
          "time": {
            "forNBytes": "O(n)"
          },
          "space": {
            "state": "O(1)"
          }
        },
        "pseudocode": "BLAKE2(message, parameters)\n  initialize chaining state with IV XOR parameter block\n  for each message block\n    update byte counter and final-block flag\n    compress state with the block using 12 rounds for BLAKE2b or 10 for BLAKE2s\n  return requested prefix of final chaining state",
        "introduced": {
          "year": 2013
        },
        "authors": [
          {
            "name": "Jean-Philippe Aumasson"
          },
          {
            "name": "Samuel Neves"
          },
          {
            "name": "Zooko Wilcox-O'Hearn"
          },
          {
            "name": "Christian Winnerlein"
          }
        ],
        "referenceIds": [
          "source-blake2-paper",
          "source-rfc-7693"
        ],
        "content": {
          "ko": {
            "summary": "BLAKE 계열 압축 함수를 단순화해 빠른 해시와 선택적 keyed mode를 제공하는 알고리즘",
            "description": "파라미터 블록으로 출력 길이·키·트리 설정을 상태에 결합하고 메시지 블록마다 카운터와 최종 플래그를 포함해 압축한다. BLAKE2b는 64비트, BLAKE2s는 32비트 플랫폼을 겨냥한다.",
            "advantages": [
              "메시지를 한 번 순차 처리하며 빠른 소프트웨어 성능을 제공한다.",
              "별도 HMAC 구성 없이 규정된 keyed mode와 가변 출력 길이를 지원한다."
            ],
            "disadvantages": [
              "BLAKE2b와 BLAKE2s의 워드 크기·라운드·파라미터 형식을 혼동하면 상호 운용이 깨진다.",
              "비밀번호 저장에는 빠른 일반 해시보다 Argon2 같은 memory-hard 함수가 적합하다."
            ],
            "useCases": [
              "파일·메시지 무결성 다이제스트와 콘텐츠 식별자",
              "keyed hashing과 트리 해싱이 필요한 애플리케이션"
            ]
          },
          "en": {
            "summary": "A simplified BLAKE-family algorithm providing fast hashing and an optional keyed mode.",
            "description": "A parameter block binds output length, key, and tree settings into the initial state; each message block is compressed with a counter and final flag. BLAKE2b targets 64-bit and BLAKE2s 32-bit platforms.",
            "advantages": [
              "It processes messages in one pass with strong software performance.",
              "It supports a specified keyed mode and variable output length without a separate HMAC construction."
            ],
            "disadvantages": [
              "Mixing BLAKE2b and BLAKE2s word sizes, rounds, or parameter formats breaks interoperability.",
              "Password storage needs a memory-hard function such as Argon2 rather than a fast general hash."
            ],
            "useCases": [
              "Integrity digests and content identifiers for files and messages",
              "Applications needing keyed or tree hashing"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "BLAKE2",
          "ko": "BLAKE2"
        }
      },
      {
        "id": "algo-argon2id",
        "type": "algorithm",
        "name": "Argon2id",
        "aliases": [
          "Argon2"
        ],
        "summary": "메모리 사용량과 반복 횟수를 조정해 비밀번호 추측 비용을 높이는 memory-hard 해시",
        "complexity": {
          "time": {
            "configured": "O(t · m)"
          },
          "space": {
            "configuredMemory": "O(m)"
          }
        },
        "pseudocode": "ARGON2ID(password, salt, t, m, lanes)\n  H0 <- hash(parameters, password, salt)\n  initialize first blocks of each memory lane from H0\n  for pass <- 0 to t - 1\n    fill memory blocks in synchronized slices\n    use data-independent addressing in the first half of pass 0\n    use data-dependent addressing afterwards\n  XOR final lane blocks and hash to requested output length",
        "introduced": {
          "year": 2015
        },
        "authors": [
          {
            "name": "Alex Biryukov"
          },
          {
            "name": "Daniel Dinu"
          },
          {
            "name": "Dmitry Khovratovich"
          }
        ],
        "referenceIds": [
          "source-argon2-2016",
          "source-rfc-9106"
        ],
        "content": {
          "ko": {
            "summary": "메모리 사용량과 반복 횟수를 조정해 비밀번호 추측 비용을 높이는 memory-hard 해시",
            "description": "큰 메모리 블록 배열을 여러 패스로 채우며 Argon2i의 데이터 독립 주소 지정과 Argon2d의 데이터 의존 방식을 혼합한다. 고유 salt와 환경에 맞춘 메모리·시간·병렬도 파라미터가 필수다.",
            "advantages": [
              "공격자가 많은 후보를 병렬 계산할 때 메모리 용량과 대역폭 비용을 강제한다.",
              "Argon2id는 side-channel 저항과 GPU 공격 저항 사이의 균형을 목표로 한다."
            ],
            "disadvantages": [
              "너무 낮은 파라미터는 보호를 약화하고 너무 높은 값은 서비스 지연이나 자원 고갈을 일으킨다.",
              "출력과 함께 salt·버전·파라미터를 정확히 저장하고 마이그레이션해야 한다."
            ],
            "useCases": [
              "사용자 비밀번호 검증값 저장",
              "비밀번호 기반 키 파생과 저장 매체 암호화"
            ]
          },
          "en": {
            "summary": "A memory-hard password hash with configurable memory and iteration cost.",
            "description": "It fills a large block array over multiple passes, combining Argon2i-style data-independent addressing with Argon2d-style data-dependent addressing. A unique salt and deployment-specific memory, time, and parallelism parameters are essential.",
            "advantages": [
              "It forces substantial memory capacity and bandwidth for parallel password guessing.",
              "Argon2id balances side-channel resistance with resistance to GPU cracking."
            ],
            "disadvantages": [
              "Parameters that are too low weaken protection, while excessive values cause latency or resource exhaustion.",
              "Salt, version, and parameters must be stored and migrated correctly with the output."
            ],
            "useCases": [
              "Storing password verification values",
              "Password-based key derivation and storage encryption"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Argon2id",
          "ko": "Argon2id"
        }
      },
      {
        "id": "algo-ecdh",
        "type": "algorithm",
        "name": "Elliptic Curve Diffie–Hellman",
        "aliases": [
          "ECDH"
        ],
        "summary": "타원곡선 스칼라 곱으로 두 당사자가 공유 비밀을 계산하는 키 합의 알고리즘",
        "complexity": {
          "time": {
            "scalarMultiplication": "O(log q) group operations"
          },
          "space": {
            "typical": "O(1) field elements beyond inputs"
          }
        },
        "pseudocode": "ECDH(privateA, publicB, curve)\n  validate publicB is an allowed non-identity curve point\n  sharedPoint <- scalarMultiply(privateA, publicB)\n  if sharedPoint is invalid or identity: fail\n  secret <- approved KDF(encode(sharedPoint.x), transcript context)\n  return secret",
        "referenceIds": [
          "source-nist-sp800-56a",
          "source-rfc-6090"
        ],
        "content": {
          "ko": {
            "summary": "타원곡선 스칼라 곱으로 두 당사자가 공유 비밀을 계산하는 키 합의 알고리즘",
            "description": "각 당사자는 비밀 스칼라와 공개점을 만들고 상대 공개점에 자신의 스칼라를 곱해 같은 공유점을 얻는다. 공개점 검증과 승인된 KDF, 컨텍스트 결합이 실제 프로토콜의 필수 부분이다.",
            "advantages": [
              "전통적 유한체 DH보다 짧은 키로 높은 보안 수준을 제공할 수 있다.",
              "정적·일회성 키 조합을 통해 다양한 키 합의 프로토콜을 구성한다."
            ],
            "disadvantages": [
              "공개점·곡선 파라미터 검증을 생략하면 invalid-curve와 small-subgroup 공격에 노출된다.",
              "스칼라 곱과 nonce·키 처리의 side-channel 방어가 어렵다."
            ],
            "useCases": [
              "TLS와 보안 메시징의 ephemeral key agreement",
              "모바일·임베디드 환경의 공개키 기반 공유 비밀 생성"
            ]
          },
          "en": {
            "summary": "A key-agreement algorithm deriving a shared secret through elliptic-curve scalar multiplication.",
            "description": "Each party creates a private scalar and public point, then multiplies the peer's public point by its own scalar to reach the same shared point. Public-key validation, an approved KDF, and transcript context are required in real protocols.",
            "advantages": [
              "It can provide high security with shorter keys than traditional finite-field DH.",
              "Static and ephemeral key combinations support many key-agreement protocols."
            ],
            "disadvantages": [
              "Skipping point and parameter validation enables invalid-curve or small-subgroup attacks.",
              "Side-channel-safe scalar multiplication and key handling are difficult."
            ],
            "useCases": [
              "Ephemeral key agreement in TLS and secure messaging",
              "Public-key shared-secret generation on mobile and embedded devices"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Elliptic Curve Diffie–Hellman",
          "ko": "타원곡선 디피–헬먼"
        }
      },
      {
        "id": "algo-arithmetic-coding",
        "type": "algorithm",
        "name": "Arithmetic Coding",
        "summary": "전체 메시지를 확률 구간의 한 수로 표현하는 엔트로피 부호화 알고리즘",
        "complexity": {
          "time": {
            "typical": "O(n) with constant-time model lookup"
          },
          "space": {
            "streaming": "O(|Σ|)"
          }
        },
        "pseudocode": "ARITHMETIC_ENCODE(symbols, model)\n  low <- 0; high <- full range\n  for each symbol s\n    narrow [low, high] to s's cumulative-probability subrange\n    while leading range bits are stable\n      emit a bit and renormalize the range\n      update model if adaptive\n  emit enough final bits to identify a number inside the range",
        "introduced": {
          "year": 1987
        },
        "authors": [
          {
            "name": "Ian H. Witten"
          },
          {
            "name": "Radford M. Neal"
          },
          {
            "name": "John G. Cleary"
          }
        ],
        "referenceIds": [
          "source-witten-arithmetic-coding-1987",
          "source-nist-arithmetic-coding"
        ],
        "content": {
          "ko": {
            "summary": "전체 메시지를 확률 구간의 한 수로 표현하는 엔트로피 부호화 알고리즘",
            "description": "현재 구간을 기호의 누적 확률 비율로 연속 축소하고 안정된 상위 비트를 내보내며 정밀도를 재정규화한다. 디코더는 완전히 같은 확률 모델과 갱신 순서를 사용해야 한다.",
            "advantages": [
              "기호당 정수 비트에 제한되지 않아 확률 모델의 엔트로피에 매우 가깝게 압축한다.",
              "정적·적응형·문맥 모델과 결합할 수 있다."
            ],
            "disadvantages": [
              "범위 경계와 underflow 재정규화 구현이 Huffman보다 복잡하다.",
              "모델이나 비트 하나의 불일치가 이후 스트림 전체 복호를 망칠 수 있다."
            ],
            "useCases": [
              "영상·오디오 코덱의 확률 모델 출력 부호화",
              "편향된 기호 분포의 고효율 무손실 압축"
            ]
          },
          "en": {
            "summary": "An entropy coder representing an entire message as one number inside a probability interval.",
            "description": "It repeatedly narrows a range by cumulative symbol probabilities, emits stable leading bits, and renormalizes finite precision. Decoder and encoder must use exactly the same model and update order.",
            "advantages": [
              "It is not restricted to an integer number of bits per symbol and can approach model entropy closely.",
              "It combines with static, adaptive, and context models."
            ],
            "disadvantages": [
              "Range boundaries and underflow renormalization are more complex than Huffman coding.",
              "One model or bit mismatch can corrupt the remainder of the decoded stream."
            ],
            "useCases": [
              "Coding probabilistic model outputs in image and audio codecs",
              "High-efficiency lossless compression of skewed symbol distributions"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Arithmetic Coding",
          "ko": "산술 부호화"
        }
      },
      {
        "id": "algo-run-length-encoding",
        "type": "algorithm",
        "name": "Run-Length Encoding",
        "aliases": [
          "RLE",
          "런 길이 부호화"
        ],
        "summary": "연속한 같은 기호를 값과 반복 길이로 바꾸는 단순 무손실 압축 알고리즘",
        "complexity": {
          "time": {
            "encodeAndDecode": "O(n)"
          },
          "space": {
            "streaming": "O(1) excluding output"
          }
        },
        "pseudocode": "RUN_LENGTH_ENCODE(values)\n  if values empty: return empty\n  current <- first value; count <- 1\n  for each following value x\n    if x = current: count++\n    else emit (current, count); current <- x; count <- 1\n  emit (current, count)",
        "referenceIds": [
          "source-nist-run-length",
          "source-itu-t4-run-length"
        ],
        "content": {
          "ko": {
            "summary": "연속한 같은 기호를 값과 반복 길이로 바꾸는 단순 무손실 압축 알고리즘",
            "description": "입력을 한 번 훑으며 같은 값의 최대 연속 구간을 세고 기호와 길이 쌍으로 출력한다. 복호기는 각 기호를 기록된 횟수만큼 반복한다.",
            "advantages": [
              "선형 시간·상수 작업 공간의 스트리밍 구현이 매우 단순하다.",
              "긴 동일 픽셀·공백 구간이 많은 데이터에서 효과적이다."
            ],
            "disadvantages": [
              "반복이 짧은 데이터에서는 길이 표기 때문에 원본보다 커질 수 있다.",
              "값과 길이를 구분하는 패킷 형식과 최대 run 처리 규칙이 필요하다."
            ],
            "useCases": [
              "팩스·비트맵·마스크의 긴 동일 픽셀 압축",
              "다른 압축 파이프라인의 간단한 전처리 또는 후처리"
            ]
          },
          "en": {
            "summary": "A simple lossless algorithm replacing consecutive equal symbols with value-and-length pairs.",
            "description": "A single scan counts each maximal run of an equal value and emits its symbol and length. Decoding repeats every symbol by its recorded count.",
            "advantages": [
              "A streaming implementation is simple, linear-time, and constant-workspace.",
              "It is effective on data with long runs of equal pixels or blanks."
            ],
            "disadvantages": [
              "Short-run data can grow because of count overhead.",
              "The packet format must distinguish values and counts and define maximum-run handling."
            ],
            "useCases": [
              "Long equal-pixel runs in fax, bitmap, and mask data",
              "Simple preprocessing or postprocessing inside compression pipelines"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Run-Length Encoding",
          "ko": "런 길이 인코딩"
        }
      },
      {
        "id": "algo-deflate",
        "type": "algorithm",
        "name": "DEFLATE",
        "summary": "LZ77 반복 참조와 Huffman 부호를 결합한 표준 무손실 압축 형식",
        "complexity": {
          "time": {
            "implementationDependent": "typically O(n) to O(nw)"
          },
          "space": {
            "slidingWindow": "O(w)"
          }
        },
        "pseudocode": "DEFLATE(input)\n  split input into blocks\n  for each block\n    find repeated substrings in a sliding window\n    emit literals or (length, distance) LZ77 tokens\n    choose fixed or generated Huffman code tables\n    Huffman-encode token alphabets and extra bits\n  append final-block marker",
        "introduced": {
          "year": 1996
        },
        "authors": [
          {
            "name": "Phil Katz"
          }
        ],
        "referenceIds": [
          "source-rfc-1951",
          "source-rfc-1950",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "LZ77 반복 참조와 Huffman 부호를 결합한 표준 무손실 압축 형식",
            "description": "32 KiB 이내 슬라이딩 윈도에서 과거 문자열을 찾아 길이·거리 토큰으로 바꾸고, 리터럴과 토큰을 고정 또는 동적 Huffman 표로 부호화한다. 블록마다 저장·고정·동적 방식을 선택할 수 있다.",
            "advantages": [
              "반복 문자열과 기호 빈도 두 종류의 중복을 함께 제거한다.",
              "RFC로 형식이 고정되어 ZIP·gzip·PNG·HTTP 등에서 폭넓게 호환된다."
            ],
            "disadvantages": [
              "최장 일치 탐색과 동적 Huffman 표 최적화의 품질·속도 절충이 크다.",
              "작은 블록이나 이미 압축된 입력은 헤더와 토큰 오버헤드로 커질 수 있다."
            ],
            "useCases": [
              "gzip·zlib·ZIP 데이터 스트림",
              "PNG 이미지와 HTTP 콘텐츠 압축"
            ]
          },
          "en": {
            "summary": "A standardized lossless format combining LZ77 back-references with Huffman codes.",
            "description": "It finds earlier strings within a 32 KiB sliding window, emits length-distance tokens, and codes literals and tokens with fixed or dynamic Huffman tables. Each block can select stored, fixed, or dynamic mode.",
            "advantages": [
              "It removes both repeated substrings and symbol-frequency redundancy.",
              "Its RFC-defined format interoperates widely across ZIP, gzip, PNG, and HTTP."
            ],
            "disadvantages": [
              "Match finding and dynamic-table optimization involve substantial quality-versus-speed tradeoffs.",
              "Small blocks or already compressed input can grow from headers and token overhead."
            ],
            "useCases": [
              "gzip, zlib, and ZIP data streams",
              "PNG images and HTTP content compression"
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
            "code": "async function deflate(bytes, CompressionStreamApi = globalThis.CompressionStream) {\n      if (!CompressionStreamApi) throw new Error(\"CompressionStream is required.\");\n      const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStreamApi(\"deflate-raw\"));\n      return new Uint8Array(await new Response(stream).arrayBuffer());\n    }"
          }
        ],
        "localizedNames": {
          "en": "DEFLATE",
          "ko": "DEFLATE"
        }
      },
      {
        "id": "algo-burrows-wheeler-transform",
        "type": "algorithm",
        "name": "Burrows–Wheeler Transform",
        "aliases": [
          "BWT"
        ],
        "summary": "순환 이동 정렬의 마지막 열로 같은 문맥의 기호를 모으는 가역 문자열 변환",
        "complexity": {
          "time": {
            "withSuffixArray": "O(n log n) or better"
          },
          "space": {
            "typical": "O(n)"
          }
        },
        "pseudocode": "BWT(text with unique sentinel)\n  order <- sort all cyclic rotations, represented by suffix-array-style indices\n  lastColumn[i] <- character preceding rotation order[i]\n  primary <- position of original text rotation\n  return lastColumn and primary\n\nINVERSE uses character ranks and last-to-first mapping",
        "introduced": {
          "year": 1994
        },
        "authors": [
          {
            "name": "Michael Burrows"
          },
          {
            "name": "David J. Wheeler"
          }
        ],
        "referenceIds": [
          "source-burrows-wheeler-1994",
          "source-nist-bwt",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "순환 이동 정렬의 마지막 열로 같은 문맥의 기호를 모으는 가역 문자열 변환",
            "description": "고유 종결자를 포함한 문자열의 모든 순환 이동을 정렬하고 각 행의 마지막 문자를 출력한다. 직접 회전 행렬을 만들지 않고 suffix-array 계열 정렬을 사용하며 LF-mapping으로 원문을 복원한다.",
            "advantages": [
              "반복 문맥의 뒤 문자를 모아 move-to-front와 RLE·entropy coding이 잘 작동하게 한다.",
              "정보를 버리지 않는 가역 변환이며 복호에 사전이 필요 없다."
            ],
            "disadvantages": [
              "그 자체는 압축이 아니며 후속 부호화 단계가 필요하다.",
              "블록 정렬과 역변환을 위해 블록 크기에 비례하는 메모리가 필요하다."
            ],
            "useCases": [
              "bzip2 계열 블록 압축 파이프라인",
              "FM-index와 문자열 색인의 기반 변환"
            ]
          },
          "en": {
            "summary": "A reversible string transform grouping symbols with similar contexts in the last column of sorted rotations.",
            "description": "It sorts all cyclic rotations of a sentinel-terminated string and emits each row's final character. Practical versions avoid a rotation matrix using suffix-array-style ordering, and LF mapping reconstructs the input.",
            "advantages": [
              "It groups contextual followers so move-to-front, RLE, and entropy coding work well.",
              "It is reversible and loses no information without transmitting a dictionary."
            ],
            "disadvantages": [
              "It is a transform rather than compression and needs later coding stages.",
              "Block sorting and inversion require memory proportional to block size."
            ],
            "useCases": [
              "Block-compression pipelines such as bzip2",
              "A foundation for FM-indexes and compressed string indexes"
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
            "code": "function burrowsWheelerTransform(text) {\n      if (text.length === 0) return { lastColumn: \"\", primaryIndex: 0 };\n      const rotations = Array.from({ length: text.length }, (_, index) => ({ index, value: text.slice(index) + text.slice(0, index) }));\n      rotations.sort((left, right) => left.value.localeCompare(right.value));\n      return { lastColumn: rotations.map((rotation) => rotation.value.at(-1)).join(\"\"), primaryIndex: rotations.findIndex((rotation) => rotation.index === 0) };\n    }"
          }
        ],
        "localizedNames": {
          "en": "Burrows–Wheeler Transform",
          "ko": "버로우즈–휠러 변환"
        }
      },
      {
        "id": "algo-lz77",
        "type": "algorithm",
        "name": "LZ77",
        "summary": "최근 슬라이딩 윈도 안의 반복 문자열을 거리·길이 참조로 바꾸는 사전 압축 알고리즘",
        "complexity": {
          "time": {
            "naiveMatchSearch": "O(nw)",
            "indexedImplementations": "near O(n) typical"
          },
          "space": {
            "slidingWindow": "O(w)"
          }
        },
        "pseudocode": "LZ77_ENCODE(input, windowSize)\n  position <- 0\n  while position < length(input)\n    match <- longest prefix at position occurring in previous window\n    if match is worthwhile\n      emit (distance, length) and advance by length\n    else emit literal input[position] and advance by 1",
        "introduced": {
          "year": 1977
        },
        "authors": [
          {
            "name": "Jacob Ziv"
          },
          {
            "name": "Abraham Lempel"
          }
        ],
        "referenceIds": [
          "source-lz77-1977",
          "source-nist-lz77",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "최근 슬라이딩 윈도 안의 반복 문자열을 거리·길이 참조로 바꾸는 사전 압축 알고리즘",
            "description": "현재 위치에서 과거 윈도의 가장 긴 일치를 찾고 충분히 길면 뒤쪽 거리와 일치 길이를 내보낸다. 디코더는 이미 복원한 바이트를 복사하므로 별도 사전을 전달하지 않는다.",
            "advantages": [
              "입력에 적응하는 암시적 사전으로 반복 문자열을 한 번의 스트림에서 활용한다.",
              "윈도 크기를 제한해 메모리를 통제하고 온라인 인코딩·디코딩할 수 있다."
            ],
            "disadvantages": [
              "좋은 최장 일치 탐색은 해시 체인·트리 등 복잡한 색인이 필요하다.",
              "윈도보다 먼 반복은 참조할 수 없고 임의 접근 복호가 어렵다."
            ],
            "useCases": [
              "DEFLATE·gzip·ZIP 압축의 반복 제거 단계",
              "로그·텍스트·바이너리 스트림의 범용 무손실 압축"
            ]
          },
          "en": {
            "summary": "A dictionary compressor replacing repeated strings in a recent sliding window with distance-length references.",
            "description": "At each position it searches the previous window for the longest prefix match and emits its backward distance and length when worthwhile. The decoder copies already reconstructed bytes, so no dictionary is transmitted.",
            "advantages": [
              "An implicit adaptive dictionary exploits repeated substrings in one streaming pass.",
              "A bounded window controls memory and supports online encoding and decoding."
            ],
            "disadvantages": [
              "Good longest-match search needs complex indexing such as hash chains or trees.",
              "It cannot reference repeats beyond the window and random-access decoding is difficult."
            ],
            "useCases": [
              "The repetition-removal stage of DEFLATE, gzip, and ZIP",
              "General lossless compression of logs, text, and binary streams"
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
            "code": "function lz77Encode(text, windowSize = 4096, minimumMatch = 3) {\n      const tokens = [];\n      for (let position = 0; position < text.length;) {\n        let bestLength = 0;\n        let bestDistance = 0;\n        const start = Math.max(0, position - windowSize);\n        for (let candidate = start; candidate < position; candidate += 1) {\n          let length = 0;\n          while (position + length < text.length && text[candidate + length] === text[position + length] && candidate + length < position) length += 1;\n          if (length > bestLength) { bestLength = length; bestDistance = position - candidate; }\n        }\n        if (bestLength >= minimumMatch) { tokens.push({ distance: bestDistance, length: bestLength }); position += bestLength; }\n        else tokens.push({ literal: text[position++] });\n      }\n      return tokens;\n    }"
          }
        ],
        "localizedNames": {
          "en": "LZ77",
          "ko": "LZ77"
        }
      },
      {
        "id": "algo-lz78",
        "type": "algorithm",
        "name": "LZ78",
        "summary": "새 구문을 이전 구문 인덱스와 다음 기호로 사전에 추가하는 무손실 압축 알고리즘",
        "complexity": {
          "time": {
            "withTrie": "O(n) expected"
          },
          "space": {
            "dictionary": "O(n)"
          }
        },
        "pseudocode": "LZ78_ENCODE(input)\n  dictionary <- {empty string: 0}\n  phrase <- empty\n  for each symbol c\n    if phrase + c is in dictionary\n      phrase <- phrase + c\n    else\n      emit (index(phrase), c)\n      add phrase + c to dictionary\n      phrase <- empty\n  if phrase not empty: emit its final representation",
        "introduced": {
          "year": 1978
        },
        "authors": [
          {
            "name": "Jacob Ziv"
          },
          {
            "name": "Abraham Lempel"
          }
        ],
        "referenceIds": [
          "source-lz78-1978",
          "source-nist-lz77",
          "source-princeton-compression"
        ],
        "content": {
          "ko": {
            "summary": "새 구문을 이전 구문 인덱스와 다음 기호로 사전에 추가하는 무손실 압축 알고리즘",
            "description": "입력에서 사전에 있는 가장 긴 구문을 늘려 가다가 다음 기호를 붙인 문자열이 없으면 기존 구문 인덱스와 새 기호를 출력하고 그 결합을 사전에 등록한다. 디코더도 같은 순서로 사전을 재구성한다.",
            "advantages": [
              "슬라이딩 윈도 없이 입력 전체에서 발견한 구문을 명시적 사전에 축적한다.",
              "인코더와 디코더가 전송 없이 동일 사전을 동기적으로 만든다."
            ],
            "disadvantages": [
              "사전이 계속 커지므로 크기 제한·코드 폭·초기화 정책이 필요하다.",
              "짧거나 반복이 적은 데이터에서는 인덱스와 새 기호 오버헤드가 크다."
            ],
            "useCases": [
              "사전 압축 계열과 LZW의 기반 학습",
              "반복 구문이 누적되는 기호 스트림의 무손실 압축"
            ]
          },
          "en": {
            "summary": "A lossless compressor adding each new phrase as a previous-phrase index plus one symbol.",
            "description": "It extends the longest dictionary phrase until appending the next symbol makes a new string, then emits the old phrase index and new symbol and inserts their combination. The decoder rebuilds the same dictionary in order.",
            "advantages": [
              "It accumulates phrases across the input in an explicit dictionary without a sliding window.",
              "Encoder and decoder synchronize the dictionary without transmitting it."
            ],
            "disadvantages": [
              "An ever-growing dictionary needs limits, code-width rules, and reset policy.",
              "Index and symbol overhead is large on short or weakly repetitive data."
            ],
            "useCases": [
              "Learning dictionary-compression families and the basis of LZW",
              "Lossless compression of symbol streams with accumulating repeated phrases"
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
            "code": "function lz78Encode(text) {\n      const dictionary = new Map([[\"\", 0]]);\n      const output = [];\n      let phrase = \"\";\n      for (const symbol of text) {\n        const combined = phrase + symbol;\n        if (dictionary.has(combined)) phrase = combined;\n        else { output.push([dictionary.get(phrase), symbol]); dictionary.set(combined, dictionary.size); phrase = \"\"; }\n      }\n      if (phrase !== \"\") output.push([dictionary.get(phrase), \"\"]);\n      return output;\n    }"
          }
        ],
        "localizedNames": {
          "en": "LZ78",
          "ko": "LZ78"
        }
      },
      {
        "id": "algo-extended-euclidean",
        "type": "algorithm",
        "name": "Extended Euclidean Algorithm",
        "aliases": [
          "Extended GCD"
        ],
        "summary": "최대공약수와 Bézout 계수를 함께 계산하는 유클리드 알고리즘의 확장",
        "complexity": {
          "time": {
            "divisions": "O(log min(a, b))"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "EXTENDED_GCD(a, b)\n  oldR, r <- a, b\n  oldS, s <- 1, 0\n  oldT, t <- 0, 1\n  while r != 0\n    q <- floor(oldR / r)\n    oldR, r <- r, oldR - q*r\n    oldS, s <- s, oldS - q*s\n    oldT, t <- t, oldT - q*t\n  return (oldR, oldS, oldT)",
        "referenceIds": [
          "source-nist-fips-197",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "최대공약수와 Bézout 계수를 함께 계산하는 유클리드 알고리즘의 확장",
            "description": "나머지 갱신과 동시에 각 나머지를 원래 a와 b의 선형 결합으로 나타내는 두 계수도 갱신한다. 종료 시 gcd(a,b)=ax+by를 만족하는 x,y를 얻는다.",
            "advantages": [
              "GCD와 Bézout 계수를 같은 로그 개수의 나눗셈으로 계산한다.",
              "gcd(a,m)=1일 때 x mod m이 모듈러 역원이 된다."
            ],
            "disadvantages": [
              "부호와 정수 나눗셈 규칙이 언어마다 달라 음수 입력을 정규화해야 한다.",
              "매우 큰 정수에서는 나눗셈의 비트 복잡도가 지배한다."
            ],
            "useCases": [
              "RSA 등에서 모듈러 역원 계산",
              "일차 디오판토스 방정식의 정수해 구성"
            ]
          },
          "en": {
            "summary": "An extension of Euclid's algorithm computing both the GCD and Bézout coefficients.",
            "description": "Alongside each remainder update, it maintains coefficients expressing that remainder as a linear combination of the original a and b. At termination it returns x and y satisfying gcd(a,b)=ax+by.",
            "advantages": [
              "It obtains the GCD and Bézout coefficients with the same logarithmic number of divisions.",
              "When gcd(a,m)=1, x modulo m is a modular inverse."
            ],
            "disadvantages": [
              "Language-specific signed division rules require normalization for negative inputs.",
              "For very large integers, division bit complexity dominates."
            ],
            "useCases": [
              "Modular inverses in RSA and related arithmetic",
              "Constructing integer solutions to linear Diophantine equations"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Extended Euclidean Algorithm",
          "ko": "확장 유클리드 알고리즘"
        }
      },
      {
        "id": "algo-binary-modular-exponentiation",
        "type": "algorithm",
        "name": "Binary Modular Exponentiation",
        "aliases": [
          "Exponentiation by Squaring"
        ],
        "summary": "지수의 이진 비트를 따라 제곱해 큰 거듭제곱 나머지를 계산하는 알고리즘",
        "complexity": {
          "time": {
            "modularMultiplications": "O(log e)"
          },
          "space": {
            "iterative": "O(1)"
          }
        },
        "pseudocode": "MOD_POW(base, exponent, modulus)\n  result <- 1 mod modulus\n  base <- base mod modulus\n  while exponent > 0\n    if exponent is odd: result <- result * base mod modulus\n    base <- base * base mod modulus\n    exponent <- floor(exponent / 2)\n  return result",
        "referenceIds": [
          "source-rfc-8017",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "지수의 이진 비트를 따라 제곱해 큰 거듭제곱 나머지를 계산하는 알고리즘",
            "description": "지수를 절반씩 줄이며 현재 비트가 1일 때만 결과에 밑을 곱하고 밑은 매 단계 제곱한다. 모든 곱셈 뒤 나머지를 취해 중간 정수 크기를 제한한다.",
            "advantages": [
              "e번 곱셈을 O(log e)번의 제곱과 곱셈으로 줄인다.",
              "반복형은 상수 개의 큰 정수만 유지한다."
            ],
            "disadvantages": [
              "큰 정수 모듈러 곱셈 자체의 비용과 오버플로 방지가 필요하다.",
              "비밀 지수에서는 분기와 메모리 접근을 일정 시간으로 만들지 않으면 side-channel이 생긴다."
            ],
            "useCases": [
              "RSA·Diffie–Hellman의 핵심 거듭제곱 연산",
              "빠른 선형 점화식과 행렬 거듭제곱"
            ]
          },
          "en": {
            "summary": "An algorithm computing large modular powers by following exponent bits and repeated squaring.",
            "description": "It halves the exponent, multiplies the result only for a set bit, and squares the base at every step. Reducing after each multiplication bounds intermediate integer size.",
            "advantages": [
              "It reduces e multiplications to O(log e) squares and multiplies.",
              "The iterative form keeps only a constant number of large integers."
            ],
            "disadvantages": [
              "Large-integer modular multiplication cost and overflow still need handling.",
              "Secret exponents require constant-time branches and memory access to avoid side channels."
            ],
            "useCases": [
              "Core exponentiation in RSA and Diffie–Hellman",
              "Fast linear recurrences and matrix powers"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Binary Modular Exponentiation",
          "ko": "이진 모듈러 거듭제곱"
        }
      },
      {
        "id": "algo-miller-rabin",
        "type": "algorithm",
        "name": "Miller–Rabin Primality Test",
        "summary": "강한 의사소수 증인을 여러 밑으로 검사하는 확률적 소수 판정 알고리즘",
        "complexity": {
          "time": {
            "kRounds": "O(k log n) modular multiplications"
          },
          "space": {
            "typical": "O(log n) bits"
          }
        },
        "pseudocode": "MILLER_RABIN(n, rounds)\n  handle small n and even n\n  write n - 1 = d * 2^s with d odd\n  repeat rounds times\n    choose base a in [2, n - 2]\n    x <- MOD_POW(a, d, n)\n    if x = 1 or x = n - 1: continue\n    repeat s - 1 times: x <- x*x mod n; if x = n - 1 continue outer round\n    return COMPOSITE\n  return PROBABLY_PRIME",
        "introduced": {
          "year": 1980
        },
        "authors": [
          {
            "name": "Gary L. Miller"
          },
          {
            "name": "Michael O. Rabin"
          }
        ],
        "referenceIds": [
          "source-miller-primality-1976",
          "source-rabin-primality-1980",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "강한 의사소수 증인을 여러 밑으로 검사하는 확률적 소수 판정 알고리즘",
            "description": "n−1을 d·2^s로 분해하고 무작위 밑 a에 대해 a^d mod n과 연속 제곱이 1 또는 −1의 소수 조건을 만족하는지 검사한다. 하나라도 실패하면 합성수이며 모든 라운드를 통과하면 높은 확률로 소수다.",
            "advantages": [
              "큰 정수에 대해 실용적으로 매우 빠르며 합성수 판정에는 오류가 없다.",
              "독립 라운드를 늘려 합성수를 소수로 볼 확률을 지수적으로 줄인다."
            ],
            "disadvantages": [
              "일반 무작위 밑 사용 결과는 확률적이며 probably prime을 반환한다.",
              "밑 선택·난수 품질·작은 소수 전처리와 모듈러 곱 구현이 중요하다."
            ],
            "useCases": [
              "RSA 키 생성의 큰 소수 후보 선별",
              "정수론 소프트웨어의 빠른 primality filter"
            ]
          },
          "en": {
            "summary": "A probabilistic primality test checking strong pseudoprime witnesses for several bases.",
            "description": "It writes n−1 as d·2^s and tests whether a^d modulo n and successive squares meet the prime-only 1 or −1 conditions. Any failed round proves compositeness; passing all rounds means probably prime.",
            "advantages": [
              "It is very fast for large integers and never falsely labels a prime composite.",
              "Additional independent rounds reduce false-prime probability exponentially."
            ],
            "disadvantages": [
              "With general random bases, the returned probably-prime result is probabilistic.",
              "Base selection, randomness, small-prime filtering, and modular multiplication quality matter."
            ],
            "useCases": [
              "Screening large prime candidates during RSA key generation",
              "Fast primality filters in number-theory software"
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
            "code": "function millerRabin(value, bases = [2n, 3n, 5n, 7n, 11n]) {\n      const n = BigInt(value);\n      if (n < 2n) return false;\n      for (const prime of [2n, 3n, 5n, 7n, 11n]) { if (n === prime) return true; if (n % prime === 0n) return false; }\n      let d = n - 1n;\n      let s = 0;\n      while ((d & 1n) === 0n) { d >>= 1n; s += 1; }\n      const power = (base, exponent) => { let result = 1n; base %= n; while (exponent) { if (exponent & 1n) result = result * base % n; base = base * base % n; exponent >>= 1n; } return result; };\n      for (const base of bases) {\n        if (base >= n - 1n) continue;\n        let x = power(base, d);\n        if (x === 1n || x === n - 1n) continue;\n        let witness = true;\n        for (let round = 1; round < s; round += 1) { x = x * x % n; if (x === n - 1n) { witness = false; break; } }\n        if (witness) return false;\n      }\n      return true;\n    }"
          }
        ],
        "localizedNames": {
          "en": "Miller–Rabin Primality Test",
          "ko": "밀러–라빈 소수 판정"
        }
      },
      {
        "id": "algo-gaussian-elimination",
        "type": "algorithm",
        "name": "Gaussian Elimination",
        "summary": "행 연산으로 계수 행렬을 삼각형으로 만든 뒤 역대입하는 연립방정식 알고리즘",
        "complexity": {
          "time": {
            "denseSquareSystem": "O(n³)"
          },
          "space": {
            "matrixStorage": "O(n²)"
          }
        },
        "pseudocode": "GAUSSIAN_ELIMINATION(A, b)\n  for column k <- 0 to n - 1\n    pivot <- row at or below k with largest absolute A[row, k]\n    if pivot is zero: handle singular system\n    swap pivot row with row k\n    for each row i below k\n      factor <- A[i, k] / A[k, k]\n      subtract factor * row k from row i and b[i]\n  back-substitute from last row to first",
        "referenceIds": [
          "source-netlib-lu",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "행 연산으로 계수 행렬을 삼각형으로 만든 뒤 역대입하는 연립방정식 알고리즘",
            "description": "각 열에서 피벗을 선택하고 아래 행에서 그 변수를 제거해 상삼각 행렬을 만든다. 수치 계산에서는 절댓값이 큰 피벗을 고르는 부분 피벗팅으로 오차 증폭을 줄인 뒤 역대입한다.",
            "advantages": [
              "조밀한 일반 선형 시스템을 체계적으로 풀고 LU 분해 형태로 재사용할 수 있다.",
              "rank·특이성·해의 존재 여부 판정으로 확장된다."
            ],
            "disadvantages": [
              "조밀한 n×n 시스템에 O(n³) 시간과 O(n²) 저장 공간이 필요하다.",
              "피벗팅이 없거나 조건수가 나쁜 행렬에서는 부동소수점 오차가 크게 증폭될 수 있다."
            ],
            "useCases": [
              "과학·공학의 조밀 선형 방정식 풀이",
              "회귀·회로·수치 최적화의 선형 하위 문제"
            ]
          },
          "en": {
            "summary": "A linear-system algorithm reducing the coefficient matrix to triangular form and back-substituting.",
            "description": "It selects a pivot in each column and eliminates that variable from rows below to form an upper-triangular matrix. Numerical implementations use partial pivoting to limit error growth before back substitution.",
            "advantages": [
              "It systematically solves dense general systems and can be reused as an LU factorization.",
              "It extends to rank, singularity, and consistency determination."
            ],
            "disadvantages": [
              "A dense n-by-n system needs O(n³) time and O(n²) storage.",
              "Without pivoting, or for ill-conditioned matrices, floating-point error can grow severely."
            ],
            "useCases": [
              "Dense linear equations in science and engineering",
              "Linear subproblems in regression, circuits, and numerical optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        },
        "localizedNames": {
          "en": "Gaussian Elimination",
          "ko": "가우스 소거법"
        }
      },
      {
        "id": "algo-newton-raphson",
        "type": "algorithm",
        "name": "Newton–Raphson Method",
        "aliases": [],
        "localizedNames": {
          "en": "Newton–Raphson Method",
          "ko": "뉴턴–랩슨 방법"
        },
        "complexity": {
          "time": "O(T) function and derivative evaluations",
          "space": "O(1)"
        },
        "pseudocode": "NEWTON_RAPHSON(f, derivative, x)\n  repeat up to maxIterations\n    value <- f(x)\n    if abs(value) <= tolerance: return x\n    slope <- derivative(x)\n    if slope is too small: fail\n    next <- x - value / slope\n    if step is tiny: return next\n    x <- next",
        "referenceIds": [
          "source-scipy-optimize",
          "source-netlib-templates"
        ],
        "content": {
          "ko": {
            "summary": "현재 접선의 x절편으로 이동해 함수의 근을 찾는 반복법",
            "description": "x에서 함수값과 도함수를 계산하고 x−f(x)/f'(x)로 갱신한다. 근 근처에서 조건이 좋으면 오차가 빠르게 제곱 수준으로 감소한다.",
            "advantages": [
              "좋은 초기값에서는 매우 빠른 이차 수렴을 보인다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "도함수가 작거나 초기값이 나쁘면 발산하거나 다른 근으로 갈 수 있다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "비선형 방정식과 최적화의 1차원 근 계산",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "An iterative root finder moving to the x-intercept of the current tangent.",
            "description": "It updates x to x−f(x)/f'(x); near a well-conditioned root the error can decrease quadratically.",
            "advantages": [
              "A good initial estimate yields very fast quadratic convergence.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "A small derivative or poor initial point can diverge or reach another root.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Roots of nonlinear equations and one-dimensional optimization subproblems",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-gauss-seidel",
        "type": "algorithm",
        "name": "Gauss–Seidel Method",
        "aliases": [],
        "localizedNames": {
          "en": "Gauss–Seidel Method",
          "ko": "가우스–자이델 방법"
        },
        "complexity": {
          "time": "O(Tn²) dense",
          "space": "O(n) beyond matrix"
        },
        "pseudocode": "GAUSS_SEIDEL(A, b, x)\n  repeat until converged\n    previous <- copy x\n    for row i <- 0 to n - 1\n      sum <- b[i] minus known off-diagonal terms\n      use new x values left of i and old values right of i\n      x[i] <- sum / A[i,i]\n    stop when x changes below tolerance",
        "referenceIds": [
          "source-netlib-templates",
          "source-netlib-lapack"
        ],
        "content": {
          "ko": {
            "summary": "한 행에서 갱신한 값을 다음 행 계산에 즉시 사용하는 선형 시스템 반복해법",
            "description": "각 변수의 방정식을 풀어 순서대로 덮어쓰며 최신 값을 사용한다. 엄격 대각 우세나 대칭 양의 정부호 같은 조건에서 수렴한다.",
            "advantages": [
              "Jacobi보다 같은 반복에서 새 정보를 빠르게 전파한다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "수렴 조건이 없으면 발산할 수 있고 행 순서에 민감하다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "희소 선형 시스템과 편미분방정식 이산화",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "An iterative linear solver immediately reusing each newly updated component in subsequent rows.",
            "description": "It solves one equation for each variable in order, converging under conditions such as strict diagonal dominance or symmetric positive definiteness.",
            "advantages": [
              "Fresh values propagate information faster per iteration than Jacobi updates.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "It can diverge without suitable matrix conditions and is order-sensitive.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Sparse linear systems and discretized partial differential equations",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-lu-decomposition",
        "type": "algorithm",
        "name": "LU Decomposition",
        "aliases": [],
        "localizedNames": {
          "en": "LU Decomposition",
          "ko": "LU 분해"
        },
        "complexity": {
          "time": "O(n³)",
          "space": "O(n²)"
        },
        "pseudocode": "LU_DECOMPOSE(A)\n  for column k <- 0 to n - 1\n    choose a stable pivot row and swap\n    for row i <- k + 1 to n - 1\n      multiplier <- A[i,k] / A[k,k]\n      store multiplier below diagonal\n      subtract multiplier times pivot row\n  return permutation, L, and U",
        "referenceIds": [
          "source-netlib-lapack",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "행렬을 하삼각 L과 상삼각 U의 곱으로 분해하는 소거 알고리즘",
            "description": "부분 피벗으로 안정적인 행을 선택한 뒤 pivot 아래 원소를 소거하며 multiplier를 L 위치에 저장하고 남은 상삼각 부분을 U로 만든다.",
            "advantages": [
              "한 번 분해하면 여러 우변을 삼각 대입으로 빠르게 풀 수 있다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "특이·악조건 행렬에서는 피벗 전략과 수치 오차 관리가 필요하다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "연립방정식 반복 풀이와 행렬식·역행렬 계산",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "An elimination algorithm factoring a matrix into lower- and upper-triangular factors.",
            "description": "Partial pivoting selects a stable row, elimination multipliers are stored below the diagonal, and the remaining upper triangle forms U.",
            "advantages": [
              "One factorization supports fast triangular solves for many right-hand sides.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "Singular or ill-conditioned matrices require pivoting and error control.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Repeated linear solves, determinants, and inverse-related computations",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-cholesky",
        "type": "algorithm",
        "name": "Cholesky Decomposition",
        "aliases": [],
        "localizedNames": {
          "en": "Cholesky Decomposition",
          "ko": "촐레스키 분해"
        },
        "complexity": {
          "time": "O(n³/3)",
          "space": "O(n²)"
        },
        "pseudocode": "CHOLESKY(A)\n  for row i <- 0 to n - 1\n    for column j <- 0 to i\n      sum <- A[i,j] minus previous products\n      if i = j\n        require sum > 0; L[i,j] <- sqrt(sum)\n      else\n        L[i,j] <- sum / L[j,j]\n  return L",
        "referenceIds": [
          "source-netlib-lapack",
          "source-clrs-fourth"
        ],
        "content": {
          "ko": {
            "summary": "대칭 양의 정부호 행렬을 L·Lᵀ로 분해하는 알고리즘",
            "description": "이전에 계산한 하삼각 원소의 내적을 빼고 대각에서는 양의 제곱근, 비대각에서는 대각 원소로 나눈 값을 저장한다.",
            "advantages": [
              "일반 LU보다 연산과 저장량이 작고 수치적으로 안정적이다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "대칭 양의 정부호 조건을 만족하지 않으면 분해가 실패한다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "최소제곱·가우시안 모델·최적화의 선형 시스템",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "An algorithm factoring a symmetric positive-definite matrix as L times its transpose.",
            "description": "It subtracts products of previous lower-triangular entries, taking a positive square root on the diagonal and dividing off-diagonal entries.",
            "advantages": [
              "It uses less work and storage than general LU and is numerically stable.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "The factorization fails when the matrix is not symmetric positive definite.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Linear systems in least squares, Gaussian models, and optimization",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-strassen",
        "type": "algorithm",
        "name": "Strassen's Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Strassen's Algorithm",
          "ko": "스트라센 알고리즘"
        },
        "complexity": {
          "time": "O(n^log2(7)) ≈ O(n^2.807)",
          "space": "O(n²) or more depending on schedule"
        },
        "pseudocode": "STRASSEN(A, B)\n  if matrices are small: use classical multiplication\n  split A and B into four equal blocks\n  form seven recursive block products\n  combine products into four result blocks\n  join blocks and remove any zero padding",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "2×2 블록 곱을 여덟 번 대신 일곱 번 재귀 계산하는 행렬 곱셈",
            "description": "입력을 네 블록으로 나누고 합·차로 만든 일곱 곱을 계산한 뒤 결과 네 블록을 선형 결합한다. 임계 크기 아래에서는 고전 곱셈으로 전환한다.",
            "advantages": [
              "큰 조밀 행렬에서 고전 O(n³)보다 낮은 점근 시간을 제공한다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "추가 덧셈·메모리와 수치 오차 때문에 작은 행렬에는 불리하다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "대규모 조밀 행렬 곱셈 라이브러리의 상위 재귀 단계",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "A matrix-multiplication algorithm recursively using seven block products instead of eight.",
            "description": "It splits matrices into four blocks, computes seven products of block sums and differences, then combines them; small blocks fall back to classical multiplication.",
            "advantages": [
              "It improves asymptotic time beyond classical O(n³) on large dense matrices.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "Extra additions, memory, and numerical error make it unattractive for small matrices.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Upper recursion levels in large dense matrix-multiplication libraries",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-pollard-rho",
        "type": "algorithm",
        "name": "Pollard's Rho Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Pollard's Rho Algorithm",
          "ko": "폴라드 로 알고리즘"
        },
        "complexity": {
          "time": {
            "expectedFactorP": "O(sqrt(p)) modular steps"
          },
          "space": "O(1)"
        },
        "pseudocode": "POLLARD_RHO(n)\n  if n is even: return 2\n  choose random x and constant c\n  y <- x; divisor <- 1\n  while divisor = 1\n    x <- (x*x + c) mod n\n    y <- apply the same map twice\n    divisor <- gcd(abs(x-y), n)\n  if divisor = n: restart\n  return divisor",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "모듈러 의사난수 수열의 충돌을 GCD로 감지해 정수 인수를 찾는 알고리즘",
            "description": "서로 다른 속도로 진행하는 두 상태의 차이와 n의 최대공약수를 반복 계산한다. 어떤 소인수 모듈러에서 충돌하면 비자명한 인수가 드러난다.",
            "advantages": [
              "작은 소인수를 O(1) 메모리로 실용적으로 빠르게 찾는다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "확률적 재시작이 필요하고 큰 소인수만 가진 수에는 느리다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "합성수 분해와 공개키 크기 검증의 보조 도구",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "An integer-factorization algorithm detecting collisions in a modular pseudorandom sequence through GCDs.",
            "description": "Two states advance at different speeds; when they collide modulo a hidden prime factor, gcd(|x−y|, n) reveals a divisor.",
            "advantages": [
              "It finds small factors quickly in practice with O(1) memory.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "It needs randomized restarts and is slow when all prime factors are large.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Composite factorization and auxiliary public-key-size checks",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-chinese-remainder",
        "type": "algorithm",
        "name": "Constructive Chinese Remainder Algorithm",
        "aliases": [],
        "localizedNames": {
          "en": "Constructive Chinese Remainder Algorithm",
          "ko": "구성적 중국인의 나머지 정리 알고리즘"
        },
        "complexity": {
          "time": "O(k log M) arithmetic operations",
          "space": "O(k)"
        },
        "pseudocode": "CRT(residues, pairwiseCoprimeModuli)\n  M <- product of all moduli\n  result <- 0\n  for each congruence a[i] mod m[i]\n    partial <- M / m[i]\n    inverse <- extendedGcd(partial, m[i]).inverse\n    result <- result + a[i] * partial * inverse\n  return result mod M",
        "referenceIds": [
          "source-clrs-fourth",
          "source-erickson-algorithms"
        ],
        "content": {
          "ko": {
            "summary": "서로소 모듈러 합동식의 해를 역원 가중합으로 구성하는 알고리즘",
            "description": "전체 모듈러 곱에서 각 m_i를 뺀 부분 곱과 그 모듈러 역원을 계산해 해당 항만 residue를 남기는 기저를 만든다.",
            "advantages": [
              "여러 작은 모듈러 계산을 하나의 유일한 해로 정확히 결합한다.",
              "대수적 구조를 이용해 직접 계산보다 연산량을 줄인다."
            ],
            "disadvantages": [
              "모듈러가 서로소가 아니면 호환성 검사와 일반화된 처리가 필요하다.",
              "수치 오차나 정수 범위 조건을 세심하게 관리해야 한다."
            ],
            "useCases": [
              "큰 정수 연산 가속과 잔여 수 체계·암호 구현",
              "과학 계산과 암호·최적화의 기초 연산"
            ]
          },
          "en": {
            "summary": "A constructive algorithm combining pairwise-coprime congruences through inverse-weighted terms.",
            "description": "For each modulus it forms the product of all others and its modular inverse, creating a basis term that preserves only the desired residue.",
            "advantages": [
              "It exactly combines several small-modulus computations into one unique solution.",
              "It exploits algebraic structure to reduce work relative to direct computation."
            ],
            "disadvantages": [
              "Noncoprime moduli require compatibility checks and a generalized method.",
              "Numerical error or integer-domain conditions require careful control."
            ],
            "useCases": [
              "Large-integer acceleration, residue systems, and cryptographic implementations",
              "Core operations in scientific computing, cryptography, and optimization"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-ed25519",
        "type": "algorithm",
        "name": "Ed25519",
        "aliases": [],
        "localizedNames": {
          "en": "Ed25519",
          "ko": "Ed25519"
        },
        "complexity": {
          "time": "O(log q) group operations per scalar multiplication",
          "space": "O(1) field elements beyond message hashing"
        },
        "pseudocode": "ED25519_SIGN(privateSeed, message)\n  hash seed and clamp secret scalar\n  derive deterministic nonce from secret prefix and message\n  R <- nonce times base point\n  challenge <- hash(R, publicKey, message)\n  S <- nonce + challenge * secretScalar mod groupOrder\n  return encode(R, S)\nVERIFY checks canonical encodings and the group equation",
        "referenceIds": [
          "source-rfc-8032",
          "source-rfc-8410"
        ],
        "content": {
          "ko": {
            "summary": "Edwards25519 곡선과 결정적 nonce를 사용하는 EdDSA 디지털 서명",
            "description": "비밀 seed에서 scalar와 nonce prefix를 유도하고 메시지별 nonce로 R을 만든 뒤 해시 challenge와 응답 S를 계산한다. 검증은 RFC의 canonical encoding과 군 방정식을 확인한다.",
            "advantages": [
              "짧은 키와 서명으로 빠르고 결정적인 서명을 제공한다.",
              "공개 표준에 정의된 보안 목적과 상호운용성을 제공한다."
            ],
            "disadvantages": [
              "직접 곡선·인코딩을 구현하면 부채널과 비정규 값 검증 오류가 생기기 쉽다.",
              "직접 구현은 부채널과 매개변수 검증 실수에 취약하다."
            ],
            "useCases": [
              "소프트웨어 서명, SSH 키, 패키지와 메시지 인증",
              "표준 보안 프로토콜의 키·서명 처리"
            ]
          },
          "en": {
            "summary": "An EdDSA digital-signature scheme using Edwards25519 and deterministic nonces.",
            "description": "It derives a scalar and nonce prefix from a private seed, computes a message nonce and R, then forms a hash challenge and response S. Verification enforces RFC encodings and a group equation.",
            "advantages": [
              "It provides fast deterministic signatures with compact keys and signatures.",
              "Public standards define its security purpose and interoperability."
            ],
            "disadvantages": [
              "Handwritten curve and encoding code is prone to side channels and noncanonical-value bugs.",
              "Handwritten implementations are vulnerable to side channels and validation mistakes."
            ],
            "useCases": [
              "Software signing, SSH keys, and package or message authentication",
              "Key and signature processing in standardized security protocols"
            ]
          }
        },
        "quality": {
          "tier": "standard",
          "status": "reviewed"
        }
      },
      {
        "id": "algo-pbkdf2",
        "type": "algorithm",
        "name": "PBKDF2",
        "aliases": [],
        "localizedNames": {
          "en": "PBKDF2",
          "ko": "PBKDF2"
        },
        "complexity": {
          "time": "O(iterations × outputBlocks) PRF evaluations",
          "space": "O(1) per output block"
        },
        "pseudocode": "PBKDF2(password, salt, iterations, length, PRF)\n  for block index i from 1 upward\n    U <- PRF(password, salt || INT32_BE(i))\n    T <- U\n    repeat iterations - 1 times\n      U <- PRF(password, U)\n      T <- T XOR U\n    append T to output\n  truncate output to requested length",
        "referenceIds": [
          "source-rfc-8018",
          "source-nist-sp800-132"
        ],
        "content": {
          "ko": {
            "summary": "PRF를 반복 적용해 비밀번호에서 키를 유도하는 표준 알고리즘",
            "description": "salt와 블록 번호에 HMAC 같은 PRF를 적용하고 이전 결과를 정해진 횟수만큼 다시 PRF에 넣어 XOR한다. 반복 횟수가 추측 비용을 높인다.",
            "advantages": [
              "RFC와 NIST에 정의되어 폭넓은 상호운용성을 가진다.",
              "공개 표준에 정의된 보안 목적과 상호운용성을 제공한다."
            ],
            "disadvantages": [
              "메모리 사용량이 작아 GPU·ASIC 병렬 공격에는 memory-hard KDF보다 약하다.",
              "직접 구현은 부채널과 매개변수 검증 실수에 취약하다."
            ],
            "useCases": [
              "레거시 비밀번호 기반 암호화와 저장 키 유도",
              "표준 보안 프로토콜의 키·서명 처리"
            ]
          },
          "en": {
            "summary": "A standardized algorithm deriving keys from passwords through repeated pseudorandom-function evaluations.",
            "description": "It applies an HMAC-like PRF to a salt and block number, repeatedly feeds back the previous result, and XORs rounds; the iteration count raises guessing cost.",
            "advantages": [
              "RFC and NIST specifications provide broad interoperability.",
              "Public standards define its security purpose and interoperability."
            ],
            "disadvantages": [
              "Its low memory use makes GPU and ASIC attacks easier than against memory-hard KDFs.",
              "Handwritten implementations are vulnerable to side channels and validation mistakes."
            ],
            "useCases": [
              "Legacy password-based encryption and stored-key derivation",
              "Key and signature processing in standardized security protocols"
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
