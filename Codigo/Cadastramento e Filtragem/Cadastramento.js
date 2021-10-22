// declara um conjunto inicial de produtos
var db_produtos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Café Tradicional",
            "marca": "3 Corações",
            "categoria": "Mercearia",
            "valor": "R$ 7,39",
            "estabelecimento": "Extra Hipermercados",
            "regiao": "Centro"
        },
        {
            "id": 2,
            "nome": "Suco de Maracujá",
            "marca": "Tial",
            "categoria": "Bebidas",
            "valor": "R$ 5,39",
            "estabelecimento": "Supermercado Dia",
            "regiao": "Sul"
        },
        {
            "id": 3,
            "nome": "Leite Longa Vida Integral",
            "marca": "Cotochés",
            "categoria": "Laticínios e Ovos",
            "valor": "R$ 3,58",
            "estabelecimento": "Supermercado Dia",
            "regiao": "Sul"
        },
        {
            "id": 4,
            "nome": "Leite Longa Vida Integral",
            "marca": "Cotochés",
            "categoria": "Laticínios e Ovos",
            "valor": "R$ 4,29",
            "estabelecimento": "Supermercado Verdemar",
            "regiao": "Sul"
        },
        {
            "id": 5,
            "nome": "Requeijão Tradicional",
            "marca": "Itambé",
            "categoria": "Queijos e frios",
            "valor": "R$ 9,49",
            "estabelecimento": "Supermercado SuperNosso",
            "regiao": "Sul"
        },
        {
            "id": 6,
            "nome": "Requeijão Tradicional",
            "marca": "Itambé",
            "categoria": "Queijos e frios",
            "valor": "R$ 9,39",
            "estabelecimento": "Supermercado Verdemar",
            "regiao": "Sul"
        },
        {
            "id": 7,
            "nome": "Pernil Suíno - Kg",
            "marca": "Supermercado BH",
            "categoria": "Açougue e peixaria",
            "valor": "R$ 14,90",
            "estabelecimento": "Supermecado BH",
            "regiao": "Oeste"
        },
        {
            "id": 8,
            "nome": "Arroz Agulhinha - Tipo 1",
            "marca": "Supermercado BH",
            "categoria": "Mercearia",
            "valor": "R$ 16,98",
            "estabelecimento": "Supermecado BH",
            "regiao": "Oeste"
        },
        {
            "id": 9,
            "nome": "Leite Longa Vida Integral",
            "marca": "Supermercado BH",
            "categoria": "Laticínios e Ovos",
            "valor": "R$ 3,39",
            "estabelecimento": "Supermecado BH",
            "regiao": "Oeste"
        },
        {
            "id": 10,
            "nome": "Café Extra Forte",
            "marca": "Pilão",
            "categoria": "Mercearia",
            "valor": "R$ 13,49",
            "estabelecimento": "Hipermercado Extra",
            "regiao": "Oeste"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_produto'));
if (!db) {
    db = db_produtos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertProduto(produto) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoProduto = {
        "id": novoId,
        "nome": produto.nome,
        "marca": produto.marca,
        "categoria": produto.categoria,
        "valor": produto.valor,
        "estabelecimento": produto.estabelecimento,
        "regiao": produto.regiao,
        "website": produto.website
    };

    // Insere o novo objeto no array
    db.data.push(novoProduto);
    displayMessage("Produto inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_produto', JSON.stringify(db));
}

function updateProduto(id, produto) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = produto.nome,
    db.data[index].marca = produto.marca,
    db.data[index].categoria = produto.categoria,
    db.data[index].valor = produto.valor,
    db.data[index].estabelecimento = produto.estabelecimento,
    db.data[index].regiao = produto.regiao,
    db.data[index].website = produto.website

    displayMessage("Produto alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_produto', JSON.stringify(db));
}

function deleteProduto(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Produto removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_produto', JSON.stringify(db));
}