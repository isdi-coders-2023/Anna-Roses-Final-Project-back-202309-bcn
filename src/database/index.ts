import chalk from "chalk";
import mongoose from "mongoose";

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    chalk.bgGreen("Server listening on http://localhost");
  } catch {
    chalk.bgRed("Error connecting to database");
  }
};

export default connectToDatabase;
