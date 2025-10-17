
let ar = "12233334444557";
let count = 1;
for(let i = 0;i<ar.length-1;i++)
{
    if(ar[i]==ar[i+1])
    {
        count++;
    }
    else{
        console.log(ar[i]+" "+count);
        count=1;
    }
}
console.log(ar[ar.length-1]+" "+count);

