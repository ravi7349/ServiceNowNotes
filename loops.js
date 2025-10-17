// 👉 For loop: used when we know how many times to repeat
for (let i = 1; i <= 5; i++) {
    console.log("1");
}

// 👉 While loop: used when we don’t know how many times, but repeat until condition is false
let i1 = 1;
while (i1 <= 5) {
    console.log("2");
    i1++;
}

// 👉 Do-while loop: similar to while, but runs at least once even if condition is false
let i2 = 1;
do {
    console.log("3");
    i2++;
} while (i2 <= 10);
