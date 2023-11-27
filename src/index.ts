import "dotenv/config";
import debugCreator from "debug";
import chalk from "chalk";
import "./server/index.js";
import { startServer } from "./server/app.js";
import connectToDatabase from "./database/index.js";

const debug = debugCreator("neighbours:main");

const port = process.env.PORT ?? 400;

if (!process.env.MONGODB_URL) {
  debug(chalk.blue("Missing MongoDB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
