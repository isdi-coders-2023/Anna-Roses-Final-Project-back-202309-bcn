import { type Request } from "express";

export interface NeighbourStructure {
  _id: string;
  name: string;
  floor: string;
  door: string;
  coefficient: number;
  moneyInFavour: number;
  firstOwner: string;
  secondOwner: string;
  powers: string;
  activityKind: string;
  firstResidence: string;
  rented: string;
  numberOfResidents: number;
  yearOfPurchase: string;
  coments: string;
  image: string;
}

export type NeighbourStructureWithoutId = Omit<NeighbourStructure, "_id">;

export type NeighbourStructureWithoutName = Omit<
  NeighbourStructure,
  "_id" | "name"
>;

export type NeighbourRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  NeighbourStructureWithoutId
>;

export type NeighbourRequestById = Request<{ neighbourId: string }>;
