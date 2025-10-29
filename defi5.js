

let x = [1, 2, 3]; // Original array
let y = [] // Array to store reversed elements

// Reverse the original array by iterating from end to beginning
for(let i = x.length-1; i >= 0; i-- ) {
    // Add each element to y in reverse order
    y.push(x[i]);
}

// Append the reversed array to original array using spread operator
x.push(...y)
// Output the final palindrome array
console.log(x) // Result: [1, 2, 3, 3, 2, 1]