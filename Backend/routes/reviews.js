/**
 * 
 * @module /routes/review
 * @requires express
 * @requires /controllers/review
 * @description Defines the user analytics router.
 * @exports reviewsRouter
 */
import { Router } from "express";
import { 
    averageRating,  
    getReview, 
    getReviews 
} from "../controllers/review.js";

const reviewsRouter = Router();

reviewsRouter.get("/reviews", getReviews);
reviewsRouter.get("/review/:id", getReview);
reviewsRouter.get("/reviews/:id", averageRating);

export default reviewsRouter;
