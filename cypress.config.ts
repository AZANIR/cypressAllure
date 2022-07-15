import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 15000,
    viewportHeight: 1080,
    viewportWidth: 1440,
    retries: {
        runMode: 2,
        openMode: 2,
    },
    chromeWebSecurity: false,
  },
});
