
// QUESTION NO 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

 let friends:string[]=["Anus","Abdullah","Kashif","Imran"]
 friends.map((e)=>{
     console.log(e)
 })

// QUESTION NO 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

 let friendsName:string[]=["Anus","Abdullah","Kashif","Imran"]
 friendsName.map((e)=>{
     console.log(`Hello ${e} What's Up!  How are you`)
 })

// QUESTION NO 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 let transportation:string[]=["motorcycle","cars","aeroplane","cycle"]
 transportation.map((e)=>{
 if(e==="motorcycle"){
 console.log(`I would like to own a Suzuki ${e}`)
 }else if(e==="cars"){
     console.log(`I would like to own a Honda ${e}`)
 }else if(e==="aeroplane"){
     console.log(`I would like to travel on a emirates ${e}`)
 }else if(e==="cycle"){
     console.log(`I would like to own a branded ${e}`)
 }
 })

// QUESTIO NO 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

 let guestList1:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
 
  guestList1.map((e)=>{
   console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`)
  })

// QUESTION NO 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList2:string[]=["HASAN","ALI","BABAR AZAM","SHAHID AFRIDI"]
 
let pendingGuest:string="SHAHID AFRIDI"
let newGuest:string="WASIM"

guestList2.map((e)=>{
    if(e==="SHAHID AFRIDI"){
    console.log(`Dear ${newGuest}, \n\n I would like to invite dinner \n\n Thank you.`)
    }else{
        console.log(`Dear ${e}, \n\n I would like to invite dinner \n\n Thank you.`)
    }
   })


