/**
 * @module models/profiles
 * @requires mongoose
 * @exports Profile
 * @description This module contains the mongoose model for profiles.
 */
import mongoose from "mongoose";

const profilesSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User",
    },
    skills: {
      //languages and technologies
      type: [mongoose.Schema.Types.ObjectId],
    },
    interests: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    projects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Project",
    },
    posts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Posts",
    },
    bio: {
      type: String,
    },
    level: {
      type: String,
      enum: ["beginner", "junior", "senior"],
      default: "beginner",
    },
    overallRating: {
      type: Number,
    },
  },
  { autoIndex: false }
);

const Profile = mongoose.model("Profile", profilesSchema);

export default Profile;
