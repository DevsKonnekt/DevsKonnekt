import mongoose from "mongoose";
import Posts from "../models/posts.js";

/**
 * @description Creates a new post
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const createPosts = async (req, res, next) => {
  const postData = req.body;
  // the following line is for testing purposes. Must be removed once authentication is implemented
  req.user = {
    _id: "60a6a8a0c7d4b7c9b4c8b1a1",
  };
  postData.author = req.user._id;

  if (!postData) {
    return res.status(400).json({
      message: "No data supplied!",
    });
  }
  if (!postData.author || !postData.title || !postData.body) {
    return res.status(400).json({
      message: "input required fields",
    });
  }

  try {
    const post = await Posts.create(postData);
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
 * @description Gets all posts
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPosts = async (req, res, next) => {
  try {
    const posts = await Posts.find(req.query).populate();
    if (posts.length > 0) {
      res.status(200).json({
        message: "Successful",
        posts,
      });
    } else {
      res.status(404).json({
        message: "No posts found",
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @description Gets a single post by id
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Posts.findById(id).exec();
    if (post) {
      res.status(404).json({
        message: "Post does not exist",
      });
    } else {
      res.status(200).json({
        message: "Successful",
        data: post,
      });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/**
 * @description Gets all posts by a single user
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const getPostsByAuthor = async (req, res, next) => {
  try {
    const id = req.params.author;
    const posts = await Posts.find({ author: id }).exec();
    if (posts.length > 0) {
      res.status(200).json({
        message: "Successful",
        data: posts,
      });
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
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const updatePost = async (req, res, next) => {
  // the following line is for testing purposes. Must be removed once authentication is implemented
  req.user = {
    _id: "60a6a8a0c7d4b7c9b4c8b1a1",
  };
  if (!req.body) {
    return res.status(400).json({
      message: "No data supplied!",
    });
  }
  if (!req.user._id) {
    return res.status(403).json({
      message: "You are not authorized to perform this action",
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
    if (post.author.toString() !== req.user._id) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    post.set(req.body);
    await post.save();
    return res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * @description Deletes a single post by id
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @param {Function} next The next middleware
 * @returns Object, status code and message
 */
export const deletePost = async (req, res, next) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  // the following line is for testing purposes. Must be removed once authentication is implemented
  req.user = {
    _id: "60a6a8a0c7d4b7c9b4c8b1a1",
  };
  if (!req.user._id) {
    return res.status(403).json({
      message: "You are not authorized to perform this action",
    });
  }
  try {
    const post = await Posts.findById(id);
    if (!post) {
      return res.status(404).json({
        message: "Post does not exist",
      });
    }
    // check if the user is the author of the post. Only the author can delete the post
    if (post.author.toString() !== req.user._id) {
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
