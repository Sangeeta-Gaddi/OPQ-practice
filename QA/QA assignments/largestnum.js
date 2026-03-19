//1.largest number in an array(using conditional statements and loops)




//using lops and conditonal statements
let arr=[5,39,4,60,34,20];
//assume the 1st element be the large element in array
let largestNum=arr[0];

//loop through array(looping start from index '1', becoz index '0' is considered as maxnumber)
for(let i=1;i<arr.length;i++){
    //check the curret element of array is greaterthan the assumed largest number
    if(arr[i]>largestNum){
        //if current element is greaterthan assumed largest number, then curret element becomes largest number
         largestNum=arr[i]
    }  
}
console.log("The largest number is:",largestNum);  //output:60

//using built-in fuctions(using Math.max(...array))
let array=[10,23,85,30,12];

//It returns the largest number.(it expects input as elements, not as array, so spread operator is used)
//...array (Spread Operator), The ... is called the spread operator.
// It spreads the array into individual values.
let max=Math.max(...array)

console.log("The max number in given array:", max);





//2. Find the largets  number by removing duplicates
let arra = [10, 23, 65, 30, 12, 65, 23, 30];
let unqArr=[];

//remove duplicates
for(let i=0; i<array.length; i++){
    
    //set isDuplicate to false initially
    let isDuplicate=false;

    //go through the uniqur array, initially it is empty, gothrough unique array
    for(let j=0; j<unqArr.length; j++){
        
        //if 
        if(arra[i]===unqArr[j]){
            isDuplicate=true;   //duplicate found so set to true, and break the loop
            break;
        }
    }

    if(!isDuplicate){
        unqArr.push(arra[i])
    }
}

console.log("The unique array from given array:", unqArr)

//now find largest number
let maxNum=unqArr[0];

for(let i=1; i<unqArr.length; i++){
    if(unqArr[i]>maxNum){
        maxNum=unqArr[i];
    }
}

console.log("The max number in given array is", maxNum);


//using built-in functions
let arrayy=[10,12,64,12,36,10,25,64];
let uniquearr=[];

for(let i=0; i<arrayy.length;i++){
    //If number is not already inside uniqueArray, we add it.
    if(!uniquearr.includes(arrayy[i])){
        uniquearr.push(arrayy[i]);
    }
}

console.log("Unique array:", uniquearr);

let maxx= Math.max(...arrayy);
console.log("The largest number is:",maxx);







