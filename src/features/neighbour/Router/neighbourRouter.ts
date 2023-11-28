import { Router } from "express";
import NeighbourMongooseRepository from "../repository/NeighbourMongooseRepository.js";
import NeighbourController from "../controller/NeighbourController.js";

const neighbourRouter = Router();

const neighbourMongooseRepository = new NeighbourMongooseRepository();
const neighbourController = new NeighbourController(
  neighbourMongooseRepository,
);

neighbourRouter.get("/", neighbourController.getNeighbours);

export default neighbourRouter;
