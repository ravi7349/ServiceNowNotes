//Scope is basically determines where the partilucar variables is accesed within the program
// Global scope,FUnction scope.Bloack Scope


// global scope
// in the case of let and var it behaves same
let a = 100;
console.log(a);

function fun()
{
    console.log(a);
}
fun();

//functions scope

function fun1()
{
    let a1 = 1000;
    console.log(a1);
}
fun();
console.log(a1);