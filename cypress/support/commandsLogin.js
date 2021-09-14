import loc from './locators'

Cypress.Commands.add('AcessarSite', () => {
    cy.visit(loc.SITE.URL2)
})

Cypress.Commands.add('EfetuarLogin', (email, senha) => {
var email;
var senha;

    if(email.length >= 1 && senha.length >= 1)
    {
    cy.get(loc.LOGIN.CAMP_EMAIL_LOGIN).type(email)
    cy.get(loc.LOGIN.CAMP_SENHA_LOGIN).type(senha)
    }



    else if(email.length == 0 && senha.length >= 1)
    {
    cy.get(loc.LOGIN.CAMP_SENHA_LOGIN).type(senha)
    }



    else if(email.length >= 1 && senha.length == 0)
    {
    cy.get(loc.LOGIN.CAMP_EMAIL_LOGIN).type(email)
    }
})

Cypress.Commands.add('ClicarBtnSignin', (btn) => {
var btn;

    if(btn == 'yes')
    {
    cy.get(loc.LOGIN.BTN_SIGNIN).click()
    }
})


