const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight : 768,
    viewportWidth: 1024,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://sdetchallenge.fetch.com/",
  },
});
