const mongoose = require("mongoose");
const { string } = require("zod");
const app = require("express")

mongoose.connect("mongodb://127.0.0.0.1:27017/paytm");

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};

app.listen((3000, () => console.log("Server started on port 3000")));
