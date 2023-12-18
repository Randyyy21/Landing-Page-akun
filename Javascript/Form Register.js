let nameRegister = document.getElementById("nameRegister")
let passwordRegister = document.getElementById("passwordRegister")

function register() {
    let storedUsername = localStorage.getItem("username")
    let storedPassword = localStorage.getItem("password")

    if (nameRegister.value === '' ||
        passwordRegister.value === '') {
        localStorage.clear()
        alert('isi dulu bro')
    } else if (nameRegister.value == storedUsername || passwordRegister == storedPassword) {
        location.reload()
        alert('akun sudah terdaftar')
    } else if (nameRegister.value == "admin" && passwordRegister.value == "admin123") {
        alert('anda tidak bisa menggunakan akun ini')
    } else {
        localStorage.setItem('username', nameRegister.value);
        localStorage.setItem('password', passwordRegister.value);
        window.open('Login.html', "_blank")
    }
}