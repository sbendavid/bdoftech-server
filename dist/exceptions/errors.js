"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const statusCodes_1 = __importDefault(require("../constants/statusCodes"));
const errorMiddleware = (err, req, res, next) => {
    // logger.error(err.message, { stack: err.stack });
    //   console.error(err.stack);
    {
        const statusCode = err.status || statusCodes_1.default.INTERNAL_SERVER_ERROR;
        const message = err.message || "Internal Server Error";
        const details = err.details || null;
        res
            .status(statusCode)
            .json({ status: statusCode, success: false, message, details });
    }
    next(); // Check this next
};
exports.errorMiddleware = errorMiddleware;
