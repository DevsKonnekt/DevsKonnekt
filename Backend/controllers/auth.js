/**
 * @module controllers/auth
 * @requires dotenv
 * @requires bcrypt
 * @requires ../models/users
 * @description Defines functions for handling various auth handlers.
 */
import User from "../models/users.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generateTokens } from "../utils/index.js";

dotenv.config();

/**
 * Register a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - A promise that resolves when the registration is successful.
 */
export const register = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("User created");
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
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const error = new Error("Incorrect email or password");
      error.statusCode = 401;
      throw error;
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      const error = new Error("Incorrect email or password");
      error.statusCode = 401;
      throw error;
    }
    const { accessToken, refreshToken } = generateTokens(user._id, user.email, user?.roles);
    user.refreshToken = refreshToken;
    await user.save();
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return res.status(200).json({
      accessToken,
      email: user.email,
      roles: user.roles,
      id: user._id,
    });
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
  // TODO: Implement this function.
  try {
    return res.send("email verified");
  } catch (error) {
    next(error);
  }
};
