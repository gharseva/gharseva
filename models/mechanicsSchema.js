const mongoose = require("mongoose");

const mechanicsSchema = new mongoose.Schema({
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
  othervehicle: {
    type: String,
    required: false,
  },
  typeofvehicle: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const MechanicsBooking = mongoose.model("MechanicsBooking", mechanicsSchema);
module.exports = MechanicsBooking;
