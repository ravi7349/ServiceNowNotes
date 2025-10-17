

let rem = 0;
let n = 153;
let c = n;
let sum = 0;
while(n!=0){
    rem = n%10;
    sum = sum+(rem*rem*rem);
    n = Math.floor(n/10);
}
if(c==sum){
    console.log("armstrong number");
}
else{
    console.log("Not armstrong number");
}
//An Armstrong number (also called a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.