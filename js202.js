
let cpr = Number(prompt('Skriv CPR nummer'));


function cprNummer() {
  return cpr % 2 === 0;
}

console.log(cprNummer())
