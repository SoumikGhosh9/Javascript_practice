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
