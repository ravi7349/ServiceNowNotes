// 👉 Definition:
// The ternary operator (? :) is a shorthand way of writing if-else conditions.
// It is used to assign a value or execute an expression based on a condition.

// 👉 Syntax:
// condition ? valueIfTrue : valueIfFalse

// Example (Normal way with if-else):
let age = 20;
let message;

if (age >= 18) {
    message = "can vote";
} else {
    message = "cannot vote";
}

// Example (Using ternary operator):
message = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(message);
