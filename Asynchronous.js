function fun1()
{
    console.log("Func1 execution started");
    console.log("Func1 execution complteted");
}
function fun2()
{
    console.log("Func2 execution started");
    console.log("Func2 execution complteted");
    let start = Date.now();
    let delay = 5000;
    let end = start+delay;
    while(Date.now()<=end)
    {

    }
}
function fun3()
{
    console.log("Func3 execution started");
    console.log("Func3 execution complteted");
}

fun1();
setTimeout(fun2,2000);
fun3();