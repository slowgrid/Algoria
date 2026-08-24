(function registerAlgoriaPhase5Sources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) throw new Error("AlgoriaDataRegistry must be loaded first.");

  registry.registerPart({
    id: "sources-systems-phase5",
    sources: [
      { id: "source-graefe-query-evaluation-1993", type: "paper", title: "Query Evaluation Techniques for Large Databases", year: 1993, authors: ["Goetz Graefe"], url: "https://doi.org/10.1145/152610.152611" },
      { id: "source-dewitt-gerber-hash-join-1985", type: "paper", title: "Multiprocessor Hash-Based Join Algorithms", year: 1985, authors: ["David J. DeWitt", "Robert H. Gerber"], url: "https://www.vldb.org/conf/1985/P151.PDF" },
      { id: "source-goetz-replacement-selection-1963", type: "paper", title: "Internal and Tape Sorting Using the Replacement-Selection Technique", year: 1963, authors: ["Martin A. Goetz"], url: "https://doi.org/10.1145/366552.366556" },
      { id: "source-larson-run-generation-2003", type: "paper", title: "External Sorting: Run Formation Revisited", year: 2003, authors: ["Per-Åke Larson"], url: "https://doi.org/10.1109/TKDE.2003.1209012" },

      { id: "source-tanenbaum-distributed-systems", type: "book", title: "Distributed Systems", year: 2023, authors: ["Maarten van Steen", "Andrew S. Tanenbaum"], url: "https://www.distributed-systems.net/index.php/books/ds4/" },
      { id: "source-lamport-paxos-simple-2001", type: "paper", title: "Paxos Made Simple", year: 2001, authors: ["Leslie Lamport"], url: "https://www.microsoft.com/en-us/research/publication/paxos-made-simple/" },
      { id: "source-ongaro-raft-2014", type: "paper", title: "In Search of an Understandable Consensus Algorithm", year: 2014, authors: ["Diego Ongaro", "John Ousterhout"], url: "https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro" },
      { id: "source-chandy-lamport-snapshot-1985", type: "paper", title: "Distributed Snapshots: Determining Global States of Distributed Systems", year: 1985, authors: ["K. Mani Chandy", "Leslie Lamport"], url: "https://www.microsoft.com/en-us/research/publication/distributed-snapshots-determining-global-states-of-a-distributed-system/" },
      { id: "source-ricart-agrawala-1981", type: "paper", title: "An Optimal Algorithm for Mutual Exclusion in Computer Networks", year: 1981, authors: ["Glenn Ricart", "Ashok K. Agrawala"], url: "https://doi.org/10.1145/358527.358537" },
      { id: "source-garcia-molina-election-1982", type: "paper", title: "Elections in a Distributed Computing System", year: 1982, authors: ["Hector Garcia-Molina"], url: "https://doi.org/10.1109/TC.1982.1675885" },

      { id: "source-muthukrishnan-data-streams", type: "book", title: "Data Streams: Algorithms and Applications", year: 2005, authors: ["S. Muthukrishnan"], url: "https://www.nowpublishers.com/article/Details/TCS-004" },
      { id: "source-vitter-reservoir-1985", type: "paper", title: "Random Sampling with a Reservoir", year: 1985, authors: ["Jeffrey S. Vitter"], url: "https://doi.org/10.1145/3147.3165" },
      { id: "source-misra-gries-1982", type: "paper", title: "Finding Repeated Elements", year: 1982, authors: ["J. Misra", "David Gries"], url: "https://www.cs.utexas.edu/~misra/scannedPdf.dir/FindRepeatedElements.pdf" },
      { id: "source-metwally-space-saving-2005", type: "paper", title: "Efficient Computation of Frequent and Top-k Elements in Data Streams", year: 2005, authors: ["Ahmed Metwally", "Divyakant Agrawal", "Amr El Abbadi"], url: "https://cs.ucsb.edu/sites/default/files/documents/2005-23.pdf" },
      { id: "source-flajolet-hyperloglog-2007", type: "paper", title: "HyperLogLog: The Analysis of a Near-Optimal Cardinality Estimation Algorithm", year: 2007, authors: ["Philippe Flajolet", "Éric Fusy", "Olivier Gandouet", "Frédéric Meunier"], url: "https://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf" },
      { id: "source-karnin-kll-2016", type: "paper", title: "Optimal Quantile Approximation in Streams", year: 2016, authors: ["Zohar Karnin", "Kevin Lang", "Edo Liberty"], url: "https://arxiv.org/abs/1603.05346" },
      { id: "source-ivkin-kll-update-2019", type: "paper", title: "Streaming Quantiles Algorithms with Small Space and Update Time", year: 2019, authors: ["Nikita Ivkin", "Edo Liberty", "Kevin Lang", "Zohar Karnin", "Vladimir Braverman"], url: "https://arxiv.org/abs/1907.00236" },

      { id: "source-durbin-biological-sequence-analysis", type: "book", title: "Biological Sequence Analysis", year: 1998, authors: ["Richard Durbin", "Sean R. Eddy", "Anders Krogh", "Graeme Mitchison"], url: "https://doi.org/10.1017/CBO9780511790492" },
      { id: "source-gotoh-alignment-1982", type: "paper", title: "An Improved Algorithm for Matching Biological Sequences", year: 1982, authors: ["Osamu Gotoh"], url: "https://pubmed.ncbi.nlm.nih.gov/7166760/" },
      { id: "source-saitou-nei-neighbor-joining-1987", type: "paper", title: "The Neighbor-Joining Method: A New Method for Reconstructing Phylogenetic Trees", year: 1987, authors: ["Naruya Saitou", "Masatoshi Nei"], url: "https://pubmed.ncbi.nlm.nih.gov/3447015/" },
      { id: "source-sokal-michener-upgma-1958", type: "paper", title: "A Statistical Method for Evaluating Systematic Relationships", year: 1958, authors: ["Robert R. Sokal", "Charles D. Michener"], url: "https://books.google.com/books?id=o1BlHAAACAAJ" },
      { id: "source-nussinov-jacobson-1980", type: "paper", title: "Fast Algorithm for Predicting the Secondary Structure of Single-Stranded RNA", year: 1980, authors: ["Ruth Nussinov", "Ann B. Jacobson"], url: "https://doi.org/10.1073/pnas.77.11.6309" },
      { id: "source-ferragina-manzini-fm-index-2000", type: "paper", title: "Opportunistic Data Structures with Applications", year: 2000, authors: ["Paolo Ferragina", "Giovanni Manzini"], url: "https://people.unipmn.it/manzini/papers/focs00.html" }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);
