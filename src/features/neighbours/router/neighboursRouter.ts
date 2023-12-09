import { Router } from "express";
import NeighboursMongooseRepository from "../repository/NeighboursMongooseRepository.js";
import NeighboursController from "../controller/NeighboursController.js";
import neighbourValidation from "../schema/neighbourSchema.js";

const neighboursRouter = Router();

const neighboursMongooseRepository = new NeighboursMongooseRepository();
const neighboursController = new NeighboursController(
  neighboursMongooseRepository,
);

neighboursRouter.get("/", neighboursController.getNeighbours);
neighboursRouter.delete("/:neighbourId", neighboursController.deleteNeighbours);
neighboursRouter.post(
  "/create",
  neighbourValidation,
  neighboursController.addNeighbour,
);
neighboursRouter.get("/:neighbourId", neighboursController.getNeighbourById);

export default neighboursRouter;
