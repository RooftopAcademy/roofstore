
describe('roofstore home page banners', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('render carousel', () => {
        cy.get('.carousel').should('be.visible')
    })

    it('all banners should be visible', () => {
      cy.get('.carousel .banner').should('be.visible')
    })

    it('banners should have a width property of 100%', () => {
      cy.get('.carousel .banner').first().should('have.css', 'width', '100%')
    })

    it('banners should redirect to your url when clicked', () => {
      cy.get('.carousel .banner a')
        .first()
        .should('have.attr', 'href')
        .then((href) => {
          cy.get('.carousel .banner').first().click()
          cy.location().should((location) => {
            expect(location.pathname).to.eq(href)
          })
        })
    })
})