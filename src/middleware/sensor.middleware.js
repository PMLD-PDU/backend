export const sensorMiddleware = (req, res, next) => {
  const sensorHeader = req.headers["X-Well-Secret-Token"];
  const token = sensorHeader;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.sensor = token;
  next();
};
