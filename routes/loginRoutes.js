const UserSchema = require("../models/UserSchema");
const userSchema1 = require("../models/userSchema1");
const mechanicsSchema = require("../models/mechanicsSchema");
const cateringSchema = require("../models/cateringSchema");
const housemaidsSchema = require("../models/housemaidsSchema");
const plumberSchema = require("../models/plumberSchema");
const electricianSchema = require("../models/electricianSchema");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

//sss

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: `183671736543-9n22e892mn483k4208i1462p52oh95h1.apps.googleusercontent.com`,
      clientSecret: "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",
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async function (accessToken, refreshToken, profile, cb) {
      if (profile.emails[0].value != undefined) {
        const userSession1 = { email: profile.emails[0].value }; // creating user session to keep user loggedin also on refresh
        return cb(null, userSession1);
      } else {
        return cb(null, false);
      }
    }
  )
);

// Handle Google authentication callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  async function (req, res) {
    // Successful authentication, set up user session
    const userSession1 = { email: req.user.email };
    req.session.user = userSession1;
    console.log(req.session.user);

    res.redirect("http://localhost:3000/");
  }
);

router.post("/register", async (req, res) => {
  const { email, password, name, phoneno } = req.body;

  if (!email || !password)
    return res.status(400).json({ msg: "Password and email are required" });

  if (password.length < 8) {
    return res
      .status(400)
      .json({ msg: "Password should be at least 8 characters long" });
  }

  const user = await UserSchema.findOne({ $or: [{ email }, { phoneno }] });
  if (user) return res.status(400).json({ msg: "User already exists" });

  const newUser = new UserSchema({ email, password, name, phoneno });
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err)
      return res.status(400).json({ msg: "error while saving the password" });

    newUser.password = hash;
    const savedUserRes = await newUser.save();

    if (savedUserRes)
      return res.status(200).json({ msg: "user is successfully saved" });
  });
});

router.post(`/login`, async (req, res) => {
  const { email, phoneno, password } = req.body;

  if (!password) {
    res.status(400).json({ msg: "Something missing" });
  }

  const user = await UserSchema.findOne({
    $or: [{ email: email }, { phoneno: phoneno }],
  }); // finding user in db

  if (!user) {
    return res.status(400).json({ msg: "User not found" });
  }
  const matchPassword = await bcrypt.compare(password, user.password);

  if (matchPassword) {
    const userSession = { email: user.email }; // creating user session to keep user loggedin also on refresh
    req.session.user = userSession; // attach user session to session object from express-session

    return res
      .status(200)
      .json({ msg: "You have logged in successfully", userSession }); // attach user session id to the response. It will be transfer in the cookies
  } else {
    return res.status(400).json({ msg: "Invalid credential" });
  }
});

router.delete(`/logout`, async (req, res) => {
  req.session.destroy((error) => {
    if (error) throw error;

    res.clearCookie("session-id"); // cleaning the cookies from the user session
    res.status(200).send("Logout Success");
  });
});

router.get("/isAuth", async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  } else {
    return res.status(401).json("unauthorize");
  }
});

//mechanic
router.post("/mbooking", async (req, res) => {
  const {
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    typeofcater,
    typeofvehicle,
    typeofproblem,
  } = req.body;
  const newPayment = new mechanicsSchema({
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    typeofcater,
    typeofvehicle,
    typeofproblem,
  });

  const savedPaymentDetailsRes = await newPayment.save();

  if (savedPaymentDetailsRes)
    return res
      .status(200)
      .json({ msg: "booking details is successfully saved" });
});

//catering
router.post("/cbooking", async (req, res) => {
  const {
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    typeofcater,
    typeofvehicle,
  } = req.body;
  const newPayment = new cateringSchema({
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    typeofcater,
    typeofvehicle,
  });

  const savedPaymentDetailsRes = await newPayment.save();

  if (savedPaymentDetailsRes)
    return res
      .status(200)
      .json({ msg: "booking details is successfully saved" });
});

//housemaid
router.post("/hbooking", async (req, res) => {
  const {
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  } = req.body;
  const newPayment = new housemaidsSchema({
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  });

  const savedPaymentDetailsRes = await newPayment.save();

  if (savedPaymentDetailsRes)
    return res
      .status(200)
      .json({ msg: "booking details is successfully saved" });
});

//Plumber
router.post("/pbooking", async (req, res) => {
  const {
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  } = req.body;
  const newPayment = new plumberSchema({
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  });

  const savedPaymentDetailsRes = await newPayment.save();

  if (savedPaymentDetailsRes)
    return res
      .status(200)
      .json({ msg: "booking details is successfully saved" });
});

//Electrcian
router.post("/ebooking", async (req, res) => {
  const {
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  } = req.body;
  const newPayment = new electricianSchema({
    fullname,
    email,
    address,
    phoneno,
    onservicedate,
    durationofwork,
    typeofproblem,
  });

  const savedPaymentDetailsRes = await newPayment.save();

  if (savedPaymentDetailsRes)
    return res
      .status(200)
      .json({ msg: "booking details is successfully saved" });
});

module.exports = router;
