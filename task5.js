// 1. Write a function to check if the number is even or odd and log to the console
function evenodd(a) {
    if (a%2==0){
        return("even");
    }
    else{
        return("odd");
    }
}
let a = 6;
console.log(evenodd());

// 2. Write a function to calculate the square of a box and return the result
function square(height,width) {
    let square = height*width
    return(square)
}
console.log(square(10,10));
