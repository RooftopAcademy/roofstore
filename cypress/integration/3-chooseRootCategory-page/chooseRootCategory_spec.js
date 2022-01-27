describe('choose root category page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/sell/chooseCategory')
    })

    it('should rendirect to "sell/title-item"', () => {
        cy.get('.choose-category-item-test').first().should('have.attr', 'href', '/').click()
        cy.url().should('include', '/')
    })
})