/**
 *
 * @module /routes/review
 * @requires express
 * @requires /controllers/review
 * @description Defines the user analytics router.
 * @exports reviewsRouter
 */
import { Router } from "express";
import { averageRating, getReview, getReviews } from "../controllers/review.js";
import { defaultErrorHandler } from "../middlewares/index.js";

const reviewsRouter = Router();

reviewsRouter.get("/reviews", getReviews, defaultErrorHandler);
reviewsRouter.get("/review/:id", getReview, defaultErrorHandler);
reviewsRouter.get("/reviews/:id", averageRating, defaultErrorHandler);

export default reviewsRouter;
