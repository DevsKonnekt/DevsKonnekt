/**
 * @module middlewares/event
 * @requires mongodb to validate object ids.
 * @requires middlewares/logging to log errors to the console and a file.
 * @exports createDataValidator
 * @exports updateDataValidator
 * @exports deleteDataValidator
 * @exports getEventErrorHandler
 * @description This module contains middleware functions for validating and handling errors in event-related requests. 
 * It exports four functions: createDataValidator, updateDataValidator, deleteDataValidator, and getEventErrorHandler. 
 * These functions are used to validate request data and handle errors for creating, updating, deleting, and fetching events respectively.
 */

import { ObjectId } from "mongodb";

export const createDataValidator = (req, res, next) => {
  if (!req.body.title) {
    throw new PropertyRequiredError("title");
  }
  if (!req.body.description) {
    throw new PropertyRequiredError("description");
  }
  if (!req.body.startDate) {
      throw new PropertyRequiredError("startDate");
  }
  if (!req.body.endDate) {
    throw new PropertyRequiredError("endDate");
  }
  if (!req.body.venue) {
    throw new PropertyRequiredError("venue");
  }
  if (!req.body.organizer) {
    throw new PropertyRequiredError("organiser");
  }
  if (!req.body.category) {
      throw new PropertyRequiredError("categoty");
  }
  //   return response("Please fill in all required fields", req, res);
  // }

  if (req.body.title && (typeof req.body.title !== "string" || req.body.title.length < 10)) {
    return response(
      "Title must be a string and at least 10 characters long",
      req,
      res
    );
  }

  if (
    req.body.description &&
    (typeof req.body.description !== "string" || req.body.description.length < 20)
  ) {
    return response(
      "Description must be a string and at least 20 characters",
      req,
      res
    );
  }
  // check if enddate is a date

  if (req.body.endDate && !Date.parse(req.body.endDate)) {
    return response("End date must be a valid date", req, res);
  }

  if (req.body.startDate && !Date.parse(req.body.startDate)) {
    return response("Start Date must be a valid date", req, res);
  }
  if (req.body.price && (typeof req.body.price !== "number" || req.price < 0)) {
    return response(
      "Price must be a number and must be greater than 0",
      req,
      res
    );
  }
  next();
};

/**
 * @function updateDataValidator
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 * @description Middleware function for validating request data when updating an event. It checks if all required fields are present and if the data types are valid.
 */
export const updateDataValidator = (err, req, res, next) => {
  if (
    req.body.title &&
    (typeof req.body.title !== "string" || req.body.title.length < 10)
  ) {
    return response(
      "Title must be a string and at least 10 characters long",
      req,
      res
    );
  }
  if (
    req.body.description &&
    (typeof req.body.description !== "string" ||
      req.body.description.length < 20)
  ) {
    return response(
      "Description must be a string and at least 20characters",
      req,
      res
    );
  }
  if (req.body.endDate && !Date.parse(req.body.endDate)) {
    return response("End date must be a valid date", req, res);
  }
  if (req.body.startDate && !Date.parse(req.body.startDate)) {
    return response("Start Date must be a valid date", req, res);
  }
  if (
    req.body.price &&
    (typeof req.body.price !== "number" || req.body.price < 0)
  ) {
    return response(
      "Price must be a number and must be greater than 0",
      req,
      res
    );
  }
  if (!ObjectId.isValid(req.params.id)) {
    errorLogger({
      statusCode: 404,
      message: "Event not found",
    });
    return res.status(404).json({
      status: 404,
      message: "Event not found",
    });
  }
  next();
};

/**
 * @function deleteDataValidator
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 * @description Middleware function for validating request data when deleting an event. It checks if the event id is valid.
 */
export const deleteDataValidator = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    errorLogger({
      statusCode: 404,
      message: "Event not found",
    });
    return res.status(404).json({
      status: 404,
      message: "Event not found",
    });
  }
  next();
};

/**
 * @function getEventErrorHandler
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {void}
 * @description Middleware function for handling errors when fetching an event. It checks if the event id is valid.
 */
 export const getEventErrorHandler = (err, req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      message: "Invalid event Id. Please check and try again",
    });
  }
  
  next();
 }
