describe('roofstore product detail', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/product/1')
    })

    it('Should title', () => {
      cy.title().should('eq', 'Roofstore')
    })

    it('render button "Comprar ahora"', () => {
      cy.contains('Comprar ahora').should('have.css', 'background-color', 'rgb(31, 100, 235)').click()
    })

    it('render button "Agregar al carrito"', () => {
      cy.contains('Agregar al carrito').should('have.css', 'background-color', 'rgb(199, 216, 250)').click()
    })

    it('render link Mercado puntos', () => {
      cy.contains('Mercado Puntos').should('have.css', 'color', 'rgb(31, 100, 235)')
      .should('have.attr', 'href', '/mercado-puntos').click()
      cy.location('pathname').should('eq', '/mercado-puntos')
    })

    it('render selector cantidad', () => {
      cy.contains('Cantidad').click()
    })

})