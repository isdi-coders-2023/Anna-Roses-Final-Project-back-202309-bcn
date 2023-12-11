import { type Response, type NextFunction } from "express";
import {
  mockModifiedNeighbour,
  mockNeighbours,
} from "../../mocks/mockNeighbours";
import { type NeighbourRequestWithId } from "../../types";
import NeighboursController from "../NeighboursController";
import type NeighboursMongooseRepository from "../../repository/NeighboursMongooseRepository";
import { type NeighboursRepository } from "../../repository/types";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a NeighboursController with a modifyNeighbour method", () => {
  const res: Pick<Response, "status" | "json"> = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
  };

  const req: Pick<NeighbourRequestWithId, "body" | "params"> = {
    body: mockNeighbours[0],
    params: { neighbourId: "6563639cc4ddfcae99eeb07a" },
  };

  const next: NextFunction = jest.fn();

  describe("When it receives a request with a niehgoburId, a niehgobur and a response", () => {
    const neighboursRepository: Pick<
      NeighboursMongooseRepository,
      "modifyNeighbour"
    > = {
      modifyNeighbour: jest.fn().mockResolvedValue(mockModifiedNeighbour),
    };

    test("Then it should call its response method status with the status code 200", async () => {
      const expectedStatusCode = 200;

      const neighboursController = new NeighboursController(
        neighboursRepository as NeighboursMongooseRepository,
      );

      await neighboursController.modifyNeighbour(
        req as NeighbourRequestWithId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its response method json with 'Marta Ibarra Chef' neighbour modified", async () => {
      const neighboursController = new NeighboursController(
        neighboursRepository as NeighboursRepository,
      );

      await neighboursController.modifyNeighbour(
        req as NeighbourRequestWithId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({
        neighbour: mockModifiedNeighbour,
      });
    });
  });

  describe("When the request fails and the Controller catches and error thrown from the Repository and a NextFunction", () => {
    test("Then it should call its next function with the error message 'Error modifying the neighbour' and the status code 400", async () => {
      const expectedError: Partial<CustomError> = {
        message: "Error modifying the neighbour",
        statusCode: 400,
      };

      const neighboursRepository: Pick<
        NeighboursMongooseRepository,
        "modifyNeighbour"
      > = {
        modifyNeighbour: jest.fn().mockRejectedValue(null),
      };

      const neighboursController = new NeighboursController(
        neighboursRepository as NeighboursMongooseRepository,
      );

      await neighboursController.modifyNeighbour(
        req as NeighbourRequestWithId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
