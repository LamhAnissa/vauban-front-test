/// <reference types="Cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })



  it('should filter and return right number of cards', () => {
    let cardcount = 0;
    cy.get('input[placeholder="Search"]').type('Luke').then(() => {
      cy.get('.v-card').each(() => cardcount++).then(() =>
        expect(cardcount).to.equal(1)
      )
    })

  })

  it('should filter and return right cards', () => {
    let cardcount = 0;
    cy.get('input[placeholder="Search"]').type('Luke').then(() => {
      cy.get('.v-card').then((card) => {
        let title = card.children('.v-card__title')[0].textContent;
        expect(title).to.contain("Luke")
      }
      )
    })

  })

  it('should filter and return no card', () => {
    let btncount = 0;

    cy.get('input[placeholder="Search"]').type('00000').then(() => {
      cy.get('button[disabled="disabled"]').each(() => btncount++).then(() =>
        expect(btncount).to.equal(1)
      )
    })
  })
})




