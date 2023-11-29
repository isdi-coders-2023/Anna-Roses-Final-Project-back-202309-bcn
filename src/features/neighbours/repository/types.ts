import { type NeighbourStructure } from "../types";

export interface NeighboursRepository {
  getNeighbours: () => Promise<NeighbourStructure[]>;
}
