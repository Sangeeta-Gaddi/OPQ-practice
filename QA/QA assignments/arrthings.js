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



