import { Joi, validate } from "express-validation";
import { type NeighbourStructureWithoutId } from "../types";

const neighbourSchema = {
  body: Joi.object<NeighbourStructureWithoutId>({
    name: Joi.string().required(),
    floor: Joi.string().required(),
    door: Joi.string().required(),
    coefficient: Joi.number().required(),
    moneyInFavour: Joi.number().required(),
    ownerFirst: Joi.string().required(),
    ownerSecond: Joi.string().optional(),
    powers: Joi.string().required(),
    activityKind: Joi.string().required(),
    isFirstResidence: Joi.boolean().required(),
    isRented: Joi.boolean().required(),
    numberOfResidents: Joi.number().required(),
    yearOfPurchase: Joi.number().required(),
    coments: Joi.string().optional(),
    image: Joi.string().required(),
  }),
};

const neighbourValidation = validate(
  neighbourSchema,
  {},
  { abortEarly: false },
);

export default neighbourValidation;
