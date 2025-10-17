// Used before a function to make it return a Promise automatically.

async function greet() {
  return "Hello Ravi!";
}


// Even though it looks normal, it’s the same as:

function greet() {
  return Promise.resolve("Hello Ravi!");
}


async function fetchUserData() {
  console.log("Start fetching...");

  let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await response.json();

  console.log("User Data:", data);
  console.log("Finished!");
}

fetchUserData();
console.log("Other code running...");


// In JavaScript, the async keyword is used before a function to make that function return a Promise automatically.
// The await keyword is used inside an async function to pause the code execution until that Promise resolves or rejects.
// Once the Promise is resolved, execution continues from the next line.