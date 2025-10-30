
const prompt = require('prompt-sync')();

let x = Number(prompt("add a Number: "));
let n;
let som = x;



while(x % 3 == 0) {
    n = x/3
    x = n
    som += n
}

console.log(som)
