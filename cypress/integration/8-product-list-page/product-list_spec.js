/// <reference types="cypress" />

describe('roofstore offers page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/product-list')
  })

  it('renders the product container on the left with less than 11 children.', () => {
    cy.get('[data-testid="product-list-left"]').children().should('have.length.lessThan', 11)
  })

  it('renders the product container on the right with less than 11 children.', () => {
    cy.get('[data-testid="product-list-right"]').children().should('have.length.lessThan', 11)
  })
})
