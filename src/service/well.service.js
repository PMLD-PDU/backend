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

export const addRecordService = async (request) => {
  return prismaClient.record.create({
    data: {
      date: request.date || new Date(),
      bitdepth: request.bitdepth || null,
      scfm: request.scfm || null,
      mudcondin: request.mudcondin || null,
      mudcondout: request.mudcondout || null,
      blockpos: request.blockpos || null,
      wob: request.wob || null,
      ropin: request.ropin || null,
      bvdepth: request.bvdepth || null,
      torque: request.torque || null,
      rpm: request.rpm || null,
      hkldp: request.hkldp || null,
      logdepth: request.logdepth || null,
      h2s_1: request.h2s_1 || null,
      mudflowoutp: request.mudflowoutp || null,
      totspm: request.totspm || null,
      sppress: request.sppress || null,
      mudflowin: request.mudflowin || null,
      co2_1: request.co2_1 || null,
      gas: request.gas || null,
      mudtempin: request.mudtempin || null,
      mudtempout: request.mudtempout || null,
      tankvoltot: request.tankvoltot || null,
      wellId: request.wellId,
    },
    select: {
      id: true,
      date: true,
      well: true,
    },
  });
};
