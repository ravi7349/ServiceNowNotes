let i;
let j;
let n = 10;
for(i = 1;i<=n;i++)
{
    row = "";
    for(j = 1;j<=n;j++)
    {
        if(i==1 ||j==1||i==n||j==n)
        {
            row = row+"*"
        }
        else{
            row = row+" "

        }
    }
    console.log(row);
    
}
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********