import {
  addRecordService,
  createWellService,
} from "../service/well.service.js";

export const createWellController = async (req, res, next) => {
  try {
    req.body.companyId = req.params.company;
    req.body.placeId = req.params.place;
    const result = await createWellService(req.body);
    if (!result) {
      res.status(400).json({ message: "Well not created" });
    }
    res.status(201).json({ message: "Well created", data: result });
  } catch (error) {
    next(error);
  }
};

export const addRecordController = async (req, res, next) => {
  try {
    req.body.wellId = req.sensor;
    const result = await addRecordService(req.body);
    if (!result) {
      res.status(400).json({ message: "Record not created" });
    }
    res.status(201).json({ message: "Record created", data: result });
  } catch (error) {
    next(error);
  }
};
