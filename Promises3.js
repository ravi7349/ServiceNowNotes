let prm = new Promise((resolve,reject)=>{
    let success = true;
    if(success)
    {
        resolve("task completedd succesfully")
    }
    else{
        reject("Tas failed");
    }
});

prm.then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=> console.log("Tasslk finised"))