/**
 * @module models/profiles
 * @requires mongoose
 * @exports Profile
 * @description This module contains the mongoose model for profiles.
 */
import mongoose from "mongoose";

const profilesSchema = new mongoose.Schema(
  {
    twitter: {
      type: String,
      validate: {
        validator: (value) => {
          return /^http(s)?:\/\/(www.)?twitter.com\/[a-zA-Z0-9_]+\/?$/.test(
            value
          );
        },
        message: "Please provide a valid Twitter URL.",
      },
    },
    linkedin: {
      type: String,
      validate: {
        validator: (value) => {
          return /^http(s)?:\/\/(www.)?linkedin.com\/in\/[a-zA-Z0-9_]+\/?$/.test(
            value
          );
        },
      },
    },
    github: {
      type: String,
      validate: {
        validator: (value) => {
          return /^http(s)?:\/\/(www.)?github.com\/[a-zA-Z0-9]+\/?$/.test(
            value
          );
        },
      },
    },
    portfolio: {
      type: String,
    },
    otherVCS: {
      type: String,
    },
    employed: {
      type: Boolean,
      required: [true, "Please specify your employement status!"],
      default: false,
    },
    jobTitle: {
      type: String,
      required: [
        function () {
          return this.employed;
        },
        "Please specify your job title!",
      ],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      ref: "User",
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    skills: {
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
      maxlength: [1000, "Bio cannot be more than 1000 characters."],
    },
    level: {
      type: String,
      enum: ["beginner", "junior", "senior"],
      default: "beginner",
    },
    achievements: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Achievement",
    },
    availableForHire: {
      type: Boolean,
      default: true,
    },
    availableForCollaboration: {
      type: Boolean,
      default: true,
    },
    overallRating: {
      type: Number,
    },
  },
  { autoIndex: false }
);

const Profile = mongoose.model("Profile", profilesSchema);

export default Profile;
