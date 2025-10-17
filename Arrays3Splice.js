let ar2 = [10,20,30,40,50,60];
console.log(ar2);  
// Output: [10,20,30,40,50,60]

console.log("--------Splice (Remove 1 element)-------");
// splice(start, deleteCount) → removes elements
let remove = ar2.splice(2,1);   // removes 1 element from index 2
console.log(ar2);               // [10,20,40,50,60]
console.log(remove);            // [30] (removed element)

console.log("--------Splice (Remove 3 elements)-------");
let remove1 = ar2.splice(2,3);  // removes 3 elements from index 2
console.log(ar2);               // [10,20]
console.log(remove1);           // [40,50,60] (removed elements)

console.log("--------Splice (Insert without delete)-------");
// splice(start, 0, newElement) → insert element without deleting
ar2.splice(2,0,60);
console.log(ar2);               // [10,20,60]

console.log("--------Splice (Replace element)-------");
// splice(start, deleteCount, newElement) → replace element
ar2.splice(2,1,70);
console.log(ar2);               // [10,20,70]


// ---------- Searching methods ----------
let ar3 = [1,2,3,4,5,6,7,1,8];
console.log(ar3);               // [1,2,3,4,5,6,7,1,8]

// indexOf(value) → first index of the element (else -1 if not found)
console.log(ar3.indexOf(3));    // 2 (index of first occurrence of 3)
console.log(ar3.indexOf(9));    // -1 (since 9 not present)

// lastIndexOf(value) → last occurrence index of the element
console.log(ar3.lastIndexOf(8)); // 8 (last occurrence of 8)

// includes(value) → true if element exists, false otherwise
console.log(ar3.includes(2));    // true
console.log(ar3.includes(10));   // false
