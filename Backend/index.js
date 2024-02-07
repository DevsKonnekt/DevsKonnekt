// index.js
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import logger, { winstonLoggerStream } from "./config/logger.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/users.js";
import profileRouter from "./routes/profile.js";
import productServiceRouter from "./routes/productservice.js";
import { defaultErrorHandler } from "./middlewares/index.js";
import categoriesRouter from "./routes/categories.js";
import eventsRoutes from "./routes/events.js";
import reviewsRouter from "./routes/reviews.js";
import venuesRouter from "./routes/venues.js";
import projectRouter from "./routes/projects.js";
import postsRoutes from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";
import bookmarksRouter from "./routes/bookmarks.js";
import skillsRouter from "./routes/skills.js";

dotenv.config();

connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("combined", { stream: winstonLoggerStream }));
app.use(morgan("combined"));

// Routes
app.use("/api/v1/", defaultErrorHandler, categoriesRouter);
app.use("/api/v1/", defaultErrorHandler, eventsRoutes);
app.use("/api/v1/", defaultErrorHandler, reviewsRouter);
app.use("/api/v1/", defaultErrorHandler, venuesRouter);
app.use("/api/v1/", defaultErrorHandler, profileRouter);
app.use("/api/v1/", defaultErrorHandler, skillsRouter);
app.use("/api/v1/users/", defaultErrorHandler, userRouter);
app.use("/api/v1/productservices/", defaultErrorHandler, productServiceRouter);
app.use("/api/v1/projects/", defaultErrorHandler, projectRouter);
app.use("/api/v1/posts/", defaultErrorHandler, postsRoutes);
app.use("/api/v1/comments/", defaultErrorHandler, commentsRouter);
app.use("/api/v1/bookmarks/", defaultErrorHandler, bookmarksRouter);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
