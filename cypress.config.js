const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({

  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.js',
    baseUrl: 'https://www.pecodesoftware.com',
    env: {
      username: process.env.WRONG_USERNAME,
      password: process.env.WRONG_PASSWORD
    },
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'mochawesome-report',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
    }
  },
  video: true
});
