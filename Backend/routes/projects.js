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

const projectRouter = Router();

// Route to create a new project
projectRouter.post("/", createProject);

// Route to get all projects
projectRouter.get("/", getProjects);

// Route to get projects by user ID
projectRouter.get("/owner/:userId/", getProjectsByUserId);

// Route to get a single project by ID
projectRouter.get("/:id/", getProject);

// Route to update a project by ID
projectRouter.patch("/:id/", updateProject);

// Route to delete a project by ID
projectRouter.delete("/:id/", deleteProject);

export default projectRouter;
