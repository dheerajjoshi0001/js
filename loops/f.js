const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item  //forEach() method executes a provided function once for each array element
} )

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {  //filter() method creates a new array with all elements that pass the test implemented by the provided function
    return num > 4
} )

const newNum = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)  //push method adds new items to the end of an array
    }
} )

console.log(newNums);


