import { createLogger, format, transports } from "winston";
import path from "path";
import { mkdirSync } from "fs";
import process from "process";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const logsDir = path.join(__dirname, "logs");

mkdirSync(logsDir, { recursive: true });

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
    ),
    transports: [
        new transports.File({
            // eslint-disable-next-line no-undef
            filename: path.join(logsDir, "error.log"), // Specify the directory for log files
            level: "error",
        }),
        // eslint-disable-next-line no-undef
        new transports.File({ filename: path.join(logsDir, "combined.log") }),
    ],

});

if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
    }));
}

export default logger;