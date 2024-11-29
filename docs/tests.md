# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta parte 1**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/cadastro.html 2) Clique em criar conta <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "registrar".
**Requisitos associados** | RF-RF-002
**Resultado esperado** | cadastro gerado com sucesso
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - cria conta/fazer login parte 2**
 :--------------: | ------------
**Procedimento**  | 1) coloque o email  e a senha cadastrada  2) Clique em "lembrar sempre" , caso desejar permanecer conectado 3) clique em entrar.
**Requisitos associados** | RF-002
**Resultado esperado** | login efetuado
**Dados de entrada** | Inserção de dados válidos no formulário de login
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Encontrar filme 
 :--------------: | ------------
**Procedimento**  | 1) clique na pagina /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/busca-ingresso.html <br> 2) clique no filtro que deseja preencher 3) Clique no botão filtrar 
**Requisitos associados** | RF-001
**Resultado esperado** | filme encontrado (mostrar filme)
**Dados de entrada** | inserção de dados especifícos no filtro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Acesso aos ingressos 
 :--------------: | ------------
**Procedimento**  | 1) clique na página Carrinho no canto superior a direita na tela  2) você conseguirá vizualizar os ingressos no carrinho 
**Requisitos associados** | RF-004
**Resultado esperado** | ver ingressos
**Dados de entrada** | clicar no Carrinho
**Resultado obtido** | sucesso


**Caso de Teste** | **CT05 - Fazer comentários
 :--------------: | ------------
**Procedimento**  | 1) clique na pagina /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/comentarios.html 2) escreva seu nome na sessão "usuário" 3)Escreva seu comentário na sessão "comentários"
3)clique em "enviar"
**Requisitos associados** | RF-005
**Resultado esperado** | Comentário públicado 
**Dados de entrada** | inserção de dados especifícos nos campos "usuários" e "comentáios"
**Resultado obtido** | Sucesso


**Caso de Teste** | **CT06 - Mostrar sessões vazias  2**
 :--------------: | ------------
**Procedimento**  | 1) clique na pagina /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/busca-ingresso.html <br> 2) clique no filtro que deseja preencher 3) Clique no botão filtrar 
**Requisitos associados** | RF-001
**Resultado esperado** | filme encontrado (mostrar filme)
**Dados de entrada** | inserção de dados especifícos no fltro
**Resultado obtido** | Sucesso


**Caso de Teste** | **CT07 - Encontrar filme 2**
 :--------------: | ------------
**Procedimento**  | 1) clique na pagina /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/busca-ingresso.html <br> 2) clique no filtro que deseja preencher 3) Clique no botão filtrar 
**Requisitos associados** | RF-001
**Resultado esperado** | filme encontrado (mostrar filme)
**Dados de entrada** | inserção de dados especifícos no fltro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Encontrar filme 2**
 :--------------: | ------------
**Procedimento**  | 1) clique na pagina /pmv-si-2024-2-pe1-t2-t2_gp04/src/html/busca-ingresso.html <br> 2) clique no filtro que deseja preencher 3) Clique no botão filtrar 
**Requisitos associados** | RF-001
**Resultado esperado** | filme encontrado (mostrar filme)
**Dados de entrada** | inserção de dados especifícos no fltro
**Resultado obtido** | Sucesso





Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.
Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.
|*Caso de Teste*                                 |*CT01 - Encontrar filmes *                                         |
|---|---|
|Requisito Associado | RF-001 -	O usuário deve ser capaz de encontrar ingressos para diversas sessões| 
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*CT02 - Criar conta*                                               |
|---|---|
|Requisito Associado | RF-002 - O usuário deve poder criar um perfil para uso da plataforma, com login e senha|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                     | 

|*Caso de Teste*                                 |*CT03 - filtrar filmes                                             |
|---|---|
|Requisito Associado | RF-003	O usuário deve ser capaz de realizar pesquisas por filtros, como pesquisa por gênero e classisficação indicativa|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                     | 

