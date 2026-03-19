//reverse array usig splice


//declare the array
let array=[1,2,3,4,5];
//create emplty array to store the reversed elements
let reversed=[];

//loop until array becomes empty
while(array.length>0)
    {

    //remove last element usig splice(array.length-1, 1)-->will remove one element presnt at last index(i.e element at 4th idex firtst)
    //[0] array indexing, it is used because, splice returns the array of last  removed element i.e [5], so to extract only the value, '5' we using indexing and push that element to reversed
    let element=array.splice(array.length-1,1)[0];

    //push that elemnet into reversed array
     reversed.push(element);
}

//copy the reversed back to array
array=reversed;
console.log(array)


//way2: using splice and pop()
let arra=[1,2,3,4,5];
let revers=[];

while(arra.length>0){
    //pop() will remove and return last element
    let elemes=arra.splice(arra.length-1,1).pop()

    revers.push(elemes)
}
arra=revers;

console.log(arra);



//way 3: using splice and builti-in  ftns
let arr=[1,2,3,4,5];

//remove all elements using splice(splice array from 0 idex to arraylength(array length is 5, so upto 4th index it will splice ))
let removedElems=arr.splice(0, arr.length);

//reverse the removed array(becoz splice returns the array of values)
removedElems.reverse();

//put elements back to array
arr.push(...removedElems);

console.log(arr);


//using array destructuring
let arrayy=[10,20,30,40,50];
let first=0;
let last=arrayy.length-1;

while(first<last){
    [arrayy[first],arrayy[last]]=[arrayy[last],arrayy[first]];

    first++;
    last--;
}
console.log(arrayy)
