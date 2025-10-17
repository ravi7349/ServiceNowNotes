// Global Scope
var name = 'ravi';

function greet(){
    console.log("Hello" +name);
}
greet();

// Function Scope
function greet12(){
    let name3 = "vamshi"
    console.log(name3);
}
greet12();


//block Scope
if(true){
    let x = 100;
    const y = 200;
    console.log(x,y);
}
console.log(x,y);