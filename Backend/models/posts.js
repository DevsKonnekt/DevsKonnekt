/**
 * @module models/posts
 * @requires mongoose
 * @exports Posts
 * @description This module contains the mongoose model for posts.
 */

import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    media: {
      type: [String], // array of urls to AWS S3 bucket
    },
    tags: {
      type: [String],
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

const Posts = mongoose.model("Posts", postsSchema);

export default Posts;
