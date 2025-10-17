const mypromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success)
    {
        resolve("task done Succesfullly")
    }
    else{
        reject("Failed")
    }
});

mypromise
    .then((response)=>console.log(response))
    .then(error=> console.log("error"))
    .finally(()=>console.log("TAsk done"))

fetch("http:////")
.then((response)=>response.json())
.then(data=> console.log(data))
.catch(error =>console.log("error"))