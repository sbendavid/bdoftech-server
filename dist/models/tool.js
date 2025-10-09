"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const toolSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { timestamps: true, versionKey: false });
exports.default = (0, mongoose_1.model)("Tool", toolSchema);
