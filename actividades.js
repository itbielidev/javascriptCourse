/* Crea una página que que al acabar de cargarse abra un modal diciendo: “Hello World!”. (ejercicio anterior) */
//alert("hello world");
//Pregúntale al usuario como se llama y abre un modal saludando al usuario. Guarda el nombre en una variable y sacalo también por consola.
/* let userName = prompt("cómo te llamas");

alert(`hola ${userName}`);

let i = 0;

while (i < 5) {
  console.log("valor de i: ", i);

  i++;
}

do {
  console.log("valor de i: ", i);

  i = i + 1;
} while (i < 5); */
/* FACTORIAL
let numero = 5;

let factorial = 1;
let incremento = 1;
do {
  factorial = incremento * factorial;

  incremento++;
} while (incremento <= 5);
console.log("el factorial de ", numero, factorial);
 */
//EJERCICIOS VARIOS
/*Haz una función que de dos números pasados por parámetros 
indica (saca por consola) cúal de ellos es mayor.*/

/* var numero1 = 5;

var numero2 = 6;

function esMayor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
  } else {
    console.log(`${numero2} es mayor que ${numero1}`);
  }
}

esMayor(numero1, numero2); //CUANDO SE LLAMA A LA FUNCIÓN SI TIENE PARAMETROS SE TIENE QUE PONER */

/*Haz una función que calcule (sin usar *) la multiplicación de dos números.*/
/* let numero1 = 5;
let numero2 = 3;

let multiplicacion = 0;

function calculo(numero1, numero2){
  for (let index = 0; index < numero2; index++) {
  multiplicacion = numero1 + multiplicacion;

  return multiplicacion
}

console.log(multiplicacion); */

/*Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.*/
/* let numero1 = 5;
let numero2 = 3;
let numero3 = 2;

function multiplicacion (numero1, numero2, numero3) {
    let acumulador = 0;

    for (i = 0; i< numero2; i++) {
       acumulador =  numero1 + acumulador;
        
    }

    acumulador = acumulador * numero3

    return acumulador;
}

console.log(multiplicacion (numero1, numero2, numero3));
 */
/*Encuentra entre los primeros 10.000 números naturales los números que completan 
la siguiente propiedad: La suma del cubo de cada una de sus cifras y que dé el mismo número:*/

/* for (let index = 1; index <= 10000; index++) {
  let convertirString = index.toString();

  let acumulador = 0;

  for (let digito = 0; digito < convertirString.length - 1; digito++) {
    acumulador = acumulador + Math.pow(Number(convertirString[digito]), 3);
  }

  if (acumulador == index) {
    console.log(index);
  }
} */

/*Crea una función que permita calcular la nota media de 3 notas para que devuelva 
la media con 1 decimal.*/

/* let nota1 = 6;
let nota2 = 5;
let nota3 = 9.2;

function calculoMedia(nota1, nota2, nota3) {
  let mediaNotas = (nota1 + nota2 + nota3) / 3;

  notaDecimal = mediaNotas.toFixed(1);

  return notaDecimal;
}

console.log(calculoMedia(nota1, nota2, nota3)); */

/*Crea una función que devuelva el cubo de un número pero que compruebe si el parámetro pasado
es un número entero. Si no es un entero o no es un número mostrará un alert indicando 
cuál es el problema y devolverá false.*/

/* let numeroIntroducido = 12;

function cubo(numeroIntroducido) {
  let cubo = 0;

  if (
    !isNaN(numeroIntroducido) &&
    parseInt(numeroIntroducido) == numeroIntroducido
  ) {
    cubo = Math.pow(numeroIntroducido, 3);

    return cubo;
  } else {
    alert("no es entero");

    return false;
  }
}

console.log(cubo(numeroIntroducido)); */

//EJERCICIOS VARIOS CON STRINGS
/*Comprueba si un string contiene el substring 'As' al principio. Si lo contiene, devuelve el string original. 
Sino, devuelve el string con 'As' concatenado al principio de este.*/

/* let frase = "Astronomia";

function check(frase) {
  if (frase.startsWith("As")) {
    return frase;
  } else {
    let principio = "As";

    let nuevaFrase = principio + frase;

    return nuevaFrase;
  }
}

console.log(check(frase)); */

/*Introduce un string y un número, comprueba que es menor que la longitud del string en una función. 
La función debe devolver el string sin el carácter en esa posición.*/

/* let frase = "caminante no hay camino, se hace camino al andar";

let numero = 2;

function check(frase, numero) {
  if (numero < frase.length) {
    return frase.replace(frase[numero], "");
  }
}

console.log(check(frase, numero)); */

/*Dado un string intercambia la posición del primer y último carácter del string. 
Tienes que comprobar que el string tiene longitud mayor que 0.*/

/* let frase = "GORDOPILO";

function senteneceCheck(frase) {
  if (frase.length > 0) {
    let firstLetter = frase[0];
    let lastLetter = frase[frase.length - 1];

    let newSentence = frase.substring(1, frase.length - 2);

    let result = lastLetter + newSentence + firstLetter;

    return result;
  }
}

console.log(senteneceCheck(frase));
 */

//EJERCICIO DIVIDIR VOCALES DE CONSONANTES

let frase = "mandalorian";

/* function separarVocalesDeConsonantes(frase) {
  let consonantes = "";

  let vocales = "";
  for (const letra of frase) {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      vocales += letra;
    } else {
      consonantes += letra;
    }
  }
  return vocales + consonantes;
} */

function separarVocalesDeConsonantes(frase) {
  let consonantes = [];
  let vocales = [];

  for (const letra of frase) {
    if (
      letra == "a" ||
      letra == "e" ||
      letra == "i" ||
      letra == "o" ||
      letra == "u"
    ) {
      vocales.push(letra);
    } else {
      consonantes.push(letra);
    }
  }

  return vocales + consonantes;
}

console.log(separarVocalesDeConsonantes(frase));
