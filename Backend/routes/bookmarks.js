/**
 * @module routers/bookmarks
 * @requires express
 * @requires controllers/bookmarks
 * @exports bookmarksRouter
 */
import { Router } from "express";
import {
  getAllBookmarks,
  removeAllBookmarks,
} from "../controllers/bookmarks.js";

const bookmarksRouter = Router();

bookmarksRouter.get("/bookmarks/:owner", getAllBookmarks);
bookmarksRouter.delete("/bookmarks/:owner", removeAllBookmarks);

export default bookmarksRouter;
