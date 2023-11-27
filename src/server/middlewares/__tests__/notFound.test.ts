import { type NextFunction, type Request, type Response } from "express";
import type CustomError from "../../CustomError/CustomError";
import { notFound } from "../errors/generalError";

describe("Given a Middleware notFound method", () => {
  describe("When it receives a response", () => {
    test("Then it should call the next function with a 404 status and a 'Endpoint not found error'", () => {
      const req = {};
      const res = {};
      const next = jest.fn();

      const customError: Partial<CustomError> = {
        message: "Endpoint not found",
        statusCode: 404,
      };

      notFound(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expect.objectContaining(customError));
    });
  });
});
