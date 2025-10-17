async function getfactname(){

    const data = await fetch("https://catfact.ninja/fact");
    const txt = await data.json();
    console.log(txt);

}
    
