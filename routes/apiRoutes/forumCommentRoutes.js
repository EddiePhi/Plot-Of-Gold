const router = require("express").Router();
const ForumThread = require("../../models/forumThread");
const ForumComment = require("../../models/forumComment.js");
const User = require("../../models/user.js");

//Post New Comment
router.post("/post/:id/user/:userID", function (req, res) {
  ForumComment.create(req.body)
    .then((newComment) => {
      ForumThread.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { forum_comments: newComment._id },
        },
        { new: true }
      )
        .then(function (results) {
          res.json(results);
        })
        .catch((error) => {
          throw error;
        });
      User.findOneAndUpdate(
        { _id: req.params.userID },
        { $push: { forum_comments: newComment._id } },
        { new: true }
      )
        .then((forum) => {
          console.log(forum);
        })
        .catch((err) => res.json(err));
    })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      res.send(400);
      throw error;
    });
});

//Delete Comment
router.delete("/thread/:id/comment/:commentID", function (req, res) {
  ForumThread.findOneAndDelete({ _id: req.params.id })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
  ForumComment.findOneAndDelete({ _id: req.params.commentID })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

//Edit Comment
router.put("/thread/:id/comment/:commentID", function (req, res) {
  ForumThread.findOne({ _id: req.params.id })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
  ForumComment.findOneAndUpdate(
    { _id: req.params.commentID },
    { content: req.body.content }
  )
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
