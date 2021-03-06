//Location Collection API Routes

//Bring in express router and Plot collection
const router = require("express").Router();
const Plot = require("../../models/plot");
const Location = require("../../models/location");

//Post new Location and associate to specified plot
router.post("/:id", (req, res) => {
  Location.create(req.body)
    .then((location) => {
      console.log(location);
      Plot.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { locations: location._id } },
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

//PUT: add a plant to a location 1:1
router.put("/:id", (req, res) => {
  Location.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { plant: req.body } },
    { new: true }
  )
    .then((dbPlot) => {
      res.json(dbPlot);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
