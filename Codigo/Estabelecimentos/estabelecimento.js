// declara um conjunto inicial de estabelecimentos
var db_estabelecimento_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Extra Hipermercados",
            "regiao": "Centro"
        },
        {
            "id": 2,
            "nome": "Supermercado Dia",
            "regiao": "Sul"
        },
        {
            "id": 3,
            "nome": "Supermercado Verdemar",
            "regiao": "Norte"
        },
        {
            "id": 4,
            "nome": "Supermercado SuperNosso",
            "regiao": "Leste"
        },
        {
            "id": 5,
            "nome": "Supermecado BH",
            "regiao": "Oeste"
        },
     ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_estabelecimento'));
if (!db) {
    db = db_estabelecimento_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertEstabelecimento(estabelecimento) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoEstabelecimento = {
        "id": novoId,
        "nome": estabelecimento.nome,
        "regiao": estabelecimento.regiao,
    };

    // Insere o novo objeto no array
    db.data.push(novoEstabelecimento);
    displayMessage("Estabelecimento inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_estabelecimento', JSON.stringify(db));
}

function updateEstabelecimento(id, estabelecimento) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = estabelecimento.nome,
    db.data[index].regiao = estabelecimento.regiao,

    displayMessage("Estabelecimento alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_estabelecimento', JSON.stringify(db));
}

function deleteEstabelecimento(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Estabelecimento removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_estabelecimento', JSON.stringify(db));
}