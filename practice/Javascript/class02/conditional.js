console.log("Hello World!");  //Hello World!


//Template literals
let pencilPrice = 20;
let eraserPrice = 10;

//with '+""
console.log("The total price of prurchase " + (pencilPrice+eraserPrice)  + " Rupees.") //The total price of prurchase 30 Rupees.

//with template literals
console.log(`The total price of prurchase  ${ (pencilPrice+eraserPrice) } Rupees.`)  //The total price of prurchase 30 Rupees.

//Conditional Statements
//In JavaScript, conditional statements are used to make decisions in code.
//The program checks a condition. If the condition is true, it runs some code. If false, it runs something else.

//1. if:if statement :Used when you want code to run only if a condition is true.
// Syntax
// if(condition){
//    code to run
// }

let age = 19;

if( age >= 18 )
{
    console.log("He is eligible for voting.");
}

//He is eligible for voting.


//2. if-else:Used when you want one action if true and another if false.
// Syntax
// if(condition){
//    code if true
// }
// else{
//    code if false
// }

let age1 = 19;

if( age1 >= 18 )
{
    console.log("He can drive");
}else{
    console.log("He is minor, not allowed.")
}

//He can drive


//3. if...else if...else: Used when there are multiple conditions.
// Syntax
// if(condition1){
// }
// else if(condition2){
// }
// else{
// }

//last 'else' condtn is very imp and compulsory

let color = "green"

if(color == "red")
{
    console.log("STOP")
}
else if(color == "yellow")
{
    console.log("SLOW")
}
else if( color == "green")
{
    console.log("GO")
}
else{
    console.log("invalid color")
}
//GO

//4. switch: a switch statement is another way to use multiple conditions.It is often used when one variable needs to be compared with many values.

let color1="yellow"
switch(color1)
{
    case 'red':
            console.log("stop");
            break;
    case 'yellow':
            console.log('slowdown');
            break;
    case 'green':
            console.log('Go');
            break;
    default:
            console.log('Invalid color');
}
//slowdown


//POPCORN Example
let size = 'L';
 
if (size == 'XL') {
    console.log("price is Rs.250");
} else if (size == 'L') {
    console.log("price is Rs.200");
} else if (size == 'M') {
    console.log("price is Rs.100");
} else if (size == 'S') {
    console.log("price is Rs.50");
} else {
    console.log("Size not found.");
}
//price is Rs.200

//5.Nested if-else: nested if-else means an if-else statement inside another if or else block.
let score = 85

if(score > 35)
{
    if(score > 80)
    {
        console.log('A Grade.')
    }
    else
    {
        console.log("B grade")
    }
}
else
{
    console.log("Better luck next time")
}
//A Grade.

//combine conditions(using logical opertaors)
//good string is string that starts with letter 'a' and has lenght >3
let text = "apple";


if( (text[0]=='a') && (text.length>3) )
{
    console.log("Good string");
}
else
{
     console.log("Bad String");
}
//Good string

