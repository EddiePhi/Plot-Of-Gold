const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zipCodeSchema = new Schema({
  zipcode: {
    type: Number,
    required: "Enter the amount of rows",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const ZipCode = mongoose.model("ZipCode", zipCodeSchema);

module.exports = ZipCode;
