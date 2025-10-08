import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import serverless from "serverless-http";
import CONFIG from "./config/config";
import connectDB from "./config/db";
import { errorMiddleware } from "./exceptions/errors";
import routes from "./routes/index";

const app = express();
const PORT = CONFIG.ENV.PORT;

app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);
app.use(morgan("dev"));
app.use(express.json());

connectDB();

app.get("/", (_req, res) => {
  res.send("API is running...");
});

app.use("/api/v1", routes);

app.use(errorMiddleware);

serverless(app);

app.listen(PORT, () => {
  console.log(`Server running locally at http://localhost:${PORT}`);
});
