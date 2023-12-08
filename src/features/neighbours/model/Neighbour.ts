import { Schema, model } from "mongoose";
import { type NeighbourStructure } from "../types";

const neighbourSchema = new Schema<NeighbourStructure>({
  name: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  door: {
    type: String,
    required: true,
  },
  coefficient: {
    type: Number,
    required: true,
  },
  moneyInFavour: {
    type: Number,
    required: true,
  },
  firstOwner: {
    type: String,
    required: true,
  },
  secondOwner: {
    type: String,
    required: false,
  },
  powers: {
    type: String,
    required: true,
  },
  activityKind: {
    type: String,
    required: true,
  },
  firstResidence: {
    type: String,
    required: true,
  },
  rented: {
    type: String,
    required: false,
  },
  numberOfResidents: {
    type: Number,
    required: false,
  },
  yearOfPurchase: {
    type: String,
    required: true,
  },
  coments: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Neighbour = model("Neighbour", neighbourSchema, "neighbours");

export default Neighbour;
