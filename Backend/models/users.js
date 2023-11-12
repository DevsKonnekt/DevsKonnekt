import mongoose, { Schema } from "mongoose";

// User schema that represents a developer

const UserSchema = new Schema({
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
  email: {
    type: String,
    unique: true,
    required: [true, " Please provide an email address."],
    validate: {
      validator: (value) => {
        return /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/gm.test(value);
      },
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    validate: {
      validator: (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
          value
        );
      },
      message: "Password and password confirmation do not match.",
    },
  },
  bio: {
    type: String,
    maxlength: [1000, "Bio cannot be more than 1000 characters."],
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
  interests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Category",
  },
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Post",
  },
  projects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Project",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
