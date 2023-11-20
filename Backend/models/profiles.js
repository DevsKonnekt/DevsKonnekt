 /**
 * @module models/profiles
 * @requires mongoose
 * @exports Profile
 * @description This module contains the mongoose model for profiles.
 */

 import mongoose from "mongoose";

 const profilesSchema = new mongoose.Schema(
   {
     email: {
       type: String,
       required: [true, "Email is required"],
       unique: true,
       index: true,
       lowercase: true,
       validate: {
         validator: function (value) {
           return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
         },
       },
     },
     skills: {
        //languages and technologies
        type: String,
     },
     interests: {
        type: String,
     },
     projects: {
        type: String,
     },
     level: {
        type: String,
        enum: ["beginner", "junior", "senior"],
        default: "beginner",
     },
     overalRating: {
        type: Number,
     },
   },
   { autoIndex: false }
 );
 
 const Profile = mongoose.model("Profile", profilesSchema);
 
 export default Profile;
 