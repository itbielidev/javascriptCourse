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
