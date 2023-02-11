// function load() {
//   document.getElementById("cosa").style.color = "red";
//   document.getElementById("cosa").style.backgroundColor = "lightblue";
//   document.getElementById("cosa").style.border = "4px dotted green";
// }
// function pulsa() {
//   console.log("ME HAS PULSADO");
// }

// window.onload = load;

window.onload = inicio;
document.getElementById("cosa").onclick = cambioColor;

function cambioColor() {
  var x = document.getElementById("cosa").style;
  x.color = "red";
  x.backgroundColor = "blue";
  x.border = "4px ddotted green";
}
