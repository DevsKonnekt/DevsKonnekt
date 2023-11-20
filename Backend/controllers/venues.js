/**
 * @module controllers/venues
 * @requires models/venues
 */
import Venue from "../models/venues.js";

/**
 * @function getVenues
 * @description Get all venues
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {object} - Array of venues
 * @throws Will throw an error if one of the required fields is missing
 */
export const getVenues = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("All Venues");
};

/**
 * @function createVenue
 * @description Create a new venue
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {object} - New venue
 * @throws Will throw an error if one of the required fields is missing
 */
export const createVenue = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("Venue created");
};

/**
 * @function getVenue
 * @description Get a venue by id
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {object} - Venue
 * @throws Will throw an error if venue is not found
 */
export const getVenue = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("Venue found");
};

/**
 * @function updateVenue
 * @description Update a venue by id
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {object} - Updated venue
 * @throws Will throw an error if venue is not found
 */
export const updateVenue = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("Venue updated");
};

/**
 * @function deleteVenue
 * @description Delete a venue by id
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {object} - Empty object
 * @throws Will throw an error if venue is not found
 */
export const deleteVenue = async (req, res, next) => {
  // TODO: Implement this function.
  return res.send("Venue deleted");
};
