/**  @module models/review
 * @requires mongoose
 * @requires models/review
 * @exports review
 * @description This module contains the mongoose model for reviews
 */

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  points: {
    type: Number,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;