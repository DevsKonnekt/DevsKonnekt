/**
 * @module controllers/tickets
 * @requires models/tickets
 * @requires models/events
 * @description This module defines the ticket controller.
 * @exports createTicket
 * @exports getTickets
 * @exports getTicket
 * @exports getTicketsByEvent
 * @exports getTicketsByBuyerId
 * @exports deleteTicket
 */

import Ticket from "../models/tickets.js";
import Event from "../models/events.js";

/**
 * @function createTicket
 * @description Create a new ticket.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and message.
 * @throws {Error} The error message.
 */
export const createTicket = async (req, res, next) => {
  const { event: eventId, buyer, totalAmount, stripePaymentId } = req.body;
  try {
    const newTicket = await Ticket.create({
      event: eventId,
      buyer,
      totalAmount,
      stripePaymentId,
    });
    if (!newTicket) {
      const error = new Error("The ticket could not be created.");
      error.statusCode = 500;
      throw error;
    }
    const event = await Event.findById(eventId);
    if (!event) {
      const error = new Error("The event does not exist.");
      error.statusCode = 404;
      throw error;
    }
    event.tickets.push(newTicket._id);
    await event.save();
    res.status(201).json(newTicket);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @function getTickets
 * @description Get all tickets.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and tickets.
 * @throws {Error} The error message.
 */
export const getTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.find().populate("event").populate({
      path: "buyer",
      select: "username email firstName lastName profilePicture clerkId",
    });
    res.status(200).json(tickets);
  } catch (error) {
    next(error);
  }
};

/**
 * @function getTicket
 * @description Get a ticket by ID.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and ticket.
 * @throws {Error} The error message.
 */
export const getTicket = async (req, res, next) => {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findById(id).populate("event").populate({
      path: "buyer",
      select: "username email firstName lastName profilePicture clerkId",
    });
    if (!ticket) {
      const error = new Error("The ticket does not exist.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(ticket);
  } catch (error) {
    next(error);
  }
};

/**
 * @function getTicketsByEvent
 * @description Get all tickets by event ID.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and tickets.
 * @throws {Error} The error message.
 */
export const getTicketsByEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const tickets = await Ticket.find({ event: eventId })
      .populate("event")
      .populate({
        path: "buyer",
        select: "username email firstName lastName profilePicture clerkId",
      });
    return res.status(200).json(tickets);
  } catch (error) {
    next(error);
  }
};

/**
 * @function getTicketsByBuyerId
 * @description Get all tickets by user ID.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and tickets.
 * @throws {Error} The error message.
 */
export const getTicketsByBuyerId = async (req, res, next) => {
  const { buyerId } = req.params;
  const { limit = 10, page = 1, sortOder = -1 } = req.query;
  try {
    const tickets = await Ticket.find({ buyer: buyerId })
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .sort({ createdAt: sortOder })
      .populate({
        path: "event",
        populate: [
          {
            path: "organizer",
            select: "username email firstName lastName profilePicture clerkId",
          },
          {
            path: "category",
          },
        ],
      })
      .populate({
        path: "buyer",
        select: "username email firstName lastName profilePicture clerkId",
      });
    return res.status(200).json(tickets);
  } catch (error) {
    next(error);
  }
};

/**
 * @function deleteTicket
 * @description Delete a ticket by ID.
 * @param {import("express").Request} req - The request object.
 * @param {import("express").Response} res - The response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 * @returns {Promise<void>} The response status and message.
 * @throws {Error} The error message.
 */
export const deleteTicket = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) {
      const error = new Error("The ticket does not exist.");
      error.statusCode = 404;
      throw error;
    }
    const event = await Event.findById(ticket.event);
    if (
      (ticket.buyer.toString() !== userId &&
        userId !== event.organizer.toString()) ||
      userId !== event.organizer.toString() ||
      userId !== ticket.buyer.toString()
    ) {
      const error = new Error("You are not authorized to delete this ticket.");
      error.statusCode = 403;
      throw error;
    }
    res.status(200).json({ message: "The ticket has been deleted." });
  } catch (error) {
    next(error);
  }
};
