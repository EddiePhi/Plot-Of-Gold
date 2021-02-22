const router = require("express").Router();
const Plot = require("../models/plot.js");
const Zipcode = require("../models/zipcode.js");
const ForumThread = require("../models/forumThread.js");

//Plot Post Request
router.post("/api/plot", ({ body }, res) => {
  Plot.create(body)
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
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

//Plots Get Request
router.get("/api/plot", (req, res) => {
  Plot.find({})
    .sort({ date: -1 })
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Zipcode Post Request
router.post("/api/zipcode", ({ body }, res) => {
  Zipcode.create(body)
    .then((dbZipcode) => {
      res.json(dbZipcode);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//Zipcode Get Request
router.get("/api/zipcode", (req, res) => {
  Zipcode.find({})
    .sort({ date: -1 })
    .then((dbZipcode) => {
      res.json(dbZipcode);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//ForumThread Post Request
router.post("/api/forumThread", ({ body }, res) => {
  ForumThread.create(body)
    .then((dbForums) => {
      res.json(dbForums);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
