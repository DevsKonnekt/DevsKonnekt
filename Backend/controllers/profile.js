/* eslint-disable indent */
/**
 * @module controllers/profile
 * @requires models/profile
 * @requires models/users
 * @description Controller for profile. The profile is created and
 * deleted automatically when the user is created or deleted respectively.
 * @exports getProfile
 * @exports updateProfile
 * @exports getAllProfiles
 */

import Profile from "../models/profiles.js";

/**
 * @function getAllProfiles
 * @description Get all profiles and populate the user. Allow searching, sorting, and pagination.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The response object
 */
export const getAllProfiles = async (req, res, next) => {
  const {
    limit = 10,
    page = 1,
    sortField = "createdAt",
    sortOrder = -1,
  } = req.query;
  const filter = {};

  ["level", "firstName", "username"].forEach((key) => {
    if (req.query[key]) {
      filter[key] = req.query[key];
    }
  });
  const conditions = Object.keys(filter).length
    ? [{ level: { $regex: filter.title, $options: "i" } }]
    : [{}];
  try {
    const profiles = await Profile.find(
      {
        $or: conditions,
      },
      {
        sort: {
          [sortField]: sortOrder,
        },
        skip: (Number(page) - 1) * Number(limit),
        limit: Number(limit),
      }
    ).populate("user");
    return res.status(200).json(profiles);
  } catch (error) {
    next(error);
  }
};

/**
 * @function getProfile
 * @description Get profile by userId
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 */
export const getProfile = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const profile = await Profile.findOne({ user: userId })
      .populate({ path: "user" })
      .populate({ path: "skills" })
      .populate({ path: "projects" });
    if (!profile) {
      const error = new Error("Profile not found");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};

/**
 * @function updateProfile
 * @description Update profile
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The updated profile
 * @throws {Object} - An error object
 */
export const updateProfile = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const existingProfile = await Profile.findOne({ user: userId }).select(
      "skills"
    );
    if (!existingProfile) {
      const error = new Error("Profile not found");
      error.statusCode = 404;
      throw error;
    }
    const updatedSkills = Array.from(
      new Set([...existingProfile.skills, ...req.body.skills])
    );

    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      {
        $set: {
          ...req.body,
          skills: updatedSkills,
        },
      },
      { new: true }
    );

    return res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};

/**
 * @function deleteSkillFromProfile
 * @description Delete skill from profile
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The updated profile
 * @throws {Object} - An error object
 */
export const deleteSkillFromProfile = async (req, res, next) => {
  const { userId, skillId } = req.params;
  try {
    const existingProfile = await Profile.findOne({ user: userId }).select(
      "skills"
    );
    if (!existingProfile) {
      const error = new Error("Profile not found");
      error.statusCode = 404;
      throw error;
    }
    const updatedSkills = existingProfile.skills.filter(
      (skill) => skill.toString() !== skillId
    );

    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      {
        $set: {
          skills: updatedSkills,
        },
      },
      { new: true }
    );

    return res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};
