import {
  addEmployeeService,
  getCurrentEmployeeService,
  loginEmployeeService,
  registerEmployeeService,
} from "../service/employee.service.js";

export const registerEmployeeController = async (req, res, next) => {
  try {
    const result = await registerEmployeeService(req.body);
    res.status(201).json({ message: "Employee registered", data: result });
  } catch (error) {
    next(error);
  }
};

export const addEmployeeController = async (req, res, next) => {
  try {
    const result = await addEmployeeService(req.body);
    res.status(201).json({ message: "new employee added", data: result });
  } catch (error) {
    next(error);
  }
};

export const loginEmployeeController = async (req, res, next) => {
  try {
    const result = await loginEmployeeService(req.body);
    res.status(200).json({ message: "login success", data: result });
  } catch (error) {
    next(error);
  }
};

export const getCurrentEmployeeController = async (req, res, next) => {
  try {
    const result = await getCurrentEmployeeService(req);
    res.status(200).json({ message: "Current employee", data: result });
  } catch (error) {
    next(error);
  }
};
