(function registerAlgoriaSources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    "id": "sources",
    "sources": [
      {
        "id": "source-hoare-quicksort-1962",
        "type": "paper",
        "title": "Quicksort",
        "year": 1962,
        "authors": [
          "C. A. R. Hoare"
        ],
        "url": "https://doi.org/10.1093/comjnl/5.1.10"
      },
      {
        "id": "source-nist-quicksort",
        "type": "reference",
        "title": "Quick sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/quicksort.html"
      },
      {
        "id": "source-princeton-quicksort",
        "type": "documentation",
        "title": "Quicksort — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/23quicksort/"
      },
      {
        "id": "source-nist-mergesort",
        "type": "reference",
        "title": "Merge sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/mergesort.html"
      },
      {
        "id": "source-princeton-mergesort",
        "type": "documentation",
        "title": "Mergesort — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/22mergesort/"
      },
      {
        "id": "source-nist-binary-search",
        "type": "reference",
        "title": "Binary search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/binarySearch.html"
      },
      {
        "id": "source-princeton-binary-search",
        "type": "documentation",
        "title": "BinarySearch — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/BinarySearch.html"
      },
      {
        "id": "source-nist-bfs",
        "type": "reference",
        "title": "Breadth-first search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/breadthfirst.html"
      },
      {
        "id": "source-nist-dfs",
        "type": "reference",
        "title": "Depth-first search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/depthfirst.html"
      },
      {
        "id": "source-princeton-graph-search",
        "type": "documentation",
        "title": "Undirected Graphs — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/41graph/"
      },
      {
        "id": "source-dijkstra-1959",
        "type": "paper",
        "title": "A note on two problems in connexion with graphs",
        "year": 1959,
        "authors": [
          "E. W. Dijkstra"
        ],
        "url": "https://doi.org/10.1007/BF01386390"
      },
      {
        "id": "source-nist-dijkstra",
        "type": "reference",
        "title": "Dijkstra's algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/dijkstraalgo.html"
      },
      {
        "id": "source-princeton-shortest-paths",
        "type": "documentation",
        "title": "Shortest Paths — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/44sp/"
      },
      {
        "id": "source-astar-1968",
        "type": "paper",
        "title": "A Formal Basis for the Heuristic Determination of Minimum Cost Paths",
        "year": 1968,
        "authors": [
          "Peter E. Hart",
          "Nils J. Nilsson",
          "Bertram Raphael"
        ],
        "url": "https://doi.org/10.1109/TSSC.1968.300136"
      },
      {
        "id": "source-astar-correction-1972",
        "type": "paper",
        "title": "Correction to ‘A Formal Basis for the Heuristic Determination of Minimum Cost Paths’",
        "year": 1972,
        "authors": [
          "Peter E. Hart",
          "Nils J. Nilsson",
          "Bertram Raphael"
        ],
        "url": "https://cse.sc.edu/~MGV/csce580f12/astarHNR1972.pdf"
      },
      {
        "id": "source-kmp-1977",
        "type": "paper",
        "title": "Fast Pattern Matching in Strings",
        "year": 1977,
        "authors": [
          "Donald E. Knuth",
          "James H. Morris Jr.",
          "Vaughan R. Pratt"
        ],
        "url": "https://doi.org/10.1137/0206024"
      },
      {
        "id": "source-nist-kmp",
        "type": "reference",
        "title": "Knuth–Morris–Pratt algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/knuthMorrisPratt.html"
      },
      {
        "id": "source-huffman-1952",
        "type": "paper",
        "title": "A Method for the Construction of Minimum-Redundancy Codes",
        "year": 1952,
        "authors": [
          "David A. Huffman"
        ],
        "url": "https://doi.org/10.1109/JRPROC.1952.273898"
      },
      {
        "id": "source-nist-huffman",
        "type": "reference",
        "title": "Huffman coding — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/huffmanCoding.html"
      },
      {
        "id": "source-princeton-compression",
        "type": "documentation",
        "title": "Data Compression — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/55compression/"
      },
      {
        "id": "source-rsa-1978",
        "type": "paper",
        "title": "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems",
        "year": 1978,
        "authors": [
          "Ronald L. Rivest",
          "Adi Shamir",
          "Leonard Adleman"
        ],
        "url": "https://doi.org/10.1145/359340.359342"
      },
      {
        "id": "source-bidirectional-dijkstra-2024",
        "type": "paper",
        "title": "Bidirectional Dijkstra's Algorithm is Instance-Optimal",
        "year": 2024,
        "authors": [
          "Bernhard Haeupler",
          "Richard Hladík",
          "Václav Rozhoň",
          "Robert E. Tarjan",
          "Jakub Tětek"
        ],
        "url": "https://arxiv.org/abs/2410.14638"
      },
      {
        "id": "source-yaroslavskiy-dual-pivot-2009",
        "type": "paper",
        "title": "Dual-Pivot Quicksort Algorithm",
        "year": 2009,
        "authors": [
          "Vladimir Yaroslavskiy"
        ],
        "url": "https://www.codeblab.com/wp-content/uploads/2009/09/DualPivotQuicksort.pdf"
      },
      {
        "id": "source-princeton-quick3way",
        "type": "documentation",
        "title": "Quick3way — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/Quick3way.html"
      },
      {
        "id": "source-musser-introsort-1997",
        "type": "paper",
        "title": "Introspective Sorting and Selection Algorithms",
        "year": 1997,
        "authors": [
          "David R. Musser"
        ],
        "url": "https://doi.org/10.1002/(SICI)1097-024X(199708)27:8%3C983::AID-SPE117%3E3.0.CO;2-%23"
      },
      {
        "id": "source-nist-introsort",
        "type": "reference",
        "title": "Introspective sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/introspectiveSort.html"
      },
      {
        "id": "source-nist-heapsort",
        "type": "reference",
        "title": "Heapsort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/heapSort.html"
      },
      {
        "id": "source-princeton-priority-queues",
        "type": "documentation",
        "title": "Priority Queues and Heapsort — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/24pq/"
      },
      {
        "id": "source-nist-bellman-ford",
        "type": "reference",
        "title": "Bellman–Ford algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/bellmanford.html"
      },
      {
        "id": "source-nist-floyd-warshall",
        "type": "reference",
        "title": "Floyd–Warshall algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/floydWarshall.html"
      },
      {
        "id": "source-princeton-graph-cheatsheet",
        "type": "documentation",
        "title": "Algorithms and Data Structures Cheatsheet",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/cheatsheet/"
      },
      {
        "id": "source-kruskal-1956",
        "type": "paper",
        "title": "On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem",
        "year": 1956,
        "authors": [
          "Joseph B. Kruskal"
        ],
        "url": "https://doi.org/10.1090/S0002-9939-1956-0078686-7"
      },
      {
        "id": "source-nist-kruskal",
        "type": "reference",
        "title": "Kruskal's algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/kruskalsalgo.html"
      },
      {
        "id": "source-nist-prim",
        "type": "reference",
        "title": "Prim's algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/PrimsAlgorithm.html"
      },
      {
        "id": "source-princeton-mst",
        "type": "documentation",
        "title": "Minimum Spanning Trees — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/43mst/"
      },
      {
        "id": "source-nist-insertion-sort",
        "type": "reference",
        "title": "Insertion sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/insertionSort.html"
      },
      {
        "id": "source-princeton-elementary-sorts",
        "type": "documentation",
        "title": "Elementary Sorts — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/21elementary/"
      },
      {
        "id": "source-nist-counting-sort",
        "type": "reference",
        "title": "Counting sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/countingsort.html"
      },
      {
        "id": "source-nist-sort",
        "type": "reference",
        "title": "Sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/sort.html"
      },
      {
        "id": "source-nist-radix-sort",
        "type": "reference",
        "title": "Radix sort — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/radixsort.html"
      },
      {
        "id": "source-princeton-radix-sorts",
        "type": "documentation",
        "title": "String Sorts — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/51radix/"
      },
      {
        "id": "source-cpython-listsort",
        "type": "documentation",
        "title": "CPython listsort design notes",
        "authors": [
          "Tim Peters"
        ],
        "url": "https://github.com/python/cpython/blob/main/Objects/listsort.txt"
      },
      {
        "id": "source-python-sorting-howto",
        "type": "documentation",
        "title": "Sorting Techniques — Python documentation",
        "url": "https://docs.python.org/3/howto/sorting.html"
      },
      {
        "id": "source-nist-linear-search",
        "type": "reference",
        "title": "Linear search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/linearSearch.html"
      },
      {
        "id": "source-nist-search",
        "type": "reference",
        "title": "Search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/search.html"
      },
      {
        "id": "source-hoare-find-1961",
        "type": "paper",
        "title": "Algorithm 65: Find",
        "year": 1961,
        "authors": [
          "C. A. R. Hoare"
        ],
        "url": "https://doi.org/10.1145/366622.366647"
      },
      {
        "id": "source-rabin-karp-1987",
        "type": "paper",
        "title": "Efficient Randomized Pattern-Matching Algorithms",
        "year": 1987,
        "authors": [
          "Richard M. Karp",
          "Michael O. Rabin"
        ],
        "url": "https://doi.org/10.1147/rd.312.0249"
      },
      {
        "id": "source-nist-string-matching",
        "type": "reference",
        "title": "String matching — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/stringMatching.html"
      },
      {
        "id": "source-boyer-moore-1977",
        "type": "paper",
        "title": "A Fast String Searching Algorithm",
        "year": 1977,
        "authors": [
          "Robert S. Boyer",
          "J. Strother Moore"
        ],
        "url": "https://doi.org/10.1145/359842.359859"
      },
      {
        "id": "source-boyer-moore-authors",
        "type": "documentation",
        "title": "The Boyer–Moore Fast String Searching Algorithm",
        "authors": [
          "J. Strother Moore"
        ],
        "url": "https://www.cs.utexas.edu/~moore/best-ideas/string-searching/"
      },
      {
        "id": "source-aho-corasick-1975",
        "type": "paper",
        "title": "Efficient String Matching: An Aid to Bibliographic Search",
        "year": 1975,
        "authors": [
          "Alfred V. Aho",
          "Margaret J. Corasick"
        ],
        "url": "https://doi.org/10.1145/360825.360855"
      },
      {
        "id": "source-nist-aho-corasick",
        "type": "reference",
        "title": "Aho–Corasick — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/ahoCorasick.html"
      },
      {
        "id": "source-kahn-topological-1962",
        "type": "paper",
        "title": "Topological Sorting of Large Networks",
        "year": 1962,
        "authors": [
          "Arthur B. Kahn"
        ],
        "url": "https://doi.org/10.1145/368996.369025"
      },
      {
        "id": "source-princeton-directed-graphs",
        "type": "documentation",
        "title": "Directed Graphs — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/42digraph/"
      },
      {
        "id": "source-edmonds-karp-1972",
        "type": "paper",
        "title": "Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems",
        "year": 1972,
        "authors": [
          "Jack Edmonds",
          "Richard M. Karp"
        ],
        "url": "https://doi.org/10.1145/321694.321699"
      },
      {
        "id": "source-princeton-max-flow",
        "type": "documentation",
        "title": "Maximum Flow — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/64maxflow/"
      },
      {
        "id": "source-tarjan-1972",
        "type": "paper",
        "title": "Depth-First Search and Linear Graph Algorithms",
        "year": 1972,
        "authors": [
          "Robert Tarjan"
        ],
        "url": "https://doi.org/10.1137/0201010"
      },
      {
        "id": "source-nist-euclidean",
        "type": "reference",
        "title": "Euclid's algorithm — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/euclidalgo.html"
      },
      {
        "id": "source-nist-gcd",
        "type": "reference",
        "title": "Greatest common divisor — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/greatestCommonDivisor.html"
      },
      {
        "id": "source-nist-sieve",
        "type": "reference",
        "title": "Sieve of Eratosthenes — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/sieve.html"
      },
      {
        "id": "source-mit-sieve",
        "type": "documentation",
        "title": "The Mathematics in Toys and Games — Sieve of Eratosthenes",
        "authors": [
          "Massachusetts Institute of Technology"
        ],
        "url": "https://ocw.mit.edu/courses/es-268-the-mathematics-in-toys-and-games-spring-2010/a511f77b041aef8c28b8ee16b1416977_MITES_268S10_ses10_slides2.pdf"
      },
      {
        "id": "source-cooley-tukey-1965",
        "type": "paper",
        "title": "An Algorithm for the Machine Calculation of Complex Fourier Series",
        "year": 1965,
        "authors": [
          "James W. Cooley",
          "John W. Tukey"
        ],
        "url": "https://doi.org/10.1090/S0025-5718-1965-0178586-1"
      },
      {
        "id": "source-nist-fft",
        "type": "reference",
        "title": "Fast Fourier transform — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/fastFourierTransform.html"
      },
      {
        "id": "source-karatsuba-ofman-1962",
        "type": "paper",
        "title": "Multiplication of Many-Digital Numbers by Automatic Computers",
        "year": 1962,
        "authors": [
          "Anatoly Karatsuba",
          "Yuri Ofman"
        ],
        "url": "https://www.mathnet.ru/eng/dan26729"
      },
      {
        "id": "source-princeton-karatsuba",
        "type": "documentation",
        "title": "Complex Multiplication — Karatsuba Multiplication",
        "authors": [
          "Kevin Wayne"
        ],
        "url": "https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pearson/05Multiplication-2x2.pdf"
      },
      {
        "id": "source-nist-fips-197",
        "type": "standard",
        "title": "FIPS 197: Advanced Encryption Standard (AES)",
        "year": 2001,
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/pubs/fips/197/final"
      },
      {
        "id": "source-nist-block-ciphers",
        "type": "documentation",
        "title": "Block Cipher Techniques",
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/projects/block-cipher-techniques"
      },
      {
        "id": "source-diffie-hellman-1976",
        "type": "paper",
        "title": "New Directions in Cryptography",
        "year": 1976,
        "authors": [
          "Whitfield Diffie",
          "Martin E. Hellman"
        ],
        "url": "https://doi.org/10.1109/TIT.1976.1055638"
      },
      {
        "id": "source-rfc-2631",
        "type": "standard",
        "title": "Diffie-Hellman Key Agreement Method",
        "year": 1999,
        "authors": [
          "E. Rescorla"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc2631"
      },
      {
        "id": "source-nist-fips-180-4",
        "type": "standard",
        "title": "FIPS 180-4: Secure Hash Standard (SHS)",
        "year": 2015,
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
      },
      {
        "id": "source-rfc-6234",
        "type": "standard",
        "title": "US Secure Hash Algorithms (SHA and SHA-based HMAC and HKDF)",
        "year": 2011,
        "authors": [
          "D. Eastlake 3rd",
          "T. Hansen"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc6234"
      },
      {
        "id": "source-welch-lzw-1984",
        "type": "paper",
        "title": "A Technique for High-Performance Data Compression",
        "year": 1984,
        "authors": [
          "Terry A. Welch"
        ],
        "url": "https://doi.org/10.1109/MC.1984.1659158"
      },
      {
        "id": "source-nist-lzw",
        "type": "reference",
        "title": "Lempel-Ziv-Welch — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/lempelZivWelch.html"
      },
      {
        "id": "source-princeton-ternary-search",
        "type": "documentation",
        "title": "Ternary Search — COS 126 Examination",
        "authors": [
          "Princeton University Computer Science"
        ],
        "url": "https://www.cs.princeton.edu/courses/archive/fall99/cs126/rywang/mid1.pdf"
      },
      {
        "id": "source-gusfield-strings",
        "type": "book",
        "title": "Algorithms on Strings, Trees, and Sequences",
        "year": 1997,
        "authors": [
          "Dan Gusfield"
        ],
        "url": "https://doi.org/10.1017/CBO9780511574931"
      },
      {
        "id": "source-cmu-z-algorithm",
        "type": "documentation",
        "title": "String Matching: The Z Algorithm",
        "authors": [
          "Carnegie Mellon University"
        ],
        "url": "https://www.cs.cmu.edu/~ckingsf/bioinfo-lectures/zalg.pdf"
      },
      {
        "id": "source-graham-1972",
        "type": "paper",
        "title": "An Efficient Algorithm for Determining the Convex Hull of a Finite Planar Set",
        "year": 1972,
        "authors": [
          "Ronald L. Graham"
        ],
        "url": "https://doi.org/10.1016/0020-0190(72)90045-2"
      },
      {
        "id": "source-princeton-graham-scan",
        "type": "documentation",
        "title": "GrahamScan — Algorithms, 4th Edition",
        "authors": [
          "Robert Sedgewick",
          "Kevin Wayne"
        ],
        "url": "https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/GrahamScan.html"
      },
      {
        "id": "source-lloyd-kmeans-1982",
        "type": "paper",
        "title": "Least Squares Quantization in PCM",
        "year": 1982,
        "authors": [
          "Stuart P. Lloyd"
        ],
        "url": "https://doi.org/10.1109/TIT.1982.1056489"
      },
      {
        "id": "source-stanford-kmeans",
        "type": "documentation",
        "title": "Lloyd's Algorithm for K-Means Clustering",
        "authors": [
          "Stanford University"
        ],
        "url": "https://web.stanford.edu/class/archive/stats/stats202/stats202.1162/content/lec4-condensed.pdf"
      },
      {
        "id": "source-dantzig-simplex-origins",
        "type": "paper",
        "title": "Origins of the Simplex Method",
        "year": 1987,
        "authors": [
          "George B. Dantzig"
        ],
        "url": "https://archive.computerhistory.org/resources/access/text/2024/06/102739347-05-0002-acc.pdf"
      },
      {
        "id": "source-princeton-simplex",
        "type": "documentation",
        "title": "The Simplex Method — ORF 522",
        "year": 2013,
        "authors": [
          "Robert J. Vanderbei"
        ],
        "url": "https://vanderbei.princeton.edu/522/Fall13/lectures/lec2.pdf"
      },
      {
        "id": "source-nist-linear-programming",
        "type": "reference",
        "title": "Linear Program — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/linearProgramming.html"
      },
      {
        "id": "source-ford-fulkerson-1956",
        "type": "paper",
        "title": "Maximal Flow Through a Network",
        "year": 1956,
        "authors": [
          "L. R. Ford Jr.",
          "D. R. Fulkerson"
        ],
        "url": "https://doi.org/10.4153/CJM-1956-045-5"
      },
      {
        "id": "source-erickson-max-flow",
        "type": "book",
        "title": "Algorithms — Maximum Flows and Minimum Cuts",
        "authors": [
          "Jeff Erickson"
        ],
        "url": "https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE-2up.pdf"
      },
      {
        "id": "source-dinitz-1970",
        "type": "paper",
        "title": "Algorithm for Solution of a Problem of Maximum Flow in Networks with Power Estimation",
        "year": 1970,
        "authors": [
          "E. A. Dinitz"
        ],
        "url": "https://www.mathnet.ru/eng/dan35701"
      },
      {
        "id": "source-sharir-scc-1981",
        "type": "paper",
        "title": "A Strong-Connectivity Algorithm and Its Applications in Data Flow Analysis",
        "year": 1981,
        "authors": [
          "Micha Sharir"
        ],
        "url": "https://doi.org/10.1016/0898-1221(81)90008-0"
      },
      {
        "id": "source-johnson-apsp-1977",
        "type": "paper",
        "title": "Efficient Algorithms for Shortest Paths in Sparse Networks",
        "year": 1977,
        "authors": [
          "Donald B. Johnson"
        ],
        "url": "https://doi.org/10.1145/321992.321993"
      },
      {
        "id": "source-erickson-algorithms",
        "type": "book",
        "title": "Algorithms",
        "authors": [
          "Jeff Erickson"
        ],
        "url": "https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf"
      },
      {
        "id": "source-levenshtein-1966",
        "type": "paper",
        "title": "Binary Codes Capable of Correcting Deletions, Insertions, and Reversals",
        "year": 1966,
        "authors": [
          "Vladimir I. Levenshtein"
        ],
        "url": "https://ui.adsabs.harvard.edu/abs/1966SPhD...10..707L/abstract"
      },
      {
        "id": "source-nist-levenshtein",
        "type": "reference",
        "title": "Levenshtein distance — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/Levenshtein.html"
      },
      {
        "id": "source-nist-lcs",
        "type": "reference",
        "title": "Longest common subsequence — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/LCS.html"
      },
      {
        "id": "source-cmu-lis",
        "type": "documentation",
        "title": "Lecture 10: Dynamic Programming II",
        "authors": [
          "Carnegie Mellon University"
        ],
        "url": "https://www.cs.cmu.edu/~15451-f24/notes.pdf"
      },
      {
        "id": "source-nist-knapsack",
        "type": "reference",
        "title": "Knapsack problem — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/knapsackProblem.html"
      },
      {
        "id": "source-nist-matrix-chain",
        "type": "reference",
        "title": "Matrix chain multiplication — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/matrxchnmltp.html"
      },
      {
        "id": "source-needleman-wunsch-1970",
        "type": "paper",
        "title": "A General Method Applicable to the Search for Similarities in the Amino Acid Sequence of Two Proteins",
        "year": 1970,
        "authors": [
          "Saul B. Needleman",
          "Christian D. Wunsch"
        ],
        "url": "https://doi.org/10.1016/0022-2836(70)90057-4"
      },
      {
        "id": "source-ncbi-global-alignment",
        "type": "book",
        "title": "Sequence Comparison, Gene Identification, and Protein Classification",
        "authors": [
          "National Center for Biotechnology Information"
        ],
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK20261/"
      },
      {
        "id": "source-jarvis-1973",
        "type": "paper",
        "title": "On the Identification of the Convex Hull of a Finite Set of Points in the Plane",
        "year": 1973,
        "authors": [
          "R. A. Jarvis"
        ],
        "url": "https://doi.org/10.1016/0020-0190(73)90020-3"
      },
      {
        "id": "source-andrew-1979",
        "type": "paper",
        "title": "Another Efficient Algorithm for Convex Hulls in Two Dimensions",
        "year": 1979,
        "authors": [
          "A. M. Andrew"
        ],
        "url": "https://doi.org/10.1016/0020-0190(79)90072-3"
      },
      {
        "id": "source-quickhull-1996",
        "type": "paper",
        "title": "The Quickhull Algorithm for Convex Hulls",
        "year": 1996,
        "authors": [
          "C. Bradford Barber",
          "David P. Dobkin",
          "Hannu Huhdanpaa"
        ],
        "url": "https://doi.org/10.1145/235815.235821"
      },
      {
        "id": "source-shamos-hoey-closest-pair-1975",
        "type": "paper",
        "title": "Closest-Point Problems",
        "year": 1975,
        "authors": [
          "Michael Ian Shamos",
          "Dan Hoey"
        ],
        "url": "https://doi.org/10.1109/SFCS.1975.8"
      },
      {
        "id": "source-bentley-ottmann-1979",
        "type": "paper",
        "title": "Algorithms for Reporting and Counting Geometric Intersections",
        "year": 1979,
        "authors": [
          "Jon L. Bentley",
          "Thomas A. Ottmann"
        ],
        "url": "https://doi.org/10.1109/TC.1979.1675432"
      },
      {
        "id": "source-dbscan-1996",
        "type": "paper",
        "title": "A Density-Based Algorithm for Discovering Clusters in Large Spatial Databases with Noise",
        "year": 1996,
        "authors": [
          "Martin Ester",
          "Hans-Peter Kriegel",
          "Jörg Sander",
          "Xiaowei Xu"
        ],
        "url": "https://www.aaai.org/Papers/KDD/1996/KDD96-037.pdf"
      },
      {
        "id": "source-sklearn-clustering",
        "type": "documentation",
        "title": "Clustering — scikit-learn User Guide",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/clustering.html"
      },
      {
        "id": "source-cover-hart-knn-1967",
        "type": "paper",
        "title": "Nearest Neighbor Pattern Classification",
        "year": 1967,
        "authors": [
          "Thomas Cover",
          "Peter Hart"
        ],
        "url": "https://doi.org/10.1109/TIT.1967.1053964"
      },
      {
        "id": "source-sklearn-neighbors",
        "type": "documentation",
        "title": "Nearest Neighbors — scikit-learn User Guide",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/neighbors.html"
      },
      {
        "id": "source-rosenblatt-perceptron-1958",
        "type": "paper",
        "title": "The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain",
        "year": 1958,
        "authors": [
          "Frank Rosenblatt"
        ],
        "url": "https://doi.org/10.1037/h0042519"
      },
      {
        "id": "source-quinlan-id3-1986",
        "type": "paper",
        "title": "Induction of Decision Trees",
        "year": 1986,
        "authors": [
          "J. Ross Quinlan"
        ],
        "url": "https://doi.org/10.1007/BF00116251"
      },
      {
        "id": "source-sklearn-trees",
        "type": "documentation",
        "title": "Decision Trees — scikit-learn User Guide",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/tree.html"
      },
      {
        "id": "source-pagerank-1998",
        "type": "paper",
        "title": "The PageRank Citation Ranking: Bringing Order to the Web",
        "year": 1998,
        "authors": [
          "Lawrence Page",
          "Sergey Brin",
          "Rajeev Motwani",
          "Terry Winograd"
        ],
        "url": "https://ilpubs.stanford.edu:8090/422/"
      },
      {
        "id": "source-stanford-ir-pagerank",
        "type": "book",
        "title": "Introduction to Information Retrieval — PageRank",
        "authors": [
          "Christopher D. Manning",
          "Prabhakar Raghavan",
          "Hinrich Schütze"
        ],
        "url": "https://nlp.stanford.edu/IR-book/html/htmledition/pagerank-1.html"
      },
      {
        "id": "source-chacha-2008",
        "type": "paper",
        "title": "ChaCha, a Variant of Salsa20",
        "year": 2008,
        "authors": [
          "Daniel J. Bernstein"
        ],
        "url": "https://cr.yp.to/chacha/chacha-20080128.pdf"
      },
      {
        "id": "source-rfc-8439",
        "type": "standard",
        "title": "ChaCha20 and Poly1305 for IETF Protocols",
        "year": 2018,
        "authors": [
          "Y. Nir",
          "A. Langley"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc8439"
      },
      {
        "id": "source-blake2-paper",
        "type": "paper",
        "title": "BLAKE2: Simpler, Smaller, Fast as MD5",
        "year": 2013,
        "authors": [
          "Jean-Philippe Aumasson",
          "Samuel Neves",
          "Zooko Wilcox-O'Hearn",
          "Christian Winnerlein"
        ],
        "url": "https://www.blake2.net/blake2.pdf"
      },
      {
        "id": "source-rfc-7693",
        "type": "standard",
        "title": "The BLAKE2 Cryptographic Hash and Message Authentication Code",
        "year": 2015,
        "authors": [
          "M. J. Saarinen",
          "J.-P. Aumasson"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc7693"
      },
      {
        "id": "source-argon2-2016",
        "type": "paper",
        "title": "Argon2: New Generation of Memory-Hard Functions for Password Hashing and Other Applications",
        "year": 2016,
        "authors": [
          "Alex Biryukov",
          "Daniel Dinu",
          "Dmitry Khovratovich"
        ],
        "url": "https://doi.org/10.1109/EuroSP.2016.31"
      },
      {
        "id": "source-rfc-9106",
        "type": "standard",
        "title": "Argon2 Memory-Hard Function for Password Hashing and Proof-of-Work Applications",
        "year": 2021,
        "authors": [
          "A. Biryukov",
          "D. Dinu",
          "D. Khovratovich",
          "S. Josefsson"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc9106"
      },
      {
        "id": "source-nist-sp800-56a",
        "type": "standard",
        "title": "Recommendation for Pair-Wise Key-Establishment Schemes Using Discrete Logarithm Cryptography",
        "year": 2018,
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/pubs/sp/800/56/a/r3/final"
      },
      {
        "id": "source-rfc-6090",
        "type": "standard",
        "title": "Fundamental Elliptic Curve Cryptography Algorithms",
        "year": 2011,
        "authors": [
          "D. McGrew",
          "K. Igoe",
          "M. Salter"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc6090"
      },
      {
        "id": "source-witten-arithmetic-coding-1987",
        "type": "paper",
        "title": "Arithmetic Coding for Data Compression",
        "year": 1987,
        "authors": [
          "Ian H. Witten",
          "Radford M. Neal",
          "John G. Cleary"
        ],
        "url": "https://doi.org/10.1145/214762.214771"
      },
      {
        "id": "source-nist-arithmetic-coding",
        "type": "reference",
        "title": "Arithmetic coding — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/arithmeticCoding.html"
      },
      {
        "id": "source-nist-run-length",
        "type": "reference",
        "title": "Run-length encoding — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/runLength.html"
      },
      {
        "id": "source-itu-t4-run-length",
        "type": "standard",
        "title": "T.4: Standardization of Group 3 Facsimile Terminals for Document Transmission",
        "authors": [
          "International Telecommunication Union"
        ],
        "url": "https://www.itu.int/rec/T-REC-T.4"
      },
      {
        "id": "source-rfc-1951",
        "type": "standard",
        "title": "DEFLATE Compressed Data Format Specification version 1.3",
        "year": 1996,
        "authors": [
          "P. Deutsch"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc1951"
      },
      {
        "id": "source-rfc-1950",
        "type": "standard",
        "title": "ZLIB Compressed Data Format Specification version 3.3",
        "year": 1996,
        "authors": [
          "P. Deutsch",
          "J.-L. Gailly"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc1950"
      },
      {
        "id": "source-burrows-wheeler-1994",
        "type": "paper",
        "title": "A Block-Sorting Lossless Data Compression Algorithm",
        "year": 1994,
        "authors": [
          "Michael Burrows",
          "David J. Wheeler"
        ],
        "url": "https://www.hpl.hp.com/techreports/Compaq-DEC/SRC-RR-124.pdf"
      },
      {
        "id": "source-nist-bwt",
        "type": "reference",
        "title": "Burrows-Wheeler transform — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/burrowsWheelerTransform.html"
      },
      {
        "id": "source-lz77-1977",
        "type": "paper",
        "title": "A Universal Algorithm for Sequential Data Compression",
        "year": 1977,
        "authors": [
          "Jacob Ziv",
          "Abraham Lempel"
        ],
        "url": "https://doi.org/10.1109/TIT.1977.1055714"
      },
      {
        "id": "source-nist-lz77",
        "type": "reference",
        "title": "LZ77 — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/lempelZiv.html"
      },
      {
        "id": "source-lz78-1978",
        "type": "paper",
        "title": "Compression of Individual Sequences via Variable-Rate Coding",
        "year": 1978,
        "authors": [
          "Jacob Ziv",
          "Abraham Lempel"
        ],
        "url": "https://doi.org/10.1109/TIT.1978.1055934"
      },
      {
        "id": "source-clrs-fourth",
        "type": "book",
        "title": "Introduction to Algorithms, Fourth Edition",
        "year": 2022,
        "authors": [
          "Thomas H. Cormen",
          "Charles E. Leiserson",
          "Ronald L. Rivest",
          "Clifford Stein"
        ],
        "url": "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"
      },
      {
        "id": "source-bentley-yao-unbounded-search-1976",
        "type": "paper",
        "title": "An Almost Optimal Algorithm for Unbounded Searching",
        "year": 1976,
        "authors": [
          "Jon L. Bentley",
          "Andrew Chi-Chih Yao"
        ],
        "url": "https://doi.org/10.1016/0020-0190(76)90071-5"
      },
      {
        "id": "source-nist-jump-search",
        "type": "reference",
        "title": "Jump search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/jumpSearch.html"
      },
      {
        "id": "source-nist-interpolation-search",
        "type": "reference",
        "title": "Interpolation search — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/interpolationSearch.html"
      },
      {
        "id": "source-rfc-8017",
        "type": "standard",
        "title": "PKCS #1: RSA Cryptography Specifications Version 2.2",
        "year": 2016,
        "authors": [
          "K. Moriarty",
          "B. Kaliski",
          "J. Jonsson",
          "A. Rusch"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc8017"
      },
      {
        "id": "source-miller-primality-1976",
        "type": "paper",
        "title": "Riemann's Hypothesis and Tests for Primality",
        "year": 1976,
        "authors": [
          "Gary L. Miller"
        ],
        "url": "https://doi.org/10.1016/S0022-0000(76)80043-8"
      },
      {
        "id": "source-rabin-primality-1980",
        "type": "paper",
        "title": "Probabilistic Algorithm for Testing Primality",
        "year": 1980,
        "authors": [
          "Michael O. Rabin"
        ],
        "url": "https://doi.org/10.1016/0022-314X(80)90084-0"
      },
      {
        "id": "source-netlib-lu",
        "type": "documentation",
        "title": "LAPACK Users' Guide — LU Factorization",
        "authors": [
          "Netlib"
        ],
        "url": "https://netlib.org/lapack/lug/node38.html"
      },
      {
        "id": "source-stanford-cs229-gradient-descent",
        "type": "documentation",
        "title": "CS229 Notes — Linear Regression and Gradient Descent",
        "authors": [
          "Stanford University"
        ],
        "url": "https://cs229.stanford.edu/notes2022fall/main_notes.pdf"
      },
      {
        "id": "source-sklearn-sgd",
        "type": "documentation",
        "title": "Stochastic Gradient Descent — scikit-learn User Guide",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/sgd.html"
      },
      {
        "id": "source-kuhn-hungarian-1955",
        "type": "paper",
        "title": "The Hungarian Method for the Assignment Problem",
        "year": 1955,
        "authors": [
          "Harold W. Kuhn"
        ],
        "url": "https://doi.org/10.1002/nav.3800020109"
      },
      {
        "id": "source-nist-assignment",
        "type": "reference",
        "title": "Assignment problem — NIST Dictionary of Algorithms and Data Structures",
        "url": "https://xlinux.nist.gov/dads/HTML/assignment.html"
      },
      {
        "id": "source-nelder-mead-1965",
        "type": "paper",
        "title": "A Simplex Method for Function Minimization",
        "year": 1965,
        "authors": [
          "John A. Nelder",
          "Roger Mead"
        ],
        "url": "https://doi.org/10.1093/comjnl/7.4.308"
      },
      {
        "id": "source-scipy-nelder-mead",
        "type": "documentation",
        "title": "minimize(method='Nelder-Mead') — SciPy Manual",
        "authors": [
          "SciPy developers"
        ],
        "url": "https://docs.scipy.org/doc/scipy/reference/optimize.minimize-neldermead.html"
      },
      {
        "id": "source-red-blob-a-star",
        "type": "documentation",
        "title": "Introduction to the A* Algorithm",
        "authors": [
          "Amit Patel"
        ],
        "url": "https://www.redblobgames.com/pathfinding/a-star/introduction.html"
      },
      {
        "id": "source-knuth-taocp-vol3",
        "type": "book",
        "title": "The Art of Computer Programming, Volume 3: Sorting and Searching",
        "authors": [
          "Donald E. Knuth"
        ],
        "url": "https://www-cs-faculty.stanford.edu/~knuth/taocp.html"
      },
      {
        "id": "source-netlib-templates",
        "type": "documentation",
        "title": "Templates for the Solution of Linear Systems",
        "authors": [
          "Netlib"
        ],
        "url": "https://www.netlib.org/templates/"
      },
      {
        "id": "source-netlib-lapack",
        "type": "documentation",
        "title": "LAPACK — Linear Algebra PACKage",
        "authors": [
          "Netlib"
        ],
        "url": "https://www.netlib.org/lapack/"
      },
      {
        "id": "source-rfc-8032",
        "type": "standard",
        "title": "RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)",
        "year": 2017,
        "authors": [
          "S. Josefsson",
          "I. Liusvaara"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc8032"
      },
      {
        "id": "source-rfc-8410",
        "type": "standard",
        "title": "RFC 8410: Algorithm Identifiers for Ed25519, Ed448, X25519, and X448",
        "year": 2018,
        "authors": [
          "S. Josefsson",
          "J. Schaad"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc8410"
      },
      {
        "id": "source-rfc-8018",
        "type": "standard",
        "title": "RFC 8018: PKCS #5 Password-Based Cryptography Specification Version 2.1",
        "year": 2017,
        "authors": [
          "K. Moriarty"
        ],
        "url": "https://www.rfc-editor.org/rfc/rfc8018"
      },
      {
        "id": "source-nist-sp800-132",
        "type": "standard",
        "title": "NIST SP 800-132: Recommendation for Password-Based Key Derivation",
        "year": 2010,
        "authors": [
          "National Institute of Standards and Technology"
        ],
        "url": "https://csrc.nist.gov/pubs/sp/800/132/final"
      },
      {
        "id": "source-de-berg-geometry",
        "type": "book",
        "title": "Computational Geometry: Algorithms and Applications, Third Edition",
        "year": 2008,
        "authors": [
          "Mark de Berg",
          "Otfried Cheong",
          "Marc van Kreveld",
          "Mark Overmars"
        ],
        "url": "https://doi.org/10.1007/978-3-540-77974-2"
      },
      {
        "id": "source-sklearn-ensemble",
        "type": "documentation",
        "title": "Ensembles: Gradient Boosting, Random Forests, Bagging, Voting, Stacking",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/ensemble.html"
      },
      {
        "id": "source-sklearn-linear-model",
        "type": "documentation",
        "title": "Linear Models — scikit-learn User Guide",
        "authors": [
          "scikit-learn developers"
        ],
        "url": "https://scikit-learn.org/stable/modules/linear_model.html"
      },
      {
        "id": "source-scipy-optimize",
        "type": "documentation",
        "title": "Optimization and Root Finding — SciPy User Guide",
        "authors": [
          "SciPy developers"
        ],
        "url": "https://docs.scipy.org/doc/scipy/tutorial/optimize.html"
      },
      {
        "id": "source-handbook-metaheuristics",
        "type": "book",
        "title": "Handbook of Metaheuristics, Third Edition",
        "year": 2019,
        "authors": [
          "Michel Gendreau",
          "Jean-Yves Potvin"
        ],
        "url": "https://doi.org/10.1007/978-3-319-91086-4"
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
