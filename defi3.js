

let x = [1, 2, 2, 3, 4, 4, 5]; // Original array with duplicates
let y = []; // Array to store unique values

// Loop through each element in original array
for(let i = 0; i < x.length; i++) {
    // Check if element doesn't exist in new array
    if(!y.includes(x[i])) {
        // Add unique element to new array
        y.push(x[i])
    }
}

// Output array without duplicates
console.log(y)