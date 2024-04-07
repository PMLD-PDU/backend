import {
  getCurrentEmployeeService,
  loginEmployeeService,
  registerEmployeeService,
} from "../service/employee.service.js";

export const registerEmployeeController = async (req, res, next) => {
  try {
    // console.log(req.body);
    const result = await registerEmployeeService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const addEmployeeController = async (req, res) => {
  const { name, email, companyId } = req.body;
};

export const loginEmployeeController = async (req, res, next) => {
  try {
    const result = await loginEmployeeService(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getCurrentEmployeeController = async (req, res, next) => {
  try {
    const result = await getCurrentEmployeeService(req);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
