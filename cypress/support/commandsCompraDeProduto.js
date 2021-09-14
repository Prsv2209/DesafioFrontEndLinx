
import loc from './locators'


Cypress.Commands.add('EfetuarCompra', () => {

    cy.get(loc.COMPRA.LINK_WOMEN)                       .click()
    cy.get(loc.COMPRA.BTN_ADD_CART_BLOUSE)              .click()
    cy.wait(2000)
    cy.get(loc.COMPRA.BTN_PROCEED_TO_CHECKOUT)          .click()
    cy.get(loc.COMPRA.BTN_PROCEED_TO_CHECKOUT_SUMMARY)  .click()
    cy.get(loc.COMPRA.BTN_PROCEED_TO_CHECKOUT_ADDRESS)  .click()
    cy.get(loc.COMPRA.CHECKBOX_IGREE)                   .click()
    cy.get(loc.COMPRA.BTN_PROCEED_TO_CHECKOUT_SHIPPING) .click()
    cy.get(loc.COMPRA.BTN_PAYBYBANKWIRE)                .click()
    cy.get(loc.COMPRA.BTN_ICONFIRMMYORDER)              .click()

})