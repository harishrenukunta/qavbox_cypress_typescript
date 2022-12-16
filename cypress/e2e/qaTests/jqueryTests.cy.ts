describe('Illustration of JQuery method tests', () => {
	it('Value method test', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#username')
			.type('Harish Renukunta')
			.invoke('val')
			.then((txtVal: string) => cy.log(`Text value:${txtVal}`));
	});
});
