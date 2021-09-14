Feature: Compra de produtos

    Como usuário, desejo efetuar uma compra
    Para que possa receber o produto

    @Positivo
    Scenario: Efetuar compra de produto
         Given  que eu esteja logado com usuario valido
         When   Quando sigo o passo a passo corretamente
         Then  é apresentado a mensagem de "Your order on My Store is complete."

