/// <reference types="cypress" />

describe('roofstore offers page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/offers')
  })

  it('render container offer categories and have less than 19 children', () => {
    cy.get('.overflow-scrollx').children().should('have.length.lessThan', 19)
  })

  it('render container with less than 49 children is rendered.', () => {
    cy.get('.fw-wrap').children().should('have.length.lessThan', 49)
  })

  it('render an anchor, it redirect to same page with a query "page"', () => {
    cy.get('a[href*="/offers?page=2"]').click().location().should(loc => expect(loc.search).to.eq('?page=2'))
  })
})
