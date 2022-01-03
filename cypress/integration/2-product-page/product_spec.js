describe("roofstore product page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/product/1")
  })

  it("render textarea", () => {
    cy.get("textarea")
      .invoke("attr", "placeholder")
      .should("contain", "Escribí tu pregunta...")
  })
})
