/**
 * @module models/userDemographics
 * @requires mongoose
 * @exports UserDemographics
 * @description This is the user demographics model
 */
import mongoose from "mongoose";

const UserDemographicsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  browser: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  device: {
    type: String,
  },
});

const UserDemographics = mongoose.model( "UserDemographics",
  UserDemographicsSchema
);

export default UserDemographics;
