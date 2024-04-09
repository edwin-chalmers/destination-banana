describe('destination: bananas', () => {
  // beforeEach(() => {
  //   let title = win.endpointAPI
  // })

  // console.log("tester", title)

  it('should go to main page and see game display on button click', () => {
    cy.fixture('randomPage.json').then(randomPage => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/random/title', {
      status: 200,
      body: randomPage
    })
  })

    cy.intercept('GET', 'https://en.wikipedia.org/w/api.php?action=parse&page=The+Monkees&prop=links&format=json&origin=*', {
      status: 200,
      body: {
        parse: {
          links: [
            {'*': 'gorilla', 'exists': '', ns: 0},
            {'*': 'jungle', 'exists': '', ns: 0},
            {'*': 'music', 'exists': '', ns: 0},
            {'*': 'The Monkees', 'exists': '', ns: 0}
          ],
          pageid: 31417,
          title: "The Monkees"
        }
      }

    })

    cy.fixture('htmlString.txt').then(htmlString => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/The%20Monkees', {
        status: 200,
        body: htmlString
      })
    })

    cy.visit('http://localhost:3000/HomePage')
    cy.get('nav').find('img').should('have.attr', 'src').should('include', '/assets/DB-horizontal-w-banana.svg')
    cy.get('nav').contains('Back')
      .get('nav').contains('h2', '1 Clicks')
      .get('nav').contains('h2', 'Start Point:')
      .get('nav').contains('p', 'Monkees')
      .get('nav').contains('h2', 'Destination:')
      .get('nav').contains('p', 'Banana')


    cy.get('#links-container').contains('h3', 'Links')
      .get('#links-container').contains('a', 'gorilla')
      .get('#links-container').contains('a', 'jungle')
      .get('#links-container').contains('a', 'music')
      .get('#links-container').contains('a', 'The Monkees')

      cy.get('#page-container').find('img').should('have.attr', 'src').should('include', '/assets/link-icon.svg')
      .get('#page-container').contains('h3', 'The Monkees')
      // .get('#page-container').contains('p', 'This article')
      // .get('#page-container').contains('a', 'music')
      // .get('#page-container').contains('a', 'The Monkees')
  })

  // it('should play the game, and use the back button to undo changes', () => {




 
    // cy.visit('http://localhost:3000/HomePage')
    // cy.get('#links-container')
    // cy.contains('a', 'fish')
    // cy.contains('a', 'Immune system').click()
    // cy.contains('a', 'Animal').click()
    // cy.contains('a', 'Beef').click()
    // cy.contains('a', 'Locust').click()
    // cy.contains('a', 'Food chain').click()
    // cy.contains('a', 'Algae').click()
    // cy.contains('a', 'Plant').click()
    // cy.get('p', 'back')
  // })

})
