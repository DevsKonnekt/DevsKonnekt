/**
 * @module middlewares/index
 * @requires middlewares/logging to log errors to the console and a file.
 * @exports defaultErrorHandler
 * @description This module contains a middleware function for handling errors.
 */

import { errorLogger } from "../config/logger.js";

/**
 * @function defaultErrorHandler
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {function} next - The next middleware function.
 * @returns {Object} The response object with a status code and a JSON body containing the status code and error message.
 * @description Middleware function for handling errors. It logs the error and sends a response with a status code and a custom message.
 */
// eslint-disable-next-line no-unused-vars
export const defaultErrorHandler = (err, req, res, next) => {
  errorLogger(err, req, res);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error occurred";
  const errorResponse = {
    status: statusCode,
    message,
  };
  return res.status(statusCode).json(errorResponse);
};
