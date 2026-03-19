let arra=[12,10,3,49,5,2];
let larg=-Infinity;  //largest
let seclarg=-Infinity; //second largest

for(let i=0;i<arra.length;i++){
    if(arra[i]>larg){
        seclarg=larg;
        larg=arra[i];
        
    }else{
        if(arra[i]>seclarg && arra[i]!==larg)
            seclarg=arra[i]
    }
}

console.log("Second largest:", seclarg);  //Second largest: 12

