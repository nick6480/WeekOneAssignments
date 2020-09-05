'use strict';

// Assignment JS Funcs 2.
function play() {
    let x = Math.random();
    x = Math.floor(x * 37 + 1);
    return x;
}

/*
x = Math.floor(x * 37 + 1);
                   ^
      Har indflydelse på antal sider
*/

console.log(play());



// Assignment JS Funcs 3.

let fahrenheit = Number(prompt('Temperatur in fahrenheit'));
let celsius;

console.log(celsius = 5/9 + (fahrenheit-32));



let celsius2 = Number(prompt('Temperatur in celsius'));
let fahrenheit2;

console.log(celsius = 5/9 + (fahrenheit+32));
