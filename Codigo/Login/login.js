let db_users = {
  users: []
};

let current_user = {};

function createUser(email, name, password, userType) {
  let usersLoaded = JSON.parse(localStorage.getItem('db_users')).users
  let emailFound = false;
  usersLoaded.forEach(e => {
    if (e.email == email) {
      alert('Já existe uma conta cadastrada com esse e-mail! Favor utilizar outro e-mail!')
      emailFound = true;
    }
  });

  if(!emailFound){
    let newUser = {
      id: generateID(),
      password: password,
      name: name,
      email: email,
      user_type: userType,
    };

    db_users.users.push(newUser)
    localStorage.setItem("db_users", JSON.stringify(db_users));
    alert('Usuário cadastrado com sucesso!');
    $("#modal-register").modal("hide");
  }

}

function generateID() {
  let id = Math.round(Math.random() * Date.now());
  return id;
}

const LOGIN_URL = "index.html";
const HOME_URL = "home.html";

function startApp() {
  currentUserJSON = sessionStorage.getItem("current_user");
  if (currentUserJSON) {
    current_user = JSON.parse(currentUserJSON);
  }

  var usersJSON = localStorage.getItem("db_users");
  if (usersJSON) {
    db_users = JSON.parse(usersJSON);
  } else {
    localStorage.setItem("db_users", JSON.stringify(db_users))
  }
}

function logout() {
  user = {};
  sessionStorage.setItem("current_user", JSON.stringify(user));
  window.location = LOGIN_URL;
}

function verifyLogin() {
  let emailInput = document.getElementById("email-login").value;
  let passwordInput = document.getElementById("password-login").value;
  let userFound = false;

  db_users = JSON.parse(localStorage.getItem("db_users"));

  if (emailInput == "" || passwordInput == "") {
    alert("Preencha todos os campos para fazer o login!");
  } else {
    if (db_users.users.length == 0) {
      alert(
        "Não existe uma combinação de email e senha registrados! Verifique os dados ou se cadastre no site caso ainda não tenha feito seu registro!"
      );
      return;
    }

    for (let i = 0; i < db_users.users.length; i++) {
      let registredUser = db_users.users[i];
      if (
        emailInput == registredUser.email &&
        passwordInput == registredUser.password
      ) {
        sessionStorage.setItem("current_user", JSON.stringify(registredUser));
        userFound = true;
        window.location = HOME_URL;
      }
    }

    if(!userFound){
      alert(
        "Não existe uma combinação de email e senha registrados! Verifique os dados ou se cadastre no site caso ainda não tenha feito seu registro!"
      );
    }
  }
}

function validateEmail() {
  let email = document.getElementById("form-email").value;

  if (!email) {
    document.getElementById("form-email").style.borderColor = "red";
    document.getElementById("form-email").style.backgroundColor =
      "rgba(245,0,0, 0.2)";
    document.getElementById("email-span").innerHTML = "O email é obrigatório!";
    return false;
  } else {
    document.getElementById("form-email").style.borderColor = "green";
    document.getElementById("form-email").style.backgroundColor =
      "rgba(0,245,0, 0.2)";
    document.getElementById("email-span").innerHTML = "";
    return true;
  }
}

function validateName() {
  let name = document.getElementById("form-name").value;

  if (!name) {
    document.getElementById("form-name").style.borderColor = "red";
    document.getElementById("form-name").style.backgroundColor =
      "rgba(245,0,0, 0.2)";
    document.getElementById("name-span").innerHTML = "O nome é obrigatório!";
    return false;
  } else {
    document.getElementById("form-name").style.borderColor = "green";
    document.getElementById("form-name").style.backgroundColor =
      "rgba(0,245,0, 0.2)";
    document.getElementById("name-span").innerHTML = "";
    return true;
  }
}

function validatePassword() {
  let password = document.getElementById("form-password").value;
  let rptPassowrd = document.getElementById("form-password-rpt").value;

  let passwordSpan = document.getElementById("password-span");
  let rptPasswordSpan = document.getElementById("password-rpt-span");

  if (!password) {
    document.getElementById("form-password").style.borderColor = "red";
    document.getElementById("form-password").style.backgroundColor =
      "rgba(245,0,0, 0.2)";
    passwordSpan.innerHTML = "A senha é obrigatória";
  } else {
    document.getElementById("form-password").style.borderColor = "green";
    document.getElementById("form-password").style.backgroundColor =
      "rgba(0,245,0, 0.2)";
    passwordSpan.innerHTML = "";
  }

  if (!rptPassowrd) {
    document.getElementById("form-password-rpt").style.borderColor = "red";
    document.getElementById("form-password-rpt").style.backgroundColor =
      "rgba(245,0,0, 0.2)";
    rptPasswordSpan.innerHTML = "A repetição da senha é obrigatória";
  } else {
    rptPasswordSpan.innerHTML = "";
  }

  if (password && rptPassowrd) {
    if (password == rptPassowrd) {
      document.getElementById("form-password-rpt").style.borderColor = "green";
      document.getElementById("form-password-rpt").style.backgroundColor =
        "rgba(0,245,0, 0.2)";
      rptPasswordSpan.innerHTML = "";
      return true;
    } else {
      rptPasswordSpan.innerHTML = "As senhas devem ser iguais";
      return false;
    }
  }
}

function getNewUserData() {
  event.preventDefault();
  let emailValidation = validateEmail();
  let nameValidation = validateName();
  let passwordValidation = validatePassword();

  let email = document.getElementById("form-email").value
  let name = document.getElementById("form-name").value
  let password = document.getElementById("form-password").value
  let userType = document.getElementById("form-user-type").value

  if (emailValidation && nameValidation && passwordValidation) {
    closeModal();
    createUser(email, name, password, userType);
  }
}

function closeModal() {
  var elementsInput = document.getElementsByClassName("form-control");
  var elementsSpan = document.getElementsByClassName("error-span");

  Array.prototype.forEach.call(elementsSpan, (e) => {
    e.innerHTML = "";
  });

  Array.prototype.forEach.call(elementsInput, (e) => {
    e.value = null;
    e.style.backgroundColor = "white";
    e.style.borderColor = "#ced4da";
  });
}

startApp();
