const mypromise = new Promise((resolve,reject)=>{
    let success = true;

    if(success){
        resolve("TAsk completed succesfully")
    }
    else{
        reject("error")
    }
});

mypromise
    .then(result => console.log(result))
    .then(error=>console.log(error))
    .finally(()=>console.log("Done"));

fetch("Http://jsonplaceholder")
    .then((response)=>response.json())
    .then(data=>console.log(data))
    .catch(error=> console.log("Error"))