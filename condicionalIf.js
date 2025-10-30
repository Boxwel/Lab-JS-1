const prompt = require("prompt-sync")();

//! Ejercicio #1
let edad = prompt("Escriba su edad: ");
if (edad >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//! Ejercicio #2
let num = prompt("Escribe un número: ")
if (num == 0){
    console.log("Su número es cero");
}    else if (num > 0){
    console.log("Su número es positivo");}
 else {
    console.log("Su número es negativo");
}