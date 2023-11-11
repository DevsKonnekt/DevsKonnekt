/**
 * @module controllers/projects
 * @requires models/projects
 * @exports projectsController
 * @description This module contains the controller for projects.
 */
import mongoose from "mongoose";
import Project from "../models/projects.js";

/**
 * @name GET /projects
 * @memberof module:controllers/projects
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function gets all projects from the database.
 */
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    if (!projects) {
      const error = new Error("No projects found");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json(projects);
  } catch (error) {
    return next(error);
  }
};

/**
 * @name GET /projects/:id
 * @memberof module:controllers/projects
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @param {String} req.params.id - The ID of the project to retrieve
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function gets a single project from the database.
 */
export const getProject = async (req, res, next) => {
  console.log("getProject");
  console.log(req.params.id);
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      const error = new Error("Project not found");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json(project);
  } catch (error) {
    return next(error);
  }
};

/**
 * @name GET /projects/:userId
 * @memberof module:controllers/projects
 * @access Public
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @param {String} req.params.userId - The ID of the user
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function gets projects by user ID from the database.
 */
export const getProjectsByUserId = async (req, res, next) => {
  try {
    const projects = await Project.find({ owner: req.params.userId });
    if (!projects) {
      const error = new Error("No projects found for this user");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json(projects);
  } catch (error) {
    return next(error);
  }
};

/**
 * @name POST /projects
 * @memberof module:controllers/projects
 * @access Private
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function creates a new project in the database.
 */
export const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    if (!project) {
      const error = new Error("Project not created. Please try again.");
      error.statusCode = 400;
      throw error;
    }
    return res.status(201).json(project);
  } catch (error) {
    return next(error);
  }
};

/**
 * @name PATCH /projects/:id
 * @memberof module:controllers/projects
 * @access Private
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function updates a project in the database.
 */
export const updateProject = async (req, res, next) => {
  if (!req.body) {
    const error = new Error("Please provide a body for the request");
    error.statusCode = 400;
    throw error;
  }
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      const error = new Error("Project not found.");
      error.statusCode = 404;
      throw error;
    }
    // the following two lines are temporary, they should be removed once authorization is implemented
    req.user = {};
    req.user._id = new mongoose.Types.ObjectId("defa4567defa4567defa4567");
    // Check if user is the owner of the project. Only the owner can update the project.
    if (project.owner.toString() !== req.user._id.toString()) {
      const error = new Error("You are not authorized to update this project.");
      error.statusCode = 403;
      throw error;
    }
    project.set(req.body);
    const updateProject = await project.save();
    if (!updateProject) {
      const error = new Error("Project not updated. Please try again.");
      error.statusCode = 400;
      throw error;
    }
    return res.status(200).json(updateProject);
  } catch (error) {
    return next(error);
  }
};

/**
 * @name DELETE /projects/:id
 * @memberof module:controllers/projects
 * @access Private
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware
 * @returns {Object} - The response object
 * @throws {Object} - An error object
 * @description This function deletes a project from the database.
 */
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      const error = new Error("Project not found.");
      error.statusCode = 404;
      throw error;
    }
    // the following two lines are temporary, they should be removed once authorization is implemented
    req.user = {};
    req.user._id = new mongoose.Types.ObjectId("defa4567defa4567defa4567");
    // Check if user is the owner of the project. Only the owner can delete the project.
    if (project.owner.toString() !== req.user._id.toString()) {
      const error = new Error("You are not authorized to delete this project.");
      error.statusCode = 403;
      throw error;
    }
    await Project.deleteOne({ _id: req.params.id });
    return res.status(204).json({});
  } catch (error) {
    return next(error);
  }
};
