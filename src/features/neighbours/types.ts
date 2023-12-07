import { type Request } from "express";

export interface NeighbourStructure {
  _id: string;
  name: string;
  floor: string;
  door: string;
  coefficient: number;
  moneyInFavour: number;
  ownerFirst: string;
  ownerSecond: string;
  powers: string;
  activityKind: string;
  isFirstResidence: boolean;
  isRented: boolean;
  numberOfResidents: number;
  yearOfPurchase: number;
  coments: string;
  image: string;
}

export type NeighbourStructureWithoutId = Omit<NeighbourStructure, "_id">;

export type NeighbourRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  NeighbourStructureWithoutId
>;
