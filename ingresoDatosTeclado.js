const prompt = require("prompt-sync")();

//! Ejercicio #1
let fechaNacimiento = prompt("Escriba en que año nació: ");
let fechaActual = 2025;
let operacion = fechaActual - fechaNacimiento;
console.log("Usted tiene", operacion, "años.");

//! Ejercicio #2
let n1 = prompt("Escriba el primer número: ");
let n2 = prompt("Escriba el segundo número: ");
n1 = Number(n1);
n2 = Number(n2);
let suma = n1 + n2;
console.log("La suma de", n1, "y", n2, "es igual a", suma);
