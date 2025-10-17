// Synchronous
//line by line exectuion where one line of code will be executued then after next line
//java script executes synchronoulsyy ie executio happens one line at a time sequentially
//one piece of code will block the another picee of code

// Synchronous Example in JavaScript
// Executes line by line, one after another (blocking)

function task1() {
    console.log("Task 1 started");

    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    console.log("Task 1 executing...");
    while (Date.now() <= end) {
        // busy wait for 5 seconds
    }
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 started");

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;

    console.log("Task 2 executing...");
    while (Date.now() <= end) {
        // busy wait for 3 seconds
    }
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 started");

    let start = Date.now();
    let delay = 6000;
    let end = start + delay;

    console.log("Task 3 executing...");
    while (Date.now() <= end) {
        // busy wait for 6 seconds
    }
    console.log("Task 3 completed");
}

// Run tasks synchronously
task1();
task2();
task3();
