import { type Request, type Response } from "express";
import { type NeighbourStructure } from "../../types";
import NeighboursController from "../NeighboursController";
import { type NeighboursRepository } from "../../repository/types";
import { mockNeighbours } from "../../mocks/mockNeighbours";

describe("Gien a NeighbourController getNeighbours method", () => {
  describe("When it receives a response", () => {
    const neighbours: NeighbourStructure[] = mockNeighbours;
    const neighboursRepository: NeighboursRepository = {
      getNeighbours: jest.fn().mockResolvedValue(neighbours),
      deleteNeighbour: jest.fn().mockResolvedValue(neighbours),
      addNeighbour: jest.fn().mockResolvedValue(neighbours),
      getNeighbourById: jest.fn(),
      modifyNeighbour: jest.fn(),
    };

    const neighbourController = new NeighboursController(neighboursRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

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
