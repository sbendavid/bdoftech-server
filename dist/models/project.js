"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    smallImage: { type: String, required: true },
    largeImage: { type: String, required: true },
    url: { type: String },
    tool: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Tool" }],
}, { timestamps: true, versionKey: false });
exports.default = (0, mongoose_1.model)("Project", projectSchema);
