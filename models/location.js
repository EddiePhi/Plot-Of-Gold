const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  //schema goes here.
  // x_coordinate: {
  //   type: Number,
  //   require: "Enter a coordinate",
  //   min: [1, "Needs to be at least 1"],
  //   max: [5, "Plot is too big"],
  // },
  // //Type integer that creates a location/grid marker for the verticle coordinate
  // y_coordinate: {
  //   type: Number,
  //   require: "Enter a coordinate",
  //   min: [1, "Needs to be at least 1"],
  //   max: [5, "Plot is too big"],
  // },
  x_y_coordinate: {
    type: String,
    require: "must have coresponding plot coordinate",
  },
  date: {
    type: Date,
    default: Date.now,
  },

  plant: [{ type: Schema.Types.ObjectId, ref: "Plant" }],
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
