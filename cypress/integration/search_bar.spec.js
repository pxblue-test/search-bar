/// <reference types="cypress" />

describe('Angular search bar & search actions', () => {

    it('loads correctly and search renders', () => {
        cy.visit('localhost:4200');
        cy.get('[data-cy=pxb-toolbar]').should('have.text', 'menuPresidentLeader of the Free Worldsearch');
        cy.get('[data-cy=menu]').should('have.text', 'menu');
        cy.get('[data-cy=search] > .mat-button-wrapper > .mat-icon').should('have.text', 'search')
        cy.get('[data-cy=search] > .mat-button-wrapper > .mat-icon').click();
        cy.get('.search-control').type('thomas');
        cy.get('.mat-list-item-content').should('have.text', 'personThomas JeffersonDemocratic-Republican1801-03-04');
        cy.get('[data-cy=close-search] > .mat-button-wrapper > .mat-icon').click();
        cy.get('[data-cy=search] > .mat-button-wrapper > .mat-icon').click();
        cy.get('.search-control').type('bill');
        cy.get('.mat-list-item-content').should('have.text', 'personBill ClintonDemocratic1993-01-20');
        cy.get('[data-cy=close-search] > .mat-button-wrapper > .mat-icon').click()
    });
});