import { createWellService } from "../service/well.service.js";

export const createWellController = async (req, res, next) => {
  try {
    req.body.companyId = req.params.company;
    req.body.placeId = req.params.place;
    const result = await createWellService(req.body);
    if (!result) {
      res.status(400).json({ message: "Well not created" });
    }
    res.status(201).json({ message: "Place created", data: result });
  } catch (error) {
    next(error);
  }
};

export const addRecordController = async (req, res, next) => {};
