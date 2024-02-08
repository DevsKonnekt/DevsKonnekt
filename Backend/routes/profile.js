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

const profileRouter = Router();

profileRouter.get("/profiles", getAllProfiles);
profileRouter.get("/profiles/:userId", getProfile);
profileRouter.put("/profiles/:userId", updateProfile);
profileRouter.patch(
  "/profiles/:userId/skills/:skillId",
  deleteSkillFromProfile
);

export default profileRouter;
