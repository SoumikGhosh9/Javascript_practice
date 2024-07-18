//1. Write a program to check a number is positive negative or zero and the result to the console
const num1 = 12
if (num1>0) {
    console.log("Number is positive");
}
else if (num1==0) {
    console.log("Number is zero")
} 
else {
    console.log("Number is negative")
}

//2. Write a program to check if a number is eligible to vote or not and log to the console
const age = 12
if (age>=18) {
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//3. Write a program to find the largest of three numbers using nested if else statement
    let largest;
    const n1 = 15
    const n2 = 5
    const n3 = 8
    
    
    if (n1 >= n2) {
        if (n1 >= n3) {
            largest = n1;
        } else {
            largest = n3;
        }
    } else {
        if (n2 >= n3) {
            largest = n2;
        } else {
            largest = n3;
        }
    }
    
console.log("Largest is",largest);

//4. Write a program that uses switch case to determine the  day of the week based on a number (1-7) and log the day name to the console
let day = 2;
let dayname;
switch (day) {
    case 1:
        dayname = "Sunday"
        break;
    case 2:
        dayname = "Monday"
        break;
    case 3:
        dayname = "Tuesday"
        break;
    case 4:
        dayname = "Wednesday"
        break;
    case 5:
        dayname = "Thursday"
        break;
    case 6:
        dayname = "Friday"
        break;
    case 7:
        dayname = "Saturday"
        break;

    default:
        dayname = "Wrong Input"
        break;
}
console.log("Today is "+dayname)

//5. Write a program that uses switch case to assign a grade ('A','B','C','D','E') based on a score and log the grade to the console
let number = 75;
let grade;
switch (true) {
    case (number>=90):
        grade = "A";
        break;
    case (number>=80):
        grade = "B";
        break;
    case (number>=70):
        grade = "C";
        break;
    case (number>=60):
        grade = "D";
        break;
    case (number>=50):
        grade = "E";
        break;

    default:
        grade = "F";
        break;
}
console.log("Grade is"+grade);

//6. Write a program to use ternary operator to check if a number is even or odd and log the result to the console
let number1 = 5
let result = (number1%2 === 0) ? "even": "odd" ;
console.log(result);

//7. Write a program to check if a year is leap year or not and log the result to the console
let year = 1983
if(year%4==0 && year%400==0 && year/100!=0){
    console.log("Leap Year");
}
else{
    console.log("Not a leap year");
}