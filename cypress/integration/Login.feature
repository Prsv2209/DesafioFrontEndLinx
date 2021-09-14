Feature: Login caminho feliz

   Como usuario, desejo utilizar a função de Login
   Para que possa efetuar compras no site


    @Positivo
   Scenario: Logar com usuário válido
     Given que eu esteja na tela de Login
     And preencho o Email e senha com informações válidas
     When clico no botao de Sign in
     Then é apresentada uma mensagem de "Welcome to your account. Here you can manage all of your personal information and orders."

    Scenario: Logar com usuario invalido
      Given que eu esteja na tela de Login
      When preencho o Email e senha com informações invalidas
      Then e mostrada uma mensagem de "Authentication failed."


    
