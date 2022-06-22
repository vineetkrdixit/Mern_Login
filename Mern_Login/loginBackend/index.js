const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerroute = require("./Routers/RegistrationRouter");
const loginroute = require("./Routers/LoginRoute");

const port = 3009;
const cors = require("cors");
app.use(cors());
app.use(express.json());
//connecting to the database
require("../loginBackend/Database/DbConnection");
//Creating Schema
const Item = require("../loginBackend/Database/registerSchema");

// Creating Routes
app.use(registerroute);
app.use(loginroute);

app.listen(port, () => {
  console.log("Server Started at localhost : " + port);
});
