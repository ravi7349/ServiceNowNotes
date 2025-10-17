let prm = new Promise((reject)=>
    {
        console.log("Executot functin");
        reject("Failure");
    });
console.log(prm);

let prm1 = new Promise((resolve)=>
    {
        console.log("Executot functin");
        resolve("success");
    });
console.log(prm1);

let prm2 = new Promise((resolve,reject)=>
    {
        console.log("Executot functin");
        resolve("success");

    });
prm.then((result)=>{
    console.log(result);
})