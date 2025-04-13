const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )  //multiply each number of array by 10
                .map( (num) => num + 1)  //add 1 to each number of array
                .filter( (num) => num >= 40)   //filter the numbers greater than or equal to 40

console.log(newNums);