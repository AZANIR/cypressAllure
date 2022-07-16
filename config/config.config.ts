import { defineConfig } from 'cypress'

export default defineConfig({
  video: true,
  defaultCommandTimeout: 5000,
  execTimeout: 5000,
  taskTimeout: 5000,
  pageLoadTimeout: 30000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  env: {
    allureResultsPath: '../allure-results',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://automationpractice.com/index.php',
    specPattern: 'cypress/e2e/tests/**/*.test.ts',
  },
})
