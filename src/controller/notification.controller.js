// controllers/notificationController.js
import { sendNotificationService } from "../service/notification.service.js";

export const sendNotificationController = async (req, res) => {
  const { wellId, title, message } = req.body;

  if (!wellId || !title) {
    return res.status(400).json({ error: "wellId and title are required" });
  }

  try {
    const notification = await sendNotificationService({
      wellId,
      title,
      message,
    });
    res.status(201).json(notification);
  } catch (error) {
    console.error("Error sending notification:", error.message);
    res.status(500).json({ error: "Failed to send notification" });
  }
};
