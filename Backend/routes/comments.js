/**
 * @module routes/comments
 * @requires express
 * @requires controllers/comments
 * @exports commentsRouter
 */
import express from "express";
import {
  createComment,
  getComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
} from "../controllers/comments.js";

const commentsRouter = express.Router();

commentsRouter.route("/").post(createComment);
commentsRouter.route("/:id").get(getComment).patch(updateComment).delete(deleteComment);
commentsRouter.route("/post/:id").get(getCommentsByPost);

export default commentsRouter;
