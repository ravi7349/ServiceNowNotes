// boolean --> number
let g = true;               
// 'g' created in memory (stack), value = true (boolean primitive)
console.log(g);             // true
console.log(typeof g);      // "boolean"

// It won’t convert 'g' directly.
// It just takes a copy of 'g'’s value, then creates a new number.
// In JavaScript: true → 1, false → 0
// If we want, we can store it in another variable.
let g1 = Number(g);         
console.log(g1);            // 1
console.log(typeof g1);     // "number"
