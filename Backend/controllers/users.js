/**
 * @module controllers/users
 * @requires models/users
 * @requires models/profile
 * @requires models/projects
 * @description Controllers for users
 */

import Profile from "../models/profiles.js";
import Project from "../models/projects.js";
import User from "../models/users.js";

/**
 *
 * @param {Request} req http request
 * @param {Response} res http response
 * @param {NextFunction} next next function to be called
 * @description Get all users from the database
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req http request
 * @param {Response} res http response
 * @param {NextFunction} next next function to be called
 * @description Get a single user from the database
 */
export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ clerkId: id });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req http request
 * @param {Response} res http response
 * @param {NextFunction} next next function to be called
 * @description Find and update a user in the database
 */
export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @param {Request} req http request
 * @param {Response} res http response
 * @param {NextFunction} next next function to be called
 * @description Find and delete user from the database.
 * Delete all projects, comments and profile associated with the user
 * Will have to add the isDeleted field later
 */
export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findOneAndDelete({ clerkId: id });
    await Profile.findOneAndDelete({ user: user._id });
    await Project.deleteMany({ owner: user._id });
    res.status(204);
  } catch (error) {
    next(error);
  }
};

/**
 * @param { Request } req http request
 * @param { Response } res http response
 * @param { NextFunction } next next function to be called
 * @description create a new user
 * @returns { Response } http response with user on success
 */
export const createUser = async (req, res, next) => {
  const { clerkId, firstName, lastName, username, email, profilePicture } =
    req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await User.create({
      clerkId,
      firstName,
      lastName,
      username,
      email,
      profilePicture,
    });
    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }
    await Profile.create({ user: user._id });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
