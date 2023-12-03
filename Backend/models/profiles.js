/**
 * @module models/profiles
 * @requires mongoose
 * @exports Profile
 * @description This module contains the mongoose model for profiles.
 */
import mongoose from "mongoose";

const profilesSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name."],
      minlength: [2, "Please provide a first name with at least 2 characters."],
      maxlength: [50, "Please provide a first name with at most 50 characters."],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name."],
      minlength: [2, "Please provide a last name with at least 2 characters."],
      maxlength: [50, "Please provide a last name with at most 50 characters."],
    },
    username: {
      type: String,
      required: [true, "Please provide a username."],
      minlength: [3, "Please provide a username with at least 3 characters."],
      maxlength: [25, "Please provide a username with at most 25 characters."],
      unique: true,
    },
    profilePicture: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
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
          return /^http(s)?:\/\/(www.)?github.com\/[a-zA-Z0-9]+\/?$/.test(value);
        },
      },
    },
    employed: {
      type: Boolean,
      required: [true, "Please specify your employement status!"],
    },
    isVerified: {
      type: Boolean,
      defaultValue: false
    },
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
      maxlength: [1000, "Bio cannot be more than 1000 characters."],
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

