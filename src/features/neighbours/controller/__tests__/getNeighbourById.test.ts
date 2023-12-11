import { type Response, type NextFunction } from "express";
import { type NeighbourRequestById } from "../../types";
import type NeighboursMongooseRepository from "../../repository/NeighboursMongooseRepository";
import NeighboursController from "../NeighboursController";
import type CustomError from "../../../../server/CustomError/CustomError";
import { mockNeighbour } from "../../mocks/mockNeighbours";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a NeighboursController getNeighbourById method", () => {
  const neighbourIdNumber = "6563639cc4ddfcae99eeb07a";

  const req: Pick<NeighbourRequestById, "params"> = {
    params: { neighbourId: neighbourIdNumber },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a Neighbour id and a response", () => {
    const neighbourMock = mockNeighbour;
    const neighboursRepository: Pick<
      NeighboursMongooseRepository,
      "getNeighbourById"
    > = {
      getNeighbourById: jest.fn().mockResolvedValue(neighbourMock),
    };
    const neighboursController = new NeighboursController(
      neighboursRepository as NeighboursMongooseRepository,
    );

    test("Then it should call its response status method with the status code 200", async () => {
      const expectedStatusCode = 200;

      await neighboursController.getNeighbourById(
        req as NeighbourRequestById,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with 'Marta Ibarra Chef'", async () => {
      const neighbour = neighbourMock;
      await neighboursController.getNeighbourById(
        req as NeighbourRequestById,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ neighbour });
    });
  });

  describe("When it receives an invalid request it throus an error", () => {
    test("Then it should call it next function with the status code 400 and the error message 'Error finding the neighbour'", async () => {
      const errorMessage = "Error finding this neighbour";
      const expectedStatusCode = 400;

      const expectError: Partial<CustomError> = {
        message: errorMessage,
        statusCode: expectedStatusCode,
      };

      const neighboursRepository: Pick<
        NeighboursMongooseRepository,
        "getNeighbourById"
      > = {
        getNeighbourById: jest.fn().mockRejectedValue(null),
      };

      const neighboursController = new NeighboursController(
        neighboursRepository as NeighboursMongooseRepository,
      );

      await neighboursController.getNeighbourById(
        req as NeighbourRequestById,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectError));
    });
  });
});
