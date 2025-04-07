const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
} //used to print the array elements one by one

coding.forEach(printMe)  // //used to print the array elements one by one

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} ) //used to get the index and array in forEach loop

