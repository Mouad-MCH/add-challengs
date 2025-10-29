

let x = [1, 2, 3];
let y =[]
for(let i = x.length-1;i>=0; i-- ) {
    y.push(x[i]);
}

x.push(...y)
console.log(x)