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

const skillsRouter = Router();

skillsRouter.get("/skills", getSkills);
skillsRouter.get("/skills/:id", getSkill);
skillsRouter.post("/skills", createSkill);
skillsRouter.patch("/skills/:id", updateSkill);
skillsRouter.delete("/skills/:id", deleteSkill);

export default skillsRouter;
