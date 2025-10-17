function fun1()
{
    console.log("func 1 execution started");
    console.log("FUnc2 execution completed");
}
function fun2()
{
    console.log("func 2 execution started");
    let start = Date.now();
    let delay = 5000;
    let end = start+delay;
    while(Date.now()<=end)
    {

    }
    console.log("Func2 execution completed")

}
function fun3()
{
    console.log("func 3 execution started");
    let start = Date.now();
    let delay = 5000;
    let end = start+delay;
    while(Date.now()<=end)
    {

    }
    console.log("Func3 execution completed")

}
function fun4()
{
    console.log("func 4 execution started");
    console.log("FUnc 4 execution completed");
}

fun1();
setTimeout(fun2,5000);
setTimeout(fun3,2000);
fun4();