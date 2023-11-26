import winston, { createLogger, format, transports } from "winston";
import * as rotate from "winston-daily-rotate-file";
import path from "path";
import { mkdirSync } from "fs";
import process from "process";

const logsDir = path.join(process.cwd(), "logs");

mkdirSync(logsDir, { recursive: true });

const errorLog = path.join(logsDir, `errors-`);
const combinedLog = path.join(logsDir, `logs-`);
const exceptionLog = path.join(
  logsDir,
  `exceptions-${new Date().toISOString().split("T")[0]}.log`
);
const rejectionLog = path.join(
  logsDir,
  `rejections-${new Date().toISOString().split("T")[0]}.log`
);
const { combine, timestamp, json } = format;

const errorFileRotateTransport = new winston.transports.DailyRotateFile({
  filename: errorLog + "%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
  level: "error",
});
const combinedFileRotateTransport = new winston.transports.DailyRotateFile({
  filename: combinedLog + "%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxFiles: "30d",
});

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss SSS A",
    }),
    json(
      {
        space: 2,
      },
      {
        replacer: (key, value) => {
          if (key === "password") {
            return "********";
          }
          return value;
        },
      }
    )
  ),
  transports: [errorFileRotateTransport, combinedFileRotateTransport],
  exceptionHandlers: [new winston.transports.File({ filename: exceptionLog })],
  rejectionHandlers: [new winston.transports.File({ filename: rejectionLog })],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

/**
 * @function logging
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 * @returns {void}
 * @description logs the message to the logs file.
 */
export const logging = (req, res, next) => {
  logger.info(
    `${req.method}::${req.originalUrl}::${res.statusCode} - source: ${req.ip}`
  );
  next();
};

/**
 * @constant {object} winstonLoggerStream - The winston logger stream.
 * @param {string} message - The message to log.
 * @returns {void}
 * @description The winston logger stream.
 */
export const winstonLoggerStream = (logger.stream = {
  write: function (message) {
    if (message.includes("error")) {
      logger.error(message.trim());
    } else {
      logger.info(message.trim());
    }
  },
});

/**
 * @function errorLogger
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function.
 * @returns {void}
 * @description logs the error to the logs file
 */
export const errorLogger = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const errorResponse = {
    error: {
      message: message,
    },
  };
  logger.error(
    `${req?.method}::${req?.originalUrl}::${statusCode} - source: ${req?.ip} => ${errorResponse.error.message}`
  );
  next && next();
};

export default logger;
