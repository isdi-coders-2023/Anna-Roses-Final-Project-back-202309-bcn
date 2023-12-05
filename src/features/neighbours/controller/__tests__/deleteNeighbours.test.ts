import { type Request, type Response, type NextFunction } from "express";
import { type NeighboursRepository } from "../../repository/types";
import NeighboursController from "../NeighboursController";

describe("Given a NeighboursController deleteNeighbour method", () => {
  describe("When it receives a response", () => {
    const neighboursRepository: Pick<NeighboursRepository, "deleteNeighbour"> =
      {
        deleteNeighbour: jest.fn().mockReturnValue({}),
      };
    const req: Pick<Request, "params"> = {
      params: { _id: "6563639cc4ddfcae99eeb07a" },
    };
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockResolvedValue({}),
    };
    const next: NextFunction = jest.fn();
    const neighboursController = new NeighboursController(
      neighboursRepository as NeighboursRepository,
    );

    test("Then it should call its method status 200", async () => {
      const expectedStatusCode = 200;

      await neighboursController.deleteNeighbours(
        req as Request<{ neighbourId: string }>,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it shoyld call its method json with an empy object", async () => {
      const expectedEmptyObject = {};

      await neighboursController.deleteNeighbours(
        req as Request<{ neighbourId: string }>,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith(expectedEmptyObject);
    });
  });
});
