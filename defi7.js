

// let x = "hello";
let x = "level";
let y = [];
for (let i= x.length-1; i>=0; i--) {
    y.push(x[i])
}
if(x === y.join('')) {
    console.log(true);
}else {
    console.log(false)
}