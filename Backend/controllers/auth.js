/**
 * @module controllers/auth
 * @requires dotenv
 * @requires ../models/users
 * @description Defines functions for handling various auth handlers.
 */

import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { sendingMail } from "../utils/mailing.js";

dotenv.config();

/**
 * Register a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - A promise that resolves when the registration is successful.
 */
export const register = async (req, res, next) => {
  const registrationRequest = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      registrationRequest.password,
      salt
    );
    registrationRequest.password = hashedPassword;
    // check if user with email or username already exists
    let userExists = await User.findOne({
      email: registrationRequest.email,
    });
    if (userExists) {
      return res.status(400).json({
        message: "User with that email already exists!",
      });
    }
    userExists = await User.findOne({
      username: registrationRequest.username,
    });
    if (userExists) {
      return res.status(400).json({
        message: "User with that username already exists!",
      });
    }
    const newUser = await User.create(registrationRequest);
    if (!newUser) {
      return res.status(400).json({
        message: "Failed to register a new user! Please again",
        newUser,
      });
    }

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id, role: newUser.role },
      process.env.ACTIVATION_SECRET,
      { expiresIn: "30m" }
    );

    const link = `${process.env.CLIENT_URL}/auth/verify-email/${token}`;

    await sendingMail({
      from: process.env.MAIL_USERNAME,
      to: newUser.email,
      subject: "Verify your email",
      text: `Hello ${newUser.firstName},\nPlease click on the link to activate your account.\n${link}`,
    });

    res.status(201).json({
      message: "successful",
      newUser,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Login a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware.
 * @return {Promise<void>} - A promise that resolves when the login is successful.
 * @throws {Error} - Throws an error if the login is unsuccessful.
 */
export const login = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("User logged in");
  } catch (error) {
    next(error);
  }
};

/**
 * Logout a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @throws {Error} - Throws an error if the logout is unsuccessful.
 */
export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(400).json({ message: "User not logged in!" });
    }
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exist!" });
    }
    user.refreshToken = "";
    await user.save();
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "User logged out successfully!" });
  } catch (error) {
    next(error);
  }
};

/**
 * Forgot password.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware.
 * @return {Promise<void>} - A promise that resolves when the forgot password is successful.
 * @throws {Error} - Throws an error if the forgot password is unsuccessful.
 */
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required!" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with that email doesn't exist!" });
    }
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.RESET_PASSWORD_SECRET,
      { expiresIn: "30m" }
    );
    const link = `${process.env.CLIENT_URL}/auth/reset-password/${token}`;
    await sendingMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Reset Password",
      text: `Hello ${user.name},\nPlease click on the link to reset your password.\n${link}`,
    });
    res.status(200).json({ message: "Password reset link sent successfully!" });
  } catch (error) {
    next(error);
  }
};

/**
 * Reset password.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware.
 * @return {Promise<void>} - A promise that resolves when the reset password is successful.
 * @throws {Error} - Throws an error if the reset password is unsuccessful.
 */
export const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: "Password is required!" });
    }
    const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET);
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with that email doesn't exist!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.findOneAndUpdate(
      { email: decoded.email },
      { password: hashedPassword },
      { new: true }
    );
    await sendingMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset Successfully",
      text: `Hello ${user.name},\nYour password has been reset successfully.`,
    });
    res.status(200).json({ message: "Password reset successfully!" });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify email.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the email is verified.
 * @throws {Error} - Throws an error if the email is not verified.
 */
export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.ACTIVATION_SECRET);
    const user = await User.findOneAndUpdate(
      { email: decoded.email },
      { isVerified: true },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist!" });
    }

    await sendingMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Email Verified Successfully",
      text: `Hello ${user.name},\nYour email has been verified successfully.`,
    });

    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    next(error);
  }
};
