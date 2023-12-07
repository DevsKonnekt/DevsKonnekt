/**
 * @module controllers/comments
 * @requires models/comments
 * @exports createComment
 * @exports getComment
 * @exports getCommentsByPost
 * @exports updateComment
 * @exports deleteComment
 */
import {
  PropertyRequiredError,
  ValidationError,
} from "../middlewares/customError.js";
import Comment from "../models/comments.js";

/**
 * @name createComment
 * @method POST
 * @access Private
 * @description Creates a comment
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Comment object
 */
export const createComment = async (req, res, next) => {
  try {
    const commentData = req.body;
    // the user id is taken from the request object.
    // the following line shoulb be deleted when the authentication is implemented
    req.user = {
      _id: "5f7d8e3b46d3d6a4e8d4f0f5",
    };
    if (!req.user) {
      const error = new ValidationError(
        "You are not authorized to create a comment"
      );
      error.statusCode = 401;
      throw error;
    }
    if (!commentData || !commentData.post || !commentData.body) {
      const error = new ValidationError("Missing required properties");
      error.statusCode = 400;
      throw error;
    }
    commentData.author = req.user._id;
    const comment = await Comment.create(commentData);
    res.status(201).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name getComment
 * @method GET
 * @access Public
 * @description Gets a comment by id
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Comment object
 */
export const getComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      const error = new Error(`Comment not found with id: ${req.params.id}`);
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name updateComment
 * @method PUT
 * @access Private
 * @description Updates a comment by id
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Comment object
 */
export const updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    // the user id is taken from the request object.
    // the following line shoulb be deleted when the authentication is implemented
    req.user = {
      _id: "5f7d8e3b46d3d6a4e8d4f0f5",
    };
    if (!comment) {
      const error = new Error(`Comment not found with id: ${req.params.id}`);
      error.statusCode = 404;
      throw error;
    }
    if (!req.user) {
      const error = new Error("You are not authorized to update this comment");
      error.statusCode = 401;
      throw error;
    }
    if (!req.body.body) {
      const error = new PropertyRequiredError("body");
      error.statusCode = 400;
      throw error;
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      const error = new ValidationError(
        "You are not authorized to update this comment"
      );
      error.statusCode = 403;
      throw error;
    }
    comment.set(req.body);
    await comment.save();
    res.status(200).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name deleteComment
 * @method DELETE
 * @access Private
 * @description Deletes a comment by id
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Comment object
 */
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    // the user id is taken from the request object.
    // the following line shoulb be deleted when the authentication is implemented
    req.user = {
      _id: "5f7d8e3b46d3d6a4e8d4f0f5",
    };
    if (!comment) {
      const error = new Error(`Comment not found with id: ${req.params.id}`);
      error.statusCode = 404;
      throw error;
    }
    if (!req.user) {
      const error = new Error("You are not authorized to delete this comment");
      error.statusCode = 401;
      throw error;
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      const error = new Error("You are not authorized to delete this comment");
      error.statusCode = 403;
      throw error;
    }
    await Comment.deleteOne({ _id: req.params.id });
    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

/**
 * @name getCommentsByPost
 * @method GET
 * @access Public
 * @description Gets all comments of a post
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Array} - Array of Comment objects
 */
export const getCommentsByPost = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.id });
    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    next(error);
  }
};
