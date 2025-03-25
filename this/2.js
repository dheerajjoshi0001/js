// .this in funnction
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }   // this is the global object in the browser and in nodejs it is the module.exports object

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }   

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}  // this is a arrow function and it does not have its own this keyword


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   // this is the old way to write the arrow function
// }

// const addTwo = (num1, num2) =>  num1 + num2  // this is the new way to write the arrow function

// const addTwo = (num1, num2) => ( num1 + num2 )

const user = (num1, num2) => ({username: "hitesh"})  //u have to use the () to return the object in the arrow function

const addTwo = (num1, num2) => (console.log(addTwo(3, 4)))

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()