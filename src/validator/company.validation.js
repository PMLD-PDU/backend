import Joi from "joi";

const addCompanyValidation = Joi.object({
  userId: Joi.string().max(50).required(),
  name: Joi.string().max(100).required(),
  address: Joi.string().max(400).required(),
});

const registerCompanyValidation = Joi.object({
  name: Joi.string().max(100).required(),
  address: Joi.string().max(400).required(),
});

export { addCompanyValidation, registerCompanyValidation };
