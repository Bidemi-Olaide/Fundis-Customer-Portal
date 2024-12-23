const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const dotenv = require('cypress-dotenv');

async function setupNodeEvents(on, config) {
  // Load the appropriate .env file based on the environment
  const environment = config.env.environment || 'staging';
  const pathToEnvFile = `.env.${environment}`;

  // Load environment variables and merge with existing config.env
  const envVars = dotenv({ path: pathToEnvFile });
  config.env = { ...config.env, ...envVars };

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more.
  await addCucumberPreprocessorPlugin(on, config);

  // Webpack configuration for handling feature files
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Return the modified config
  return config;
}

module.exports = defineConfig({
  e2e: {
    // Set the baseUrl using the environment variables
    baseUrl: process.env.CYPRESS_ADMIN_BASE_URL, // This can also be hardcoded if needed
    defaultCommandTimeout: 200000,
    viewportHeight: 900,
    viewportWidth: 1400,
    chromeWebSecurity: false,
    specPattern: "**/*.feature",
    video: true,
    videosFolder: "cypress/videos",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,
  },
});
