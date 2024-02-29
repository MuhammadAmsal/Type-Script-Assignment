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
