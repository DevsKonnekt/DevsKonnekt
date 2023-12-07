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
} from "../controllers/posts.js";

const postsRoutes = Router();

postsRoutes.route("/").post(createPosts).get(getPosts);
postsRoutes.route("/:id").patch(updatePost).get(getPost).delete(deletePost);
postsRoutes.patch("/:id/bookmark", bookmarkPost);
postsRoutes.patch("/:id/unbookmark", unbookmarkPost);
postsRoutes.get("/author/:id", getPostsByAuthor);
postsRoutes.get("/bookmarks", getMyBookmarkedPosts);

export default postsRoutes;
