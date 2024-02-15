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

const postsRoutes = Router();

postsRoutes.route("/posts").post(createPosts).get(getPosts);
postsRoutes
  .route("/posts/:id")
  .patch(updatePost)
  .get(getPost)
  .delete(deletePost);
postsRoutes.patch("/posts/bookmark/:id/:userId", bookmarkPost);
postsRoutes.patch("/posts/unbookmark/:id/:userId", unbookmarkPost);
postsRoutes.patch("/posts/upvote/:id/:userId", upVotePost);
postsRoutes.patch("/posts/downvote/:id/:userId", downVotePost);
postsRoutes.get("/posts/author/:id", getPostsByAuthor);
postsRoutes.get("/posts/:user/bookmarks", getMyBookmarkedPosts);

export default postsRoutes;
