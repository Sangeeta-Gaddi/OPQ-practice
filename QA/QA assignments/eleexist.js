//Check if element exist or not in array

let arr=[1,3,4,5,12];
let element=12

if(arr.includes(element)){
    console.log("The element exist in the array");
}else{
    console.log("The element doesn't exist")
}
//The element exist in the array

//using loops
let arra=[2,3,4,13,20];
let elem=13;
let found=false;

for(let i=0;i<arra.length;i++){
    if(arra[i]===elem){
        found=true;
        console.log(`The element  ${arra[i]} exist in the array`);
        break;
    }
}

if(!found){
    

    console.log("The element doesn't exist")
}
//The element  13 exist in the array