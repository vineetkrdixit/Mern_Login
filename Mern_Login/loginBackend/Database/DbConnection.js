const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/logindb")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(() => {
    console.log("Failed to connect to Database");
  });
