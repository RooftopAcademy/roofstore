describe('Menu Mobile', ()=> {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.get('.burger-btn').click()
    })

    it('Navigate to offers page', ()=> {
        cy.contains('Ofertas').click()
        cy.url().should('include', '/offers')
    })

    it('Navigate to history page', ()=> {
        cy.contains('Historial').click()
        cy.url().should('include', '/navigation')
    })

    it('Navigate to sales page', ()=> {
        cy.contains('Ventas').click()
        cy.url().should('include', '/sales')
    })

    it('Navigate to supermarket page', ()=> {
        cy.contains('Supermercado').click()
        cy.url().should('include', '/supermarket')
    })

    it('Navigate to fashion page', ()=> {
        cy.contains('Moda').click()
        cy.url().should('include', '/fashion')
    })

    it('Navigate to stores page', ()=> {
        cy.contains('Tiendas').click()
        cy.url().should('include', '/stores')
    })

    it('Navigate to categories page', ()=> {
        cy.contains('Categorías').click()
        cy.url().should('include', '/categories')
    })

    it('Navigate to help page', ()=> {
        cy.contains('Ayuda').click()
        cy.url().should('include', '/help')
    })

    it('Navigate to download page', ()=> {
        cy.contains('Comprá').click()
        cy.url().should('include', '/download')
    })

    
})