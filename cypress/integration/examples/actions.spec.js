/// <reference types="Cypress" />

context('Actions', () => {
    before(() => {
        cy.visit('http://localhost:8080')
    })



    it('should click on the first card and add it to the selection', () => {

        let titleCard = cy.get('.v-card__title').children('.textEllipsis.headline').first()
        cy.get('.v-card').first().click().then(() => {
            cy.get('button').click().then(() => {
                cy.get('.v-list-item__title').then((title) => {
                    expect(title.text()).to.equal("Luke Skywalker")
                });

            }

            )
        })

    })

    it('should not be possible to add a character already in selection', () => {
        let itemscount = 0;
        cy.get('.v-card').first().click().then(() => {
            let listItems = cy.get('.v-list-item__title').each(() => itemscount++).then(() => {
                assert.equal(itemscount, 1, 'vals equal');
            })
        });

    })


    it('should delete a character from the selection', () => {
        let itemscount = 0;
        cy.get('button').last().click().then(() => {
            cy.get('.v-list-item__title').should('not.exist');

        }

        )

    })
})
