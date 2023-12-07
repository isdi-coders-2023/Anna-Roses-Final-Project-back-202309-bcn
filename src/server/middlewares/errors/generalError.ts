import { type Response, type NextFunction, type Request } from "express";
import chalk from "chalk";
import debugCreator from "debug";
import CustomError from "../../CustomError/CustomError.js";
import { ValidationError } from "express-validation";

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
  if (error instanceof ValidationError && error.details.body) {
    const validationError = error.details.body.reduce(
      (errorMessage, joiError) => `${errorMessage}, ${joiError.message}`,
      "",
    );

    const validationErrorModified = validationError
      ?.replace(/,(\s)/, "")
      .replaceAll(/['"]+/g, "");

    (error as CustomError).customMessage = validationErrorModified;
    (error as CustomError).message = validationErrorModified;

    debug(chalk.red(validationError));
  }

  const statusCode = error.statusCode ?? 500;
  const privateError = error.customMessage ?? "Internal server error";

  debug(chalk.red(`error: ${privateError}`));

  res.status(statusCode).json({ message: error.message });
};
