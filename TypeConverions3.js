// String to number (Option 1)
let e = "123";             
// 'e' created in memory (stack), value = "123" (string primitive)
console.log(e);            // "123"
console.log(typeof e);     // "string"

// It won’t convert 'e' directly. 
// It just takes a copy of 'e'’s value, removes quotes,
// and makes a new number 123. 
// If we want, we can store it in another variable.
let f = Number(e);         
console.log(f);            // 123
console.log(typeof f);     // "number"

// String to number (parseInt)(PARSEINT)
let e1 = "123tap";         
// 'e1' created in memory (stack), value = "123tap" (string primitive)
console.log(e1);           // "123tap"
console.log(typeof e1);    // "string"

// parseInt reads characters from left to right.
// It converts valid number parts into a number until a non-digit is found.
// So here it takes "123", stops at "t", and returns 123.
let f1 = parseInt(e1);     
console.log(f1);           // 123
console.log(typeof f1);    // "number"


