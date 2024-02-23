/**
 * @module routes/tickets
 * @requires express
 * @requires controllers/tickets
 * @requires middlewares/index
 * @description This module defines the ticket routes.
 * @exports ticketsRouter
 */
import { Router } from "express";
import { defaultErrorHandler } from "../middlewares/index.js";
import {
  createTicket,
  getTickets,
  getTicket,
  getTicketsByEvent,
  getTicketsByBuyerId,
  deleteTicket,
} from "../controllers/tickets.js";

const ticketsRouter = Router();

ticketsRouter.post("/", createTicket, defaultErrorHandler);
ticketsRouter.get("/", getTickets, defaultErrorHandler);
ticketsRouter.get("/:id", getTicket, defaultErrorHandler);
ticketsRouter.get("/event/:eventId", getTicketsByEvent, defaultErrorHandler);
ticketsRouter.get("/buyer/:buyerId", getTicketsByBuyerId, defaultErrorHandler);
ticketsRouter.delete("/:id/:userId", deleteTicket, defaultErrorHandler);

export default ticketsRouter;
