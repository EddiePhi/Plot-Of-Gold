const router = require("express").Router();
const Plot = require("../models/plot.js");

router.post("/api/plot", ({body}, res) => {
  Plot.create(body)
    .then(dbPlot => {
      res.json(dbPlot);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// NOT USED
// router.post("/api/plot/bulk", ({body}, res) => {
//   Plot.insertMany(body)
//     .then(dbPlot => {
//       res.json(dbPlot);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

router.get("/api/plot", (req, res) => {
  Plot.find({}).sort({date: -1})
    .then(dbPlot => {
      res.json(dbPlot);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;