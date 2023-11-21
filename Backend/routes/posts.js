import { Router } from "express";
import {
  createPosts,
  deletePost,
  updatePost,
  getPosts,
  getPost,
  getPostsByAuthor,
} from "../controllers/posts.js";

const postsRoutes = Router();

postsRoutes.post("/", createPosts);
postsRoutes.patch("/:id", updatePost);
postsRoutes.get("/", getPosts);
postsRoutes.get("/:id", getPost);
postsRoutes.get("/author/:id", getPostsByAuthor);
postsRoutes.delete("/:id", deletePost);

export default postsRoutes;
