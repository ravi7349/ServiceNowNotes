//Function declartion
function add(a,b)
{
    return a+b;
}
console.log(add(10,20));
//function expression
let add1 = function(a,b)
{
    return a+b;
}
console.log(add1(10,20));
//Arrow functions
let add3 = (a1,b1)=>
{
    return a1+b1;
}
console.log(add3(10,20));
//IIFE 
(function()
{
    console.log("helooo");
})();
