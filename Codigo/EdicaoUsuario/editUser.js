let current_user = {};
let db_users = {
    users: []
};

const currentUserJSON = {
    id: 123,
    password: 456,
    name: "sou teste",
    email: "souteste@teste.com",
    user_type: 1,
    phone_number: 12032897,
    city: "BH",
    address: "Avenida"
}

const dbUsersJSON = {
    users:
        [
            {
                id: 123,
                password: 456,
                name: "sou teste",
                email: "souteste@teste.com",
                user_type: 1,
                phone_number: 12032897,
                city: "BH",
                address: "Avenida"
            },
            {
                id: 456,
                password: 789,
                name: "sou teste 2",
                email: "souteste2@teste.com",
                user_type: 2,
                phone_number: 789456123,
                city: "BH",
                address: "Rua"
            }
        ]
}

localStorage.setItem('db_users', JSON.stringify(dbUsersJSON))
sessionStorage.setItem('current_user', JSON.stringify(currentUserJSON))

startApp();

function startApp() {
    let currentUserJSON = JSON.parse(sessionStorage.getItem("current_user"));
    if (currentUserJSON) {
        current_user = (currentUserJSON);
    }

    var usersJSON = JSON.parse(localStorage.getItem("db_users")).users;
    if (usersJSON) {
        db_users = usersJSON;
    }
}

let generalForm = document.getElementById('form-general-values')
generalForm.addEventListener('submit', function () {
    window.event.preventDefault()
    window.event.stopPropagation()
    setNewValues()
    showUsers()
})

let passwordForm = document.getElementById('form-password')
passwordForm.addEventListener('submit', function () {
    window.event.preventDefault()
    window.event.stopPropagation()
    setNewPassword()
    showUsers()
})

let emailForm = document.getElementById('form-email')
emailForm.addEventListener('submit', function () {
    window.event.preventDefault()
    window.event.stopPropagation()
    setNewEmail();
    showUsers()
})


function setNewValues() {

    let newNameElement = document.getElementById('input-name')
    let newPhoneElement = document.getElementById('input-phone')
    let newCityElement = document.getElementById('input-city')
    let newAddressElement = document.getElementById('input-address')

    let newName = newNameElement.value
    let newPhone = newPhoneElement.value
    let newCity = newCityElement.value
    let newAddress = newAddressElement.value

    let userIndex = searchUser(current_user.id)

    if (newName != "") {
        current_user.name = newName
        db_users[userIndex].name = newName
        newNameElement.value = null
    }
    if (newPhone != "") {
        current_user.phone_number = newPhone
        db_users[userIndex].phone_number = newPhone
        newPhoneElement.value = null
    }
    if (newCity != "") {
        current_user.city = newCity
        db_users[userIndex].city = newCity
        newCityElement.value = null
    }

    if (newAddress != "") {
        current_user.address = newAddress
        db_users[userIndex].address = newAddress
        newAddressElement.value = null
    }


    sessionStorage.setItem('current_user', JSON.stringify(current_user))
    localStorage.setItem('db_users', JSON.stringify(db_users))
}



function setNewPassword() {
    let currentPasswordElement = document.getElementById('input-current-password')
    let newPasswordElement = document.getElementById('input-new-password')

    let currentPassword = currentPasswordElement.value
    let newPassword = newPasswordElement.value

    let userIndex = searchUser(current_user.id)

    if (currentPassword == current_user.password) {
        current_user.password = newPassword
        db_users[userIndex].password = newPassword
        currentPasswordElement.value = null
        newPasswordElement.value = null
    } else {
        alert('A senha inserida n??o ?? igual a senha atualmente cadastrada, favor verificar!')
    }

    sessionStorage.setItem('current_user', JSON.stringify(current_user))
    localStorage.setItem('db_users', JSON.stringify(db_users))
}

function setNewEmail() {
    let newEmailElement = document.getElementById('input-new-email')
    let newEmail = newEmailElement.value
    let userIndex = searchUser(current_user.id)

    let userFound = false;
    db_users.forEach(e => {
        if ((e.email == newEmail) && (e.email != current_user.email)) {
            alert('J?? existe uma conta cadastrada com esse e-mail! Favor utilizar outro e-mail!')
            userFound = true;
        }
    });

    if (!userFound) {
        current_user.email = newEmail
        db_users[userIndex].email = newEmail

        newEmailElement.value = null

        sessionStorage.setItem('current_user', JSON.stringify(current_user))
        localStorage.setItem('db_users', JSON.stringify(db_users))
    }


}

function searchUser(id) {
    for (let i = 0; i < db_users.length; i++) {
        if (db_users[i].id === id) {
            return i;
        }
    }
}
