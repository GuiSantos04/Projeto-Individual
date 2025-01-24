// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var cpf = sessionStorage.CPF_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var cpf_usuario = document.getElementById("cpf_usuario");
    
    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        cpf_usuario.innerHTML = cpf;

    } else {
        window.location = "../login.html";
    }
}

function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}