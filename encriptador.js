let textoUsuario="";
let mensajeEncriptado = "";
function encribtar(){
    textoUsuario = document.getElementById("mensajeusuario").value;
    mensajeEncriptado = textoUsuario;
    document.getElementById("textoencriptado").value = mensajeEncriptado;
}