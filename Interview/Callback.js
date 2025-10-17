function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling another function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ravi", sayBye);


// Example 2: Callback with setTimeout (Async Simulation)
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data received!");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);

// ✅ Output:
// Fetching data...
// Data received!
// Processing data...