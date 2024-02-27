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
import { defaultErrorHandler } from "../middlewares/index.js";

const bookmarksRouter = Router();

bookmarksRouter.get("/bookmarks/:owner", getAllBookmarks, defaultErrorHandler);
bookmarksRouter.delete(
  "/bookmarks/:owner",
  removeAllBookmarks,
  defaultErrorHandler,
);

export default bookmarksRouter;
