/**
 * @module controllers/events
 * @requires dotenv
 * @requires models/events
 * @requires mongodb
 * @requires events/listeners
 * @description This module contains functions for handling events. It exports the following functions:
 * @exports function:createEvent
 * @exports function:getEvents
 * @exports function:getEvent
 * @exports function:updateEvent
 * @exports function:deleteEvent
 */
import dotenv from "dotenv";
// import Event from "../models/events.js";

dotenv.config();

/**
 * @function createEvent
 * @param {import('express').Request} req HTTP Request
 * @param {import('express').Response} res HTTP Response
 * @param {import('express').NextFunction} next Next function
 * @returns {import('express').Response} HTTP Response with status 201 and the created event on success
 * @throws {Error} HTTP Response with status 400 and error message on invalid request
 * @throws {Error} A call to next() on internal server error
 *
 * @description This function creates an event and saves it to the database.
 */
export const createEvent = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Event created");
  } catch (error) {
    next(error);
  }
};

/**
 * @function getEvents
 * @param {HTTP Request} req HTTP Request
 * @param {HTTP Response} res HTTP Response
 * @param {Next Function} next Next function
 * @returns HTTP Response with status 200 with the events on success
 * @returns A call to next() on internal server error
 * @description This function gets all events from the database.
 */
export const getEvents = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Events found");
  } catch (error) {
    next(error);
  }
};

/**
 * @function getEvent
 * @param {HTTP Request} req HTTP Request
 * @param {HTTP Response} res HTTP Response
 * @param {Next Function} next Next function
 * @returns {HTTP Response} HTTP Response with status 200 and the event on success
 * @returns {HTTP Response} HTTP Response with status 404 and error message on invalid request
 * @throws {Error} Throws an error on internal server error
 * @description This function gets an event from the database.
 */
export const getEvent = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Event found");
  } catch (error) {
    next(error);
  }
};

/**
 * @function updateEvent
 * @param {HTTP Request} req HTTP Request
 * @param {HTTP Response} res HTTP Response
 * @returns {HTTP Response} HTTP Response with status 200 and updated event on success,
 * or status 400/500 with error message
 * @description Updates an event and saves it to the database. Emits an event for API call to AI service.
 */
export const updateEvent = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Event updated");
  } catch (error) {
    next(error);
  }
};

/**
 * @function deleteEvent
 * @param {HTTP Request} req HTTP Request
 * @param {HTTP Response} res HTTP Response
 * @param {Next Function} next Next function
 * @returns HTTP Response with status 200 with the deleted event on success
 * @returns A call to next() on error
 * @description This function deletes an event from the database.
 */
export const deleteEvent = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Event deleted");
  } catch (error) {
    next(error);
  }
};
