// 1. Function Declaration
// A function defined with the 'function' keyword. It is hoisted (can be called before it's defined).
function add(a, b) {
    return a + b;
}
console.log("Function Declaration:", add(10, 20));

// 2. Function Expression
// A function stored inside a variable. Not hoisted (must be defined before use).
let add1 = function(a, b) {
    return a + b;
};
console.log("Function Expression:", add1(10, 20));

// 3. Arrow Function
// A shorter syntax for writing functions. Doesn't have its own 'this' or 'arguments'.
let add3 = (a, b) => {
    return a + b;
};
console.log("Arrow Function (block body):", add3(20, 30));

// Another way (shorter) of Arrow Function
let add4 = (a, b) => a + b;
console.log("Arrow Function (concise body):", add4(10, 20));

// 4. Immediately Invoked Function Expression (IIFE)
// A function that runs immediately after it is defined.
(function () {
    console.log("IIFE: Hello!");
})();

