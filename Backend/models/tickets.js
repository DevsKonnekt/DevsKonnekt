/**
 * @module models/tickets
 * @requires mongoose
 * @requires models/events
 * @requires models/users
 * @exports Ticket
 * @description This module defines the Ticket model.
 */

import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event is required"],
      index: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },
    seatNumber: {
      type: String,
    },
    status: {
      type: String,
      enum: ["VALID", "INVALID", "REFUNDED"],
      default: "VALID",
      index: true,
    },
    scanned: {
      type: Boolean,
      default: false,
      index: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    qrCode: {
      type: String,
      required: true,
    },
  },
  { autoIndex: false }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
