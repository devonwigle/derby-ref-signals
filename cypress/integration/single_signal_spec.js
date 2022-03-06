describe("Go to the single hand single view and view its pieces", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://derby-api.herokuapp.com/api/v1/handsignals', { fixture: "handSignal.json" })
      cy.visit('http://localhost:3000')
      .get("[data-testid=signals-container]")
      .get("[data-testid=card-holder]")
      .get("[data-testid=link]").first().click()
  })
  it('should be able to visit the page and the url should reflect that', () => {
    cy.get("[data-testid=chosen-title]")
      .should("be.visible")
  })
  it('should be able to visit the page and see the hand signal name', () => {
    cy.url()
      .should("eq", "http://localhost:3000/handSignals/hs1")
  })
  it('should be able to visit the page and see the image', () => {
    cy.get("[data-testid=chosen-image]")
      .should("have.attr", "src")
  })
  it('should be able to visit the page and see the use label', () => {
    cy.get("[data-testid=use-title]")
      .should("be.visible")
  })
  it('should be able to visit the page and see the use description ', () => {
    cy.get("[data-testid=use-description]")
      .should("be.visible")
  })
  it('should be able to visit the page and see the motion label', () => {
    cy.get("[data-testid=motion-title]")
      .should("be.visible")
  })
  it('should be able to visit the page and see the motion description', () => {
    cy.get("[data-testid=motion-description]")
      .should("be.visible")
  })
  it('should have a link to return to all signals', () => {
    cy.get("a").click()
  })
})