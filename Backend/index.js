// index.js
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import logger, { winstonLoggerStream } from "./config/logger.js";
import logger, { winstonLoggerStream } from "./config/logger.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/users.js";
import productServiceRouter from "./routes/productservice.js";
import { defaultErrorHandler } from "./middlewares/index.js";
import authRoutes from './routes/auth.js';
import categoriesRouter from './routes/categories.js';
import eventsRoutes from './routes/events.js';
import reviewsRouter from './routes/reviews.js';
import venuesRouter from './routes/venues.js';
import projectRouter from './routes/projects.js';


dotenv.config();

connectDB();

const app = express(); 
app.use(json());
app.use(cors());
app.use(morgan("combined", { stream: winstonLoggerStream }));
app.use(morgan("combined"));

// Routes
app.use("/api/v1/", defaultErrorHandler, authRoutes);
app.use("/api/v1/", defaultErrorHandler, categoriesRouter);
app.use("/api/v1/", defaultErrorHandler, eventsRoutes);
app.use("/api/v1/", defaultErrorHandler, reviewsRouter);
app.use("/api/v1/", defaultErrorHandler, usersRoutes);
app.use("/api/v1/", defaultErrorHandler, venuesRouter);
app.use("/api/v1//users", defaultErrorHandler, userRouter);
app.use("/a[i/v1/productservices", defaultErrorHandler, productServiceRouter);
app.use("/api/v1/projects", defaultErrorHandler, projectRouter);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
