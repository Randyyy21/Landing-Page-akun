let nameLogin = document.getElementById("nameLogin")
let passwordLogin = document.getElementById("passwordLogin")
let logOut = document.getElementById("logOut")

alert('welcome bro')

logOut.style.display = "none"

function login() {
    let storedUsername = localStorage.getItem('username')
    let storedPassword = localStorage.getItem('password')

    if (nameLogin.value === "" || passwordLogin.value === "") {
        alert('isi dulu')
        return;
    } else if (nameLogin.value === storedUsername && passwordLogin.value === storedPassword) {
        alert('selamat bergabung')
        localStorage.setItem('role', "Member")
    } else if (nameLogin.value === "admin" && passwordLogin.value === "admin123") {
        alert('tutor puh')
        localStorage.setItem('role', "admin")
    } else {
        alert('akun anda belum terdafatar')
    }
}
