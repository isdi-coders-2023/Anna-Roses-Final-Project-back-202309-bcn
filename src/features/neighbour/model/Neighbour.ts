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
  ownerFirst: {
    type: String,
    required: true,
  },
  ownerSecond: {
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
  isFirstResidence: {
    type: Boolean,
    required: true,
  },
  isRented: {
    type: Boolean,
    required: false,
  },
  numberOfResidents: {
    type: Number,
    required: false,
  },
  yearOfPurchase: {
    type: Number,
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
