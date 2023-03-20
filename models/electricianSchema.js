const mongoose = require("mongoose");

const electricianSchema = new mongoose.Schema({
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

const electricianBooking = mongoose.model(
  "electricianBooking",
  electricianSchema
);
module.exports = electricianBooking;
