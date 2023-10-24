// index.js
import express, { json } from 'express';
import morgan from 'morgan';
import logger from './config/logger';
import apiRoutes from './routes/apiRoutes';
import customMiddleware from './middleware/customMiddleware';

require('dotenv').config();
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import categoriesRouter from './routes/categories.js';
import eventsRoutes from './routes/events.js';
import reviewsRouter from './routes/reviews.js';
import usersRoutes from './routes/users.js';
import venuesRouter from './routes/venues.js';

const app = express();
app.use(json());
app.use(morgan('combined', { stream: logger.stream }));

//Middlewares
app.use(customMiddleware);

// Routes
app.use('/api/v1', apiRoutes);
app.use("/api/v1/", defaultErrorHandler, authRoutes);
app.use("/api/v1/", defaultErrorHandler, categoriesRouter);
app.use("/api/v1/", defaultErrorHandler, eventsRoutes);
app.use("/api/v1/", defaultErrorHandler, reviewsRouter);
app.use("/api/v1/", defaultErrorHandler, usersRoutes);
app.use("/api/v1/", defaultErrorHandler, venuesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
