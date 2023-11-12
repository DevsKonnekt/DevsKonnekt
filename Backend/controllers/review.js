/**
 *
 * @function createReview
 * @description This function create an event review
 * @param {Object} req - The request
 * @param {Object} res - The response
 * @param {Function} next - The next middleware
 * @returns {Object}
 * @throws {Object}
 */

export const getReviews = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Reviews found");
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @function getReview
 * @description This function get an event review
 * @param {Object} req - The request
 * @param {Object} res - The response
 * @param {Function} next - The next middleware
 * @returns {Object}
 * @throws {Object}
 */
export const getReview = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Review found");
  } catch (error) {
    next(error);
  }
};

/**
 * @function averageRating
 * @description This function calculate average event reviews
 * @param {Object} req - The request
 * @param {Object} res - The response
 * @param {Function} next - The next middleware
 * @returns {Object}
 * @throws {Object}
 */
export const averageRating = async (req, res, next) => {
  // TODO: Implement this function.
  try {
    return res.send("Average rating found");
  } catch (error) {
    next(error);
  }
};
