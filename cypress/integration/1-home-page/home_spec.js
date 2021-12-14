describe('roofstore home page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('render navbar', () => {
        cy.get('.navbar .row').should('have.css', 'background-color', 'rgb(71, 28, 190)')
    })

    it('logo has link to home page', () => {
        cy.get('.navbar a').should('have.attr', 'href', '/')
    })

    it('logo has width with 45px', () => {
        cy.get('.navbar a img').should('have.css', 'width', '45px')
    })
})
