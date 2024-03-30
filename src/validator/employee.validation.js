import Joi from "joi";

const registerEmployeeValidation = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
  password: Joi.string().min(6).required(),
});

const addEmployeeValidation = Joi.object({
  companyId: Joi.string().max(50).required(),
  name: Joi.string().max(100).required(),
  email: Joi.string().max(100).required(),
  //password minimum one number, one lowercase and one uppercase letter, at least six characters
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})"))
    .required(),
});

const loginEmployeeValidation = Joi.object({
  email: Joi.string().max(100).required(),
  password: Joi.string().required(),
});

export {
  registerEmployeeValidation,
  addEmployeeValidation,
  loginEmployeeValidation,
};
