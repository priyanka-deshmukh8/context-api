const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n2sn53',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
