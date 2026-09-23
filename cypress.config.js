const { defineConfig } = require("cypress");
baseUrl: 'https://www.saucedemo.com'
module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
