const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const zipcodeSchema = new Schema(
  {
    zipcode: {
      type: Number,
      required: "Enter the amount of rows"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Zipcode = mongoose.model("Zipcode", zipcodeSchema);

module.exports = Zipcode;
