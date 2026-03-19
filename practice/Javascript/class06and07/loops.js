//Array reference :means variables store the memory address of the array, so multiple variables can point to the same array.
//In JavaScript, arrays work using references, not by copying values (in most cases).
//A reference means a variable does not store the actual array. It stores the address/location of the array in memory.

let x = [5,6,7];
let y = x;

console.log(x === y);   //true(Both point to the same memory location.)

let a = [1,2,3];
let b = [1,2,3];

console.log(a === b);   //false(Even though values are the same, they are different arrays in memory.)

//LOOPS: loops are used when you want to repeat a block of code multiple times without writing it again and again.
//If you want to print numbers 1 to 5, instead of writing as below, we can use loops

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//1. for loop: The for loop is the most commonly used loop.
// Syntax
// for(initialization; condition; update){
//     code to run
// }

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// output:1
// 2
// 3
// 4
// 5

//print odd numbers(between 1 to 15)
for(let i=0;i<=15;i++){
    if(i%2!==0){
        console.log(i);
    }
}

//print even numbers(between 2 t0 10)
for(let i=2;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}

//multiplication table for 5
for(let i=1;i<=10;i++){
    console.log("5*"+i+"="+(5*i));
}

//Infinite loop:An infinite loop in JavaScript is a loop that never stops running because its condition never becomes false.
//An infinite loop is a loop that runs again and again without stopping because the stopping condition is missing or never reached.
// let i = 1;

// while(i <= 5){
//     console.log(i);
// }

// i is never increased
// Condition i <= 5 is always true
// So the loop runs forever.

//Fix for the Above Code
let i = 1;

while(i <= 5){
    console.log(i);
    i++;   // increment
}

//Now it stops after 5 iterations.


//Nested for loops:A nested for loop in JavaScript means a for loop inside another for loop.(A nested loop is a loop placed inside another loop.)
for(let i = 1; i <= 3; i++){
    
    for(let j = 1; j <= 2; j++){
        console.log(i, j);          //for every 'i' value 'j' runs 2 times
    }

}
// Outer loop runs first
// Inner loop runs completely for each outer loop iteration


//2.while loop:The while loop runs while the condition is true.
// Syntax
// while(condition){
//    code
// }

let num = 1;

while(num <= 5){
    console.log(num);
    num++;
}

//4.do...while Loop: This loop runs at least one time, even if the condition is false.
// Syntax
// do{
//    code
// }while(condition);

let i2 = 1;

do{
   console.log(i2);
   i2++;
}while(i2 <= 5);

//The code runs first, then the condition is checked.


//Loops with arrays:When we use loops with arrays in JavaScript, it means we repeat code to access each element of the array one by one.
let fruits = ["apple","banana","mango"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// apple
// banana
// mango

//for...in(gives indexes in array, keys in objects)
//for...in-->iterates  over indices in array and strings, iterates over keys in objects.

//in array and strings
let arr=[10,20,30];

for(let i in arr){
    console.log(i);  //gives index values(0,1,2)
    console.log(arr[i]); //gives values (10,20,30)
}

//strings
let str="Hello";
for(let i in str){
    console.log(i);  //0,1,2,3,4
}

//objects
const person={
    firstname:"Sangeeta",
    city:"Ilkal"
};

for(let keys in person){
    console.log(keys);     //firstname,city
}


//for...of(gives values)
//for...of-->iterates over values(actual datainside iterable)

//array
let arra=[1,3,4];
for(let value of arra){
    console.log(value);  //1,3,4
}

//strings 
let string="World";
for(let chars of string){
    console.log(chars);
}

//objects
let pers={
    lastname:"Gaddi",
    city:"Ilkal"
}

for(let values of pers){
    console.log(values);  //gives error (objects are not iterable)
}

//  Workaround(temporary solution): convert object to iterable
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);   // name Sangeeta, city Pune
}

// Plain objects don’t support for...of directly. You must use Object.keys(), Object.values(), or Object.entries() to make them iterable.


//.forEach(): A method on arrays that runs a function for each element.
//use --> When you want to do something with every item in an array.(“Apply this action to every item in the list)


let numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num * 2); // 2, 4, 6
});


//break :break is used to stop a loop immediately, even if the loop condition is still true.(break is used to exit a loop early.)
for(let i = 1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);    //The loop stops completely at 5.
}

// output:1
// 2
// 3
// 4