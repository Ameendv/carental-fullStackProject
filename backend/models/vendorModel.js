const mongoose = require("mongoose");

const vendor = new mongoose.Schema(
  {
    

    username: { type: String, required: true,unique:true },

    number: { type: Number},
    password: { type: String },
    location: { type: Object},
    bookings: { type: Array },
    isBlocked: { type: Boolean, default: false },
   
    refreshToken: { type: Array },
    
  },
  { collection: "vendor" }
);

const model = mongoose.model("VendorData", vendor);

module.exports = model;