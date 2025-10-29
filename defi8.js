

let x = "hello";
let obj = {}

for(i of x) {
    // obj[i] = (obj[i] || 0) +1;
    if(obj[i] == undefined) {
        obj[i] = 1;
    } else {
        obj[i]++;
    }

}

console.log(obj)