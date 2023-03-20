require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const MongoDBStore = require("connect-mongodb-session")(session); // add this package to store the user session id automatically on mongodb
// check on your db, you will have another collection (next to people) which is 'mySessions'
const loginRouter = require("./routes/loginRoutes");
const User1 = require("./models/userSchema1");

const app = express();
const MAX_AGE = 30 * 24 * 60 * 60 * 1000; // 30days
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: new MongoDBStore({
      uri: "mongodb+srv://ajharul:ajharul1234@cluster0.kzclar0.mongodb.net/?retryWrites=true&w=majority",
      collection: "mySessions",
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: "none",
      secure: true, // to turn on just in production
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
passport.use(User1.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User1.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      User1.findOrCreate(
        { googleId: profile.id, email: profile.emails[0].value },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

// setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "mySessions",
});
app.enable("trust proxy");

app.use(
  session({
    secret: "a1s2d3f4g5h6",
    name: "session-id", // cookies name to be put in "key" field in postman
    store: new MongoDBStore({
      uri: "mongodb+srv://ajharul:ajharul1234@cluster0.kzclar0.mongodb.net/?retryWrites=true&w=majority",
      collection: "mySessions",
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
      sameSite: "none",
      secure: true, // to turn on just in production
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, "./client/build")));
let url = path.join(__dirname, "./client/build", "index.html");
app.get("/signup", (req, res) => {
  res.sendFile(url);
});
app.get("/mechanics", (req, res) => {
  res.sendFile(url);
});
app.get("/mechanics/*", (req, res) => {
  res.sendFile(url);
});
app.get("/catering", (req, res) => {
  res.sendFile(url);
});
app.get("/catering/*", (req, res) => {
  res.sendFile(url);
});
app.get("/catering/*", (req, res) => {
  res.sendFile(url);
});
app.get("/household", (req, res) => {
  res.sendFile(url);
});
app.get("/household/*", (req, res) => {
  res.sendFile(url);
});
app.get("/otherservices", (req, res) => {
  res.sendFile(url);
});
app.get("/termsandconditions", (req, res) => {
  res.sendFile(url);
});
app.get("/aboutus", (req, res) => {
  res.sendFile(url);
});
app.get("/contactus", (req, res) => {
  res.sendFile(url);
});

app.use(cors(corsOptions));
app.use(express.json());

// ROUTERS
app.use("/api", loginRouter);

// START SERVER
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
