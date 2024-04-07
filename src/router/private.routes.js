import express from "express";
import { registerCompanyController } from "../controller/company.controller.js";
import {
  getCurrentEmployeeController,
  loginEmployeeController,
  registerEmployeeController,
} from "../controller/employee.controller.js";
import { authMiddleWare } from "../middleware/auth.middleware.js";

const privateRouter = new express.Router();

//employee routes
privateRouter.post("/api/employee/register", registerEmployeeController);
privateRouter.post("/api/employee/login", loginEmployeeController);
//private employee  routes
privateRouter.get(
  "/api/employee/profile",
  authMiddleWare,
  getCurrentEmployeeController
);
privateRouter.get("/api/employee/:id");
privateRouter.get("/api/employee");

//company routes
privateRouter.post("/api/company", authMiddleWare, registerCompanyController);
privateRouter.get("/api/company/");

//place routes

//well routes

export { privateRouter };
