/**
 * @module models/comments
 * @requires mongoose
 * @exports Comments
 */
import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Post ID is required"],
      ref: "Posts",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User",
    },
    body: {
      type: String,
      required: true,
    },
    votes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Vote",
    },
    bookmarks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    comments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Comment",
    },
  },
  { autoIndex: false, timestamps: true }
);

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
