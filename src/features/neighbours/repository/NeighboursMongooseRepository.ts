import Neighbour from "../model/Neighbour.js";
import {
  type NeighbourStructureWithoutId,
  type NeighbourStructure,
} from "../types.js";
import { type NeighboursRepository } from "./types.js";

class NeighboursMongooseRepository implements NeighboursRepository {
  public async getNeighbours(): Promise<NeighbourStructure[]> {
    const neighbours = await Neighbour.find().limit(10).sort({ _id: -1 });

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

  public async addNeighbour(
    neighbour: NeighbourStructureWithoutId,
  ): Promise<NeighbourStructure> {
    try {
      const newNeighbour = await Neighbour.create(neighbour);

      return newNeighbour;
    } catch (error) {
      throw new Error("Error adding a newNeighbour" + (error as Error).message);
    }
  }

  public async getNeighbourById(id: string): Promise<NeighbourStructure> {
    try {
      const neighbour = await Neighbour.findById(id);

      return neighbour!;
    } catch (error) {
      throw new Error("Error finding the Neighbour" + (error as Error).message);
    }
  }
}

export default NeighboursMongooseRepository;
