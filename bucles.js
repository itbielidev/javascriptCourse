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

let autor = { nombre: "carol", edad: 31, color: "rojo" };

function inicio() {
  /*FOR TRAIDICIONAL
  for (let i = 0; i < dias.length; i++) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cajita">${dias[i]}</div>`;
  }

     document.getElementsByClassName("cajita")[0].style.backgroundColor =
    "crimson";

  for (let index = 0; index < 5; index++) {
    document.getElementsByClassName("cajita")[index].style.backgroundColor =
      "crimson";
  } */
  /* FOR OF 
  for (dia of dias) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cajita">${dia}</div>`;
  } */
  /*   forEach

  dias.forEach(function (valor, indice, array) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cajita">${valor}</div>`;
  }); */
  /*   for in

  for (dato in autor) {
    document.getElementById(
      "caja"
    ).innerHTML += `<div class="cajita">${dato}-${autor[dato]}</div>`;
  }

  //dato:propiedad nombre,edad,color:valor */
}
