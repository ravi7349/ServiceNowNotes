let ar = [1,9 ,87,6,5,4,3]
for(let i = 0;i<ar.length-1;i++)
{
    for(let j = i+1;j<ar.length;j++)
    {
        if(ar[i]>ar[j])
        {
            let temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }
}
console.log(ar);
