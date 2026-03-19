//sum of array

let array=[1,2,3,4]
let sum=0;

for(i=0;i<array.length;i++){
    sum=sum+array[i]
}
console.log("The sum of array elemets is:", sum);   //The sum of array elemets is: 10

//using for...of loop
let arr=[1,2,3,4];
let summ=0;

for(let value of arr){
    summ=summ+value;
}
console.log("Output",summ);   //Output 10

//using while loop
let arra=[1,2,3,4];
let suum=0;
let i=0;

while(i<arra.length){
    suum=suum+arra[i];
    i++;
}

console.log(suum);     //10




