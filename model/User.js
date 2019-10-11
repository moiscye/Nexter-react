const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  isAdmin: { type: Boolean, default: false },
  name: String,
  picture: String
});

mongoose.model("users", userSchema);
