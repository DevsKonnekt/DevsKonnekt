/**
 * @module models/amenities
 * @requires mongoose
 * @exports Amenity
 * @description This module contains the mongoose model for amenities associated with events.
 */

import mongoose from "mongoose";

/**
 * @typedef Amenity
 * @property {string} name - The name of the amenity.
 * @property {string} description - The description of the amenity.
 * @property {Date} createdAt - The timestamp when the amenity was created.
 * @property {Date} updatedAt - The timestamp when the amenity was last updated.
 */

const amenitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      index: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true },
);

/**
 * @class Amenity
 * @description Represents an amenity associated with an event.
 */
const Amenity = mongoose.model("Amenity", amenitySchema);

export default Amenity;
