import {
  type NeighbourStructureWithoutId,
  type NeighbourStructure,
} from "../types";

export interface NeighboursRepository {
  getNeighbours: () => Promise<NeighbourStructure[]>;
  deleteNeighbour: (neighbourId: string) => Promise<void>;
  addNeighbour: (
    neighbour: NeighbourStructureWithoutId,
  ) => Promise<NeighbourStructure>;
  getNeighbourById: (neighbourId: string) => Promise<NeighbourStructure>;
}
