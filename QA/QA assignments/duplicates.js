//print duplicates

let arr=[1,2,3,2,5,1,6,1];
let duplicates=[];


for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
           if(!duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
           }
        
        
    }
    }
}
console.log(duplicates);   //[ 1, 2 ]


//
// let arr=[1,2,3,2,4,5,1,6,1];


// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
           
//         console.log(arr[i]);
//         break;
//     }
//     }
// }