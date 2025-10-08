import type { NextFunction, Request, Response } from "express";
import statusCodes from "../constants/statusCodes";
import logger from "../utils/logger";
import type HttpException from "./httpException";

export const errorMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(err.message, { stack: err.stack });
  //   console.error(err.stack);
  {
    const statusCode = err.status || statusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";
    const details = err.details || null;
    res
      .status(statusCode)
      .json({ status: statusCode, success: false, message, details });
  }
  next(); // Check this next
};
