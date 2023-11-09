/**
 * @module models/venues
 * @requires mongoose
 * @exports Venue
 * @description This module contains the mongoose model for venues.
 */

import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    index: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    index: true,
  },
  city: {
    type: String,
    required: [true, "City is required"],
    index: true,
  },
  state: {
    type: String,
    required: [true, "State is required"],
    index: true,
  },
  locationLat: {
    type: String,
    required: [true, "Latitude is required"],
    validate: {
      validator: function (value) {
        return /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/.test(value);
      },
    },
    index: true,
  },
  locationLon: {
    type: String,
    required: [true, "Longitude is required"],
    validate: {
      validator: function (value) {
        return /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/.test(value);
      },
    },
    index: true,
  },
  capacity: {
    type: Number,
    required: [true, "Capacity is required"],
    index: true,
  },
  availability: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
    index: true,
  },
  facilities: {
    type: [String],
    enum: [
      "wifi",
      "parking",
      "catering",
      "projector",
      "whiteboard",
      "disabled access",
    ],
  },
}, { autoIndex: false });

const Venue = mongoose.model("Venue", venueSchema);

export default Venue;
