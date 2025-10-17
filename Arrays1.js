// Definition: 
// An array in JavaScript is a special variable that can store multiple values in a single variable.

// Creation of Array (2 types):
let arr = ["Rohit","Megha","Shipa","Soms","Divya"];   // Method 1: Using []
let arr1 = new Array(5);                              // Method 2: Using new Array()

// Assigning values to arr1
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;
arr1[4] = 50;

// Accessing Array Elements directly
console.log(arr[0]);  // Rohit
console.log(arr[1]);  // Megha
console.log(arr[2]);  // Shipa
console.log(arr[3]);  // Soms
console.log(arr[4]);  // Divya
console.log(arr);     // Prints the whole array

// Accessing using for loop
for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Accessing using for...of loop
for(let x of arr1) {
    console.log(x);
}
