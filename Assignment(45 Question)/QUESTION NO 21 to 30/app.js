"use strict";
// QUESTION NO 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let studentDetail = {
    name: "Haris",
    age: 17,
    class: 12,
    section: "A",
    isPresent: true,
};
console.log(studentDetail);
// QUESTION NO 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error
let cricketers = ["Babar Azam", "Rizwan", "Wasim Akram", "Shaheen"];
// intentional error
console.log(cricketers[4]);
// Make sure you correct the error before closing the program
console.log(cricketers[0]);
// QUESTION NO 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//true
let weather = "rainy";
console.log(weather === 'rainy' ? 'I predict true' : "I predict wrong");
//false
let todayWeather = "stormy";
console.log(todayWeather === "rainy" ? "I predict true" : "I predict wrong");
//true
let today = "Monday";
console.log(today === "Monday" ? "I predict true" : "I predict wrong");
//false
today = "Wednesday";
console.log(today === "Monday" ? "I predict true" : "I predict wrong");
// true
let personName = "Amsal";
console.log(personName === "Amsal" ? "I predict true" : "I predict wrong");
// false
personName = "Ali";
console.log(personName === "Amsal" ? "I predict true" : "I predict wrong");
// true
let mountainName = "Karakoram";
console.log(mountainName === "Karakoram" ? "I predict true" : "I predict wrong");
// false
mountainName = "Mount Everest";
console.log(mountainName === "Karakoram" ? "I predict true" : "I predict wrong");
// QUESTION 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log("Equality Test", "A" === "A");
console.log("Unequality Test", "A" === "B");
// Tests using the lower case function
console.log("lower case ", "WORLD".toLowerCase() === "world");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Greater than", 5 > 3);
console.log("Less than", 7 < 8);
console.log("Greater than or equal to", 9 >= 9);
console.log("less than or equal to", 8 <= 9);
//Tests using "and" and "or" operators
let weathr = "stromy";
if (weathr === "rainy" || weathr === "stromy") {
    console.log(`Today weather is ${weathr}`);
}
let rollNo = 22;
let classNo = 2;
if (rollNo == 22 && classNo == 2) {
    console.log("Your section is A");
}
else {
    console.log("Your section is B");
}
// Test whether an item is in a array
let countries = ["england", "pakistan", "australia", "china"];
console.log("Pakistan includes in an array", countries.includes("pakistan"));
// Test whether an item is not in a array
console.log("Malaysia includes in an array", countries.includes("malaysia"));
// QUESTON NO 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alein = "Green";
if (alein === "Green") {
    console.log("You have earned 5 points");
}
else {
    console.log("sorry you lose");
}
// QUESTION NO 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let aleinColor = "Green";
if (aleinColor === "Green") {
    console.log("You have earned 5 points for shooting the Alein");
}
else {
    console.log("just earned 10 points");
}
aleinColor = "yellow";
if (aleinColor === "Green") {
    console.log("You have earned 5 points for shooting the Alein");
}
else {
    console.log("just earned 10 points");
}
// QUESTION NO 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version 1
// let aleinColor1:string="Green"
// if (aleinColor1==="Green"){
//     console.log("You earn 5 points")
// }else if(aleinColor1==="Yellow"){
//     console.log("You earn 10 points")
// }else if(aleinColor1==="Red"){
//     console.log("You earn 15 points")
// }else {
//     console.log("Please select color")
// }
// // version 2
// aleinColor1="Yellow"
// if (aleinColor1==="Green"){
//     console.log("You earn 5 points")
// }else if(aleinColor1==="Yellow"){
//     console.log("You earn 10 points")
// }else if(aleinColor1==="Red"){
//     console.log("You earn 15 points")
// }else {
//     console.log("Please select color")
// }
// // version 3
// aleinColor1="Red"
// if (aleinColor1==="Green"){
//     console.log("You earn 5 points")
// }else if(aleinColor1==="Yellow"){
//     console.log("You earn 10 points")
// }else if(aleinColor1==="Red"){
//     console.log("You earn 15 points")
// }else {
//     console.log("Please select color")
// }
// QUESTION NO 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 34;
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else if (age >= 65) {
    console.log("The person is elder");
}
