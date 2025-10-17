//Var and let Hoisting
console.log(a);
var a = 100;
console.log(a);


// console.log(b);
// let b = 200;
// console.log(b)

//Function Hoisting
greet(); // "Hello!"
function greet() {
  console.log("Hello!");
}

