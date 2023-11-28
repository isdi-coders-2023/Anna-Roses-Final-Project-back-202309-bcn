import { type Request, type Response } from "express";
import type NeighbourMongooseRepository from "../repository/NeighbourMongooseRepository.js";

class NeighbourController {
  constructor(
    private readonly neighbourRepository: NeighbourMongooseRepository,
  ) {}

  public getNeighbours = async (
    _req: Request,
    res: Response,
  ): Promise<void> => {
    const neighbours = await this.neighbourRepository.getNeighbours();
    res.status(200).json({ neighbours });
  };
}

export default NeighbourController;
