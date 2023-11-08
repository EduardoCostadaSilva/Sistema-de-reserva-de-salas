document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginSuccessDiv = document.getElementById("login-success");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aqui você pode verificar as credenciais (username e password).
        // Por simplicidade, vamos considerar que um usuário com nome "admin" e senha "password" faz o login com sucesso.

        if (username === "adm" && password === "senha123") {
            loginForm.style.display = "none";
            loginSuccessDiv.style.display = "block";
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
