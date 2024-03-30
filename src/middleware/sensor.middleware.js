export const sensorHeader = (req, res, next) => {
  const sensorHeader = req.headers["X-Sensor-Header"];
  const token = sensorHeader && sensorHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.sensor = token;
  next();
};
