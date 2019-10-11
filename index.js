const keys = require("./config/keys");
const express = require("express");
const bodyParser = require("body-parser");
const passsport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
var cors = require("cors");

const app = express();
app.options("*", cors()); // include before other routes
require("./model/User");
require("./model/Email");
require("./services/passport");

//handles incoming data
app.use(bodyParser.json());

// this code will make the cookie session for a given time with the given keys
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//letting passort know to use cookie session
app.use(passsport.initialize());
app.use(passsport.session());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// const authRoutes = require("./routes/authRoutes")
// authRoutes(app);
//the below line is the same than the above 2 lines
require("./routes/authRoutes")(app);
require("./routes/contactRoute")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  // like main.js or main.css
  app.use(express.static("client/build"));

  //Express will serve up the index.html
  //if it does not recognize the route like /surveys
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//setting up the PORT to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
