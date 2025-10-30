const prompt = require("prompt-sync")();
//! Ejercicio #1
for(let c=1; c<=10; c++){
    console.log(c);
}

//! Ejercicio #2
let num=prompt("Número a multiplicar: ");
for (let i=1; i<=10; i++){
    let r=num*i;
    console.log(num + " x " + i + " = " + r);
}