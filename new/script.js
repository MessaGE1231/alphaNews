function modalAppOpen (id) {
    document.querySelector(id).style.display = "grid"
    document.querySelector(`${id}Con`).style.display = "flex" 
    if (!document.querySelector(id).style.display === "grid") {
        document.body.style.overflow = "unset"

    } else {
        document.body.style.overflow = "hidden"
    }
}

function closeModal (id) {
document.body.addEventListener("keydown", (event) => {
if(event.key === "Escape") {
document.querySelector(id).style.display = "none";
document.querySelector(`${id}Con`).style.display = "none";
document.body.style.overflow = "unset"}
})
}


const imgElementsHTML = document.body.querySelectorAll(".modalTrigger")

imgElementsHTML.forEach((el) => {
    el.addEventListener("click", (event) => {
        let elementId = [...event.srcElement.classList]
        elementId = elementId[2]
        modalAppOpen(`#${elementId}`)
        closeModal(`#${elementId}`)
    })
})

document.getElementById('info').addEventListener("click", (event) => {
    event.preventDefault()

    document.getElementById('modalAppInfo').style.display = "grid"
    document.getElementById('modalAppInfo_text').style.display = "flex"
    if (document.getElementById('modalAppInfo').style.display === "grid") {document.body.style.overflow = "hidden"} else {document.body.style.overflow = "unset"}

    document.body.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.getElementById('modalAppInfo').style.display = "none"
            document.getElementById('modalAppInfo_text').style.display = "none"

        }
        if (document.getElementById('modalAppInfo').style.display === "grid") {document.body.style.overflow = "hidden"} else {document.body.style.overflow = "unset"}
    })
})

// Регистрация аккордеон

document.getElementById('LKbutton').addEventListener("click", (event) => {
event.preventDefault()
if (document.getElementById('accordeonReg').style.display === "block") {
    return document.getElementById('accordeonReg').style.display = "none"
} else {
    document.getElementById('accordeonReg').style.display = "block"
}

    
})

// регистация



let users = []

if (localStorage.getItem("users")) {users = JSON.parse(localStorage.getItem("users"))}

document.forms.regForm.submit.addEventListener("click", (event) => {
    event.preventDefault()
    let login = document.forms.regForm.login
    let password = document.forms.regForm.password
    let forgotPassword = document.forms.regForm.forgotPassword
    let email = document.forms.regForm.email
    let numberPhone = document.forms.regForm.numberPhone

let errText = null
let error = null
function err() {
if (login.value.length === 0) {return errText = `Ошибка: поле "${login.placeholder}" не заполнено`
} else if (login.value.length < 4) {return errText = `Ошибка: поле "${login.placeholder}" меньше 4 символов`
} else if (password.value.length === 0) {return errText = `Ошибка: поле "${password.placeholder}" не заполнено`
} else if (password.value.length < 6) {return errText = `Ошибка: поле "${password.placeholder}" меньше 6 символов`
} else if (forgotPassword.value.length === 0) {return errText = `Ошибка: поле "${forgotPassword.placeholder}" не заполнено`
} else if (forgotPassword.value.length < 6) {return errText = `Ошибка: поле "${forgotPassword.placeholder}" меньше 6 символов`
} else if (email.value.length === 0) {return errText = `Ошибка: поле "${email.placeholder}" не заполнено`
} else if (email.value.length < 8) {return errText = `Ошибка: поле "${email.placeholder}" меньше 8 символов`
} else if (numberPhone.value.length === 0) {return errText = `Ошибка: поле "${numberPhone.placeholder}" не заполнено`
} else if (numberPhone.value.length < 10) {return errText = `Ошибка: поле "${numberPhone.placeholder}" меньше 10 символов`
} else {error = false}
}
err()
  
if (login.value.length < 4 || password.value.length < 6 || forgotPassword.value.length < 6 || email.value.length < 8 || numberPhone.value.length < 10) {
document.getElementById('loginErrorEmpty').textContent = errText
    if (!document.getElementById('loginErrorEmpty').hasAttribute("open")) {
    return document.getElementById('loginErrorEmpty').toggleAttribute("open")
}
} else {
    document.getElementById('loginErrorEmpty').removeAttribute("open")
}

if (error === false) {
    users.push({
        login: login.value,
        password: password.value,
        forgotPassword: forgotPassword.value,
        email: email.value,
        phone: numberPhone.value
    })
        localStorage.setItem("users", JSON.stringify(users))

        errText = "Регистрация произведена успешно"
        document.getElementById('loginErrorEmpty').style.background = "green"
        document.getElementById('loginErrorEmpty').textContent = errText
        document.getElementById('loginErrorEmpty').toggleAttribute("open")

        setTimeout(() => {document.getElementById('loginErrorEmpty').removeAttribute("open")}, 2000)
        

} else {return}






})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('authForm').style.display = "none"
    if (JSON.parse(localStorage.getItem("auth")) === true) {
        document.getElementById('authForm').style.display = "none"
        document.getElementById('regForm').style.display = 'none'
        document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
        document.getElementById('authButton').textContent = ''
    }
})

document.getElementById('authButton').addEventListener('click', (event) => {
    event.preventDefault()
    if (document.getElementById('regForm').style.display === 'none') {
        document.getElementById('authButton').textContent = 'Уже есть аккаунт?'
        document.getElementById('regForm').style.display = 'flex'
        document.getElementById('regAccordeonH1').textContent = "Регистрация"
        document.getElementById('authForm').style.display = "none"
    } else {
    document.getElementById('authButton').textContent = 'Регистрация'
    document.getElementById('regForm').style.display = 'none'
    document.getElementById('regAccordeonH1').textContent = "Авторизация"
    document.getElementById('authForm').style.display = "flex"}
})

document.forms.authForm.submit.addEventListener('click', (event) => {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("users"))
    let loginAuth = document.forms.authForm.login
    let passwordAuth = document.forms.authForm.password
    let account = null
    users.forEach((el) => {
        if (el.login === loginAuth.value) {account = el}
    })
    if (loginAuth.value === account.login && passwordAuth.value === account.password) {alert('Вход выполнен успешно')
localStorage.setItem('auth', true)
localStorage.setItem('currentUser', JSON.stringify(account))
document.getElementById('authForm').style.display = "none"
document.getElementById('regForm').style.display = 'none'
document.getElementById('regAccordeonH1').textContent = "Личный кабинет"
document.getElementById('authButton').textContent = ''

} else {alert('Не правильные данные')}
ы

})
