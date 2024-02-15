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
import categoriesRouter from "./routes/categories.js";
import eventsRoutes from "./routes/events.js";
import reviewsRouter from "./routes/reviews.js";
import projectRouter from "./routes/projects.js";
import postsRoutes from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";
import bookmarksRouter from "./routes/bookmarks.js";
import skillsRouter from "./routes/skills.js";
import votesRouter from "./routes/vote.js";

dotenv.config();

connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("combined", { stream: winstonLoggerStream }));
app.use(morgan("combined"));

// Routes
app.use("/api/v1/", categoriesRouter);
app.use("/api/v1/", eventsRoutes);
app.use("/api/v1/", reviewsRouter);
app.use("/api/v1/", venuesRouter);
app.use("/api/v1/", profileRouter);
app.use("/api/v1/", skillsRouter);
app.use("/api/v1/", bookmarksRouter);
app.use("/api/v1/", postsRoutes);
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/votes/", votesRouter);
app.use("/api/v1/productservices/", productServiceRouter);
app.use("/api/v1/projects/", projectRouter);
app.use("/api/v1/comments/", commentsRouter);


// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
