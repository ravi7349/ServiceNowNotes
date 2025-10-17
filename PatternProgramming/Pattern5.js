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
            row = row+j
        }
        else{
            row = row+" "

        }
    }
    console.log(row);
    
}

// 12345678
// 1      8
// 1      8
// 1      8
// 1      8
// 1      8
// 1      8
// 12345678
