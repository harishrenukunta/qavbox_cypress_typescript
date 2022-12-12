///<reference types="cypress"/>

describe('Illustration of Async', () => {
	xit('Enter valeus and display them in console', () => {
		cy.visit('https://qavbox.github.io/demo/signup');

		cy.get('#username')
			.type('Harish Renukunta')
			.then(() => {
				console.log('Entered username');
			});

		cy.get('#email')
			.type('harish_r9@yahoo.co.uk')
			.then(() => {
				console.log('Entered email');
			});
	});

	it('Capture username and enter it into email', function () {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#username')
			.type('harishrenukunta@gmail.com')
			.invoke('val')
			.then((username: string) => {
				console.log(`Entered username: ${username}`);
				cy.get('#email')
					.type(username)
					.invoke('val')
					.then((email) => {
						console.log(`Entered email: ${email}`);
					});
			});
	});
});
