// services/notificationService.js
import { prismaClient } from "../app/database.js";

export const sendNotificationService = async ({ wellId, title, message }) => {
  const well = await prismaClient.well.findUnique({
    where: { id: wellId },
  });

  if (!well) {
    throw new Error("Well not found");
  }

  const notification = await prismaClient.notification.create({
    data: {
      title,
      message,
      wellId,
    },
  });

  return notification;
};
