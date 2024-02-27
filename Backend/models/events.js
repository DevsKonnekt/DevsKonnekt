/**
 * @module models/events
 * @requires mongoose
 * @requires models/sessions
 * @requires models/tickets
 * @requires models/venues
 * @requires models/organizers
 * @requires models/categories
 * @requires models/sponsors
 * @exports Event
 * @description This module contains the mongoose model for events.
 */

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: [10, "Title must be at least 10 characters long"],
      required: [true, "Title is required"],
      index: true,
    },
    description: {
      type: String,
      minLength: [12, "Description must be at least 12 characters long"],
      required: [true, "Description is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
      index: true,
    },
    startTime: {
      type: String,
      required: [true, "Start time is required"],
      index: true,
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
      index: true,
    },
    imageUrl: {
      type: String,
    },
    tickets: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Ticket",
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Organizer is required"],
      index: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["isPublished", "isDraft", "isCancelled"],
      default: "isDraft",
      index: true,
    },
    location: {
      type: String,
      default: "",
      index: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
    },
    capacity: {
      type: Number,
      default: 0,
    },
    attendance: {
      type: Number,
      default: 0,
    },
    ticketSales: {
      type: Number,
      default: 0,
    },
    revenue: {
      type: Number,
      default: 0,
    },
    ratings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
  { autoIndex: false },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
