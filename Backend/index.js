// index.js
import express, { json } from 'express';
import morgan from 'morgan';
import logger from './config/logger';
import apiRoutes from './routes/apiRoutes';
import customMiddleware from './middleware/customMiddleware';

require('dotenv').config();
import mongoose from 'mongoose';

const app = express();
app.use(json());
app.use(morgan('combined', { stream: logger.stream }));

app.use('/api', apiRoutes);
app.use(customMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
