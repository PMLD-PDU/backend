import { getAllWellIdService } from "../service/ml.service.js";

export const getAllWellId = async (req, res, next) => {
  try {
    const result = await getAllWellIdService();
    if (!result) {
      res.status(404).json({ message: "Well not found" });
    }
    res.status(200).json({ message: "Well found", data: result });
  } catch (error) {
    next(error);
  }
};
