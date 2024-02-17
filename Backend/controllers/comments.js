/**
 * @module controllers/comments
 * @requires models/comments
 * @requires models/posts
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
import Post from "../models/posts.js";
import Vote from "../models/votes.js";

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
    if (!commentData || !commentData.body || !commentData.author) {
      const error = new ValidationError("Missing required properties");
      error.statusCode = 400;
      throw error;
    }
    if (commentData.post) {
      const post = await Post.findById(commentData.post);
      if (!post) {
        const error = new Error("Post not found");
        error.statusCode = 404;
        throw error;
      }
      const comment = await Comment.create(commentData);
      post.comments.push(comment._id);
      await post.save();
      res.status(201).json(comment);
    } else if (commentData.comment) {
      const parentComment = await Comment.findById(commentData.comment);
      if (!parentComment) {
        const error = new Error("Comment not found");
        error.statusCode = 404;
        throw error;
      }
      const comment = await Comment.create(commentData);
      parentComment.comments.push(comment._id);
      await parentComment.save();
      res.status(201).json(comment);
    }
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
    const comment = await Comment.findById(req.params.id)
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id clerkId",
      })
      .populate({
        path: "votes",
        select: "voteType user",
      })
      .populate({
        path: "comments",
        populate: [
          {
            path: "author",
            select: "firstName lastName username profilePicture _id clerkId",
          },
          {
            path: "votes",
            select: "voteType user",
          },
        ],
      });

    res.status(200).json(comment);
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
    const comments = await Comment.find({ post: req.params.id })
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id",
      })
      .populate({
        path: "votes",
        select: "voteType user",
      });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

/**
 * @name bookmarkComment
 * @method PATCH
 * @access Private
 * @description Bookmarks a comment
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Message object
 */
export const bookmarkComment = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }

    if (comment.bookmarks.includes(userId)) {
      const error = new Error("Comment already bookmarked");
      error.statusCode = 400;
      throw error;
    }
    comment.bookmarks.push(userId);
    await comment.save();
    res.status(200).json({
      message: "Comment bookmarked",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name unbookmarkComment
 * @method PATCH
 * @access Private
 * @description Unbookmarks a comment
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Message object
 */
export const unbookmarkComment = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }
    if (!comment.bookmarks.includes(userId)) {
      const error = new Error("Comment not bookmarked");
      error.statusCode = 400;
      throw error;
    }
    comment.bookmarks.pull(userId);
    await comment.save();
    res.status(200).json({
      message: "Comment unbookmarked",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name getMyBookmarkedComments
 * @method GET
 * @access Private
 * @description Gets all comments bookmarked by the user
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns Array - Array of Comment objects
 */
export const getMyBookmarkedComments = async (req, res, next) => {
  try {
    // the user id is taken from the request object.
    // the following line shoulb be deleted when the authentication is implemented
    req.user = {
      _id: "5f7d8e3b46d3d6a4e8d4f0f5",
    };
    if (!req.user) {
      const error = new Error(
        "You are not authorized to get your bookmarked comments"
      );
      error.statusCode = 401;
      throw error;
    }
    const comments = await Comment.find({
      bookmarks: { $in: [req.user._id] },
    });
    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @name upvoteComment
 * @method PATCH
 * @access Private
 * @description Upvotes a comment
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Message object
 */
export const upVoteComment = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }
    const vote = await Vote.findOne({
      comment: id,
      user: userId,
      voteType: "upvote",
    });
    if (vote) {
      await Vote.deleteOne({ comment: id, user: userId });
      comment.votes.pull(vote._id);
      await comment.save();
      return res.status(200).json({ message: "Vote removed successfully" });
    }
    const downVote = await Vote.findOne({
      comment: id,
      user: userId,
      voteType: "downvote",
    });
    if (downVote) {
      const error = new Error("You cannot upvote a comment you have downvoted");
      error.statusCode = 400;
      throw error;
    }

    const newVote = await Vote.create({
      comment: id,
      user: userId,
      voteType: "upvote",
    });
    comment.votes.push(newVote._id);
    await comment.save();
    return res.status(200).json({ message: "Comment upvoted successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * @name downvoteComment
 * @method PATCH
 * @access Private
 * @description Downvotes a comment
 * @memberof module:controllers/comments
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Object} - Message object
 */
export const downvoteComment = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      const error = new Error("Comment not found");
      error.statusCode = 404;
      throw error;
    }
    const vote = await Vote.findOne({
      comment: id,
      user: userId,
      voteType: "downvote",
    });
    if (vote) {
      await Vote.deleteOne({ comment: id, user: userId });
      comment.votes.pull(vote._id);
      await comment.save();
      return res.status(200).json({ message: "Vote removed successfully" });
    }
    const upVote = await Vote.findOne({
      comment: id,
      user: userId,
      voteType: "upvote",
    });
    if (upVote) {
      const error = new Error("You cannot downvote a comment you have upvoted");
      error.statusCode = 400;
      throw error;
    }
    const newVote = await Vote.create({
      comment: id,
      user: userId,
      voteType: "downvote",
    });
    comment.votes.push(newVote._id);
    await comment.save();
    return res.status(200).json({ message: "Comment downvoted successfully" });
  } catch (error) {
    next(error);
  }
};
