/// <reference types="cypress" />

describe('Register test', () => {
    before(() => {
        cy.visit('http://localhost:3000/login')
    })

    beforeEach(() => {
        cy.viewport(426, 700)
    })

    it('needs to be rendered a link that goes to register page', () => {
        cy.contains('Crear cuenta').should('exist').click()
        cy.url().should('include', '/register')
    })

    it('needs to be rendered a enabled button that goes to email input', () => {
        cy.get('.p-button-validate').contains('Validar').then(($btn) => {
            if ($btn.is(":disabled")) {
                return
            } else {
                cy.wrap($btn).dblclick()
            }
        })
        cy.get('[type="email"]').type('myemail@gmail.com')
    })

    it('needs to exist a button that takes you back to complete another field', () => {
        cy.contains('Enviar e-mail').dblclick()
    })



    it('needs to be rendered a enabled button that goes to 3 inputs and a button', () => {
        cy.get('.p-button-validate').eq(1).should('not.be.disabled').dblclick()
        cy.get('[type="text"]').eq(2).should('exist')
        cy.get('[type="number"]').should('exist').type(1231312)
        cy.contains('Continuar').dblclick()
    })

    it('clicking next enabled button need to render input', () => {
        cy.get('.p-button-validate').eq(2).should('not.be.disabled').dblclick()
        cy.get('[type="text"]').should('exist')
        cy.get('[type="button"]').contains('Enviar')
    })
})