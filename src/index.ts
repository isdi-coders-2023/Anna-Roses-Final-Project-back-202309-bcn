import "dotenv/config";
import "./server/index.js";
import connectToDatabase from "./database/index.js";

if (!process.env.MONGODB_URL) {
  console.log("Missing MongoDB Connection String");
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);
