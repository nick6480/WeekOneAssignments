let price = 100;


function addVat(a) {
  return a * 25 / 100 + a;
};

console.log("Amount + Vat");
console.log(addVat(price));


function subVat(a) {
  return a - a * 25 / 100;
};

console.log("Amount - Vat");
console.log(subVat(price));


function calcVat(a) {
  return a * 25 / 100;
};

console.log("Vat");
console.log(calcVat(price));
