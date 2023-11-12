/**
 * @module models/message
 * @requires mongoose
 * @exports Message
 * @description This module contains the mongoose model for messages.
 */

import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
}, { autoIndex: false });

const Message = mongoose.model("Message", messageSchema);

export default Message;
