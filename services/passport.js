const keys = require('../config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//loading users model
const mongoose = require('mongoose');
const User = mongoose.model('users');

//this code will run after authenticating the google strategy
//this line will add a cookie or token so the user can log back in
passport.serializeUser((user, cb) => {
  cb(null, user);
});

//this code will convert the userid into User object
//from the cookie coming in the request
passport.deserializeUser(async (id, cb) => {
  const user = await User.findById(id);
  cb(null, user);
});

passport.use(
  //configuration of the client and the redirect callback
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, cb) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) return cb(null, existingUser);

      const user = await new User({
        googleId: profile.id,
        name: profile.displayName,
        picture: profile.picture
      }).save();
      cb(null, user);
    }
  )
);
