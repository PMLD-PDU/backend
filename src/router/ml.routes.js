import express from "express";
import { mlMiddleware } from "../middleware/ml.middleware.js";
import {
  getAllWellId,
  getRecordController,
} from "../controller/ml.controller.js";

const mlRouter = express.Router();

mlRouter.get("/api/ml/well", mlMiddleware, getAllWellId);
mlRouter.get("/api/ml/well/:id", mlMiddleware, getRecordController);

export { mlRouter };
