const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forumCommentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

const ForumComment = mongoose.model("ForumComment", forumCommentSchema);

module.exports = ForumComment;
