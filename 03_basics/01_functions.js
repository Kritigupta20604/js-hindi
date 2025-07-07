function sayMyName(){
console.log("K");
console.log("R");
console.log("I");
console.log("T");
console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 
}

const result = addTwoNumbers(3, 5)
// console.log("result:", result);


function loginUserMessage(username = "abc"){
    if(!username){
        console.log("please enter a username");
        return
    }    
    return `${username} just logged in`
}

// console.log(loginUserMessage("kriti"));
// console.log(loginUserMessage("kriti"));

function calculateCarPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 2000));

const user = {
    username: "kriti",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "kriti",
    price: 233
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 3000]));
