/**
 * @module routers/profile
 * @requires express
 * @requires controllers/profile
 * @exports profileRouter
 * @description This module contains the routes definitions for profile.
 */
import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/profile.js";

const profileRouter = Router();

profileRouter.get("/profile/:userId", getProfile);
profileRouter.put("/profile/:userId", updateProfile);

export default profileRouter;
