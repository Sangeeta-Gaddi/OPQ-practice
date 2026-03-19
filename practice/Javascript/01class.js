// Javascrpit-->understable by web browser,
// JavaScript is a programming language used to make websites interactive. 
// it brings web pages to life by enabling dynamic behaviours like click, actions, serach and filtering, form valiation and real-time updates.


//variables: A variable is a container that stores data. or it is a name of storage location.

let firstName="sangeeta";
console.log(firstName)

let age=23;
console.log(age);


//data types:JavaScript data types are the different kinds of things you can store inside your variable boxes.
//JavaScript has:
//Primitive Data Types and Non-Primitive (Reference) Data Types:

/*Primitive Data Types : These are simple, single values.
1. String (Text) :Used for letters, words, sentences.
let name = "Sangeeta";
Text must be inside quotes " " or ' '.

2. Number : Used for numbers (integer or decimal).
let age = 21;
let price = 99.99;
In JavaScript, there is only one number type. No separate int or float.

3. Boolean :Only two values:
true
false

let isStudent = true;


4. Undefined : When a variable is declared but not given a value.
let city;
console.log(city); // undefined

It exists, but it’s empty.

5. Null : Means intentionally empty.
let data = null;
You are saying: “There is nothing here.”

6. BigInt : For very large numbers.
let bigNumber = 12345678901234567890n;
Used rarely in basic frontend.

7. Symbol : Used for unique identifiers (advanced topic).
let id = Symbol("id");



/*Non-Primitive (Reference) Data Types : These can store multiple values.
These can store multiple values.

1. Object :Stores data in key:value pairs.

let student = {
  name: "Sangeeta",
  age: 21
};


2. Array : Stores multiple values in order.
let numbers = [10, 20, 30];
Like a list 

3. Function : Yes, functions are also a type in JavaScript.

function greet() {
  console.log("Hello");
}
Functions can be stored in variables too.
*/


let num=10;
console.log(num);

let userNmae="Sangu"
console.log(userNmae);

let isStudent=true;

let city;
console.log(city);  

let data=null;
console.log(data);

let bigNumber = 12345678901234567890n;
console.log(bigNumber);

let id=Symbol("id");
console.log(id);



// How to Check Data Type?
// Use typeof

let userAge = 21;
console.log(typeof userAge);  // number


//operations in javascript: 
/*Operations in JavaScript are the little engines that make values do things 
Without them, variables just sit there like quiet library books.*/



/* 1. Arithmetic Operators
Used for calculations.

```javascript
let a = 10;
let b = 5;

console.log(a + b);  // 15  (Addition)
console.log(a - b);  // 5   (Subtraction)
console.log(a * b);  // 50  (Multiplication)
console.log(a / b);  // 2   (Division)
console.log(a % b);  // 0   (Modulus / Remainder)
```

`%` gives remainder after division.
Very useful for checking even or odd numbers.

---

# 2. Assignment Operators

Used to assign or update values.

```javascript
let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2
```

Shortcuts that keep code neat and tidy 



3. Comparison Operators

Used to compare values.
They return `true` or `false`.

```javascript
let a = 10;
let b = "10";

console.log(a == b);   // true  (loose comparison)
console.log(a === b);  // false (strict comparison)
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 5);    // true
console.log(a < 5);    // false
```

Important difference:

* `==` checks value only
* `===` checks value AND type  (always prefer this)

---

# 4. Logical Operators

Used to combine conditions.

```javascript
let age = 20;

console.log(age > 18 && age < 25);  // true
console.log(age > 18 || age < 10);  // true
console.log(!(age > 18));           // false
```

* `&&` → AND
* `||` → OR
* `!` → NOT

Think of them as decision gates 

---

# 5. Increment & Decrement

```javascript
let num = 5;

num++;  // 6
num--;  // 5
```

Used in loops mostly.

---

# 6. String Operator

`+` can join strings.

```javascript
let first = "Sangeeta";
let last = "Gaddi";

console.log(first + " " + last);
```

This is called concatenation.

---

# Summary

| Type       | Purpose             |
| ---------- | ------------------- |
| Arithmetic | Calculations        |
| Assignment | Store/update values |
| Comparison | Compare values      |
| Logical    | Combine conditions  |
| Increment  | Increase/Decrease   |
| String     | Join text           |

---

## One-Line Definition

Operators are symbols that perform actions on values.

---

*/

let a=20;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);  //remainder


let x = 10;
 console.log(x+=5);

console.log(x-=2);
console.log(x*=2);
console.log(x/=2);



//let, const and var (reassigmenta nd redeclaration)
/*


# 1. `var`

 Reassignment → Allowed
 Redeclaration → Allowed

```javascript
var x = 10;
x = 20;        // ✅ Reassignment allowed

var x = 30;    // ✅ Redeclaration allowed
```

`var` is very flexible… sometimes *too* flexible 
That’s why modern JavaScript avoids it.

---

# 2. `let`

 Reassignment → Allowed
 Redeclaration → NOT Allowed (in same scope)

```javascript
let y = 10;
y = 20;        // ✅ Reassignment allowed

let y = 30;    // ❌ Error (cannot redeclare)
```

Think of `let` as disciplined but adjustable.

---

3 `const`

 Reassignment → NOT Allowed
 Redeclaration → NOT Allowed

```javascript
const z = 10;
z = 20;        // ❌ Error

const z = 30;  // ❌ Error
```

`const` is strict and stable 
Once you assign a value, that’s it.

---

#  Comparison Table

| Keyword | Reassignment | Redeclaration |
| ------- | ------------ | ------------- |
| var     | ✅ Yes        | ✅ Yes         |
| let     | ✅ Yes        | ❌ No          |
| const   | ❌ No         | ❌ No          |

---

# ⚠️ Important Interview Note

For `const`, if it stores an object or array:

```javascript
const person = { name: "Sangeeta" };
person.name = "Gaddi";   // ✅ Allowed
```

You cannot reassign the variable,
but you can modify the contents inside it.

---

# 🎯 Final Simple Rule

* Use `const` by default
* Use `let` if value needs to change
* Avoid `var` in modern JavaScript

*/

//Examples
// let a =10;
// console.log(a);

// a=20;
// console.log(a) //reassigment allowed

// // let a=30;
// console.log(a)  //redeclare not allowed

// //Identifier 'a' has already been declared

// const x=20;
// console.log(x);

// // x=30;
// // console.log(x); //reassignment not allowed(Assignment to constant variable.)


// const x=50;
// console.log(x);  //redeclare not allowed(Identifier 'x' has already been declared)

