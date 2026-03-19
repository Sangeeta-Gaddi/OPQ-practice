let arr=[1,2,12,34,20];
let max=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log("The max number in the array:",max)  //The max number in the array: 34

//using Math.max
let array=[1,3,7,9,10];

let maxx=Math.max(...array);
console.log("The max number:",maxx);  //The max number: 10


/////Minimum number
let arra=[1,2,12,34,20];
let min=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("The min number in the array:",min)  //The min number in the array: 1

//using Math.min
let arrayy=[3,7,9,10];

let minn=Math.min(...arrayy);
console.log("The min number:",minn);  //The min number: 3
