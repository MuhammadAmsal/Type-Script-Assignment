// QUESTION NO 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

 let guestList:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
 let newGuest1:string="KASHIF";
 let newGuest2:string="HUZAIFA";
 let newGuest3:string="HAMZA";
 
 guestList.unshift(newGuest1)
 guestList.splice(3,0,newGuest2)
 guestList.push(newGuest3)

 console.log(guestList)

 guestList.map((e)=>{
       console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`)
     })

// QUESTION NO 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
let newGuest4:string="KASHIF";
let newGuest5:string="HUZAIFA";
let newGuest6:string="HAMZA";
 
guestList.unshift(newGuest4)
guestList.splice(3,0,newGuest5)
guestList.push(newGuest6)

console.log(guestList)

 
// console.log(guestList)
while(guestList.length>2){
  let removeGuest=guestList.pop();
  console.log(`Dear ${removeGuest}, \n\n Sorry you are not invited \n\n Thank you.`)
}

for (let i=0;i<guestList.length;i++){
console.log(`Dear ${guestList[i]}, \n\n I would like to invite dinner \n\n Thank you.`)
}  
guestList.splice(0,2)
console.log(guestList)

// QUESTION NO 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



console.log(`The no of invited people are : ${guestList.length}`)

// QUESTION NO 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string[]=["Brazil","Australia","Denmark","China"]

// Sorted in Alphabetical order

console.log(`Original Array :${places}`)
let sorted_Array=[...places].sort()
console.log(`In Alphabetical Order:${sorted_Array}`)

// Sorted in Reverse alphabetical order
console.log(`Original Array :${places}`)
let reverseAlphabetical=[...places].sort((a, b) => b.localeCompare(a));
console.log(`In Reverse Alphabetical Order:${reverseAlphabetical}`)

// Print in Reverse Order
console.log(`Original Array :${places}`)
let reversed_order=[...places].reverse()
console.log(`Reverse Array: ${reversed_order}`)
// reverse the order of your list again
let againReverse=reversed_order.reverse()
console.log(`Again Reversed : ${againReverse}`)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log([...places].sort())

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log([...places].sort().reverse())

// QUESTION NO 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages: string[]=["Urdu","English","Spanish","French","Parsi"]
languages.map((e)=>{
console.log(`• ${e}`)
})
