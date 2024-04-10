describe('destination: bananas', () => {
  // beforeEach(() => {
  //   let title = win.endpointAPI
  // })

  // console.log("tester", title)

  it('should go to main page and see game display on button click', () => {
    //MONKEES INTERCEPTS
    cy.fixture('monkees.json').then(randomPage => {
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
            {'*': 'Daydream Believer', 'exists': '', ns: 0},
            {'*': 'music', 'exists': '', ns: 0},
            {'*': 'musa', 'exists': '', ns: 0},
            {'*': 'banana', 'exists': '', ns: 0}
          ],
          pageid: 31417,
          title: "The Monkees"
        }
      }
    })

    cy.fixture('monkeesHtmlString.txt').then(htmlString => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/The%20Monkees', {
        status: 200,
        body: htmlString
      })
    })

    //DAYDREAM INTERCEPTS
    cy.intercept('GET', 'https://en.wikipedia.org/w/api.php?action=parse&page=Daydream+Believer&prop=links&format=json&origin=*', {
      status: 200,
      body: {
        parse: {
          links: [
            {'*': 'gorilla', 'exists': '', ns: 0},
            {'*': 'college', 'exists': '', ns: 0},
            {'*': 'music', 'exists': '', ns: 0},
            {'*': 'psychadelic', 'exists': '', ns: 0},
          ],
          pageid: 31417,
          title: "Daydream Believer"
        }
      }
    })

    cy.fixture('daydream.txt').then(htmlString => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/Daydream%20Believer', {
        status: 200,
        body: htmlString
      })
    })

    //MUSA INTERCEPTS
    cy.intercept('GET', 'https://en.wikipedia.org/w/api.php?action=parse&page=musa&prop=links&format=json&origin=*', {
      status: 200,
      body: {
        parse: {
          links: [
            {'*': 'gorilla', 'exists': '', ns: 0},
            {'*': 'jungle', 'exists': '', ns: 0},
            {'*': 'music', 'exists': '', ns: 0},
            {'*': 'genus', 'exists': '', ns: 0},
            {'*': 'banana', 'exists': '', ns: 0}
          ],
          pageid: 31417,
          title: "musa (genus)"
        }
      }
    })

    cy.fixture('musaHtmlString.txt').then(htmlString => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/musa', {
        status: 200,
        body: htmlString
      })
    })

    //BANANA INTERCEPTS
    cy.intercept('GET', 'https://en.wikipedia.org/w/api.php?action=parse&page=banana&prop=links&format=json&origin=*', {
      status: 200,
      body: {
        parse: {
          links: [
            {'*': 'gorilla', 'exists': '', ns: 0},
            {'*': 'jungle', 'exists': '', ns: 0},
            {'*': 'music', 'exists': '', ns: 0},
            {'*': 'The Monkees', 'exists': '', ns: 0},
            {'*': 'banana', 'exists': '', ns: 0}
          ],
          pageid: 31417,
          title: "banana"
        }
      }
    })

    cy.fixture('bananaHtmlString.txt').then(htmlString => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/banana', {
        status: 200,
        body: htmlString
      })
    })


    //TESTS
    //VALIDATE HOMEPAGE
    cy.visit('http://localhost:3000/')
      .get('a').should('have.attr', 'href').should('include', '/HomePage')
      .get('section').children().should("have.length", 4)
      .get('a')
      .click()
      .url().should('eq', 'http://localhost:3000/HomePage')

    cy.get('nav').find('img').should('have.attr', 'src').should('include', '/assets/DB-horizontal-w-banana.svg')
    cy.get('nav').contains('Back')
      .get('nav').contains('h2', '1 Clicks')
      .get('nav').contains('h2', 'Start Point:')
      .get('nav').contains('p', 'Monkees')
      .get('nav').contains('h2', 'Destination:')
      .get('nav').contains('p', 'Banana')

    cy.get('#links-container').contains('h3', 'Links')
      .get('#links-container').contains('a', 'gorilla')
      .get('#links-container').contains('a', 'Daydream Believer')
      .get('#links-container').contains('a', 'music')
      .get('#links-container').contains('a', 'musa')
      .get('#links-container').contains('a', 'banana')

    cy.get('#page-container').find('img').should('have.attr', 'src').should('include', '/assets/link-icon.svg')
      .get('#page-container').contains('h3', 'The Monkees')

    //CLICK DAYDREAM BELIEVER
    cy.get('#links-container')
      .contains('a', 'Daydream Believer')
      .click()

    //CLICK BACK  
      .get('#main-page').children().should("have.length", 2)
      .get('nav').contains('Back')
      .click()

    //CLICK MUSA
    cy.get('#main-page').children().should("have.length", 1)
      .get('#links-container')
      .contains('a', 'musa')
      .click()

    //CLICK BANANA
    cy.get('#main-page').children().should("have.length", 2)
      .get('#links-container')
      .contains('a', 'banana')
      .click()

    //WIN
    cy.get('h2').contains('YOU WIN!!!')
      .get('h2').contains('In 4 clicks')

  })
})
