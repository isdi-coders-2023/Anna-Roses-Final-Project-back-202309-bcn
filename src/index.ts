import "dotenv/config";
import "./server/index.js";
import { startServer } from "./server/app.js";
import connectToDatabase from "./database/index.js";

const port = process.env.PORT ?? 400;

if (!process.env.MONGODB_URL) {
  console.log("Missing MongoDB Connection String");
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
