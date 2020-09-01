
let tails = 0;
let heads = 0;
let flip;
let maxFlips = 10;

function coinfilp() {
  for (let flips = 0; flips < maxFlips; flips++) {
    flip = Math.random();
    flip = Math.floor(flip * 2 + 1);
    if (flip === 1)
        tails++;
    else
        heads++;
  }
}

coinfilp()

console.log('heads: ' + heads);
console.log('tails: ' + tails);

// Nickolaj
