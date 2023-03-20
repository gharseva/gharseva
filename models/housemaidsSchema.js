const mongoose = require("mongoose");

const housemaidsSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  onservicedate: {
    type: String,
    required: true,
  },
  durationofwork: {
    type: String,
    required: false,
  },
  typeofproblem: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const housemaidsBooking = mongoose.model("housemaidsBooking", housemaidsSchema);
module.exports = housemaidsBooking;
