import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response.error.js";
import {
  addCompanyValidation,
  registerCompanyValidation,
} from "../validator/company.validation.js";
import { validate } from "../validator/validation.js";

export const registerCompanyService = async (request) => {
  const company = validate(registerCompanyValidation, request);

  const { name, address } = company;

  const countCompany = await prismaClient.company.count({
    where: {
      name,
    },
  });

  if (countCompany > 0) {
    throw new ResponseError(400, "Company already exists");
  }

  return prismaClient.company.create({
    data: {
      name,
      address,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

export const addCompanyService = async (request) => {
  const company = validate(addCompanyValidation, request);

  const { userId, name, address } = company;

  const countCompany = await prismaClient.company.count({
    where: {
      name,
    },
  });

  if (countCompany > 0) {
    throw new ResponseError(400, "Company already exists");
  }

  //create new company and assign to user
  return prismaClient.company.create({
    data: {
      name,
      address,
      user: {
        connect: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      name: true,
    },
  });
};
