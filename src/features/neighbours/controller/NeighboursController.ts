import { type NextFunction, type Request, type Response } from "express";
import { type NeighboursRepository } from "../repository/types.js";
import { type NeighbourRequestWithoutId } from "../types.js";
import CustomError from "../../../server/CustomError/CustomError.js";

class NeighboursController {
  constructor(private readonly neighboursRepository: NeighboursRepository) {}

  public getNeighbours = async (
    _req: Request,
    res: Response,
  ): Promise<void> => {
    const neighbours = await this.neighboursRepository.getNeighbours();

    res.status(200).json({ neighbours });
  };

  public deleteNeighbours = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { neighbourId } = req.params;

    try {
      await this.neighboursRepository.deleteNeighbour(neighbourId);

      res.status(200).json({});
    } catch {
      const error = new CustomError("Error deleting the neighbour", 400);

      next(error);
    }
  };

  public addNeighbour = async (
    req: NeighbourRequestWithoutId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const neighbour = req.body;

      const neighbourWithoutId =
        await this.neighboursRepository.addNeighbour(neighbour);

      res.status(201).json({ neighbour: neighbourWithoutId });
    } catch {
      const customError = new CustomError(
        "Error adding the new Neighbour",
        400,
      );

      next(customError);
    }
  };

  public getNeighbourById = async (
    req: Request<{ neighbourId: string }>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { neighbourId } = req.params;

      const neighbour =
        await this.neighboursRepository.getNeighbourById(neighbourId);

      res.status(200).json({ neighbour });
    } catch {
      const customError = new CustomError("Error finding this neighbour", 400);

      next(customError);
    }
  };
}

export default NeighboursController;
