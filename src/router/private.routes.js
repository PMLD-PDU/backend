import express from "express";
import {
  getCompaniesController,
  getCompanyByIdController,
  registerCompanyController,
} from "../controller/company.controller.js";
import {
  addEmployeeController,
  getCurrentEmployeeController,
  loginEmployeeController,
  registerEmployeeController,
} from "../controller/employee.controller.js";
import { authMiddleWare } from "../middleware/auth.middleware.js";
import { createPlaceController } from "../controller/place.controller.js";

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
privateRouter.get("/api/company", authMiddleWare, getCompaniesController);
privateRouter.get("/api/company/:id", authMiddleWare, getCompanyByIdController);
privateRouter.get("/api/company/:id/employee");
privateRouter.post(
  "/api/company/:id/employee",
  authMiddleWare,
  addEmployeeController
);

//place routes
privateRouter.post(
  "/api/company/:id/place",
  authMiddleWare,
  createPlaceController
);

//well routes

export { privateRouter };
