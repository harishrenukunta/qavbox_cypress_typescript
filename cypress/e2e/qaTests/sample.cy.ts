///<reference types='cypress'/>

describe('First Test', () => {
	xit('Test type and check value', () => {
		cy.visit('http://qavbox.github.io/demo/signup');
		cy.get('#username').type('harishrenukunta');
		cy.get('[name=home]').click();
		cy.contains('SignUp Form').should('be.visible');
	});

	it('Illustrate Delay', () => {
		cy.visit('http://qavbox.github.io/demo/signup');
		cy.get('[name="home"]').click();
		cy.contains('Delay').click();
		cy.get('[value="Click me!"]').click();
		cy.contains('I am here!', { timeout: 5000 }).should('be.visible');
	});
});
