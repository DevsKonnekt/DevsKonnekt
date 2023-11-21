/**
 * @module backend/routes/venues
 * @requires express
 * @requires backend/controllers/venues
 * @exports venuesRouter
 */
import { Router } from "express";
import {
  getVenues,
  createVenue,
  getVenue,
  updateVenue,
  deleteVenue,
} from "../controllers/venues.js";

const venuesRouter = Router();

venuesRouter.get("/venues", getVenues).post("/venues", createVenue);
venuesRouter.get("/venues/:id", getVenue);
venuesRouter.patch("/venues/:id", updateVenue);
venuesRouter.delete("/venues/:id", deleteVenue);

export default venuesRouter;
