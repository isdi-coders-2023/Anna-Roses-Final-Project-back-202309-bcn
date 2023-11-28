import { type NeighbourStructure } from "../types";

export interface NeighbourRepository {
  getNeighbours: () => Promise<NeighbourStructure[]>;
}
