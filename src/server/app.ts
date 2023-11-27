import "dotenv/config";
import chalk from "chalk";
import debugCreator from "debug";
import express from "express";

const debug = debugCreator("neighbours:server:app");

const app = express();
app.disabled("x-powered-by");

export const startServer = (port: number) => {
  app.listen(port, () => {
    debug(chalk.blue(`Server listening on http://localhost:${port}`));
  });
};

export default app;
