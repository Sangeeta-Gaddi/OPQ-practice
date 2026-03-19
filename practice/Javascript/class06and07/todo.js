//to maintain task list(usercan enter 'n' number of taks)
//create empty array
let todo=[];

//i will ask user propt, wether wt he wants to do
let req=prompt("please enter your request");

//if user request is other than "quit", then only enters loop
while(req!="quit"){
    if(req=="list"){

        //list all requests in todo
        for(task of todo){
            console.log(task);
        }
    }else if(req=="add"){
        let task=prompt("please enter the task you want do/add");
        //i will push that task to tasklist
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let task=prompt("please enter the index of task u want to delete");
        //check the index of task user entered in the tasklist and if present then splice that element(becoz user want to delete it)
        let index=todo.indexOf(task);
        if(index>=0){
            todo.splice(index,1);
            console.log("task deleted");
        }else{
            console.log("task u are asking to delete is Invalid.")
        }
    }else{
        //if user request other than add,delete or quit
        console.log("Wrong Request!")
    }
    req=prompt("please enter your request")
}

///Check output in browser