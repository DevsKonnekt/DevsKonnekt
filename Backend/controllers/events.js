import dotenv from "dotenv";
import Event from "../models/events.js";

dotenv.config();

/**
 * @module controllers/events
 * @requires dotenv
 * @requires models/events
 * @description This module contains functions for handling events.
 * @exports createEvent - Creates an event and saves it to the database.
 * @exports getEvents - Retrieves all events from the database.
 * @exports getEvent - Retrieves a specific event from the database.
 * @exports updateEvent - Updates an event and saves it to the database.
 * @exports deleteEvent - Deletes an event from the database.
 */

/**
 * @function createEvent
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 201 and the created event on success
 * @throws {Error} - HTTP Response with status 400 and error message on invalid request
 * @throws {Error} - A call to next() on an internal server error
 * @description This function creates an event and saves it to the database.
 */
export const createEvent = async (req, res, next) => {
  try {
    const eventData = req.body; // Assuming the event data is sent in the request body
    const event = await Event.create(eventData);
    if (!event) {
      const error = new Error(
        "An error occurred while creating the event. Please try again.",
      );
      error.statusCode = 400;
      throw error;
    }
    return res.status(201).json(event);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function getEvents
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the events on success
 * @throws {Error} - A call to next() on an internal server error
 * @description This function gets all events from the database.
 */
export const getEvents = async (req, res, next) => {
  const {
    limit = 10,
    page = 1,
    searchParam = "",
    sortField = "createdAt",
    sortOrder = -1,
  } = req.query;
  const conditions = searchParam.length
    ? [
      { title: { $regex: searchParam, $options: "i" } },
      { location: { $regex: searchParam, $options: "i" } },
    ]
    : [{}];
  try {
    const events = await Event.find({
      $or: conditions,
      status: "isPublished",
    })
      .sort({ [sortField]: sortOrder })
      .limit(+limit)
      .skip((+page - 1) * limit)
      .populate({
        path: "organizer",
        select: "firstName lastName username clerkId profilePicture",
      })
      .populate("category");
    return res.status(200).json(events);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function getEventsByUserId
 *  @param {import('express').Request} req - HTTP Request
 *  @param {import('express').Response} res - HTTP Response
 *  @param {import('express').NextFunction} next - Next function
 *  @returns {import('express').Response} - HTTP Response with status 200 and the events on success
 *  @throws {Error} - A call to next() on an internal server error
 *  @description This function gets all events from the database.
 */
export const getEventsByUserId = async(req, res, next) => {
  const {
    limit = 10,
    page = 1,
    searchParam = "",
    sortField = "createdAt",
    sortOrder = -1,
  } = req.query;
  const conditions = searchParam.length
    ? [
      { title: { $regex: searchParam, $options: "i" } },
      { location: { $regex: searchParam, $options: "i" } },
    ]
    : [{}];
  try {
    const events = await Event.find({
      $or: conditions,
      status: "isPublished",
      organizer: req.params.userId,
    })
      .sort({ [sortField]: sortOrder })
      .limit(+limit)
      .skip((+page - 1) * limit)
      .populate({
        path: "organizer",
        select: "firstName lastName username clerkId profilePicture",
      })
      .populate("category");
    return res.status(200).json(events);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function getEventAnalytics
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the event analytics on success
 * @throws {Error} - A call to next() on an internal server error
 * @description This function gets the event analytics from the database.
 */
export const getEventAnalytics = async (req, res, next) => {
  try {
    const eventId = req.params.id; 
    const event = await Event.findById(eventId).populate("tickets");
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    const eventAnalytics = {
      participants: event.tickets.length,
      totalTickets: event.tickets.length,
      revenue: event.tickets.reduce((total, ticket) => total + ticket.totalAmount, 0),
      ratings: 0, // not implemented yet
    };
    return res.status(200).json(eventAnalytics);
  } catch (error) {
    return next(error);
  }

};

/**
 * @function exportEventsAnalytics
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the event analytics on success
 * @throws {Error} - A call to next() on an internal server error
 * @description This function exports the events analytics to a CSV file or Excel file.
 */
export const exportEventsAnalytics = async (req, res, next) => {
  const userId = req.params.userId;
  
  try {
    const events = await Event.find({
      organizer: userId,
      status: "isPublished",
    }).populate([{
      path: "organizer",
      select: "firstName lastName",

    },
    {
      path: "tickets",
      select: "totalAmount"
    },
    ]);
    if (!events || events.length === 0) {
      return res.status(404).json({ error: "No events found for this user" });
    }

    const headers = [
      { header: "No.", key: "no"},
      { header: "Event Name", key: "eventName", width: 30 },
      { header: "Event Date", key: "eventDate", width: 20 },
      { header: "Event Time", key: "eventTime", width: 20 },
      { header: "Event Location", key: "eventLocation", width: 30 },
      { header: "Tickets Sold", key: "ticketsSold", width: 20 },
      { header: "Revenue", key: "revenue", width: 20 },
    ];
    const data = {
      headers,
      rows: []
    };

    events.forEach((event, index) => {
      const row = {
        no: index + 1,
        eventName: event.title,
        eventDate: event.startDate,
        eventTime: event.startTime,
        eventLocation: event.location,
        ticketsSold: event.tickets.length,
        revenue: event.tickets.reduce((total, ticket) => total + ticket.totalAmount, 0),
      };
      data.rows.push(row);
    });
    return res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function getEvent
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the event on success
 * @returns {import('express').Response} - HTTP Response with status 404 and error message on invalid request
 * @throws {Error} - Throws an error on an internal server error
 * @description This function gets a specific event from the database.
 */
export const getEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id; // Assuming the event ID is passed as a route parameter
    const event = await Event.findById(eventId)
      .populate({
        path: "organizer",
        select: "firstName lastName username clerkId profilePicture",
      })
      .populate("category");
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(event);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function getEventsByCategory
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the events on success
 * @throws {Error} - A call to next() on an internal server error
 * @description This function gets all events from the database by category.
 */
export const getEventsByCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const events = await Event.find({
      category: categoryId,
      status: "isPublished",
    })
      .populate({
        path: "organizer",
        select: "firstName lastName username clerkId profilePicture",
      })
      .populate("category");
    return res.status(200).json(events);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function updateEvent
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the updated event on success,
 * or status 400/500 with an error message
 * @description Updates an event and saves it to the database. Emits an event for API call to AI service.
 */
export const updateEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id; // Assuming the event ID is passed as a route parameter
    const eventData = req.body; // Assuming the updated event data is sent in the request body
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        $set: {
          ...eventData,
        },
      },
      { new: true },
    );
    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(updatedEvent);
  } catch (error) {
    return next(error);
  }
};

/**
 * @function deleteEvent
 * @param {import('express').Request} req - HTTP Request
 * @function deleteEvent
 * @param {import('express').Request} req - HTTP Request
 * @param {import('express').Response} res - HTTP Response
 * @param {import('express').NextFunction} next - Next function
 * @returns {import('express').Response} - HTTP Response with status 200 and the deleted event on success
 * @throws {Error} - A call to next() on an error
 * @description This function deletes an event from the database.
 */
export const deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id; // Assuming the event ID is passed as a route parameter
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    return res.status(200).json(deletedEvent);
  } catch (error) {
    return next(error);
  }
};
