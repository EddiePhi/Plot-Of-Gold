const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: "Enter a valid email address"
    },
    password: {
      type: String,
      required: "Enter your desired password"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;