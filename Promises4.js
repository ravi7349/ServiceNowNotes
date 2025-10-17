const prm = new Promise(
    function exectorfun(resolve,reject){
    console.log("inside executor func...");
    setTimeout(()=>{
        console.log("water has beem boiled");
        resolve();

    },3000);
});
prm.then(()=>{
    console.log("Promise fulfilled");
})
.catch(()=>{
    console.log("promise unfulfilled")
})