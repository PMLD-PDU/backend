import { prismaClient } from "../app/database.js";

export const getAllWellIdService = async (request) => {
  //get all well id from database
  return await prismaClient.well.findMany({
    select: {
      id: true,
    },
  });
};
