const dayjs = require('dayjs')
const todaysDate = dayjs().format('DDMMYYYYHHmm')



        Given(/^que eu esteja na tela de cadastro$/, () => {
            cy.AcessaSiteCadastro()
        });

        And(/^preencho o formulario com informações válidas$/, () => {
            cy.Preencheemail(`${todaysDate}@testeQA.com.br`)
            cy.wait(5000)
            cy.PreencherYourPesonal('mrs', 'Teste', 'QA', `${todaysDate}@testeQA.com.br`, 'prsv@215', '22', 'September', '1998', 'yes', 'yes')
            cy.PreencherAddress('QA', 'Teste', 'TesteQA', 'Noriega St', 'California St', 'San Francisco', 'California', '94121', '', 'TESTE POC', '123456789', '987654321')   
        });

        When(/^clico no botao de registrar$/, () => {
            cy.ClicarBtnRegister()
        });

        Then(/^é apresentada uma mensagem de sucesso "([^"]*)"$/, (args1) => {
            cy.contains('Welcome to your account.').should('contains.text', args1)
        });





Given(/^que eu esteja na tela de cadastro$/, () => {
	return true;
});
