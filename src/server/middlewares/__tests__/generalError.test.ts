import { type Response, type Request, type NextFunction } from "express";
import CustomError from "../../CustomError/CustomError";
import { generalError } from "../errors/generalError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a generalError middleware", () => {
  const errorMessage = "Error";
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next = jest.fn();

  describe("When it receives a request method status with a 400", () => {
    test("Then it should call the response status with 400", () => {
      const expectedStatusCode = 400;
      const customError = new CustomError(errorMessage, expectedStatusCode);

      generalError(
        customError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a request and an error with a status code 500", () => {
    test("Then it should call the response status method with 500", () => {
      const expectedStatusCode = 500;
      const error = new Error("Error with status code");

      generalError(error as CustomError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a request with an error with the message 'Private error'", () => {
    test("Then it should call the response json method with a 'Private error' message", () => {
      const expectedStatusCode = 400;
      const customErrorMessage = "Private error";
      const error = new CustomError(customErrorMessage, expectedStatusCode);

      generalError(error, req as Request, res as Response, next);

      const errorResponseBody = {
        message: customErrorMessage,
      };

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(errorResponseBody),
      );
    });
  });

  describe("When it receives a request with an error without a message", () => {
    test("Then it should call the response json method with a 'Internal server error' message", () => {
      const expectedStatusCode = 400;
      const customErrorMessage = "";
      const error = new CustomError(customErrorMessage, expectedStatusCode);

      generalError(error, req as Request, res as Response, next);

      const errorResponseBody = {
        message: customErrorMessage,
      };

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(errorResponseBody),
      );
    });
  });
});
