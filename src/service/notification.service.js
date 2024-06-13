import { prismaClient } from "../app/database";

export const addNotificationService = async (request) => {
  const { wellId, title, message } = request.body;

  const well = await prismaClient.well.findUnique({
    where: { id: wellId },
  });

  if (!well) {
    throw new Error("Well not found");
  }

  // Create the notification
  const notification = await prismaClient.notification.create({
    data: {
      title,
      message,
      wellId,
    },
  });

  return notification;
};

export const getNotificationService = async (request) => {
  const { wellId } = request.query;

  const notifications = await prismaClient.notification.findMany({
    where: { wellId },
  });

  return notifications;
};

export const deleteNotificationService = async (request) => {
  const { notificationId } = request.body;

  const notification = await prismaClient.notification.delete({
    where: { id: notificationId },
  });

  return notification;
};
