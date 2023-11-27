import { type Response, type NextFunction, type Request } from "express";
import type CustomError from "../../CustomError/CustomError.js";

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  res.status(statusCode).json({ message: error.message });
};
