const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumThreadSchema = Schema({
  forum_title: {
    type: String,
    trim: true,
    required: "Enter a title for your forum post",
  },
  forum_body: {
    type: String,
    required: "Enter a body for your forum post",
  },
  forum_comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "ForumComment",
    },
  ],

  // forum_comments: [
  //   {
  //     author: {
  //       type: String,
  //       required: true,
  //     },
  //     date: {
  //       type: Date,
  //       default: Date.now,
  //     },
  //     content: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
});

const ForumThread = mongoose.model("ForumThread", forumThreadSchema);

module.exports = ForumThread;
