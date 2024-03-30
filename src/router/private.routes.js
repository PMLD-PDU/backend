import express from "express";
import { registerCompanyController } from "../controller/company.controller.js";
import {
  loginEmployeeController,
  registerEmployeeController,
} from "../controller/employee.controller.js";

const privateRouter = new express.Router();

//employee routes
privateRouter.post("/api/employee/register", registerEmployeeController);
privateRouter.post("/api/employee/login", loginEmployeeController);

privateRouter.post("/api/company", registerCompanyController);

export { privateRouter };
