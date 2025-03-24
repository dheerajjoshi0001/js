
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // it will work because of hoisting 

function addone(num){
    return num + 1
}



// console.log(addTwo(5)) // it will not work because of hoisting function is declared const before initialisation function can't be used
// ;


const addTwo = function(num){
    return num + 2
    
}


console.log(addTwo(5))  