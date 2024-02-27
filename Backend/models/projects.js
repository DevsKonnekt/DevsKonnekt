import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    githubUrl: {
      type: String,
      required: true,
      validate: {
        validator: function (url) {
          return url.startsWith("https://github.com/");
        },
      },
    },
    liveUrl: {
      type: String,
      required: false,
    },
    technologies: {
      type: [String],
      required: false,
    },
    status: {
      type: String,
      enum: ["In Progress", "Completed", "On Hold"],
      required: true,
    },
  },
  { autoIndex: false },
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
