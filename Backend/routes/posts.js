import { Router } from "express";
import { createPosts, deletePost, updatePost } from "../controllers/posts.js";

const postsRoutes = Router();

postsRoutes.post("/posts", createPosts);
postsRoutes.patch("/posts", updatePost);
postsRoutes.delete("/posts", deletePost)
export default postsRoutes;
