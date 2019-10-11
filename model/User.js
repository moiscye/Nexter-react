const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  picture: String
});

mongoose.model("users", userSchema);
