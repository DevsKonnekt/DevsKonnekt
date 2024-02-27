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
  const { owner } = req.params;
  try {
    const posts = await Posts.find({
      bookmarks: { $in: [owner] },
    });
    const comments = await Comments.find({
      bookmarks: { $in: [owner] },
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
  const { owner } = req.params;
  try {
    await Posts.updateMany(
      { bookmarks: { $in: [owner] } },
      { $pull: { bookmarks: owner } },
    );
    await Comments.updateMany(
      { bookmarks: { $in: [owner] } },
      { $pull: { bookmarks: owner } },
    );
    return res.status(200).json({ message: "All bookmarks removed" });
  } catch (error) {
    next(error);
  }
};
