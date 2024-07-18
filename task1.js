//1. Declear a variable using var, assign it a number, and log the value to the console
var a = "145612"
console.log("value of a ",a);

//2. Declear a variable using let, assign it a string, and log the value to the console
let b = "ahsdhdjabc"
console.log("value of b ",b);

//3. Declear a variable using const, assign it as a bollean, and log the value to the console
const c = 1.4251
console.log("value of c ",c);

//Create variables of different datatypes (number, string, boolean,oject, array) and log each variable types to the console

let age = 25;
console.log('age:', age, '- type:', typeof age);

let name = "Raj";
console.log('name:', name, '- type:', typeof name);

let isStudent = true;
console.log('isStudent:', Boolean, '- type:', typeof Boolean);

let person = {
    firstName: "Abc",
    lastName: "Def",
    age: 30
};

console.log('person:', person, '- type:', typeof person);

let colors = ["red", "green", "blue"];
console.log('colors:', colors, '- type:', typeof colors);

//5. Declear a variable using let, assign it a initial value, reasign a value, and log both values to the console
let student = "Amit"
student = "Soumik"
console.log("Nmae of student ",student);

// Datatype conversion
let score = "Soumik"
console.log(typeof score);
let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

// "33" => 33
// "name" => Nan
// true => 1  false=> 0

let isLoggedIn = 1
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true  0 => false
// "name" => true, "" => flase

let someNumber = 12

let stringnumber = String(someNumber)
console.log(stringnumber);
console.log(typeof stringnumber);

