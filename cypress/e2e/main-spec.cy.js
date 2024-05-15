describe('destination: bananas', () => {
  it('should go to main page and see game display on button click', () => {
    //MONKEES INTERCEPTS

    cy.fixture('images.json').then(images => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/media-list/The%20Monkees', {
        status: 200,
        body: images
      })
    })

    cy.fixture('daydreamImg.json').then(images => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/media-list/Daydream%20Believer', {
        status: 200,
        body: images
      })
    })

    cy.fixture('musaImg.json').then(images => {
      cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/media-list/musa', {
        status: 200,
        body: images
      })
    })
    
    
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
    cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/html/banana', {
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
          title: "Banana"
        }
      }
    })

    cy.intercept('GET', 'https://api.ipify.org/?format=json', {
      status: 200,
      body: {"ip":"00.00.00.000"}
    })


    cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/media-list/banana', {
      status: 200,
    })


    //TESTS
    //VALIDATE HOMEPAGE

    cy.visit('http://localhost:3000/')
      .get('section').children('p').contains('The greedy Monkeys')
      .get('.landing-buttons > button:nth-child(1)').contains('start')
      .get('.landing-buttons > button:nth-child(2)').contains('daily-challenge')
      .get('.landing-buttons > button:nth-child(3)').contains('help')
      .get('.landing-buttons > button:nth-child(1)').click()
      .url().should('eq', 'http://localhost:3000/HomePage')

    cy.get('nav').find('img').should('have.attr', 'src').should('include', '/assets/future_white_48dp.svg')
    cy.get('nav').contains('Back')
      .get('nav').contains('#click-counter', '0 Clicks')
      .get('nav').contains(':nth-child(1) > h3', 'Start Point:')
      .get('nav').contains(':nth-child(1) > p', 'Monkees')
      .get('nav').contains(':nth-child(2) > h3', 'Destination:')
      .get('nav').contains('p', 'Banana')

    cy.wait(500)
    cy.get('#links-container').contains('h4', 'Destinations')
      .get('#links-container').contains('a', 'gorilla')
      .get('#links-container').contains('a', 'Daydream Believer')
      .get('#links-container').contains('a', 'music')
      .get('#links-container').contains('a', 'musa')
      .get('#links-container').contains('a', 'banana')

    cy.get('#page-container').contains('h5', 'The Monkees')

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
  })
})
