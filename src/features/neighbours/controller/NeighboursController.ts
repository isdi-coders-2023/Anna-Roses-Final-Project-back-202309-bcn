import { type NextFunction, type Request, type Response } from "express";
import { type NeighboursRepository } from "../repository/types.js";
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
}

export default NeighboursController;
