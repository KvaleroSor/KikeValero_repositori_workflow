const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // Implementar eventos node si es necesario
    },
    viewportWidth: 1280,
    viewportHeight: 720
  }
})

