/**
 * @module routes/skills
 * @requires express
 * @requires controllers/skills
 * @description Routes for skills
 * @exports skillsRouter
 */

import { Router } from "express";
import {
  createSkill,
  getSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} from "../controllers/skills.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const skillsRouter = Router();

skillsRouter.get("/skills", getSkills, defaultErrorHandler);
skillsRouter.get("/skills/:id", getSkill, defaultErrorHandler);
skillsRouter.post("/skills", createSkill, defaultErrorHandler);
skillsRouter.patch("/skills/:id", updateSkill, defaultErrorHandler);
skillsRouter.delete("/skills/:id", deleteSkill, defaultErrorHandler);

export default skillsRouter;
