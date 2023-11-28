/**
 * @module routes/auth
 * @requires express
 * @requires controllers/auth
 * @exports authRoutes
 * @description This module contains the routes definitions for authRoutes.
 */

import { Router } from "express";
import {
  register,
  verifyEmail,
  login,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";
import { registrationValidation } from "../middlewares/authValidation.js";

const authRoutes = Router();

authRoutes.post("/register", registrationValidation, register);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password", resetPassword);

export default authRoutes;
