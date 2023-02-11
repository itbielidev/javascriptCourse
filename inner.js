window.onload = inicio;

function inicio() {
  document.querySelector("#campo").onkeydown = enter;
  document.querySelector("#boton").onclick = listar;
}

function listar() {
  let nombre = document.querySelector("#campo").value;
  //document.querySelector("#caja").innerHTML += `<div>${nombre}</div>`;

  /* let div = document.createElement("div");
  let contenido = document.createTextNode(nombre);

  div.appendChild(contenido);
  document.querySelector("#caja").appendChild(div); */

  document
    .querySelector("#caja")
    .insertAdjacentHTML("beforeend", `<div>${nombre}</div>`);
}

function enter(keyEvent) {
  if (keyEvent.code == "Enter") listar();
}
