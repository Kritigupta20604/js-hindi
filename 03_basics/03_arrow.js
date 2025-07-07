const user ={
    username: "kriti",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);  
        // console.log(this);  
    }
}

// user.welcomeMessage()
// user.username = "kay"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kriti"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "kriti"
//     console.log(this.username);
// }

const chai = () => {
    let username = "kriti"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "kriti"})


console.log(addTwo(3, 4))

const myArray = [2, 5, 3, 4, 7, 8]

myArray.forEach()