//Trabajando selectores

/*Siguiento con la página de ejemplo (Ejercicio1_selectores.html) 
obtén desde la consola y luego pasalo a un script para tenerlo guardado, 
al menos de 2 formas diferentes:*/

/*El primer párrafo que hay dentro del div ‘lipsum’*/
let div = document.getElementById("lipsum");
div.getElementsByTagName("p")[0];
document.querySelector("p:first-child");
/*El segundo párrafo de ‘lipsum’*/

div.getElementsByTagName("p")[1];

/*El último item de la lista*/
document.getElementsByTagName("li")[3];
document.querySelector("li:last-child");

/*La label de ‘Escoge sexo’*/
document.getElementsByTagName("label")[3];
document.querySelector("label:nth-child(4)");

//Accediendo a las propiedades

//El innerHTML de la etiqueta de ‘Escoge sexo’
document.getElementsByTagName("label")[3].innerHTML;
document.querySelector("label:nth-child(4)").innerHTML;

//El textContent de esa etiqueta
document.getElementsByTagName("label")[3].textContent;
document.querySelector("label:nth-child(4)").textContent;

//El valor del primer input de sexo
const sexo = document.getElementsByTagName("label")[3];
sexo.getElementsByTagName("input")[1].value;

/*El valor del sexo que esté seleccionado (difícil, 
búscalo por Internet)*/
document.querySelector("label:last-of-type input:checked");

//ejercicio3: Atributos REVISAR MANOLO
/* Añade un id a cada uno de los parrafos de tal manera que sea único. */
/* Usando un bucle */
const p = document.querySelectorAll("#lipsum p");

p.forEach(function (element, index) {
  element.id = `parrafos${index}`;
});

/* Accediendo a cada uno de ellos. */
const parrafo1 = document.querySelector("#lipsum p:first-child");
parrafo1.setAttribute("id", "1");

const parrafo2 = document.querySelector("#lipsum p:nth-child(2)");
parrafo2.setAttribute("id", "2");

const parrafo3 = (document.querySelector("#lipsum p:nth-child(3)").id = "3");

/* Modifica los atributos de los botones de tal manera que se note que uno es para aceptar
 y otro para cancelar. */

document.querySelector("input#button1").value = "aceptar";

document.querySelector("input#button2").value = "cancelar";
/* Consigue que el label de input2 se vea en azúl. */

document.getElementsByTagName("label")[1].style.color = "lightblue";

//EJERCICIO 4
/*Crea varias clases en CSS y asigna una para cada párrafo.*/
document.querySelector("#lipsum p:first-child").classList.add("underline");

/*Crea la clase important y otra listado y añade esta última a todos <il>*/
function list() {
  let list = document.querySelectorAll("ul li");

  /* list.forEach(function (element, index) {
    element.classList.add("listado");
  }); */

  /* for (let index = 0; index < list.length; index++) {
    const element = list[index];
    element.classList.add("listado");
  } */

  for (const li of list) {
    li.classList.add("listado");
  }
}

list(); //llamar la funcion
/*Crea la clase que subraye, otra que ponga negrita y otra que ponga color verde.
 Asignalas a los h2 que consideres.*/
document.querySelector("h2:nth-of-type(1)").classList.add("underline");
document.querySelector("h2:nth-of-type(2)").classList.add("blueBold");
document.querySelector("h2:nth-of-type(3)").classList.add("green");
/*Elimina del h1 la clase important y ponle la de titulo*/
document.querySelector("h1").classList.remove("important");
document.querySelector("h1").classList.add("titulo");
