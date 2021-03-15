//Bring in express router and Plot collection
const router = require("express").Router();
const Plant = require("../../models/plant");

//GET: all plants from Plants collection
router.get("/", (req, res) => {
  Plant.find({})
    .then((dbPlant) => {
      res.json(dbPlant);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
