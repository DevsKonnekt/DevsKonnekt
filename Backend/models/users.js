import mongoose, { Schema } from "mongoose";

// User schema that represents a developer

const UserSchema = new Schema({
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
  clerkId: {
    type: String,
    unique: true,
    required: [true, "Clerk ID is required"],
  },
  firstName: {
    type: String,
    required: [true, "Please provide a first name."],
    minlength: [2, "Please provide a first name with at least 2 characters."],
    maxlength: [50, "Please provide a first name with at most 50 characters."],
  },
  lastName: {
    type: String,
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
  },
  role: {
    type: String,
    required: [true, "role is required"],
    enum: ["admin", "user"],
    default: "user",
    index: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
