Feature: Cadastro caminho feliz

    Como usuario, desejo utilizar a função de cadastro
    Para que possa efetuar compras no site


    @Positivo
    Scenario: Efetuar um cadastro de usuário com informações válidas
        Given  que eu esteja na tela de cadastro
        And  preencho o formulario com informações válidas
        When  clico no botao de registrar
        Then  é apresentada uma mensagem de sucesso "Welcome to your account."

