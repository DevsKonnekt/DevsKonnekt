/**
 * @module routes/categories
 * @requires express
 * @requires controllers/categories
 * @description Defines the categories router.
 * @exports categoriesRouter
 */
import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories/", getCategories, defaultErrorHandler);
categoriesRouter.post("/categories/", createCategory, defaultErrorHandler);
categoriesRouter.patch("/categories/:id/", updateCategory, defaultErrorHandler);
categoriesRouter.delete(
  "/categories/:id/",
  deleteCategory,
  defaultErrorHandler,
);

export default categoriesRouter;
