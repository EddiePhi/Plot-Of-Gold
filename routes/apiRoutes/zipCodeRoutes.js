//PUT REQUEST NEEDS WORK

const router = require("express").Router();
const ZipCode = require("../../models/zipcode");
const User = require("../../models/user.js");
const UserAuth = require("../../models/userAuth.js");

//Post ZipCode
router.post("/user/:userID", function (req, res) {
  ZipCode.create(req.body)
    .then((newZip) => {
      User.findOneAndUpdate(
        { _id: req.params.userID },
        { $push: { zip_codes: newZip._id } },
        { new: true }
      )
        .then((zip) => {
          console.log(zip);
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

//Get ZipCode
router.get("/user/:userID/zip/:id", (req, res) => {
    User.findOne({ _id: req.params.userID },{zip_codes: req.params.id})
    .then(function (results) {
      console.log(results)  
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
    ZipCode.findOne({ _id: req.params.id })
      .then((zip) => {
        console.log(zip)
        res.json(zip);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

//Update ZipCode
router.put("/user/:userID/zip/:id", function (req, res) {
  console.log(req.body.zipCode)
  // PENDING NEEDS FROM UI
  // User.findOne(
  //     { _id: req.params.userID }
  // )
  // .then(function (results) {
  //     res.json(results);
  // })
  // .catch((error) => {
  //     throw error;
  // });
  ZipCode.findOneAndUpdate(
      { _id: req.params.id },
      { zipCode: req.body.zipCode }
  )
  .then(function (results) {
      res.json(results);
  })
  .catch((error) => {
      throw error;
  });
});

//Delete ZipCode
router.delete("/user/:userID/zip/:id", function (req, res) {
  User.findOneAndUpdate({ _id: req.params.userID }, {$pull:{zip_codes: req.params.id}})
    .then(function (results) {
      console.log(results)  
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
  ZipCode.findOneAndDelete({ _id: req.params.id })
    .then(function (results) {
      console.log(results)  
      res.json(results);
    })
    .catch((error) => {
      throw error;
    });
});



module.exports = router;
