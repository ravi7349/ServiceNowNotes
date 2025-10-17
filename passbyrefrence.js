// Pass by reference: A process where a variable stores the address of an object.
// When another variable is assigned to it, both refer to the same object in memory.
// Changing one affects the other because they share the same reference.

let c1 = {
    name: "BMW",
    cost: 75.6,
    milage: 8.9
};

console.log(c1.name);    // BMW
console.log(c1.cost);    // 75.6
console.log(c1.milage);  // 8.9

let c2 = c1;  // both c1 and c2 point to the same object

c2.cost = 100; // change via c2

console.log(c2.cost); // 100
console.log(c1.cost);
 // 100 (also changed, because both refer to same object)


 let c2 = {
    name: "BMW",
    cost: 99,
    milage: 9
 };

 console.log(c2.name);
    console.log(c2.cost);
    console.log(c2.milage);
c2.cost = 200;
console.log(c2.cost);
console.log(c1.cost);
