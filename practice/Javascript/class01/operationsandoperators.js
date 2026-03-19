//Operations: operations are actions we perform on values or variables using operators.

//1. Arithmetic Operations :-Used for mathematical calculations.(addition(+),substraction(-),multiply(*),division(/),modulus(%),increment(++),decrement(--).)

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1

//2.Assignment Operations :-Used to assign values to variables.
//==(equals),>=(greater-than),<=(less-than),!=(not equals).
//Shorthand assignment operators:=,'+=','-=','*=','/=','%='.
let x = 10;

x += 5;   // x = x + 5
console.log(x);  //15

x -= 3;   // x = x - 3
console.log(x);  //12

x *= 2;   // x = x * 2
console.log(x);  //24

x /= 4;   // x = x / 4
console.log(x);   //6

// 3.Comparision Operators:Used to compare values.They return true or false.
//   These operators are fundamental for creating logical conditions and comparisons in JavaScript.
//   '==','==='(strict equality),'!=','!=='(strict inequality),'>','<','>=','<='.

let p = 10;
let q = 5;

console.log(p > q);   // true
console.log(p == q);  // false
console.log(p!== q); // true

//4.Logical Operations :Used to combine conditions.
//'&&'(AND),'||'(OR),'!'(NOT).

let age = 20;

console.log(age > 18 && age < 25); // true
console.log(age > 30 || age < 25); // true
console.log(!(age > 18)); // false

//5.Increment and Decrement: Used to increase or decrease value by 1.
let num = 5;

num++;
console.log(num); // 6

num--;
console.log(num); // 5

//6.Unary Operator is an operator that works on only one operand (one value or one variable).
//1. Increment Operator (++) :It increases the value by 1.
let x1 = 5;

x1++;

console.log(x1);  //6

//2.Decrement Operator (--) :It decreases the value by 1.
let x2 = 5;

x2--;

console.log(x2); //4