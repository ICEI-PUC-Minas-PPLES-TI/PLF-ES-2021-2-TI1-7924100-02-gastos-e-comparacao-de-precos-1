const getUsuario = async() => {
    currentUser = await JSON.parse(sessionStorage.getItem("current_user"))
    defineNomeUsuario(currentUser)
}

const defineNomeUsuario = (currentUser) => {
    document.getElementById("nomeUsuario").innerHTML = currentUser.name
}

getUsuario()

const logoutUser = () => {
    user = {};
    sessionStorage.setItem("current_user", JSON.stringify(user));
    window.location = "../Login/";
}
