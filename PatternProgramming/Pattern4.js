let i;
let j;
let n = 8;
for(i = 1;i<=n;i++)
{
    row = "";
    for(j = 1;j<=n;j++)
    {
        if(i==1 ||j==1||i==n||j==n)
        {
            row = row+i
        }
        else{
            row = row+" "

        }
    }
    console.log(row);
    
}
// 11111111
// 2      2
// 3      3
// 4      4
// 5      5
// 6      6
// 7      7
// 88888888
