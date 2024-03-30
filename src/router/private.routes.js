import express from "express";
import { registerCompanyController } from "../controller/company.controller.js";

const privateRouter = new express.Router();

privateRouter.post("/api/company", registerCompanyController);

export { privateRouter };
