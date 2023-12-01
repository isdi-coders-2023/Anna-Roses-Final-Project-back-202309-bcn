/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  collectCoverageFrom: [
    "**/*.ts",
    "!src/index.ts",
    "!src/server/app.ts",
    "!src/database/index.ts",
  ],
};
