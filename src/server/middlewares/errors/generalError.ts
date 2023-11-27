import { type Response, type NextFunction, type Request } from "express";
import chalk from "chalk";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  const debug = debugCreator("neighbours:server:errors:generalError");
  debug(chalk.red("Endpoint not found"));

  const customError = new CustomError("Endpoint not found", 404);
  next(customError);
};

export const generalError = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  res.status(statusCode).json({ message: error.message });
};
