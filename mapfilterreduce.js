// 1) map() 
// Definition: map() is a built-in Python function that applies a given function to each item in a list (or any iterable) and returns the result. It is used when you want to perform the same operation on every item in a list.// Usage: Used when you want to transform every element (e.g., convert values, square numbers, apply formulas).
let numbers = [1,4,9,16];
function squreroot(x) {
    return Math.sqrt(x);
}
let result = numbers.map(squreroot);
console.log("Map Result:", result);  // [1,2,3,4]
// 2) filter()

//The built-in filter() function in Python is used to process an iterable and extract items that satisfy a given condition, as determined by a filtering function.
// Usage: Used when you want to extract elements based on conditions (e.g., get all adults above 18).
let ages = [32,15,19,12];
function checkAge(x1) {
    return x1 > 18; // returns true or false
}
let result1 = ages.filter(checkAge);
console.log("Filter Result:", result1);  // [32,19]
// 3) reduce()
// Definition: reduce() 
//applies function to the first two elements in a sequence then the result and next item it will processs untill last make one result
// Usage: Used when you want to calculate one result (e.g., sum of numbers, max/min, factorial, etc.).
let numbers1= [1,2,3,4,5,6];
function reducefun(total, x2) {
    return total + x2; // add each element
}
let result3 = numbers1.reduce(reducefun);
console.log("Reduce Result:", result3);  // 21