
// QUESTION NO 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName: string="Eric"
console.log(`Hello ${personName}, would you like to learn some Python today?`)

// QUESTION NO 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

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
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let authorName: string="Albert Einstein"
let quote: string ="Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning"
console.log(`${authorName} once said, ${quote}`)

// Question 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let author: string="Albert Einstein"
let quote2: string="Life is like riding a bicycle. To keep your balance, you must keep moving"
console.log(`${author} once said, ${quote2}`)
