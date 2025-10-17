// Pass by value: A copy of the value is given to another variable.
// Changing one variable does not affect the other.
// Pass by value: In JavaScript, primitive types (Number, String, Boolean, null, undefined, Symbol, BigInt) 
// are stored directly in the variable. When assigned to another variable, only the value is copied, 
// not the address. So, changing one variable does not affect the other.

let a = 100;
let b;

b = a;            
console.log(b);   // 100
console.log(a);   // 100

b = 200;          
console.log(b);   // 200
console.log(a);   // 100

let a1 = 100;
let b1;
b1 = a1;
console.log(a1);
console.log(b1);

b1 = 200;
console.log(b1);
console.log(a1);
