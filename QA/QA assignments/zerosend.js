let arr=[1,2,0,3,0,5];
let outputArr=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        outputArr.push(arr[i]);
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        outputArr.push(arr[i]);
    }
}

console.log(outputArr);   //[ 1, 2, 3, 5, 0, 0 ]



//using count
let arra=[12,9,0,7,15,0];
let result=[];
let count=0;

for(let i=0;i<arra.length;i++){
    if(arra[i]==0){
        count++;
    }else{
        result.push(arra[i])
    }
}

//add zero at end
for(let j=0;j<count;j++){
    result.push(0);
}
console.log(result);   //[ 12, 9, 7, 15, 0, 0 ]

//using splice
let arr1=[12,3,2,0,8,0];
let len=arr1.length;

for(let i=0;i<len;i++){
    if(arr1[i]==0){
        arr1.splice(i,1);
        arr1.push(0);
        i--;
        len--;
    }
}
console.log(arr1);   //[ 12, 3, 2, 8, 0, 0 ]