const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb://127.0.0.0.1:27017/paytm");

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongose.model("user", userSchema);

module.exports = {
  User,
};
