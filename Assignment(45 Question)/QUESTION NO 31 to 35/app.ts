// QUESTION NO 31

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let users:string[] =["Kashif","Ali","Huzaifa","Alayan"]
 if(users.length === 0){
   console.log(" We need to find some users!")
 }else{
    users=[]
    console.log("All users Have been removed")
 }

// QUESTION NO 32

//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let currentUsers:string[] = ["Ali","Haris","Hamza","Shakeel"]
let newUsers:string[] =["Huzaifa","Ali","Hamza","Saud"]
newUsers.map((nUser)=>{
let lowerCase:string=nUser.toLowerCase()
if(currentUsers.map(e=>e.toLowerCase()).includes(lowerCase)){
  console.log(`The Username ${nUser} is not available. Please enter a new username`)
}else{
  console.log(`The username ${nUser} is available`)
}

})





