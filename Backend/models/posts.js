 /**
 * @module models/posts
 * @requires mongoose
 * @exports Posts
 * @description This module contains the mongoose model for posts.
 */

 import mongoose from "mongoose";

 const postsSchema = new mongoose.Schema(
   {
     user: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "User ID is required"],
        ref: "User",
     },
     title: {
        type: String,
        required: true,
     },
     message: {
        type: String,
     },
     media: {
        data: Buffer, 
        contentType: String,
     },
     tags: {
        type: String,
     },
     createdAt: {
        type: Date,
        required: [true, "Creation time time required"],
     },
     updatedAt: {
        type: Date,
     },
     
   },
   { autoIndex: false }
 );
 
 const Posts = mongoose.model("Posts", postsSchema);
 
 export default Posts;
 