let db_users = {
  users: [],
};

let currentUser = {};

//document.getElementById("form-login").addEventListener("submit", tryLogin);

function createUser(email, name, password, userType) {
  let newUser = {
    id: generateID(),
    password: password,
    name: name,
    email: email,
    userType: userType,
  };

  db_users.users.push(newUser);

  localStorage.setItem("db_users", JSON.stringify(db_users));
}

function generateID() {
  let id = Math.random() * Date.now();
  return id;
}

//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período

// Página inicial de Login
const LOGIN_URL = "login.html";

function startApp() {}

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
  // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
  currentUserJSON = sessionStorage.getItem("currentUser");
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  var usersJSON = localStorage.getItem("db_usuarios");
  if (usersJSON) {
    db_users = JSON.stringify(usersJSON);
  }
}

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(login, senha) {
  // Verifica todos os itens do banco de dados de usuarios
  // para localizar o usuário informado no formulario de login
  for (var i = 0; i < db_usuarios.usuarios.length; i++) {
    var usuario = db_usuarios.usuarios[i];

    // Se encontrou login, carrega usuário corrente e salva no Session Storage
    if (login == usuario.login && senha == usuario.senha) {
      usuarioCorrente.id = usuario.id;
      usuarioCorrente.login = usuario.login;
      usuarioCorrente.email = usuario.email;
      usuarioCorrente.nome = usuario.nome;

      // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
      sessionStorage.setItem(
        "usuarioCorrente",
        JSON.stringify(usuarioCorrente)
      );

      // Retorna true para usuário encontrado
      return true;
    }
  }

  // Se chegou até aqui é por que não encontrou o usuário e retorna falso
  return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
  window.location = LOGIN_URL;
}

function addUser(nome, login, senha, email) {
  let newId = generateUUID();
  let usuario = {
    id: newId,
    login: login,
    senha: senha,
    nome: nome,
    email: email,
  };

  db_usuarios.usuarios.push(usuario);
  localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
}

function setUserPass() {}

// Inicializa as estruturas utilizadas pelo LoginApp
startApp();
