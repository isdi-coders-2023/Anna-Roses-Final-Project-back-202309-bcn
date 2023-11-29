import { type Response, type NextFunction, type Request } from "express";
import chalk from "chalk";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";

const debug = debugCreator("neighbours:server:errors:generalError");

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
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
  const privateError = error.privateMessage ?? "Internal server error";

  debug(chalk.red(`error: ${privateError}`));

  res.status(statusCode).json({ message: error.message });
};
