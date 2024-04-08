import {
  getAllCompaniesService,
  registerCompanyService,
} from "../service/company.service.js";

export const registerCompanyController = async (req, res, next) => {
  try {
    const result = await registerCompanyService(req);
    res.status(201).json({ message: "company created", data: result });
  } catch (error) {
    next(error);
  }
};

export const getCompaniesController = async (req, res, next) => {
  try {
    const result = await getAllCompaniesService(req);
    res.status(200).json({ message: "all Companies", data: result });
  } catch (error) {
    next(error);
  }
};
