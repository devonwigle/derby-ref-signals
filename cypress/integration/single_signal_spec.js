describe("Go to the single hand single view", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://derby-api.herokuapp.com/api/v1/handsignals', { fixture: "handSignal.json" })
      .visit('http://localhost:3000')
      .get("[data-testid=signals-container]")
      .get("[data-testid=card-holder]")
      .get("[data-testid=link]")
      .click()
  })
  it('should be able to visit the page and see the single signal', () => {
    cy.click()
  })
})