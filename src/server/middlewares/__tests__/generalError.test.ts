import { type Response, type Request } from "express";
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

  describe("When it receives a response method status with a 400", () => {
    test("Then it should call the response method status with 400", () => {
      const expectedStatusCode = 400;
      const customError = new CustomError(errorMessage, expectedStatusCode);

      generalError(customError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
