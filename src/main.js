import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { logger } from "./app/logging.js";
import { privateRouter } from "./router/private.routes.js";
import { publicRouter } from "./router/public.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(privateRouter);
app.use(publicRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  logger.info(`App starting in port: ${port}`);
});
