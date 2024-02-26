let textoUsuario="";
let mensajeSalida = "";
let opcion;

function encriptar(){
    textoUsuario = document.getElementById("mensajeusuario").value;
    mensajeSalida = textoUsuario;
    document.getElementById("textoencriptado").value = mensajeSalida + "encriptado";
}

function desencriptar(){
    textoUsuario = document.getElementById("mensajeusuario").value;
    mensajeSalida = textoUsuario;
    document.getElementById("textoencriptado").value = mensajeSalida + "desencriptado";
}