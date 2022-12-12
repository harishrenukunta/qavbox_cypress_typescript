///<reference types="cypress"/>

import { invoke } from 'cypress/types/lodash';

describe('Illustrate select operations', () => {
	it('Select and verify text', () => {
		let optionToSelect = 'Male';
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('[name=sgender]')
			.select(optionToSelect)
			.find('option:selected')
			.then(($ele) => {
				expect($ele.text()).to.be.equal(optionToSelect);
			});
	});

	it('Select multiple options and verify them', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#tools').select(['cypress', 'Webdriverio', 'codedui']);
		cy.get('#tools')
			.find('option:selected')
			.each(($ele) => {
				cy.wrap($ele)
					.invoke('text')
					.then((txt) => {
						console.log(txt);
					});
			});
	});

	it('Select multiple options and verify all selected values using deep.equal', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('#tools')
			.select(['cypress', 'Webdriverio', 'codedui'])
			.invoke('val')
			.should('deep.equal', ['cypress', 'Webdriverio', 'codedui']);
	});
});
