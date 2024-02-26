"use strict";
// QUESTION NO 16
let guestList = ["HASAN", "ALI", "BABAR AZAM", "SHAHID AFRIDI"];
let newGuest1 = "KASHIF";
let newGuest2 = "HUZAIFA";
let newGuest3 = "HAMZA";
guestList.unshift(newGuest1);
guestList.splice(3, 0, newGuest2);
guestList.push(newGuest3);
console.log(guestList);
guestList.map((e) => {
    console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`);
});
