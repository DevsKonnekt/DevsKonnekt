/**
 * @module controllers/bookmarks
 * @requires models/posts
 * @requires models/comments
 * @exports getAllBookmarks
 * @exports removeAllBookmarks
 */
import Posts from "../models/posts.js";
import Comments from "../models/comments.js";

/**
 * @name getAllBookmarks
 * @description Get all bookmarks
 * @access Private
 * @method GET
 * @memberof module:controllers/bookmarks
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @param {Function} next - Next middleware
 * @returns {Object} Array of bookmarked posts and comments
 */
export const getAllBookmarks = async (req, res, next) => {
  try {
    const { _id } = req.user;
    if (!_id) {
      const error = new Error("You are not authorized to view this page");
      error.statusCode = 401;
      throw error;
    }
    const posts = await Posts.find({
      bookmarks: { $in: [_id] },
    });
    const comments = await Comments.find({
      bookmarks: { $in: [_id] },
    });
    if (!posts && !comments) {
      const error = new Error("No bookmarks found");
      error.statusCode = 404;
      throw error;
    }
    const bookmarks = { posts, comments };
    return res.status(200).json({ bookmarks });
  } catch (error) {
    next(error);
  }
};

/**
 * @name removeAllBookmarks
 * @description Remove all bookmarks
 * @method DELETE
 * @access Private
 * @memberof module:controllers/bookmarks
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 * @param {Function} next - Next middleware
 * @returns {Object} Message
 */
export const removeAllBookmarks = async (req, res, next) => {
  try {
    const { _id } = req.user;
    if (!_id) {
      const error = new Error("You are not authorized to view this page");
      error.statusCode = 401;
      throw error;
    }
    await Posts.updateMany(
      { bookmarks: { $in: [_id] } },
      { $pull: { bookmarks: _id } }
    );
    await Comments.updateMany(
      { bookmarks: { $in: [_id] } },
      { $pull: { bookmarks: _id } }
    );
    return res.status(200).json({ message: "All bookmarks removed" });
  } catch (error) {
    next(error);
  }
};
