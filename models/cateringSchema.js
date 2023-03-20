const mongoose = require("mongoose");

const cateringSchema = new mongoose.Schema({
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
  typeofcater: {
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

const cateringBooking = mongoose.model("cateringBooking", cateringSchema);
module.exports = cateringBooking;
