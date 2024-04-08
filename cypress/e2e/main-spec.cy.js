describe('destination: bananas', () => {
  it('should visit landing page and validate elements on page load', () => {
    cy.visit('http://localhost:3000/')

  })

  it('should go to main page and see game display on button click', () => {
    cy.intercept('GET', 'https://en.wikipedia.org/api/rest_v1/page/random/title', {
      status: 200,
      body: {
        "items": [
            {
                "title": "Mike_Phipps",
                "page_id": 3994486,
                "rev": 1217089053,
                "tid": "3e948720-f5ae-11ee-8112-87211048f0b9",
                "namespace": 0,
                "user_id": 41916931,
                "user_text": "Sandman766",
                "timestamp": "2024-04-03T19:41:45Z",
                "comment": "Added NFL Career Statistics section to article.",
                "tags": [
                    "visualeditor"
                ],
                "restrictions": [],
                "page_language": "en",
                "redirect": false
            }
        ]
      }
    })

    cy.intercept('GET', 'https://en.wikipedia.org/w/api.php?action=parse&page=Mike+Phipps&prop=links&format=json&origin=*', {
      status: 200,
      body: {
        parse: {
          links: [
            {'*': 'fish', 'exists': '', ns: 0},
            {'*': 'people', 'exists': '', ns: 0},
            {'*': 'things', 'exists': '', ns: 0}
          ],
          pageid: 3994486,
          title: "Mike Phipps"
        }
      }

    })

    cy.visit('http://localhost:3000/HomePage')

  })
})
