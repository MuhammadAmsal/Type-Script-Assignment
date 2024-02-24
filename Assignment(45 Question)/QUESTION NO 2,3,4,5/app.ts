
// QUESTION NO 2

let personName: string="Eric"
console.log(`Hello ${personName}, would you like to learn some Python today?`)

// QUESTION NO 3

//convert Upper Case
let person1: string="amsal"
console.log(person1.toUpperCase())

//convert Lower Case
 let person2: string="AMSAL"
 console.log(person2.toLowerCase())

 // Title Case
 function titleCase(str:string) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase("muhammad amsal"));
 

//Question no 4

let authorName: string="Albert Einstein"
let quote: string ="Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning"
console.log(`${authorName} once said, ${quote}`)

// Question 5

let author: string="Albert Einstein"
let quote2: string="Life is like riding a bicycle. To keep your balance, you must keep moving"
console.log(`${author} once said, ${quote2}`)