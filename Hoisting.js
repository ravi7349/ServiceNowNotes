// Example with var
console.log(a1);   // Output: undefined (because of hoisting)
var a1 = 100;
console.log(a1);   // Output: 100

// Example with let
console.log(a2);   // ❌ ReferenceError (Temporal Dead Zone)
let a2 = 100;
console.log(a2);   // Output: 100

/*
📌 Hoisting
- Hoisting is the process where declarations are moved to the top of the scope before code execution.
- Both 'var' and 'let' are hoisted, BUT they behave differently.

1) var
   - Memory is allocated and initialized with 'undefined' during hoisting.
   - That’s why accessing before declaration gives 'undefined', not an error.
   - No Temporal Dead Zone (TDZ).

2) let
   - Memory is allocated but NOT initialized during hoisting.
   - Accessing before declaration → ReferenceError (because of TDZ).
   - TDZ = the time between hoisting and actual initialization, where the variable exists but cannot be accessed.

✅ Difference Summary:
- var → hoisted + initialized with undefined, no TDZ.
- let → hoisted but not initialized, TDZ exists until initialization.
*/
