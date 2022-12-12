///<reference types='cypress'/>
function select_skill(skill: string): void {
	cy.get('#table01 tbody')
		.contains('tr', skill)
		.find('input[type="checkbox"]')
		.check();
}

function delete_skill(skill: string): void {
	cy.get('#table01 tbody')
		.contains('tr', skill)
		.find('td > input[value="Delete"]')
		.click();
}

describe('Perform different operations on web table', () => {
	function get_total_skill_rows(): void {
		cy.get('#table01 tbody tr').its('length').as('skill_row_count');
	}

	xit('Check columns count and columns in a web table', () => {
		let COLUMN_COUNT = 4;
		let COLUMNS = ['ManualTesting', 'AutomationTesting', 'IssueTracker'];
		cy.visit('http://qavbox.github.io/demo/signup');
		cy.get('[name=home]').click();
		cy.contains('WebTable').click();
		cy.get('#table01 thead tr th').should('have.length', COLUMN_COUNT);

		//Verify column count
		//Illustrates how to use each with index variation
		cy.get('#table01 thead tr th').each(
			($el: JQuery<HTMLElement>, indx: number, $els: JQuery<HTMLElement>[]) => {
				if (indx != 0) {
					expect(COLUMNS).contains($el.text());
				}
			}
		);
	});

	it('Select a skill', () => {
		cy.visit('https://qavbox.github.io/demo/signup');
		cy.get('[name=home]').click();
		cy.contains('WebTable').click();
		select_skill('QTP');
		select_skill('Performance');
		delete_skill('TFS');
		get_total_skill_rows();
	});
});
