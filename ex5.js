// exercicio 5 js
function verificarLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
      document.getElementById("resultado").innerHTML = "Login realizado com sucesso";
    } else {
      document.getElementById("resultado").innerHTML = "Falha de autenticação";
    }
  }
