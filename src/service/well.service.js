import { prismaClient } from "../app/database.js";

export const createWellService = async (request) => {
  // check company and place
  const company = await prismaClient.company.findUnique({
    where: {
      id: request.companyId,
    },
  });

  const place = await prismaClient.place.findUnique({
    where: {
      id: request.placeId,
    },
  });

  if (!company || !place) return null;

  return prismaClient.well.create({
    data: {
      placeId: request.placeId,
      name: request.name,
      address: request.address,
      latitude: request.latitude || null,
      longitude: request.longitude || null,
    },
    select: {
      id: true,
      name: true,
      place: true,
    },
  });
};

export const addRecordService = async (request) => {};
