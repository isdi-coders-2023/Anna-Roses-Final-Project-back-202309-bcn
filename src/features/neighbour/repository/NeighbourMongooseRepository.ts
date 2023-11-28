import Neighbour from "../model/Neighbour.js";
import { type NeighbourStructure } from "../types";
import { type NeighbourRepository } from "./types";

class NeighbourMongooseRepository implements NeighbourRepository {
  public async getNeighbours(): Promise<NeighbourStructure[]> {
    const neighbours = await Neighbour.find().limit(10);

    return neighbours;
  }
}

export default NeighbourMongooseRepository;
