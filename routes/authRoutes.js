//loading users model
const mongoose = require("mongoose");
const passport = require("passport");

module.exports = app => {
  app.get(
    //entry route to the google auth
    "/auth/google",
    //type of auth strategy used by passport
    //refers to GoogleStrategy defined above
    passport.authenticate("google", {
      //data that we request google to provide for us,
      //it could be any data even list of images in google drive
      scope: ["profile", "email"]
    })
  );

  app.get(
    //callback route that google will redirect  to
    "/auth/google/callback",
    passport.authenticate("google"),
    //this route redirects to the surveys route
    //which belogs to the front end
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    //req.session = null;
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  app.get("/", (req, res) => {
    res.send({ welcome: "Welcome to Nexter" });
  });
};
