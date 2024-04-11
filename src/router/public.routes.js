import express from "express";
import {
  loginEmployeeController,
  registerEmployeeController,
} from "../controller/employee.controller.js";

const publicRouter = new express.Router();

// openapi 3 public router

//employee public router
/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */

publicRouter.post("/api/employee/register", registerEmployeeController);
publicRouter.post("/api/employee/login", loginEmployeeController);

export { publicRouter };
