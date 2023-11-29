import { type Request, type Response } from "express";
import mockNeighbours from "../../mocks/mockNeighbours";
import { type NeighboursRepository } from "../../repository/types";
import { type NeighbourStructure } from "../../types";
import NeighboursController from "../NeighboursController";

describe("Gien a NeighbourController getNeighbours method", () => {
  describe("When it receives a response", () => {
    const neighbours: NeighbourStructure[] = mockNeighbours;
    const neighbourRepository: NeighboursRepository = {
      getNeighbours: jest.fn().mockResolvedValue(neighbours),
    };

    const neighbourController = new NeighboursController(neighbourRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method with status 200", async () => {
      const expectedStatusCode = 200;

      await neighbourController.getNeighbours(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method with status 200", async () => {
      const expectedStatusCode = 200;

      await neighbourController.getNeighbours(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method with 'Marta Ibarra Chef' and 'Laura Gutiérrez Empoderada'", async () => {
      const expectedNeighbours = neighbours;

      await neighbourController.getNeighbours(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ neighbours: expectedNeighbours });
    });
  });
});
