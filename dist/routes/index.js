"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_routes_1 = __importDefault(require("./contact.routes"));
const project_routes_1 = __importDefault(require("./project.routes"));
const skill_routes_1 = __importDefault(require("./skill.routes"));
const tool_routes_1 = __importDefault(require("./tool.routes"));
const route = express_1.default.Router();
route.use("/contacts", contact_routes_1.default);
route.use("/tools", tool_routes_1.default);
route.use("/projects", project_routes_1.default);
route.use("/skills", skill_routes_1.default);
exports.default = route;
