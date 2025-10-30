
let x = [1, 2, 3, 5];
const d = x.length + 1;

let c = (d * (d + 1))/2

let arr = x.reduce((cal,val) => cal + val ,0);

console.log(c - arr)
