
let x = [1, 1, 0, 1, 0];

for(let i = 0; i<x.length; i++) {
  if(x[i] == 0) {
    console.log(i);
    break;
  }
}