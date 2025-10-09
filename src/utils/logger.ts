import winston, { format } from "winston";
import CONFIG from "../config/config";

const { combine, printf, timestamp, label } = format;

const myFormat = printf(({ timestamp, level, message, label }) => {
  return `${timestamp} ${label} ${level}: ${message}`;
});

const logger = winston.createLogger({
  format: combine(
    label({ label: "ERROR" }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.errors({ stack: true }),
    myFormat
  ),
  transports: [
    // new winston.transports.File({ filename: "log/error.log", level: "error" }),
    // new winston.transports.File({ filename: "log/all.log" }),

    new winston.transports.Console({
      level: "error",
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

if (CONFIG.ENV.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.File({ filename: "log/error.log", level: "error" })
  );
  logger.add(new winston.transports.File({ filename: "log/all.log" }));
}

logger.exceptions.handle(
  new winston.transports.Console(),
  ...(CONFIG.ENV.NODE_ENV !== "production"
    ? [new winston.transports.File({ filename: "log/exceptions.log" })]
    : [])
);

logger.rejections.handle(
  new winston.transports.Console(),
  ...(CONFIG.ENV.NODE_ENV !== "production"
    ? [new winston.transports.File({ filename: "log/rejections.log" })]
    : [])
);

export default logger;
