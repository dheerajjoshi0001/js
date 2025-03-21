function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() // this is the function call

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// } // this is the function declaration

function addTwoNumbers(number1, number2){        //parameter : num 1 num 2

    // let result = number1 + number2
    // return result
    return number1 + number2  //return is used to return the value from the function otherwise the result value will be undefined
} // this is the function declaration



const result = addTwoNumbers(3, 5) // argument : 3,5 

// console.log("Result: ", result); //both ways are correct



function loginUserMessage(username = "sam"){    // if we define the username by default the define
    // username will appear and if we add new then it will overwrite it 

    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`  //return gives its dt  value rather then undefined
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))


