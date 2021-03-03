const router = require("express").Router();
const User = require("../models/user.js");
const Plot = require("../models/plot.js");
const ZipCode = require("../models/zipCode.js");
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
  User.find({})
    .sort({ date: -1 })
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/user", ({ body }, res) => {
  User.create(body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//user delete
router.delete("/:id", function (req, res) {
  User.findOneAndDelete({
      _id: req.params.id,
  })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

//Zipcode Post Request
router.post("/api/zipcode", ({ body }, res) => {
  ZipCode.create(body)
    .then((dbZipcode) => {
      res.json(dbZipcode);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//Zipcode Get Request
router.get("/api/zipcode", (req, res) => {
  ZipCode.find({})
    .sort({ date: -1 })
    .then((dbZipcode) => {
      res.json(dbZipcode);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Zipcode Delete Request
router.delete("/:id", function (req, res) {
  ZipCode.findOneAndDelete(
    {
      _id: req.params.id
    }
  )
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
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
