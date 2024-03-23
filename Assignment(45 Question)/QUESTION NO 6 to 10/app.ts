
// QUESTION NO 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName:string = "    \n\tEllon Musk\t\n    ";
console.log(personName)
 let name_Without_White_Space=personName.trim();
 console.log(name_Without_White_Space)

// QUESTION NO 7,8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
 console.log(4+4)
 console.log(12-4)
 console.log(4*2)
 console.log(16/2)

// QUESTION NO 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
 let favouriteNumber:number=7;
 let message:string=`My Favourite Number is ${favouriteNumber}`
 console.log(message)

// QUESTION NO 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

 // THIS PROGRAM IS WRITTEN BY AMSAL
 // DATE:19-2-24
 // THIS PROGRAM ADD TWO NUMBER

 let num1:number=4
 let num2:number=6
 console.log(num1+num2)

// THIS PROGRAM IS WRITTEN BY AMSAL
// DATE:19-2-24
// THIS PROGRAM PRINTS EVEN NUMBER & ODD NUMBER FROM 1 to 10

for (let i=1;i<=10;i++){
if(i%2===0){
    console.log(`${i} is an EVEN Number`)
}else{
    console.log(`${i} is an ODD Number`)
}
}
