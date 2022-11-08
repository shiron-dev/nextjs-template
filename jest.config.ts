import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
};

export default config;
