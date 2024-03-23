// QUESTION NO 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let magician_Names:string[]=["Derren Brown","David Copperfield","David Blaine","Lance Burton"]

function show_magicians(a:string[]){
a.map((e)=>{
    console.log(e)
})
}
show_magicians(magician_Names)





// QUESTION NO 42

//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=["Derren Brown","David Copperfield","David Blaine","Lance Burton"]
 

function make_great(magician:string[]){
magician.forEach((e,index)=>{
   magician[index]=`Great ${e}`
})

}

make_great(magicians)


 
function show_magician(e:string[]){
 for (let i=0;i<=e.length;i++){
    console.log(e[i])
 }
}

show_magicians(magicians)




// QUESTION NO 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magician:string[]=["Derren Brown","David Copperfield","David Blaine","Lance Burton"]
let greatMagician:string[]=[]

function makeGreat(magician:string[]){


greatMagician= magician.map((e)=>{
    return `Great ${e}`
 })
    

}
makeGreat(magician)

function showMagician(e:string[]){
 for (let i=0;i<e.length;i++){
    console.log(e[i])
 }
}

showMagician(greatMagician)


// QUESTION NO 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
// that is being ordered. Call the function three times, using a different number of arguments each time.
 
function make_sandwich(item:string[]){
    console.log("Here are the things required to make a Sandwich")
for (let e of item){
   
    console.log(e)
}
}
make_sandwich(["Bread","Eggs","Chicken"])
make_sandwich(["Cheese","meat","vegetables"])
make_sandwich(["butter","fish","Gabbage"])




// QUESTION NO 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

 
function carInfo(manufaturer:string,modelName:string,...features:{[key:string]:any}[]){

let carDetail={
    manufaturer,
    modelName,
    ...Object.assign({},...features)
}
return carDetail
}

let car=carInfo("Toyota","Fortuner",{BodyStyle:"5-door SUV"},{Class:"Mid-size SUV"})
console.log(car)







