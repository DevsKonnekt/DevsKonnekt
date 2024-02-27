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
  upVoteComment,
  downvoteComment,
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
  .route("/bookmark/:id/:userId")
  .patch(bookmarkComment, defaultErrorHandler);
commentsRouter
  .route("/unbookmark/:id/:userId")
  .patch(unbookmarkComment, defaultErrorHandler);
commentsRouter
  .route("/bookmarks")
  .get(getMyBookmarkedComments, defaultErrorHandler);
commentsRouter.patch("/upvote/:id/:userId", upVoteComment, defaultErrorHandler);
commentsRouter.patch(
  "/downvote/:id/:userId",
  downvoteComment,
  defaultErrorHandler,
);

export default commentsRouter;
