// singleton
// Object.create

// object literals

const mySym = Symbol("key1")  // Symbol is used to create the unique key


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]  
}

console.log(JsUser.email)  // by this we cant access the object properties 
console.log(JsUser["email"]) //both are same but this is a modern method 
console.log(JsUser["full name"])
console.log(JsUser[mySym])   

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // freeze is used to make the object immutable
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");  // function inside object
}
JsUser.greetingTwo = function(){  
    console.log(`Hello JS user, ${this.name}`); // this is used to access the object properties
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 