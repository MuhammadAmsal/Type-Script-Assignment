"use strict";
// QUESTION NO 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["Kashif", "Ali", "Huzaifa", "Alayan"];
if (users.length === 0) {
    console.log(" We need to find some users!");
}
else {
    users = [];
    console.log("All users Have been removed");
}
// QUESTION NO 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ["Ali", "Haris", "Hamza", "Shakeel"];
let newUsers = ["Huzaifa", "Ali", "Hamza", "Saud"];
newUsers.map((nUser) => {
    let lowerCase = nUser.toLowerCase();
    if (currentUsers.map(e => e.toLowerCase()).includes(lowerCase)) {
        console.log(`The Username ${nUser} is not available. Please enter a new username`);
    }
    else {
        console.log(`The username ${nUser} is available`);
    }
});
// QUESTION NO 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinalEnding;
for (let num of numbers) {
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
// QUESTION NO 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzas = ["Cheese Pizza", "Sicilian Pizza", "BBQ Pizza"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} .`);
}
console.log(`I really love pizza!`);
// QUESTION NO 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Dog", "Horse", "Wolf"];
for (let e of animals) {
    console.log(`A ${e} would make a great pet`);
}
console.log(" Any of these animals would make a great pet!");
