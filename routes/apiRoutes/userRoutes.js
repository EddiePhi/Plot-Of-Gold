//Location Collection API Routes

//Bring in express router and Plot collection
const router = require("express").Router();
const User = require("../../models/user");
const Location = require("../../models/location");
const Plot = require("../../models/plot");
const Plant = require("../../models/plant");

//POST: Create new user
router.post("/", (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then((newUser) => {
      res.json(newUser);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//GET: User & populate plots data
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .populate({
      path: "plots",
      model: Plot,
      populate: {
        path: "locations",
        model: Location,
        populate: {
          path: "plant",
          model: Plant,
        },
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

module.exports = router;
