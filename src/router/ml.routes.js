import express from "express";
import { mlMiddleware } from "../middleware/ml.middleware.js";
import {
  getAllWellId,
  getRecordController,
  postNotificationController,
} from "../controller/ml.controller.js";

const mlRouter = express.Router();

/**
 * @openapi
 * /api/ml/well:
 *   get:
 *     tags:
 *       - Machine Learning
 *     summary: Get all well id
 *     security:
 *       - mlKeyAuth: []
 *
 *     responses:
 *       '200':
 *         description: Success get all well id
 *         content:
 *           application/json:
 *             example:
 *               message: Record found
 *               data:
 *                 - wellId: "1"
 *                 - wellId: "2"
 *                 - wellId: "3"
 *
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             example:
 *               message: Bad request
 *       '401':
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             example:
 *               message: Invalid credentials
 *       '500':
 *         description: Internal Server error
 *         content:
 *           application/json:
 *             example:
 *               message: Internal Server Error
 */
mlRouter.get("/api/ml/well", mlMiddleware, getAllWellId);
mlRouter.get("/api/ml/well/:id", mlMiddleware, getRecordController);
mlRouter.post("/api/ml/notification", mlMiddleware, postNotificationController);

export { mlRouter };
