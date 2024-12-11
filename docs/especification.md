# Especificações do Projeto

## Personas

1. Meu nome é Sabrina, tenho 25 anos, estou terminando a faculdade em Administração e moro em São Paulo. Tenho muito apreço por filmes, e por isso, frequento o cinema toda semana, muitas vezes com amigos ou com meu namorado. Sempre quero assistir alguma pré-estreia no cinema, mas já me frustrei por não conseguir o ingresso a tempo. Procuro uma forma rápida e fácil de comprar ingressos, pipoca e acompanhar os lançamentos dos cinemas da região.

1. Me chamo Jorge, sou empresário e dono da rede de cinemas CineSuper.  Meus cinemas têm um ponto de vendas bem tradicional, com sistema somente na bilheteria, para marcar os assentos e gerar a contabilidade. Gostaria de poder oferecer uma maneira de vender os ingressos à distância para os meus clientes, assim, consigo me planejar para a quantidade de clientes, abrindo mais uma sala quando necessário e fornecendo uma forma mais fácil de me comunicar com os clientes e vender.

1. Me chamo Pedro, tenho 18 anos, moro em Belo Horizonte e acabo de ingressar na faculdade de cinema e me considero um cinéfilo. Amo a experiência de ver filmes no cinema e assisto de tudo! Procuro sempre os ingressos mais baratos e frequento vários cinemas na cidade. Estou sempre disponível para ir ao cinema, mas acabo perdendo tempo demais tentando achar as sessões mais baratas, e dos filmes que ainda não assisti.

1. Meu nome é Ana, tenho 22 anos, moro em Curitiba e sou farmacêutica. Vou ao cinema no máximo três vezes no ano, geralmente para ver os grandes lançamentos. Eu gosto da experiência de ir ao cinema, mas considero muito estressante a compra de ingressos, principalmente em filmes de grande procura, já que, frequentemente acompanhada do meu namorado e amigos, preciso de assentos próximos. Não me incomodo com os preços, mas gostaria de ter mais conforto na experiência de compra de ingressos online.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`               |PARA ... `MOTIVO/VALOR`                     |
|--------------------|--------------------------------------------------|--------------------------------------------|
|Cliente do Cinema   | Comprar ingressos com antecedência               | Garantir um lugar nos filmes disputados    |
|Cliente do Cinema   | Ter o melhor lugar possível escolhido na sala    | Me sentir mais confortável vendo o filme   |
|Cliente do Cinema   | Comprar pipoca e acompanhamentos online          | Pegar pipoca e acompanhamentos rapidamente |
|Cliente do Cinema   | Compartilhar os ingressos com os amigos          | Poder entrar na sala antes deles           |
|Cliente do Cinema   | Ver os filmes e horários de vários cinemas       | Escolher a opção mais conveniente          |
|Dono do Cinema      | Encantar o cliente com um sistema fácil de usar  | Ter clientes sempre usando o aplicativo    |
|Dono do Cinema      | Ter um relatório de vendas                       | Fazer a contabilidade no fechamento do mês |
|Dono do Cinema      | Integrar as vendas online com a bilheteria física| Ter coerência entre os dois sistemas       |
|Dono do Cinema      | Conduzir campanhas de marketing                  | Manter uma comunicação com o cliente       |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O usuário deve ser capaz de encontrar ingressos para diversas sessões | ALTA |  
|RF-002| O usuário deve poder criar um perfil para uso da plataforma, com login e senha  | ALTA | 
|RF-003| O usuário deve ser capaz de realizar pesquisas por filtros, como pesquisa por gênero e classisficação indicativa  | MÉDIA | 
|RF-004| O usuário deve ter acesso ao(s) ingresso(s) comprado(s)  | ALTA | 
|RF-005| O usuário deve ser capaz de comentar sobre a sessão que assistiu, apresentar críticas e informar sobre a duração dos trailers  | MÉDIA | 
|RF-006| A aplicação deve mostrar ao usuário as sessões mais vazias | ALTA | 
|RF-007| A plataforma deve apresentar ao usuário a possibilidade de comprar lanches para consumo durante e após a sessão | BAIXA | 
|RF-008| A aplicação deve apresentar a possibilidade de pagar o ticket de estacionamento | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| A aplicação deve ser responsiva | ALTA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  MÉDIA | 
|RNF-003| A aplicação deve ser capaz de suportar picos de tráfego, especialmente durante lançamentos de filmes populares e horários de pico, como finais de semana |  MÉDIA | 
|RNF-004| A aplicação deve estar em conformidade com as diretrizes de acessibilidade WCAG 2.1 para garantir que usuários com deficiência possam usar o sistema | MÉDIA | 
|RNF-005| A aplicação deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) e dispositivos móveis | MÉDIA | 
|RNF-006| A aplicação deve estar em conformidade com as regulamentações de proteção de dados, como a LGPD (Lei Geral de Proteção de Dados) no Brasil, e outras leis locais relacionadas a transações financeiras e privacidade | ALTA | 
|RNF-007| Deve ter uma política de privacidade clara e acessível, informando aos usuários como seus dados serão coletados, utilizados e protegidos | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                     |
|--|---------------------------------------------------------------|
|01| Não pode usar aplicação paga de terceiros                     |
|02| Deve utilizar apenas soluções gratuitas ou open source        |
|03| A aplicação deve ser feita somente com HTML, CSS e JavaScript |
|04| A aplicação não pode depender de módulos de backend           |
|05| Os dados devem ser armazenados sem o uso de Banco de Dados    |
