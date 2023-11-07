/**
 * @module models/organizer
 * @requires mongoose
 * @exports Organizer
 * @description This module contains the mongoose model for organizers.
 */

import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
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
  website: {
    type: String,
    validate: {
      validator: function (value) {
        return /^https?:\/\/.+/.test(value);
      },
    },
  },
}, { autoIndex: false });


const Organizer = mongoose.model("Organizer", organizerSchema);

export default Organizer;
