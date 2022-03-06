describe("should show bad url page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("should be able to type a non-supported url and see an error page", () => {
    cy.visit("http://localhost:3000/jkdgds")
      .get("[data-testid=bad-url-title")
  })
  it("should be able to click on the link and return to homepage", () => {
    cy.visit("http://localhost:3000/jkdgds")
      .get("[data-testid=bad-url-home-link]").click()
  })
})