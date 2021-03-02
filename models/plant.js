const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  //schema goes here.
  //Plant name nust be a string between 1 and 30 characters long
  plant_name: {
    type: String,
    required: "Enter a Plant Name",
  },
  //Plant facts nust be a string between 1 and 150 characters long
  plant_facts: {
    type: String,
  },
  //Days to a mature plant. Must be an integer between 1 and 365
  days_to_maturity: {
    type: Number,
  },
  //Avg fruit size when ripe. Must be a number, can be a decimal.
  fruit_size_inches: {
    type: Number,
  },
  //How much sun does this plant require? Must be a string between 1 and 30 chars.
  sun: {
    type: String,
  },
  //Measure of area plant uses at maturity. Must be number.
  spread: {
    type: Number,
  },
  //Avg height at plant maturity. Must be a number, can be a decimal
  height: {
    type: Number,
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
