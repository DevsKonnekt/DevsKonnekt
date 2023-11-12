// index.js
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./config/logger.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/users.js";
import productServiceRouter from "./routes/productservice.js";
import authRoutes from "./routes/auth.js";
import categoriesRouter from "./routes/categories.js";
import eventsRoutes from "./routes/events.js";
import reviewsRouter from "./routes/reviews.js";
import venuesRouter from "./routes/venues.js";
import postsRoutes from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";

dotenv.config();

connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(morgan("combined"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/events", eventsRoutes);
app.use("/api/v1/reviews", reviewsRouter);
app.use("/api/v1/venues", venuesRouter);
app.use("/api/v1//users", userRouter);
app.use("/a[i/v1/productservices", productServiceRouter);
app.use("/api/v1/posts", postsRoutes);
app.use("/api/v1/comments", commentsRouter);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
