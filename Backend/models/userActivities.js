/**
 * @module models/userActivities
 * @requires mongoose
 * @exports UserActivity
 * @description This is the user activities model. Required for analytics.
 */
import mongoose from "mongoose";

const UserActivitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  activityType: {
    type: String,
    required: true,
  },
  activityData: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const UserActivity = mongoose.model("UserActivity", UserActivitySchema);

export default UserActivity;
