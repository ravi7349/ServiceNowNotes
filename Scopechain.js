let firstName = "Rohit";

function outerFunction()
{
    let outervar = "From outerFunction";

    function innerFnction()
    {
        let innerVar = "from InnerFUnction";
        console.log(innerVar);
        console.log(outervar);
        console.log(firstName);
    }
    innerFnction();
}
outerFunction();
