//Javascript: Javascriptis scripting language for web,it is used to create and control website dynamically.
// 1)Programming: Programming can be defind as the getting work done from computer.
// 2)Language: It is a set of rules to communicate with the computer.
// 3)Program: Set of instructions written using a programming language to perform specific task.


//variables
// Variables:Refers to data storage, will helps to store the data.It is name of storage location.
// Syntax: keyword variable (assignment operator) storing value
// Example: let num=6;

// There are diffrent types of variables in Javascript:
// 1.Numbers
// 2.String
// 3.Boolean
// 4.Array
// 5.Object
// 6.Null 
// 7.Undefined

     let num=10;
    console.log(num); //output:10
    console.log(typeof(num));//output:number

    let str="Swara";
      console.log(str); //output:Swara
      console.log(typeof(str));//output:string

    const bool=false;
      console.log(bool);//output:false
      console.log(typeof(bool));//output:boolean

    var array=[1,2,3,4,5];
      console.log(array);//output:[1,2,3,4,5]
      console.log(typeof (array));//output:object

    let obj={
        name:"Nishita", 
        age:20
    };
       console.log(obj);//output:{name:"Nishita", age:20}
       console.log(typeof(obj));//output:object  

//null means an empty value that is intentionally assigned by the programmer.
       let val=null;
       console.log(val);          //null
       console.log(typeof(val));  //object

       
// undefined :-undefined means a variable is declared but no value is assigned yet.
        let x;
        console.log(x);           //undefined
        console.log(typeof(x));  //undefined