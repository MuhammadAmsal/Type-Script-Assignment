"use strict";
// QUESTION NO 11
// let friends:string[]=["Anus","Abdullah","Kashif","Imran"]
// friends.map((e)=>{
//     console.log(e)
// })
// QUESTION NO 12
// let friendsName:string[]=["Anus","Abdullah","Kashif","Imran"]
// friends.map((e)=>{
//     console.log(`Hello ${e} What's Up!  How are you`)
// })
// QUESTION NO 13
// let transportation:string[]=["motorcycle","cars","aeroplane","cycle"]
// transportation.map((e)=>{
// if(e==="motorcycle"){
// console.log(`I would like to own a Suzuki ${e}`)
// }else if(e==="cars"){
//     console.log(`I would like to own a Honda ${e}`)
// }else if(e==="aeroplane"){
//     console.log(`I would like to travel on a emirates ${e}`)
// }else if(e==="cycle"){
//     console.log(`I would like to own a branded ${e}`)
// }
// })
// QUESTIO NO 14
// let guestList1:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
//  guestList1.map((e)=>{
//   console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`)
//  })
// QUESTION NO 15
let guestList2 = ["HASAN", "ALI", "BABAR AZAM", "SHAHID AFRIDI"];
let pendingGuest = "SHAHID AFRIDI";
let newGuest = "WASIM";
guestList2.map((e) => {
    if (e === "SHAHID AFRIDI") {
        console.log(`Dear ${newGuest}, \n\n I would like to invite dinner \n\n Thank you.`);
    }
    else {
        console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`);
    }
});
