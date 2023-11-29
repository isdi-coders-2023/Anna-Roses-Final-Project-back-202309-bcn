import { type Request, type Response } from "express";
import { type NeighboursRepository } from "../repository/types.js";

class NeighboursController {
  constructor(private readonly neighbourRepository: NeighboursRepository) {}

  public getNeighbours = async (_req: Request, res: Response) => {
    const neighbours = await this.neighbourRepository.getNeighbours();
    res.status(200).json({ neighbours });
  };
}

export default NeighboursController;
