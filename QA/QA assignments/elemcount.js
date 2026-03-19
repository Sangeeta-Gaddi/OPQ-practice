let array=[1,2,3,2,4,2];
let element=2;
let count=0;

for(let i=0;i<array.length;i++){
    if(array[i]==element){
        count++;
    }
}
console.log(`The element ${element} is having count ${count}`);


//using foreach
let arr=[1,2,3,2,4,2];
let target=2;
let countt=0;

arr.forEach(el=>{
    if(el===target){
        countt++;
    }
});

console.log(countt);   //3