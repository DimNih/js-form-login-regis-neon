function toggleForm() {
    const login = document.getElementById("loginContainer");
    const register = document.getElementById("registerContainer");

    if (login.style.display === "none") {
        login.style.display = "block";
        login.classList.add('container-switch');
        register.classList.add('container-out');
        setTimeout(() => {
            register.style.display = "none";
            register.classList.remove('container-out');
        }, 600);
    } else {
        register.style.display = "block";
        register.classList.add('container-switch');
        login.classList.add('container-out');
        setTimeout(() => {
            login.style.display = "none";
            login.classList.remove('container-out');
        }, 600);
    }
}

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let emailError = document.getElementById("loginEmailError");
    let passwordError = document.getElementById("loginPasswordError");
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
    if (!email.includes("@") || !email.includes(".com")) {
        emailError.innerHTML = "Format email tidak valid";
        return;
    }
    
    if (password.length < 6) {
        passwordError.innerHTML = "Password minimal 6 karakter";
        return;
    }
    
    alert("Login berhasil!");
}

function validateRegister() {
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let nameError = document.getElementById("registerNameError");
    let emailError = document.getElementById("registerEmailError");
    let passwordError = document.getElementById("registerPasswordError");
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
    if (name.length < 3) {
        nameError.innerHTML = "Nama minimal 3 karakter";
        return;
    }
    
    if (!email.includes("@") || !email.includes(".com")) {
        emailError.innerHTML = "Format email tidak valid";
        return;
    }
    
    if (password.length < 6) {
        passwordError.innerHTML = "Password minimal 6 karakter";
        return;
    }
    
    alert("Registrasi berhasil!");
}