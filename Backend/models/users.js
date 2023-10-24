 /**
 * @module models/users
 * @requires mongoose
 * @exports User
 * @description This module contains the mongoose model for users.
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minLength: [3, "First name must be at least 3 characters long"],
      required: [true, "First name is required"],
      index: true,
    },
    lastName: {
      type: String,
      minLength: [2, "Last name must be at least 2 characters long"],
      index: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        },
      },
    },
    phone: {
      type: String,
      index: true,
      unique: true,
      required: [true, "phone number is required"],
      validate: {
        validator: function (value) {
          return /^([+]?\d{3}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{3}$/.test(value);
        },
      },
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      enum: ["male", "female", "other"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "d.o.b is required"], 
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Password must be at least 8 characters long"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      index: true,
    },
    locationLat: {
      type: String,
      required: [true, "Latitude is required"],
      validate: {
        validator: function (value) {
          return /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(value);
        },
      },
      index: true,
    },
    locationLon: {
      type: String,
      required: [true, "Longitude is required"],
      validate: {
        validator: function (value) {
          return /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(value);
        },
      },
      index: true,
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: String,
      required: [true, "role is required"],
      enum: ["user", "employer", "admin"],
      default: "user",
      index: true,
    },
    isVerified: {
      type: Boolean,
      defaultValue: false
    },
    status: {
      type: String,
      required: [true, "status is required"],
    },
  },
  { autoIndex: false }
);

const User = mongoose.model("User", userSchema);

export default User;
