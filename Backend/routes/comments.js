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
  bookmarkComment,
  unbookmarkComment,
  getMyBookmarkedComments,
} from "../controllers/comments.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const commentsRouter = express.Router();

commentsRouter.route("/").post(createComment, defaultErrorHandler);
commentsRouter
  .route("/:id")
  .get(getComment, defaultErrorHandler)
  .patch(updateComment, defaultErrorHandler)
  .delete(deleteComment, defaultErrorHandler);
commentsRouter.route("/post/:id").get(getCommentsByPost, defaultErrorHandler);
commentsRouter
  .route("/:id/bookmark")
  .patch(bookmarkComment, defaultErrorHandler);
commentsRouter
  .route("/:id/unbookmark")
  .patch(unbookmarkComment, defaultErrorHandler);
commentsRouter
  .route("/bookmarks")
  .get(getMyBookmarkedComments, defaultErrorHandler);

export default commentsRouter;
