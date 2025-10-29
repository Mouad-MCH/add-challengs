
const prompt = require('prompt-sync')();
let n = Number(prompt('add a Number: '));
let tab = [,1,2]

    for(let i = 1; i<n; i++) {
        tab[i+2] = tab[i] + tab[i+1]
    }
    console.log(tab[n])
