// 👉 Definition: 
// if, if-else, if-else-if-else are conditional statements in JavaScript.
// They check conditions and run code blocks based on whether the condition is true or false.

// Example:

// Simple if
let age = 20;
if (age >= 18) {
    console.log("Welcome to the club!");
}

let cartTotal = 12000;
if (cartTotal >= 10000) {
    console.log("free shipping");
}

// if-else
let isVip = false;
if (isVip == true) {
    console.log("welcome to the vip lounge");
} else {
    console.log("welcome to lounge");
}

let balance = 1000;
let withdrawAmt = 600;
if (balance >= withdrawAmt) {
    console.log("transaction successful");
} else {
    console.log("insufficient balance");
}

// if-else-if-else
let age1 = 14;
if (age1 < 18) {
    console.log("child ticket");
} else if (age1 > 19 && age1 <= 65) {
    console.log("adult");
} else {
    console.log("senior");
}
