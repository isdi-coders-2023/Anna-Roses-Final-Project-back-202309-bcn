import { Router } from "express";
import NeighbourController from "../controller/NeighbourController.js";
import NeighbourMongooseRepository from "../repository/NeighbourMongooseRepository.js";

const neighbourRouter = Router();

const neighbourMongooseRepository = new NeighbourMongooseRepository();
const neighbourController = new NeighbourController(
  neighbourMongooseRepository,
);

neighbourRouter.get("/", neighbourController.getNeighbours);

export default neighbourRouter;
