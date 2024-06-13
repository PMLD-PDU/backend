import{
    addNotificationService,
    getNotificationService
}from "../service/notification.service.js";


const { sendNotificationService } = require('../services/notificationService');

const sendNotificationController = async (req, res) => {
    const { wellId, title, message } = req.body;

    if (!wellId || !title) {
        return res.status(400).json({ error: 'wellId and title are required' });
    }

    try {
        const notification = await sendNotificationService({ wellId, title, message });
        res.status(201).json(notification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send notification' });
    }
};

module.exports = {
    sendNotificationController,
};
