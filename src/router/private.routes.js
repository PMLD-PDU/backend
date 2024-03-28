import express from "express";
import { register } from "../service/company.service.js";

const privateRouter = new express.Router();

privateRouter.post("/api/company", register);

export { privateRouter };
