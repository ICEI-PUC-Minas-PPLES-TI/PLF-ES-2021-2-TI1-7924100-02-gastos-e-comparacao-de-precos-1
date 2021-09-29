# Gestão de Configuração


## Controle de Versão

O git será utilizado para controle das versões com o repositório sendo hospedado no [GitHub](https://github.com/ICEI-PUC-Minas-PPLES-TI/PLF-ES-2021-2-TI1-7924100-02-gastos-e-comparacao-de-precos-1)

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software

As demais branchs para desenvolvimento devem respeitar o padrão levando em conta os valores de tickets do Trello.
- `develop-numero_task-descricao_breve`

* Os commits sempre devem possuir o número e descrição do Trello atrelado ao corpo do commit.
* Commits não devem ser feitos na master, devem ser sempre feitos em suas respectivas branches e mergeados na master.
* Deve sempre haver aviso prévio por algum canal de comunicação conhecido pelo grupo informando que um merge na master está sendo feito.

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Toda issue deve estar relacionada a um ticket no Trello, tanto as issues quanto os tickets devem ser geridos em sincronia. Ou seja,
em ambos lugares a task tem que estar com o mesmo status.

## Hospedagem

A hospedagem será feita no GitHub pages, aproveitando o repositório já existente do projeto e permitindo com que o GitHub 
faça o controle do deploy das alterações que ocorrem na master sem precisar de um controle externo.