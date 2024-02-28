const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // You can add additional validation for email format if needed
    },
    password: {
      type: String,
      required: true,
      // You might want to add additional validation for password strength
    },
    profilePic: {
        type: String,
        default: "",
      },
  },
  {
    timestamps:true
  });

  module.exports = mongoose.model("User",UserSchema)