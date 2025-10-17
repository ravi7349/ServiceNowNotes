function loadDashBoard(id,callback)
{   
    let error;
    setTimeout(()=>{
        if(error)
        {
            return callback(error);
        }
        console.log("Fething user data...");

        setTimeout(()=>{

            if(error)
            {
                return callback(error);
            }
            console.log("Fething user Friend list...");

            setTimeout(()=>{

                if(error)
                {
                  return callback(error);
                }
                console.log("Fetching user posts");

                setTimeout(()=>{

                    if(error)
                    {
                    return callback(error);
                    }
            
                    console.log("Fetching user comments")
                },2000);
            },2000);
        },2000);
    },2000);
}


function errorhandler(error)
{
    console.log("error has occuredd");
}

loadDashBoard("101",errorhandler);
// this is one of most unredabililty format with the helpof aysnchronous to avoid this kind of ciurmstances promies are introdued