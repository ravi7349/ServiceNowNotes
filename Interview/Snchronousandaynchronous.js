// 1️⃣ Synchronous Code

// JavaScript is single-threaded, meaning it executes code line by line, one task at a time.

// Each line blocks the next line until it finishes.

// This can be inefficient if a task takes time (like fetching data from a server), because the browser is stuck waiting.

// Example:

console.log("Start");
console.log("Middle");
console.log("End");


// Output:

// Start
// Middle
// End


// 2️ Asynchronous Code

// Allows some tasks to run in the background without blocking the main thread.

// JavaScript uses Web APIs (provided by browsers) to handle async tasks like:

// setTimeout / setInterval

// fetch / AJAX calls

// DOM events

// Once the async task is done, it’s added to the callback queue, and eventually executed by the event loop.

Example:

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");

setTimeout(()=>{
    console.log("Aysnc task")
},1000);


Output:

Start
End
// Async Task


// ✅ Notice that the setTimeout didn’t block the code — the next line ran immediately.

// 💡 Key Points

// JS itself is single-threaded, but async features make it non-blocking.

// This allows efficient execution of tasks like API calls, timers, or event handling.

// Web APIs (in browsers) handle these tasks, not JS itself.

// The event loop ensures async callbacks are executed when ready.

// If you want, I can now give you a real tricky async interview

// 1️⃣ DOM (Document Object Model) API

// Lets JavaScript interact with HTML/CSS.

// Examples:

document.getElementById("myDiv").innerText = "Hello Ravi";
document.querySelectorAll("p").forEach(p => p.style.color = "red");


// Real-world use: Updating webpage content dynamically, form validation, animations.

// 2️⃣ Fetch API / XMLHttpRequest

// Used to make network requests (like calling an API).

// Modern way: fetch

fetch("https://api.example.com/data")
.then((response)=> response.json())
.then(data =>console.log(data))
.then(err=>console.log(err))


async function fetchData() {
  try {
    let response = await fetch("http://example.com"); // correct fetch syntax
    let data = await response.json(); // parse JSON
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
