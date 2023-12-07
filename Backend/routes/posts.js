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

postsRoutes.route("/").post(createPosts).get(getPosts);
postsRoutes.route("/:id").patch(updatePost).get(getPost).delete(deletePost);
postsRoutes.get("/author/:id", getPostsByAuthor);

export default postsRoutes;
