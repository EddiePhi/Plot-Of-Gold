const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plotOfGold");

const plantsSeed = [
  {
    plant_name: "Tomato",
    plant_facts:
      "Tomatoes are rich in lycopene, an antioxidant that is good for the heart and effective against certain cancers.",
    days_to_maturity: 49,
    fruit_size_inches: 3,
    sun: "Full Sun",
    spread: 55,
    height: 38,
  },

  {
    plant_name: "Lettuce",
    plant_facts:
      "Lettuce grows best in cool weather. Use succession planting to maximize and extend harvests",
    days_to_maturity: 45,
    fruit_size_inches: 0,
    sun: "Full Sun, Part Sun",
    spread: 6,
    height: 12,
  },

  {
    plant_name: "Pepper",
    plant_facts:
      "Disease-resistant plants yield early and heavy harvests of 4 inch peppers from early to late season",
    days_to_maturity: 58,
    fruit_size_inches: 4,
    sun: "Full Sun",
    spread: 19,
    height: 28,
  },

  {
    plant_name: "Cucumber",
    plant_facts: "Best grown on a fence or our space-saving Trellis Netting",
    days_to_maturity: 58,
    fruit_size_inches: 7,
    sun: "Full Sun",
    spread: 56,
    height: 7,
  },

  {
    plant_name: "Rosemary",
    plant_facts:
      "Start seed early indoors. Plants tolerate light frost; set outside early",
    days_to_maturity: 90,
    fruit_size_inches: 0,
    sun: "Full Sun",
    spread: 18,
    height: 28,
  },

  {
    plant_name: "Sage",
    plant_facts:
      "Sage leaf tea is useful in treating colds and for aiding digestion",
    days_to_maturity: 900,
    fruit_size_inches: 0,
    sun: "Full Sun",
    spread: 20,
    height: 18,
  },

  {
    plant_name: "Dill",
    plant_facts:
      "Use seeds to flavor pickles and the leaves to brighten salads, soups, omelets and vegetables",
    days_to_maturity: 50,
    fruit_size_inches: 0,
    sun: "Full Sun",
    spread: 20,
    height: 36,
  },
];

db.Plant.remove({})
  .then(() => db.Plant.insertMany(plantsSeed))
  .then((data) => {
    console.log(data);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
