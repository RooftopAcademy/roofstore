
describe('Rooftore input help page', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000/help')
    })
    it('render input', () => {
        cy.get('input').should('be.visible')
    })
    it('renderized suggerested list', () => {
        cy.get('input').click().type('Bases y condiciones').focus().get('[id="suggested-results"]').should('be.visible')
        
    })
    //it('have border-color: succes-color', () => {
      //  cy.get('input').click().should('have.css','SearchHelp-borderinput-blue')
    //})
    it('type something, the list is visible, click in the cross and the input is empty', () => {
        cy.get('input').click().type('Bases y condiciones').get('.icon-x-test').click().get('input').should('have.value','')
        
    })
    it('type something, the list is visible, click in the arrow and the input is complete', () => {
        cy.get('input').click().type('Bases y condiciones').get('.icon-arrow-right-test').first().click()
        cy.get('input').should('have.value','Bases y condiciones')
        
    })
    

}) 