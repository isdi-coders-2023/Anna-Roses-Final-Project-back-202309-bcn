import Neighbour from "../model/Neighbour";
import { type NeighbourStructure } from "../types";
import { type NeighbourRepository } from "./types";

class NeighbourMongooseRepository implements NeighbourRepository {
  public async getNeighbours(): Promise<NeighbourStructure[]> {
    const neighbours = await Neighbour.find();

    return neighbours;
  }
}

export default NeighbourMongooseRepository;
