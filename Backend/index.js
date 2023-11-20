// index.js
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import logger, { winstonLoggerStream } from "./config/logger.js";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/users.js";
import productServiceRouter from "./routes/productservice.js";
import { defaultErrorHandler } from "./middlewares/index.js";

dotenv.config();

connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(morgan("combined", { stream: winstonLoggerStream }));
app.use(morgan("combined"));

app.use("/users", defaultErrorHandler, userRouter);
app.use("/productservices", defaultErrorHandler, productServiceRouter);

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
