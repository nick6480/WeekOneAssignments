let string = "Hello, world"


function first(s) {
  return s.substring(0,1);
};


function last(s) {
  return s.substring(s.length - 1);
};

function middle(s) {
  return s.substring(1, s.length - 1);
};



console.log(`First letter is "${first(string)}"`);
console.log(`Last letter is "${last(string)}"`);
console.log(`All the letter inbetween is "${middle(string)}"`);
