//(17/03/26) replace
//replace "h" by "o"
let str="khemu";
console.log(str.replace("h","o"));

//ussing loops
let strr="khemu";
let arr=strr.split("");

for(let i=0;i<arr.length;i++){
    if(arr[i]=="h"){
        arr[i]="o";
    }
}
let out=arr.join("");
console.log(out);

//
let input="khemu";
//will break the string wherever "h" occurs and joins the pieces back, inserting "o" inplace of "h"
let output=input.split("h").join("o");
console.log(output);