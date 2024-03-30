import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response.error.js";
import { registerCompanyValidation } from "../validator/company.validation.js";
import { validate } from "../validator/validation.js";

export const registerCompanyService = async (request) => {
  const company = validate(registerCompanyValidation, request);

  const { userId, name, address } = company;

  const countCompany = await prismaClient.company.count({
    where: {
      name,
    },
  });

  if (countCompany > 0) {
    throw new ResponseError(400, "Company already exists");
  }

  // Create a new company and associate it with the user
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

export const getCompanyByIdService = async (id) => {};

export const getAllCompaniesService = async () => {};

export const updateCompanyService = async (request) => {};

export const deleteCompanyService = async (id) => {};
