///<reference types='cypress'/>

describe('Access iFrame elements', () => {
	xit('Access text box and click link inside an iframe', () => {
		cy.visit('http://qavbox.github.io/demo/');
		cy.contains('iFrames', { matchCase: false }).click();
		cy.get('#form1').contains('Pavilion').should('be.visible');

		//Enter value into a text box. The text box's is inside first document and hence 0 index need to be used to refer its
		//body element.
		cy.get('#Frame2')
			.its('0.contentDocument.body')
			.find('#frameinput')
			.type('Harish inside iframe');

		//Click on a link inside iFrame
		cy.get('#Frame2')
			.its('0.contentDocument.body')
			.contains('category3', { matchCase: false })
			.click();
	});

	xit('Same test case using alias', () => {
		cy.visit('http://qavbox.github.io/demo');
		cy.contains('iFrames').click();
		cy.contains('Pavilion').should('be.visible');
		//Declaring an alias for iframe
		cy.get('#Frame2').its('0.contentDocument.body').as('iFrame2');
		//Using the above alias to type into text box inside it
		cy.get('@iFrame2').find('#frameinput').type('Using Alias');
		cy.get('@iFrame2').contains('category3', { matchCase: false }).click();
	});

	it('Using Custom command to get and elements(inside iframe) html body', () => {
		cy.visit('http://qavbox.github.io/demo');
		cy.contains('iFrames').click();
		cy.getFrame('#Frame2', '0').find('#frameinput').type('Custom Commands');
		cy.wait(3000);
		cy.getFrame('#Frame2', '0')
			.contains('category3', { matchCase: false })
			.click();
	});
});
