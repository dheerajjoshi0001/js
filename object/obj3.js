const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  // this is the old way to access the object properties

const {courseInstructor: instructor} = course // this is the modern way to access the object properties

// console.log(courseInstructor);
console.log(instructor);  

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } // this is the json object

[
    {},
    {},
    {}
] // this is the json array