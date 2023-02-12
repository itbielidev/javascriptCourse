window.onload = inicio;

let dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

function inicio() {
  //FOR TRAIDICIONAL
  for (let i = 0; i < dias.length; i++) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cajita">${dias[i]}</div>`;
  }

  /*   document.getElementsByClassName("cajita")[0].style.backgroundColor =
    "crimson";

  for (let index = 0; index < 5; index++) {
    document.getElementsByClassName("cajita")[index].style.backgroundColor =
      "crimson";
  } */
}
