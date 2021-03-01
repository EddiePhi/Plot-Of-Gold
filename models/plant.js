const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({
  //schema goes here.
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
