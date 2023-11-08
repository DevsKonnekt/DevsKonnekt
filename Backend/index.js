// index.js
import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import { connectDB } from './config/db.js';
import userRouter from './routes/users.js';


dotenv.config();

connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(morgan('combined'));

app.use('/users', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
