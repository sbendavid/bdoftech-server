"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config/config"));
const db_1 = __importDefault(require("./config/db"));
const errors_1 = require("./exceptions/errors");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const PORT = config_1.default.ENV.PORT;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
(0, db_1.default)();
app.get("/", (_req, res) => {
    res.send("API is running...");
});
app.use("/api/v1", index_1.default);
app.use(errors_1.errorMiddleware);
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running locally at http://localhost:${PORT}`);
    });
}
