describe('Error page', () => {
  beforeEach(() => {
  })
  
  it('Should load error page', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('div')
    .contains("h1", "Error🍌404")
    cy.get('div')
    .contains("h2", "Destination not banana")
    cy.get('div')
    .contains("p", "The address could be misstyped or the page has been moved")
  })
  
  it('Should naviagte home', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('a')
    .contains("Go Home").click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  
  it('Should load error page from a bad route', () => {
    cy.visit('http://localhost:3000/potatoes')
    cy.get('div')
    .contains("h1", "Error🍌404")
    cy.get('div')
    .contains("h2", "Destination not banana")
    cy.get('div')
    .contains("p", "The address could be misstyped or the page has been moved")
  })

})