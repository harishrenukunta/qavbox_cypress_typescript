import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		chromeWebSecurity: false,
		excludeSpecPattern: [
			'cypress/e2e/1-getting-started/**/*.cy.js',
			'cypress/e2e/2-advanced-examples/**/*.cy.js',
		],
	},
});
