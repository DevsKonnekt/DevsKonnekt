/**
 * @module controllers/categories
 * @requires models/categories
 * @exports Category
 * @description This module contains the controllers for categories.
 */
import Category from "../models/categories.js";

/**
 * Creates a new category.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise} A promise that resolves to the created category.
 */
export async function createCategory(req, res, next) {
  // TODO: Implement this function.
  return res.send("Category created");
}

/**
 * Retrieves all categories from the database.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @return {Promise} A promise that resolves to the retrieved categories.
 */
export async function getCategories(req, res, next) {
  // TODO: Implement this function.
  return res.send("all categories");
}

/**
 * Retrieves a category by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Promise} The resolved promise with the category data.
 */
export async function getCategoryById(req, res, next) {
  // TODO: Implement this function.
  return res.send("Category found");
}

/**
 * Updates a category in the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 * @return {Promise} A promise that resolves to the updated category.
 */
export async function updateCategory(req, res, next) {
  // TODO: Implement this function.
  return res.send("Category updated");
}

/**
 * Deletes a category.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {function} next - The next middleware function.
 * @return {object} The deleted category.
 */
export async function deleteCategory(req, res, next) {
  // TODO: Implement this function.
  return res.send("Category deleted");
}
