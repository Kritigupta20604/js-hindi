const name = "kriti"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kriti-g')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne= "  kriti  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kriti.com/kriti%20gupta"

console.log(url.replace('%20', ' '))

