//let, const, and var are keywords used to declare variables (store values).

//1. let:is the modern way of declaring variables.
//Cannot redeclare in the same scope , Can reassign value ,Uses block scope

let a =10;
console.log(a); //10

a=20;
console.log(a) //reassigment allowed  output:20

//let a=30;      (uncomment and check)
console.log(a)  //redeclare not allowed  output:20
//Identifier 'a' has already been declared


//2.const means constant value (value cannot change).
//Cannot redeclare, Cannot reassign, Block scope

const pi = 3.14;
console.log(pi);   //3.14

//EX:2 
const x=20;
console.log(x);

// x=30;
// console.log(x); //reassignment not allowed(Assignment to constant variable.)


//const x=50;
console.log(x);  //redeclare not allowed(Identifier 'x' has already been declared)


//Console.log: is used to print output in the browser console.
let fname = "Rahul";
console.log(fname);   //Rahul

let marks = 90;
console.log("Marks:", marks);  //Marks: 90


//Template literals:Template literals are strings written using backticks ` ` instead of quotes.
//They allow you to insert variables inside strings easily.
//Syntax: `text ${variable}`

let fsname = "Nishu";
let age = 2;

console.log(`My name is ${fsname} and I am ${age} years old`); //My name is Nishu and I am 2 years old

let p = 10;
let b = 5;

console.log(`Sum is ${p + b}`);  //Sum is 15

//equality(==) and strict equality(===)
//1.  == (Loose Equality) :checks only the value, not the data type.

console.log(5 == "5");  //true

//2.=== (Strict Equality) :checks value AND data type.If types are different, it does not convert them.
console.log(5 === "5");  //false