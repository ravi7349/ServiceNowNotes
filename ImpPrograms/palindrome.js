n = 12321
rem = 0
sum = 0
c = n;
while(n!=0)
{
    rem= n%10;
    sum = sum*10+rem;
    n = Math.floor(n/10);
}
console.log(sum);
if(c==sum)
{
    console.log("Palindrome")
}
else{
    console.log("Not palidrome")
}
