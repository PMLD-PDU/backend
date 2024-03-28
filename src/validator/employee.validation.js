import Joi from "joi";

const registerEmployeeValidation = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
  companyId: Joi.string().max(50).required(),
});

const addEmployeeValidation = Joi.object({
  companyId: Joi.string().max(50).required(),
  name: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
});

export { registerEmployeeValidation, addEmployeeValidation };
