
let x = [1, 2, 2, 3, 4, 4, 5];
let y = [];

for(let i = 0; i<x.length; i++) {
    if(!y.includes(x[i])) {
        y.push(x[i])
    }
}

console.log(y)