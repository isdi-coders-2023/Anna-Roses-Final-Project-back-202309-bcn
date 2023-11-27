import { Router } from "express";
import PingController from "../Controller/PingController.js";

const pingController = new PingController();

const pingRouter = Router();

pingRouter.get("/", pingController.getPong);

export default pingRouter;
