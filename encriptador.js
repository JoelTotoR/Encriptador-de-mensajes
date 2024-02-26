let textoUsuario="";
let mensajeSalida = "";
let opcion;

function encriptar(){
    opcion = document.getElementById("botonDesencriptar").value;
    alert(opcion);
    textoUsuario = document.getElementById("mensajeusuario").value;
    mensajeSalida = textoUsuario;
    document.getElementById("textoencriptado").value = mensajeSalida;
}

function desencriptar(){
    alert("Hola")
}