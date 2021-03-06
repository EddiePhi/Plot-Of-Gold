const router = require("express").Router();
const ForumThread = require("../../models/forumThread");
const ForumComment = require("../../models/forumComment.js");
const User = require("../../models/user.js");

//Post ForumThread
router.post("/:id", (req, res) => {
  console.log(req.body);
  ForumThread.create(req.body)
    .then((thread) => {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { forum_threads: thread._id } },
        { new: true }
      )
        .then((forum) => {
          console.log(forum);
        })
        .catch((err) => res.json(err));
    })
    .then((dbForums) => {
      res.json(dbForums);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get ForumThread
router.get("/", ({ body }, res) => {
  ForumThread.find({})
    .populate({
      path: "forum_comments",
      model: ForumComment,
    })
    .then((dbForums) => {
      res.json(dbForums);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Edit ForumThread
router.put("/:id", function (req, res) {
  ForumThread.findOneAndUpdate(
    { _id: req.params.id },
    { forum_title: req.body.forum_title, forum_body: req.body.forum_body }
  )
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

//Delete ForumThread
router.delete("/:id", function (req, res) {
  ForumThread.findOneAndDelete({
    _id: req.params.id,
  })
    .then(function (results) {
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
