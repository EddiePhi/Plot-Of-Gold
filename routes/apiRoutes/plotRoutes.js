//Plot Collection API Routes

//Bring in express router and Plot collection
const router = require("express").Router();
const Location = require("../../models/location");
const Plot = require("../../models/plot");
const Plant = require("../../models/plant");
const User = require("../../models/user");

//GET: retrieve all Plots and associated collections
router.get("/", (req, res) => {
  Plot.find({})
    .populate({
      path: "locations",
      model: Location,
      populate: {
        path: "plant",
        model: Plant,
      },
    })
    .sort({ date: -1 })
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Get Plot data for Specified user
router.get("/:id", (req, res) => {
  Plot.findOne({ _id: req.params.id })
    .populate({
      path: "locations",
      model: Location,
      populate: {
        path: "plant",
        model: Plant,
      },
    })
    .sort({ date: -1 })
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//POST: User creates new plot
router.post("/:id", (req, res) => {
  Plot.create(req.body)
    .then((plot) => {
      console.log(plot);
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { plots: plot._id } },
        { new: true }
      )
        .then()
        .catch((err) => res.json(err));
    })
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
      res.json(err);
    });
});

//DELETE: Remove specified plot
router.delete("/:id", function (req, res) {
  Plot.findOneAndDelete({ _id: req.params.id })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
