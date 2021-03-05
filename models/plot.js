const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plotSchema = new Schema({
  plot_name: {
    type: String,
    trim: true,
    required: "Enter a plot name",
  },
  plot_rows: {
    type: Number,
    required: "Enter the amount of rows",
  },
  plot_columns: {
    type: Number,
    required: "Enter the amount of columns",
  },
  zipcode: {
    type: String,
    required: "Enter a Zipcode",
  },
  date: {
    type: Date,
    default: Date.now,
  },

  locations: [{ type: Schema.Types.ObjectId, ref: "Location" }],
});

const Plot = mongoose.model("Plot", plotSchema);

module.exports = Plot;
