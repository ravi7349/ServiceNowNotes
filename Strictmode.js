"use strict";

x = 10;  // ❌ Error: x is not declared

function demo(a, a) { // ❌ Error: duplicate parameters
    console.log(a);
}

function test() {
    console.log(this); // undefined instead of window/global
}
