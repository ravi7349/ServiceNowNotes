// 1. Function Declaration

// This is the standard way to define a function.

// It’s hoisted completely, meaning you can call it before it’s defined in the code.

// ✅ Example:

sayHello(); // ✅ Works (hoisted)
function sayHello() {
  console.log("Hello!");
};

// Why it works:
// During hoisting, both the function name and its definition are moved to the top of the scope.


// 2. Function Expression

// A function is stored inside a variable.

// Only the variable name is hoisted (not the function body).

// So, you cannot call it before it’s assigned.

//✅ Example:

sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};


// ✅ Why it fails:
// var sayHi is hoisted as undefined, but the function is assigned later.


// 3. Arrow Function (ES6)

// A shorter syntax for writing functions, introduced in ES6.

// It doesn’t have its own this, arguments, or super (it uses the parent’s this).

// Like function expression//s, it’s not hoisted.

// ✅ Example:

// const add = (a, b) => a + b;
// console.log(add(5, 10)); // 15