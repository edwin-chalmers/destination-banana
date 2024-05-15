describe('Error page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.ipify.org/?format=json', {
      status: 200,
      body: {"ip":"00.00.00.000"}
    })

    // cy.intercept('GET', 'https://api.ipify.org/?format=json', {
    //   status: 200,
    //   body: {"ip":"00.00.00.000"}
    // })
  })
  
  it('Should load error page', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('div')
    .contains("h1", "Error🍌404")
    cy.get('div')
    .contains("h2", "Destination: (not) Banana")
    cy.get('div')
    .contains("p", "The address could be mistyped or the page has been moved")
  })
  
  it('Should naviagte home', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('a')
    .contains("home").click()
    cy.url().should('eq', 'http://localhost:3000/HomePage')
  })
  
  it('Should load error page from a bad route', () => {
    cy.visit('http://localhost:3000/potatoes')
    cy.get('div')
    .contains("h1", "Error🍌404")
    cy.get('div')
    .contains("h2", "Destination: (not) Banana")
    cy.get('div')
    .contains("p", "The address could be mistyped or the page has been moved")
  })

})