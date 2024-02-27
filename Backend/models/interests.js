/**
 * @module models/interests
 * @requires mongoose
 * @exports Interest
 */
import mongoose from "mongoose";

const interestsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Interest name is required"],
    },
  },
  { autoIndex: false },
);

const Interest = mongoose.model("Interest", interestsSchema);

export default Interest;
