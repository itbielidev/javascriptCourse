function convertir(dinero, camnbio) {
  let resultado = dinero * cambio;

  return resultado;
}

// let dinero = 10;
let cambio = 125;

function iniciarConversion() {
  cambio = document.getElementById("cambio").value;
  dinero = document.getElementById("dinero").value;
  dinero = dinero > 0 ? dinero : 1;
  let recibo = convertir(dinero, cambio);

  document.getElementById(
    "conversiones"
  ).innerHTML += `${dinero}  son ${recibo} yenes <br>`;
  document.getElementById("dinero").value = "";
  document.getElementById("dinero").focus();
}

window.onload = inicio;

function inicio() {
  document.getElementById("dinero").onkeydown = teclado;
  document.getElementById("cambio").value = cambio;
  document.getElementById("boton").onclick = iniciarConversion;
}

function teclado(e) {
  let codigoTecla = e.keyCode;
  if (codigoTecla == 13) {
    iniciarConversion();
  }
}
