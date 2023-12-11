import {
  type NeighbourStructureWithoutId,
  type NeighbourStructure,
} from "../types";

export const mockMartaNeighbour: NeighbourStructure = {
  _id: "6563639cc4ddfcae99eeb07a",
  name: "Marta Ibarra Chef",
  floor: "0",
  door: "1",
  coefficient: 9,
  moneyInFavour: 246,
  firstOwner: "Marta Ibarra Chef",
  secondOwner: "Mela Maluenda",
  powers: "Propietario",
  activityKind: "Restaurante",
  firstResidence: "no",
  rented: "no",
  numberOfResidents: 2,
  yearOfPurchase: "2018",
  coments: "hola",
  image: "https://i.ibb.co/N7k0Q4y/minion-chef.webp",
};

export const mockLauraNeighbour: NeighbourStructure = {
  _id: "65636423c4ddfcae99f020d3",
  name: "Laura Gutiérrez Empoderada",
  floor: "0",
  door: "2",
  coefficient: 12,
  moneyInFavour: 5000,
  firstOwner: "Laura Gutiérrez Empoderada",
  secondOwner: "",
  powers: "Propietario",
  activityKind: "Local comercial",
  firstResidence: "no",
  rented: "no",
  numberOfResidents: 2,
  yearOfPurchase: "2012",
  coments: "adeu",
  image: "https://i.ibb.co/KmdzSNJ/minion-karate.webp",
};

export const mockNeighbours: NeighbourStructure[] = [
  mockMartaNeighbour,
  mockLauraNeighbour,
];

export const mockNeighbour: NeighbourStructureWithoutId = {
  name: "Marta Ibarra Chef",
  floor: "0",
  door: "1",
  coefficient: 9,
  moneyInFavour: 246,
  firstOwner: "Marta Ibarra Chef",
  secondOwner: "Mela Maluenda",
  powers: "Propietario",
  activityKind: "Restaurante",
  firstResidence: "No",
  rented: "No",
  numberOfResidents: 2,
  yearOfPurchase: "2018",
  coments: "hola",
  image: "https://i.ibb.co/N7k0Q4y/minion-chef.webp",
};

export const mockModifiedNeighbour: NeighbourStructure = {
  _id: "6563639cc4ddfcae99eeb07a",
  name: "Marta Ibarra Chef",
  floor: "0",
  door: "1",
  coefficient: 9,
  moneyInFavour: 246,
  firstOwner: "Marta Ibarra Chef",
  secondOwner: "Mela Maluenda",
  powers: "Propietario",
  activityKind: "Restaurante",
  firstResidence: "No",
  rented: "No",
  numberOfResidents: 2,
  yearOfPurchase: "2018",
  coments: "cosetes",
  image: "https://i.ibb.co/N7k0Q4y/minion-chef.webp",
};
