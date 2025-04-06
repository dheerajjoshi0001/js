const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}  // / object literal

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}  //for loop in object

const programming = ["js", "rb", "py", "java", "cpp"] // array literal
for (const key in programming) {
    //console.log(programming[key]);
}  // for loop in array

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")  //map is a collection of key-value pairs

// for (const key in map) {
//     console.log(key);  //
// }