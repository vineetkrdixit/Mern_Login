const express = require("express");
const router = require("express").Router();
const Item = require("../Database/registerSchema"); // using register schema to check register form item
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const key = "secretkey";
const skey = "Authenticationofloginisdonebyvineetkumardixit";

router.post("/login", (req, res) => {
  Item.findOne({ email: req.body.email }, (err, result) => {
    if (result) {
      //Create hash to compare with hash password in Database
      req.body.password = crypto
        .createHash("sha256", key)
        .update(req.body.password)
        .digest("hex");

      if (req.body.password === result.password) {
        //create Jwt Authentication
        const Authentication = jwt.sign({ _id: result._id }, skey);
        console.log(Authentication);
        //Saving Jwt token into database
        result.tokens = result.tokens.concat({ token: Authentication }); // concat method used to add data in tokens with the field of token and authenticationtoken in it
        result.save((err) => {
          if (err) {
            console.log("Error can,t save");
          } else {
            console.log("Saved");
          }
        });
        console.log(result.tokens);
        res.send({ message: "User  found" });
      }
    } else {
      res.send({ message: "User not found" });
    }
  });
});
module.exports = router;
