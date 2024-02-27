/**
 * @module models/votes
 * @requires mongoose
 * @exports Vote
 */
import mongoose, { Schema } from "mongoose";

const votesSchema = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    voteType: {
      type: String,
      enum: ["upvote", "downvote"],
      required: true,
    },
  },
  { autoIndex: false, timestamps: true },
);

const Vote = mongoose.model("Vote", votesSchema);

export default Vote;
