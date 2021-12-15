describe('choose item title page', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/sell/item-title')

        cy.get('.conteiner-title-item-test div textarea').as('inputElement')
        cy.get('.conteiner-title-item-test button').contains('Continuar').as('buttonElement')
        cy.get('.conteiner-title-item-test .character-limit-test').as('paragraphElement')
    })

    it('should render input title and button disabled', () => {
        cy.get('@inputElement')
            .should('have.attr', 'placeholder', 'Ej.: Celular Samsung Galaxy S9 64 GB negro')
            .should('text', '')

        cy.get('@buttonElement').should('be.disabled')

        cy.get('@paragraphElement').should('text', '0 / 60')
    })

    it('can be add a product title', () => {
        cy.get('@inputElement').type('Samsung Galaxy')

        cy.get('@paragraphElement').should('text', '14 / 60')

        cy.get('@buttonElement').should('not.be.disabled').click()

        cy.url('http://localhost:3000')
    })
})