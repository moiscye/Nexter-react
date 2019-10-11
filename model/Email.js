const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  property: String,
  email: String,
  message: String
  // dateSent: Date
});

mongoose.model("emails", emailSchema);
