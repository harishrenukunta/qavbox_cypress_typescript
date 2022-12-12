///<reference types='cypress'/>
describe('Illustration of custom commands creation', () => {
	xit('Login custom command', () => {
		// cy.visit('https://qavbox.github.io/demo/signup/');
		// cy.signUp('Harish', 'harish_r9@yahoo.co.uk');
		cy.visit('http://www.timesofindia.com');
		cy.contains('TV').click();
		cy.contains('Vivek Dahiya').should('be.visible');
	});

	xit('GetLinks - Custom Commands - Can be used with cy and also as a child command', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.getLinks().should('have.length', 4);
		cy.get('fieldset').getLinks().should('have.length', 1);
	});

	it('GetText - Custom command - child only method', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#username')
			.type('harish')
			.getText()
			.then((value) => {
				cy.log(`You entered : ${value}`);
				expect(value).to.eql('harish');
			});
	});
});
