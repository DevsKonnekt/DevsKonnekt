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

bookmarksRouter.get("/bookmarks", getAllBookmarks);
bookmarksRouter.delete("/bookmarks", removeAllBookmarks);

export default bookmarksRouter;
