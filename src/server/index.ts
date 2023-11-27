import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import { generalError } from "./middlewares/errors/generalError.js";

const corsPort = process.env.ALLOWED_ORIGIN;
const corsOptions = { origin: corsPort };

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

app.use(generalError);
