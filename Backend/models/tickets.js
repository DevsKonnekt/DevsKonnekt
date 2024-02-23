/**
 * @module models/tickets
 * @requires mongoose
 * @description This module defines the ticket schema and model.
 * @exports Ticket
 */
import mongoose from "mongoose";
import { Schema } from "mongoose";

const ticketSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stripePaymentId: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
