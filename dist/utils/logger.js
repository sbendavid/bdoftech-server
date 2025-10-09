"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importStar(require("winston"));
const config_1 = __importDefault(require("../config/config"));
const { combine, printf, timestamp, label } = winston_1.format;
const myFormat = printf(({ timestamp, level, message, label }) => {
    return `${timestamp} ${label} ${level}: ${message}`;
});
const logger = winston_1.default.createLogger({
    format: combine(label({ label: "ERROR" }), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.errors({ stack: true }), myFormat),
    transports: [
        new winston_1.default.transports.File({ filename: "log/error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "log/all.log" }),
        new winston_1.default.transports.Console({
            level: "error",
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
        }),
    ],
});
if (config_1.default.ENV.NODE_ENV !== "production") {
    logger.add(new winston_1.default.transports.File({ filename: "log/error.log", level: "error" }));
    logger.add(new winston_1.default.transports.File({ filename: "log/all.log" }));
}
logger.exceptions.handle(new winston_1.default.transports.Console(), ...(config_1.default.ENV.NODE_ENV !== "production"
    ? [new winston_1.default.transports.File({ filename: "log/exceptions.log" })]
    : []));
logger.rejections.handle(new winston_1.default.transports.Console(), ...(config_1.default.ENV.NODE_ENV !== "production"
    ? [new winston_1.default.transports.File({ filename: "log/rejections.log" })]
    : []));
exports.default = logger;
