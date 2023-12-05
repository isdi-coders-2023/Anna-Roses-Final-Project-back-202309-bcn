import { type NeighbourStructure } from "../types";

export interface NeighboursRepository {
  getNeighbours: () => Promise<NeighbourStructure[]>;
  deleteNeighbour: (neighbourId: string) => Promise<void>;
}
