//1. Write a program to add two numbers and log the result to the console 
const a = 15
const b = 18
const c= a+b
console.log(c);

//2. Write a program to subtract two numbers and log the result to the console
const e = 48
const f = 10
const g = e-f
console.log(g);

// 3. Write a program to multiply two numbers and log the result to the console
const a1 = 80
const b1 = 5
const r1 = a1*b1
console.log(r1)

// 4. Write a program to divide two numbers and log the result to the console
const div1 = 100
const div2 = 5
const res1 = div1/div2
console.log(res1)

// 5. Write a program to find the remainder when one number divided by another number and log the result to the console

const p1 = 10
const p2 =3
const s =p1%p2
console.log(s);

//6. Use the += operator to add two numbers and log the result to the console 
function addNumbers(a,b){
    a+=b
    return a
}
const num1 = 20
const num2 = 30
const result = addNumbers(num1,num2)
console.log(result)

//7. Use the -= operator to subtract two numbers and log the result to the console 
function subNumbers(a,b){
    a-=b
    return a
}
const n1 = 60
const n2 = 48
const result2 = subNumbers(n1,n2)
console.log(result2)

// 8. write a program to compare two numbers using > and < and log the result to the console 

const w = 5
const x = 6
if (w>x) {
    console.log(+w+" is greater");
}
else{
    console.log(+x+" is greater");
}

// 9. write a program to compare two numbers using >= and <= and log the result to the console
const t = 30
const t1 = 10
if(t >= t1){
    console.log("value changed");
}
else{
    console.log("value not changed");
}

// 10. Write a program that uses the && operator to combine two conditions and log to the console
const number = 16
if (number%2==0 && number>=0) {
    console.log("The number is positive and even ");
}
else{
    console.log("The number is not even");
}

// 11. Write a program that uses the || operator to combine two conditions and log to the console
