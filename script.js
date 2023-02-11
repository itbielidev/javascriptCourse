/* let a = "6";
console.log(typeof a);

let edad;

console.log((edad = 17)); 

let a = "jab";
let b = 7;
let c = a + b;
console.log(c);
console.log(typeof c); //cuando concatenas un string con un numero es de tipo string

//INTERPOLACION

let nombre = "Jab";
const CANAL = "html6";
let fecha = new Date();

let mensaje = `Me llamo ${nombre} y mi canal es ${CANAL} y estamos en el año ${fecha.getFullYear()}`;

alert(mensaje); 

//2
var puntos = null;
//3
function carol() {
  //4
  let locarVariable = puntos;
  telefono = 68435;
}

//5
var telefono;
//6

var edad;

//operadores

let a = "6";
let b = a++;

alert(b);
alert(a);  */

function saludar(n, m) {
  return `hola ${n}, el número es ${m}`;
}

function iniciar() {
  let resultado = saludar("jab", 4);

  alert(resultado);
}

function todoPreparado() {
  document.getElementById("boton1").onclick = iniciar;
  document.getElementById("boton2").onclick = goToWebSite;
}

function goToWebSite() {
  location.href = "http://www.html6.es";
}

window.onload = todoPreparado;
