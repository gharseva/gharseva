const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

const userSchema1 = new mongoose.Schema({
  username: String,
  email: String,
  googleId: String,
  secret: String,
});
userSchema1.plugin(passportLocalMongoose);
userSchema1.plugin(findOrCreate);
const User1 = new mongoose.model("User1", userSchema1);

module.exports = User1;
