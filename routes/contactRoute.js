const mongoose = require("mongoose");
const contactEmail = require("../services/emailTemplates/contactEmail");
// const Email = mongoose.model("emails");
const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");
module.exports = app => {
  app.get("/api/contact", (req, res) => {
    res.send("Thanks for Contacting");
  });

  app.post("/api/contact", async (req, res) => {
    const { property, email } = req.body;

    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: "moiscye@gmail.com",
      from: email,
      subject: property,
      text: "message field",
      html: contactEmail(req.body)
    };
    sgMail.send(msg);
  });
};
