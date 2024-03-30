import { registerCompanyService } from "../service/company.service.js";

export const registerCompanyController = async (req, res, next) => {
  try {
    const result = await registerCompanyService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
