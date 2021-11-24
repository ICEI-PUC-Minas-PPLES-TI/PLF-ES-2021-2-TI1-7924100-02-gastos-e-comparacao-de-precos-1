// declara um conjunto inicial de estoque
var db_estoque_inicial = {
  data: [
    {
      id: 1,
      produto: "Café Tradicional - 3 Corações - Mercearia",
      estabelecimento: "Supermercado BH",
      valor: "R$ 7,39",
      quantidade: "4",
      atualizado: "20/10/2021",
    },
    {
      id: 2,
      produto: "Suco de Maracujá - Tial - Bebidas",
      estabelecimento: "Supermercado Carrefour",
      valor: "R$ 5,39",
      quantidade: "5",
      atualizado: "20/10/2021",
    },
    {
      id: 3,
      produto: "Leite Longa Vida Integral - Cotochés - Laticínios e Ovos",
      estabelecimento: "Extra Hipermercado",
      valor: "R$ 3,58",
      quantidade: "3",
      atualizado: "20/10/2021",
    },
    {
      id: 4,
      produto: "Leite Longa Vida Desnatado -  Cotochés - Laticínios e Ovos",
      estabelecimento: "Supermercado Carrefour",
      valor: "R$ 4,29",
      quantidade: "2",
      atualizado: "20/10/2021",
    },
    {
      id: 5,
      produto: "Requeijão Tradicional - Itambé - Queijos e frios",
      estabelecimento: "Extra Hipermercado",
      valor: "R$ 9,49",
      quantidade: "1",
      atualizado: "20/10/2021",
    },
    {
      id: 6,
      produto: "Requeijão Tradicional - Itambé - Queijos e frios",
      estabelecimento: "Supermercado Verdemar",
      valor: "R$ 9,39",
      quantidade: "6",
      atualizado: "20/10/2021",
    },
    {
      id: 7,
      produto: "Pernil Suíno - Kg - Supermercado BH - Açougue e peixaria",
      estabelecimento: "Supermercado Verdemar",
      valor: "R$ 14,90",
      quantidade: "8",
      atualizado: "20/10/2021",
    },
    {
      id: 8,
      produto: "Arroz Agulhinha - Tipo 1 - Supermercado BH - Mercearia",
      estabelecimento: "Supermercado BH",
      valor: "R$ 16,98",
      quantidade: "2",
      atualizado: "20/10/2021",
    },
    {
      id: 9,
      produto: "Leite Longa Vida Integral - Supermercado BH - Laticínios e Ovos",
      estabelecimento: "Supermercado BH",
      valor: "R$ 3,39",
      quantidade: "24",
      atualizado: "20/10/2021",
    },
    {
      id: 10,
      produto: "Café Extra Forte - Pilão - Mercearia",
      estabelecimento: "Supermercado Carrefour",
      valor: "R$ 13,49",
      quantidade: "50",
      atualizado: "20/10/2021",
    },
  ],
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem("db_estoque"));
if (!db) {
  db = db_estoque_inicial;
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function insertEstoque(estoque) {
  console.log(estoque)
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = db.data[db.data.length - 1].id + 1;
  let novoEstoque = {
    id: novoId,
    produto: estoque.produto,
    estabelecimento: estoque.estabelecimento,
    valor: estoque.valor,
    quantidade: estoque.quantidade,
    atualizado: estoque.atualizado,
  };

  // Insere o novo objeto no array
  db.data.push(novoEstoque);
  displayMessage("Produto inserido com sucesso no estoque");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_estoque", JSON.stringify(db));
}

function updateEstoque(id, estoque) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
    (db.data[index].produto = estoque.produto),
    (db.data[index].estabelecimento = estoque.estabelecimento),
    (db.data[index].valor = estoque.valor),
    (db.data[index].quantidade = estoque.quantidade),
    (db.data[index].atualizado = estoque.atualizado);

  displayMessage("Estoque alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_estoque", JSON.stringify(db));
}

function deleteEstoque(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Produto removido com sucesso do estoque");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_estoque", JSON.stringify(db));
}

async function getProdutos(){
  produtos = await JSON.parse(localStorage.getItem("db_produto")).data;

  selectContainer=document.getElementById("selectContainer")
 
  selectContainer.insertAdjacentHTML('beforeend','<select name="Produto" id="selectProdutos" class="form-control" id="inputProduto" required>')
  selectProduto=document.getElementById("selectProdutos")

  produtos.forEach(produto => {
    console.log(produto)
    let option = document.createElement("option")
    option.value = `${produto.nome} - ${produto.fabricante} - ${produto.categoria}`
    option.text = `${produto.nome} - ${produto.fabricante} - ${produto.categoria}`
    selectProduto.appendChild(option)
  })
}
getProdutos()

async function getEstabelecimento(){
  estabelecimentos = await JSON.parse(localStorage.getItem("db_estabelecimento")).data;

  selectEstabelecimentoContainer=document.getElementById("selectEstabelecimentoContainer")
 
  selectEstabelecimentoContainer.insertAdjacentHTML('beforeend','<select name="Estabelecimento" class="form-control" id="selectEstabelecimento" required>')
  selectEstabelecimento=document.getElementById("selectEstabelecimento")

  estabelecimentos.forEach(estabelecimento => {
    console.log(estabelecimento)
    let option = document.createElement("option")
    option.value = `${estabelecimento.nome} - ${estabelecimento.regiao}`
    option.text = `${estabelecimento.nome} - ${estabelecimento.regiao}`
    selectEstabelecimento.appendChild(option)
  })
}
getEstabelecimento()
