//STILL NEED TO CONVERT PLANT AND ZIPCODE

const router = require("express").Router();
const User = require("../models/user.js");
const Plot = require("../models/plot.js");
const Plant = require("../models/plant.js");

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
router.delete("/api/user/:id", function (req, res) {
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


//Plants Post Request
router.post("/api/plant", ({ body }, res) => {
  if (body.plant_name) {
    let plantContract = {
      plant_name: body.plant_name,
      plant_facts: body.plant_facts || "",
      days_to_maturity: body.days_to_maturity || -1,
      fruit_size_inches: body.fruit_size_inches || -1,
      sun: body.sun || "",
      spread: body.spread || -1,
      height: body.height || -1,
    };
    Plant.create(plantContract)
      .then((dbForums) => {
        res.json(dbForums);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  } else {
    res.send(400, { message: "Bad Request" });
  }
});

//Plants Get Request
router.get("/api/plant", ({ body }, res) => {
  Plant.find({})
    .then((dbForums) => {
      res.json(dbForums);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

//Plants Delete Request
router.delete("/api/plant/:id", function (req, res) {
  console.log("/api/plant/:id", req.params.id);
  Plant.findOneAndDelete({
    _id: req.params.id,
  })
    .then(function (results) {
      console.log(results, "/api/plant/:id");
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
