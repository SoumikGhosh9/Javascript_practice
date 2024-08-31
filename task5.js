// 1. Write a function to check if the number is even or odd and log to the console
// function evenodd(a) {
//     if (a%2==0){
//         return("even");
//     }
//     else{
//         return("odd");
//     }
// }
// let a = 6;
// console.log(evenodd());

// 2. Write a function to calculate the square of a box and return the result
function square(height,width) {
    let square = height*width
    return(square)
}
console.log(square(10,10));

// 3. Write a function expression to find the maximum of two numbers and log the result to the console
const max = function(a,b){
    if (a>b) {
        return (a);
    }
    else{
        return (b)
    }
}
const m = 20
const n = 25
console.log(max(m,n));

// 4. Write a function expression to concatinate two strings and return the result
const concatination = function (a,b) {
    return (a+b)
}
let s1 = "soumik"
let s2= "ghosh"
console.log(concatination(s1,s2));


function sum(m,n){
    let sum = m+n;
    return sum;
}
console.log(sum(4,6));

function greeting(name){
    console.log(`Namaste ${name} uncle`);
}
greeting('nifeji');


function oddeven(a){
    if (a%2==0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
oddeven(12);
