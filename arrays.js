var reyes = ["Ervigio"];
reyes.push("Ataulfo");
console.log(reyes);
reyes.push("Atanagildo", "Leogivildo");
reyes.unshift("Sisebuto");
reyes.push("Ervigio");
reyes.pop();

let posicion = reyes.indexOf("Ervigio");

console.log(posicion);

reyes.shift();
reyes.splice(2, 1);
reyes.reverse();
var otrosReyes = ["Alarico", "Recadero"];
reyes = reyes.concat(otrosReyes);

console.log(reyes);

var mostrarReyes = document.querySelector("#reyes").innerHTML;
mostrarReyes.innerHTML = otrosReyes;