|*Caso de Teste*                                 |*CT04 - acessar ingressos                                          |
|---|---|  
|Requisito Associado | RF-004	O usuário deve ter acesso ao(s) ingresso(s) comprado(s)|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                     | 

|*Caso de Teste*                                 |*CT05 - fazer comentários                                          |
|---|---|
|Requisito Associado | O usuário deve ser capaz de comentar sobre a sessão que assistiu, apresentar críticas e informar sobre a duração dos trailers|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                     | 

|*Caso de Teste*                                 |*CT06 - escolher sessão                                            |
|---|---|
|Requisito Associado | A aplicação deve mostrar ao usuário as sessões mais vazias                                    |
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                     | 

|*Caso de Teste*                                 |*CT07 - Consumir snacks durante a sessão                           |
|---|---|
|Requisito Associado | A plataforma deve apresentar ao usuário a possibilidade de comprar lanches para consumo durante e após a sessão|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar                      | 
## Avaliação dos Testes de Software

|*Caso de Teste*                                 |*CT08 - Pagar o Estacionamento                                      |
|---|---|
|Requisito Associado | A aplicação deve apresentar a possibilidade de pagar o ticket de estacionamento|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 
## Avaliação dos Testes de Software

odos os testes realizados foram bem-sucedidos, e as funcionalidades estão operando conforme esperado. Não houve falhas durante a execução dos testes, o que garante o bom desempenho do sistema. Em resumo, tudo está funcionando com êxito.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja assitir a um filme no cinema. Encontre no site um filme  e escolha a sua sessão. |
| 2             | Você é uma pessoa que deseja relaxar assindo um filme, encontre uma sessão vazia  |
| 3             | você gostaria de comentar sobre sessão ou filme que acabou de assir|
| 4             | você é capaz de conseguir encontrar um filme de acordo com seus requisistos, (filtros desejados)|




## Registro de Testes de Usabilidade

Cenário 1:  Você é uma pessoa que deseja assitir a um filme no cinema. Encontre no site um filme  e escolha a sua sessão

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 28.15 segundos                  |
| 1       | SIM             | 5                    | 27.85 segundos                  |
| **Média**     | 100%           | 5                | 27.95 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 27.57 segundos |


Cenário | 2: Você é uma pessoa que deseja relaxar assindo um filme, encontre uma sessão vazia  |

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                  |                
| 2       | SIM             | 4                    | 23.80 segundos                  | 
| 3       | SIM             | 5                    | 23.44 segundos                  |
| **Média**     | 100%           | 4.66                | 30.05 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


Cenário | 3: você gostaria de comentar sobre sessão ou filme que acabou de assir |

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 11.68 segundos                  |                        
| 2       | SIM             | 5                    | 10.20 segundos                  |     
| 3       | SIM             | 5                    | 12.15 segundos                  |
| **Média**     | 100%           | 5                |11.34 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 11.57 segundos |



Cenário | 4: você é capaz de conseguir encontrar um filme de acordo com seus requisistos, (filtros desejados)|

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    |10.56 segundos                   |    
| 1       | SIM             | 5                    |10.15 segundos                   |
| 1       | SIM             | 5                    |10.25 segundos                   | 
| **Média**     | 100%           | 5                |10.32 segundos      |                         |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


## Avaliação dos Testes de Usabilidade

 O usuário conseguiu realizar o login de forma bem-sucedida, sem encontrar dificuldades no processo de autenticação. Após acessar o sistema, foi capaz de selecionar um filme e a sessão que mais
atendia às suas preferências.
 Além disso, ele teve a oportunidade de assistir ao filme e fornecer um comentário sobre sua experiência, contribuindo para a avaliação do conteúdo. Durante todas essas etapas, não houve falhas 
 significativas, e o desempenho das funcionalidades foi satisfatório. A navegação foi fluida e sem erros, proporcionando uma experiência agradável para o usuário. Como resultado, conclui-se que 
 as funcionalidades testadas operaram com sucesso. A taxa de falhas foi mínima, indicando uma boa estabilidade do sistema.









