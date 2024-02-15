/**
 * @module routes/projects
 * @requires express
 * @requires controllers/projects
 * @description Routes for projects
 * @exports projectRouter
 */
import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectsByUserId,
  getProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const projectRouter = Router();

// Route to create a new project
projectRouter.post("/", createProject, defaultErrorHandler);

// Route to get all projects
projectRouter.get("/", getProjects, defaultErrorHandler);

// Route to get projects by user ID
projectRouter.get("/owner/:owner/", getProjectsByUserId, defaultErrorHandler);

// Route to get a single project by ID
projectRouter.get("/:id/", getProject, defaultErrorHandler);

// Route to update a project by ID
projectRouter.patch("/:id/:owner/", updateProject, defaultErrorHandler);

// Route to delete a project by ID
projectRouter.delete("/:id/:owner/", deleteProject, defaultErrorHandler);

export default projectRouter;
