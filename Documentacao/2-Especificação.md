# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

Nesse tópico serão apresentadas as personas, histórias de usuários, requisitos funcionais e não funcionais
assim como os projetos feitos no Miro para estruturas as funcionalidades e alvos que o projeto pretende
alcançar.

## Personas

> Enumere e detalhe as personas da sua solução. Para
> tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> Lembre-se que você deve ser enumerar e descrever precisamente e
> personalizada todos os clientes ideais que sua solução almeja.

> Persona base para desenvolvimento das demais:
![alt](images\Spec\persona.jpg)

Carlos Alberto tem 32 anos, trabalha como funcionário público e tem o sonho de se
aposentar cedo. Já é casado e possui 2 filhos. Passa boa parte do tempo do seu dia no
computador e toca violão no seu tempo livre. É o único sustento da família e tem como objetivo
chave economizar dinheiro e sempre estar pronto para situações financeiras adversas. Está
sempre atento a situação econômica e política do país.

Giovana possui 22 anos, mora em uma república e estuda artes cênicas em uma faculdade de  particular com bolsa. Faz estágio. Tem o sonho de se mudar para fora do país ou se possível
conseguir uma bolsa de estudos no exterior. Tem como hobby sair com os amigos e encontrar a
família quando possível. Sempre que possível envia parte da sua renda para auxliar a família.

Felipe tem 25 anos e é recém formado no curso de Ciência da Computação. Acaba de se mudar para
São Paulo onde o custo de vida é mais alto por conta de uma oportunidade de emprego. Possui
2 cachorros e mora na região central da cidade. Gosta de passar o seu tempo livre lendo
ou programando projetos pessoais que vão além da sua ferramenta principal de trabalho.
Costuma passar bastante tempo assistindo jornais e acompanhando notícias do setor financeiro.


## Histórias de Usuários

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Clientes (Compradores)  | Encontrar mercados que vendem mais barato          | Economizar no meu gasto mensal com mantimentos               |
|Vendedor       | Alcançar clientes e veicular minhas promoções                  | Aumentar o meu número de clientes e elevar a minha rentabilidade |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais
>   (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais
>   (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.

### Mural de possibilidades com as ideias propostas pela equipe
<br/><br/>
![Mural de Possibilidades](images\Spec\mural_possibilidades.jpg)


### Mapa de priorização das demandas e funcionalidades
<br/><br/>
![Mapa de Priorização](images\Spec\mapa_priorizacao.jpg)

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que as lojas cadastrem produtos | ALTA | 
|RF-002| Permitir busca por produtos por clientes  | ALTA |
|RF-003| Permitir filtragem de produtos por preço   | ALTA |
|RF-004| Diferenciação no login de Compradores e Vendedores   | MEDIA |
|RF-005| Cadastro de lista de compras para comparação de preços  | MEDIA |
|RF-006| Permitir filtragem de produtos por categoria  | MEDIA |
|RF-007| Sinalizar estabelecimentos próximos para o comprador  | MEDIA |
|RF-008| Plotar gráficos para exibir valores  | BAIXA |
|RF-009| Permitir filtragem de produtos por marca  | BAIXA |
|RF-010| Calculadora básica  | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Deve ser uma solução nativa para WEB                  |



> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
