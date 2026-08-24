(function registerAlgoriaExpansionSources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "sources-expansion",
    sources: [
      {
        "id": "source-von-neumann-edvac-1945",
        "type": "paper",
        "title": "First Draft of a Report on the EDVAC",
        "year": 1945,
        "authors": [
          "John von Neumann"
        ],
        "url": "https://doi.org/10.5479/sil.538961.39088011475779"
      },
      {
        "id": "source-bellman-dynamic-programming-1957",
        "type": "paper",
        "title": "Dynamic Programming",
        "year": 1957,
        "authors": [
          "Richard Bellman"
        ],
        "url": "https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming"
      },
      {
        "id": "source-floyd-1962",
        "type": "paper",
        "title": "Algorithm 97: Shortest Path",
        "year": 1962,
        "authors": [
          "Robert W. Floyd"
        ],
        "url": "https://doi.org/10.1145/367766.368168"
      },
      {
        "id": "source-williams-heapsort-1964",
        "type": "paper",
        "title": "Algorithm 232: Heapsort",
        "year": 1964,
        "authors": [
          "J. W. J. Williams"
        ],
        "url": "https://doi.org/10.1145/512274.512284"
      },
      {
        "id": "source-nist-sp800-38a",
        "type": "standard",
        "title": "NIST SP 800-38A: Recommendation for Block Cipher Modes of Operation",
        "year": 2001,
        "authors": [
          "Morris Dworkin"
        ],
        "url": "https://csrc.nist.gov/pubs/sp/800/38/a/final"
      },
      {
        "id": "source-networkx-pagerank",
        "type": "documentation",
        "title": "PageRank — NetworkX Documentation",
        "authors": [
          "NetworkX developers"
        ],
        "url": "https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.link_analysis.pagerank_alg.pagerank.html"
      },
      {
        "id": "source-libsodium-chacha20",
        "type": "documentation",
        "title": "ChaCha20 — libsodium Documentation",
        "authors": [
          "libsodium contributors"
        ],
        "url": "https://doc.libsodium.org/advanced/stream_ciphers/chacha20"
      },
      {
        "id": "source-nist-hash-functions",
        "type": "documentation",
        "title": "Hash Functions — NIST Cryptographic Standards and Guidelines",
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/projects/hash-functions"
      },
      {
        "id": "source-shell-1959",
        "type": "paper",
        "title": "A High-Speed Sorting Procedure",
        "year": 1959,
        "authors": [
          "Donald L. Shell"
        ],
        "url": "https://doi.org/10.1145/368370.368387"
      },
      {
        "id": "source-smith-waterman-1981",
        "type": "paper",
        "title": "Identification of Common Molecular Subsequences",
        "year": 1981,
        "authors": [
          "Temple F. Smith",
          "Michael S. Waterman"
        ],
        "url": "https://doi.org/10.1016/0022-2836(81)90087-5"
      },
      {
        "id": "source-nist-selection-sort",
        "type": "reference",
        "title": "Selection sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/selectionSort.html"
      },
      {
        "id": "source-nist-bubble-sort",
        "type": "reference",
        "title": "Bubble sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/bubblesort.html"
      },
      {
        "id": "source-opendsa-bubble-sort",
        "type": "documentation",
        "title": "Bubble Sort — OpenDSA",
        "url": "https://opendsa-server.cs.vt.edu/ODSA/Books/eu_book/html/BubbleSort.html"
      },
      {
        "id": "source-bfprt-selection-1973",
        "type": "paper",
        "title": "Time Bounds for Selection",
        "year": 1973,
        "authors": [
          "Manuel Blum",
          "Robert W. Floyd",
          "Vaughan Pratt",
          "Ronald L. Rivest",
          "Robert E. Tarjan"
        ],
        "url": "https://doi.org/10.1016/S0022-0000(73)80033-9"
      },
      {
        "id": "source-nist-select-kth",
        "type": "reference",
        "title": "Select kth element — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/selectkth.html"
      },
      {
        "id": "source-dial-shortest-path-1969",
        "type": "paper",
        "title": "Algorithm 360: Shortest-Path Forest with Topological Ordering [H]",
        "year": 1969,
        "authors": [
          "Robert B. Dial"
        ],
        "url": "https://doi.org/10.1145/363269.363610"
      },
      {
        "id": "source-cp-zero-one-bfs",
        "type": "documentation",
        "title": "0-1 BFS — Algorithms for Competitive Programming",
        "url": "https://cp-algorithms.com/graph/01_bfs.html"
      },
      {
        "id": "source-gabow-path-scc-2000",
        "type": "paper",
        "title": "Path-based Depth-first Search for Strong and Biconnected Components",
        "year": 2000,
        "authors": [
          "Harold N. Gabow"
        ],
        "url": "https://doi.org/10.1016/S0020-0190(00)00051-X"
      },
      {
        "id": "source-stoer-wagner-1997",
        "type": "paper",
        "title": "A Simple Min-Cut Algorithm",
        "year": 1997,
        "authors": [
          "Mechthild Stoer",
          "Frank Wagner"
        ],
        "url": "https://doi.org/10.1145/263867.263872"
      },
      {
        "id": "source-dalhousie-successive-shortest-path",
        "type": "documentation",
        "title": "Successive Shortest Paths: The Algorithm — Algorithms II",
        "authors": [
          "Norbert Zeh"
        ],
        "url": "https://web.cs.dal.ca/~nzeh/Teaching/4113/book/mincostflow/successive_shortest_paths/algorithm.html"
      },
      {
        "id": "source-mit-ocw-successive-shortest-path",
        "type": "documentation",
        "title": "Successive Shortest Path — Network Optimization",
        "year": 2010,
        "authors": [
          "James B. Orlin"
        ],
        "url": "https://ocw.mit.edu/courses/15-082j-network-optimization-fall-2010/resources/mit15_082jf10_av15/"
      },
      {
        "id": "source-nist-brute-force-string-search",
        "type": "reference",
        "title": "Brute force string search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/bruteForceStringSearch.html"
      },
      {
        "id": "source-baeza-yates-gonnet-1992",
        "type": "paper",
        "title": "A New Approach to Text Searching",
        "year": 1992,
        "authors": [
          "Ricardo A. Baeza-Yates",
          "Gaston H. Gonnet"
        ],
        "url": "https://doi.org/10.1145/135239.135243"
      },
      {
        "id": "source-ukkonen-suffix-tree-1995",
        "type": "paper",
        "title": "On-line Construction of Suffix Trees",
        "year": 1995,
        "authors": [
          "Esko Ukkonen"
        ],
        "url": "https://doi.org/10.1007/BF01206331"
      },
      {
        "id": "source-stein-binary-gcd-1967",
        "type": "paper",
        "title": "Computational Problems Associated with Racah Algebra",
        "year": 1967,
        "authors": [
          "Josef Stein"
        ],
        "url": "https://doi.org/10.1016/0021-9991(67)90047-2"
      },
      {
        "id": "source-nist-binary-gcd",
        "type": "reference",
        "title": "Binary GCD — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/binaryGCD.html"
      },
      {
        "id": "source-modern-computer-algebra-third",
        "type": "book",
        "title": "Modern Computer Algebra, Third Edition",
        "year": 2013,
        "authors": [
          "Joachim von zur Gathen",
          "Jürgen Gerhard"
        ],
        "url": "https://www.cambridge.org/core/books/modern-computer-algebra/DB3563D4013401734851CF683D2F03F0"
      },
      {
        "id": "source-tonelli-quadratic-congruences-1891",
        "type": "paper",
        "title": "Bemerkung über die Auflösung quadratischer Congruenzen",
        "year": 1891,
        "authors": [
          "Alberto Tonelli"
        ],
        "url": "https://eudml.org/doc/180329"
      },
      {
        "id": "source-handbook-applied-cryptography",
        "type": "book",
        "title": "Handbook of Applied Cryptography",
        "year": 1996,
        "authors": [
          "Alfred J. Menezes",
          "Paul C. van Oorschot",
          "Scott A. Vanstone"
        ],
        "url": "https://cacr.uwaterloo.ca/hac/"
      },
      {
        "id": "source-householder-unitary-triangularization-1958",
        "type": "paper",
        "title": "Unitary Triangularization of a Nonsymmetric Matrix",
        "year": 1958,
        "authors": [
          "Alston S. Householder"
        ],
        "url": "https://doi.org/10.1145/320941.320947"
      },
      {
        "id": "source-hestenes-stiefel-cg-1952",
        "type": "paper",
        "title": "Methods of Conjugate Gradients for Solving Linear Systems",
        "year": 1952,
        "authors": [
          "Magnus R. Hestenes",
          "Eduard Stiefel"
        ],
        "url": "https://doi.org/10.6028/jres.049.044"
      },
      {
        "id": "source-hmac-bck-1996",
        "type": "paper",
        "title": "Keying Hash Functions for Message Authentication",
        "year": 1996,
        "authors": ["Mihir Bellare", "Ran Canetti", "Hugo Krawczyk"],
        "url": "https://doi.org/10.1007/3-540-68697-5_1"
      },
      {
        "id": "source-rfc-2104",
        "type": "standard",
        "title": "RFC 2104: HMAC: Keyed-Hashing for Message Authentication",
        "year": 1997,
        "authors": ["Hugo Krawczyk", "Mihir Bellare", "Ran Canetti"],
        "url": "https://www.rfc-editor.org/info/rfc2104"
      },
      {
        "id": "source-rfc-4231",
        "type": "standard",
        "title": "RFC 4231: Identifiers and Test Vectors for HMAC-SHA-224, HMAC-SHA-256, HMAC-SHA-384, and HMAC-SHA-512",
        "year": 2005,
        "authors": ["M. Nystrom"],
        "url": "https://www.rfc-editor.org/info/rfc4231"
      },
      {
        "id": "source-hkdf-krawczyk-2010",
        "type": "paper",
        "title": "Cryptographic Extraction and Key Derivation: The HKDF Scheme",
        "year": 2010,
        "authors": ["Hugo Krawczyk"],
        "url": "https://doi.org/10.1007/978-3-642-14623-7_34"
      },
      {
        "id": "source-rfc-5869",
        "type": "standard",
        "title": "RFC 5869: HMAC-based Extract-and-Expand Key Derivation Function (HKDF)",
        "year": 2010,
        "authors": ["Hugo Krawczyk", "Pasi Eronen"],
        "url": "https://www.rfc-editor.org/info/rfc5869"
      },
      {
        "id": "source-curve25519-2006",
        "type": "paper",
        "title": "Curve25519: New Diffie-Hellman Speed Records",
        "year": 2006,
        "authors": ["Daniel J. Bernstein"],
        "url": "https://doi.org/10.1007/11745853_14"
      },
      {
        "id": "source-rfc-7748",
        "type": "standard",
        "title": "RFC 7748: Elliptic Curves for Security",
        "year": 2016,
        "authors": ["Adam Langley", "Mike Hamburg", "Sean Turner"],
        "url": "https://www.rfc-editor.org/info/rfc7748"
      },
      {
        "id": "source-lz4-block-format",
        "type": "documentation",
        "title": "LZ4 Block Format Description",
        "authors": ["Yann Collet", "LZ4 contributors"],
        "url": "https://github.com/lz4/lz4/blob/dev/doc/lz4_Block_format.md"
      },
      {
        "id": "source-lz4-frame-format",
        "type": "documentation",
        "title": "LZ4 Frame Format Description",
        "authors": ["Yann Collet", "LZ4 contributors"],
        "url": "https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md"
      },
      {
        "id": "source-rfc-7932",
        "type": "standard",
        "title": "RFC 7932: Brotli Compressed Data Format",
        "year": 2016,
        "authors": ["Jyrki Alakuijala", "Zoltan Szabadka"],
        "url": "https://www.rfc-editor.org/info/rfc7932"
      },
      {
        "id": "source-google-brotli-2019",
        "type": "paper",
        "title": "Brotli: A General-Purpose Data Compressor",
        "year": 2019,
        "authors": ["Jyrki Alakuijala", "Andrea Farruggia", "Paolo Ferragina", "Eugene Kliuchnikov", "Robert Obryk", "Zoltan Szabadka", "Lode Vandevenne"],
        "url": "https://research.google/pubs/brotli-a-general-purpose-data-compressor/"
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);

