/**
 * @module models/skills
 * @requires mongoose
 * @exports Skill
 */
import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
    },
  },
  { autoIndex: false },
);

const Skill = mongoose.model("Skill", skillsSchema);

export default Skill;
