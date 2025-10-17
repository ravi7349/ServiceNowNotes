// 👉 Definition:
// A function in JavaScript is a reusable block of code 
// designed to perform a specific task. It can take inputs 
// (parameters), process them, and optionally return an output.

// 👉 Why we use functions:
// 1. Reusability → Write once, use many times.
// 2. Modularity → Break big programs into smaller pieces.
// 3. Readability → Code becomes easier to understand.
// 4. Maintainability → Easy to fix or update in one place.
// 5. Avoid repetition → Don’t repeat same logic multiple times.

// Syntax:
// function functionName(parameters) {
//     // body of function
//     return value; // optional
// }

//No input and no output
// Function takes nothing and returns nothing
let a = 100;
let b = 200;

function add() {
    let c = a + b;
    console.log(c); // prints the result directly
}

add(); // Output: 300
let a1=100;
let b1 = 400;

function add2()
{
    let c1 = a1+b1;
    console.log(c1)
}
add2();
