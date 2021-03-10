const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: "Enter a valid email address",
  },
  password: {
    type: String,
    required: "Enter your desired password",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  plots: [{ type: Schema.Types.ObjectId, ref: "Plot" }],
  forum_threads: [{ type: Schema.Types.ObjectId, ref: "ForumThread" }],
  forum_comments: [{ type: Schema.Types.ObjectId, ref: "ForumComment" }],
  zip_codes: [{ type: Schema.Types.ObjectId, ref: "ZipCode" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
