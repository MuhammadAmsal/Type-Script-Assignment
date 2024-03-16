"use strict";
// QUESTION NO 16
// let guestList:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
// let newGuest1:string="KASHIF";
// let newGuest2:string="HUZAIFA";
// let newGuest3:string="HAMZA";
// guestList.unshift(newGuest1)
// guestList.splice(3,0,newGuest2)
// guestList.push(newGuest3)
// console.log(guestList)
// guestList.map((e)=>{
//       console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`)
//     })
// QUESTION NO 17
let guestList = ["HASAN", "ALI", "BABAR AZAM", "SHAHID AFRIDI"];
let newGuest1 = "KASHIF";
let newGuest2 = "HUZAIFA";
let newGuest3 = "HAMZA";
guestList.unshift(newGuest1);
guestList.splice(3, 0, newGuest2);
guestList.push(newGuest3);
console.log(guestList);
// console.log(guestList)
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Dear ${removeGuest}, \n\n Sorry you are not invited \n\n Thank you.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, \n\n I would like to invite dinner \n\n Thank you.`);
}
guestList.splice(0, 2);
console.log(guestList);
// QUESTION NO 19
console.log(`The no of invited people are : ${guestList.length}`);
// QUESTION NO 18
let places = ["Brazil", "Australia", "Denmark", "China"];
// Sorted in Alphabetical order
console.log(`Original Array :${places}`);
let sorted_Array = [...places].sort();
console.log(`In Alphabetical Order:${sorted_Array}`);
// Sorted in Reverse alphabetical order
console.log(`Original Array :${places}`);
let reverseAlphabetical = [...places].sort((a, b) => b.localeCompare(a));
console.log(`In Reverse Alphabetical Order:${reverseAlphabetical}`);
// Print in Reverse Order
console.log(`Original Array :${places}`);
let reversed_order = [...places].reverse();
console.log(`Reverse Array: ${reversed_order}`);
// reverse the order of your list again
let againReverse = reversed_order.reverse();
console.log(`Again Reversed : ${againReverse}`);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log([...places].sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log([...places].sort().reverse());
// QUESTION NO 20
let languages = ["urdu", "english", "spanish", "french", "parsi"];
languages.map((e) => {
    console.log(`• ${e}`);
});
