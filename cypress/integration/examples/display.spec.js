/// <reference types="Cypress" />
import { characters } from '../../fixtures/characters';

context('Display', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })



  it('should display cards corresponding to the number of characters', () => {
    let charactersnumber = characters.length;
    let cardcount = 0;

    cy.get('.v-card').each(() => { cardcount++; }).then(() => assert.isTrue(cardcount == charactersnumber, 'vals equal'));

  })

  it('should contains character info', () => {
    let firstChar = characters[0];
    cy.get('.v-card').then((card) => {
      let title = card.children('.v-card__title')[0].textContent;
      let subtitle = card.children('.v-card__subtitle')[0].textContent;
      let text = card.children('.v-card__text')[0].textContent;
      expect(title).to.equal(firstChar.name);
      expect(subtitle).to.contain("Caracteristics");
      expect(text).to.contain(firstChar.height);
      expect(text).to.contain(firstChar.mass);
    })

  })

  it('should display search bar', () => {
    expect('input[placeholder="Search"]').to.exist;
  })


})
