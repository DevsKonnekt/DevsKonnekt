import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import User from "../models/users.js";
import redisClient from "../config/redisConn.js";
import eventListener from "../events/listeners.js";
import { scanKeys } from "../utils/index.js";
import UserDemographics from "../models/userDemographics.js";
import Event from "../models/events.js";

dotenv.config();

/**
 * Retrieves users from the database and returns them in a JSON response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise} A promise that resolves to a JSON response containing the users.
 */
export const getUsers = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("All Users");
};

/**
 * Retrieves a user by their ID from the database and caches the result.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise} A Promise that resolves with the user object or rejects with an error.
 */
export const getUser = async (req, res, next) => {
  t// TODO: Implement this function.
  return res.send("User found");
};

/**
 * Updates a user in the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Object} The updated user and a success message.
 */
export const updateUser = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("User updated");
};

/**
 * Deletes a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise} A promise that resolves to the response object.
 */
export const deleteUser = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("User deleted");
};
