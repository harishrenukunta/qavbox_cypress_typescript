/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {};

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Sign into application
			 * @param fullName Provide full name
			 * @param email  email
			 * @example
			 * //this is an example about how to use signUp
			 * cy.signUp('Harish Renukunta', 'harish_renukunta@google.com')
			 * //this will initiate sign up process
			 */
			signUp(fullName: string, email: string): void;
			getLinks(): Chainable<Element>;
			getText(): any;
			getFrame(frameSelector: string, documentIndx: string): Chainable<Element>;
		}
	}
}

Cypress.Commands.add('signUp', (fullName, email) => {
	cy.get('#username').type(fullName);
	cy.get('#email').type(email);
	cy.get('#submit').click();
});

Cypress.Commands.add(
	'getFrame',
	(frameSelector: string, documentIndx: string) => {
		return cy.get(frameSelector).its(`${documentIndx}.contentDocument.body`);
	}
);

Cypress.Commands.add(
	'getLinks',
	{ prevSubject: 'optional' },
	(subject, options) => {
		if (subject) {
			return cy.wrap(subject).find('a');
		} else {
			return cy.get('a');
		}
	}
);

Cypress.Commands.add(
	'getText',
	{ prevSubject: 'element' },
	(subject, options) => {
		cy.wrap(subject)
			.invoke('text')
			.then((txt) => {
				return txt === '' ? cy.wrap(subject).invoke('val') : txt;
			});
	}
);

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
	return originalFn(element, String(text).toUpperCase(), options);
});
