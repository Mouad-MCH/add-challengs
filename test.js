const prompt = require('prompt-sync')({ sigint: true });

let tab = [5,1,1,1,1,2,4,2,4,5,5];
let c;
let i;

function count(a){
    let foi=0;
    for(let j = 0;j<tab.length;j++){
        if(a == tab[j]) foi++;
    }
    return foi;
}


for(i = 0; i<tab.length; i++){
    if(count(tab[i]) % 2 != 0){
        c = count(tab[i])
        break;
    }
}

console.log(`la valeur: ${tab[i]} repete ${c} fois!`);