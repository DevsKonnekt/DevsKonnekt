/* eslint-disable indent */
import mongoose from "mongoose";
import Posts from "../models/posts.js";
import Profile from "../models/profiles.js";
import { ValidationError } from "../middlewares/customError.js";

/**
 * @description Creates a new post
 * @access Private
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const createPosts = async (req, res, next) => {
  const postData = req.body;
  if (!postData || !postData.author || !postData.title || !postData.body) {
    const error = new ValidationError("Missing required properties");
    error.statusCode = 400;
    return next(error);
  }

  try {
    const post = await Posts.create(postData);
    if (!post) {
      const error = new Error("Post not created");
      error.statusCode = 500;
      throw error;
    }
    const profile = await Profile.findOne({ user: postData.author });
    profile.posts.push(post._id);
    await profile.save();
    return res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @description Gets all posts.
 * @description The posts can be filtered by title, body and tags
 * @description The posts are paginated, the default limit is 10 and the default page is 1
 * @description The posts can be sorted by createdAt and title in ascending or descending order
 * @description The posts are populated with comments, author and votes
 * @access Public
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPosts = async (req, res, next) => {
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
        // { tags: { $regex: searchParam, $options: "i" } },
      ]
    : [{}];
  try {
    let posts = await Posts.find({
      $or: conditions,
    })
      .sort({ [sortField]: sortOrder })
      .limit(parseInt(limit, 10))
      .skip((parseInt(page, 10) - 1) * parseInt(limit, 10))
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "firstName lastName username profilePicture _id",
        },
      })
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id",
      })
      .populate({
        path: "votes",
        populate: {
          path: "user",
          select: "firstName lastName username profilePicture _id",
        },
      });
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

/**
 * @description Gets a single post by id
 * @access Public
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Posts.findById(id)
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "firstName lastName username profilePicture _id",
        },
      })
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id",
      })
      .populate({
        path: "votes",
        populate: {
          path: "user",
          select: "firstName lastName username profilePicture _id",
        },
      });
    if (post) {
      res.status(404).json({
        message: "Post does not exist",
      });
    } else {
      res.status(200).json(post);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/**
 * @description Gets all posts by a single user
 * @access Public
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPostsByAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const posts = await Posts.find({ author: id })
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "firstName lastName username profilePicture _id",
        },
      })
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id",
      })
      .populate({
        path: "votes",
        populate: {
          path: "user",
          select: "firstName lastName username profilePicture _id",
        },
      });
    if (posts.length > 0) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({
        message: "No posts found",
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/**
 * @description Updates a single post by id
 * @access Private
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const updatePost = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({
      message: "No data supplied!",
    });
  }
  try {
    const id = req.params.id;

    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).json({
        message: "Post does not exist",
      });
    }
    // check if the user is the author of the post. Only the author can update the post
    if (post.author.toString() !== req.body.author.toString()) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    post.set(req.body);
    await post.save();
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @description Deletes a single post by id
 * @access Private
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const deletePost = async (req, res, next) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  try {
    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).json({
        message: "Post does not exist",
      });
    }
    // check if the user is the author of the post. Only the author can delete the post
    if (post.author.toString() !== req.body.author.toString()) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    await Posts.deleteOne({ _id: id });
    return res.status(204).json({});
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @name bookmarkPost
 * @method POST
 * @access Private
 * @description Bookmark a post.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the post is bookmarked successfully.
 */
export const bookmarkPost = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const post = await Posts.findById(id);
    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }
    if (post.bookmarks.includes(userId)) {
      const error = new Error("You have already bookmarked this post");
      error.statusCode = 400;
      throw error;
    }
    await Posts.updateOne({ _id: id }, { $push: { bookmarks: userId } });
    return res.status(200).json({ message: "Post bookmarked successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @name unbookmarkPost
 * @method PATCH
 * @access Private
 * @description Unbookmark a post.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the post is unbookmarked successfully.
 */
export const unbookmarkPost = async (req, res, next) => {
  const { id, userId } = req.params;
  try {
    const post = await Posts.findById(id);
    if (!post) {
      const error = new Error("Post not found");
      error.statusCode = 404;
      throw error;
    }
    if (!post.bookmarks.includes(userId)) {
      const error = new Error("You have not bookmarked this post");
      error.statusCode = 400;
      throw error;
    }
    await Posts.updateOne({ _id: id }, { $pull: { bookmarks: userId } });
    return res.status(200).json({ message: "Post unbookmarked successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @name getMyBookmarkedPosts
 * @method GET
 * @access Private
 * @description Get all bookmarked posts of a user.
 * @memberof module:controllers/posts
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware
 * @returns {Promise<void>} - A promise that resolves with the bookmarked posts of the user.
 */
export const getMyBookmarkedPosts = async (req, res, next) => {
  const { user } = req.params;
  try {
    const posts = await Posts.find({
      bookmarks: { $in: [user] },
    })
      .populate({
        path: "comments",
        populate: {
          path: "author",
          select: "firstName lastName username profilePicture _id",
        },
      })
      .populate({
        path: "author",
        select: "firstName lastName username profilePicture _id",
      })
      .populate({
        path: "votes",
      });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
