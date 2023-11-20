import logger from "../config/logger.js";
import productService from "../models/productservices.js";

/**
 * @module controllers/productservices.js
 * @requires models/productServices.js
 * @description Create a new product or service in the database
 * 
 */

export const createProductService = async (req, res) => {
  const productServiceData = req.body;
  if (Object.keys(productServiceData).length === 0) {
    return res.status(400).json({error: "The required data is missing."})
  }
  const createProductService = new productService(productServiceData);
  try {
    await createProductService.save();
    req.status(201).json(new productService);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Get all products or services from the database
 */
export const getAllProductServices = async (req, res) => {
  try {
    const productServices = await productService.find();
    res.status(200).json(productServices);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Get a single product or service from the database
 */
export const getProductService = async (req, res) => {
  const { id } = req.params;
  try {
    const productServiceData = await productService.findById(id);
    const productService = productServiceData._doc;
    res.status(200).json(productService);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Find and update a product or service in the database
 */
export const updateProductService = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProductService = await productService.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    res.status(200).json(updatedProductService);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @description Find and delete a product or service from the database
 */
export const deleteProductService = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.findByIdAndDelete(id);
    res.status(204).json();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

  