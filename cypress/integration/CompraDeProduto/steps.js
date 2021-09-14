




Given(/^que eu esteja logado com usuario valido$/, () => {
	cy.AcessaSiteCadastro()
	cy.EfetuarLogin('teste@QA.com.br', 'prsv@215')
	cy.ClicarBtnSignin('yes')
});

When(/^Quando sigo o passo a passo corretamente$/, () => {
	cy.EfetuarCompra()
});

Then(/^é apresentado a mensagem de "([^"]*)"$/, (args1) => {
	cy.contains('Your order on My Store is complete.').should('have.text','Your order on My Store is complete.')
});
