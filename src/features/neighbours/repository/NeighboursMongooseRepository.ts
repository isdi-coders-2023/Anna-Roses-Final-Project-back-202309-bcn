import Neighbour from "../model/Neighbour.js";
import { type NeighbourStructure } from "../types.js";
import { type NeighboursRepository } from "./types.js";

class NeighboursMongooseRepository implements NeighboursRepository {
  public async getNeighbours(): Promise<NeighbourStructure[]> {
    const neighbours = await Neighbour.find().limit(10);

    return neighbours;
  }

  public async deleteNeighbour(neighbourId: string): Promise<void> {
    try {
      await Neighbour.findByIdAndDelete(neighbourId);
    } catch (error) {
      throw new Error(
        "Error deleting this Neighbour" + (error as Error).message,
      );
    }
  }
}

export default NeighboursMongooseRepository;
