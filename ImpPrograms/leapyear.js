let leapyear = 2019;

if((leapyear%4==0 &&leapyear%400!=0 )|| (leapyear%100==0))
{
    console.log("leap year");
}
else{
    console.log("Not leap year")
}