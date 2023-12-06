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
  role: {
    type: String,
    required: [true, "role is required"],
    enum: ["admin","user"],
    default: "user",
    index: true,
  },
  refreshToken: String,
  resetToken: String,
});

const User = mongoose.model("User", UserSchema);

export default User;


