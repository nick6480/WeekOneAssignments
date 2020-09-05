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

// Temperatures
let celsius = 25;
let fahrenheit  = 66;


// Converts celsius to fahrenheit
function C2F(c) {
  return Math.floor(c * 9 / 5 + 32);
};

console.log(`${fahrenheit} F = ${C2F(celsius)} C`);


// Converts fahrenheit to celsius
function F2C(f) {
  return Math.floor(5 / 9 * (f - 32));
};

console.log(`${celsius} C = ${F2C(fahrenheit)} F`);
