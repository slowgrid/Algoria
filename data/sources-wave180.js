(function registerAlgoriaWave180Sources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  registry.registerPart({
    id: "sources-wave180",
    sources: [
      { id: "source-comb-sort-1991", type: "paper", title: "A Fast, Easy Sort", year: 1991, authors: ["Stephen Lacey", "Richard Box"], url: "https://www.cs.princeton.edu/courses/archive/spr07/cos226/lectures/04Sorting.pdf" },
      { id: "source-floyd-rivest-1975", type: "paper", title: "Expected Time Bounds for Selection", year: 1975, authors: ["Robert W. Floyd", "Ronald L. Rivest"], url: "https://doi.org/10.1145/360680.360691" },
      { id: "source-warshall-1962", type: "paper", title: "A Theorem on Boolean Matrices", year: 1962, authors: ["Stephen Warshall"], url: "https://doi.org/10.1145/321105.321107" },
      { id: "source-edmonds-branchings-1967", type: "paper", title: "Optimum Branchings", year: 1967, authors: ["Jack Edmonds"], url: "https://nvlpubs.nist.gov/nistpubs/jres/71b/jresv71bn4p233_a1b.pdf" },
      { id: "source-tarjan-path-compression-1979", type: "paper", title: "Applications of Path Compression on Balanced Trees", year: 1979, authors: ["Robert Endre Tarjan"], url: "https://doi.org/10.1145/322154.322161" },
      { id: "source-kasai-lcp-2001", type: "paper", title: "Linear-Time Longest-Common-Prefix Computation in Suffix Arrays and Its Applications", year: 2001, authors: ["Toru Kasai", "Gunho Lee", "Hiroki Arimura", "Setsuo Arikawa", "Kunsoo Park"], url: "https://doi.org/10.1007/3-540-48194-X_17" },
      { id: "source-horspool-1980", type: "paper", title: "Practical Fast Searching in Strings", year: 1980, authors: ["R. Nigel Horspool"], url: "https://doi.org/10.1002/spe.4380100608" },
      { id: "source-hirschberg-1975", type: "paper", title: "A Linear Space Algorithm for Computing Maximal Common Subsequences", year: 1975, authors: ["Daniel S. Hirschberg"], url: "https://doi.org/10.1145/360825.360861" },
      { id: "source-booth-1980", type: "paper", title: "Lexicographically Least Circular Substrings", year: 1980, authors: ["Kellogg S. Booth"], url: "https://doi.org/10.1016/0020-0190(80)90149-0" },
      { id: "source-nist-bisection", type: "reference", title: "Bisection — NIST Dictionary of Algorithms and Data Structures", url: "https://xlinux.nist.gov/dads/HTML/bisection.html" },
      { id: "source-burden-faires-numerical-analysis", type: "book", title: "Numerical Analysis", authors: ["Richard L. Burden", "J. Douglas Faires"], url: "https://faculty.ksu.edu.sa/sites/default/files/numerical_analysis_9th.pdf" },
      { id: "source-horner-1819", type: "paper", title: "A New Method of Solving Numerical Equations of All Orders", year: 1819, authors: ["William George Horner"], url: "https://doi.org/10.1098/rspl.1815.0039" },
      { id: "source-golub-van-loan-matrix-computations", type: "book", title: "Matrix Computations, Fourth Edition", year: 2013, authors: ["Gene H. Golub", "Charles F. Van Loan"], url: "https://jhupbooks.press.jhu.edu/title/matrix-computations" },
      { id: "source-rfc-7914", type: "standard", title: "RFC 7914: The scrypt Password-Based Key Derivation Function", year: 2016, authors: ["Colin Percival", "Simon Josefsson"], url: "https://www.rfc-editor.org/info/rfc7914" },
      { id: "source-percival-scrypt-2009", type: "paper", title: "Stronger Key Derivation via Sequential Memory-Hard Functions", year: 2009, authors: ["Colin Percival"], url: "https://www.tarsnap.com/scrypt/scrypt.pdf" },
      { id: "source-bcrypt-1999", type: "paper", title: "A Future-Adaptable Password Scheme", year: 1999, authors: ["Niels Provos", "David Mazieres"], url: "https://www.usenix.org/conference/1999-usenix-annual-technical-conference/future-adaptable-password-scheme" },
      { id: "source-fips-186-5", type: "standard", title: "Digital Signature Standard (DSS), FIPS 186-5", year: 2023, authors: ["National Institute of Standards and Technology"], url: "https://doi.org/10.6028/NIST.FIPS.186-5" },
      { id: "source-rfc-6979", type: "standard", title: "RFC 6979: Deterministic Usage of DSA and ECDSA", year: 2013, authors: ["Thomas Pornin"], url: "https://www.rfc-editor.org/info/rfc6979" },
      { id: "source-lzma-sdk", type: "documentation", title: "LZMA SDK", authors: ["Igor Pavlov"], url: "https://www.7-zip.org/sdk.html" },
      { id: "source-chan-convex-hull-1996", type: "paper", title: "Optimal Output-Sensitive Convex Hull Algorithms in Two and Three Dimensions", year: 1996, authors: ["Timothy M. Chan"], url: "https://doi.org/10.1007/BF02712873" },
      { id: "source-cohen-sutherland", type: "reference", title: "Cohen–Sutherland Line Clipping", authors: ["Danny Cohen", "Ivan Sutherland"], url: "https://www.cs.helsinki.fi/group/goa/viewing/leikkaus/lineClip.html" },
      { id: "source-meisters-ears-1975", type: "paper", title: "Polygons Have Ears", year: 1975, authors: ["Gary H. Meisters"], url: "https://doi.org/10.1080/00029890.1975.11993855" },
      { id: "source-cart-1984", type: "book", title: "Classification and Regression Trees", year: 1984, authors: ["Leo Breiman", "Jerome Friedman", "Richard Olshen", "Charles Stone"], url: "https://www.routledge.com/Classification-and-Regression-Trees/Breiman-Friedman-Olshen-Stone/p/book/9780412048418" },
      { id: "source-friedman-gradient-boosting-2001", type: "paper", title: "Greedy Function Approximation: A Gradient Boosting Machine", year: 2001, authors: ["Jerome H. Friedman"], url: "https://doi.org/10.1214/aos/1013203451" },
      { id: "source-jolliffe-pca", type: "book", title: "Principal Component Analysis, Second Edition", year: 2002, authors: ["Ian T. Jolliffe"], url: "https://doi.org/10.1007/b98835" },
      { id: "source-kmeans-plus-plus-2007", type: "paper", title: "k-means++: The Advantages of Careful Seeding", year: 2007, authors: ["David Arthur", "Sergei Vassilvitskii"], url: "https://doi.org/10.1145/1283383.1283494" },
      { id: "source-lbfgs-1989", type: "paper", title: "On the Limited Memory BFGS Method for Large Scale Optimization", year: 1989, authors: ["Dong C. Liu", "Jorge Nocedal"], url: "https://doi.org/10.1007/BF01589116" },
      { id: "source-ista-2004", type: "paper", title: "An Iterative Thresholding Algorithm for Linear Inverse Problems with a Sparsity Constraint", year: 2004, authors: ["Ingrid Daubechies", "Michel Defrise", "Christine De Mol"], url: "https://doi.org/10.1002/cpa.20042" },
      { id: "source-fista-2009", type: "paper", title: "A Fast Iterative Shrinkage-Thresholding Algorithm for Linear Inverse Problems", year: 2009, authors: ["Amir Beck", "Marc Teboulle"], url: "https://doi.org/10.1137/080716542" },
      { id: "source-aho-hopcroft-ullman-graphs", type: "book", title: "Data Structures and Algorithms", year: 1983, authors: ["Alfred V. Aho", "John E. Hopcroft", "Jeffrey D. Ullman"], url: "https://dl.acm.org/doi/book/10.5555/578789" },
      { id: "source-dekker-root-1969", type: "paper", title: "Finding a Zero by Means of Successive Linear Interpolation", year: 1969, authors: ["T. J. Dekker"], url: "https://ir.cwi.nl/pub/7735" },
      { id: "source-von-mises-power-1929", type: "paper", title: "Praktische Verfahren der Gleichungsauflösung", year: 1929, authors: ["Richard von Mises", "Hilda Pollaczek-Geiringer"], url: "https://eudml.org/doc/159215" },
      { id: "source-sutherland-graphics-1968", type: "paper", title: "A Characterization of Ten Hidden-Surface Algorithms", year: 1974, authors: ["Ivan E. Sutherland", "Robert F. Sproull", "Robert A. Schumacker"], url: "https://doi.org/10.1145/356625.356626" }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
