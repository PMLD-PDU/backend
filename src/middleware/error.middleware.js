import { ResponseError } from "../error/response.error.js";

export const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    return next();
  }

  if (error instanceof ResponseError) {
    res
      .status(error.status)
      .json({
        message: error.message,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        message: error.message || "Internal Server Error",
      })
      .end();
  }
};
