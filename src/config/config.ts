import dotenv from "dotenv";

dotenv.config({ path: ".env", debug: true, override: true });

interface Config {
  ENV: {
    PORT: number;
    MONGODB_URI?: string;
  };
}

const CONFIG: Config = {
  ENV: {
    PORT: parseInt(process.env.PORT ?? "5006", 10),
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default CONFIG;
