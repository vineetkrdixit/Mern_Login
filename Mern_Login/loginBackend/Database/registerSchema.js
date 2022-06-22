const mongoose = require("mongoose");

//stablish connection with database
const connection = mongoose.connection;
// creating Schema
const item = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});
//creating a model in db to save items in that model
const Item = connection.model("userdetail", item);

module.exports = Item;
