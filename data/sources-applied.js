(function registerAlgoriaAppliedSources(global) {
  "use strict";

  const registry = global.AlgoriaDataRegistry;
  if (!registry) {
    throw new Error(
      "AlgoriaDataRegistry is unavailable. Load data/registry.js before this data part."
    );
  }

  registry.registerPart({
    id: "sources-applied",
    sources: [
      {
        "id": "source-fortune-voronoi-1987",
        "type": "paper",
        "title": "A Sweepline Algorithm for Voronoi Diagrams",
        "year": 1987,
        "authors": ["Steven Fortune"],
        "url": "https://doi.org/10.1007/BF01840357"
      },
      {
        "id": "source-sutherland-hodgman-1974",
        "type": "paper",
        "title": "Reentrant Polygon Clipping",
        "year": 1974,
        "authors": ["Ivan E. Sutherland", "Gary W. Hodgman"],
        "url": "https://doi.org/10.1145/360767.360802"
      },
      {
        "id": "source-helsinki-polygon-clipping",
        "type": "documentation",
        "title": "Sutherland-Hodgman Polygon Clipping",
        "authors": ["University of Helsinki"],
        "url": "https://www.cs.helsinki.fi/group/goa/viewing/leikkaus/intro2.html"
      },
      {
        "id": "source-sklearn-naive-bayes",
        "type": "documentation",
        "title": "Naive Bayes — scikit-learn User Guide",
        "authors": ["scikit-learn developers"],
        "url": "https://scikit-learn.org/stable/modules/naive_bayes.html"
      },
      {
        "id": "source-platt-smo-1998",
        "type": "paper",
        "title": "Sequential Minimal Optimization: A Fast Algorithm for Training Support Vector Machines",
        "year": 1998,
        "authors": ["John C. Platt"],
        "url": "https://www.microsoft.com/en-us/research/uploads/prod/1998/04/sequential-minimal-optimization.pdf"
      },
      {
        "id": "source-freund-schapire-adaboost-1995",
        "type": "paper",
        "title": "A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting",
        "year": 1995,
        "authors": ["Yoav Freund", "Robert E. Schapire"],
        "url": "https://doi.org/10.1007/3-540-59119-2_166"
      },
      {
        "id": "source-dempster-laird-rubin-em-1977",
        "type": "paper",
        "title": "Maximum Likelihood from Incomplete Data via the EM Algorithm",
        "year": 1977,
        "authors": ["Arthur P. Dempster", "Nan M. Laird", "Donald B. Rubin"],
        "url": "https://doi.org/10.1111/j.2517-6161.1977.tb01600.x"
      },
      {
        "id": "source-robbins-monro-1951",
        "type": "paper",
        "title": "A Stochastic Approximation Method",
        "year": 1951,
        "authors": ["Herbert Robbins", "Sutton Monro"],
        "url": "https://doi.org/10.1214/aoms/1177729586"
      },
      {
        "id": "source-polyak-momentum-1964",
        "type": "paper",
        "title": "Some Methods of Speeding Up the Convergence of Iteration Methods",
        "year": 1964,
        "authors": ["Boris T. Polyak"],
        "url": "https://doi.org/10.1016/0041-5553(64)90137-5"
      },
      {
        "id": "source-nocedal-wright-numerical-optimization",
        "type": "book",
        "title": "Numerical Optimization, Second Edition",
        "year": 2006,
        "authors": ["Jorge Nocedal", "Stephen J. Wright"],
        "url": "https://link.springer.com/book/10.1007/978-0-387-40065-5"
      },
      {
        "id": "source-broyden-bfgs-1970",
        "type": "paper",
        "title": "The Convergence of a Class of Double-Rank Minimization Algorithms",
        "year": 1970,
        "authors": ["C. G. Broyden"],
        "url": "https://doi.org/10.1093/imamat/6.1.76"
      },
      {
        "id": "source-fletcher-bfgs-1970",
        "type": "paper",
        "title": "A New Approach to Variable Metric Algorithms",
        "year": 1970,
        "authors": ["Roger Fletcher"],
        "url": "https://doi.org/10.1093/comjnl/13.3.317"
      },
      {
        "id": "source-goldfarb-bfgs-1970",
        "type": "paper",
        "title": "A Family of Variable-Metric Methods Derived by Variational Means",
        "year": 1970,
        "authors": ["Donald Goldfarb"],
        "url": "https://doi.org/10.1090/S0025-5718-1970-0258249-6"
      },
      {
        "id": "source-shanno-bfgs-1970",
        "type": "paper",
        "title": "Conditioning of Quasi-Newton Methods for Function Minimization",
        "year": 1970,
        "authors": ["David F. Shanno"],
        "url": "https://doi.org/10.1090/S0025-5718-1970-0274029-X"
      },
      {
        "id": "source-adam-2014",
        "type": "paper",
        "title": "Adam: A Method for Stochastic Optimization",
        "year": 2014,
        "authors": ["Diederik P. Kingma", "Jimmy Ba"],
        "url": "https://arxiv.org/abs/1412.6980"
      },
      {
        "id": "source-deep-learning-book-optimization",
        "type": "book",
        "title": "Deep Learning — Optimization for Training Deep Models",
        "year": 2016,
        "authors": ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"],
        "url": "https://www.deeplearningbook.org/contents/optimization.html"
      },
      {
        "id": "source-pytorch-adam",
        "type": "documentation",
        "title": "Adam — PyTorch Documentation",
        "authors": ["PyTorch contributors"],
        "url": "https://docs.pytorch.org/docs/stable/generated/torch.optim.Adam.html"
      }
    ]
  });
})(typeof window !== "undefined" ? window : globalThis);

