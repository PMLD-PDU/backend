import express from "express";
import {
  loginEmployeeController,
  registerEmployeeController,
} from "../controller/employee.controller.js";

const publicRouter = new express.Router();

// openapi 3 public router

//employee public router
/**
 * @openapi
 * /api/employee/register:
 *   post:
 *     tags:
 *       - Employee
 *     summary: Register new employee auto assign role as admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               name:
 *                 type: string
 *                 maxLength: 100
 *                 default: john doe
 *               email:
 *                 type: string
 *                 maxLength: 100
 *                 default: jd@pdu.com
 *               password:
 *                 type: string
 *                 pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"
 *               confirmPassword:
 *                 type: string
 *                 ref: password
 *     example:
 *       name: John Doe
 *       email: jd@mail.com
 *       password: Password123
 *       confirmPassword: Password123
 */
publicRouter.post("/api/employee/register", registerEmployeeController);
/**
 * @swagger
 * /api/employee/login:
 *
 */
publicRouter.post("/api/employee/login", loginEmployeeController);

export { publicRouter };
