n = 12345
rem = 0
sum = 0
while(n!=0)
{
    rem= n%10;
    sum = sum*10+rem;
    n = Math.floor(n/10);
}
console.log(sum);