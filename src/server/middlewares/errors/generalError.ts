import { type Response, type NextFunction, type Request } from "express";
import chalk from "chalk";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";

const customError = new CustomError("Endpoint not found", 404);

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const debug = debugCreator("neighbours:server:errors:generalError");
  debug(chalk.red("Endpoint not found"));
  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message ?? "Server error";
  res.status(statusCode).json({ message: errorMessage });
};
