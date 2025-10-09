"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config({ path: ".env", debug: true, override: true });
}
const CONFIG = {
    ENV: {
        PORT: parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "5006", 10),
        MONGODB_URI: process.env.MONGODB_URI,
        NODE_ENV: process.env.NODE_ENV || "development",
    },
};
exports.default = CONFIG;
