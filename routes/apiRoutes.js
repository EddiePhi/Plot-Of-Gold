const router = require("express").Router();
const User = require("../models/user.js");
const Plot = require("../models/plot.js");
const Zipcode = require("../models/zipcode.js");

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

//User routes

router.get("/api/user", (req, res) => {
  User.find({}).sort({date: -1})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/api/user", ({body}, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});



router.get("/api/plot", (req, res) => {
  Plot.find({}).sort({date: -1})
    .then(dbPlot => {
      res.json(dbPlot);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/api/zipcode", ({body}, res) => {
  Zipcode.create(body)
    .then(dbZipcode => {
      res.json(dbZipcode);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/zipcode", (req, res) => {
  Zipcode.find({}).sort({date: -1})
    .then(dbZipcode => {
      res.json(dbZipcode);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;