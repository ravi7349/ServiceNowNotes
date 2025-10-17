let n = 11;
let count = 0;
for(i = 2;i*i<=n;i++)
{
    if(n%i==0)
    {
        count++;
    }
}
if(count==0)
{
    console.log("prime num");
}
else{
    console.log("Not prime num");
}