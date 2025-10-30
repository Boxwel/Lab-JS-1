const prompt = require("prompt-sync")();

//! Ejercicio #1
let num = prompt("Escriba un número: ");
let i = 1;
while (i <= num) {
    console.log(i);
    i++;
}

//! Ejercicio #2
let pass = prompt("Escribe la contraseña: ");
while (pass !== "1234") {
  pass = prompt("Incorrecta, intenta otra vez: ");
}
console.log("Contraseña correcta");
