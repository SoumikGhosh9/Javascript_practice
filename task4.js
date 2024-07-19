// 1. Write a program to print 1 to 10 numbers using for loop and log to the console
for ( let i = 1; i <=10; i++){
    console.log(i);
   
}

// 2. Write a program to print the multiplication table of 5 using for loop
let a = 5;
for(let i =1;i <=10; i++){
    let sum = a*i;
    console.log(sum);
}

// 3. Write a program to calculate the sum of numbers 1 to 10 using for loops
let s = 0;
for(let i = 0; i <=10; i++){
     s += i;
    console.log(s)
}

// 4. Write a program to print numbers from 10 to 1 using while loop
let i = 10;
while (i>=1) {
    console.log(i);
    i--;
}

// 5. Write a program to print numbers from 1 to 5 using a do while loop
let m = 1
do {
    console.log(i);
    m++
} while (m<=5)

// 6. Write a program to find the factorial of a number using a do while loop
let number = 5; 
let factorial = 1;
let n = 1;

do {
    factorial *= i;
    i++;
} while (i <= number);

console.log(factorial);

// 7. Write a program to print the pattern using nested loops
// *
// **
// ***
// ****
// *****
let f = 5;
let j; 
for(f = 1; f <=5; f++){
    let pattern = ''
    for(j = 1; j <= f; j++){
        pattern += '*'
    }
    console.log(pattern);
}

