//indexOf():Returns first position of element.
//lastIndexOf():Returns last position of element.

//i want to print the duplicates elements in output
// let arr=[1,2,3,4,4,2];
// let duplicates=[];

// for(let i=0;i<arr.length;i++){
//     //if first and last index are different it means element is having 2 indexes(i.e, appearing more than once(duplicate))
//     //and also check if it is not in the array, push it to array
//     if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) ){
//         duplicates.push(arr[i]);
//     }
// }

// console.log(duplicates);   //[2,4,4,2]


//using two loops
let arr1=[1,2,3,4,2,5];
let duplicates1=[];
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
        duplicates1.push(arr1[i])
        duplicates1.push(arr1[j])
        }
}
}

console.log(duplicates1); //[2,2]


///if u want ur duplicates to appear once only then add
//!duplicates.includes(arr[i])--->if duplicates doesn't not include the current element then only add it to duplicate array
let arr=[1,2,3,4,4,2];
let duplicates=[];

for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
    }
}

console.log(duplicates);   //[ 2, 4 ]