function calcGrade(student1Marks,student1MAxMarks)
{
    let student1percentage = (student1Marks/student1MAxMarks)*100;
    let student1Grade;
    if(student1percentage>=90)
    {
        student1Grade = 'A';
    }
    else if(student1percentage>=80)
    {
        student1Grade= 'B';
    }
    else if(student1percentage>=70)
    {
        student1Grade= 'C';
    }
    else if(student1percentage>=60)
    {
        student1Grade= 'D';
    }
    else{
        student1Grade = 'F';
    }
    console.log(student1Grade);

}
calcGrade(62,100);