	// What is setTimeout()?
	// ➤ Definition:
	// setTimeout() is a Web API function used to delay the execution of a piece of code by a specific amount of time (in milliseconds).
	// 🧩 Syntax:
	
	setTimeout(callbackFunction, timeInMilliseconds);
	
	
	console.log("Start");
	
	setTimeout(() => {
	  console.log("Executed after 2 seconds");
	}, 2000);
	
	console.log("End");
	
	
	// What is setInterval()?
	// ➤ Definition:
	// setInterval() repeatedly runs a function after every given time interval, until it’s stopped manually.
	// 🧩 Syntax:
	
	// setInterval(callbackFunction, timeInMilliseconds);
	
	// Example:
	
	let count = 1;
	let interval = setInterval(() => {
  console.log("Running...", count);
  count++;
	if (count > 5) {
    clearInterval(interval); // stops the repeated calls
  }
}, 1000);
// 	⚙️ Output:
	
// Running... 1
// Running... 2
// Running... 3
// Running... 4
// Running... 5
