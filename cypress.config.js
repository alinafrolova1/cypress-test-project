const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.pecodesoftware.com',
    env: {
      username: process.env.WRONG_USERNAME,
      password: process.env.WRONG_PASSWORD
    },
  },
});
