// Array:  data structure used to store multiple values in a single variable.
//1. Creating an Empty Array:You can create an empty array and add values later.
let numbers = [];
numbers.push(10);
numbers.push(20);

console.log(numbers);  //[ 10, 20 ]

//2.Using new Array() Constructor:Another way to create an array.
let colors = new Array("Red", "Green", "Blue");
console.log(colors);     //[ 'Red', 'Green', 'Blue' ]

//arrays are mutable:
//Mutable means the value can be changed after it is created. we can modify, add, or remove elements from an array.
//add items,  remove items, replace items anytime.

//1.push: Adds an element at the end of the array.
//2.pop(): Removes the last element from the array.
//3.unshift(): Adds an element at the beginning of the array.
//4.shift(): Removes the first element of the array.

let score = [98, 78, 40, 89]

score.push(35)
console.log(score);  //[ 98, 78, 40, 89, 35 ]

console.log(score.pop())
console.log(score);   //35

score.unshift(90)
console.log(score);  //[ 90, 98, 78, 40, 89 ]

console.log(score.shift())
console.log(score);   //[ 98, 78, 40, 89 ]


//5.indexOf(): Finds the position of an element.
//6.includes(): Checks if an element exists in the array.
//7.concat(): Joins two arrays.

let primary=["red","yellow","green","pink"];
let secondary=["white","orange"];

console.log(primary.indexOf("pink"));  //3
console.log(primary.indexOf("red"));   //0

console.log(primary.includes("pink"));  //true
console.log(secondary.includes("pink")); //false

console.log(primary.concat(secondary)); //[ 'red', 'yellow', 'green', 'pink', 'white', 'orange' ]


//7.reverse:reverse the elements in the array.
let arr=[1,2,3,4,5];
console.log(arr.reverse());   //[ 5, 4, 3, 2, 1 ]

//8.slice(): Returns part of an array.
let colorss=[ 'red', 'yellow', 'green', 'pink', 'white', 'orange' ];

//slice starts from 2 goes upto end
console.log(colorss.slice(2));   //[ 'green', 'pink', 'white', 'orange' ]
//doesn't include last index element
console.log(colorss.slice(2,4));  //[ 'green', 'pink' ]
//can give neative index(arralength-given value)==>(6-2=4(from 4th index  to end))
console.log(colorss.slice(-2));  //[ 'white', 'orange' ]

//9.splice() is an array method used to add, remove, or replace elements in an array.
//splice starts from 4t index goes upto end
console.log(colorss.splice(4)); //[ 'white', 'orange' ]
//specify number od elements u want to splice(from index 0, i want to splice 2 elements)
console.log(colorss.splice(0,2)); //[ 'red', 'yellow' ]
//specify in which element u want to replace by other element(splice from zero index, remove 1 element,add pink at  index 0)
console.log(colorss.splice(0,1,"pink")); 

//10.sort:an array method used to arrange elements in order.By default, it sorts elements as strings in ascending order (A → Z).
//1.Sorting Strings
let fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits);  //[ 'Apple', 'Banana', 'Mango' ]

//2.Sorting Numbers
let numberss = [5, 2, 8, 1];
numberss.sort();
console.log(numberss);  //[ 1, 2, 5, 8 ]

//But sometimes numbers behave differently because sort treats them as strings.
let nums = [10, 2, 5];
nums.sort();
console.log(nums);   //[10, 2, 5](Because "10" comes before "2" alphabetically.)