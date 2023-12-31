import { type Response, type NextFunction } from "express";
import { type NeighbourRequestWithoutId } from "../../types";
import type NeighboursMongooseRepository from "../../repository/NeighboursMongooseRepository";
import NeighboursController from "../NeighboursController";
import type CustomError from "../../../../server/CustomError/CustomError";
import { mockNeighbour } from "../../mocks/mockNeighbours";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a NeighbourController addNeighbour method", () => {
  describe("When it receives a request with a neighbour without id in the body", () => {
    const neighbourMock = mockNeighbour;
    const req: Pick<NeighbourRequestWithoutId, "body"> = {
      body: neighbourMock,
    };
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next: NextFunction = jest.fn();
    const neighbourRepository: NeighboursMongooseRepository = {
      getNeighbours: jest.fn(),
      deleteNeighbour: jest.fn(),
      addNeighbour: jest
        .fn()
        .mockResolvedValue({ neighbourMocks: neighbourMock }),
      getNeighbourById: jest.fn(),
      modifyNeighbour: jest.fn(),
    };

    test("Then it should call its status method with the code 201", async () => {
      const expectedStatusCode = 201;
      const neighboursController = new NeighboursController(
        neighbourRepository,
      );

      await neighboursController.addNeighbour(
        req as NeighbourRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method with 'Marta Ibarra Chef' object", async () => {
      const neighbourController = new NeighboursController(neighbourRepository);

      await neighbourController.addNeighbour(
        req as NeighbourRequestWithoutId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({
        neighbour: { neighbourMocks: neighbourMock },
      });
    });

    test("Then, if the request throws an error, it should call the next function with its error status 400 and the message 'Error adding the new Neighbour'", async () => {
      const neighbourRepository: NeighboursMongooseRepository = {
        getNeighbours: jest.fn(),
        deleteNeighbour: jest.fn(),
        addNeighbour: jest.fn().mockRejectedValueOnce(undefined),
        getNeighbourById: jest.fn(),
        modifyNeighbour: jest.fn(),
      };

      const expectedError: Partial<CustomError> = {
        message: "Error adding the new Neighbour",
        statusCode: 400,
      };

      const neighbourController = new NeighboursController(neighbourRepository);

      await neighbourController.addNeighbour(
        req as NeighbourRequestWithoutId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
