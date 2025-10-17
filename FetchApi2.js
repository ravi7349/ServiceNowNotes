fetch("https://catfact.ninja/fact")
.then((res)=> res.text())
.then(txt=> 
    {
        console.log(txt)
        console.log(JSON.parse(txt))
    }
    )
.catch(()=> console.log("api failed"));

fetch("https://catfact.ninja/fact")
.then((res)=> res.text())
.then(txt=> {
    console.log(txt)
    console.log(JSON.parse(txt))
})
.catch()



