import * as users from '../../fixtures/users.json';

describe('Illustration of fixture usage', () => {
	it('Accessing fixture to execute tests multiple times', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#username').type(users[1].username);
	});
});
