function calculateCartPrice(val1, val2, ...num1){
    return num1
}  

// console.log(calculateCartPrice(200, 400, 500, 2000))  // [500, 2000] in num 1 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);  // Username is sam and price is 199
} // object in function passed

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})   // object directly passed in function

console.log(handleObject)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}  // araay in function passed

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));  // directly array passed in function

