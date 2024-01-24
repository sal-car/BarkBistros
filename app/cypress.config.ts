import { defineConfig } from 'cypress';

export default defineConfig({
  fixturesFolder: './tests/cypress/fixtures',
  e2e: {
    supportFile: './tests/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: './tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
