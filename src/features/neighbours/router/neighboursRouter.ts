import { Router } from "express";
import NeighboursMongooseRepository from "../repository/NeighboursMongooseRepository.js";
import NeighboursController from "../controller/NeighboursController.js";

const neighboursRouter = Router();

const neighboursMongooseRepository = new NeighboursMongooseRepository();
const neighboursController = new NeighboursController(
  neighboursMongooseRepository,
);

neighboursRouter.get("/", neighboursController.getNeighbours);

export default neighboursRouter;
