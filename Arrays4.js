// 1) map() 
//map() is a built-in Python function that applies a given function to each item in a list (or any iterable) and returns the result. It is used when you want to perform the same operation on every item in a list.

let numbers = [1,4,9,16];
function squreroot(x) {
    return Math.sqrt(x);
}
let result = numbers.map(squreroot);
console.log("Map Result:", result);  // [1,2,3,4]

// 2) filter()
// 		The built-in filter() function in Python is used to process an iterable and extract items that satisfy a given condition, as determined by a filtering function.
//	filter() returns an iterator that yields only the elements for which the filtering function returns a truthy value:

let ages = [32,15,19,12];
function checkAge(x1) {
    return x1 > 18; // returns true or false
}
let result1 = ages.filter(checkAge);
console.log("Filter Result:", result1);  // [32,19]

// 3) reduce()
//  applies function to the first two elements in a sequence then the result and next item it will processs untill last make one result
function reducefun(total, x2) {
    return total + x2; // add each element
}
let result3 = numbers1.reduce(reducefun);
console.log("Reduce Result:", result3);  // 21


let numbers4 = [1,2,3,4,5,6]

function mapfunc(x)
{
    return Math.sqrt(x);
}


let result5 = numbers4.map(mapfunc)
console.log(result5)