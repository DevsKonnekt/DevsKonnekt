/**
 * @module routes/productService
 * @requires express
 * @requires controllers/productService
 * @description Routes for productService
 */
import { Router } from "express";
import {
  createProductService,
  getAllProductServices,
  getProductService,
  updateProductService,
  deleteProductService,
} from "../controllers/productservices.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const productServiceRouter = Router();

// const productServiceRouter = Router();
/**
 * @name POST / productService
 * @description Create a new product/service
 * @memberof module:routes/productService
 */

productServiceRouter.post("/", createProductService, defaultErrorHandler);

/**
 * @name Get /productservices
 * @description get  all product and services
 * @memberof module:routes/productService
 */
productServiceRouter.get("/", getAllProductServices, defaultErrorHandler);

/**
 * @name GET /productService/:Id
 * @description /Get a single productService
 * @memberof module:routes/productService
 */
productServiceRouter.get("/:id", getProductService, defaultErrorHandler);

/**
 * @name PUT /productService/:id
 * @description Update a user
 * @memberof module:routes/productService
 */

productServiceRouter.put("/:id", updateProductService, defaultErrorHandler);

/**
 * @name DELETE /productService/:id
 * @description Delete a productService
 * @memberof module:routes/productService
 */

productServiceRouter.delete("/:id", deleteProductService, defaultErrorHandler);
export default productServiceRouter;
