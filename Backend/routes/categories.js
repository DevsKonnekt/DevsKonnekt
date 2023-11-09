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

const categoriesRouter = Router();

categoriesRouter.get("/categories/", getCategories);
categoriesRouter.post("/categories/", createCategory);
categoriesRouter.patch("/categories/:id/", updateCategory);
categoriesRouter.delete("/categories/:id/", deleteCategory);

export default categoriesRouter;
