var c = 300
let a = 100
const b = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
   console.log("INNER: ", b);
   console.log("INNER: ", c); 
}



console.log(a);
console.log(b);
console.log(c); // not to use var because of block and function scope it is  a global variable



