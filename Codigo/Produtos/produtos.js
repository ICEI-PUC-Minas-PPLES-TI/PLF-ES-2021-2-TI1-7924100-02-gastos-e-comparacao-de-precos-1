// declara um conjunto inicial de produtos
var db_produtos_inicial = {
  data: [
    {
      id: 1,
      nome: "Café Tradicional",
      fabricante: "3 Corações",
      categoria: "Mercearia",
    },
    {
      id: 2,
      nome: "Suco de Maracujá",
      fabricante: "Tial",
      categoria: "Bebidas",
    },
    {
      id: 3,
      nome: "Leite Longa Vida Integral",
      fabricante: "Cotochés",
      categoria: "Laticínios e Ovos",
    },
    {
      id: 4,
      nome: "Leite Longa Vida Integral",
      fabricante: "Cotochés",
      categoria: "Laticínios e Ovos",
    },
    {
      id: 5,
      nome: "Requeijão Tradicional",
      fabricante: "Itambé",
      categoria: "Queijos e frios",
    },
    {
      id: 6,
      nome: "Requeijão Tradicional",
      fabricante: "Itambé",
      categoria: "Queijos e frios",
    },
    {
      id: 7,
      nome: "Pernil Suíno - Kg",
      fabricante: "Supermercado BH",
      categoria: "Açougue e peixaria",
    },
    {
      id: 8,
      nome: "Arroz Agulhinha - Tipo 1",
      fabricante: "Supermercado BH",
      categoria: "Mercearia",
    },
    {
      id: 9,
      nome: "Leite Longa Vida Integral",
      fabricante: "Supermercado BH",
      categoria: "Laticínios e Ovos",
    },
    {
      id: 10,
      nome: "Café Extra Forte",
      fabricante: "Pilão",
      categoria: "Mercearia",
    },
  ],
};

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem("db_produto"));
if (!db) {
  db = db_produtos_inicial;
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $("#msg").html('<div class="alert alert-warning">' + msg + "</div>");
}

function insertProduto(produto) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = db.data[db.data.length - 1].id + 1;
  let novoProduto = {
    id: novoId,
    nome: produto.nome,
    fabricante: produto.fabricante,
    categoria: produto.categoria,
  };

  // Insere o novo objeto no array
  db.data.push(novoProduto);
  displayMessage("Produto inserido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_produto", JSON.stringify(db));
}

function updateProduto(id, produto) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map((obj) => obj.id).indexOf(id);

  // Altera os dados do objeto no array
  (db.data[index].nome = produto.nome),
    (db.data[index].fabricante = produto.fabricante),
    (db.data[index].categoria = produto.categoria);

  displayMessage("Produto alterado com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_produto", JSON.stringify(db));
}

function deleteProduto(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id;
  });

  displayMessage("Produto removido com sucesso");

  // Atualiza os dados no Local Storage
  localStorage.setItem("db_produto", JSON.stringify(db));
}
