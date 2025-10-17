//Local Scope  Variables declared outside any function/block → accessible everywhere.
let x = 10;  // global scope

function show() {
  console.log(x); // ✅ can access
}
show();
console.log(x); // ✅ can access

// Function Scope (var)Variables declared with var inside a function → accessible only in that function.
function test() {
  var y = 20; // function scope
  console.log(y); // ✅ works here
}
// console.log(y); ❌ Error: not accessible outside



//Block Scope (let and const) Variables declared with let or const inside {} → accessible only inside that block.

if (true) {
  let z = 30;   // block scope
  const a = 40; // block scope
  console.log(z, a); // ✅ works here
}
// console.log(z); ❌ Error: not accessible outside


// Shortcut to remember:

// Global → everywhere

// Function → only inside function

// Block → only inside {}

// Lexical → inner can use outer variables
