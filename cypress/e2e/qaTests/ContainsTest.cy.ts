///<reference types='cypress'/>

describe('Illustration of contains', () => {
	beforeEach(() => {
		cy.visit('https://qavbox.github.io/demo/signup');
	});
	xit('Contains - Match case demonstration', () => {
		cy.contains('Full name', { matchCase: false }).should('be.visible');
	});

	xit('Partial text identification', () => {
		cy.contains('Tutorials').click();
	});

	xit('retrieve element using its parent', () => {
		cy.get('footer').contains('qavalidation').click();
	});

	it('Demo - Contains with selector', () => {
		cy.get('[name=home]').click();
		cy.contains('List Items').click();
		cy.contains('div.container', 'CSS').should('be.visible');
	});
});
