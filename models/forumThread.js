const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forumThreadSchema = new Schema({
  forum_title: {
    type: String,
    trim: true,
    required: "Enter a title for your forum post",
  },
  forum_body: {
    type: String,
    required: "Enter a body for your forum post",
  },
});

const ForumThread = mongoose.model("ForumThread", forumThreadSchema);

module.exports = ForumThread;
