const mongoose = require("mongoose");
const { string } = require("zod");
const app = require("express");

mongoose.connect("mongodb://127.0.0.0.1:27017/paytm");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("user", userSchema);

module.exports = {
  User, Account
};

app.listen((3000, () => console.log("Server started on port 3000")));
