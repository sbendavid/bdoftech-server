import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: ".env", debug: true, override: true });
}

interface Config {
  ENV: {
    PORT: number;
    MONGODB_URI?: string;
    NODE_ENV: string;
  };
}

const CONFIG: Config = {
  ENV: {
    PORT: parseInt(process.env.PORT ?? "5006", 10),
    MONGODB_URI: process.env.MONGODB_URI,
    NODE_ENV: process.env.NODE_ENV || "development",
  },
};

export default CONFIG;
