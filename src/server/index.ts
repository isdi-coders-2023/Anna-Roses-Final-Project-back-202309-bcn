import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/errors/generalError.js";
import neighbourRouter from "../features/neighbours/router/neighbourRouter.js";
import pingRouter from "../features/ping/router/PingRouter.js";

const corsUrl = process.env.ALLOWED_ORIGIN;
const corsOptions = { origin: corsUrl };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/neighbours", neighbourRouter);

app.use(notFound);
app.use(generalError);
