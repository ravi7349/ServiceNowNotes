// Array creation
let ar = [10,20,30,40,50];
console.log(ar);  
// Output: [10,20,30,40,50]

console.log("--------Push-------");
// push() → adds an element at the end
ar.push(60);
console.log(ar);  
// Output: [10,20,30,40,50,60]

console.log("--------UnShift-------");
// unshift() → adds an element at the beginning
ar.unshift(70);
console.log(ar);  
// Output: [70,10,20,30,40,50,60]

console.log("--------Pop-------");
// pop() → removes the last element and returns it
let x = ar.pop();
console.log(x);   
// Output: 60 (removed element)
console.log(ar);  
// Output: [70,10,20,30,40,50]

console.log("--------Shift-------");
// shift() → removes the first element and returns it
let y = ar.shift();
console.log(y);   
// Output: 70 (removed element)
console.log(ar);  
// Output: [10,20,30,40,50]

// Second array
let ar2 = [10,20,30,40,50,60];
console.log(ar2);  
// Output: [10,20,30,40,50,60]
