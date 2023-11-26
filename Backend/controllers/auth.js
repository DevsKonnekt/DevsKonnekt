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
    const hashedPassword = await bcrypt.hash(registrationRequest.password, salt);
    registrationRequest.password = hashedPassword;

    const newUser = await User.create(registrationRequest).exec;
    if (!newUser) {
      return res.status(400).json({
        message: "Failed to register a new user! Please again",
        newUser
      })
    }

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id, role: newUser.role, },
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
      newUser
    })
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
  // TODO: Implement this function.
  try {
    return res.send("User logged out");
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
  // TODO: Implement this function.
  try {
    return res.send("password reset link sent");
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
  // TODO: Implement this function.
  try {
    return res.send("password reset");
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
