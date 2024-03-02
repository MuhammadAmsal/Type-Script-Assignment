// QUESTION NO 21

import { countReset } from "console"

let studentDetail : studentDetail={
    name:"Haris",
    age:17,
    class:12,
    section:"A",
    isPresent:true,
}
interface studentDetail{
    name:string,
    age:number,
    class:number,
    section:string,
    isPresent:boolean
}
console.log(studentDetail)

// QUESTION NO 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error

let  cricketers:string[]=["Babar Azam","Rizwan","Wasim Akram","Shaheen"]
// intentional error
console.log(cricketers[4])

// Make sure you correct the error before closing the program
console.log(cricketers[0])

// QUESTION NO 23

let weather:string="rainy"
console.log(weather==='rainy'?'I predict true':"I predict wrong")

let todayWeather="stormy"
console.log(todayWeather==="rainy"?"I predict true":"I predict wrong")

// QUESTION 24

// Tests for equality and inequality with strings
console.log("Equality Test","A"==="A")
console.log("Unequality Test",("A" as string)==="B")

// Tests using the lower case function
console.log("lower case ","WORLD".toLowerCase()==="world")

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Greater than",5>3)
console.log("Less than",7<8)
console.log("Greater than or equal to",9>=9)
console.log("less than or equal to",8<=9)

//Tests using "and" and "or" operators
let weathr:string="stromy"
if(weathr==="rainy" || weathr==="stromy"){
    console.log(`Today weather is ${weathr}`)
}
let rollNo:number=22
let classNo:number=2
if(rollNo==22 && classNo==2){
    console.log("Your section is A")
}else{
    console.log("Your section is B")
}

// Test whether an item is in a array
let countries:string[]=["england","pakistan","australia","china"]
console.log("Pakistan includes in an array",countries.includes("pakistan"))

// Test whether an item is not in a array
console.log("Malaysia includes in an array",countries.includes("malaysia"))


// QUESTON NO 25

let alein:string="Green"
if(alein==="Green"){
    console.log("You have earned 5 points")
}

alein="red"
if(alein==="Green"){
    console.log("you have earned 5 points")
}













