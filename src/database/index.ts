import chalk from "chalk";
import debugCreator from "debug";
import mongoose from "mongoose";

const debug = debugCreator("neighbours:database:main");

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.green("Server listening on http://localhost"));
  } catch {
    debug(chalk.bgRed("Error connecting to database"));
  }
};

export default connectToDatabase;
