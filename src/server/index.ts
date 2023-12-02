import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError, notFound } from "./middlewares/errors/generalError.js";
import neighboursRouter from "../features/neighbours/router/neighboursRouter.js";
import pingRouter from "../features/ping/router/PingRouter.js";

const onrenderUrl = process.env.ALLOWED_ORIGIN_ONRENDER;
const localCorsUrl = process.env.ALLOWED_ORIGIN_LOCAL;
const corsOptions = { origin: localCorsUrl, onrenderUrl };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/neighbours", neighboursRouter);

app.use(notFound);
app.use(generalError);
