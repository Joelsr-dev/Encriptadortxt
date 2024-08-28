const campoTexto = document.getElementById("campoTexto");
const campoMensaje = document.getElementById("campoMensaje");
const imagenSalida = document.getElementById("imagenSalida");
const areaCopia = document.getElementById("botonCopiar");
const mensajes = document.getElementById("mensajes");

function Encriptar() {
    if (campoTexto === "") return null;
    const textoEncriptado = campoTexto.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    return textoEncriptado;
}

function Desencriptar() {
    if (campoTexto === "") return null;
    const textoEncriptado = campoTexto.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoEncriptado;
}

function botonEncriptar() {
    const texto = Encriptar(campoTexto.value)
    campoMensaje.value = texto
    document.getElementById("imagenSalida").style = "display: none;"
}

function botonDesencriptar() {
    const texto = Desencriptar(campoTexto.value)
    campoMensaje.value = texto
}

function limpiarCampos() {
    document.getElementById("campoTexto").value = "";
    document.getElementById("campoMensaje").value = "";
    document.getElementById("imagenSalida").style = ""; 
}

function botonCopiar() {
    navigator.clipboard.writeText(campoMensaje.value)
}

function borrarTexto() {
    document.getElementById(campoTexto).value = ""
    document.getElementById(campoMensaje).value = ""
    document.getElementById(mensajes).textContent = ""
}

