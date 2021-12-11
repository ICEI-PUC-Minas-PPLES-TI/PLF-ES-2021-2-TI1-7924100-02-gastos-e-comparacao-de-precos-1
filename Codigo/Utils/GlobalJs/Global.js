const logout = () => {
    user = {};
    sessionStorage.setItem("current_user", JSON.stringify(user));
    window.location = "../Login/";
}

document.getElementById('logout-btn').addEventListener('click', logout)
