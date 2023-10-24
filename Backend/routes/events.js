/**
 * @module routes/events
 * @requires express
 * @requires controllers/events
 * @requires middlewares/event
 * @exports eventsRoutes
 * @description This module contains the routes definitions for events.
 */

import { Router } from "express";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.js";

const eventsRoutes = Router();

eventsRoutes.get("/events", getEvents);
eventsRoutes.post("/events", createEvent);
eventsRoutes.patch("/events/:id", updateEvent);
eventsRoutes.delete("/events/:id", deleteEvent);
eventsRoutes.get("/events/:id", getEvent);

export default eventsRoutes;
