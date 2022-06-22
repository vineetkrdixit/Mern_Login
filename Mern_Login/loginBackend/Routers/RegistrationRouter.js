const express = require("express");
const router = require("express").Router();
const crypto = require("crypto");
const key = "secretkey";

//Using Schema with data of registration
const Item = require("../Database/registerSchema");

//Router to fetch data from frontend and save it in Database

router.post("/register", (req, res) => {
  Item.findOne({ email: req.body.email }, (err, result) => {
    if (result) {
      res.send({ message: "User Already Exist" });
    } else {
      const values = new Item(req.body); //saving reqbody into a variable and save into database
      //create hash value for password
      values.password = crypto
        .createHash("sha256", key)
        .update(req.body.password)
        .digest("hex");
      values.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "User Registered" });
        }
      });
    }
  });
});
module.exports = router;
