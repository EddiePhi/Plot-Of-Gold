//CURRENT WEATHER API ROUTES

//Bring in express router, database models, additional dependencies
const router = require("express").Router();
const ZipCode = require("../../models/zipCode");
const fetch = require("isomorphic-fetch");
require("dotenv").config();

//GET: Request current weather icon.
router.get("/:id", function (req, res) {
  ZipCode.findOne({_id: req.params.id})
    .then(function (results) {
        console.log(results);
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          results.zipCode +
          ",us&appid=" +
          process.env.API_KEY
      ).then(async function (weatherdata) {
        const data = await weatherdata.json();
        console.log(data);
        res.json(data);
      });
    })
    .catch((error) => {
        console.log(error)
        throw error;
    });
});

module.exports = router;