//truthy and falsy values:every value is treated as either true or false when used in conditions like if, while, etc.
//1.Truthy Values :Truthy values are values that behave like true in a condition.

//2.Falsy Values :Falsy values behave like false in conditions.
//JavaScript has only 6 falsy values: false(Boolean false), 0(Zero), ""	(Empty string),null	(No value), undefined(Variable declared but no value), NaN


//alert() and prompt(): are simple browser functions used to interact with the user.

//1. alert():is used to show a message to the user.It only displays information and has one OK button.
//Syntax
//alert("message");

//alert("Welcome to JavaScript!"); //refer html code file

//2. prompt() :is used to take input from the user.It shows:Message,  Input box ,OK and Cancel buttons.
// let fname = prompt("Enter your name:");
// console.log(fname);                             //refer html file


//Immutable means cannot be changed after they are created.Once a string is created, you cannot modify its characters directly.
//If you try to change it, JavaScript actually creates a new string instead of modifying the old one.

//String Methods: string methods are functions used to work with text (strings).
//They help us change, search, or extract parts of a string.

//1. trim():Removes extra spaces from beginning and end of a string
let namee = "   Sangeeta    ";
console.log(namee.trim());     //Sangeeta

//2.length: Returns the number of characters in a string.
let str = "Nishita";
console.log(str.length);   //7

//3.toLowerCase():Converts all letters to small letters.
let text = "ADVIK";
console.log(text.toLowerCase());  //advik

//4.toUpperCase(): Converts all letters to capital letters.
let text2 = "swara";
console.log(text2.toUpperCase());   //SWARA

//String methods with arguments(methods takes some value/input inside brackets)
//5.indexOf(): Finds the position of a character or word.
let strr = "JavaScript";
console.log(strr.indexOf("S")); //4

//if the doesn't found , returns -1
let sent="Hi, I am Student";
console.log(sent.indexOf("Student"));  //9
console.log(sent.indexOf("From"));     //-1(From not prsent)


//6.includes(): Checks if a string contains a specific word.(returns tru)
let textt = "I love coding";
console.log(textt.includes("love"));

//7.slice(): Extracts a part of a string.
let strg = "JavaScript";
console.log(strg.slice(0,4));  //Java

//8.replace(): Replaces one value with another.
let tex = "I like JavaScript";
console.log(tex.replace("Java","Python"));   //I like PythonScript

//9.replaceAll() is a string method used to replace all occurrences of a word or character in a string.
//replaces every occurrence of a specified value with another value.
let txt = "I like Java. Java is easy.";
let result = txt.replaceAll("Java", "Python");

console.log(result);    //I like Python. Python is easy.


let txtt = "a-b-c-d";
let res = txtt.replaceAll("-", ":");

console.log(res);    //a:b:c:d


//Method Chaining: method chaining means calling multiple methods one after another on the same value in a single line.
//Using multiple methods on the same object in one continuous statement.
let input = "   hello world   ";
let ress = input.trim().toUpperCase();
console.log(ress);                     //HELLO WORLD

let msg = "javascript";
let rslt = msg.toUpperCase().slice(0,4);
console.log(rslt);                     //JAVA

//10. repeat() creates a new string by repeating the original string multiple times.
let inputt = "Hi ";
console.log(inputt.repeat(3));   //Hi Hi Hi 
















































