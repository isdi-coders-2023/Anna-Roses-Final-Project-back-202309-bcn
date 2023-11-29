/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  coveragePathIgnorePatterns: [
    "src/server/app.ts",
    "src/index.ts",
    "src/setupTests.ts",
    "src/database/index.ts",
  ],
};
