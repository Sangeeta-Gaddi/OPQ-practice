//stack data structure in JavaScript step by step. A stack works on the principle of LIFO (Last In, First Out) i.e the last item you put in is the first one that comes out.


//we can construct stack using Array

//create empty stack using empty array
let stack=[];

//fnction to add element(push)
function pushElem(elem){
    stack.push(elem);

console.log("Added element:",elem);
console.log("Now the Stack will be", stack);
}
pushElem(10);
pushElem(20);
pushElem(30);


//function to remove element(pop)
function popElem(){
    if(stack.length===0){
        console.log("Stack is empty,nothing to remove");
        return;
    }
    let removed=stack.pop();
    console.log("The removed element is:",removed);
    console.log("Now stack will be:",stack);
}
popElem();

//function peek(gives us the top element)
function peekElem(){
    if(stack.length==0){
        console.log("Stack is empty, nothing on top")
    }
    console.log("Top element is:", stack[stack.length-1]);
}

peekElem();

//function to check size of the stack
function stackSize(){
    size=stack.length
    console.log("Size of stack is:",size);
}

stackSize();

//function to check stack is empty
function isempty(){
    console.log("Is stack empty:", stack.length==0);
}

isempty();

//output
// Added element: 10
// Now the Stack will be [ 10 ]
// Added element: 20
// Now the Stack will be [ 10, 20 ]
// Added element: 30
// Now the Stack will be [ 10, 20, 30 ]
// The removed element is: 30
// Now stack will be: [ 10, 20 ]
// Top element is: 20
// Size of stack is: 2
// Is stack empty: false