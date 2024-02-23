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
  getEventsByCategory,
} from "../controllers/events.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const eventsRoutes = Router();

eventsRoutes.get("/events", getEvents, defaultErrorHandler);
eventsRoutes.post("/events", createEvent, defaultErrorHandler);
eventsRoutes.patch("/events/:id", updateEvent, defaultErrorHandler);
eventsRoutes.delete("/events/:id", deleteEvent, defaultErrorHandler);
eventsRoutes.get("/events/:id", getEvent, defaultErrorHandler);
eventsRoutes.get(
  "/events/category/:categoryId",
  getEventsByCategory,
  defaultErrorHandler
);

export default eventsRoutes;
