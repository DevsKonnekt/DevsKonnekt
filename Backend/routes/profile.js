/**
 * @module routers/profile
 * @requires express
 * @requires controllers/profile
 * @exports profileRouter
 * @description This module contains the routes definitions for profile.
 */
import { Router } from "express";
import {
  getProfile,
  updateProfile,
  getAllProfiles,
  deleteSkillFromProfile,
} from "../controllers/profile.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const profileRouter = Router();

profileRouter.get("/profiles", getAllProfiles, defaultErrorHandler);
profileRouter.get("/profiles/:userId", getProfile, defaultErrorHandler);
profileRouter.put("/profiles/:userId", updateProfile, defaultErrorHandler);
profileRouter.patch(
  "/profiles/:userId/skills/:skillId",
  deleteSkillFromProfile,
  defaultErrorHandler
);

export default profileRouter;
