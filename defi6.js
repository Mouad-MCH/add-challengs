

let v = ["a", "e", "i", "o", "u","y"];
let x = "development";
let count = 0;

for(let i = 0; i<x.length;i++) {
    let y = x[i];
    for(let j = 0; j<v.length; j++) {
        if(y === v[j]) [
            count++
        ]
    }
}

console.log(count)
