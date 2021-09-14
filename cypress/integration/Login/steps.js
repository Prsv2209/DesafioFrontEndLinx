


	

		Given(/^que eu esteja na tela de Login$/, () => {
			cy.AcessarSite()
		});

		And(/^preencho o Email e senha com informações válidas$/, () => {
			cy.EfetuarLogin('teste@QA.com.br', 'prsv@215')
		});

		When(/^clico no botao de Sign in$/, () => {
			cy.ClicarBtnSignin('yes')
		});

		Then(/^é apresentada uma mensagem de "([^"]*)"$/, (args1) => {
			cy.contains('Welcome to your account. Here you can manage all of your personal information and orders.').should('contains.text', args1)
		});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Given(/^que eu esteja na tela de Login$/, () => {
	cy.AcessarSite()
});

When(/^preencho o Email e senha com informações invalidas$/, () => {
	cy.EfetuarLogin('teste@QA.com', 'prsv@215')
	cy.ClicarBtnSignin('yes')
});


Then(/^e mostrada uma mensagem de "([^"]*)"$/, (args2) => {
	cy.contains('Authentication failed.').should('contains.text', args2)
});
