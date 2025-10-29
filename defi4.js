

let x  = [2, 4, 6, -3, 5, 7];
let y =0;

for(let i = 0 ; i<x.length; i++) {
    if(x[i] < 0) break;
    y += x[i];
}

console.log(y)