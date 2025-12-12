const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // или другой URL, где запускается ваше приложение
    supportFile: false,  // ⬅️ Отключает проверку файла поддержки,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

  },
});