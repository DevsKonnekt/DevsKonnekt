import { Router } from "express";
import {
  createPosts,
  deletePost,
  updatePost,
  getPosts,
  getPost,
  getPostsByAuthor,
  getMyBookmarkedPosts,
  bookmarkPost,
  unbookmarkPost,
  upVotePost,
  downVotePost,
} from "../controllers/posts.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const postsRoutes = Router();

postsRoutes
  .route("/posts")
  .post(createPosts, defaultErrorHandler)
  .get(getPosts, defaultErrorHandler);
postsRoutes
  .route("/posts/:id")
  .patch(updatePost, defaultErrorHandler)
  .get(getPost, defaultErrorHandler)
  .delete(deletePost, defaultErrorHandler);
postsRoutes.patch(
  "/posts/bookmark/:id/:userId",
  bookmarkPost,
  defaultErrorHandler,
);
postsRoutes.patch(
  "/posts/unbookmark/:id/:userId",
  unbookmarkPost,
  defaultErrorHandler,
);
postsRoutes.patch("/posts/upvote/:id/:userId", upVotePost, defaultErrorHandler);
postsRoutes.patch(
  "/posts/downvote/:id/:userId",
  downVotePost,
  defaultErrorHandler,
);
postsRoutes.get("/posts/author/:id", getPostsByAuthor, defaultErrorHandler);
postsRoutes.get(
  "/posts/:user/bookmarks",
  getMyBookmarkedPosts,
  defaultErrorHandler,
);

export default postsRoutes;
